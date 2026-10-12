import { useEffect, type ReactNode } from "react";
import { useLocation } from "wouter";
import { usePageMeta } from "@/hooks/usePageMeta";
import ResumeSection, { BuildingSection } from "./Engineering";
import EngineeringProjectsSection from "./EngineeringProjects";
import MediaSection from "./Media";
import CommunitiesSection from "./Communities";

const tabIds = ["resume", "engineering", "media", "communities"];

export default function Home() {
  const [, setLocation] = useLocation();

  usePageMeta({
    title: "Lana Yepifanova",
    description:
      "Lana Yepifanova is a senior at Rice University, the founder of Unitbot, and a co-founder of Rice Residency.",
    canonicalPath: "/",
  });

  useEffect(() => {
    // Old one-page links like /#media now live on their own tab (#building stays here).
    const id = window.location.hash.slice(1);
    if (tabIds.includes(id)) setLocation(`/${id}`, { replace: true });
    else if (id === "building") document.getElementById("building")?.scrollIntoView();
  }, [setLocation]);

  return (
    <div className="space-y-6">
      <p>
        I am a senior at{" "}
        <a href="https://www.rice.edu/" target="_blank" rel="noopener noreferrer">
          Rice University
        </a>{" "}
        (Will Rice College) based in Houston, Texas. I am currently training for{" "}
        <a href="https://a1amarathon.com/a1a-marathon/" target="_blank" rel="noopener noreferrer">
          The Publix Fort Lauderdale A1A Marathon
        </a>{" "}
        in Feb 2027 and the{" "}
        <a href="https://liftingcast.com/meets/mvpimj9k0kpt/registration" target="_blank" rel="noopener noreferrer">
          TSS Southern Collegiate Powerlifting Cup
        </a>{" "}
        in Dec 2026. I am also performing as the dancer "Rosie" in Wiess Tabletop Theatre's{" "}
        <a href="https://en.wikipedia.org/wiki/Cabaret_(musical)" target="_blank" rel="noopener noreferrer">
          Cabaret
        </a>
        , with shows in Nov 2026. I am fluent in English and Japanese!
      </p>

      <section id="building" className="space-y-6 pt-4">
        <h2 className="text-[22px] font-bold">Building</h2>
        <BuildingSection />
      </section>
    </div>
  );
}

function TabPage({
  title,
  path,
  description,
  children,
}: {
  title: string;
  path: string;
  description: string;
  children: ReactNode;
}) {
  usePageMeta({ title: `${title} | Lana Yepifanova`, description, canonicalPath: path });

  return (
    <div className="space-y-6">
      <h2 className="text-[22px] font-bold">{title}</h2>
      {children}
    </div>
  );
}

export function ResumePage() {
  return (
    <TabPage
      title="Resume"
      path="/resume"
      description="Lana Yepifanova's internships and engineering work, from commodities trading to civil engineering."
    >
      <ResumeSection />
    </TabPage>
  );
}

export function EngineeringPage() {
  return (
    <TabPage
      title="Engineering"
      path="/engineering"
      description="Lana Yepifanova's engineering projects."
    >
      <EngineeringProjectsSection />
    </TabPage>
  );
}

export function MediaPage() {
  return (
    <TabPage
      title="Media"
      path="/media"
      description="Lana Yepifanova's short-form videos, the Leading Owls Podcast, and her piano YouTube channel."
    >
      <MediaSection />
    </TabPage>
  );
}

export function CommunitiesPage() {
  return (
    <TabPage
      title="Communities"
      path="/communities"
      description="Hacker houses, sports, music, dance, volunteering, and travel."
    >
      <CommunitiesSection />
    </TabPage>
  );
}
