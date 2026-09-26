import { useEffect, useRef, type ReactNode } from "react";
import { Entry, PhotoRow } from "@/components/Plain";
import { useLocation } from "wouter";
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

const linkedInPostWidth = 504;

// LinkedIn embeds don't reflow when made smaller, so `scale` shrinks each post as a whole
// (rendered at full size, then scaled down inside a box of the smaller size).
function LinkedInPostRow({
  posts,
  height,
  scale = 1,
  className,
  children,
}: {
  posts: LinkedInPost[];
  height: number;
  scale?: number;
  className?: string;
  children?: ReactNode;
}) {
  return (
    <div className={className ? `plain-row ${className}` : "plain-row"}>
      {children}
      {posts.map((post) =>
        scale === 1 ? (
          <iframe
            key={post.url}
            src={post.url}
            title={post.title}
            style={{ height }}
            className="w-[min(90vw,504px)] border border-gray-400 bg-white"
            loading="lazy"
            allowFullScreen
          ></iframe>
        ) : (
          <div
            key={post.url}
            className="overflow-hidden border border-gray-400 bg-white"
            style={{ width: linkedInPostWidth * scale, height: height * scale }}
          >
            <iframe
              src={post.url}
              title={post.title}
              style={{
                width: linkedInPostWidth,
                height,
                transform: `scale(${scale})`,
                transformOrigin: "top left",
              }}
              loading="lazy"
              allowFullScreen
            ></iframe>
          </div>
        ),
      )}
    </div>
  );
}

