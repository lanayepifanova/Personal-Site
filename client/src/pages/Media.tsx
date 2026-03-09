import { type CSSProperties, type UIEvent, type WheelEvent } from "react";
import { ExternalLink, Instagram, Newspaper, Twitter, Youtube } from "lucide-react";
import { usePageMeta } from "@/hooks/usePageMeta";
import PianoYoutubeSection from "@/components/PianoYoutubeSection";

export const reels = [
  {
    id: "DZXbULchiiD",
    url: "https://www.instagram.com/reel/DZXbULchiiD/?utm_source=ig_web_copy_link&igsh=NTc4MTIwNjQ2YQ==",
  },
  {
    id: "DZC6SRaOH0W",
    url: "https://www.instagram.com/reel/DZC6SRaOH0W/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==",
  },
  {
    id: "DZhuaYohTYX",
    url: "https://www.instagram.com/reel/DZhuaYohTYX/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==",
  },
  {
    id: "DZpc0pdhI6-",
    url: "https://www.instagram.com/reel/DZpc0pdhI6-/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==",
  },
  {
    id: "DZydoCkhFAB",
    url: "https://www.instagram.com/reel/DZydoCkhFAB/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==",
  },
  {
    id: "DZ45p9tBWSY",
    url: "https://www.instagram.com/reel/DZ45p9tBWSY/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==",
  },
  {
    id: "DaAoBpth0zw",
    url: "https://www.instagram.com/reel/DaAoBpth0zw/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==",
  },
  {
    id: "DaIWYh2hM1F",
    url: "https://www.instagram.com/reel/DaIWYh2hM1F/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==",
  },
  {
    id: "DaQEytkhsxW",
    url: "https://www.instagram.com/reel/DaQEytkhsxW/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==",
  },
  {
    id: "DaXzNHZh09g",
    url: "https://www.instagram.com/reel/DaXzNHZh09g/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==",
  },
  {
    id: "DafhgE1hDsn",
    url: "https://www.instagram.com/reel/DafhgE1hDsn/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==",
  },
  {
    id: "DanP36-BMzC",
    url: "https://www.instagram.com/reel/DanP36-BMzC/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==",
  },
  {
    id: "Dau-RKNB_9s",
    url: "https://www.instagram.com/reel/Dau-RKNB_9s/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==",
  },
  {
    id: "Da2so9xSr5O",
    url: "https://www.instagram.com/reel/Da2so9xSr5O/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==",
  },
  {
    id: "Da-bC1XhVZo",
    url: "https://www.instagram.com/reel/Da-bC1XhVZo/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==",
  },
  {
    id: "DbGJgFChmai",
    url: "https://www.instagram.com/reel/DbGJgFChmai/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==",
  },
  {
    id: "DbN330BBsOM",
    url: "https://www.instagram.com/reel/DbN330BBsOM/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==",
  },
  {
    id: "DbVmPGshtMJ",
    url: "https://www.instagram.com/reel/DbVmPGshtMJ/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==",
  },
  {
    id: "DbZmPq_AdI9",
    url: "https://www.instagram.com/reel/DbZmPq_AdI9/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==",
  },
  {
    id: "DbdUlxJhWOM",
    url: "https://www.instagram.com/reel/DbdUlxJhWOM/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==",
  },
  {
    id: "Dbj1NcLhYH8",
    url: "https://www.instagram.com/reel/Dbj1NcLhYH8/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA=",
  },
  {
    id: "DbnnxHrBoDm",
    url: "https://www.instagram.com/reel/DbnnxHrBoDm/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==",
  },
  {
    id: "DbuKy60A-57",
    url: "https://www.instagram.com/reel/DbuKy60A-57/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==",
  },
  {
    id: "DbwvpOuAO5k",
    url: "https://www.instagram.com/reel/DbwvpOuAO5k/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==",
  },
  {
    id: "Db156qsA-BG",
    url: "https://www.instagram.com/reel/Db156qsA-BG/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==",
  },
  {
    id: "Db5pWilhBR6",
    url: "https://www.instagram.com/reel/Db5pWilhBR6/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==",
  },
  {
    id: "Db9pgYMAhDu",
    url: "https://www.instagram.com/reel/Db9pgYMAhDu/?utm_source=ig_web_copy_link&igsh=NTc4MTIwNjQ2YQ==",
  },
  {
    id: "DcAMlX_gaZc",
    url: "https://www.instagram.com/reel/DcAMlX_gaZc/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==&igsi=MzRlODBiNWFlZA==",
  },
  {
    id: "DcBXvfVyHjY",
    url: "https://www.instagram.com/reel/DcBXvfVyHjY/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==&igsi=MzRlODBiNWFlZA==",
  },
];

