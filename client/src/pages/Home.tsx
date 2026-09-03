import { useEffect } from "react";
import { usePageMeta } from "@/hooks/usePageMeta";
import LazyMount from "@/components/LazyMount";
import EngineeringSection, { BuildingSection } from "./Engineering";
import MediaSection from "./Media";
import CommunitiesSection from "./Communities";

function SectionHeading({ title }: { title: string }) {
  return (
    <h2 className="mb-6 text-[15px] font-semibold tracking-tight text-white drop-shadow-[0_2px_12px_rgba(0,0,0,0.65)]">
      {title}
    </h2>
  );
}

export default function Home() {
  usePageMeta({
    title: "Lana Yepifanova",
    description:
      "Lana Yepifanova is a senior at Rice University, the founder of Unitbot, and a co-founder of Rice Residency.",
    canonicalPath: "/",
  });

  useEffect(() => {
    // Deep links like /#media (and the old /media redirects) land on the right
    // band once the sections have laid out.
    const id = window.location.hash.slice(1);
    if (!id) return;

    const frame = requestAnimationFrame(() => {
      document.getElementById(id)?.scrollIntoView({ block: "start" });
    });

    return () => cancelAnimationFrame(frame);
  }, []);

  return (
    <div className="container mx-auto max-w-6xl px-4 pb-32">
      <section id="building" className="scroll-mt-20 pt-6 sm:pt-10">
        <SectionHeading title="building" />
        <BuildingSection />
      </section>

      <section id="engineering" className="scroll-mt-20 pt-24 sm:pt-32">
        <SectionHeading title="engineering" />
        <EngineeringSection />
      </section>

      <section id="media" className="scroll-mt-20 pt-24 sm:pt-32">
        <SectionHeading title="media" />
        <LazyMount minHeight={800}>
          <MediaSection />
        </LazyMount>
      </section>

      <section id="communities" className="scroll-mt-20 pt-24 sm:pt-32">
        <SectionHeading title="communities" />
        <LazyMount minHeight={800}>
          <CommunitiesSection />
        </LazyMount>
      </section>
    </div>
  );
}
