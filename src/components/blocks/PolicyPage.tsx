import type { ReactNode } from "react";
import { SiteLayout } from "@/components/layout/SiteLayout";
import { PageHero } from "@/components/blocks/PageHero";
import { IMG } from "@/lib/content";

interface Props {
  eyebrow: string;
  title: string;
  description?: string;
  image?: string;
  updated?: string;
  children: ReactNode;
}

export function PolicyPage({ eyebrow, title, description, image, updated, children }: Props) {
  return (
    <SiteLayout>
      <PageHero
        eyebrow={eyebrow}
        title={title}
        description={description}
        image={image ?? IMG.hero4}
      />
      <section className="container-luxury py-12 md:py-20">
        <div className="mx-auto max-w-3xl">
          {updated && (
            <div className="mb-8 rounded-[14px] border border-gold/30 bg-gold-soft/60 px-4 py-3 text-xs text-primary">
              <strong className="font-semibold">সর্বশেষ আপডেট:</strong> {updated}
            </div>
          )}
          <div className="policy-prose space-y-6 text-[15px] leading-relaxed text-foreground/85">
            {children}
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}