export default function Media() {
  usePageMeta({
    title: "Lana Yepifanova | Media",
    canonicalPath: "/media",
  });

  const enableManualGallery = (target: HTMLDivElement) => {
    if (!target.classList.contains("is-manual")) {
      target.classList.add("is-manual");
    }
  };

  const handleGalleryScroll = (event: UIEvent<HTMLDivElement>) => {
    enableManualGallery(event.currentTarget);
  };

  const handleGalleryWheel = (event: WheelEvent<HTMLDivElement>) => {
    const { deltaX, deltaY } = event;
    if (Math.abs(deltaX) > Math.abs(deltaY)) {
      return;
    }

    const target = event.currentTarget;
    enableManualGallery(target);
    const maxScrollLeft = target.scrollWidth - target.clientWidth;
    if (maxScrollLeft <= 0) {
      return;
    }

    const nextScrollLeft = target.scrollLeft + deltaY;
    const clampedScrollLeft = Math.max(0, Math.min(maxScrollLeft, nextScrollLeft));

    if (clampedScrollLeft === target.scrollLeft) {
      return;
    }

    event.preventDefault();
    target.scrollLeft = clampedScrollLeft;
  };

  return (
    <div className="page-stagger space-y-20 px-4 pb-24 pt-2 sm:pt-8">
      <section className="space-y-6">
        <div className="space-y-1">
          <div className="flex justify-between items-end">
            <h2 className="text-3xl font-sans font-medium text-black tracking-tight">
              Ultimate Ivy League Guide
            </h2>
          </div>
          <div className="flex justify-between items-baseline">
            <div className="text-lg font-serif text-black">Content Creator</div>
          </div>
        </div>

        <p className="text-gray-600 font-serif text-sm leading-relaxed max-w-2xl">
          Ultimate Ivy League Guide is one of the fastest-growing college admissions mentorship companies, featured in Forbes, Business Insider, Yahoo, and other leading publications for its innovative approach to college admissions. Through personalized coaching, strategic planning, and its signature Narrative Method, the company empowers students to build standout applications that showcase their unique strengths and long-term potential.
        </p>

        <div className="flex flex-wrap gap-x-4 gap-y-2 text-xs font-sans">
          <a
            href="https://www.ultimateivyleagueguide.com"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 text-black hover:text-gray-600 transition-colors border-b border-black/20 hover:border-black pb-0.5"
          >
            <ExternalLink className="h-3 w-3" />
            Visit UltimateIvyLeagueGuide.com
          </a>
          <a
            href="https://www.instagram.com/ultimateivyleagueguide/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 text-black hover:text-gray-600 transition-colors border-b border-black/20 hover:border-black pb-0.5"
          >
            <Instagram className="h-3 w-3" />
            Instagram
          </a>
          <a
            href="https://www.tiktok.com/@ultimateivyleagueguide"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 text-black hover:text-gray-600 transition-colors border-b border-black/20 hover:border-black pb-0.5"
          >
            <ExternalLink className="h-3 w-3" />
            TikTok
          </a>
          <a
            href="https://www.youtube.com/@ultimateivyleagueguide/shorts"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 text-black hover:text-gray-600 transition-colors border-b border-black/20 hover:border-black pb-0.5"
          >
            <Youtube className="h-3 w-3" />
            YouTube
          </a>
          <a
            href="https://www.forbes.com/sites/meimeifox/2023/10/18/top-10-pro-tips-for-getting-into-your-dream-college/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 text-black hover:text-gray-600 transition-colors border-b border-black/20 hover:border-black pb-0.5"
          >
            <Newspaper className="h-3 w-3" />
            Featured in Forbes
          </a>
        </div>

        <div className="gallery-track" onWheel={handleGalleryWheel} onScroll={handleGalleryScroll}>
          <div
            className="gallery-marquee"
            style={{ ["--marquee-duration" as string]: "60s" } as CSSProperties}
          >
            {[0, 1].map((duplicate) => (
              <div
                key={`ivy-guide-${duplicate}`}
                className="flex gap-6 pr-6"
                aria-hidden={duplicate === 1}
              >
                {reels.map((reel) => (
                  <div
                    key={`${reel.id}-${duplicate}`}
                    className="h-[680px] w-[320px] shrink-0 overflow-hidden rounded-xl border border-gray-200 bg-white sm:w-[380px]"
                  >
                    <iframe
                      src={`https://www.instagram.com/reel/${reel.id}/embed/`}
                      title={`Instagram reel ${reel.id}`}
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
            ))}
          </div>
        </div>
        <noscript>
          <div className="grid gap-8 md:grid-cols-2">
            {reels.map((reel) => (
              <div
                key={reel.id}
                className="mx-auto h-[760px] w-full max-w-[540px] overflow-hidden rounded-xl border border-gray-200 bg-white"
              >
                <iframe
                  src={`https://www.instagram.com/reel/${reel.id}/embed/`}
                  title={`Instagram reel ${reel.id}`}
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
        </noscript>
      </section>

      <section className="space-y-6 border-t border-gray-100 pt-12">
        <div className="space-y-1">
          <div className="flex justify-between items-end">
            <h2 className="text-3xl font-sans font-medium text-black tracking-tight">
              Lana Yepifanova (@lana_yaps)
            </h2>
          </div>
          <div className="flex justify-between items-baseline">
            <div className="text-lg font-serif text-black">Personal Branding</div>
          </div>
        </div>

        <p className="text-gray-600 font-serif text-sm leading-relaxed max-w-2xl">
          I make short-form videos about tech, recent news, and startups. I like to make tutorials on how to use AI tools to build cool things like automating video editing with Claude, agent orchestration, MCP servers, and web scraping. I am also starting a series to explain technical ideas in math, physics, and machine learning to nontechnical viewers.
        </p>

        <div className="flex flex-wrap gap-x-4 gap-y-2 text-xs font-sans">
          <a
            href="https://www.instagram.com/lana_yaps/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 text-black hover:text-gray-600 transition-colors border-b border-black/20 hover:border-black pb-0.5"
          >
            <Instagram className="h-3 w-3" />
            @lana_yaps on Instagram
          </a>
          <a
            href="https://www.tiktok.com/@lana_yaps"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 text-black hover:text-gray-600 transition-colors border-b border-black/20 hover:border-black pb-0.5"
          >
            <ExternalLink className="h-3 w-3" />
            @lana_yaps on TikTok
          </a>
          <a
            href="https://www.youtube.com/@lana_yaps"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 text-black hover:text-gray-600 transition-colors border-b border-black/20 hover:border-black pb-0.5"
          >
            <Youtube className="h-3 w-3" />
            @lana_yaps on YouTube
          </a>
          <a
            href="https://x.com/lana_yaps"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 text-black hover:text-gray-600 transition-colors border-b border-black/20 hover:border-black pb-0.5"
          >
            <Twitter className="h-3 w-3" />
            @lana_yaps on X
          </a>
        </div>

        <iframe
          src="https://www.instagram.com/lana_yaps/embed/"
          title="Lana Yepifanova on Instagram"
          className="h-[760px] w-full rounded-xl border border-gray-200 bg-white"
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

      <section className="space-y-6 border-t border-gray-100 pt-12">
        <div className="space-y-1">
          <div className="flex justify-between items-end">
            <h2 className="text-3xl font-sans font-medium text-black tracking-tight">
              Leading Owls Podcast
            </h2>
          </div>
          <div className="flex justify-between items-baseline">
            <div className="text-lg font-serif text-black">Podcast Host</div>
          </div>
        </div>

        <p className="text-gray-600 font-serif text-sm leading-relaxed max-w-2xl">
          The Leading Owls Podcast is the official leadership podcast of the Doerr Institute for New Leaders at Rice University, showcasing the students, faculty, alumni, and professionals who are shaping the future through leadership. Episodes are available on Spotify, Apple Podcasts, YouTube, Amazon Music, and other major podcast platforms.
        </p>

        <div className="flex flex-wrap gap-x-4 gap-y-2 text-xs font-sans">
          <a
            href="https://doerr.rice.edu/podcast"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 text-black hover:text-gray-600 transition-colors border-b border-black/20 hover:border-black pb-0.5"
          >
            <ExternalLink className="h-3 w-3" />
            Leading Owls Podcast
          </a>
          <a
            href="https://podcasts.apple.com/us/podcast/leading-owls-podcast/id1775472900"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 text-black hover:text-gray-600 transition-colors border-b border-black/20 hover:border-black pb-0.5"
          >
            <ExternalLink className="h-3 w-3" />
            Listen on Apple Podcasts
          </a>
          <a
            href="https://open.spotify.com/show/4pq6hc0C02oQZYtS3HVjId"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 text-black hover:text-gray-600 transition-colors border-b border-black/20 hover:border-black pb-0.5"
          >
            <ExternalLink className="h-3 w-3" />
            Listen on Spotify
          </a>
          <a
            href="https://www.iheart.com/podcast/1333-leading-owls-podcast-191934518/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 text-black hover:text-gray-600 transition-colors border-b border-black/20 hover:border-black pb-0.5"
          >
            <ExternalLink className="h-3 w-3" />
            Listen on iHeart
          </a>
          <a
            href="https://www.buzzsprout.com/2382212"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 text-black hover:text-gray-600 transition-colors border-b border-black/20 hover:border-black pb-0.5"
          >
            <ExternalLink className="h-3 w-3" />
            Listen on Buzzsprout
          </a>
          <a
            href="https://www.amazon.in/Leading-Owls-Podcast/dp/B0D8QS1CTV"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 text-black hover:text-gray-600 transition-colors border-b border-black/20 hover:border-black pb-0.5"
          >
            <ExternalLink className="h-3 w-3" />
            Listen on Amazon Music
          </a>
          <a
            href="https://music.youtube.com/playlist?list=PLfuAYIKsj9tCv8zMzCAjALedFgNPQA-Ra"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 text-black hover:text-gray-600 transition-colors border-b border-black/20 hover:border-black pb-0.5"
          >
            <Youtube className="h-3 w-3" />
            Listen on YouTube Music
          </a>
        </div>

        <iframe
          src="https://embed.podcasts.apple.com/us/podcast/leading-the-first-o-week-at-chao-college/id1775472900?i=1000783364521"
          title="Leading the First O-Week at Chao College"
          className="h-[175px] w-full rounded-xl border border-gray-200 bg-white"
          loading="lazy"
          allow="autoplay *; encrypted-media *; fullscreen *; clipboard-write"
          sandbox="allow-forms allow-popups allow-same-origin allow-scripts allow-top-navigation-by-user-activation"
        >
          <a
            href="https://podcasts.apple.com/us/podcast/leading-the-first-o-week-at-chao-college/id1775472900?i=1000783364521"
            target="_blank"
            rel="noopener noreferrer"
          >
            Listen to Leading the First O-Week at Chao College
          </a>
        </iframe>
      </section>

      <PianoYoutubeSection />
    </div>
  );
}
