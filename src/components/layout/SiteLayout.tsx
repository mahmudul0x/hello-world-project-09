import type { ReactNode } from "react";
import { AnnouncementBar } from "./AnnouncementBar";
import { Navbar } from "./Navbar";
import { Footer } from "./Footer";

export function SiteLayout({ children }: { children: ReactNode }) {
  return (
    <div className="flex min-h-screen flex-col bg-background">
      <AnnouncementBar />
      <Navbar />
      <main className="flex-1">{children}</main>
      <Footer />
    </div>
  );
}

