import { useLocation } from "wouter";

import SectionNav from "./SectionNav";

export default function Layout({ children }: { children: React.ReactNode }) {
  const [location] = useLocation();
  const isHome = location === "/";

  return (
    <div className="flex h-[100dvh] flex-col relative overflow-hidden font-sans selection:bg-gray-200 selection:text-black bg-black text-white">
      <div className="home-field fixed inset-0 z-0" aria-hidden="true" />
      <div className={`fixed inset-0 z-0 ${isHome ? "bg-black/35" : "bg-black/15"}`} aria-hidden="true" />
      <main
        className={`min-h-0 container relative z-10 mx-auto flex flex-1 flex-col overflow-hidden px-4 py-4 sm:py-6 ${
          isHome ? "max-w-6xl" : "max-w-[30rem]"
        }`}
      >
        <SectionNav />
        {/* The nav stays put; only this region scrolls. */}
        <div className={`min-h-0 flex-1 ${isHome ? "overflow-hidden" : "overflow-y-auto"}`}>{children}</div>
      </main>
    </div>
  );
}
