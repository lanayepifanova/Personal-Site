import { useLocation } from "wouter";

export default function Layout({ children }: { children: React.ReactNode }) {
  const [location] = useLocation();
  const isHome = location === "/";

  if (isHome) {
    return <main className="min-h-screen bg-black">{children}</main>;
  }

  return (
    <div className="min-h-screen flex flex-col relative overflow-hidden font-mono selection:bg-gray-200 selection:text-black bg-white text-black">
      <main className="flex-1 container relative z-10 py-8 pb-24 md:pb-12 px-4 max-w-6xl mx-auto bg-white">
        {children}
      </main>
    </div>
  );
}
