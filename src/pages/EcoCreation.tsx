import { useEffect } from "react";
import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import FacebookEmbed from "@/components/FacebookEmbed";
import eco1Thumb from "@/assets/fb-thumbs/eco1.jpg.asset.json";
import eco2Thumb from "@/assets/fb-thumbs/eco2.jpg.asset.json";
import eco3Thumb from "@/assets/fb-thumbs/eco3.jpg.asset.json";
import eco4Thumb from "@/assets/fb-thumbs/eco4.jpg.asset.json";
import eco5Thumb from "@/assets/fb-thumbs/eco5.jpg.asset.json";

const EcoCreation = () => {
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
            <span className="text-xs font-medium text-secondary uppercase tracking-[0.2em]">美學・環保創作</span>
            <h1 className="mt-3 text-3xl sm:text-4xl font-black text-foreground leading-tight">
              環保創作
            </h1>
            <p className="mt-4 text-muted-foreground leading-relaxed">
              以回收材料與自然素材為媒介，引導孩子發揮想像力與創造力，在動手創作的過程中培養環境關懷，讓美學與永續生活自然相融。
            </p>
          </div>

          <div>
            <h2 className="text-xl font-bold text-foreground mb-6 pb-2 border-b border-border">
              精彩貼文分享
            </h2>
            <FacebookEmbed
              href="https://www.facebook.com/znznschool/posts/pfbid02P3KuuwCG4NQf7RXs6xErwE47QwocBBPFiQomaJmWCyfMYpkfeBQpA3wH5iZ3rNPwl"
              height={626}
              thumbnail={eco1Thumb.url}
              postTitle="大型聖誕創作"
            />
            <div className="mt-4">
              <FacebookEmbed
                href="https://www.facebook.com/znznschool/posts/pfbid0CHjmZvZJVpaScdDukiSbMUjcohQUf58EdT4nhqpGjte2xarupWhndb69WiwPS4T6l"
                height={250}
                thumbnail={eco2Thumb.url}
                postTitle="母親節拚貼畫"
              />
            </div>
            <div className="mt-4">
              <FacebookEmbed
                href="https://www.facebook.com/znznschool/posts/pfbid02zc5ztgzKG5Zp3y4PaCGSgAht8j2SUa7182eQ154JWK94nhy1tjAFYZBVXXDypvMBl"
                height={530}
                thumbnail={eco3Thumb.url}
                postTitle="聖誕木質風"
              />
            </div>
            <div className="mt-4">
              <FacebookEmbed
                href="https://www.facebook.com/znznschool/posts/pfbid021tSzAiwKFsZKxZpCiuRLDZe32ms6ozdGNe2waMp1fvaudvkT49bcpxGi1z8y9ewl"
                height={690}
                thumbnail={eco4Thumb.url}
                postTitle="幼兒創作之牆"
              />
            </div>
            <div className="mt-4">
              <FacebookEmbed
                href="https://www.facebook.com/znznschool/posts/pfbid0Rn1YbdixQiqpCBa76N4WK6J2xTxdwhoYEQ678gN27kgWf5sEDyrVELF4DvGE4fEgl"
                height={250}
                thumbnail={eco5Thumb.url}
                postTitle="幼兒作品分享會"
              />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default EcoCreation;
