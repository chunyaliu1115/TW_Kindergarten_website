import { useEffect } from "react";
import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import FacebookEmbed from "@/components/FacebookEmbed";
import book1Thumb from "@/assets/fb-thumbs/book1.jpg.asset.json";
import book2Thumb from "@/assets/fb-thumbs/book2.jpg.asset.json";
import book3Thumb from "@/assets/fb-thumbs/book3.jpg.asset.json";
import book4Thumb from "@/assets/fb-thumbs/book4.jpg.asset.json";


const DailyPictureBook = () => {
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
            <span className="text-xs font-medium text-primary uppercase tracking-[0.2em]">哲思・每日繪本分享</span>
            <h1 className="mt-3 text-3xl sm:text-4xl font-black text-foreground leading-tight">
              每日繪本分享
            </h1>
            <p className="mt-4 text-muted-foreground leading-relaxed">
              透過精心挑選的繪本故事，引導孩子進入豐富的想像世界，在聽故事與討論的過程中培養語文能力、同理心與批判思考，讓閱讀成為每日最快樂的時光。
            </p>
          </div>

          <div>
            <h2 className="text-xl font-bold text-foreground mb-6 pb-2 border-b border-border">
              精彩貼文分享
            </h2>
            <FacebookEmbed
              href="https://www.facebook.com/znznschool/posts/pfbid02MSpqF3J3tVyvyrqvCiANyAWzKJXeYSX2hA6YWDKsvc2iqRbwYEJmQLN9rnpMjkGQl"
              height={505}
              thumbnail={book3Thumb.url}
              postTitle="宇宙影像書"
            />
            <div className="mt-4">
              <FacebookEmbed
                href="https://www.facebook.com/znznschool/posts/pfbid02qY8ajspp5M1zgUotSupKvgRm5KeUhUob6PiKHBv2K2uN8zrytS1td2gaRXPnhGNNl"
                height={715}
                thumbnail={book1Thumb.url}
                postTitle="村童野徑 Village Kids On Wild Trails"
              />
            </div>
            <div className="mt-4">
              <FacebookEmbed
                href="https://www.facebook.com/znznschool/posts/pfbid0W5zVqYK5SwWjh9z3wEdfAQLooLtHP6vFZVJRPH3UETPR58CzDVKsZrzX8Rkcryjml"
                height={671}
                thumbnail={book2Thumb.url}
                postTitle="我做得到！小建築師伊基"
              />
            </div>
            <div className="mt-4">
              <FacebookEmbed
                href="https://www.facebook.com/znznschool/posts/pfbid06fxsE8YVLERHFXccFrxR9UXvS6Skxdr5wuhbo3CuaXcfh55h5JWJusxomwEk2cQql"
                height={773}
                thumbnail={book4Thumb.url}
                postTitle="繪本交換計畫"
              />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default DailyPictureBook;
