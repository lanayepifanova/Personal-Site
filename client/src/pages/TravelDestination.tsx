import { Link, useLocation } from "wouter";
import { usePageMeta } from "@/hooks/usePageMeta";
import { getTravelLocationBySlug } from "@/data/travelLocations";

export default function TravelDestination() {
  const [location] = useLocation();
  const citySlug = location.split("/").pop() ?? "";
  const travelLocation = getTravelLocationBySlug(citySlug);
  const title = travelLocation ? `${travelLocation.city}, ${travelLocation.country}` : citySlug;
  const photos = travelLocation?.photos ?? [];

  usePageMeta({
    title: `${title} | Lana Yepifanova`,
    description: photos.length
      ? `Lana Yepifanova traveled to ${title}. Browse ${photos.length} photos from her atlas of the places she has lived in and visited.`
      : `Lana Yepifanova traveled to ${title}, one stop on her atlas of the places she has lived in and visited.`,
    canonicalPath: location,
  });

  return (
    <div className="space-y-6">
      <p>
        <Link href="/communities">&larr; back to communities</Link>
      </p>
      <h2 className="text-[22px] font-bold">{title}</h2>

      {photos.length > 0 ? (
        <div className="columns-1 gap-3 sm:columns-2 lg:columns-3">
          {photos.map((photo, index) => (
            <img
              key={photo}
              src={photo}
              alt={`${title} travel photo ${index + 1}`}
              loading={index < 3 ? "eager" : "lazy"}
              className="mb-3 w-full break-inside-avoid border border-gray-400 object-cover"
            />
          ))}
        </div>
      ) : (
        <p>Coming soon.</p>
      )}
    </div>
  );
}
