import { usePageMeta } from "@/hooks/usePageMeta";

function A({ href, children }: { href: string; children: React.ReactNode }) {
  const external = href.startsWith("http");

  return (
    <a
      href={href}
      className="underline decoration-white/60 underline-offset-2 transition-colors hover:text-white/70"
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
    <div className="mx-auto max-w-[27rem] px-1 pt-6 pb-2 font-sans text-white sm:pt-10 drop-shadow-[0_2px_12px_rgba(0,0,0,0.65)] animate-in fade-in duration-700">
      <h1 className="text-[15px] font-semibold tracking-tight">Lana Yepifanova</h1>
      <p className="mt-1 text-[12px] font-normal tracking-tight text-white/70">Updated Sep 1, 2026</p>

      <div className="mt-5 space-y-3.5 text-[13px] leading-[1.7] text-white">
        <p>
          Hi, I&apos;m Lana! I&apos;m a senior at <A href="https://www.rice.edu">Rice University</A> studying
          History.
        </p>

        <p>
          I was the solo founder of <A href="/engineering#unitbot">UnitBot</A>, a property management platform.
          <br />
          I grew the platform to 30+ paying landlords, hit 7k+ MRR, and sold it for 300k. This idea came after working
          in real estate firms like{" "}
          <A href="/engineering#jll">JLL</A>, <A href="/engineering#rudin">Rudin</A>,{" "}
          <A href="/engineering#sl-green">SL Green</A>, <A href="/engineering#nyc-dep">NYC DEP</A> and{" "}
          <A href="/engineering#nyclv">NYCLV</A>.
        </p>

        <p>
          I am the co-founder of <A href="https://www.riceresidency.com">Rice Residency</A>, a first hacker house in
          Houston for early-stage student founders. Our residents have raised $2.5M+, with three in a16z speedrun, one
          in the YC S26 batch, and seven in the Lile Summer Venture Studio.
        </p>

        <p>
          I am the solo founder of{" "}
          <span className="underline decoration-white/60 underline-offset-2">Kimchi Studio</span>, a marketing agency
          that helps brands get in front of the right people and turn attention into growth. We build and execute
          distribution strategies across organic social,
          paid media, creators, UGC, and partnerships, then produce the content needed to power those channels.
        </p>

        <p>
          I make social media content <A href="https://www.instagram.com/lana_yaps/">@lana_yaps</A> (20k+ followers),{" "}
          <A href="https://www.ultimateivyleagueguide.com">@ultimateivyleagueguide</A> (1M+ followers), the{" "}
          <A href="https://doerr.rice.edu/podcast">Leading Owls Podcast</A> (1k+ monthly listeners), and my{" "}
          <A href="https://www.youtube.com/@LanaYepifanova">piano youtube channel</A> (for fun).
        </p>

        <p className="pt-2 text-white/75">
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
