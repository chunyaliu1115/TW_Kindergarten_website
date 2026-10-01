import { useEffect } from "react";
import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import FacebookEmbed from "@/components/FacebookEmbed";
import oil1Thumb from "@/assets/fb-thumbs/oil1.jpg.asset.json";
import oil2Thumb from "@/assets/fb-thumbs/oil2.jpg.asset.json";
import oil3Thumb from "@/assets/fb-thumbs/oil3.jpg.asset.json";
import oil4Thumb from "@/assets/fb-thumbs/oil4.jpg.asset.json";

const OilPainting = () => {
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
            <span className="text-xs font-medium text-secondary uppercase tracking-[0.2em]">美學・油彩創作</span>
            <h1 className="mt-3 text-3xl sm:text-4xl font-black text-foreground leading-tight">
              油彩創作
            </h1>
            <p className="mt-4 text-muted-foreground leading-relaxed">
              在豐富的色彩與自由的畫筆中，孩子們盡情揮灑想像，感受藝術的魅力，培養獨特的審美視野與創造力。
            </p>
          </div>

          <div>
            <h2 className="text-xl font-bold text-foreground mb-6 pb-2 border-b border-border">
              精彩貼文分享
            </h2>
            <div>
              <FacebookEmbed
                href="https://www.facebook.com/znznschool/posts/pfbid02fHvFTvfxybqAb7P7YCYJg3WMjsTuktLkaQwhcFhA5PBEiJRH6p2P6wso4SfiJTSKl"
                height={690}
                thumbnail={oil1Thumb.url}
                postTitle="仁仁四十 生生不息"
              />
              <div className="mt-4">
                <FacebookEmbed
                  href="https://www.facebook.com/znznschool/posts/pfbid0jLHUS5EUgtPDp9ndBAhANM1nZa5dEH5v4SsfRk8DJwKMNWVWtr9KftgMC87yr45rl"
                  height={709}
                  thumbnail={oil2Thumb.url}
                  postTitle="校園彩繪停車格計畫"
                />
              </div>
              <div className="mt-4">
                <FacebookEmbed
                  href="https://www.facebook.com/znznschool/posts/pfbid02BLUaxv85UKXXP5hgQwxpwFFpEV7vAfdJUdorPNGzABPGtyCsfNbTwdmXZrwNtfAel"
                  height={250}
                  thumbnail={oil3Thumb.url}
                  postTitle="大地彩繪"
                />
              </div>
              <div className="mt-4">
                <FacebookEmbed
                  href="https://www.facebook.com/znznschool/posts/pfbid0NKwLjagwUXpqGJBvHJjZu9EeJj4Fwnnvh6f5oa4MTk6w6j5nQtwayz5B45hNTpGdl"
                  height={709}
                  thumbnail={oil4Thumb.url}
                  postTitle="小小藝術家"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default OilPainting;