export default function CommunitiesSection() {
  const mapContainerRef = useRef<HTMLDivElement | null>(null);
  const [, setLocation] = useLocation();

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
  const sportsDescription = (
    <>
      I placed #1 at the{" "}
      <a
        href="https://www.btsny.org/post/beat-the-streets-academy-win-titles-2023-nyc-mayors-cup-wrestling-results"
        target="_blank"
        rel="noopener noreferrer"
      >
        Mayor's Cup Championship for Girls Wrestling
      </a>{" "}
      in Jan 2023. In high school, I was a part of{" "}
      <a
        href="https://thhsclassic.com/12147/sport/girls-jv-cross-country-holds-title-of-queens-borough-champions-for-27th-year/"
        target="_blank"
        rel="noopener noreferrer"
      >
        Girls JV Track &amp; Field
      </a>
      , Girls Varsity Tennis, Girls Varsity Swimming, Girls Varsity Flag Football, and{" "}
      <a
        href="https://thhsclassic.com/18762/sport/psal-winter-season-five-thhs-athletes-with-outstanding-stats/"
        target="_blank"
        rel="noopener noreferrer"
      >
        CoEd Varsity Wrestling
      </a>
      . At Rice University, I am part of the{" "}
      <a href="https://www.instagram.com/ricepowerlifting/" target="_blank" rel="noopener noreferrer">
        Rice Competitive Powerlifting Team
      </a>
      , Rice Competitive Boxing Team, Rice Women's Club Lacrosse, and the Rice Club Sailing Team. I am also involved in Intramural Girls Basketball and the Will Rice Beer Bike Team.
    </>
  );
  const danceRole = "";
  const danceDescription = (
    <>
      When I was little, I was part of the{" "}
      <a href="https://www.abt.org/" target="_blank" rel="noopener noreferrer">
        American Ballet Theatre
      </a>{" "}
      from age 7-12 and then{" "}
      <a href="https://www.roseacademyofballet.com/" target="_blank" rel="noopener noreferrer">
        Rose Academy of Ballet
      </a>{" "}
      from age 12-18. At Rice University, I am part of the{" "}
      <a href="https://www.instagram.com/basyk.rice/?hl=en" target="_blank" rel="noopener noreferrer">
        BASYK Dance Team
      </a>{" "}
      and joined Wiess Tabletop Theatre as a Cabaret Dancer. When I took my gap semester in Boston, I joined the{" "}
      <a href="https://www.harvardaadt.org" target="_blank" rel="noopener noreferrer">
        Harvard AADT Dance Team
      </a>{" "}
      for the semester and performed in their fall showcase.
    </>
  );
  const volunteerRole = "";
  const musicRole = "";
  const musicDescription = (
    <>
      I was part of the Chamber Music Society at{" "}
      <a
        href="https://www.chambermusicsociety.org/education-and-community-engagement/for-emerging-artists/ymc"
        target="_blank"
        rel="noopener noreferrer"
      >
        Lincoln Center's Young Musicians Concert
      </a>{" "}
      and made it to the{" "}
      <a href="https://playbill.com/article/young-musicians-on-the-tully-stage" target="_blank" rel="noopener noreferrer">
        final stage
      </a>{" "}
      to perform at Alice Tully Hall two years in a row. We played{" "}
      <a href="https://youtu.be/9fDRZKqb4Uo" target="_blank" rel="noopener noreferrer">
        Sarasate Navarra for Two Violins and Piano Op. 33
      </a>{" "}
      the first year, and{" "}
      <a href="https://youtu.be/_DiAbZRqQZg" target="_blank" rel="noopener noreferrer">
        Nino Rota Trio for Flute, Violin and Piano
      </a>{" "}
      the second year. I was
      also a part of the{" "}
      <a
        href="https://thhsclassic.com/16500/arts-entertainment/thhs-music-program-performs-in-an-eventful-month-of-concerts-and-festivals/"
        target="_blank"
        rel="noopener noreferrer"
      >
        Chamber Strings Group
      </a>
      , Pit Orchestra, and S!NG Instrumental Group in high school, and was
      selected for the{" "}
      <a
        href="https://thhsclassic.com/16181/arts-entertainment/harrisites-earn-multiples-seats-in-nyc-honors-music-festival/"
        target="_blank"
        rel="noopener noreferrer"
      >
        NYC Honors Festival
      </a>
      .
    </>
  );
  const volunteerDescription = (
    <>
      I participated in Rice University's Center for Civic Leadership Alternative Spring Break program twice. First, it
      was for a project called{" \u201c"}
      <a href="https://sites.google.com/rice.edu/asbdigitalshowcase/home" target="_blank" rel="noopener noreferrer">
        Bringing Health Home: Addressing the Absence of Primary Care in Homeless Communities
      </a>
      {",\u201d "}
      partnered with Precinct 2, ReVision, and Lord of the Streets in Houston, and Grace at the Green Light, Unity,
      Catholic Churches, Bridge House, and Ozanam Inn in New Orleans. Second, it was for a project called{" \u201c"}
      <a href="https://sites.google.com/rice.edu/repairing-the-leak/home" target="_blank" rel="noopener noreferrer">
        Repairing the Leak: Exploring the Link Between Waterway Pollution and Environmental Health
      </a>
      {",\u201d "}
      partnered with Texas Environmental Justice Advocacy Services, Sunrise Movement Houston, and Texas Health &amp;
      Environmental Alliance.
    </>
  );
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
  return (
    <div className="space-y-10">
      <Entry
        title={
          <a href="https://riceresidency.com" target="_blank" rel="noopener noreferrer">
            Rice Residency
          </a>
        }
        role="Co-Founder and Co-Lead"
      >
        <p>
          Rice Residency is a selective, founder-led hacker house near Rice University in Houston for students and early-stage founders building software, hardware, and deep-tech startups. We have been{" "}
          <a
            href="https://www.ricethresher.org/article/rice-residency-hacker-house-opens-application-for-first-cohort-20251119"
            target="_blank"
            rel="noopener noreferrer"
          >
            featured
          </a>{" "}
          in The Thresher{" "}
          <a
            href="https://ricethresher.org/article/delusion-prevails-inside-houston-hacker-house-20260902"
            target="_blank"
            rel="noopener noreferrer"
          >
            twice
          </a>
          . We've raised 2.5M+ in funding, had 3 residents get into a16z speedrun, 1 resident get into the YC S26 batch,
          and 7 residents in the Rice Summer Venture Studio.
        </p>
        <LinkedInPostRow posts={riceResidencyPosts} height={668} scale={0.7} className="mt-4" />
      </Entry>

      <Entry
        title={
          <a href="https://harvardst.co" target="_blank" rel="noopener noreferrer">
            Harvard St Commons
          </a>
        }
        role="Cohort Resident"
      >
        <p>
          I took a gap semester from Rice University to live at the hacker house for Harvard and MIT. This experience changed my life. Alumni and affiliated founders have gone on to raise from top firms including Greylock Partners, Sequoia Capital, General Catalyst, Pear VC, Felicis Ventures, and Z Fellows.
        </p>
        {/* Group photo and LinkedIn posts share one sideways-scrolling row. */}
        <LinkedInPostRow posts={harvardStPosts} height={627} scale={0.7} className="mt-4">
          <img
            src="/images/harvard-st-commons.jpeg"
            alt="Harvard St Commons Community"
            className="h-[439px] w-auto max-w-none border border-gray-400 object-cover"
            loading="lazy"
          />
        </LinkedInPostRow>
      </Entry>

      <Entry title="Sports" role={sportsRole || undefined}>
        {sportsDescription && <p>{sportsDescription}</p>}
        <PhotoRow photos={sportsPhotos} className="mt-4" />
      </Entry>

      <Entry title="Music" role={musicRole || undefined}>
        {musicDescription && <p>{musicDescription}</p>}
        <PhotoRow photos={musicPhotos} className="mt-4" />
      </Entry>

      <Entry title="Dance" role={danceRole || undefined}>
        {danceDescription && <p>{danceDescription}</p>}
        <div className="plain-row mt-4">
          {danceVideos.map((url, index) => (
            <iframe
              key={url}
              src={url}
              title={`Dance Performance ${index + 1}`}
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
              loading="lazy"
              className="aspect-video w-72 border border-gray-400"
            ></iframe>
          ))}
          {dancePhotos.map((photo) => (
            <img
              key={photo.image}
              src={photo.image}
              alt={photo.title}
              loading="lazy"
              className="h-36 w-52 border border-gray-400 object-cover"
            />
          ))}
        </div>
      </Entry>

      <Entry title="Volunteering" role={volunteerRole || undefined}>
        {volunteerDescription && <p>{volunteerDescription}</p>}
        <PhotoRow photos={volunteerPhotos} className="mt-4" />
      </Entry>

      <Entry title="Travel Documentation">
        <p>Click on a pin to see photos from that place.</p>
        <div
          ref={mapContainerRef}
          className="relative mt-4 aspect-[16/10] min-h-[300px] w-full max-w-[960px] overflow-hidden border border-gray-400 bg-gray-50"
        />
      </Entry>
    </div>
  );
}
