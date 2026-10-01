import { useEffect } from "react";
import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import FacebookEmbed from "@/components/FacebookEmbed";
import baking1Thumb from "@/assets/fb-thumbs/baking1.jpg.asset.json";
import baking2Thumb from "@/assets/fb-thumbs/baking2.jpg.asset.json";

const BakingDIY = () => {
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
            <span className="text-xs font-medium text-secondary uppercase tracking-[0.2em]">活力・烘培DIY</span>
            <h1 className="mt-3 text-3xl sm:text-4xl font-black text-foreground leading-tight">
              烘培DIY
            </h1>
            <p className="mt-4 text-muted-foreground leading-relaxed">
              從揉麵、攪拌到品嚐，孩子們在烘培過程中動手嘗試、培養專注與耐心，並在分享美味的瞬間，感受滿滿的成就感與生活樂趣。
            </p>
          </div>

          <div>
            <h2 className="text-xl font-bold text-foreground mb-6 pb-2 border-b border-border">
              精彩貼文分享
            </h2>
            <FacebookEmbed
              href="https://www.facebook.com/znznschool/posts/pfbid0gquhoP7XDpDS45bmvFFNySiG5DsgfGw8zjvq45TdPFLec8MVLY8NqoAEEkReLEWAl"
              height={250}
              thumbnail={baking2Thumb.url}
              postTitle="給媽媽的愛心蛋糕"
            />
            <div className="mt-8">
              <FacebookEmbed
                href="https://www.facebook.com/znznschool/posts/pfbid027FARZkiuy2BoNafEogFpwVuktiyVGaCrRrvQGjHCSwA3aRgqGctKMmha3Ark72KNl"
                height={703}
                thumbnail={baking1Thumb.url}
                postTitle="Handmade鳳梨酥"
              />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default BakingDIY;
