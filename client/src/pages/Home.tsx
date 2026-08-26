import { usePageMeta } from "@/hooks/usePageMeta";

function A({ href, children }: { href: string; children: React.ReactNode }) {
  const external = href.startsWith("http");

  return (
    <a
      href={href}
      className="underline decoration-gray-400 underline-offset-2 transition-colors hover:text-gray-500"
      {...(external ? { target: "_blank", rel: "noreferrer noopener" } : {})}
    >
      {children}
    </a>
  );
}

export default function Home() {
  usePageMeta({
    title: "Lana Yepifanova",
    description:
      "Lana Yepifanova is a senior at Rice University, the founder of Unitbot, and a co-founder of Rice Residency.",
    canonicalPath: "/",
  });

  return (
    <div className="mx-auto max-w-[27rem] px-1 pt-10 pb-24 font-sans text-black animate-in fade-in duration-700">
      <h1 className="text-[15px] font-semibold tracking-tight">Lana Yepifanova</h1>
      <p className="mt-1 text-[12px] font-normal tracking-tight text-gray-400">Updated Aug 26, 2026</p>

      <div className="mt-7 space-y-4 text-[13px] leading-[1.7] text-black">
        <p>
          Hi, I&apos;m Lana! I&apos;m a senior at <A href="https://www.rice.edu">Rice University</A> studying
          History.
        </p>

        <p>
          I was the solo founder of <A href="/engineering#unitbot">UnitBot</A>, a property management platform that
          automated maintenance requests and rent reminders for NYC landlords. It was acquired by an early beta user
          for 300k. This idea came after working in real estate and infrastructure firms like{" "}
          <A href="/engineering#jll">JLL</A>, <A href="/engineering#rudin">Rudin</A>,{" "}
          <A href="/engineering#sl-green">SL Green</A>, <A href="/engineering#nyc-dep">NYC DEP</A> and{" "}
          <A href="/engineering#nyclv">NYCLV</A>.
        </p>

        <p>
          I co-founded <A href="https://www.riceresidency.com">Rice Residency</A>, a founder-led hacker house in
          Houston for students and early-stage founders building software, hardware, and deep-tech startups. Our
          residents have raised $2.5M+, with three in a16z speedrun, one in the YC S26 batch, and seven in the Rice
          Summer Venture Studio.
        </p>

        <p>
          I make short form and long form content{" "}
          <A href="https://www.instagram.com/lana_yaps/">@lana_yaps</A> where I have grown to 20k+ followers. I also
          make content for <A href="https://www.ultimateivyleagueguide.com">Ultimate Ivy League Guide</A> which has
          grown to 1M+ followers, the <A href="https://doerr.rice.edu/podcast">Leading Owls Podcast</A> that has 1k+
          monthly listeners, and my small{" "}
          <A href="https://www.youtube.com/@LanaYepifanova">Piano Youtube Channel</A> with 500+ subscribers.
        </p>

        <p>
          Most recently, I worked in Commodities Trading at{" "}
          <A href="/engineering#macquarie">Macquarie Group</A>. I also worked GTM at{" "}
          <A href="/engineering#xylem-robotics">Xylem Robotics</A> and was the Founder&apos;s Associate at{" "}
          <A href="/engineering#mixo-ads">Mixo Ads AI</A>.
        </p>

        <p className="pt-2 text-gray-500">
          <A href="https://www.instagram.com/lana_yaps/">Instagram</A> &middot;{" "}
          <A href="https://www.tiktok.com/@lana_yaps">TikTok</A> &middot;{" "}
          <A href="https://www.youtube.com/@lana_yaps">YouTube</A> &middot;{" "}
          <A href="https://x.com/lana_yaps">X</A> &middot;{" "}
          <A href="https://github.com/lanayepifanova">GitHub</A> &middot;{" "}
          <A href="https://www.linkedin.com/in/lana-yepifanova/">LinkedIn</A>
        </p>
      </div>
    </div>
  );
}
