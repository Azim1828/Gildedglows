import { ContactForm } from "@/components/contact-form";
import { ContactInfo } from "@/components/contact-info";
import { PageBanner } from "@/components/page-banner";

export default function Contact() {
  return (
    <div>
      <PageBanner 
        title="Contact Us" 
        paths={[{ label: "Contact", href: "/contact" }]} 
      />
      <main className="container mx-auto py-16">
        <div className="grid gap-8 md:grid-cols-2">
          <ContactInfo />
          <ContactForm />
        </div>
      </main>
    </div>
  );
}
