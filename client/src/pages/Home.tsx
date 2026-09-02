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
      <h1 className="text-[15px] font-semibold tracking-tight">
        Lana Yepifanova
      </h1>
      <p className="mt-1 text-[12px] font-normal tracking-tight text-white/70">
        Updated Sep 1, 2026
      </p>

      <div className="mt-5 space-y-3.5 text-[13px] leading-[1.7] text-white">
        <p>
          Hi, I&apos;m Lana! I&apos;m a senior at Rice University and I&apos;m
          currently building{" "}
          <span className="underline decoration-white/60 underline-offset-2">
            Dumbiis
          </span>
          , a consumer app for turning what you learn into concrete actions,
          skills, and real-world impact. We are currently in stealth and have
          not launched yet.
        </p>

        <p>
          Previously, I built and sold{" "}
          <span className="underline decoration-white/60 underline-offset-2">
            Unitbot
          </span>
          , a property management platform that helped landlords streamline
          their leasing and tenant management. We grew to 30+ paying customers,
          150+ buildings, hit 7k+ MRR, and sold for 300k.
        </p>

        <p>
          I am active on social media! I post on{" "}
          <A href="https://www.instagram.com/lana_yaps/">@lana_yaps</A> (21k+
          followers) and{" "}
          <A href="https://www.instagram.com/ultimateivyleagueguide/">
            @ultimateivyleagueguide
          </A>{" "}
          (1M+ followers). I&apos;ve done many paid sponsorships in the tech and
          finance space and have experience making high quality content that
          converts.
        </p>

        <p>
          I love hosting events and building in person communities. I started{" "}
          <A href="https://www.riceresidency.com">Rice Residency</A>, a hacker
          house for early-stage student founders. Our residents have raised
          $2.5M+, with 3 in a16z speedrun, 1 in the YC S26 batch, and 7 in Lilie
          SVS.
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
