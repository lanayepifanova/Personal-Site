import { usePageMeta } from "@/hooks/usePageMeta";
import { ugcReels } from "@/data/ugc";
import { reelEmbedUrl } from "./Media";

export default function UgcPage() {
  usePageMeta({
    title: "UGC | Lana Yepifanova",
    description:
      "Lana Yepifanova's UGC portfolio: sponsored videos and brand partnerships for tech, finance, and educational companies.",
    canonicalPath: "/ugc",
  });

  return (
    <div className="space-y-6">
      <h2 className="text-[22px] font-bold">UGC</h2>
      <p>
        I make UGC videos for tech, finance, and educational companies. I primarily do sponsored brand deals and
        partnerships. Email{" "}
        <a href="mailto:yepifanova.lana@gmail.com">yepifanova.lana@gmail.com</a> if you are interested.
      </p>

      <section className="space-y-2">
        <h3 className="text-[18px] font-bold">Portfolio</h3>
        {/* One reel per brand, captioned with the brand name; the row scrolls sideways on phones. */}
        <div className="plain-row mt-4 items-start">
          {ugcReels.map((reel) => (
            <figure key={reel.id} className="m-0 shrink-0 space-y-1">
              <figcaption className="font-bold">{reel.brand}</figcaption>
              <iframe
                src={reelEmbedUrl(reel)}
                title={`${reel.brand} reel`}
                className="h-[600px] w-[300px] border border-gray-400 bg-white"
                allowFullScreen
                loading="lazy"
              >
                <a href={reel.url} target="_blank" rel="noopener noreferrer">
                  View the {reel.brand} reel on Instagram
                </a>
              </iframe>
            </figure>
          ))}
        </div>
      </section>
    </div>
  );
}
