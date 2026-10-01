import { useEffect } from "react";
import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import FacebookEmbed from "@/components/FacebookEmbed";
import life1Thumb from "@/assets/fb-thumbs/life1.jpg.asset.json";
import life2Thumb from "@/assets/fb-thumbs/life2.jpg.asset.json";
import life3Thumb from "@/assets/fb-thumbs/life3.jpg.asset.json";
import life4Thumb from "@/assets/fb-thumbs/life4.jpg.asset.json";

const LifeSkills = () => {
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
            <span className="text-xs font-medium text-secondary uppercase tracking-[0.2em]">活力・生活常識</span>
            <h1 className="mt-3 text-3xl sm:text-4xl font-black text-foreground leading-tight">
              生活常識
            </h1>
            <p className="mt-4 text-muted-foreground leading-relaxed">
              從日常生活出發，帶領孩子認識安全知識、培養自理能力與應變技巧，讓孩子在實際演練中累積經驗，建立面對生活挑戰的自信與從容。
            </p>
          </div>

          <div>
            <h2 className="text-xl font-bold text-foreground mb-6 pb-2 border-b border-border">
              精彩貼文分享
            </h2>
            <FacebookEmbed
              href="https://www.facebook.com/znznschool/posts/pfbid022WPds5T42QM7AMYZVsp48v47DFk4cYaATVq76pGag5s81kqksnZ2LeXoqqigYuSPl"
              height={710}
              thumbnail={life4Thumb.url}
              postTitle="洗手的重要"
            />
            <div className="h-4" />
            <FacebookEmbed
              href="https://www.facebook.com/znznschool/posts/pfbid02LKQgNsr9dmRtvVpwX2FDRSeTe7vLg7SxsQYBxafAYbdrGJkxWtGfA4Jw9SZJZTTSl"
              height={250}
              thumbnail={life3Thumb.url}
              postTitle="好好刷牙"
            />
            <div className="h-4" />
            <FacebookEmbed
              href="https://www.facebook.com/znznschool/posts/pfbid0VHuUJ1pBgGv7KPPG3DHjfqk3BHdm5vQeNoqBGvSfSR6qztfNyZAC1fXdRiWfVbttl"
              height={250}
              thumbnail={life1Thumb.url}
              postTitle="車上受困安全演練"
            />
            <div className="h-4" />
            <FacebookEmbed
              href="https://www.facebook.com/znznschool/posts/pfbid02qRMs1K2nWt662NheEMkYijvZLJ7hGhdwkF3tgj3wFvRzRaicMyGdmbfYkn4G62oTl"
              height={709}
              thumbnail={life2Thumb.url}
              postTitle="防災抗震自救演習"
            />
          </div>
        </div>
      </section>
    </main>
  );
};

export default LifeSkills;
