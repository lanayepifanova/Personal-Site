import { useEffect, type ReactNode } from "react";
import { createPortal } from "react-dom";
import { useLocation } from "wouter";
import { ArrowUpRight, X } from "lucide-react";

type Job = {
  id: string;
  company: string;
  role: string;
  period: string;
  description: ReactNode;
  image?: string;
  imagePosition?: string;
  // Logos are letterboxed on their own brand colour instead of cropped.
  // Without an image, the card shows a plain panel in this colour.
  imageContain?: string;
  // Extra grid placement classes, e.g. to push a card to a specific column.
  gridClass?: string;
  link: string | null;
};

function JobGrid({ jobs, children }: { jobs: Job[]; children?: ReactNode }) {
  return (
    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 xl:grid-cols-3">
      {jobs.map((job) => (
        <article
          key={job.id}
          id={job.id}
          className={`group flex h-full flex-col space-y-4 rounded-2xl bg-white p-5 text-left shadow-sm scroll-mt-24 ${job.gridClass ?? ""}`}
        >
          <div className="space-y-1">
            <div className="flex justify-between items-baseline">
              <h3 className="text-[15px] font-sans font-semibold text-black tracking-tight">{job.company}</h3>
              <span className="font-sans text-[11px] text-gray-400">{job.period}</span>
            </div>
            {job.role ? <div className="text-[13px] font-sans text-black">{job.role}</div> : null}
          </div>

          <div className="text-gray-600 font-sans text-[13px] leading-relaxed">{job.description}</div>

          {job.image || job.imageContain ? (
            <div
              className="relative mt-auto aspect-[16/9] overflow-hidden rounded-xl border border-gray-100 bg-gray-100 shadow-sm"
              style={job.imageContain ? { backgroundColor: job.imageContain } : undefined}
            >
              {job.image ? (
                <img
                  src={job.image}
                  alt={job.company}
                  className={`w-full h-full transition-transform duration-500 group-hover:scale-105 ${
                    job.imageContain ? "object-contain p-4" : "object-cover"
                  }`}
                  style={job.imagePosition ? { objectPosition: job.imagePosition } : undefined}
                />
              ) : null}
            </div>
          ) : null}
        </article>
      ))}
      {children}
    </div>
  );
}

const buildingJobs: Job[] = [
  {
    id: "rice-residency",
    company: "Rice Residency",
    role: "Co-Founder",
    period: "2026",
    description:
      "Hacker House. 2.5M+ funding raised, 3 in a16z speedrun, 1 in YC S26, and 7 in Lilie SVS.",
    image: "/images/rice-residency-logo.png",
    imageContain: "#00205b",
    link: null,
  },
  {
    id: "unitbot",
    company: "Unitbot",
    role: "Solo Founder",
    period: "2025",
    description:
      "Property management platform. Grew to 30+ paying landlords, hit 7k+ MRR, and 300k exit.",
    image: "/images/unitbot-logo.png",
    gridClass: "xl:col-start-3",
    link: null,
  },
];

// Edit these to change what's written in the notebook between the Building cards.
const notebookPages = {
  title: "a collection of my favorite words",
  quotes: [
    {
      text: "I have so much to say to you that I am afraid I shall tell you nothing.",
      author: "Fyodor Dostoyevsky, The Brothers Karamazov",
    },
    {
      text: "We should not spoil what we have by desiring what we do not have, but remember that what we have too was the gift of fortune.",
      author: "Epicurus, Vatican Sayings, no. 35",
    },
    {
      text: "This heart within me I can feel, and I judge that it exists. This world I can touch, and I likewise judge that it exists. There ends all my knowledge, and the rest is construction. (...) Forever I shall be a stranger to myself",
      author: "Albert Camus, The Myth of Sisyphus",
    },
    {
      text: "I imagine one of the reasons people cling to their hates so stubbornly is because they sense, once hate is gone, they will be forced to deal with pain.",
      author: "James Baldwin, The Fire Next Time",
    },
    {
      text: "The fault-finder will find faults even in paradise. Love your life, difficult as it is. You must live in the present, launch yourself on every wave, find your eternity in each moment. Fools stand on their island of opportunities and look toward other land. There is no other land; there is no other life but this.",
      author: "Henry David Thoreau, Walden and Journal",
    },
  ],
};

