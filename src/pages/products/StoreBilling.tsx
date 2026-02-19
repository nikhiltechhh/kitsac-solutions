import ProductPageLayout from "@/components/ProductPageLayout";
import storeImg from "@/assets/store-billing.jpg";

export default function StoreBilling() {
  return (
    <ProductPageLayout
      title="Store & Billing Management"
      tagline="Complete Retail Management Solution"
      description="A powerful all-in-one store and billing management system for modern retailers. From inventory management to GST-compliant billing, manage your entire store operations from a single, intuitive dashboard."
      image={storeImg}
      features={[
        "GST-compliant billing & invoicing",
        "Real-time inventory management",
        "Barcode & QR code scanning",
        "Multi-store management",
        "Sales reports & analytics",
        "Customer loyalty programs",
        "Supplier & purchase management",
        "Low stock alerts & auto-reordering",
        "Works online & offline",
      ]}
    />
  );
}
