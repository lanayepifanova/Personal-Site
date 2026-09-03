import { useEffect, useState } from "react";
import { Github, Instagram, Linkedin } from "lucide-react";

export const sections = [
  { id: "building", label: "building" },
  { id: "engineering", label: "engineering" },
  { id: "media", label: "media" },
  { id: "communities", label: "communities" },
];

const socials = [
  { label: "LinkedIn", href: "https://www.linkedin.com/in/lana-yepifanova/", Icon: Linkedin },
  { label: "GitHub", href: "https://github.com/lanayepifanova", Icon: Github },
  { label: "Instagram", href: "https://www.instagram.com/lana_yaps/", Icon: Instagram },
];

export default function SectionNav() {
  const [activeId, setActiveId] = useState<string>(sections[0].id);

  useEffect(() => {
    // Whichever section heading sits closest under the sticky bar wins.
    const updateActive = () => {
      const marker = window.innerHeight * 0.3;
      let current = sections[0].id;

      for (const section of sections) {
        const node = document.getElementById(section.id);
        if (!node) continue;
        if (node.getBoundingClientRect().top <= marker) {
          current = section.id;
        }
      }

      setActiveId(current);
    };

    updateActive();
    window.addEventListener("scroll", updateActive, { passive: true });
    window.addEventListener("resize", updateActive);

    return () => {
      window.removeEventListener("scroll", updateActive);
      window.removeEventListener("resize", updateActive);
    };
  }, []);

  const goTo = (event: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    const node = document.getElementById(id);
    if (!node) return;

    event.preventDefault();
    node.scrollIntoView({ behavior: "smooth", block: "start" });
    window.history.replaceState(null, "", id === "home" ? "/" : `#${id}`);
  };

  return (
    <nav className="sticky top-0 z-30 border-b border-white/10 bg-black/55 py-3 backdrop-blur-md">
      {/* Name left, sections centred, socials right. On mobile the sections
          drop to their own row so the three groups never collide. */}
      <div className="mx-auto flex w-full max-w-6xl flex-wrap items-center gap-x-4 gap-y-2 px-4 drop-shadow-[0_2px_12px_rgba(0,0,0,0.65)]">
        <h1 className="order-1 shrink-0 text-[13px] font-semibold tracking-tight text-white sm:text-sm">
          Lana Yepifanova
        </h1>

        <div className="order-3 flex w-full justify-between gap-x-2 text-[13px] font-sans text-white sm:order-2 sm:w-auto sm:flex-1 sm:justify-center sm:gap-x-7 sm:text-sm">
          {sections.map((section) => {
            const isActive = activeId === section.id;

            return (
              <a
                key={section.id}
                href={`#${section.id}`}
                onClick={(event) => goTo(event, section.id)}
                aria-current={isActive ? "true" : undefined}
                className={`whitespace-nowrap decoration-1 underline-offset-4 transition-all ${
                  isActive ? "underline" : "text-white/75 hover:text-white hover:underline"
                }`}
              >
                {section.label}
              </a>
            );
          })}
        </div>

        <div className="order-2 ml-auto flex shrink-0 items-center gap-3 sm:order-3 sm:ml-0">
          {socials.map(({ label, href, Icon }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noreferrer noopener"
              aria-label={label}
              title={label}
              className="text-white/70 transition-colors hover:text-white"
            >
              <Icon className="h-4 w-4" />
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
}
