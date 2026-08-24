import { Link, useLocation } from "wouter";

const links = [
  { label: "home", href: "/" },
  { label: "engineering", href: "/engineering" },
  { label: "media", href: "/media" },
  { label: "communities", href: "/communities" },
];

const navRoutes = ["/engineering", "/media", "/communities"];

export default function SectionNav() {
  const [location] = useLocation();

  if (!navRoutes.includes(location)) {
    return null;
  }

  return (
    <nav className="flex justify-center gap-6 px-4 pt-2 pb-6 text-sm font-sans text-black">
      {links.map((link) => (
        <Link
          key={link.href}
          href={link.href}
          className="hover:underline decoration-1 underline-offset-4 transition-all"
        >
          {link.label}
        </Link>
      ))}
    </nav>
  );
}
