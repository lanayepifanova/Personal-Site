import { useEffect, useRef, useState, type CSSProperties, type WheelEvent, type UIEvent } from "react";
import { ExternalLink, Newspaper, Instagram, Youtube, ChevronLeft, ChevronRight } from "lucide-react";
import { useLocation } from "wouter";
import { usePageMeta } from "@/hooks/usePageMeta";
import { atlasLocations, slugifyTravelCity } from "@/data/travelLocations";
import "maplibre-gl/dist/maplibre-gl.css";

type GalleryItem = {
  title: string;
  image: string;
  objectPosition?: string;
  scale?: string;
};

type LinkedInPost = {
  url: string;
  title: string;
};

function LinkedInPostCarousel({
  posts,
  height,
  label,
}: {
  posts: LinkedInPost[];
  height: number;
  label: string;
}) {
  const trackRef = useRef<HTMLDivElement | null>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const scrollToPost = (index: number) => {
    const track = trackRef.current;
    if (!track) return;
    const clamped = Math.max(0, Math.min(posts.length - 1, index));
    const card = track.children[clamped] as HTMLElement | undefined;
    if (!card) return;
    track.scrollTo({ left: card.offsetLeft - track.offsetLeft, behavior: "smooth" });
  };

  const handleScroll = (event: UIEvent<HTMLDivElement>) => {
    const track = event.currentTarget;
    const cards = Array.from(track.children) as HTMLElement[];
    let nearest = 0;
    let smallest = Number.POSITIVE_INFINITY;
    cards.forEach((card, index) => {
      const distance = Math.abs(card.offsetLeft - track.offsetLeft - track.scrollLeft);
      if (distance < smallest) {
        smallest = distance;
        nearest = index;
      }
    });
    setActiveIndex(nearest);
  };

  const handleWheel = (event: WheelEvent<HTMLDivElement>) => {
    const { deltaX, deltaY } = event;
    if (Math.abs(deltaX) > Math.abs(deltaY)) {
      return;
    }

    const track = event.currentTarget;
    const maxScrollLeft = track.scrollWidth - track.clientWidth;
    if (maxScrollLeft <= 0) {
      return;
    }

    const next = Math.max(0, Math.min(maxScrollLeft, track.scrollLeft + deltaY));
    if (next === track.scrollLeft) {
      return;
    }

    event.preventDefault();
    track.scrollLeft = next;
  };

  return (
    <div className="space-y-3">
      <div
        ref={trackRef}
        onScroll={handleScroll}
        onWheel={handleWheel}
        tabIndex={0}
        aria-label={label}
        className="flex gap-4 overflow-x-auto snap-x snap-proximity pb-1 [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden"
      >
        {posts.map((post) => (
          <div key={post.url} className="snap-start shrink-0 w-[min(100%,504px)]">
            <iframe
              src={post.url}
              title={post.title}
              style={{ height }}
              className="w-full rounded-xl border border-gray-200 bg-white"
              loading="lazy"
              allowFullScreen
            ></iframe>
          </div>
        ))}
      </div>

      <div className="flex items-center gap-3">
        <button
          type="button"
          onClick={() => scrollToPost(activeIndex - 1)}
          disabled={activeIndex === 0}
          aria-label="Previous post"
          className="h-8 w-8 rounded-full border border-gray-200 flex items-center justify-center text-black transition-colors hover:border-black disabled:opacity-30 disabled:hover:border-gray-200"
        >
          <ChevronLeft className="h-4 w-4" />
        </button>
        <button
          type="button"
          onClick={() => scrollToPost(activeIndex + 1)}
          disabled={activeIndex === posts.length - 1}
          aria-label="Next post"
          className="h-8 w-8 rounded-full border border-gray-200 flex items-center justify-center text-black transition-colors hover:border-black disabled:opacity-30 disabled:hover:border-gray-200"
        >
          <ChevronRight className="h-4 w-4" />
        </button>
        <div className="flex items-center gap-1.5">
          {posts.map((post, index) => (
            <button
              key={`dot-${post.url}`}
              type="button"
              onClick={() => scrollToPost(index)}
              aria-label={`Go to post ${index + 1}`}
              className={`h-1.5 rounded-full transition-all ${
                index === activeIndex ? "w-5 bg-black" : "w-1.5 bg-gray-300 hover:bg-gray-400"
              }`}
            />
          ))}
        </div>
        <span className="font-mono text-[10px] text-gray-500 uppercase tracking-wider ml-auto">
          {activeIndex + 1} / {posts.length}
        </span>
      </div>
    </div>
  );
}

