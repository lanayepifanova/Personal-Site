import { useLocation } from "wouter";

import SectionNav from "./SectionNav";

export default function Layout({ children }: { children: React.ReactNode }) {
  const [location] = useLocation();
  const isHome = location === "/";

  return (
    <div className="relative min-h-[100dvh] font-sans selection:bg-gray-200 selection:text-black bg-black text-white">
      <div className="home-field fixed inset-0 z-0" aria-hidden="true" />
      <div className={`fixed inset-0 z-0 ${isHome ? "bg-black/45" : "bg-black/15"}`} aria-hidden="true" />

      {isHome ? (
        // One long document: the page itself scrolls and the nav sticks to the top.
        <div className="relative z-10">
          <SectionNav />
          {children}
        </div>
      ) : (
        <div className="flex h-[100dvh] flex-col overflow-hidden">
          <main className="min-h-0 container relative z-10 mx-auto flex flex-1 flex-col overflow-hidden px-4 py-4 sm:py-6 max-w-[30rem]">
            <div className="min-h-0 flex-1 overflow-y-auto">{children}</div>
          </main>
        </div>
      )}
    </div>
  );
}
