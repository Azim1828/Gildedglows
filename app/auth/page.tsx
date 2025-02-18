import { AuthTabs } from "@/components/auth-tabs";
import { PageBanner } from "@/components/page-banner";

export default function Auth() {
    return (
        <div>
            <PageBanner 
                title="Account" 
                paths={[{ label: "Account", href: "/auth" }]} 
            />
            <main className="container mx-auto py-16">
                <AuthTabs />
            </main>
        </div>
    )
}