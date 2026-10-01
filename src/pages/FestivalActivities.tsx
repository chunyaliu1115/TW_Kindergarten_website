import { useEffect } from "react";
import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import FacebookEmbed from "@/components/FacebookEmbed";
import festival1Thumb from "@/assets/fb-thumbs/festival1.jpg.asset.json";

const FestivalActivities = () => {

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
  <main className="min-h-screen bg-background">
    <section className="py-16 sm:py-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        <Link
          to="/#features"
          className="inline-flex items-center gap-2 text-sm text-primary hover:underline mb-8"
        >
          <ArrowLeft size={16} /> 返回教育主軸與特色課程
        </Link>
        <div className="mb-10">
          <span className="text-xs font-medium text-secondary uppercase tracking-[0.2em]">活力・節慶活動</span>
          <h1 className="mt-3 text-3xl sm:text-4xl font-black text-foreground leading-tight">
            節慶活動
          </h1>
          <p className="mt-4 text-muted-foreground leading-relaxed">
            在四季流轉的節慶中，孩子們透過參與和體驗，認識文化、傳承溫度，也在歡笑與互動中綻放屬於童年的活力。
          </p>
        </div>

        <div className="mb-16">
          <h2 className="text-xl font-bold text-foreground mb-6 pb-2 border-b border-border">
            精彩貼文分享
          </h2>
          <FacebookEmbed
            href="https://www.facebook.com/znznschool/posts/pfbid025wUqHJh6c8qSkcY8DsjXXG9yTSeL53CbG3oQf5qf3dkJ7KXuFXkuLFa85Nac1RkDl"
            height={709}
            thumbnail={festival1Thumb.url}
            postTitle="粽香慶端午"
          />
          <div className="mt-6">
            <h3 className="text-sm font-medium text-foreground mb-3">仁仁森林2026迎新年</h3>
            <div className="rounded-xl border border-border bg-card/40 overflow-hidden shadow-sm">
              <iframe
                src="https://www.facebook.com/plugins/video.php?height=314&href=https%3A%2F%2Fwww.facebook.com%2Freel%2F1912288906040549%2F&show_text=true&width=560&t=0"
                width="500"
                height="383"
                style={{ border: "none", overflow: "hidden", display: "block", width: "100%" }}
                scrolling="no"
                frameBorder="0"
                allowFullScreen
                allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
                title="仁仁森林2026迎新年"
              />
            </div>
          </div>
          <div className="mt-6">
            <h3 className="text-sm font-medium text-foreground mb-3">聖誕直排輪報佳音</h3>
            <div className="rounded-xl border border-border bg-card/40 overflow-hidden shadow-sm">
              <iframe
                src="https://www.facebook.com/plugins/video.php?height=476&href=https%3A%2F%2Fwww.facebook.com%2Fznznschool%2Fvideos%2F1566506420825631%2F&show_text=true&width=476&t=0"
                width="500"
                height="591"
                style={{ border: "none", overflow: "hidden", display: "block", width: "100%" }}
                scrolling="no"
                frameBorder="0"
                allowFullScreen
                allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
                title="聖誕直排輪報佳音"
              />
            </div>
          </div>
        </div>

      </div>
    </section>
  </main>
  );
};

export default FestivalActivities;
