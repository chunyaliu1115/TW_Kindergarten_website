import { useEffect } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import { ArrowLeft, BookOpen, Calendar } from "lucide-react";
import headerLogo from "@/assets/header-logo.png";
import { newsletters, tagColor } from "@/data/newsletters";

const NewsletterArticle = () => {
  const { slug } = useParams<{ slug: string }>();
  const navigate = useNavigate();
  const article = newsletters.find((n) => n.slug === slug);

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "auto" });
  }, [slug]);

  const goToNewsletter = (e: React.MouseEvent) => {
    e.preventDefault();
    const isDesktop = window.matchMedia("(min-width: 1024px)").matches;
    const targetId = isDesktop ? "news-desktop" : "news";
    navigate("/");
    // Wait for home to render, then scroll
    setTimeout(() => {
      const el = document.getElementById(targetId);
      if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
    }, 100);
  };

  if (!article) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-background">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-foreground mb-4">找不到文章</h1>
          <Link to="/" className="text-primary hover:underline">
            ← 返回首頁
          </Link>
        </div>
      </div>
    );
  }

  const renderContent = (block: string, index: number) => {
    if (block === "{{facebook-reel}}" && article.embed) {
      return (
        <div className="mt-4 sm:mt-10 mb-3 sm:mb-2 flex justify-center">
          <div className="w-full max-w-[560px] aspect-[560/314] overflow-hidden">
          <iframe
            src={article.embed}
            width="560"
            height="314"
            className="block h-full w-full"
            style={{ border: "none", overflow: "hidden" }}
            scrolling="no"
            frameBorder="0"
            allowFullScreen
            allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
            title="Facebook Reel"
          />
          </div>
        </div>
      );
    }
    if (block === "{{gallery}}" && article.images && article.images.length > 0) {
      return (
        <div className={`grid gap-3 my-8 ${article.images.length % 3 === 0 ? "grid-cols-3" : "grid-cols-2"}`}>
          {article.images.map((img, i) => (
            <img
              key={i}
              src={img}
              alt={`${article.title} - 照片 ${i + 1}`}
              className="w-full h-48 sm:h-64 object-cover rounded-xl"
            />
          ))}
        </div>
      );
    }
    if (block.startsWith("{{center}}") && block.endsWith("{{/center}}")) {
      const inner = block.slice(10, -11);
      const parts = inner.split(/(\*\*[^*]+\*\*)/g);
      const isVol6VideoCaption = article.slug === "vol-6" && inner.includes("2025冬季野餐派對活動回顧");
      return (
        <p className={`text-center text-muted-foreground text-base mb-5 ${isVol6VideoCaption ? "leading-tight" : "leading-[1.9]"}`}>
          {parts.map((part, i) =>
            part.startsWith("**") && part.endsWith("**") ? (
              <strong key={i} className="text-foreground font-semibold">
                {part.slice(2, -2)}
              </strong>
            ) : (
              <span key={i}>{part}</span>
            )
          )}
        </p>
      );
    }
    if (block.startsWith("{{link}}") && block.endsWith("{{/link}}")) {
      const [url, ...rest] = block.slice(8, -"{{/link}}".length).split("|");
      return (
        <p className="text-center text-muted-foreground text-base mb-5 leading-[1.9]">
          <a
            href={url}
            target="_blank"
            rel="noopener noreferrer"
            className="text-primary font-semibold underline underline-offset-4 hover:opacity-80 transition-opacity"
          >
            {rest.join("|")}
          </a>
        </p>
      );
    }
    if (block.startsWith("### ")) {

      return (
        <h3 className="text-lg sm:text-xl font-bold text-foreground mt-10 mb-3">
          {block.slice(4)}
        </h3>
      );
    }
    if (block.startsWith("## ")) {
      return (
        <h2 className="text-xl sm:text-2xl font-bold text-foreground mt-12 mb-5 pb-2 border-b border-border">
          {block.slice(3)}
        </h2>
      );
    }
    // Handle bold text within paragraphs
    const parts = block.split(/(\*\*[^*]+\*\*)/g);
    return (
      <p className="text-muted-foreground leading-[2] text-base mb-5">
        {parts.map((part, i) =>
          part.startsWith("**") && part.endsWith("**") ? (
            <strong key={i} className="text-foreground font-semibold">
              {part.slice(2, -2)}
            </strong>
          ) : (
            <span key={i}>{part}</span>
          )
        )}
      </p>
    );
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-primary/5 via-background to-background">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-border/50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between">
          <Link
            to="/#news"
            onClick={goToNewsletter}
            className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors"
          >
            <ArrowLeft size={16} />
            <span>返回森林實驗</span>
          </Link>
          <Link to="/" className="flex items-center gap-2">
            <img src={headerLogo} alt="仁仁森林幼兒園" className="h-9 w-auto rounded-lg" />
          </Link>
        </div>
      </header>

      {/* Cover Image */}
      <div className="relative h-[300px] sm:h-[400px] overflow-hidden">
        <img
          src={article.cover}
          alt={article.title}
          className="w-full h-full object-cover"
          style={article.slug === "vol-7" ? { objectPosition: "center 35%" } : undefined}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 p-6 sm:p-10">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center gap-2 mb-3">
              <span className="px-3 py-1 rounded-full text-xs font-bold bg-white/90 text-foreground">
                {article.issue}
              </span>
              {article.tag.split(",").map((t) => (
                <span
                  key={t}
                  className={`px-3 py-1 rounded-full text-xs font-bold ${tagColor[t] || "bg-muted text-foreground/60"}`}
                >
                  {t}
                </span>
              ))}
            </div>
            <h1 className="text-2xl sm:text-3xl font-bold text-white leading-tight">
              {article.title}
            </h1>
          </div>
        </div>
      </div>

      {/* Article Body */}
      <main className="max-w-2xl mx-auto px-4 sm:px-6 py-10 sm:py-14">
        <div className="flex items-center gap-4 text-sm text-muted-foreground mb-8 pb-6 border-b border-border">
          <span className="flex items-center gap-1.5">
            <Calendar size={14} />
            {article.date}
          </span>
          <span className="flex items-center gap-1.5">
            <BookOpen size={14} />
            森林實驗
          </span>
        </div>

        {article.content.length > 0 ? (
          <article className="max-w-none">
            {article.content.map((block, i) => (
              <div key={i}>{renderContent(block, i)}</div>
            ))}
          </article>
        ) : (
          <div className="text-center py-16 text-muted-foreground">
            <BookOpen size={48} className="mx-auto mb-4 opacity-30" />
            <p className="text-lg">本期內容即將上線，敬請期待！</p>
          </div>
        )}
      </main>

      {/* Footer nav */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 pb-16">
        <div className="border-t border-border pt-8 flex justify-center">
          <Link
            to="/#news"
            onClick={goToNewsletter}
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-primary text-primary-foreground text-sm font-medium hover:bg-primary/90 transition-colors"
          >
            <ArrowLeft size={16} />
            回到森林實驗
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NewsletterArticle;