export default function Communities() {
  const mapContainerRef = useRef<HTMLDivElement | null>(null);
  const [, setLocation] = useLocation();

  usePageMeta({
    title: "Lana Yepifanova | Communities at Rice University",
    canonicalPath: "/communities",
  });

  useEffect(() => {
    if (!mapContainerRef.current) return;

    let isMounted = true;
    let cleanup = () => {};

    import("maplibre-gl").then(({ default: maplibregl }) => {
      if (!isMounted || !mapContainerRef.current) return;

      const map = new maplibregl.Map({
        container: mapContainerRef.current,
        style: "https://demotiles.maplibre.org/style.json",
        center: [12, 28],
        zoom: 0.75,
        attributionControl: false,
        scrollZoom: false,
      });

      map.dragRotate.disable();
      map.touchZoomRotate.disableRotation();
      map.doubleClickZoom.enable();
      map.boxZoom.enable();
      map.addControl(
        new maplibregl.NavigationControl({
          showCompass: false,
          showZoom: true,
          visualizePitch: false,
        }),
        "top-right",
      );
      map.addControl(
        new maplibregl.AttributionControl({
          compact: true,
          customAttribution: "MapLibre / OpenStreetMap",
        }),
        "bottom-right",
      );

      const bounds = new maplibregl.LngLatBounds();
      const markers = atlasLocations.map((location) => {
        const markerElement = document.createElement("button");
        markerElement.type = "button";
        markerElement.setAttribute("aria-label", `${location.city}, ${location.country}`);
        markerElement.className =
          "group relative block h-7 w-7 cursor-pointer border-0 bg-transparent p-0 outline-none focus-visible:ring-2 focus-visible:ring-red-300 focus-visible:ring-offset-2 focus-visible:ring-offset-transparent";
        markerElement.innerHTML = `
          <span class="absolute left-1/2 top-0 block h-5 w-5 -translate-x-1/2 rounded-full border border-red-900 bg-red-600 shadow-[0_1px_4px_rgba(0,0,0,0.35)] transition-all duration-200 ease-out group-hover:scale-110 group-hover:shadow-[0_0_0_6px_rgba(220,38,38,0.14),0_8px_18px_rgba(0,0,0,0.28)] group-hover:bg-red-500 group-focus-visible:scale-110 group-focus-visible:shadow-[0_0_0_6px_rgba(220,38,38,0.14),0_8px_18px_rgba(0,0,0,0.28)] group-focus-visible:bg-red-500"></span>
          <span class="absolute left-1/2 top-3.5 block h-3.5 w-3.5 -translate-x-1/2 rotate-45 border-b border-r border-red-900 bg-red-600 transition-all duration-200 ease-out group-hover:scale-110 group-hover:bg-red-500 group-focus-visible:scale-110 group-focus-visible:bg-red-500"></span>
          <span class="absolute left-1/2 top-1.5 block h-2 w-2 -translate-x-1/2 rounded-full bg-white transition-all duration-200 ease-out group-hover:scale-125 group-focus-visible:scale-125"></span>
        `;
        const citySlug = slugifyTravelCity(location.city);
        markerElement.addEventListener("click", () => {
          setLocation(`/communities/travel/${citySlug}`);
        });

        const marker = new maplibregl.Marker({
          element: markerElement,
          anchor: "center",
        })
          .setLngLat([location.lon, location.lat])
          .addTo(map);

        bounds.extend([location.lon, location.lat]);
        return marker;
      });

      map.on("load", () => {
        map.fitBounds(bounds, {
          padding: 38,
          duration: 0,
          maxZoom: 1.35,
        });
      });

      cleanup = () => {
        markers.forEach((marker) => marker.remove());
        map.remove();
      };
    });

    return () => {
      isMounted = false;
      cleanup();
    };
  }, [setLocation]);
  const sportsPhotos: GalleryItem[] = [
    {
      title: "Co-Ed Varsity Wrestling",
      image: "/images/wrestling.jpg",
      objectPosition: "50% 55%",
    },
    { title: "Flag Football", image: "/images/flagfootball.jpg" },
    { title: "Track", image: "/images/track.jpg" },
    { title: "Rice Club Sailing Team", image: "/images/sailing.png" },
    { title: "Basketball", image: "/images/basketball.JPG" },
    { title: "Swimming", image: "/images/swimming.JPG" },
  ];
  const volunteerPhotos: GalleryItem[] = [
    { title: "Alternative Spring Break", image: "/images/alternativespringbreak.JPG" },
    { title: "Volunteer", image: "/images/volunteer1.JPG" },
    { title: "Volunteer", image: "/images/volunteer2.JPG" },
    { title: "Volunteer", image: "/images/volunteer3.JPG" },
    { title: "Volunteer", image: "/images/volunteer4.JPG" },
    { title: "Volunteer", image: "/images/volunteer5.JPG", objectPosition: "50% 15%", scale: "1.4" },
  ];

  const musicPhotos: GalleryItem[] = [
    {
      title: "Chamber Music at Lincoln Center",
      image: "/images/lincolncenter.JPG",
      objectPosition: "50% 70%",
    },
    { title: "Music", image: "/images/music2.JPG" },
    { title: "Music", image: "/images/music3.JPG" },
    { title: "Music", image: "/images/music10.JPG" },
    { title: "Music", image: "/images/music11.JPG" },
    { title: "Music", image: "/images/music12.JPG" },
  ];

  // Filled in once the copy is ready; each block hides itself while empty.
  const sportsRole = "";
  const sportsDescription =
    "I placed #1 at the Mayor's Cup Championship for Girls Wrestling in Jan 2023. In high school, I was a part of Girls JV Track & Field, Girls Varsity Tennis, Girls Varsity Swimming, Girls Varsity Flag Football, and CoEd Varsity Wrestling. At Rice University, I am part of the Rice Club Sailing Team, Rice Women's Club Lacrosse, and Intramural Girls Basketball.";
  const danceRole = "";
  const danceDescription =
    "When I was little, I was part of the American Ballet Theatre from age 7-12 and then Rose Academy of Ballet from age 12-18. " +
    "At Rice University, I am part of the BASYK Dance Team and the Kasama Dance Team. When I took my gap semester in Boston, I joined the Harvard AADT Dance Team for the semester and performed in their fall showcase.";
  const volunteerRole = "";
  const musicRole = "";
  const musicDescription =
    "I was part of the Chamber Music Society at Lincoln Center's Young Musicians Concert and made it to the final stage " +
    "to perform at Alice Tully Hall two years in a row. We played Sarasate Navarra for Two Violins and Piano Op. 33 the " +
    "first year, and Nino Rota Trio for Flute, Violin and Piano the second year. I was also a part of the Chamber Strings " +
    "Group, Pit Orchestra, and S!NG Instrumental Group in high school, and was selected for the NYC Honors Festival.";
  const volunteerDescription =
    "I participated in Rice University's Center for Civic Leadership Alternative Spring Break program twice. " +
    "First, it was for a project called \u201cBringing Health Home: Addressing the Absence of Primary Care in Homeless Communities,\u201d " +
    "partnered with Precinct 2, ReVision, and Lord of the Streets in Houston, and Grace at the Green Light, Unity, Catholic Churches, " +
    "Bridge House, and Ozanam Inn in New Orleans. Second, it was for a project called \u201cRepairing the Leak: Exploring the Link " +
    "Between Waterway Pollution and Environmental Health,\u201d partnered with Texas Environmental Justice Advocacy Services, " +
    "Sunrise Movement Houston, and Texas Health & Environmental Alliance.";
  const danceVideos = [
    "https://www.youtube.com/embed/Qs3Z8Mcl5hM",
    "https://www.youtube.com/embed/BZAXumqsj1k",
    "https://www.youtube.com/embed/TbtVj_JWPRE",
    "https://www.youtube.com/embed/l3sHxv4NzfA"
  ];
  const dancePhotos = [
    { title: "Basyk Dance Team", image: "/images/basyk.JPG" },
    { title: "Festival of Nations", image: "/images/festivalofnations.JPG" },
    { title: "Dance", image: "/images/harvard1.JPG" },
    { title: "Dance", image: "/images/harvard2.JPG" },
  ];

  // LinkedIn embeds come back at different natural heights, so each carousel
  // renders every card at the tallest of its posts to stay uniform.
  const riceResidencyPosts: LinkedInPost[] = [
    {
      title: "Rice Residency on LinkedIn",
      url: "https://www.linkedin.com/embed/feed/update/urn:li:ugcPost:7393677780632358912?collapsed=1",
    },
    {
      title: "Rice Residency on LinkedIn",
      url: "https://www.linkedin.com/embed/feed/update/urn:li:ugcPost:7483613851846959104?collapsed=1",
    },
    {
      title: "Rice Residency on LinkedIn",
      url: "https://www.linkedin.com/embed/feed/update/urn:li:share:7399149937298399232?collapsed=1",
    },
  ];
  const harvardStPosts: LinkedInPost[] = [
    {
      title: "Harvard St Commons on LinkedIn",
      url: "https://www.linkedin.com/embed/feed/update/urn:li:ugcPost:7405712623981240320?collapsed=1",
    },
    {
      title: "Harvard St Commons on LinkedIn",
      url: "https://www.linkedin.com/embed/feed/update/urn:li:ugcPost:7400594883188514816?collapsed=1",
    },
    {
      title: "The Residency on LinkedIn",
      url: "https://www.linkedin.com/embed/feed/update/urn:li:ugcPost:7394450878885384193?collapsed=1",
    },
  ];
  const enableManualGallery = (target: HTMLDivElement) => {
    if (!target.classList.contains("is-manual")) {
      target.classList.add("is-manual");
    }
  };

  const handleGalleryScroll = (event: UIEvent<HTMLDivElement>) => {
    enableManualGallery(event.currentTarget);
  };

  const handleGalleryWheel = (event: WheelEvent<HTMLDivElement>) => {
    const { deltaX, deltaY } = event;
    if (Math.abs(deltaX) > Math.abs(deltaY)) {
      return;
    }

    const target = event.currentTarget;
    enableManualGallery(target);
    const maxScrollLeft = target.scrollWidth - target.clientWidth;
    if (maxScrollLeft <= 0) {
      return;
    }

    const nextScrollLeft = target.scrollLeft + deltaY;
    const clampedScrollLeft = Math.max(0, Math.min(maxScrollLeft, nextScrollLeft));

    if (clampedScrollLeft === target.scrollLeft) {
      return;
    }

    event.preventDefault();
    target.scrollLeft = clampedScrollLeft;
  };

  return (
    <div className="page-stagger space-y-20 animate-in fade-in duration-700 pt-8 pb-24 px-4">
      {/* Rice Residency Section */}
      <section className="space-y-6">
        <div className="space-y-1">
          <div className="flex justify-between items-end">
            <h2 className="text-3xl font-sans font-medium text-black tracking-tight">Rice Residency</h2>
          </div>
          <div className="flex justify-between items-baseline">
            <div className="text-lg font-serif text-black">Co-Founder and Co-Lead</div>
          </div>
        </div>

        <p className="text-gray-600 font-serif text-sm leading-relaxed">
          Rice Residency is a selective, founder-led hacker house near Rice University in Houston for students and early-stage founders building software, hardware, and deep-tech startups. We've raised 2.5M+ in funding, had 3 residents get into a16z speedrun, 1 resident get into the YC S26 batch, and 7 residents in the Rice Summer Venture Studio.
        </p>

        <div className="flex gap-4 text-xs font-sans">
          <a 
            href="https://riceresidency.com" 
            target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 text-black hover:text-gray-600 transition-colors border-b border-black/20 hover:border-black pb-0.5"
            >
              <ExternalLink className="h-3 w-3" />
              Visit RiceResidency.com
            </a>
            <a 
              href="https://www.ricethresher.org/article/rice-residency-hacker-house-opens-application-for-first-cohort-20251119" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 text-black hover:text-gray-600 transition-colors border-b border-black/20 hover:border-black pb-0.5"
            >
              <Newspaper className="h-3 w-3" />
              Featured in The Thresher
            </a>
        </div>

        <LinkedInPostCarousel
          posts={riceResidencyPosts}
          height={668}
          label="Rice Residency LinkedIn posts"
        />

      </section>

      {/* Harvard St Commons Section */}
      <section className="space-y-6 border-t border-gray-100 pt-12">
        <div className="space-y-1">
          <div className="flex justify-between items-end">
            <h2 className="text-3xl font-sans font-medium text-black tracking-tight">Harvard St Commons</h2>
          </div>
          <div className="flex justify-between items-baseline">
            <div className="text-lg font-serif text-black">Resident</div>
          </div>
        </div>

        <p className="text-gray-600 font-serif text-sm leading-relaxed">
          I took a gap semester from Rice University to live at the hacker house for Harvard and MIT. This experience changed my life. Alumni and affiliated founders have gone on to raise from top firms including Greylock Partners, Sequoia Capital, General Catalyst, Pear VC, Felicis Ventures, and Z Fellows.
        </p>

        <div className="flex gap-4 text-xs font-sans">
          <a
            href="https://harvardst.co"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 text-black hover:text-gray-600 transition-colors border-b border-black/20 hover:border-black pb-0.5"
          >
            <ExternalLink className="h-3 w-3" />
            Visit HarvardSt.co
          </a>
          <a
            href="https://www.instagram.com/harvardstcommons/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 text-black hover:text-gray-600 transition-colors border-b border-black/20 hover:border-black pb-0.5"
          >
            <Instagram className="h-3 w-3" />
            See Cohort Pictures
          </a>
        </div>

        <div className="w-full overflow-hidden rounded-sm border border-gray-200">
          <img
            src="/images/harvard-st-commons.jpeg"
            alt="Harvard St Commons Community"
            className="w-full h-auto object-cover"
            loading="lazy"
          />
        </div>

        <LinkedInPostCarousel
          posts={harvardStPosts}
          height={627}
          label="Harvard St Commons LinkedIn posts"
        />
      </section>

      {/* Sports */}
      <section className="space-y-6 border-t border-gray-100 pt-12">
        <div className="space-y-1">
          <div className="flex justify-between items-end">
            <h2 className="text-3xl font-sans font-medium text-black tracking-tight">Sports</h2>
          </div>
          {sportsRole && (
            <div className="flex justify-between items-baseline">
              <div className="text-lg font-serif text-black">{sportsRole}</div>
            </div>
          )}
        </div>

        {sportsDescription && (
          <p className="text-gray-600 font-serif text-sm leading-relaxed">
            {sportsDescription}
          </p>
        )}

        <div className="flex flex-wrap gap-x-4 gap-y-2 text-xs font-sans">
          <a
            href="https://www.btsny.org/post/beat-the-streets-academy-win-titles-2023-nyc-mayors-cup-wrestling-results"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 text-black hover:text-gray-600 transition-colors border-b border-black/20 hover:border-black pb-0.5"
          >
            <Newspaper className="h-3 w-3" />
            NYC Mayor&apos;s Cup Results
          </a>
          <a
            href="https://thhsclassic.com/12147/sport/girls-jv-cross-country-holds-title-of-queens-borough-champions-for-27th-year/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 text-black hover:text-gray-600 transition-colors border-b border-black/20 hover:border-black pb-0.5"
          >
            <Newspaper className="h-3 w-3" />
            Queens Borough Champions
          </a>
          <a
            href="https://thhsclassic.com/18762/sport/psal-winter-season-five-thhs-athletes-with-outstanding-stats/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 text-black hover:text-gray-600 transition-colors border-b border-black/20 hover:border-black pb-0.5"
          >
            <Newspaper className="h-3 w-3" />
            PSAL Season Standouts
          </a>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
          {sportsPhotos.map((item) => (
            <figure key={`sports-${item.title}-${item.image}`} className="w-full">
              <div className="gallery-card">
                <img
                  src={item.image}
                  alt={item.title}
                  className="gallery-image"
                  style={{
                    ...(item.objectPosition ? { objectPosition: item.objectPosition } : {}),
                    ...(item.scale ? { transform: `scale(${item.scale})` } : {}),
                  }}
                  loading="lazy"
                />
              </div>
            </figure>
          ))}
        </div>
      </section>

      {/* Music */}
      <section className="space-y-6 border-t border-gray-100 pt-12">
        <div className="space-y-1">
          <div className="flex justify-between items-end">
            <h2 className="text-3xl font-sans font-medium text-black tracking-tight">Music</h2>
          </div>
          {musicRole && (
            <div className="flex justify-between items-baseline">
              <div className="text-lg font-serif text-black">{musicRole}</div>
            </div>
          )}
        </div>

        {musicDescription && (
          <p className="text-gray-600 font-serif text-sm leading-relaxed">
            {musicDescription}
          </p>
        )}

        <div className="flex flex-wrap gap-x-4 gap-y-2 text-xs font-sans">
          <a
            href="https://www.chambermusicsociety.org/education-and-community-engagement/for-emerging-artists/ymc"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 text-black hover:text-gray-600 transition-colors border-b border-black/20 hover:border-black pb-0.5"
          >
            <ExternalLink className="h-3 w-3" />
            Young Musicians Concert
          </a>
          <a
            href="https://playbill.com/article/young-musicians-on-the-tully-stage"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 text-black hover:text-gray-600 transition-colors border-b border-black/20 hover:border-black pb-0.5"
          >
            <Newspaper className="h-3 w-3" />
            Featured in Playbill
          </a>
          <a
            href="https://youtu.be/_DiAbZRqQZg"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 text-black hover:text-gray-600 transition-colors border-b border-black/20 hover:border-black pb-0.5"
          >
            <Youtube className="h-3 w-3" />
            Nino Rota
          </a>
          <a
            href="https://youtu.be/9fDRZKqb4Uo"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 text-black hover:text-gray-600 transition-colors border-b border-black/20 hover:border-black pb-0.5"
          >
            <Youtube className="h-3 w-3" />
            Sarasate
          </a>
          <a
            href="https://thhsclassic.com/16500/arts-entertainment/thhs-music-program-performs-in-an-eventful-month-of-concerts-and-festivals/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 text-black hover:text-gray-600 transition-colors border-b border-black/20 hover:border-black pb-0.5"
          >
            <Newspaper className="h-3 w-3" />
            NYSSMA Festival
          </a>
          <a
            href="https://thhsclassic.com/16181/arts-entertainment/harrisites-earn-multiples-seats-in-nyc-honors-music-festival/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 text-black hover:text-gray-600 transition-colors border-b border-black/20 hover:border-black pb-0.5"
          >
            <Newspaper className="h-3 w-3" />
            NYC Honors Music Festival
          </a>
          <a
            href="https://thhsclassic.com/15654/news/winter-concert-canceled-as-covid-19-cases-surge-in-nyc/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 text-black hover:text-gray-600 transition-colors border-b border-black/20 hover:border-black pb-0.5"
          >
            <Newspaper className="h-3 w-3" />
            Chamber Strings
          </a>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
          {musicPhotos.map((item) => (
            <figure key={`music-${item.image}`} className="w-full">
              <div className="gallery-card">
                <img
                  src={item.image}
                  alt={item.title}
                  className="gallery-image"
                  style={{
                    ...(item.objectPosition ? { objectPosition: item.objectPosition } : {}),
                    ...(item.scale ? { transform: `scale(${item.scale})` } : {}),
                  }}
                  loading="lazy"
                />
              </div>
            </figure>
          ))}
        </div>
      </section>

      {/* Dance */}
      <section className="space-y-6 border-t border-gray-100 pt-12">
        <div className="space-y-1">
          <div className="flex justify-between items-end">
            <h2 className="text-3xl font-sans font-medium text-black tracking-tight">Dance</h2>
          </div>
          {danceRole && (
            <div className="flex justify-between items-baseline">
              <div className="text-lg font-serif text-black">{danceRole}</div>
            </div>
          )}
        </div>

        {danceDescription && (
          <p className="text-gray-600 font-serif text-sm leading-relaxed">
            {danceDescription}
          </p>
        )}

        <div className="flex flex-wrap gap-x-4 gap-y-2 text-xs font-sans">
          <a
            href="https://www.instagram.com/basyk.rice/?hl=en"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 text-black hover:text-gray-600 transition-colors border-b border-black/20 hover:border-black pb-0.5"
          >
            <Instagram className="h-3 w-3" />
            BASYK Dance Team
          </a>
          <a
            href="https://www.harvardaadt.org"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 text-black hover:text-gray-600 transition-colors border-b border-black/20 hover:border-black pb-0.5"
          >
            <ExternalLink className="h-3 w-3" />
            Harvard AADT Dance Team
          </a>
          <a
            href="https://www.abt.org/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 text-black hover:text-gray-600 transition-colors border-b border-black/20 hover:border-black pb-0.5"
          >
            <ExternalLink className="h-3 w-3" />
            American Ballet Theatre
          </a>
          <a
            href="https://www.roseacademyofballet.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 text-black hover:text-gray-600 transition-colors border-b border-black/20 hover:border-black pb-0.5"
          >
            <ExternalLink className="h-3 w-3" />
            Baby Lana Ballet Photo
          </a>
        </div>

        <div className="gallery-track" onWheel={handleGalleryWheel} onScroll={handleGalleryScroll}>
          <div
            className="gallery-marquee"
            style={
              { ["--marquee-duration" as string]: "28s" } as CSSProperties
            }
          >
            {[0, 1].map((duplicate) => (
              <div
                key={`dance-${duplicate}`}
                className="flex gap-6 pr-6"
                aria-hidden={duplicate === 1}
              >
                {danceVideos.map((url, index) => (
                  <div key={`dance-${index}`} className="w-64 sm:w-72 shrink-0">
                    <div className="aspect-video w-full bg-gray-100 overflow-hidden border border-gray-200 rounded-sm relative">
                      <iframe
                        width="100%"
                        height="100%"
                        src={url}
                        title={`Dance Performance ${index + 1}`}
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        allowFullScreen
                        loading="lazy"
                        className="w-full h-full"
                      ></iframe>
                    </div>
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>

        <div className="gallery-track" onWheel={handleGalleryWheel} onScroll={handleGalleryScroll}>
          <div
            className="gallery-marquee"
            style={
              { ["--marquee-duration" as string]: "28s" } as CSSProperties
            }
          >
            {[0, 1].map((duplicate) => (
              <div
                key={`dance-photos-${duplicate}`}
                className="gallery-row"
                aria-hidden={duplicate === 1}
              >
                {dancePhotos.map((item) => (
                  <figure key={`${item.image}-${duplicate}`} className="gallery-item">
                    <div className="gallery-card">
                      <img
                        src={item.image}
                        alt={item.title}
                        className="gallery-image"
                        loading="lazy"
                      />
                    </div>
                  </figure>
                ))}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Volunteering */}
      <section className="space-y-6 border-t border-gray-100 pt-12">
        <div className="space-y-1">
          <div className="flex justify-between items-end">
            <h2 className="text-3xl font-sans font-medium text-black tracking-tight">Volunteering</h2>
          </div>
          {volunteerRole && (
            <div className="flex justify-between items-baseline">
              <div className="text-lg font-serif text-black">{volunteerRole}</div>
            </div>
          )}
        </div>

        {volunteerDescription && (
          <p className="text-gray-600 font-serif text-sm leading-relaxed">
            {volunteerDescription}
          </p>
        )}

        <div className="flex flex-wrap gap-x-4 gap-y-2 text-xs font-sans">
          <a
            href="https://sites.google.com/rice.edu/repairing-the-leak/home"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 text-black hover:text-gray-600 transition-colors border-b border-black/20 hover:border-black pb-0.5"
          >
            <ExternalLink className="h-3 w-3" />
            Repairing the Leak Project
          </a>
          <a
            href="https://sites.google.com/rice.edu/asbdigitalshowcase/home"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 text-black hover:text-gray-600 transition-colors border-b border-black/20 hover:border-black pb-0.5"
          >
            <ExternalLink className="h-3 w-3" />
            Bringing Health Home
          </a>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
          {volunteerPhotos.map((item) => (
            <figure key={`volunteer-${item.title}-${item.image}`} className="w-full">
              <div className="gallery-card">
                <img
                  src={item.image}
                  alt={item.title}
                  className="gallery-image"
                  style={{
                    ...(item.objectPosition ? { objectPosition: item.objectPosition } : {}),
                    ...(item.scale ? { transform: `scale(${item.scale})` } : {}),
                  }}
                  loading="lazy"
                />
              </div>
            </figure>
          ))}
        </div>
      </section>


      {/* Travel Documentation */}
      <section className="space-y-6 border-t border-gray-100 pt-12">
        <div className="space-y-1">
          <div className="flex justify-between items-end">
            <h2 className="text-2xl sm:text-3xl font-sans font-medium text-black tracking-tight">
              Travel Documentation
            </h2>
          </div>
          <div className="flex justify-between items-baseline">
            <div className="text-base sm:text-lg font-serif text-black">Hover and Click on the Pins!</div>
          </div>
        </div>

        <div
          ref={mapContainerRef}
          className="relative aspect-[16/10] min-h-[300px] w-full min-w-0 overflow-hidden border border-gray-200 bg-gray-50 sm:min-h-[360px] lg:min-h-0"
        />
      </section>
    </div>
  );
}
