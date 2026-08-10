import { usePageMeta } from "@/hooks/usePageMeta";

export default function Home() {
  usePageMeta({
    title: "Lana Yepifanova",
    canonicalPath: "/",
  });

  return (
    <div className="h-svh overflow-hidden bg-black">
      <section className="home-field relative h-svh overflow-hidden bg-[#d8d8d2]">
        <div className="absolute inset-0 bg-black/18" aria-hidden="true" />
        <div className="absolute inset-x-4 top-[42%] z-10 -translate-y-1/2 text-center sm:inset-x-8">
          <h1 className="font-sans text-base font-semibold lowercase tracking-normal text-white drop-shadow-[0_2px_12px_rgba(0,0,0,0.65)] sm:text-lg">
            hey, i'm lana
          </h1>
          <nav className="mt-4 flex flex-wrap justify-center gap-3 font-sans text-sm text-white drop-shadow-[0_2px_12px_rgba(0,0,0,0.65)] sm:text-base">
            <a className="underline decoration-white/70 underline-offset-4 hover:text-white/75" href="/engineering">
              engineering
            </a>
            <a className="underline decoration-white/70 underline-offset-4 hover:text-white/75" href="/media">
              media
            </a>
            <a className="underline decoration-white/70 underline-offset-4 hover:text-white/75" href="/communities">
              communities
            </a>
          </nav>
        </div>
      </section>
    </div>
  );
}
