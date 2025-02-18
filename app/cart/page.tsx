import { CartItems } from "@/components/cart-items";
import { PageBanner } from "@/components/page-banner";

export default function CartPage() {
  return (
    <div>
      <PageBanner 
        title="Shopping Cart" 
        paths={[
          { label: "Shop", href: "/shop" },
          { label: "Cart", href: "/cart" }
        ]} 
      />
      <main className="container mx-auto py-16">
        <CartItems />
      </main>
    </div>
  );
}