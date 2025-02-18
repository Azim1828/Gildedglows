import { ShopLayout } from "@/components/shop/shop-layout";
import { PageBanner } from "@/components/page-banner";

export default function Shop() {
  return (
    <div>
      <PageBanner 
        title="Our Shop" 
        paths={[{ label: "Shop", href: "/shop" }]} 
      />
      <main className="container mx-auto py-16">
        <ShopLayout />
      </main>
    </div>
  );
}