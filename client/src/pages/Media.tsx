import { useEffect } from "react";
import { Instagram, Youtube } from "lucide-react";
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
  {
    id: "DdoXh2Vh0nN",
    url: "https://www.instagram.com/reel/DdoXh2Vh0nN/?utm_source=ig_web_copy_link&stkn=MzRlODBiNWFlZA==",
  },
  {
    id: "DdwF-9RhfXm",
    url: "https://www.instagram.com/reel/DdwF-9RhfXm/?utm_source=ig_web_copy_link&stkn=MzRlODBiNWFlZA==",
  },
  {
    id: "Dd30Q13hMaX",
    url: "https://www.instagram.com/reel/Dd30Q13hMaX/?utm_source=ig_web_copy_link&stkn=MzRlODBiNWFlZA==",
  },
  {
    id: "DeJ109ohQV2",
    url: "https://www.instagram.com/reel/DeJ109ohQV2/?utm_source=ig_web_copy_link&rpxt=MzRlODBiNWFlZA==&srtk=MzRlODBiNWFlZA==",
  },
  {
    id: "DeZSn4Vh-_J",
    url: "https://www.instagram.com/reel/DeZSn4Vh-_J/?utm_source=ig_web_copy_link&psln=MzRlODBiNWFlZA==&srtk=MzRlODBiNWFlZA==",
  },
  {
    id: "Def10GyAtYE",
    url: "https://www.instagram.com/reel/Def10GyAtYE/?utm_source=ig_web_copy_link&mdxt=MzRlODBiNWFlZA==&srtk=MzRlODBiNWFlZA==",
  },
  {
    id: "DenqzG-gmQa",
    url: "https://www.instagram.com/reel/DenqzG-gmQa/?utm_source=ig_web_copy_link&obrf=MzRlODBiNWFlZA==&srtk=MzRlODBiNWFlZA==",
  },
  {
    id: "Deovbs_BMdW",
    url: "https://www.instagram.com/reel/Deovbs_BMdW/?utm_source=ig_web_copy_link&srtk=MzRlODBiNWFlZA==",
  },
  {
    id: "DeqKErhAWpR",
    url: "https://www.instagram.com/reel/DeqKErhAWpR/?utm_source=ig_web_copy_link&exln=MzRlODBiNWFlZA==&srtk=MzRlODBiNWFlZA==",
  },
];

export const reelEmbedUrl = (reel: { id: string; type?: string }) =>
  `https://www.instagram.com/${reel.type ?? "reel"}/${reel.id}/embed/`;

// Spotify episode IDs, from open.spotify.com/episode/<id>.
export const podcastEpisodes = [
  { id: "55CLVCwAoeL6yx3Bk3SX8E", title: "Leading the First O-Week at Chao College" },
  { id: "5v4E16Gh9doVUpaLUGAFsI", title: "You Don't Have to Be Loud to Be a Leader" },
  { id: "4mkVmlvFkatenaTB2PV74r", title: "From O-Week to Venture Capital: Lessons in Leadership at Rice University" },
  { id: "19ShQZhidfR6x2PD86HRRE", title: "Leading with Purpose: Building Community and Taking Chances at Rice University with Aliq" },
];

export const episodeEmbedUrl = (episode: { id: string }) => `https://open.spotify.com/embed/episode/${episode.id}`;
export const episodeUrl = (episode: { id: string }) => `https://open.spotify.com/episode/${episode.id}`;

// Instagram's own profile embed (instagram.com/lana_yaps/embed/) crashes in their script and renders
// blank, so this is a hand-built card instead. Update the numbers here when they change.
const instagramProfile = {
  username: "lana_yaps",
  name: "Lana Yepifanova",
  bio: "just a hobby, not an expert",
  email: "yepifanova.lana@gmail.com",
  stats: [
    { value: "21", label: "posts" },
    { value: "21.9K", label: "followers" },
    { value: "327", label: "following" },
  ],
};

