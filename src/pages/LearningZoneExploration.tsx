import { useEffect } from "react";
import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import FacebookEmbed from "@/components/FacebookEmbed";
import explore1Thumb from "@/assets/fb-thumbs/explore1.jpg.asset.json";
import explore2Thumb from "@/assets/fb-thumbs/explore2.jpg.asset.json";

const LearningZoneExploration = () => {
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
            <span className="text-xs font-medium text-secondary uppercase tracking-[0.2em]">活力・學習區探索</span>
            <h1 className="mt-3 text-3xl sm:text-4xl font-black text-foreground leading-tight">
              學習區探索
            </h1>
            <p className="mt-4 text-muted-foreground leading-relaxed">
              在多元主題的學習角落裡，孩子依照自己的步調探索、操作與發現，在自由選擇與互動中累積經驗，培養專注、合作與解決問題的能力。
            </p>
          </div>

          <div>
            <h2 className="text-xl font-bold text-foreground mb-6 pb-2 border-b border-border">
              精彩貼文分享
            </h2>
            <div>
              <FacebookEmbed
                href="https://www.facebook.com/znznschool/posts/pfbid0NmVWsmf6spdJL2Xz8x764Rydjyet2eWnmSHAeuMGQyRiqrA4XRXX159qntTPBMCSl"
                height={709}
                thumbnail={explore1Thumb.url}
                postTitle="多元智能探索"
              />
              <div className="mt-4">
                <FacebookEmbed
                  href="https://www.facebook.com/znznschool/posts/pfbid0DAQqBxkjG9bo38HZ4eLUR9HxqTe2sxwDGL3NeKcPPHKarDp4RTk1mXvMA7eRxHNLl"
                  height={709}
                  thumbnail={explore2Thumb.url}
                  postTitle="快樂的校園生活"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default LearningZoneExploration;
