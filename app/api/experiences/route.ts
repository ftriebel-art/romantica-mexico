import { NextRequest } from "next/server";
import { destinationCatalog, type DestinationSlug } from "@/app/lib/destinationCatalog";

type ApiExperience = {
  title: string;
  summary: string;
  bookingUrl: string;
  source: "viator" | "tripadvisor";
};

const isDestinationSlug = (value: string): value is DestinationSlug => {
  return value in destinationCatalog;
};

const getFallbackExperiences = (slug: DestinationSlug): ApiExperience[] => {
  return destinationCatalog[slug].fallbackExperiences.map((item) => ({
    ...item,
    source: "tripadvisor" as const,
  }));
};

export async function GET(request: NextRequest) {
  const slugParam = request.nextUrl.searchParams.get("slug") ?? "cancun";
  const slug = isDestinationSlug(slugParam) ? slugParam : "cancun";
  const destination = destinationCatalog[slug];

  const viatorApiKey = process.env.VIATOR_API_KEY;
  const viatorBaseUrl = process.env.VIATOR_API_BASE_URL ?? "https://api.viator.com/partner";

  if (!viatorApiKey) {
    return Response.json({
      source: "tripadvisor",
      experiences: getFallbackExperiences(slug),
    });
  }

  try {
    const response = await fetch(`${viatorBaseUrl}/products/search`, {
      method: "POST",
      headers: {
        Accept: "application/json;version=2.0",
        "Accept-Language": "en-US",
        "Content-Type": "application/json",
        "exp-api-key": viatorApiKey,
      },
      body: JSON.stringify({
        textQuery: destination.name,
        pagination: { start: 1, count: 6 },
        sorting: { sort: "TRAVELER_RATING", order: "DESCENDING" },
        currency: "USD",
      }),
      cache: "no-store",
    });

    if (!response.ok) {
      throw new Error(`Viator API failed with status ${response.status}`);
    }

    const payload = await response.json();
    const products = Array.isArray(payload?.products) ? payload.products : [];

    const experiences: ApiExperience[] = products.slice(0, 6).map((product: any) => {
      const title = product?.title ?? "Popular Experience";
      const summary =
        product?.shortDescription ??
        product?.description ??
        "Curated experience available through our Viator partner feed.";
      const bookingUrl = product?.productUrl
        ? `https://www.viator.com${product.productUrl}`
        : destination.tripadvisorThingsUrl;

      return {
        title,
        summary,
        bookingUrl,
        source: "viator",
      };
    });

    if (experiences.length === 0) {
      return Response.json({
        source: "tripadvisor",
        experiences: getFallbackExperiences(slug),
      });
    }

    return Response.json({
      source: "viator",
      experiences,
    });
  } catch {
    return Response.json({
      source: "tripadvisor",
      experiences: getFallbackExperiences(slug),
    });
  }
}