function Notebook() {
  // The popup lives at /book so it survives a refresh and can be linked to directly.
  const [location, setLocation] = useLocation();
  const open = location === "/book";
  const setOpen = (next: boolean) => setLocation(next ? "/book" : "/");

  // Close on Escape and stop the page behind from scrolling while the popup is open.
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = prevOverflow;
      window.removeEventListener("keydown", onKey);
    };
  }, [open]);

  return (
    <>
      {/* Wide screens: middle column, top row. Two columns: centered on its own row under the cards. Phones: after the cards. */}
      <button
        type="button"
        onClick={() => setOpen(true)}
        aria-haspopup="dialog"
        aria-label="Open notebook"
        className="group mt-12 block w-4/5 cursor-pointer self-start justify-self-center text-left sm:col-span-2 sm:w-2/5 xl:col-span-1 xl:col-start-2 xl:row-start-1 xl:w-4/5"
      >
        <span className="mb-2 block translate-y-4 text-center font-sans text-[11px] text-white">click me!</span>
        <svg
          viewBox="0 0 400 260"
          className="w-full h-auto drop-shadow-sm transition-transform duration-300 group-hover:-translate-y-1"
          aria-hidden="true"
        >
          <path d="M200 30 C150 10 60 12 14 24 L14 240 C60 228 150 226 200 246 Z" fill="#ffffff" stroke="#e5e7eb" strokeWidth="2" />
          <path d="M200 30 C250 10 340 12 386 24 L386 240 C340 228 250 226 200 246 Z" fill="#ffffff" stroke="#e5e7eb" strokeWidth="2" />
          <path d="M14 240 C60 228 150 226 200 246 C250 226 340 228 386 240 L386 250 C340 238 250 236 200 256 C150 236 60 238 14 250 Z" fill="#e5e7eb" />
          <line x1="200" y1="30" x2="200" y2="246" stroke="#d1d5db" strokeWidth="2" />
        </svg>
      </button>

      {open
        ? createPortal(
            <div
              className="fixed inset-0 z-50 flex items-center justify-center bg-black/20 px-10 py-4 backdrop-blur-md sm:px-20"
              onClick={() => setOpen(false)}
            >
              <div
                role="dialog"
                aria-modal="true"
                aria-label="Notebook"
                onClick={(e) => e.stopPropagation()}
                className="relative max-h-[85vh] w-full max-w-2xl overflow-y-auto rounded-2xl bg-white p-6 shadow-2xl md:p-8"
              >
                <button
                  type="button"
                  onClick={() => setOpen(false)}
                  aria-label="Close notebook"
                  className="absolute right-4 top-4 rounded-full p-1 text-gray-400 transition-colors hover:text-black"
                >
                  <X className="h-4 w-4" />
                </button>
                {/* Plain, early-web styling: Times, black, left-aligned, browser-default look. */}
                <h2 className="mb-3 font-['Times_New_Roman',Times,serif] text-[14px] font-bold text-black">
                  {notebookPages.title}
                </h2>
                <ul className="space-y-3">
                  {notebookPages.quotes.map((q) => (
                    <li key={q.text} className="font-['Times_New_Roman',Times,serif] text-[12px] leading-snug text-black">
                      <blockquote>"{q.text}"</blockquote>
                      <p className="mt-0.5">- {q.author}</p>
                    </li>
                  ))}
                </ul>
              </div>
            </div>,
            document.body,
          )
        : null}
    </>
  );
}

export function BuildingSection() {
  return (
    <JobGrid jobs={buildingJobs}>
      <Notebook />
    </JobGrid>
  );
}

