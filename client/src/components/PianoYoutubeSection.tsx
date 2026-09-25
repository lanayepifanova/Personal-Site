import { createPortal } from "react-dom";
import { useState } from "react";
import { Entry, LinkList } from "@/components/Plain";

const pianoShorts = [
  "https://youtube.com/shorts/CQx9n07sxpc?feature=share",
  "https://youtube.com/shorts/LGTKlTz5OrQ?feature=share",
  "https://youtube.com/shorts/BCr-gcpEWho?feature=share",
  "https://youtube.com/shorts/iYhBcFqq56A?feature=share",
  "https://youtube.com/shorts/ONU2QyAzqBU?feature=share",
  "https://www.youtube.com/embed/MA44NkrRnPU",
  "https://www.youtube.com/embed/HurHh3najDA",
  "https://www.youtube.com/embed/xicvXsp_sZ0",
  "https://www.youtube.com/embed/_XhEL9qbuq0",
  "https://www.youtube.com/embed/rCsVjlikmfM",
  "https://www.youtube.com/embed/NyWwzsOPOJo",
  "https://www.youtube.com/embed/ffKchWe1sQA",
  "https://www.youtube.com/embed/Bf7JPNwWYPI",
  "https://www.youtube.com/embed/yWF8CwPONAo",
  "https://www.youtube.com/embed/de0_bC6mo1M",
  "https://www.youtube.com/embed/fs6kyobuN3I",
  "https://www.youtube.com/embed/dVCA50BT0GQ",
  "https://www.youtube.com/embed/Sl3L3pOPGuA",
  "https://www.youtube.com/embed/wJpgIXSOv50",
  "https://www.youtube.com/embed/qCr6Npf9QAQ",
  "https://www.youtube.com/embed/GdGL5UjnJW0",
  "https://www.youtube.com/embed/_9pwm1eknJY",
  "https://www.youtube.com/embed/STVxGq5cIuE",
  "https://www.youtube.com/embed/cdDqom7byzI",
  "https://www.youtube.com/embed/8t0S56k67NM",
  "https://www.youtube.com/embed/wykxIF0WT_s",
  "https://www.youtube.com/embed/GNG8Zd0ojfQ",
  "https://www.youtube.com/embed/4s--U7h9-Uw",
  "https://www.youtube.com/embed/zHQuJCSPBbA",
  "https://www.youtube.com/embed/pVjROafIKNA",
  "https://www.youtube.com/embed/0pYcg9JRUeo",
  "https://www.youtube.com/embed/C27TsS4IVfc",
  "https://www.youtube.com/embed/5PcDZK9lZ-8",
  "https://www.youtube.com/embed/wNZLNTtB-b4",
  "https://www.youtube.com/embed/bZohw5nHA50",
  "https://www.youtube.com/embed/Ax9ALNVh2_0",
  "https://www.youtube.com/embed/_CS39zBwITM",
  "https://www.youtube.com/embed/HwKqzYltlj0",
  "https://www.youtube.com/embed/OyAzXnlEl6Q",
  "https://www.youtube.com/embed/a8Q47mqxgeM",
  "https://www.youtube.com/embed/JXxHDZZ0ak8",
];

const pianoLongFormVideos = [
  "https://www.youtube.com/embed/-QUi0LcYvXo",
  "https://www.youtube.com/embed/UU44y5_G6ds",
  "https://www.youtube.com/embed/2FuQFFNT8CY",
  "https://www.youtube.com/embed/svbAyKMe1V4",
  "https://www.youtube.com/embed/a_EnF8O21MM",
  "https://www.youtube.com/embed/WS9GGS7x4KU",
  "https://www.youtube.com/embed/HckykdFiDoc",
  "https://www.youtube.com/embed/PGjPOv8XLU8",
  "https://www.youtube.com/embed/IvDVrmW9zbM",
  "https://www.youtube.com/embed/oINIiGuD-bc",
  "https://www.youtube.com/embed/d24gHZXd1xk",
  "https://www.youtube.com/embed/j640cu_XAOM",
  "https://www.youtube.com/embed/u9M29JFT3eo",
  "https://www.youtube.com/embed/fa5MnbYxudo",
  "https://www.youtube.com/embed/NkjYG9Ynxb4",
  "https://www.youtube.com/embed/dN9tfNfY1nI",
  "https://www.youtube.com/embed/DBjDQb_Dxt4",
  "https://www.youtube.com/embed/zAqA5kXQoWk",
  "https://www.youtube.com/embed/0j8_bvgiJjA",
  "https://www.youtube.com/embed/evRwTdbUobI",
  "https://www.youtube.com/embed/ghJWdeuf3YE",
  "https://www.youtube.com/embed/9fDRZKqb4Uo",
  "https://www.youtube.com/embed/_DiAbZRqQZg",
  "https://www.youtube.com/embed/jxJ8cFxw4qI",
  "https://www.youtube.com/embed/ACmF4cCZjkY",
];

