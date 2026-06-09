import Stripe from "stripe";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
  apiVersion: "2026-03-25.dahlia",
});

export async function POST(req: Request) {
  const { amount } = await req.json();

  const session = await stripe.checkout.sessions.create({
    payment_method_types: ["card"],
    mode: "payment",
    line_items: [
      {
        price_data: {
          currency: "usd",
          product_data: {
            name: "Luxury Travel Package",
          },
          unit_amount: amount * 100,
        },
        quantity: 1,
      },
    ],
    success_url: "http://localhost:3000",
    cancel_url: "http://localhost:3000",
  });

  return Response.json({ url: session.url });
}