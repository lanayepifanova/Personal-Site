import { useEffect } from "react";
import type { ReactNode } from "react";
import { ArrowUpRight } from "lucide-react";
import { usePageMeta } from "@/hooks/usePageMeta";

type Job = {
  id: string;
  company: string;
  role: string;
  period: string;
  description: ReactNode;
  image: string;
  imagePosition?: string;
  link: string | null;
};

function JobGrid({ jobs }: { jobs: Job[] }) {
  return (
    <div className="grid grid-cols-1 gap-y-6">
      {jobs.map((job) => (
        <article
          key={job.id}
          id={job.id}
          className="group flex flex-col space-y-4 rounded-2xl bg-white p-5 text-left shadow-sm scroll-mt-8"
        >
          <div className="space-y-1">
            <div className="flex justify-between items-baseline">
              <h3 className="text-[15px] font-sans font-semibold text-black tracking-tight">{job.company}</h3>
              <span className="font-sans text-[11px] text-gray-400">{job.period}</span>
            </div>
            {job.role ? <div className="text-[13px] font-sans text-black">{job.role}</div> : null}
          </div>

          <div className="text-gray-600 font-sans text-[13px] leading-relaxed">{job.description}</div>

          <div className="aspect-[16/9] overflow-hidden rounded-xl bg-gray-100 shadow-sm border border-gray-100 relative">
            <img
              src={job.image}
              alt={job.company}
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              style={job.imagePosition ? { objectPosition: job.imagePosition } : undefined}
            />
          </div>
        </article>
      ))}
    </div>
  );
}

export default function Engineering() {
  usePageMeta({
    title: "Lana Yepifanova | Engineering",
    description:
      "Lana Yepifanova founded Unitbot, wrote software at JLL and Mixo Ads AI, and prototyped hardware at Rice University's Oshman Engineering Design Kitchen.",
    canonicalPath: "/",
  });

  useEffect(() => {
    let isFirstRun = true;

    const scrollToHash = () => {
      const id = window.location.hash.slice(1);
      if (!id) return;

      const target = document.getElementById(id);
      if (!target) return;

      target.scrollIntoView({ behavior: isFirstRun ? "auto" : "smooth", block: "start" });
      isFirstRun = false;
    };

    // Wait a frame so the article elements exist before we try to scroll to one.
    const frame = requestAnimationFrame(scrollToHash);
    window.addEventListener("hashchange", scrollToHash);

    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("hashchange", scrollToHash);
    };
  }, []);

  const jobs: Job[] = [
    {
      id: "macquarie",
      company: "Macquarie Group",
      role: "Commodities Trading Intern",
      period: "2026",
      description:
        "Supported the crude oil, power, and natural gas trading desks. Received return offer but decided to pursue a different path.",
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
      id: "unitbot",
      company: "Unitbot",
      role: "Solo Founder",
      period: "2025",
      description:
        "Automated maintenance requests and rent reminders for NYC landlords. Acquired by early beta user.",
      image: "/images/unitbot_true.png",
      imagePosition: "0% center",
      link: null
    },
    {
      id: "jll",
      company: "JLL",
      role: "Software Engineering Intern",
      period: "2025",
      description: (
        <>
          Capital Markets. Developed data ingestion pipelines to aggregate leasing analytics. Proptech research for <a href="https://spark.jllt.com/portfolio/" target="_blank" rel="noopener noreferrer" className="underline decoration-gray-400 underline-offset-2 transition-all text-gray-500 hover:text-gray-800" onClick={(e) => e.stopPropagation()}>JLL Spark</a> venture fund.
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
    <div className="page-stagger mx-auto w-full max-w-[27rem] space-y-6 animate-in fade-in duration-700 pt-2 pb-24 px-1">
      
      <section className="space-y-6">
        <JobGrid jobs={jobs} />
      </section>

      {workshopLinks.length > 0 && (
        <section className="-mt-12 pb-20">
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
