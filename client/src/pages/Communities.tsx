import { useEffect, useRef, type ReactNode } from "react";
import { Entry, LinkList, PhotoRow } from "@/components/Plain";
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

function LinkedInPostRow({
  posts,
  height,
  children,
}: {
  posts: LinkedInPost[];
  height: number;
  children?: ReactNode;
}) {
  return (
    <div className="plain-row">
      {children}
      {posts.map((post) => (
        <iframe
          key={post.url}
          src={post.url}
          title={post.title}
          style={{ height }}
          className="w-[min(90vw,504px)] border border-gray-400 bg-white"
          loading="lazy"
          allowFullScreen
        ></iframe>
      ))}
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
  const sportsDescription =
    "I placed #1 at the Mayor's Cup Championship for Girls Wrestling in Jan 2023. In high school, I was a part of Girls JV Track & Field, Girls Varsity Tennis, Girls Varsity Swimming, Girls Varsity Flag Football, and CoEd Varsity Wrestling. At Rice University, I am part of the Rice Competitive Powerlifting Team, Rice Competitive Boxing Team, Rice Women's Club Lacrosse, and the Rice Club Sailing Team. I am also involved in Intramural Girls Basketball and the Will Rice Beer Bike Team.";
  const danceRole = "";
  const danceDescription =
    "When I was little, I was part of the American Ballet Theatre from age 7-12 and then Rose Academy of Ballet from age 12-18. " +
    "At Rice University, I am part of the BASYK Dance Team and joined Wiess Tabletop Theatre as a Cabaret Dancer. When I took my gap semester in Boston, I joined the Harvard AADT Dance Team for the semester and performed in their fall showcase.";
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
  return (
    <div className="space-y-10">
      <Entry title="Rice Residency" role="Co-Founder and Co-Lead">
        <p>
          Rice Residency is a selective, founder-led hacker house near Rice University in Houston for students and early-stage founders building software, hardware, and deep-tech startups. We've raised 2.5M+ in funding, had 3 residents get into a16z speedrun, 1 resident get into the YC S26 batch, and 7 residents in the Rice Summer Venture Studio.
        </p>
        <LinkList
          links={[
            { label: "RiceResidency.com", href: "https://riceresidency.com" },
            {
              label: "Featured in The Thresher",
              href: "https://www.ricethresher.org/article/rice-residency-hacker-house-opens-application-for-first-cohort-20251119",
            },
            {
              label: "Profiled in The Thresher",
              href: "https://ricethresher.org/article/delusion-prevails-inside-houston-hacker-house-20260902",
            },
          ]}
        />
        <LinkedInPostRow posts={riceResidencyPosts} height={668} />
      </Entry>

      <Entry title="Harvard St Commons" role="Resident">
        <p>
          I took a gap semester from Rice University to live at the hacker house for Harvard and MIT. This experience changed my life. Alumni and affiliated founders have gone on to raise from top firms including Greylock Partners, Sequoia Capital, General Catalyst, Pear VC, Felicis Ventures, and Z Fellows.
        </p>
        <LinkList
          links={[
            { label: "HarvardSt.co", href: "https://harvardst.co" },
            { label: "Cohort Pictures", href: "https://www.instagram.com/harvardstcommons/" },
          ]}
        />
        {/* Group photo and LinkedIn posts share one sideways-scrolling row. */}
        <LinkedInPostRow posts={harvardStPosts} height={627}>
          <img
            src="/images/harvard-st-commons.jpeg"
            alt="Harvard St Commons Community"
            className="h-[627px] w-auto max-w-none border border-gray-400 object-cover"
            loading="lazy"
          />
        </LinkedInPostRow>
      </Entry>

      <Entry title="Sports" role={sportsRole || undefined}>
        {sportsDescription && <p>{sportsDescription}</p>}
        <LinkList
          links={[
            {
              label: "NYC Mayor's Cup Results",
              href: "https://www.btsny.org/post/beat-the-streets-academy-win-titles-2023-nyc-mayors-cup-wrestling-results",
            },
            {
              label: "Queens Borough Champions",
              href: "https://thhsclassic.com/12147/sport/girls-jv-cross-country-holds-title-of-queens-borough-champions-for-27th-year/",
            },
            {
              label: "PSAL Season Standouts",
              href: "https://thhsclassic.com/18762/sport/psal-winter-season-five-thhs-athletes-with-outstanding-stats/",
            },
          ]}
        />
        <PhotoRow photos={sportsPhotos} />
      </Entry>

      <Entry title="Music" role={musicRole || undefined}>
        {musicDescription && <p>{musicDescription}</p>}
        <LinkList
          links={[
            {
              label: "Young Musicians Concert",
              href: "https://www.chambermusicsociety.org/education-and-community-engagement/for-emerging-artists/ymc",
            },
            { label: "Featured in Playbill", href: "https://playbill.com/article/young-musicians-on-the-tully-stage" },
            { label: "Nino Rota", href: "https://youtu.be/_DiAbZRqQZg" },
            { label: "Sarasate", href: "https://youtu.be/9fDRZKqb4Uo" },
            {
              label: "NYSSMA Festival",
              href: "https://thhsclassic.com/16500/arts-entertainment/thhs-music-program-performs-in-an-eventful-month-of-concerts-and-festivals/",
            },
            {
              label: "NYC Honors Music Festival",
              href: "https://thhsclassic.com/16181/arts-entertainment/harrisites-earn-multiples-seats-in-nyc-honors-music-festival/",
            },
            {
              label: "Chamber Strings",
              href: "https://thhsclassic.com/15654/news/winter-concert-canceled-as-covid-19-cases-surge-in-nyc/",
            },
          ]}
        />
        <PhotoRow photos={musicPhotos} />
      </Entry>

      <Entry title="Dance" role={danceRole || undefined}>
        {danceDescription && <p>{danceDescription}</p>}
        <LinkList
          links={[
            { label: "BASYK Dance Team", href: "https://www.instagram.com/basyk.rice/?hl=en" },
            { label: "Harvard AADT Dance Team", href: "https://www.harvardaadt.org" },
            { label: "American Ballet Theatre", href: "https://www.abt.org/" },
            { label: "Baby Lana Ballet Photo", href: "https://www.roseacademyofballet.com/" },
          ]}
        />
        <div className="plain-row">
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
        </div>
        <PhotoRow photos={dancePhotos} />
      </Entry>

      <Entry title="Volunteering" role={volunteerRole || undefined}>
        {volunteerDescription && <p>{volunteerDescription}</p>}
        <LinkList
          links={[
            { label: "Repairing the Leak Project", href: "https://sites.google.com/rice.edu/repairing-the-leak/home" },
            { label: "Bringing Health Home", href: "https://sites.google.com/rice.edu/asbdigitalshowcase/home" },
          ]}
        />
        <PhotoRow photos={volunteerPhotos} />
      </Entry>

      <Entry title="Travel Documentation">
        <p>Click on a pin to see photos from that place.</p>
        <div
          ref={mapContainerRef}
          className="relative aspect-[16/10] min-h-[300px] w-full max-w-[960px] overflow-hidden border border-gray-400 bg-gray-50"
        />
      </Entry>
    </div>
  );
}