function InstagramProfile() {
  const { username, name, bio, email, stats } = instagramProfile;
  const profileUrl = `https://www.instagram.com/${username}/`;

  return (
    <div className="relative flex h-[388px] w-[288px] flex-col items-center border border-gray-400 bg-white text-center font-sans text-black">
      <img src="/images/profile-banner.jpg" alt="" className="h-[96px] w-full object-cover" />
      <a
        href={profileUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={`@${username} on Instagram`}
        className="absolute right-3 top-3 rounded-md bg-white p-1"
      >
        {/* Instagram's brand gradient, bottom-left to top-right, used as the icon's stroke. */}
        <svg width="0" height="0" className="absolute" aria-hidden>
          <linearGradient id="instagram-gradient" x1="0" y1="1" x2="1" y2="0">
            <stop offset="0" stopColor="#feda75" />
            <stop offset="0.25" stopColor="#fa7e1e" />
            <stop offset="0.5" stopColor="#d62976" />
            <stop offset="0.75" stopColor="#962fbf" />
            <stop offset="1" stopColor="#4f5bd5" />
          </linearGradient>
        </svg>
        <Instagram className="h-6 w-6" stroke="url(#instagram-gradient)" aria-hidden />
      </a>
      <img
        src="/images/instagram-avatar.png"
        alt={`${name} on Instagram`}
        className="-mt-[46px] h-[92px] w-[92px] rounded-full border-4 border-white object-cover"
      />
      <div className="flex w-full flex-1 flex-col items-center px-4 pb-4">
        <div className="mt-3 text-lg font-bold leading-tight">{username}</div>
        <div className="text-sm text-gray-600">{name}</div>
        <div className="mt-4 flex w-full justify-around">
          {stats.map((stat) => (
            <div key={stat.label}>
              <div className="text-base font-bold leading-tight">{stat.value}</div>
              <div className="text-xs text-gray-600">{stat.label}</div>
            </div>
          ))}
        </div>
        <p className="mt-4 text-sm">
          {bio}
          <br />
          💌 <a href={`mailto:${email}`}>{email}</a>
        </p>
        <a
          href={profileUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-auto block w-full rounded-lg bg-[#0095f6] py-2 text-sm font-semibold !text-white !no-underline"
        >
          View profile
        </a>
      </div>
    </div>
  );
}

// Hand-built to the same 288x388 as the Instagram card. Update the numbers here when they change.
const youtubeProfile = {
  handle: "lana_yaps",
  name: "Lana Yepifanova",
  bio: "just a hobby, not an expert",
  email: "yepifanova.lana@gmail.com",
  stats: [
    { value: "1.32K", label: "subscribers" },
    { value: "Aug 2025", label: "joined" },
  ],
};

function YoutubeProfile() {
  const { handle, name, bio, email, stats } = youtubeProfile;
  const channelUrl = `https://www.youtube.com/@${handle}`;

  return (
    <div className="relative flex h-[388px] w-[288px] flex-col items-center border border-gray-400 bg-white text-center font-sans text-black">
      <img src="/images/profile-banner.jpg" alt="" className="h-[96px] w-full object-cover" />
      <a
        href={channelUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={`@${handle} on YouTube`}
        className="absolute right-3 top-3 rounded-md bg-white p-1"
      >
        <Youtube className="h-6 w-6 text-[#ff0000]" aria-hidden />
      </a>
      <img
        src="/images/youtube-avatar.jpg"
        alt={`${name} on YouTube`}
        className="-mt-[46px] h-[92px] w-[92px] rounded-full border-4 border-white object-cover"
      />
      <div className="flex w-full flex-1 flex-col items-center px-4 pb-4">
        <div className="mt-3 text-lg font-bold leading-tight">{name}</div>
        <div className="text-sm text-gray-600">@{handle}</div>
        <div className="mt-4 flex w-full justify-around">
          {stats.map((stat) => (
            <div key={stat.label}>
              <div className="text-base font-bold leading-tight">{stat.value}</div>
              <div className="text-xs text-gray-600">{stat.label}</div>
            </div>
          ))}
        </div>
        <p className="mt-4 text-sm">
          {bio}
          <br />
          💌 <a href={`mailto:${email}`}>{email}</a>
        </p>
        <a
          href={channelUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-auto block w-full rounded-lg bg-[#ff0000] py-2 text-sm font-semibold !text-white !no-underline"
        >
          View channel
        </a>
      </div>
    </div>
  );
}

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
          I make short-form videos about tech, recent news, and startups. I'm working on two new series: one where I learn technical concepts and explain them to a nontechnical audience, and one where I document building hardware projects. I make <a href="/ugc">UGC videos</a> for tech, finance, and educational companies. I primarily do sponsored brand deals and partnerships. Email{" "}
          <a href="mailto:yepifanova.lana@gmail.com">yepifanova.lana@gmail.com</a> if you are interested.
        </p>
        {/* The profile cards always sit side by side; on phones the row scrolls sideways. TikTok's
            creator card is a fixed 288x388, so the Instagram and YouTube cards are built to the same size. */}
        <div className="plain-row mt-4 items-start gap-4">
          <InstagramProfile />
          <TikTokProfile username="lana_yaps" />
          <YoutubeProfile />
        </div>
      </Entry>

      <Entry title="Ultimate Ivy League Guide" role="Content Creator">
        <p>
          Ultimate Ivy League Guide is one of the fastest-growing college admissions mentorship companies, featured in Forbes, Business Insider, Yahoo, and other leading publications for its innovative approach to college admissions. Through personalized coaching, strategic planning, and its signature Narrative Method, the company empowers students to build standout applications that showcase their unique strengths and long-term potential.
        </p>
        <div className="plain-row mt-4">
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
        <div className="plain-row mt-4">
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
