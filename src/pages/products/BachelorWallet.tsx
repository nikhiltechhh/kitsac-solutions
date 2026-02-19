import ProductPageLayout from "@/components/ProductPageLayout";
import walletImg from "@/assets/bachelor-wallet.jpg";

export default function BachelorWallet() {
  return (
    <ProductPageLayout
      title="Bachelor Wallet"
      tagline="Smart Finance for Students"
      description="Bachelor Wallet is a smart financial management app built specifically for students and young professionals. Track expenses, split bills with roommates, set budgets, and achieve your savings goals effortlessly."
      image={walletImg}
      features={[
        "Expense tracking & categorization",
        "Bill splitting with roommates & friends",
        "Monthly budget planning & alerts",
        "Savings goals tracker",
        "UPI & bank account integration",
        "Recurring expense reminders",
        "Visual spending analytics & reports",
        "Student discount discovery",
        "Secure data encryption",
      ]}
    />
  );
}
