import { Link } from "wouter";
import PianoYoutubeSection from "@/components/PianoYoutubeSection";
import { usePageMeta } from "@/hooks/usePageMeta";
import { reels } from "@/pages/Media";

type ExploreItemProps = {
  params: {
    slug: string;
  };
};

const itemLabels: Record<string, string> = {
  "unitbot": "unitbot",
  "mixo-ads": "mixo ads",
  "startups": "startups",
  "worked-at": "worked at",
  "macquarie": "macquarie",
  "xylem-robotics": "xylem robotics",
  "jll": "jll",
  "rudin": "rudin",
  "sl-green": "sl green",
  "nyc-dep": "nyc dep",
  "uilg": "uilg",
  "doerr": "doerr",
  "youtube": "youtube",
  "instagram": "instagram",
  "tiktok": "tiktok",
  "piano": "piano",
  "dance": "dance",
  "travel": "travel",
  "rice-residency": "rice residency",
  "harvard-st-commons": "harvard st commons",
};

type EngineeringItem = {
  slug: string;
  title: string;
  period: string;
  description: string;
  image: string;
  imagePosition?: string;
};

const startupItems: EngineeringItem[] = [
  {
    slug: "unitbot",
    title: "unitbot",
    period: "2025",
    description:
      "Solo founder. Built a property management platform that automated maintenance requests and rent reminders for NYC landlords. Acquired by an early beta user.",
    image: "/images/unitbot_true.png",
    imagePosition: "0% center",
  },
  {
    slug: "mixo-ads",
    title: "mixo ads",
    period: "2024",
    description:
      "Ad automation platform. Worked directly with the founder in Antler Residency on full-stack development and sales.",
    image: "/images/mixoads2.webp",
  },
];

const workedAtItems: EngineeringItem[] = [
  {
    slug: "macquarie",
    title: "macquarie",
    period: "2026",
    description:
      "Incoming commodities trading intern. Power and gas desk, supporting trading and structuring work.",
    image: "/images/macquarie1.JPG",
  },
  {
    slug: "xylem-robotics",
    title: "xylem robotics",
    period: "2025",
    description:
      "Robotics and engineering work across hardware, prototyping, and technical systems.",
    image: "/images/robotics1.JPG",
  },
  {
    slug: "jll",
    title: "jll",
    period: "2025",
    description:
      "Software engineering intern. Developed data ingestion pipelines to aggregate leasing analytics and researched proptech for JLL Spark.",
    image: "/images/jll_cad.png",
  },
  {
    slug: "rudin",
    title: "rudin",
    period: "2024",
    description:
      "Civil engineering intern. Worked on construction projects across a $5B+ real estate portfolio, plus IoT sensors and machine learning work through Nantum AI.",
    image: "/images/rudin-cad-massive.png",
  },
  {
    slug: "sl-green",
    title: "sl green",
    period: "2023",
    description:
      "Civil engineering intern. Worked on Manhattan real estate development projects using AutoCAD and Bluebeam.",
    image: "/images/slgreen_cad.png",
  },
  {
    slug: "nyc-dep",
    title: "nyc dep",
    period: "2022",
    description:
      "Civil engineering intern. Hydraulic modeling and infrastructure mapping of stormwater systems using InfoWorks and database workflows.",
    image: "/images/nyc-dep-cad-final.png",
  },
];

const engineeringItems = [...startupItems, ...workedAtItems];

const communityItems: Record<string, EngineeringItem> = {
  "rice-residency": {
    slug: "rice-residency",
    title: "rice residency",
    period: "2025",
    description:
      "Co-founded a selective founder-led hacker house near Rice University for students and early-stage founders building software, hardware, and deep-tech startups.",
    image: "/images/the-residency.jpeg",
  },
  "harvard-st-commons": {
    slug: "harvard-st-commons",
    title: "harvard st commons",
    period: "2024",
    description:
      "Took a gap semester from Rice University to live at the hacker house for Harvard and MIT, surrounded by founders, researchers, and builders.",
    image: "/images/harvard-st-commons.jpeg",
  },
};

function EngineeringCard({ item }: { item: EngineeringItem }) {
  return (
    <article className="overflow-hidden rounded-lg border border-black/10 bg-white shadow-[4px_4px_0_rgba(0,0,0,0.12)]">
      <img
        src={item.image}
        alt={item.title}
        className="aspect-[16/9] w-full object-cover"
        style={item.imagePosition ? { objectPosition: item.imagePosition } : undefined}
      />
      <div className="space-y-2 p-4">
        <div className="flex items-baseline justify-between gap-4">
          <h2 className="font-sans text-lg font-semibold text-black">{item.title}</h2>
          <span className="font-mono text-xs text-gray-500">{item.period}</span>
        </div>
        <p className="font-sans text-sm leading-relaxed text-gray-600">{item.description}</p>
      </div>
    </article>
  );
}

