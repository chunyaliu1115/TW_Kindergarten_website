import { useEffect } from "react";
import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import FacebookEmbed from "@/components/FacebookEmbed";
import language1Thumb from "@/assets/fb-thumbs/language1.jpg.asset.json";

const LanguageContext = () => {
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
            <span className="text-xs font-medium text-primary uppercase tracking-[0.2em]">哲思・語文情境</span>
            <h1 className="mt-3 text-3xl sm:text-4xl font-black text-foreground leading-tight">
              語文情境
            </h1>
            <p className="mt-4 text-muted-foreground leading-relaxed">
              語言是思考與表達的橋樑。我們將中文、英文與台語融入日常生活與主題探索中，讓孩子在真實情境裡自然聆聽、開口表達、勇敢溝通，愛上語言也愛上學習。
            </p>
          </div>

          <div>
            <h2 className="text-xl font-bold text-foreground mb-6 pb-2 border-b border-border">
              精彩貼文分享
            </h2>
            <FacebookEmbed
              href="https://www.facebook.com/znznschool/posts/pfbid0z5mZ9P7u3X865jxgtbfqHs9J8Zxx6ge85Fr21ohP6uYctJxjubKkStMurRch4bdrl"
              height={460}
              thumbnail={language1Thumb.url}
              postTitle="多元語言情境教學"
            />
          </div>
        </div>
      </section>
    </main>
  );
};

export default LanguageContext;
