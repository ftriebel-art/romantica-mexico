import { notFound } from "next/navigation";

import DestinationPage, {
  generateDestinationMetadata,
} from "@/app/components/DestinationPage";

import { destinations } from "@/app/lib/destinations";

type PageProps = {
  params: Promise<{
    slug: string;
  }>;
};
export async function generateStaticParams() {
  return Object.keys(destinations).map((slug) => ({
    slug,
  }));
}
export async function generateMetadata({
  params,
}: PageProps) {
  const { slug } = await params;

  const destination =
    destinations[
      slug as keyof typeof destinations
    ];

  if (!destination) {
    return {};
  }

  return generateDestinationMetadata(destination);
}

export default async function DynamicDestinationPage({
  params,
}: PageProps) {
  const { slug } = await params;

  const destination =
    destinations[
      slug as keyof typeof destinations
    ];

  if (!destination) {
    notFound();
  }

  return (
    <DestinationPage
      destination={destination}
    />
  );
}