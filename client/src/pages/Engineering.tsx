import { ArrowUpRight } from "lucide-react";
import { usePageMeta } from "@/hooks/usePageMeta";

export default function Engineering() {
  usePageMeta({
    title: "Lana Yepifanova | Engineering",
    canonicalPath: "/",
  });

  const corporate = [
    /*
    {
      company: "Macquarie Group",
      role: "Incoming Commodities Trading Intern",
      period: "2026",
      description: "Power and gas desk. Supporting trading and structuring activities, modeling risk scenarios.",
      image: "/images/macquarie1.JPG",
      link: "https://www.macquarie.com"
    },
    */
    {
      company: "Unitbot",
      role: "Property Management Platform",
      period: "2025",
      description:
        "Solo Founder. Automated maintenance requests and rent reminders for NYC landlords. Acquired by early beta user.",
      image: "/images/unitbot_true.png",
      imagePosition: "0% center",
      link: null
    },
    {
      company: "JLL",
      role: "Software Engineering Intern",
      period: "2025",
      description: (
        <>
          Developed data ingestion pipelines to aggregate leasing analytics. Proptech research for <a href="https://spark.jllt.com/portfolio/" target="_blank" rel="noopener noreferrer" className="underline decoration-gray-400 underline-offset-2 transition-all text-gray-500 hover:text-gray-800" onClick={(e) => e.stopPropagation()}>JLL Spark</a> venture fund.
        </>
      ),
      image: "/images/jll_cad.png",
      link: "https://www.jll.com"
    },
    {
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
      company: "Mixo Ads AI",
      role: "Software Engineering Intern",
      period: "2024",
      description: (
        <>
          Ad automation platform. Worked 1-1 with founder in <a href="https://www.antler.co/residency" target="_blank" rel="noopener noreferrer" className="underline decoration-gray-400 underline-offset-2 transition-all text-gray-500 hover:text-gray-800" onClick={(e) => e.stopPropagation()}>Antler Residency</a> on full stack dev and sales.
        </>
      ),
      image: "/images/mixoads2.webp",
      link: "https://mixoads.com"
    },
    {
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
      company: "NYC Dept of Environmental Protection",
      role: "Civil Engineering Intern",
      period: "2022",
      description:
        "Hydraulic modeling and infrastructure mapping of stormwater systems using InfoWorks, maintaining databases.",
      image: "/images/nyc-dep-cad-final.png",
      link: "https://www.nyc.gov/site/dep/water/drinking-water.page"
    },
    {
      company: "NY Conservation League of Voters",
      role: "Software Engineering",
      period: "2022",
      description:
        "Built interactive maps using ArcGIS and Google Earth Engine displaying district-level environmental voting records.",
      image: "/images/nyclv.png.jpeg",
      link: null
    }
  ];

  const workshopLinks = [] as { title: string; href: string }[];

  return (
    <div className="page-stagger space-y-20 animate-in fade-in duration-700 pt-8 pb-24 px-4">
      
      <section className="-mt-2">
        <section className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-12">
            {corporate.map((job) => (
              <article
                key={`${job.company}-${job.period}`}
                className="group flex flex-col text-left"
              >
                <div className="aspect-[16/9] overflow-hidden rounded-xl mb-4 bg-gray-100 shadow-sm border border-gray-100 relative">
                  <img
                    src={job.image}
                    alt={job.company}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    style={job.imagePosition ? { objectPosition: job.imagePosition } : undefined}
                  />
                </div>
                <div className="flex justify-between items-baseline mb-1">
                  <h3 className="text-base font-sans font-semibold text-black group-hover:underline decoration-1 underline-offset-4 transition-all">
                    {job.company}
                  </h3>
                  <span className="font-sans text-sm text-gray-400">
                    {job.period}
                  </span>
                </div>
                <div className="text-gray-500 font-sans text-sm leading-relaxed">
                  {job.description}
                </div>
              </article>
            ))}
          </div>
        </section>
      </section>

      {workshopLinks.length > 0 && (
        <section className="-mt-12 pb-20">
          <div className="space-y-2">
            <h3 className="text-xs font-mono text-gray-400">Workshops</h3>
            {workshopLinks.map((link) => (
              <a
                key={link.title}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center justify-between gap-4 border-b border-gray-100 py-2.5 text-black transition-colors last:border-b-0"
              >
                <div className="min-w-0">
                  <div className="text-sm sm:text-[15px] text-black leading-snug">{link.title}</div>
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
