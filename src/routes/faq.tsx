import { createFileRoute, Link } from "@tanstack/react-router";
import { MessageCircle, Phone } from "lucide-react";
import { SiteLayout } from "@/components/layout/SiteLayout";
import { PageHero } from "@/components/blocks/PageHero";
import { SectionHeading } from "@/components/ui/section-heading";
import { FAQ } from "@/components/blocks/FAQ";
import { LuxButton } from "@/components/ui/lux-button";
import { FAQS, IMG } from "@/lib/content";

export const Route = createFileRoute("/faq")({
  head: () => ({
    meta: [
      { title: "সচরাচর জিজ্ঞাসা — ChayaLux ছায়ালাক্স" },
      { name: "description", content: "ChayaLux সম্পর্কে সাধারণ প্রশ্নের উত্তর — অর্ডার, ডেলিভারি, রিটার্ন, কাস্টম সাইজ এবং আরও অনেক কিছু।" },
      { property: "og:title", content: "প্রশ্নোত্তর — ChayaLux" },
      { property: "og:image", content: IMG.hero4 },
    ],
  }),
  component: FAQPage,
});

function FAQPage() {
  return (
    <SiteLayout>
      <PageHero
        eyebrow="প্রশ্নোত্তর"
        title="সচরাচর জিজ্ঞাসিত প্রশ্নসমূহ"
        description="আপনার প্রশ্নের দ্রুত উত্তর — না পেলে সরাসরি আমাদের সাথে যোগাযোগ করুন।"
        image={IMG.hero4}
      />
      <section className="container-luxury py-16 md:py-24">
        <SectionHeading eyebrow="FAQ" title="আপনার প্রশ্নের উত্তর" />
        <div className="mt-12">
          <FAQ items={FAQS} />
        </div>
      </section>

      <section className="container-luxury pb-16 md:pb-24">
        <div className="mx-auto max-w-3xl rounded-[28px] bg-gradient-to-br from-primary via-primary to-dark p-10 text-center text-primary-foreground shadow-luxury">
          <div className="text-[11px] font-semibold uppercase tracking-[0.25em] text-gold">আরও প্রশ্ন?</div>
          <h3 className="heading-display mt-2 text-3xl">আমরা সাহায্যের জন্য প্রস্তুত</h3>
          <p className="mt-3 text-sm text-primary-foreground/80">
            যেকোনো প্রশ্নে সরাসরি ফোন, WhatsApp অথবা Messenger-এ যোগাযোগ করুন।
          </p>
          <div className="mt-6 flex flex-wrap justify-center gap-3">
            <a href="tel:01885901184">
              <LuxButton variant="gold" size="lg"><Phone size={15} /> কল করুন</LuxButton>
            </a>
            <a href="https://wa.me/8801885901184" target="_blank" rel="noreferrer">
              <LuxButton variant="outline" size="lg" className="border-background/40 text-background hover:bg-background/10">
                <MessageCircle size={15} /> WhatsApp
              </LuxButton>
            </a>
            <Link to="/contact">
              <LuxButton variant="outline" size="lg" className="border-background/40 text-background hover:bg-background/10">
                যোগাযোগ ফর্ম
              </LuxButton>
            </Link>
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}
