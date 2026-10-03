// Content for the /ugc media kit. Numbers and testimonials come from the old media-kit/ deck;
// update them here when they change.

// UGC brand-deal reels. Same shape as `reels` in Media.tsx, plus the brand each video was made for.
export const ugcReels = [
  {
    brand: "Kalshi",
    id: "DcCmZeDoh_T",
    url: "https://www.instagram.com/reel/DcCmZeDoh_T/?utm_source=ig_web_copy_link&stkn=MzRlODBiNWFlZA==",
  },
  {
    brand: "ChatCut",
    id: "DdsWn6QBSbF",
    url: "https://www.instagram.com/reel/DdsWn6QBSbF/?utm_source=ig_web_copy_link&stkn=MzRlODBiNWFlZA==",
  },
  {
    brand: "Higgsfield",
    id: "Dd4yNU0NYbs",
    url: "https://www.instagram.com/reel/Dd4yNU0NYbs/?utm_source=ig_web_copy_link&stkn=MzRlODBiNWFlZA==",
  },
];

// Signed deals whose videos aren't posted yet; move each into `ugcReels` once it's live.
export const upcomingProjects = ["Gladiator Metals"];

export const platforms = [
  { name: "Instagram", audience: "22K followers", note: "Top reels: 447K, 329K, 223K views" },
  { name: "TikTok", audience: "—", note: "—" },
  { name: "YouTube", audience: "—", note: "—" },
];

export const audience = [
  { label: "Age", value: "53% ages 18–24, 38% ages 25–34, 7% ages 35–44" },
  { label: "Location", value: "75% United States, 10% Canada, 8% United Kingdom, 7% India" },
  { label: "Gender", value: "79% male, 21% female" },
  { label: "Who they are", value: "STEM students, recent grads, founders, and early-career professionals" },
  { label: "Best fit", value: "AI tools, SaaS, EdTech, productivity, fintech, dev tools, and startups" },
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