function EngineeringGroupPage({ title, items }: { title: string; items: EngineeringItem[] }) {
  return (
    <section className="mt-12 space-y-6">
      <h1 className="font-serif text-5xl font-semibold tracking-normal sm:text-7xl">{title}</h1>
      <div className="grid gap-6 md:grid-cols-2">
        {items.map((item) => (
          <Link key={item.slug} href={`/explore/${item.slug}`} className="block">
            <EngineeringCard item={item} />
          </Link>
        ))}
      </div>
    </section>
  );
}

function EngineeringDetailPage({ item }: { item: EngineeringItem }) {
  return (
    <section className="mt-12 max-w-5xl space-y-6">
      <h1 className="font-serif text-5xl font-semibold tracking-normal sm:text-7xl">{item.title}</h1>
      <img
        src={item.image}
        alt={item.title}
        className="max-h-[680px] w-full rounded-xl object-cover"
        style={item.imagePosition ? { objectPosition: item.imagePosition } : undefined}
      />
      <div className="max-w-2xl space-y-2">
        <div className="font-mono text-sm text-gray-500">{item.period}</div>
        <p className="font-sans text-lg leading-relaxed text-gray-700">{item.description}</p>
      </div>
    </section>
  );
}

function UilgPage() {
  return (
    <section className="mt-12 space-y-6">
      <h1 className="font-serif text-5xl font-semibold tracking-normal sm:text-7xl">uilg</h1>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {reels.map((reel) => (
          <div
            key={reel.id}
            className="h-[620px] overflow-hidden rounded-xl border border-black/10 bg-white sm:h-[700px]"
          >
            <iframe
              src={`https://www.instagram.com/reel/${reel.id}/embed/`}
              title={`Ultimate Ivy League Guide reel ${reel.id}`}
              className="h-full w-full border-0 bg-white"
              allowFullScreen
              loading="lazy"
            >
              <a href={reel.url} target="_blank" rel="noopener noreferrer">
                View this reel on Instagram
              </a>
            </iframe>
          </div>
        ))}
      </div>
    </section>
  );
}

function DoerrPage() {
  return (
    <section className="mt-12 max-w-5xl space-y-6">
      <h1 className="font-serif text-5xl font-semibold tracking-normal sm:text-7xl">doerr</h1>
      <iframe
        src="https://embed.podcasts.apple.com/us/podcast/leading-owls-podcast/id1775472900"
        title="Leading Owls Podcast"
        className="h-[450px] w-full rounded-xl border border-black/10 bg-white"
        loading="lazy"
        allow="autoplay *; encrypted-media *; fullscreen *; clipboard-write"
        sandbox="allow-forms allow-popups allow-same-origin allow-scripts allow-top-navigation-by-user-activation"
      >
        <a
          href="https://podcasts.apple.com/us/podcast/leading-owls-podcast/id1775472900"
          target="_blank"
          rel="noopener noreferrer"
        >
          Visit the Leading Owls Podcast
        </a>
      </iframe>
    </section>
  );
}

function InstagramPage() {
  return (
    <section className="mt-12 max-w-3xl space-y-6">
      <h1 className="font-serif text-5xl font-semibold tracking-normal sm:text-7xl">instagram</h1>
      <iframe
        src="https://www.instagram.com/lana_yaps/embed/"
        title="Lana Yepifanova on Instagram"
        className="h-[760px] w-full rounded-xl border border-black/10 bg-white"
        allowFullScreen
        loading="lazy"
      >
        <a
          href="https://www.instagram.com/lana_yaps/?hl=en"
          target="_blank"
          rel="noopener noreferrer"
        >
          View @lana_yaps on Instagram
        </a>
      </iframe>
    </section>
  );
}

function DetailContent({ slug, title }: { slug: string; title: string }) {
  if (slug === "startups") return <EngineeringGroupPage title="startups" items={startupItems} />;
  if (slug === "worked-at") return <EngineeringGroupPage title="worked at" items={workedAtItems} />;
  const engineeringItem = engineeringItems.find((item) => item.slug === slug);
  if (engineeringItem) return <EngineeringDetailPage item={engineeringItem} />;
  if (communityItems[slug]) return <EngineeringDetailPage item={communityItems[slug]} />;
  if (slug === "uilg") return <UilgPage />;
  if (slug === "doerr") return <DoerrPage />;
  if (slug === "instagram") return <InstagramPage />;
  if (slug === "piano") {
    return (
      <section className="mt-12">
        <PianoYoutubeSection />
      </section>
    );
  }

  return (
    <section className="mt-16 max-w-3xl">
      <h1 className="font-serif text-5xl font-semibold tracking-normal sm:text-7xl">{title}</h1>
    </section>
  );
}

export default function ExploreItem({ params }: ExploreItemProps) {
  const title = itemLabels[params.slug] ?? params.slug.replaceAll("-", " ");

  usePageMeta({
    title: `${title} | Lana Yepifanova`,
    canonicalPath: `/explore/${params.slug}`,
  });

  return (
    <main className="min-h-screen bg-[#d8d8d2] px-5 py-8 text-black sm:px-10 sm:py-12">
      <Link
        href="/"
        className="font-mono text-xs underline decoration-black/40 underline-offset-4 hover:text-black/60"
      >
        back
      </Link>
      <DetailContent slug={params.slug} title={title} />
    </main>
  );
}
