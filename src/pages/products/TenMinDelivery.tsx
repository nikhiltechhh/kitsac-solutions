import ProductPageLayout from "@/components/ProductPageLayout";
import deliveryImg from "@/assets/ten-min-delivery.jpg";

export default function TenMinDelivery() {
  return (
    <ProductPageLayout
      title="10 Minutes Delivery"
      tagline="Hyperlocal Delivery Platform"
      description="Experience the future of local commerce with our revolutionary 10-minute delivery platform. Order your daily essentials, snacks, groceries, and more — delivered straight to your doorstep in 10 minutes or less."
      image={deliveryImg}
      features={[
        "Ultra-fast 10-minute delivery guarantee",
        "Real-time GPS tracking of your order",
        "Wide range of products — groceries, snacks, essentials",
        "Nearby dark store network for rapid fulfillment",
        "Secure payment gateway (UPI, cards, wallets)",
        "Smart order batching for delivery optimization",
        "Rating & review system for quality assurance",
        "Scheduled delivery option for convenience",
        "Loyalty points & rewards program",
      ]}
    />
  );
}
