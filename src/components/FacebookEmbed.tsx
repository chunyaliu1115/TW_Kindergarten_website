import { useEffect, useRef, useState } from "react";
import { ChevronDown } from "lucide-react";

interface FacebookEmbedProps {
  /** The Facebook post/video URL (the `href` param value, un-encoded). */
  href: string;
  /** Original/intended height at width=500. Used to compute aspect ratio. */
  height: number;
  /** Original width the height was measured against. Defaults to 500 (FB plugin max). */
  baseWidth?: number;
  /** Show the post text below the embed. */
  showText?: boolean;
  title?: string;
  className?: string;
  /** Plugin type. Defaults to post. */
  type?: "post" | "video";
  /** Video height (for video plugin only). */
  videoHeight?: number;
  /** Time offset for video (for video plugin only). */
  t?: string;
  /** Render inside a collapsible block. Defaults to true. */
  collapsible?: boolean;
  /** Short title shown on the collapsed summary. */
  postTitle?: string;
  /** Date label shown on the collapsed summary, e.g. "2025/12/24". */
  date?: string;
  /** Thumbnail image URL shown on the collapsed card. */
  thumbnail?: string;
  /** Backwards-compatible alias for postTitle. */
  summary?: string;
  /** Whether the block starts expanded. Defaults to false. */
  defaultOpen?: boolean;
}

/**
 * Responsive wrapper for the Facebook post plugin iframe.
 * Facebook's plugin only accepts width 180–500, so we measure the container
 * and request the largest valid width that fits, scaling height proportionally.
 */
const FB_MIN = 180;
const FB_MAX = 500;

const FacebookEmbed = ({
  href,
  height,
  baseWidth = 500,
  showText = true,
  title = "Facebook 貼文",
  className,
  type = "post",
  videoHeight,
  t,
  collapsible = true,
  postTitle,
  date,
  thumbnail,
  summary,
  defaultOpen = false,
}: FacebookEmbedProps) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [width, setWidth] = useState<number>(Math.min(FB_MAX, baseWidth));
  const [open, setOpen] = useState<boolean>(!collapsible || defaultOpen);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;
    const update = () => {
      const w = el.clientWidth;
      const clamped = Math.max(FB_MIN, Math.min(FB_MAX, Math.floor(w)));
      setWidth(clamped);
    };
    update();
    const ro = new ResizeObserver(update);
    ro.observe(el);
    return () => ro.disconnect();
  }, []);

  const ratio = height / baseWidth;
  const scaledHeight = Math.ceil(width * ratio);
  const encodedHref = encodeURIComponent(href);
  const showTextParam = showText ? "true" : "false";
  const src =
    type === "video"
      ? `https://www.facebook.com/plugins/video.php?height=${videoHeight ?? height}&href=${encodedHref}&show_text=${showTextParam}&width=${width}${t ? `&t=${encodeURIComponent(t)}` : ""}`
      : `https://www.facebook.com/plugins/post.php?href=${encodedHref}&show_text=${showTextParam}&width=${width}`;

  const iframe = (
    <iframe
      key={width}
      src={src}
      width={width}
      height={scaledHeight}
      style={{ border: "none", overflow: "hidden", display: "block", width: "100%" }}
      scrolling="no"
      frameBorder="0"
      allowFullScreen
      allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
      title={title}
    />
  );

  return (
    <div
      ref={containerRef}
      className={className}
      style={{ width: "100%", maxWidth: FB_MAX, margin: "0 auto" }}
    >
      {collapsible ? (
        <div className="rounded-xl border border-border bg-card/40 overflow-hidden shadow-sm">
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            className="w-full text-left group hover:bg-muted/60 transition-colors"
          >
            <div className="flex items-stretch gap-3 p-3">
              {thumbnail && (
                <div className="relative shrink-0 w-24 sm:w-28 aspect-[4/3] rounded-lg overflow-hidden bg-muted">
                  <img
                    src={thumbnail}
                    alt={postTitle ?? summary ?? "貼文縮圖"}
                    loading="lazy"
                    className="absolute inset-0 w-full h-full object-cover group-hover:scale-[1.03] transition-transform duration-300"
                  />
                </div>
              )}
              <div className="flex-1 min-w-0 flex items-center">
                <p className="text-sm font-medium text-foreground leading-snug line-clamp-2">
                  {postTitle ?? summary ?? "Facebook 貼文"}
                </p>
              </div>
              <ChevronDown
                size={16}
                className={`shrink-0 self-center text-muted-foreground transition-transform ${open ? "rotate-180" : ""}`}
              />
            </div>
          </button>
          {open && <div className="px-3 pb-3 pt-1 border-t border-border/60">{iframe}</div>}
        </div>
      ) : (
        iframe
      )}
    </div>
  );
};

export default FacebookEmbed;
