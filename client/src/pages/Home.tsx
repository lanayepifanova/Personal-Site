import { useEffect, type ReactNode } from "react";
import { Link, useLocation } from "wouter";
import { usePageMeta } from "@/hooks/usePageMeta";
import EngineeringSection, { BuildingSection } from "./Engineering";
import MediaSection from "./Media";
import CommunitiesSection from "./Communities";

const tabIds = ["engineering", "media", "communities"];

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
        I am a senior at Rice University (Will Rice College) studying Electrical Engineering and History. I grew up in
        Forest Hills, New York. I am ethnically half Japanese and half Russian. I am a proud First Generation Low Income
        (FGLI) student. I have a younger brother whom I love very much. I also have the best mom in the world. She is a
        ballet dancer. I am currently based in Houston, Texas.
      </p>

      <ul className="list-disc space-y-1 pl-6">
        <li>
          <Link href="/engineering">Engineering</Link>: my work history, summer internships, and engineering projects.
        </li>
        <li>
          <Link href="/media">Media</Link>: content creation, social media marketing, short form video, podcast, and piano.
        </li>
        <li>
          <Link href="/communities">Communities</Link>: hacker houses, sports teams, music groups, dance, volunteering, and travel.
        </li>
      </ul>

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

export function EngineeringPage() {
  return (
    <TabPage
      title="Engineering"
      path="/engineering"
      description="Lana Yepifanova's internships and engineering work, from commodities trading to civil engineering."
    >
      <EngineeringSection />
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
