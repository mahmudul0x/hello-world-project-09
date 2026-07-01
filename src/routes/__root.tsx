import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  Outlet,
  Link,
  createRootRouteWithContext,
  useRouter,
  HeadContent,
  Scripts,
} from "@tanstack/react-router";
import { useEffect, type ReactNode } from "react";

import appCss from "../styles.css?url";
import { reportLovableError } from "../lib/lovable-error-reporting";
import { ShopProvider } from "@/lib/shop/store";
import { AuthProvider } from "@/lib/shop/auth";
import { Toaster } from "@/components/ui/sonner";
import { FloatingActions } from "@/components/shop/FloatingActions";
import { QuickViewDialog } from "@/components/shop/QuickViewDialog";
import { SearchDialog } from "@/components/shop/SearchDialog";
import { MobileBottomBar } from "@/components/shop/MobileBottomBar";
import { PageProgress } from "@/components/ui/page-progress";
import { ScrollToTop } from "@/components/ui/scroll-to-top";
import { PageLoader } from "@/components/ui/page-loader";
import { CookieConsent } from "@/components/ui/cookie-consent";

function NotFoundComponent() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-7xl font-bold text-foreground">404</h1>
        <h2 className="mt-4 text-xl font-semibold text-foreground">Page not found</h2>
        <p className="mt-2 text-sm text-muted-foreground">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <div className="mt-6">
          <Link
            to="/"
            className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Go home
          </Link>
        </div>
      </div>
    </div>
  );
}

function ErrorComponent({ error, reset }: { error: Error; reset: () => void }) {
  console.error(error);
  const router = useRouter();
  useEffect(() => {
    reportLovableError(error, { boundary: "tanstack_root_error_component" });
  }, [error]);

  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-xl font-semibold tracking-tight text-foreground">
          This page didn't load
        </h1>
        <p className="mt-2 text-sm text-muted-foreground">
          Something went wrong on our end. You can try refreshing or head back home.
        </p>
        <div className="mt-6 flex flex-wrap justify-center gap-2">
          <button
            onClick={() => {
              router.invalidate();
              reset();
            }}
            className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Try again
          </button>
          <a
            href="/"
            className="inline-flex items-center justify-center rounded-md border border-input bg-background px-4 py-2 text-sm font-medium text-foreground transition-colors hover:bg-accent"
          >
            Go home
          </a>
        </div>
      </div>
    </div>
  );
}

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "ChayaLux — প্রিমিয়াম পর্দা ও হোম ডেকোর" },
      { name: "description", content: "ChayaLux — বাংলাদেশের প্রিমিয়াম পর্দা, ভেলভেট, ব্ল্যাকআউট, চাইনিজ কার্টেন ও হোম ডেকোর ব্র্যান্ড।" },
      { name: "author", content: "ChayaLux" },
      { property: "og:title", content: "ChayaLux — প্রিমিয়াম পর্দা ও হোম ডেকোর" },
      { property: "og:description", content: "লাক্সারি ইন্টেরিয়র, প্রিমিয়াম কার্টেন — সারা বাংলাদেশে হোম ডেলিভারি।" },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [
      { rel: "stylesheet", href: appCss },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Hind+Siliguri:wght@300;400;500;600;700&family=Poppins:wght@300;400;500;600;700;800&display=swap",
      },
    ],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Organization",
          name: "ChayaLux",
          alternateName: "ছায়ালাক্স",
          description:
            "ChayaLux — বাংলাদেশের প্রিমিয়াম পর্দা, ভেলভেট, ব্ল্যাকআউট, চাইনিজ কার্টেন ও হোম ডেকোর ব্র্যান্ড।",
          url: "/",
          logo: "/favicon.ico",
          contactPoint: {
            "@type": "ContactPoint",
            telephone: "+8801885901184",
            contactType: "customer service",
            areaServed: "BD",
            availableLanguage: ["Bengali", "English"],
          },
          sameAs: [
            "https://www.facebook.com/chayalux",
            "https://www.instagram.com/chayalux",
          ],
        }),
      },
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "WebSite",
          name: "ChayaLux",
          url: "/",
          potentialAction: {
            "@type": "SearchAction",
            target: "/search?q={search_term_string}",
            "query-input": "required name=search_term_string",
          },
        }),
      },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent,
});

function RootShell({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <head>
        <HeadContent />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  const { queryClient } = Route.useRouteContext();

  return (
    <QueryClientProvider client={queryClient}>
      <AuthProvider>
        <ShopProvider>
          <PageProgress />
          {/* Required: nested routes render here. Removing <Outlet /> breaks all child routes. */}
          <Outlet />
          <FloatingActions />
          <ScrollToTop />
          <MobileBottomBar />
          <QuickViewDialog />
          <SearchDialog />
          <PageLoader />
          <CookieConsent />
          <Toaster position="top-center" richColors closeButton />
        </ShopProvider>
      </AuthProvider>
    </QueryClientProvider>
  );
}
