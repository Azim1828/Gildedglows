import { PageBanner } from "@/components/page-banner";
import { ProductDetails } from "@/components/product-details";
import { Product } from "@/lib/shop";
import { Metadata } from "next";
import { notFound } from "next/navigation";

interface Props {
  params: { id: string };
}

// Generate metadata for the page
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  try {
    const product = await getProduct(params.id);
    return {
      title: `${product.title} | Gildedglows`,
      description: product.description,
    };
  } catch (error: unknown) {
    console.error("Metadata Error:", error);
    return {
      title: "Product Not Found | Gildedglows",
      description: "The requested product could not be found.",
    };
  }
}

// Fetch product data
async function getProduct(id: string): Promise<Product> {
  // Use absolute URL for server-side fetching
  const res = await fetch(
    `${
      process.env.NEXT_PUBLIC_BASE_URL || "http://localhost:3000"
    }/api/products/${id}`,
    {
      next: { revalidate: 60 }, // Revalidate every minute
    }
  );

  if (!res.ok) throw new Error("Failed to fetch product");

  return res.json();
}

export default async function ProductPage({ params }: Props) {
  try {
    const product = await getProduct(params.id);

    return (
      <div>
        <PageBanner
          title={product.title}
          paths={[
            { label: "Shop", href: "/shop" },
            { label: "Products", href: "/shop" },
            { label: product.title, href: `/products/${params.id}` },
          ]}
        />
        <main className="container mx-auto py-16">
          <ProductDetails product={product} />
        </main>
      </div>
    );
  } catch (error: unknown) {
    console.error("Product Page Error:", error);
    notFound();
  }
}
