import type { ReactNode } from "react";

type Job = {
  id: string;
  company: string;
  role: string;
  period: string;
  description: ReactNode;
  image?: string;
  imagePosition?: string;
  // Logos are letterboxed on their own brand colour instead of cropped.
  imageContain?: string;
  link: string | null;
};

// Plain list: small thumbnail on the left, "Company, Role (year)" and a line of description.
function JobList({ jobs }: { jobs: Job[] }) {
  return (
    <ul className="space-y-6">
      {jobs.map((job) => (
        <li key={job.id} id={job.id} className="flex gap-4 scroll-mt-6">
          {job.image ? (
            <img
              src={job.image}
              alt={job.company}
              loading="lazy"
              className={`h-20 w-28 shrink-0 border border-gray-400 sm:h-24 sm:w-36 ${
                job.imageContain ? "object-contain p-2" : "object-cover"
              }`}
              style={{
                ...(job.imageContain ? { backgroundColor: job.imageContain } : {}),
                ...(job.imagePosition ? { objectPosition: job.imagePosition } : {}),
              }}
            />
          ) : null}
          <div>
            <p>
              <b>
                {job.link ? (
                  <a href={job.link} target="_blank" rel="noopener noreferrer">
                    {job.company}
                  </a>
                ) : (
                  job.company
                )}
              </b>
              , <i>{job.role}</i> ({job.period})
            </p>
            <p className="text-[15px]">{job.description}</p>
          </div>
        </li>
      ))}
    </ul>
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
    link: null,
  },
];

// Quotes listed under the Building section on the home page.
const favoriteWords = {
  title: "Words I Love",
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
      text: "I imagine that one of the reasons people cling to their hates so stubbornly is because they sense, once hate is gone, that they will be forced to deal with pain.",
      author: "James Baldwin, Notes of a Native Son",
    },
    {
      text: "The fault-finder will find faults even in paradise. Love your life, difficult as it is. You must live in the present, launch yourself on every wave, find your eternity in each moment. Fools stand on their island of opportunities and look toward other land. There is no other land; there is no other life but this.",
      author: "Henry David Thoreau, Walden and Journal",
    },
  ],
};

export function BuildingSection() {
  return (
    <div className="space-y-10">
      <JobList jobs={buildingJobs} />
      <section className="space-y-3">
        <h3 className="text-[18px] font-bold">{favoriteWords.title}</h3>
        <ul className="space-y-3">
          {favoriteWords.quotes.map((q) => (
            <li key={q.text}>
              <blockquote>"{q.text}"</blockquote>
              <p className="text-[15px]">- {q.author}</p>
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
}

export default function EngineeringSection() {
  const jobs: Job[] = [
    {
      id: "macquarie",
      company: "Macquarie Group",
      role: "Commodities Trading Intern",
      period: "Summer 2026",
      description:
        "Supported the crude oil, power, and natural gas trading desks. Received return offer.",
      image: "/images/macquarie-genscape.jpeg",
      link: "https://www.macquarie.com"
    },
    {
      id: "xylem-robotics",
      company: "Xylem Robotics",
      role: "GTM Associate",
      period: "Spring 2026",
      description:
        "Developed AI generated video marketing strategy for the launch of a new consumer product.",
      image: "/images/xylem-robotics.webp",
      link: "https://xylemtech.com/"
    },
    {
      id: "jll",
      company: "JLL",
      role: "Capital Markets Intern",
      period: "Summer 2025",
      description: "Supported commercial real estate investment sales and financing transactions with market research.",
      image: "/images/jll-capital-markets.jpeg",
      link: "https://www.jll.com"
    },
    {
      id: "mixo-ads",
      company: "Mixo Ads AI",
      role: "Founder's Associate",
      period: "Summer 2024",
      description: (
        <>
          Worked 1-1 with founder in <a href="https://www.antler.co/residency" target="_blank" rel="noopener noreferrer">Antler Residency</a> on full stack dev and sales.
        </>
      ),
      image: "/images/mixoads2.webp",
      link: "https://mixoads.com"
    },
    {
      id: "oedk",
      company: "OEDK",
      role: "PTeam Engineering Design",
      period: "Fall 2024",
      description: (
        <>
          Prototyped <a href="https://drive.google.com/file/d/17fsBsH7Nt-mXkGrkUw4udXAdj7qYPc7b/view?usp=sharing" target="_blank" rel="noopener noreferrer">physical therapy device</a> for ACL <a href="https://drive.google.com/file/d/1b9m1CscqHZlpnkWmerCBImh4eDdtn26J/view?usp=sharing" target="_blank" rel="noopener noreferrer">rehabilitation</a> program, advised by Dr. Andi Gobin.
        </>
      ),
      image: "/images/oedk-assembly.png",
      link: "https://oedk.rice.edu"
    },
    {
      id: "rudin",
      company: "Rudin",
      role: "Civil Engineering Intern",
      period: "Summer 2024",
      description: (
        <>
          Worked on <a href="https://www.nantum.ai" target="_blank" rel="noopener noreferrer">Nantum AI</a> project to help commercial buildings use less energy and operate more efficiently.
        </>
      ),
      image: "/images/rudin-cad-massive.png",
      link: "https://www.rudin.com"
    },
    {
      id: "sl-green",
      company: "SL Green",
      role: "Civil Engineering Intern",
      period: "Summer 2023",
      description:
        "Updating floor plans in CAD, marking up drawings in Bluebeam, and doing site walks with project managers.",
      image: "/images/slgreen_cad.png",
      link: "https://www.slgreen.com"
    },
    {
      id: "nyc-dep",
      company: "NYC DEP",
      role: "Civil Engineering Intern",
      period: "Summer 2022",
      description:
        "Reviewing proposed developments to the city’s water, sewer, and stormwater systems.",
      image: "/images/nyc-dep-cad-final.png",
      link: "https://www.nyc.gov/site/dep/water/drinking-water.page"
    },
    {
      id: "nyclv",
      company: "NYLCV",
      role: "Policy Research Intern",
      period: "Spring 2022",
      description:
        "Mapping environmental data, tracking legislation on clean energy, water and parks, and writing briefs.",
      image: "/images/nyclv.png.jpeg",
      link: "https://www.nylcv.org"
    }
  ];

  const workshopLinks = [] as { title: string; href: string }[];

  return (
    <div className="space-y-8">
      <JobList jobs={jobs} />

      {workshopLinks.length > 0 && (
        <section className="space-y-2">
          <h3 className="text-[18px] font-bold">Workshops</h3>
          <ul className="list-disc pl-6">
            {workshopLinks.map((link) => (
              <li key={link.title}>
                <a href={link.href} target="_blank" rel="noopener noreferrer">
                  {link.title}
                </a>
              </li>
            ))}
          </ul>
        </section>
      )}
    </div>
  );
}