export default function EngineeringSection() {
  const jobs: Job[] = [
    {
      id: "macquarie",
      company: "Macquarie Group",
      role: "Commodities Trading Intern",
      period: "2026",
      description:
        "Supported the crude oil, power, and natural gas trading desks. Received return offer.",
      image: "/images/macquarie-genscape.jpeg",
      link: "https://www.macquarie.com"
    },
    {
      id: "xylem-robotics",
      company: "Xylem Robotics",
      role: "GTM Associate",
      period: "2026",
      description:
        "Developed marketing, media and content strategy for the launch of a new consumer product.",
      image: "/images/xylem-robotics.webp",
      link: null
    },
    {
      id: "jll",
      company: "JLL",
      role: "Capital Markets Intern",
      period: "2025",
      description: (
        <>
          Developed data ingestion pipelines to aggregate leasing analytics. Proptech research for <a href="https://spark.jllt.com/portfolio/" target="_blank" rel="noopener noreferrer" className="underline decoration-gray-400 underline-offset-2 transition-all text-gray-500 hover:text-gray-800" onClick={(e) => e.stopPropagation()}>JLL Spark</a> venture fund.
        </>
      ),
      image: "/images/jll-capital-markets.jpeg",
      link: "https://www.jll.com"
    },
    {
      id: "mixo-ads",
      company: "Mixo Ads AI",
      role: "Founder's Associate",
      period: "2024",
      description: (
        <>
          Worked 1-1 with founder in <a href="https://www.antler.co/residency" target="_blank" rel="noopener noreferrer" className="underline decoration-gray-400 underline-offset-2 transition-all text-gray-500 hover:text-gray-800" onClick={(e) => e.stopPropagation()}>Antler Residency</a> on full stack dev and sales.
        </>
      ),
      image: "/images/mixoads2.webp",
      link: "https://mixoads.com"
    },
    {
      id: "oedk",
      company: "Oshman Engineering Design Kitchen",
      role: "PTeam Engineering Design",
      period: "2024",
      description: (
        <>
          Prototyped <a href="https://drive.google.com/file/d/17fsBsH7Nt-mXkGrkUw4udXAdj7qYPc7b/view?usp=sharing" target="_blank" rel="noopener noreferrer" className="underline decoration-gray-400 underline-offset-2 transition-all text-gray-500 hover:text-gray-800" onClick={(e) => e.stopPropagation()}>physical therapy device</a> for ACL <a href="https://drive.google.com/file/d/1b9m1CscqHZlpnkWmerCBImh4eDdtn26J/view?usp=sharing" target="_blank" rel="noopener noreferrer" className="underline decoration-gray-400 underline-offset-2 transition-all text-gray-500 hover:text-gray-800" onClick={(e) => e.stopPropagation()}>rehabilitation</a> program, advised by Dr. Andi Gobin.
        </>
      ),
      image: "/images/oedk-assembly.png",
      link: "https://oedk.rice.edu"
    },
    {
      id: "rudin",
      company: "Rudin",
      role: "Civil Engineering Intern",
      period: "2024",
      description: (
        <>
          Construction projects across $5B+ real estate portfolio. IoT sensors and machine learning at <a href="https://www.nantum.ai" target="_blank" rel="noopener noreferrer" className="underline decoration-gray-400 underline-offset-2 transition-all text-gray-500 hover:text-gray-800" onClick={(e) => e.stopPropagation()}>Nantum AI</a> capstone project.
        </>
      ),
      image: "/images/rudin-cad-massive.png",
      link: "https://www.rudin.com"
    },
    {
      id: "sl-green",
      company: "SL Green Realty Corp.",
      role: "Civil Engineering Intern",
      period: "2023",
      description: (
        <>
          Real estate <a href="https://1madisonnyc.com" target="_blank" rel="noopener noreferrer" className="underline decoration-gray-400 underline-offset-2 transition-all text-gray-500 hover:text-gray-800" onClick={(e) => e.stopPropagation()}>development projects</a> across $4B+ Manhattan office portfolio. Auto CAD and Bluebeam.
        </>
      ),
      image: "/images/slgreen_cad.png",
      link: "https://www.slgreen.com"
    },
    {
      id: "nyc-dep",
      company: "NYC Dept of Environmental Protection",
      role: "Civil Engineering Intern",
      period: "2022",
      description:
        "Hydraulic modeling and infrastructure mapping of stormwater systems using InfoWorks, maintaining databases.",
      image: "/images/nyc-dep-cad-final.png",
      link: "https://www.nyc.gov/site/dep/water/drinking-water.page"
    },
    {
      id: "nyclv",
      company: "NY Conservation League of Voters",
      role: "Civil Engineering Intern",
      period: "2022",
      description:
        "Built interactive maps using ArcGIS and Google Earth Engine displaying district-level environmental voting records.",
      image: "/images/nyclv.png.jpeg",
      link: null
    }
  ];

  const workshopLinks = [] as { title: string; href: string }[];

  return (
    <div className="space-y-6">
      <JobGrid jobs={jobs} />

      {workshopLinks.length > 0 && (
        <section className="rounded-2xl bg-white p-5 shadow-sm">
          <div className="space-y-2">
            <h3 className="text-[11px] font-sans text-gray-400">Workshops</h3>
            {workshopLinks.map((link) => (
              <a
                key={link.title}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center justify-between gap-4 border-b border-gray-100 py-2.5 text-black transition-colors last:border-b-0"
              >
                <div className="min-w-0">
                  <div className="text-[13px] text-black leading-snug">{link.title}</div>
                </div>
                <ArrowUpRight className="h-4 w-4 shrink-0 text-gray-300 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-black" />
              </a>
            ))}
          </div>
        </section>
      )}

    </div>
  );
}
