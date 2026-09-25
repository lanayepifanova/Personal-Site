import { Fragment } from "react";
import { Link, useLocation } from "wouter";
import { Github, Instagram, Linkedin } from "lucide-react";

export const sections = [
  { path: "/", label: "home" },
  { path: "/engineering", label: "engineering" },
  { path: "/media", label: "media" },
  { path: "/communities", label: "communities" },
];

const socials = [
  { label: "LinkedIn", href: "https://www.linkedin.com/in/lana-yepifanova/", Icon: Linkedin },
  { label: "GitHub", href: "https://github.com/lanayepifanova", Icon: Github },
  { label: "Instagram", href: "https://www.instagram.com/lana_yaps/", Icon: Instagram },
];

export default function SectionNav() {
  const [current] = useLocation();

  return (
    <header className="space-y-2">
      {/* Name on the left, social icons top right. */}
      <div className="flex items-start justify-between gap-4">
        <h1 className="text-[28px] font-bold leading-tight">
          <Link href="/" className="!text-black !no-underline">
            Lana Yepifanova
          </Link>
        </h1>
        <div className="flex items-center gap-3 pt-2">
          {socials.map(({ label, href, Icon }) => (
            <a key={label} href={href} target="_blank" rel="noreferrer noopener" aria-label={label} title={label}>
              <Icon className="h-5 w-5" />
            </a>
          ))}
        </div>
      </div>

      {/* Tabs on the left (current one in bold), contact details on the right under the socials. */}
      <div className="flex flex-wrap items-baseline justify-between gap-x-6 gap-y-1 text-[16px]">
        <nav>
          [{" "}
          {sections.map((section, index) => (
            <Fragment key={section.path}>
              {index > 0 ? " | " : null}
              {current === section.path ? (
                <b aria-current="page">{section.label}</b>
              ) : (
                <Link href={section.path}>{section.label}</Link>
              )}
            </Fragment>
          ))}{" "}
          ]
        </nav>
        <p className="text-[15px]">
          <a href="tel:+13475965835" className="!no-underline">347-596-5835</a> |{" "}
          <a href="mailto:ly52@rice.edu" className="!no-underline">ly52@rice.edu</a>
        </p>
      </div>

      <hr className="!mt-4" />
    </header>
  );
}
