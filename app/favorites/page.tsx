import { FavoriteItems } from "@/components/favourite-items";
import { PageBanner } from "@/components/page-banner";

export default function FavoritesPage() {
    return (
        <div>
            <PageBanner 
                title="My Favorites" 
                paths={[
                    { label: "Shop", href: "/shop" },
                    { label: "Favorites", href: "/favorites" }
                ]} 
            />
            <main className="container mx-auto py-16">
                <FavoriteItems />
            </main>
        </div>
    )
}