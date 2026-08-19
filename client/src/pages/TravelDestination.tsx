import { useLocation } from "wouter";
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
    <div className="animate-in fade-in duration-700 pt-8 pb-32 px-4 max-w-5xl mx-auto">
      <header className="space-y-3 mb-12">
        <h1 className="text-2xl sm:text-3xl font-serif font-medium text-black leading-snug">
          {title}
        </h1>
      </header>

      {photos.length > 0 ? (
        <div className="columns-1 gap-4 space-y-4 sm:columns-2 lg:columns-3">
          {photos.map((photo, index) => (
            <img
              key={photo}
              src={photo}
              alt={`${title} travel photo ${index + 1}`}
              loading={index < 3 ? "eager" : "lazy"}
              className="mb-4 w-full break-inside-avoid border border-gray-200 object-cover"
            />
          ))}
        </div>
      ) : (
        <div className="font-serif text-[15px] leading-relaxed text-gray-800">
          <p>Coming Soon</p>
        </div>
      )}
    </div>
  );
}
