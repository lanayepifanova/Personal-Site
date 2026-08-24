import SectionNav from "./SectionNav";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen flex flex-col relative overflow-hidden font-sans selection:bg-gray-200 selection:text-black bg-white text-black">
      <main className="flex-1 container relative z-10 py-8 pb-24 md:pb-12 px-4 max-w-6xl mx-auto bg-white">
        <SectionNav />
        {children}
      </main>
    </div>
  );
}
