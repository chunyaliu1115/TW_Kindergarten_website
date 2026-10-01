import { useEffect } from "react";
import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import FacebookEmbed from "@/components/FacebookEmbed";
import art1Thumb from "@/assets/fb-thumbs/art1.jpg.asset.json";
import art2Thumb from "@/assets/fb-thumbs/art2.jpg.asset.json";

import art4Thumb from "@/assets/fb-thumbs/art4.jpg.asset.json";
import art5Thumb from "@/assets/fb-thumbs/art5.jpg.asset.json";

const ArtAppreciation = () => {
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
            <span className="text-xs font-medium text-secondary uppercase tracking-[0.2em]">美學・藝術賞析</span>
            <h1 className="mt-3 text-3xl sm:text-4xl font-black text-foreground leading-tight">
              藝術賞析
            </h1>
            <p className="mt-4 text-muted-foreground leading-relaxed">
              從生活中的藝術作品出發，帶領孩子欣賞、感受與討論，培養細膩的觀察力與獨特的審美視野，讓美感成為日常的一部分。
            </p>
          </div>

          <div>
            <h2 className="text-xl font-bold text-foreground mb-6 pb-2 border-b border-border">
              精彩貼文分享
            </h2>
            <FacebookEmbed
              href="https://www.facebook.com/znznschool/posts/pfbid0EJA1dy749A5r2N6mKnzsqZpAVPSEjcSYf6BPNyRM74dRtUTEL718a9QVomi73ibkl"
              height={735}
              thumbnail={art1Thumb.url}
              postTitle="新春藝術金馬盞"
            />
            <div className="h-4" />
            <FacebookEmbed
              href="https://www.facebook.com/znznschool/posts/pfbid0Xz5Mhq5uF3XJbRaYdGKwwzeDrxcRpeApn38v9kxukgSzWxE118MSXTC4uHzyUnPzl"
              height={250}
              thumbnail={art2Thumb.url}
              postTitle="台江孩子的第一堂美術課"
            />
            <div className="h-4" />
            <FacebookEmbed
              href="https://www.facebook.com/znznschool/posts/pfbid02eSEDiwucQfVyMBxBjMXwacTNFddCy2DfjesPczNkVd5MsQ6ddnfSZGFC9AumNQ1Nl"
              height={652}
              thumbnail={art4Thumb.url}
              postTitle="星空的魔法"
            />
            <div className="h-4" />
            <FacebookEmbed
              href="https://www.facebook.com/znznschool/posts/pfbid0rrFa2MmtaXpcyV5YbazGLdpCYzQMin81HbPZ27orTTKsCrhgcoCHKZWmi5XYt5DTl"
              height={754}
              thumbnail={art5Thumb.url}
              postTitle="和孩子玩遊戲"
            />
          </div>
        </div>
      </section>
    </main>
  );
};

export default ArtAppreciation;
