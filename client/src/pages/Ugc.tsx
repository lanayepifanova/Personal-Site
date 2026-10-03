import type { ReactNode } from "react";
import { usePageMeta } from "@/hooks/usePageMeta";
import {
  audience,
  testimonials,
  ugcReels,
  upcomingProjects,
} from "@/data/ugc";
import { reelEmbedUrl } from "./Media";

const email = "yepifanova.lana@gmail.com";

function Section({ id, title, children }: { id: string; title: string; children: ReactNode }) {
  return (
    <section id={id} className="space-y-3 border-t border-gray-400 pt-6">
      <h3 className="text-[18px] font-bold">{title}</h3>
      {children}
    </section>
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
    <div className="space-y-8">
      <div className="flex flex-col gap-6 sm:flex-row sm:items-start">
        <img
          src="/images/ugc-headshot.jpg"
          alt="Lana Yepifanova"
          className="h-48 w-44 shrink-0 border border-gray-400 object-cover"
        />
        <div className="space-y-3">
          <h2 className="text-[22px] font-bold">UGC & Media Kit</h2>
          <p>
            I'm Lana (
            <a href="https://www.instagram.com/lana_yaps/" target="_blank" rel="noopener noreferrer">
              @lana_yaps
            </a>
            ). I make UGC videos for tech, finance, and educational companies, and I explain technical products so a
            broad audience gets them.
          </p>
          <p>
            <b>22K</b> Instagram followers · <b>{ugcReels.length}</b> brands ·{" "}
            <b>24-hour</b> turnaround
          </p>
          <p>
            [ <a href="#work">work</a> | <a href="#audience">audience</a> | <a href="#testimonials">testimonials</a> |{" "}
            <a href="#contact">contact</a> ]
          </p>
        </div>
      </div>

      <Section id="work" title="Recent Work">
        {/* One reel per brand, captioned with the brand name; the row scrolls sideways on phones. */}
        <div className="plain-row items-start">
          {ugcReels.map((reel) => (
            <figure key={reel.id} className="m-0 shrink-0 space-y-1">
              <figcaption className="font-bold">{reel.brand}</figcaption>
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

      <Section id="audience" title="Instagram Audience">
        <dl className="max-w-3xl space-y-1">
          {audience.map((row) => (
            <div key={row.label} className="sm:flex sm:gap-3">
              <dt className="shrink-0 font-bold sm:w-32">{row.label}</dt>
              <dd className="m-0">{row.value}</dd>
            </div>
          ))}
        </dl>
      </Section>

      <Section id="testimonials" title="Testimonials">
        <div className="grid max-w-5xl gap-6 md:grid-cols-2">
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

      <Section id="contact" title="Contact">
        <p>
          For sponsored videos, launches, and long-term partnerships, email <a href={`mailto:${email}`}>{email}</a>. I
          usually reply within 24–48 hours.
        </p>
      </Section>
    </div>
  );
}
