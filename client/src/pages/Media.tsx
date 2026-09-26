import { useEffect } from "react";
import { Entry } from "@/components/Plain";
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
  {
    id: "DcJGLHzhvzG",
    url: "https://www.instagram.com/reel/DcJGLHzhvzG/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==&igsi=MzRlODBiNWFlZA==",
  },
  {
    id: "DcNG_wfAMX5",
    url: "https://www.instagram.com/reel/DcNG_wfAMX5/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==&igsi=MzRlODBiNWFlZA==",
  },
  {
    id: "DcPo0YbR3nf",
    url: "https://www.instagram.com/reel/DcPo0YbR3nf/?utm_source=ig_web_copy_link&igsh=NTc4MTIwNjQ2YQ==&igsi=NTc4MTIwNjQ2YQ==",
  },
  {
    id: "DcQ0eRfBICZ",
    url: "https://www.instagram.com/reel/DcQ0eRfBICZ/?utm_source=ig_web_copy_link&igsh=NTc4MTIwNjQ2YQ==&igsi=NTc4MTIwNjQ2YQ==",
  },
  {
    id: "DcUvX0PgyCb",
    url: "https://www.instagram.com/reel/DcUvX0PgyCb/?utm_source=ig_web_copy_link",
  },
  {
    id: "DcUFRSko7IL",
    type: "p",
    url: "https://www.instagram.com/p/DcUFRSko7IL/?utm_source=ig_web_copy_link&igsi=MzRlODBiNWFlZA==",
  },
  {
    id: "DcYi7kmBmhO",
    url: "https://www.instagram.com/reel/DcYi7kmBmhO/?utm_source=ig_web_copy_link&igsi=MzRlODBiNWFlZA==",
  },
  {
    id: "DcZ5OxCgqWk",
    url: "https://www.instagram.com/reel/DcZ5OxCgqWk/?utm_source=ig_web_copy_link&igsi=MzRlODBiNWFlZA==",
  },
  {
    id: "DcfCktygNij",
    url: "https://www.instagram.com/reel/DcfCktygNij/?utm_source=ig_web_copy_link&igsi=MzRlODBiNWFlZA==",
  },
  {
    id: "DcgRUvQSEbB",
    url: "https://www.instagram.com/reel/DcgRUvQSEbB/?utm_source=ig_web_copy_link&igsi=MzRlODBiNWFlZA==",
  },
  {
    id: "Dchs8SPAWYk",
    url: "https://www.instagram.com/reel/Dchs8SPAWYk/?utm_source=ig_web_copy_link&igsi=MzRlODBiNWFlZA==",
  },
  {
    id: "Dcm4J3LgF9J",
    url: "https://www.instagram.com/reel/Dcm4J3LgF9J/?utm_source=ig_web_copy_link&igsi=MzRlODBiNWFlZA==",
  },
  {
    id: "DcpaltrADSZ",
    url: "https://www.instagram.com/reel/DcpaltrADSZ/?utm_source=ig_web_copy_link&igsi=MzRlODBiNWFlZA==",
  },
  {
    id: "DcqkfinBthc",
    url: "https://www.instagram.com/reel/DcqkfinBthc/?utm_source=ig_web_copy_link&igsi=MzRlODBiNWFlZA==",
  },
  {
    id: "DcxKbo9gVvx",
    url: "https://www.instagram.com/reel/DcxKbo9gVvx/?utm_source=ig_web_copy_link&igsi=MzRlODBiNWFlZA==",
  },
  {
    id: "DcyS3siBeeb",
    url: "https://www.instagram.com/reel/DcyS3siBeeb/?utm_source=ig_web_copy_link&igsi=MzRlODBiNWFlZA==",
  },
  {
    id: "Dc2MyW4RB6h",
    url: "https://www.instagram.com/reel/Dc2MyW4RB6h/?utm_source=ig_web_copy_link&stkn=MzRlODBiNWFlZA==",
  },
  {
    id: "Dc8l_4ahiLF",
    url: "https://www.instagram.com/reel/Dc8l_4ahiLF/?utm_source=ig_web_copy_link&stkn=MzRlODBiNWFlZA==",
  },
  {
    id: "Dc-CZkVAO5Q",
    url: "https://www.instagram.com/reel/Dc-CZkVAO5Q/?utm_source=ig_web_copy_link&stkn=MzRlODBiNWFlZA==",
  },
  {
    id: "DdDF5URAhYj",
    url: "https://www.instagram.com/reel/DdDF5URAhYj/?utm_source=ig_web_copy_link&stkn=MzRlODBiNWFlZA==",
  },
  {
    id: "DdFm2kkBylZ",
    url: "https://www.instagram.com/reel/DdFm2kkBylZ/?utm_source=ig_web_copy_link&stkn=MzRlODBiNWFlZA==",
  },
  {
    id: "DdF0HmjAeo6",
    url: "https://www.instagram.com/reel/DdF0HmjAeo6/?utm_source=ig_web_copy_link&stkn=MzRlODBiNWFlZA==",
  },
  {
    id: "DdMCyn_hqMQ",
    url: "https://www.instagram.com/reel/DdMCyn_hqMQ/?utm_source=ig_web_copy_link&stkn=MzRlODBiNWFlZA==",
  },
  {
    id: "DdY6xhqh50t",
    url: "https://www.instagram.com/reel/DdY6xhqh50t/?utm_source=ig_web_copy_link&stkn=MzRlODBiNWFlZA==",
  },
  {
    id: "DdgpIabBQ1v",
    url: "https://www.instagram.com/reel/DdgpIabBQ1v/?utm_source=ig_web_copy_link&stkn=MzRlODBiNWFlZA==",
  },
];

