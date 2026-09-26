import { Fragment, type ReactNode } from "react";

// Small building blocks for the plain, academic-style pages.

export function Entry({
  title,
  role,
  children,
}: {
  title: ReactNode;
  role?: ReactNode;
  children?: ReactNode;
}) {
  return (
    <section className="space-y-2">
      <h3 className="text-[18px] font-bold">
        {title}
        {role ? <span className="font-normal">, <i>{role}</i></span> : null}
      </h3>
      {children}
    </section>
  );
}

export type PlainLink = { label: string; href: string };

// Inline links separated by pipes: Instagram | TikTok | YouTube
export function LinkList({ links }: { links: PlainLink[] }) {
  return (
    <p className="text-[15px]">
      [{" "}
      {links.map((link, index) => (
        <Fragment key={link.href}>
          {index > 0 ? " | " : null}
          <a href={link.href} target="_blank" rel="noopener noreferrer">
            {link.label}
          </a>
        </Fragment>
      ))}{" "}
      ]
    </p>
  );
}

export function PhotoRow({
  photos,
  className,
}: {
  photos: { title: string; image: string; objectPosition?: string }[];
  className?: string;
}) {
  return (
    <div className={className ? `plain-row ${className}` : "plain-row"}>
      {photos.map((photo) => (
        <img
          key={photo.image}
          src={photo.image}
          alt={photo.title}
          loading="lazy"
          className="h-36 w-52 border border-gray-400 object-cover"
          style={photo.objectPosition ? { objectPosition: photo.objectPosition } : undefined}
        />
      ))}
    </div>
  );
}
