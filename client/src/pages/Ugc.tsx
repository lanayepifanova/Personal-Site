import type { ReactNode } from "react";
import { Mail } from "lucide-react";
import { usePageMeta } from "@/hooks/usePageMeta";
import { testimonials, ugcReels, upcomingProjects } from "@/data/ugc";
import { leadingOwlsDescription, PodcastEpisodes, ProfileCards, reels, reelEmbedUrl, uilgDescription } from "./Media";

const email = "yepifanova.lana@gmail.com";

function Section({
  id,
  title,
  titleClassName = "text-[18px]",
  children,
}: {
  id: string;
  title: string;
  titleClassName?: string;
  children: ReactNode;
}) {
  return (
    <section id={id} className="scroll-mt-6 space-y-3 border-t border-gray-400 pt-6">
      <h3 className={`${titleClassName} font-bold leading-tight`}>{title}</h3>
      {children}
    </section>
  );
}

// The whole, uncropped headshot sets the card's size (360px wide is about the profile cards'
// height); the contact details on the right are sized to fill the space beside it.
function ContactCard() {
  return (
    <div className="flex border border-gray-400 bg-white font-sans text-black">
      <img
        src="/images/ugc-headshot.jpg"
        alt="Lana Yepifanova"
        className="h-auto w-[360px] shrink-0 self-start border-r border-gray-400"
      />
      <div className="flex w-[300px] flex-col p-6">
        <div className="flex items-center gap-2 text-2xl font-bold leading-tight">
          <Mail className="h-7 w-7" aria-hidden />
          Contact
        </div>
        <a href={`mailto:${email}`} className="mt-3 whitespace-nowrap text-base">
          {email}
        </a>
        <p className="mt-5 text-lg leading-snug">For sponsored videos, launches, and long-term partnerships.</p>
        <p className="mt-3 text-lg leading-snug text-gray-600">
          I usually reply within <span className="whitespace-nowrap">24–48 hours</span>.
        </p>
        <a
          href={`mailto:${email}`}
          className="mt-auto block w-full rounded-lg bg-black py-3 text-center text-base font-semibold !text-white !no-underline"
        >
          Email me
        </a>
      </div>
    </div>
  );
}

export default function UgcPage() {
  usePageMeta({
    title: "UGC & Media Kit | Lana Yepifanova",
    description:
      "Lana Yepifanova's UGC portfolio and media kit: sponsored videos for tech, finance, and educational companies and audience data.",
    canonicalPath: "/ugc",
  });

  return (
    // The first section sits right under the header's rule, so it drops its own top border.
    <div className="space-y-8 [&>section:first-child]:border-t-0 [&>section:first-child]:pt-0">
      <Section
        id="personal-branding"
        title="Lana Yepifanova (@lana_yaps), UGC & Media Kit"
        titleClassName="text-[36px]"
      >
        <p className="text-[18px]">
          I make short-form and long-form UGC videos for tech, finance, and educational companies, especially AI tools,
          SaaS, and startups. I take each video from concept and script through filming and editing, and explain
          technical products in a way a broad audience gets. Every video package is posted organically on Instagram and
          TikTok with the crosspost included, ad codes for both included, and usage rights included. Collab posts and
          multi-video partnerships are welcome.
        </p>
        <ProfileCards firstCard={<ContactCard />} />
      </Section>

      {/* Demographics and testimonials share a row on wide screens and stack on phones. */}
      <div className="grid items-start gap-x-10 gap-y-12 lg:grid-cols-2">
        <Section id="demographics" title="Demographics">
          <div className="grid grid-cols-1 items-start gap-4 sm:grid-cols-2">
            <figure className="m-0 space-y-1">
              <figcaption>
                <b>Instagram</b>
              </figcaption>
              <img
                src="/images/instagram-audience-country.png"
                alt="Instagram audience by country: United States 92.0%, Canada 2.1%, United Kingdom 1.3%, Germany 1.2%, Australia 1.1%"
                className="w-full border border-gray-400"
                loading="lazy"
              />
            </figure>
            <figure className="m-0 space-y-1">
              <figcaption>
                <b>TikTok</b>
              </figcaption>
              <img
                src="/images/tiktok-audience-location.png"
                alt="TikTok audience by location: United States 86.0%, United Kingdom 5.8%, Germany 3.4%, Netherlands 1.9%, France 1.6%, Canada 1.5%, Italy 1.1%, Philippines 0.9%, Sweden 0.8%, Romania 0.7%, Other 2.3%"
                className="w-full border border-gray-400"
                loading="lazy"
              />
            </figure>
          </div>
        </Section>

        <Section id="testimonials" title="Testimonials">
          <div className="space-y-6">
            {testimonials.map((testimonial) => (
              <blockquote key={testimonial.author} className="m-0 border-l-2 border-gray-400 pl-4">
                <p>“{testimonial.quote}”</p>
                <footer className="pt-1 text-[15px] text-gray-600">
                  — {testimonial.author}, <i>{testimonial.company}</i>
                </footer>
              </blockquote>
            ))}
          </div>
        </Section>
      </div>

      <Section id="work" title="Recent Work">
        {/* One reel per brand, captioned with the brand name; the row scrolls sideways on phones. */}
        <div className="plain-row items-start">
          {ugcReels.map((reel) => (
            <figure key={reel.id} className="m-0 shrink-0 space-y-1">
              <figcaption>
                <b>{reel.brand}</b>
                {reel.views ? <span className="text-gray-600"> · {reel.views} views</span> : null}
              </figcaption>
              <iframe
                src={reelEmbedUrl(reel)}
                title={`${reel.brand} reel`}
                className="h-[600px] w-[300px] border border-gray-400 bg-white"
                allowFullScreen
                loading="lazy"
              >
                <a href={reel.url} target="_blank" rel="noopener noreferrer">
                  View the {reel.brand} reel on Instagram
                </a>
              </iframe>
            </figure>
          ))}
        </div>
        {upcomingProjects.length ? (
          <p>
            <b>Coming soon:</b> {upcomingProjects.join(", ")}
          </p>
        ) : null}
      </Section>

      <Section id="uilg" title="Ultimate Ivy League Guide">
        <p>{uilgDescription}</p>
        {/* Same reels and layout as the Ultimate Ivy League Guide gallery in Media.tsx. */}
        <div className="plain-row">
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
      </Section>

      <Section id="leading-owls" title="Leading Owls Podcast, Podcast Host">
        <p>{leadingOwlsDescription}</p>
        <PodcastEpisodes />
      </Section>
    </div>
  );
}
