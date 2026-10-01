import { useEffect } from "react";
import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import FacebookEmbed from "@/components/FacebookEmbed";
import motor1Thumb from "@/assets/fb-thumbs/motor1.jpg.asset.json";

const GrossMotor = () => {
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
            <span className="text-xs font-medium text-primary uppercase tracking-[0.2em]">活力・大肌肉運動</span>
            <h1 className="mt-3 text-3xl sm:text-4xl font-black text-foreground leading-tight">
              大肌肉運動
            </h1>
            <p className="mt-4 text-muted-foreground leading-relaxed">
              透過豐富的戶外活動與體能遊戲，讓孩子在奔跑、跳躍、攀爬中鍛鍊大肌肉群，發展協調性與肢體力量，同時在團隊互動中學習合作與勇氣，釋放無限活力。
            </p>
          </div>

          <div>
            <h2 className="text-xl font-bold text-foreground mb-6 pb-2 border-b border-border">
              精彩貼文分享
            </h2>
            <FacebookEmbed
              href="https://www.facebook.com/znznschool/posts/pfbid02YsjNJUB8vvGX7uryHoKPJ2p1R9dC1FnKnrYVLCAUzWdhu7vqc46tFyyMo31mb6nQl"
              height={703}
              thumbnail={motor1Thumb.url}
              postTitle="仁仁森林親子運動會"
            />
          </div>
        </div>
      </section>
    </main>
  );
};

export default GrossMotor;
