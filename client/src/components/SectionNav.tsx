import { Link, useLocation } from "wouter";

const links = [
  { label: "home", href: "/" },
  { label: "engineering", href: "/engineering" },
  { label: "media", href: "/media" },
  { label: "communities", href: "/communities" },
];

const navRoutes = ["/", "/engineering", "/media", "/communities"];

export default function SectionNav() {
  const [location] = useLocation();

  if (!navRoutes.includes(location)) {
    return null;
  }

  return (
    // Identical on every route so the bar never shifts between pages.
    <nav className="mx-auto flex w-full max-w-[27rem] shrink-0 justify-between gap-x-2 px-1 pt-2 pb-4 text-[13px] font-sans text-white drop-shadow-[0_2px_12px_rgba(0,0,0,0.65)] sm:text-sm">
      {links.map((link) => {
        const isActive = location === link.href;

        return (
          <Link
            key={link.href}
            href={link.href}
            aria-current={isActive ? "page" : undefined}
            className={`whitespace-nowrap decoration-1 underline-offset-4 transition-all ${
              isActive ? "underline" : "hover:underline"
            }`}
          >
            {link.label}
          </Link>
        );
      })}
    </nav>
  );
}
