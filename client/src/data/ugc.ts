// Content for the /ugc media kit. Numbers and testimonials come from the old media-kit/ deck;
// update them here when they change.

// UGC brand-deal reels. Same shape as `reels` in Media.tsx, plus the brand each video was made for
// and an optional view count shown in the caption. Add them in any order; `ugcReels` below sorts
// them by views, most first, with reels missing a count at the end.
const reels: { brand: string; views?: string; id: string; url: string }[] = [
  {
    brand: "Kalshi",
    views: "194K",
    id: "DcCmZeDoh_T",
    url: "https://www.instagram.com/reel/DcCmZeDoh_T/?utm_source=ig_web_copy_link&stkn=MzRlODBiNWFlZA==",
  },
  {
    brand: "Kalshi",
    views: "21.8K",
    id: "Dcr-LGDBLTo",
    url: "https://www.instagram.com/reel/Dcr-LGDBLTo/?utm_source=ig_web_copy_link&stkn=MzRlODBiNWFlZA==",
  },
  {
    brand: "ChatCut",
    views: "8.5K",
    id: "DdsWn6QBSbF",
    url: "https://www.instagram.com/reel/DdsWn6QBSbF/?utm_source=ig_web_copy_link&stkn=MzRlODBiNWFlZA==",
  },
  {
    brand: "Higgsfield",
    views: "3.5K",
    id: "Dd4yNU0NYbs",
    url: "https://www.instagram.com/reel/Dd4yNU0NYbs/?utm_source=ig_web_copy_link&stkn=MzRlODBiNWFlZA==",
  },
  {
    brand: "Gladiator Metals",
    views: "1.3K",
    id: "DeMdaLyv_v6",
    url: "https://www.instagram.com/reel/DeMdaLyv_v6/?utm_source=ig_web_copy_link&stkn=MzRlODBiNWFlZA==",
  },
];

// "194K" -> 194000, "1.2M" -> 1200000; a missing count sorts last.
function viewCount(views?: string) {
  if (!views) return -1;
  const scale = { K: 1e3, M: 1e6 }[views.slice(-1).toUpperCase()] ?? 1;
  return parseFloat(views) * scale;
}

export const ugcReels = [...reels].sort((a, b) => viewCount(b.views) - viewCount(a.views));

// Signed deals whose videos aren't posted yet; move each into `reels` once it's live.
export const upcomingProjects: string[] = [];

export const platforms = [
  { name: "Instagram", audience: "22K followers", note: "Top reels: 447K, 329K, 223K views" },
  { name: "TikTok", audience: "—", note: "—" },
  { name: "YouTube", audience: "—", note: "—" },
];

// Shown in the intro of /ugc.
export const audience = [
  { label: "Audience", value: "STEM students, recent grads, founders, and early-career professionals" },
  { label: "Best fit", value: "AI tools, SaaS, EdTech, productivity, finance, dev tools, and startups" },
  { label: "Included", value: "Free TikTok crosspost and ad codes with every package" },
];

export const brands: { name: string }[] = [
  { name: "Manus AI" },
  { name: "Runable" },
  { name: "Moonshot AI / Kimi" },
  { name: "Kalshi" },
  { name: "ChatCut" },
  { name: "Genspark" },
  { name: "Readdy AI" },
  { name: "Lilys AI" },
  { name: "StudyX" },
  { name: "Cluely" },
  { name: "Jobright" },
  { name: "Moment App" },
  { name: "Higgsfield" },
  { name: "Cursor" },
];

export const testimonials = [
  {
    quote:
      "Lana is awesome. We've run 3 separate campaigns because the conversion quality is consistently top-tier. She also uses our platform regularly and I appreciated how much she tested it out before making the video.",
    author: "Alice",
    company: "Manus AI",
  },
  {
    quote:
      "I reached out to Lana to create a short video about Kalshi and asked if she could create it as soon as possible. She got it done within 6 hours, with great response times. I would 100% encourage you to work with her.",
    author: "Nicholas Hull",
    company: "Kalshi",
  },
  {
    quote:
      "Lana was really creative with the video ideation, and stuck to our campaign timeline. She got us the video in <24 hours, which most of the creators we work with, aren't able to do.",
    author: "Kathy + Aspen",
    company: "Growth Staff, Moonshot AI / Kimi AI",
  },
  {
    quote:
      "Worked with Lana on a longer term campaign for 7 different videos. The Runable team was impressed by the depth of engagement from her community, especially from the Discord server. We had a lot of interest.",
    author: "Eshaan Pawan + Navya Choudhari",
    company: "Runable",
  },
  {
    quote:
      "The campaign drove awareness and high-quality leads for our platform. She has a pretty good audience of students and people interested in software and AI tools.",
    author: "Ocean",
    company: "Genspark",
  },
  {
    quote:
      "I worked with Lana for 2 separate videos. She always responded super quick, and I loved Lana's ability to explain complex AI concepts to a broad audience. Highly recommended.",
    author: "Hyunjeong Shin",
    company: "Lilys AI",
  },
  {
    quote:
      "She is very professional and fast when it comes to the video and campaign timelines. We wanted a very specific type of script and tone for the video, which she was flexible with, as we did many back and forth edits of the video.",
    author: "Cassandra",
    company: "Readdy AI",
  },
  {
    quote:
      "Strategic, professional, and impactful. Our collaboration with Lana exceeded all expectations. We asked for another take and a couple edits, and she redid the whole video for us. Great customer service.",
    author: "VTSP Team",
    company: "Venture & Tech Summer Program",
  },
];
