import { useEffect } from "react";
import { useLocation } from "wouter";
import SectionNav from "./SectionNav";

export default function Layout({ children }: { children: React.ReactNode }) {
  const [location] = useLocation();
  // Each tab is its own page, so start it at the top.
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  return (
    <div className="plain-page min-h-[100dvh]">
      {/* Full-width like an old HTML page, with a slight margin. */}
      <div className="px-5 pb-24 pt-5 sm:px-10 sm:pt-8 lg:px-16 lg:pt-10">
        <SectionNav />
        <main className="pt-6">{children}</main>
      </div>
    </div>
  );
}