export const reelEmbedUrl = (reel: { id: string; type?: string }) =>
  `https://www.instagram.com/${reel.type ?? "reel"}/${reel.id}/embed/`;

// Spotify episode IDs, from open.spotify.com/episode/<id>.
export const podcastEpisodes = [
  { id: "55CLVCwAoeL6yx3Bk3SX8E", title: "Leading the First O-Week at Chao College" },
  { id: "5v4E16Gh9doVUpaLUGAFsI", title: "You Don't Have to Be Loud to Be a Leader" },
];

export const episodeEmbedUrl = (episode: { id: string }) => `https://open.spotify.com/embed/episode/${episode.id}`;
export const episodeUrl = (episode: { id: string }) => `https://open.spotify.com/episode/${episode.id}`;

// TikTok's official creator embed: a blockquote that their embed.js script turns into a profile card.
function TikTokProfile({ username }: { username: string }) {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://www.tiktok.com/embed.js";
    script.async = true;
    document.body.appendChild(script);
    return () => script.remove();
  }, []);

  const profileUrl = `https://www.tiktok.com/@${username}`;

  return (
    <div className="w-[288px] overflow-hidden border border-gray-400 bg-white">
      <blockquote
        className="tiktok-embed !m-0"
        cite={profileUrl}
        data-unique-id={username}
        data-embed-type="creator"
        style={{ maxWidth: 780, minWidth: 288 }}
      >
        <section>
          <a href={profileUrl} target="_blank" rel="noopener noreferrer">
            @{username} on TikTok
          </a>
        </section>
      </blockquote>
    </div>
  );
}

export default function MediaSection() {
  return (
    <div className="space-y-10">
      <Entry title="Lana Yepifanova (@lana_yaps)" role="Personal Branding">
        <p>
          I make short-form videos about tech, recent news, and startups. I'm working on two new series: one where I learn technical concepts and explain them to a nontechnical audience, and one where I document building hardware projects. Before this, I ran a small social media marketing agency and made videos for UGC campaigns. Email{" "}
          <a href="mailto:yepifanova.lana@gmail.com">yepifanova.lana@gmail.com</a> if you are interested.
        </p>
        {/* Instagram and TikTok always side by side; on phones the row scrolls sideways. TikTok's
            creator card is a fixed 288x388, so Instagram is cut to the same size. */}
        <div className="plain-row mt-2 items-start gap-4">
          <iframe
            src="https://www.instagram.com/lana_yaps/embed/"
            title="Lana Yepifanova on Instagram"
            className="h-[388px] w-[288px] border border-gray-400 bg-white"
            allowFullScreen
            loading="lazy"
          >
            <a href="https://www.instagram.com/lana_yaps/?hl=en" target="_blank" rel="noopener noreferrer">
              View @lana_yaps on Instagram
            </a>
          </iframe>
          <TikTokProfile username="lana_yaps" />
        </div>
      </Entry>

      <Entry title="Ultimate Ivy League Guide" role="Content Creator">
        <p>
          Ultimate Ivy League Guide is one of the fastest-growing college admissions mentorship companies, featured in Forbes, Business Insider, Yahoo, and other leading publications for its innovative approach to college admissions. Through personalized coaching, strategic planning, and its signature Narrative Method, the company empowers students to build standout applications that showcase their unique strengths and long-term potential.
        </p>
        <div className="plain-row mt-2">
          {reels.map((reel) => (
            <iframe
              key={reel.id}
              src={reelEmbedUrl(reel)}
              title={`Instagram reel ${reel.id}`}
              className="h-[600px] w-[300px] border border-gray-400 bg-white"
              allowFullScreen
              loading="lazy"
            >
              <a href={reel.url} target="_blank" rel="noopener noreferrer">
                View this reel on Instagram
              </a>
            </iframe>
          ))}
        </div>
      </Entry>

      <Entry title="Leading Owls Podcast" role="Podcast Host">
        <p>
          The Leading Owls Podcast is the official leadership podcast of the Doerr Institute for New Leaders at Rice University, showcasing the students, faculty, alumni, and professionals who are shaping the future through leadership. Episodes are available on Spotify, Apple Podcasts, YouTube, Amazon Music, and other major podcast platforms.
        </p>
        {/* Episodes side by side in one sideways-scrolling row. */}
        <div className="plain-row mt-2">
          {podcastEpisodes.map((episode) => (
            <iframe
              key={episode.id}
              src={episodeEmbedUrl(episode)}
              title={episode.title}
              className="h-[152px] w-[min(85vw,480px)] rounded-xl"
              loading="lazy"
              allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
            >
              <a href={episodeUrl(episode)} target="_blank" rel="noopener noreferrer">
                Listen to {episode.title}
              </a>
            </iframe>
          ))}
        </div>
      </Entry>

      <PianoYoutubeSection />
    </div>
  );
}
