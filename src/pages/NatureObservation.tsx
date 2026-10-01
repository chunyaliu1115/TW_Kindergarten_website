import { useEffect } from "react";
import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import FacebookEmbed from "@/components/FacebookEmbed";
import nature1Thumb from "@/assets/fb-thumbs/nature1.jpg.asset.json";
import nature2Thumb from "@/assets/fb-thumbs/nature2.jpg.asset.json";
import nature3Thumb from "@/assets/fb-thumbs/nature3.jpg.asset.json";
import nature4Thumb from "@/assets/fb-thumbs/nature4.jpg.asset.json";
import nature5Thumb from "@/assets/fb-thumbs/nature5.jpg.asset.json";

const NatureObservation = () => {
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
            <span className="text-xs font-medium text-primary uppercase tracking-[0.2em]">自然・自然生態觀察</span>
            <h1 className="mt-3 text-3xl sm:text-4xl font-black text-foreground leading-tight">
              自然生態觀察
            </h1>
            <p className="mt-4 text-muted-foreground leading-relaxed">
              在森林般的校園裡，孩子隨著四季變化觀察花草樹木與小生物，從親身體驗中感受自然的節奏，培養細膩的觀察力與對環境的關懷。
            </p>
          </div>

          <div>
            <h2 className="text-xl font-bold text-foreground mb-6 pb-2 border-b border-border">
              精彩貼文分享
            </h2>
            <div>
              <FacebookEmbed
                href="https://www.facebook.com/znznschool/posts/pfbid0fSDjTna6oYNH1h8wsr4EwnqxfbcBium731paG5iENzdVdXdnFU2RyiJwZVAghvzHl"
                height={696}
                thumbnail={nature1Thumb.url}
                postTitle="初夏的阿勃勒（黃金雨）"
              />
              <div className="h-4" />
              <FacebookEmbed
                href="https://www.facebook.com/znznschool/posts/pfbid02TAiT2BaF3UgW7DjXqomGs2tYGyqfFupciJJiHRBAkPSMyXkoSP1w1VY4wH4KZDdrl"
                height={735}
                thumbnail={nature2Thumb.url}
                postTitle="紫花羊蹄甲開花了"
              />
              <div className="h-4" />
              <FacebookEmbed
                href="https://www.facebook.com/znznschool/posts/pfbid035mYPQskYXjtUwudvFLHVmvxS4H267AxjTSyuT7xh74k3462VC8sM5CH9JjDKqjQel"
                height={679}
                thumbnail={nature3Thumb.url}
                postTitle="白裡透紅的雞蛋花"
              />
              <div className="h-4" />
              <FacebookEmbed
                href="https://www.facebook.com/znznschool/posts/pfbid02HuWb1G2rPnar1khqfN6xf1HqCcEqoU5eGbSk4voqvBUf9Gs9LukDZVRxrZxPQFZ1l"
                height={250}
                thumbnail={nature4Thumb.url}
                postTitle="春天的粉紅風鈴木"
              />
              <div className="h-4" />
              <FacebookEmbed
                href="https://www.facebook.com/znznschool/posts/pfbid08pMZ7STzRd1dx2gYsgJigwwUpambPf75MeQd6124s6JJqnFFLwbdNumbh4rdYXjKl"
                height={754}
                thumbnail={nature5Thumb.url}
                postTitle="綻放吧~羊蹄甲及火焰木"
              />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default NatureObservation;