const getYoutubeId = (url: string) => {
  const embedMatch = url.match(/\/embed\/([a-zA-Z0-9_-]+)/);
  if (embedMatch) return embedMatch[1];

  const shortsMatch = url.match(/\/shorts\/([a-zA-Z0-9_-]+)/);
  if (shortsMatch) return shortsMatch[1];

  const watchMatch = url.match(/[?&]v=([a-zA-Z0-9_-]+)/);
  if (watchMatch) return watchMatch[1];

  return null;
};

const getYoutubeEmbedUrl = (url: string) => {
  if (url.includes("/embed/")) return url;

  const id = getYoutubeId(url);
  if (!id) return url;

  return `https://www.youtube.com/embed/${id}?rel=0&modestbranding=1&playsinline=1`;
};

const getYoutubeThumbnail = (url: string) => {
  const id = getYoutubeId(url);
  return id ? `https://img.youtube.com/vi/${id}/maxresdefault.jpg` : "";
};

function Thumbnail({ url, alt, className, onOpen }: { url: string; alt: string; className: string; onOpen: () => void }) {
  return (
    <button type="button" onClick={onOpen} className={`relative block border border-gray-400 bg-gray-100 ${className}`}>
      <img src={getYoutubeThumbnail(url)} alt={alt} className="h-full w-full object-cover" loading="lazy" />
      <span className="absolute bottom-1 left-1 bg-white px-1 text-[12px] text-black">&#9654; play</span>
    </button>
  );
}

export default function PianoYoutubeSection() {
  const [activeLightboxUrl, setActiveLightboxUrl] = useState<string | null>(null);

  return (
    <Entry title="Piano YouTube Channel" role="Pianist and Creator">
      <p>
        I started my piano YouTube channel to document my growth as a pianist, share performances beyond formal recitals, and make classical music feel more accessible online. It has grown to 500+ subscribers, 130k+ views, and 66 videos.
      </p>
      <LinkList links={[{ label: "Piano YouTube Channel", href: "https://www.youtube.com/@LanaYepifanova" }]} />

      <p className="text-[14px] text-gray-600">Performances, scroll sideways:</p>
      <div className="plain-row">
        {pianoLongFormVideos.map((url, index) => (
          <Thumbnail
            key={url}
            url={url}
            alt={`Piano Performance ${index + 1}`}
            className="aspect-[16/9] w-64"
            onOpen={() => setActiveLightboxUrl(getYoutubeEmbedUrl(url))}
          />
        ))}
      </div>

      <p className="text-[14px] text-gray-600">Shorts:</p>
      <div className="plain-row">
        {pianoShorts.map((url, index) => (
          <Thumbnail
            key={url}
            url={url}
            alt={`Piano Short ${index + 1}`}
            className="aspect-[9/16] w-28"
            onOpen={() => setActiveLightboxUrl(getYoutubeEmbedUrl(url))}
          />
        ))}
      </div>

      {activeLightboxUrl &&
        createPortal(
          <div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 px-4"
            onClick={() => setActiveLightboxUrl(null)}
          >
            <div className="relative w-full max-w-4xl bg-black" onClick={(event) => event.stopPropagation()}>
              <button
                type="button"
                onClick={() => setActiveLightboxUrl(null)}
                className="absolute -top-8 right-0 font-['Times_New_Roman',Times,serif] text-[15px] text-white underline"
              >
                close
              </button>
              <div className="aspect-video">
                <iframe
                  width="100%"
                  height="100%"
                  src={`${activeLightboxUrl}${activeLightboxUrl.includes("?") ? "&" : "?"}autoplay=1`}
                  title="Piano performance"
                  frameBorder="0"
                  allow="autoplay; accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                  className="h-full w-full"
                ></iframe>
              </div>
            </div>
          </div>,
          document.body,
        )}
    </Entry>
  );
}
