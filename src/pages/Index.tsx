import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { Menu, X, Phone, MapPin, Clock, ChevronRight, Leaf, BookOpen, Palette, Users, Heart, Star, Mail, Megaphone, CalendarDays, Bell, Smile, TreePine, Sparkles, Brain, Wind, Utensils } from "lucide-react";
import headerLogo from "@/assets/header-logo.png";
import footerLogo from "@/assets/footer-logo.jpg";
import heroBg from "@/assets/hero-bg.jpg";
import classroom1 from "@/assets/classroom-1.jpg";
import classroom2 from "@/assets/classroom-2.jpg";
import classroom3 from "@/assets/classroom-3.jpg";
import classroom4 from "@/assets/classroom-4.jpg";
import classroom5 from "@/assets/classroom-5.jpg";
import classroom6 from "@/assets/classroom-6.jpg";
import campus1 from "@/assets/campus-1.jpg";
import campus2 from "@/assets/campus-2.jpg";
import campus3 from "@/assets/campus-3.jpg";
import campus4 from "@/assets/campus-4.jpg";
import campus5 from "@/assets/campus-5.jpg";
import campus6 from "@/assets/campus-6.jpg";
import campus7 from "@/assets/campus-7.jpg";
import campus8 from "@/assets/campus-8.jpg";
import campus9 from "@/assets/campus-9.jpg";
import campusNew1 from "@/assets/campus-new1.jpg";
import campusNew2 from "@/assets/campus-new2.jpg";
import campusNew3 from "@/assets/campus-new3.jpg";
import campusNew4 from "@/assets/campus-new4.jpg";
import campusNew5 from "@/assets/campus-new5.jpg";
import playground1 from "@/assets/playground-1.jpg";
import playground2 from "@/assets/playground-2.jpg";
import playground3 from "@/assets/playground-3.jpg";
import playground4 from "@/assets/playground-4.jpg";
import playground5 from "@/assets/playground-5.jpg";
import playground6 from "@/assets/playground-6.jpg";
import playground7 from "@/assets/playground7.jpg";
import playground8 from "@/assets/playground8.jpg";
import outdoorSoccerField from "@/assets/outdoor-soccer-field.jpg";
import outdoorSoccerKids from "@/assets/outdoor-soccer-kids.jpg";
import playgroundRunning from "@/assets/playground-running.jpg";
import pickupArea1 from "@/assets/pickup-area-1.jpg";
import skating1 from "@/assets/skating-1.jpg";
import skating2 from "@/assets/skating-2.jpg";
import skating3 from "@/assets/skating-3.jpg";
import skating4 from "@/assets/skating-4.jpg";
import pickupArea2 from "@/assets/pickup-area-2.jpg";
import pickupArea3 from "@/assets/pickup-area-3.jpg";
import kitchen1 from "@/assets/kitchen-1.jpg";
import kitchen2 from "@/assets/kitchen-2.jpg";
import kitchen3 from "@/assets/kitchen-3.jpg";
import kitchen4 from "@/assets/kitchen-4.jpg";
import nurse1 from "@/assets/nurse-1.jpg";
import nurse2 from "@/assets/nurse-2.jpg";
import nurse3 from "@/assets/nurse-3.jpg";
import nurse4 from "@/assets/nurse-4.jpg";
import { newsletters, tagColor } from "@/data/newsletters";

// Scroll reveal hook
const useScrollReveal = () => {
  const ref = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setIsVisible(true); },
      { threshold: 0.15 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return { ref, isVisible };
};

const RevealSection = ({ children, className = "", delay = 0 }: { children: React.ReactNode; className?: string; delay?: number }) => {
  const { ref, isVisible } = useScrollReveal();
  return (
    <div
      ref={ref}
      className={className}
      style={{
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? "translateY(0) blur(0)" : "translateY(20px)",
        filter: isVisible ? "blur(0px)" : "blur(4px)",
        transition: `opacity 0.7s cubic-bezier(0.16,1,0.3,1) ${delay}ms, transform 0.7s cubic-bezier(0.16,1,0.3,1) ${delay}ms, filter 0.7s cubic-bezier(0.16,1,0.3,1) ${delay}ms`,
      }}
    >
      {children}
    </div>
  );
};

const downloadPdf = async (event: React.MouseEvent<HTMLAnchorElement>, href: string, filename: string) => {
  event.preventDefault();
  try {
    const response = await fetch(href);
    if (!response.ok) throw new Error("Download failed");
    const blob = await response.blob();
    const blobUrl = URL.createObjectURL(blob);
    const link = document.createElement("a");

    link.href = blobUrl;
    link.download = filename;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(blobUrl);
  } catch {
    window.location.href = href;
  }
};

// Navigation
const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handler);
    return () => window.removeEventListener("scroll", handler);
  }, []);

  const links = [
    { label: "關於我們", href: "#about" },
    { label: "教學特色", href: "#features" },
    
    { label: "森林實驗", href: "#news" },
    { label: "校園環境", href: "#campus" },
    { label: "收費標準", href: "#pricing" },
    { label: "聯絡我們", href: "#contact" },
  ];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? "bg-white/95 shadow-md backdrop-blur-sm" : "bg-transparent"}`}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 flex items-center justify-between h-16 sm:h-20">
        <a href="#" className="flex items-center gap-2">
          <img src={headerLogo} alt="仁仁森林幼兒園" className="h-10 sm:h-14 w-auto" />
        </a>
        <div className="hidden md:flex items-center gap-1">
          {links.map(l => (
            <a key={l.href} href={l.href} className="px-3 py-2 text-sm font-medium text-foreground/80 hover:text-primary transition-colors rounded-lg hover:bg-primary/5 active:scale-[0.97]">
              {l.label}
            </a>
          ))}
          <a href="#contact" className="ml-3 px-5 py-2.5 bg-primary text-primary-foreground text-sm font-medium rounded-full hover:shadow-lg hover:shadow-primary/20 transition-all active:scale-95">
            預約參觀
          </a>
        </div>
        <button onClick={() => setOpen(!open)} className="md:hidden p-2 rounded-lg hover:bg-muted active:scale-95 transition-all" aria-label="選單">
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>
      {open && (
        <div className="md:hidden bg-white/98 backdrop-blur-sm border-t border-border px-4 pb-4 pt-2">
          {links.map(l => (
            <a key={l.href} href={l.href} onClick={() => setOpen(false)} className="block py-3 text-sm font-medium text-foreground/80 hover:text-primary border-b border-border/50 last:border-0">
              {l.label}
            </a>
          ))}
          <a href="#contact" onClick={() => setOpen(false)} className="block mt-3 text-center px-5 py-2.5 bg-primary text-primary-foreground text-sm font-medium rounded-full">
            預約參觀
          </a>
        </div>
      )}
    </nav>
  );
};

// Hero with News sidebar
const Hero = () => {
  return (
    <section className="relative min-h-[92vh] flex items-center overflow-hidden">
      <div className="absolute inset-0">
        <img src={heroBg} alt="" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-r from-white/90 via-white/75 to-white/40" />
      </div>
      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 pt-24 pb-16 w-full">
        <div className="grid lg:grid-cols-[1fr_380px] gap-10 lg:gap-12 items-center">
          {/* Left: Hero content */}
          <div>
            <RevealSection>
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 text-primary text-xs font-medium mb-6 tracking-wide">
                <Leaf size={14} />
                創立40週年 · 1986—2026
              </div>
            </RevealSection>
            <RevealSection delay={100}>
              <h1 className="text-4xl sm:text-5xl lg:text-[3.5rem] font-black text-foreground leading-[1.15] tracking-tight" style={{ textWrap: "balance" }}>
                仁仁森林幼兒園
              </h1>
              <p className="mt-3 text-xl sm:text-2xl font-bold text-primary tracking-wide">
                哲思 · 美學 · 自然 · 活力
              </p>
            </RevealSection>
            <RevealSection delay={200}>
              <p className="mt-6 text-base sm:text-lg text-muted-foreground leading-relaxed max-w-lg" style={{ textWrap: "pretty" }}>
                四十年來，仁仁森林在臺南這片土地上紮根。我們以哲學啟迪思想、以美學涵養創造、以自然滋養心靈，陪伴孩子在廣闊的綠地中釋放活力，自信茁壯。
              </p>
            </RevealSection>
            <RevealSection delay={300}>
              <div className="mt-8 flex flex-wrap gap-3">
                <a href="#about" className="px-7 py-3 bg-primary text-primary-foreground font-medium rounded-full hover:shadow-xl hover:shadow-primary/20 transition-all active:scale-95 text-sm">
                  認識我們 <ChevronRight className="inline ml-1 -mr-1" size={16} />
                </a>
                <a href="#contact" className="px-7 py-3 border-2 border-primary/20 text-primary font-medium rounded-full hover:bg-primary/5 transition-all active:scale-95 text-sm">
                  預約參觀
                </a>
              </div>
            </RevealSection>
            <RevealSection delay={400}>
              <div className="mt-10 flex gap-8">
{[
                  { num: "40", label: "年辦學經驗" },
                  { num: "1600", label: "坪校園空間" },
                  { num: "4500+", label: "畢業校友" },
                ].map(s => (
                  <div key={s.label}>
                    <div className="text-2xl font-black text-primary tabular-nums">{s.num}</div>
                    <div className="text-xs text-muted-foreground mt-0.5">{s.label}</div>
                  </div>
                ))}
              </div>
            </RevealSection>
          </div>

          {/* Right: News sidebar */}
          <RevealSection delay={200} className="hidden lg:block scroll-mt-24">
            <div id="news-desktop" className="rounded-2xl bg-white/85 backdrop-blur-md shadow-xl shadow-primary/5 p-6 max-h-[540px] overflow-y-auto">
              <div className="flex items-center justify-between mb-5">
                <div className="flex items-center gap-2">
                  <BookOpen size={18} className="text-primary" />
                  <h2 className="text-lg font-bold text-foreground">森林實驗</h2>
                </div>
                <span className="text-[10px] text-muted-foreground tracking-wide">每月20號出刊</span>
              </div>
              <div className="space-y-4">
                {newsletters.slice(-1).map((item, i) => (
                    <Link key={i} to={`/newsletter/${item.slug}`} className="block rounded-xl overflow-hidden hover:shadow-md transition-all group cursor-pointer bg-white/60">
                      <div className="relative h-[130px] overflow-hidden">
                        <img src={item.cover} alt={item.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" style={item.slug === "vol-7" ? { objectPosition: "center 35%" } : undefined} />
                        <div className="absolute top-2 left-2 flex gap-1.5">
                          <span className="px-2 py-0.5 rounded-full text-[10px] font-bold bg-white/90 text-foreground backdrop-blur-sm">{item.issue}</span>
                          {item.tag.split(",").map((t) => (
                            <span key={t} className={`px-2 py-0.5 rounded-full text-[10px] font-bold ${tagColor[t] || "bg-muted text-foreground/60"}`}>{t}</span>
                          ))}
                        </div>
                        <span className="absolute top-2 right-2 px-2 py-0.5 rounded-full text-[10px] font-bold bg-primary text-primary-foreground">最新一期</span>
                      </div>
                      <div className="p-3.5">
                        <span className="text-[11px] text-muted-foreground">{item.date}</span>
                        <h3 className="text-[15px] font-bold text-foreground mt-1 leading-snug">{item.title}</h3>
                        <p className="text-xs text-muted-foreground leading-relaxed mt-1.5 line-clamp-2">{item.excerpt}</p>
                      </div>
                    </Link>
                ))}
              </div>
              {newsletters.length > 1 && (
                <div className="mt-5 pt-4 border-t border-border/60">
                  <p className="text-[11px] font-medium text-muted-foreground tracking-wide mb-2">往期文章</p>
                  <ul className="divide-y divide-border/50">
                    {[...newsletters].slice(0, -1).reverse().map((item, i) => (
                      <li key={i}>
                        <Link to={`/newsletter/${item.slug}`} className="flex items-center gap-3 py-2.5 group">
                          <div className="h-12 w-16 shrink-0 rounded-lg overflow-hidden">
                            <img src={item.cover} alt={item.title} className="h-full w-full object-cover group-hover:scale-105 transition-transform duration-500" />
                          </div>
                          <div className="min-w-0">
                            <div className="flex items-center gap-1.5">
                              <span className="text-[10px] font-bold text-primary">{item.issue}</span>
                              <span className="text-[10px] text-muted-foreground">{item.date}</span>
                            </div>
                            <h3 className="text-[13px] font-medium text-foreground leading-snug line-clamp-1 group-hover:text-primary transition-colors">{item.title}</h3>
                          </div>
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

            </div>
          </RevealSection>
        </div>

        {/* Mobile Newsletter */}
        <div className="lg:hidden mt-10 scroll-mt-24" id="news">
          <div className="rounded-2xl bg-white/90 backdrop-blur-md shadow-lg p-5">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-2">
                <BookOpen size={18} className="text-primary" />
                <h2 className="text-lg font-bold text-foreground">森林實驗</h2>
              </div>
              <span className="text-[10px] text-muted-foreground tracking-wide">每月20號出刊</span>
            </div>
            {newsletters.slice(-1).map((item, i) => (
              <Link key={i} to={`/newsletter/${item.slug}`} className="block rounded-xl overflow-hidden bg-white/60 hover:shadow-md transition-all group">
                <div className="relative h-[150px] overflow-hidden">
                  <img src={item.cover} alt={item.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" style={item.slug === "vol-7" ? { objectPosition: "center 35%" } : undefined} />
                  <div className="absolute top-2 left-2 flex gap-1.5">
                    <span className="px-2 py-0.5 rounded-full text-[10px] font-bold bg-white/90 text-foreground backdrop-blur-sm">{item.issue}</span>
                    {item.tag.split(",").map((t) => (
                      <span key={t} className={`px-2 py-0.5 rounded-full text-[10px] font-bold ${tagColor[t] || "bg-muted text-foreground/60"}`}>{t}</span>
                    ))}
                  </div>
                  <span className="absolute top-2 right-2 px-2 py-0.5 rounded-full text-[10px] font-bold bg-primary text-primary-foreground">最新一期</span>
                </div>
                <div className="p-3.5">
                  <span className="text-[11px] text-muted-foreground">{item.date}</span>
                  <h3 className="text-base font-bold text-foreground mt-1 leading-snug">{item.title}</h3>
                  <p className="text-[13px] text-muted-foreground leading-relaxed mt-1.5 line-clamp-3">{item.excerpt}</p>
                </div>
              </Link>
            ))}
            {newsletters.length > 1 && (
              <div className="mt-4 pt-4 border-t border-border/60">
                <p className="text-[11px] font-medium text-muted-foreground tracking-wide mb-1">往期文章</p>
                <ul className="divide-y divide-border/50">
                  {[...newsletters].slice(0, -1).reverse().map((item, i) => (
                    <li key={i}>
                      <Link to={`/newsletter/${item.slug}`} className="flex items-center gap-3 py-3 group">
                        <div className="h-14 w-[72px] shrink-0 rounded-lg overflow-hidden">
                          <img src={item.cover} alt={item.title} className="h-full w-full object-cover" />
                        </div>
                        <div className="min-w-0">
                          <div className="flex items-center gap-1.5">
                            <span className="text-[10px] font-bold text-primary">{item.issue}</span>
                            <span className="text-[10px] text-muted-foreground">{item.date}</span>
                          </div>
                          <h3 className="text-sm font-medium text-foreground leading-snug line-clamp-2 group-hover:text-primary transition-colors">{item.title}</h3>
                        </div>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            )}

          </div>
        </div>
      </div>
    </section>
  );
};

// About
const About = () => (
  <section id="about" className="py-20 sm:py-28 bg-white">
    <div className="max-w-6xl mx-auto px-4 sm:px-6">
      <RevealSection>
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-xs font-medium text-primary uppercase tracking-[0.2em]">關於我們</span>
          <h2 className="mt-3 text-3xl sm:text-4xl font-black text-foreground leading-tight">
            40年深耕臺南
          </h2>
          <h3 className="mt-1 text-xl sm:text-2xl font-bold text-foreground">
            陪伴孩子快樂成長
          </h3>
          <p className="mt-4 text-muted-foreground leading-relaxed" style={{ textWrap: "pretty" }}>
            自1986年創立以來，仁仁森林陪伴了超過四千五百名孩子的成長。展望未來，我們將以嚴謹的專業標準與溫柔的引導，繼續為孩子構築一座安全快樂的童年樂園。
          </p>
        </div>
      </RevealSection>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {[
          { icon: Users, title: "小班制教學", desc: "維持適當師生比例，確保每位孩子都能獲得充足的關注與個別化的學習引導。" },
          { icon: Heart, title: "園內專職護理師", desc: "園內配置專職護理人員，第一時間照護孩子健康，家長更安心。" },
          { icon: Smile, title: "課內直排輪", desc: "將直排輪納入正式課程，培養孩子的平衡感、體能與運動樂趣。" },
          { icon: Star, title: "廣闊綠意校園", desc: "綠意環繞的校園，提供孩子寬敞的活動範圍與貼近自然的學習場域。" },
          { icon: TreePine, title: "窗窗有景", desc: "校園裡的每間教室及每扇窗都能看到綠樹草地，讓孩子的視線時時被自然環抱。" },
          { icon: Wind, title: "空氣品質檢測", desc: "全園區配備實時空氣品質監測，無論在室內或戶外，讓孩子的每一口呼吸都純淨。" },
          { icon: Sparkles, title: "優等廚房", desc: "高規格配備廚房，連續六年榮獲「臺南市餐飲衛生分級評核認證優等獎」。" },
          { icon: Utensils, title: "美味餐點", desc: "由專業營養師與二十年資歷主廚聯手把關，為孩子烹調出營養均衡的日常美味。", link: "/files/meal-2025-09.pdf" },
          { icon: Bell, title: "安心接駁", desc: "配置兩台專屬娃娃車，提供安穩無虞的接送服務，配合每個家庭的日常步調。" },
        ].map((item, i) => (
          <RevealSection key={item.title} delay={i * 80}>
            <div className="group p-6 rounded-2xl bg-muted/40 hover:bg-white hover:shadow-xl hover:shadow-primary/5 transition-all duration-300 h-full active:scale-[0.98]">
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/15 transition-colors">
                <item.icon size={22} className="text-primary" />
              </div>
              <h3 className="text-lg font-bold text-foreground mb-2">
                {"link" in item && item.link ? (
                  item.link.startsWith("#") ? (
                    <a
                      href={item.link}
                      className="text-primary hover:underline inline-flex items-center gap-1"
                    >
                      {item.title}
                    </a>
                  ) : (
                    <a
                      href={item.link}
                      onClick={(event) => downloadPdf(event, item.link, "仁仁森林幼兒園-9月份餐點表.pdf")}
                      download="仁仁森林幼兒園-9月份餐點表.pdf"
                      className="text-primary hover:underline inline-flex items-center gap-1"
                    >
                      {item.title}
                      <span aria-hidden className="text-xs">↓</span>
                    </a>
                  )
                ) : (
                  item.title
                )}
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
            </div>
          </RevealSection>
        ))}
      </div>
    </div>
  </section>
);

// Features
const Features = () => (
  <section id="features" className="py-20 sm:py-28" style={{ background: "linear-gradient(180deg, hsl(120 15% 95%) 0%, hsl(0 0% 100%) 100%)" }}>
    <div className="max-w-6xl mx-auto px-4 sm:px-6">
      <RevealSection>
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-xs font-medium text-primary uppercase tracking-[0.2em]">教學特色</span>
          <h2 className="mt-3 text-3xl sm:text-4xl font-black text-foreground leading-tight">
            教育主軸與特色課程
          </h2>
          <p className="mt-5 text-base sm:text-lg text-muted-foreground leading-relaxed">
            以哲思、美學、自然、活力為四大主軸，融入豐富多元的特色課程，陪伴孩子在動手操作與探索中自主學習、快樂成長。
          </p>
        </div>
      </RevealSection>
      <div className="grid md:grid-cols-2 gap-8">
        {[
          {
            icon: Brain, color: "primary", title: "哲思",
            subtitle: "啟發獨立思考的力量",
            desc: "源自法國兒童哲學教育體系，相信每個孩子天生就是哲學家。我們透過對話與提問，陪伴孩子在生活情境中思辨、表達，培養獨立思考的能力。",
            courses: ["團體討論", "邏輯思維", "語文情境", "每日繪本分享"],
          },
          {
            icon: Palette, color: "secondary", title: "美學",
            subtitle: "點燃創造力的火花",
            desc: "將美感融入日常，提供豐富的媒材與自由的創作空間，讓孩子在動手探索中感受美、自由表達內心世界，培養終身受用的審美素養。",
            courses: ["心靈繪畫", "油彩創作", "環保創作", "校園寫生", "藝術賞析", "音樂欣賞"],
          },
          {
            icon: TreePine, color: "primary", title: "自然",
            subtitle: "在大地中滋養心靈",
            desc: "在森林般的校園環境中，帶領孩子走入自然、觀察四季變化，從親身體驗中培養對環境的關懷，以及好奇探究的科學精神。",
            courses: ["種植體驗", "科學實驗", "自然生態觀察", "環境教育", "森林遊樂探索", "感官體驗", "昆蟲觀察", "食農教育"],
          },
          {
            icon: Smile, color: "secondary", title: "活力",
            subtitle: "在遊戲中綻放活力",
            desc: "活力是孩子探索世界的能量。在安全溫暖的環境中，孩子盡情伸展身體、動手嘗試，從遊戲與生活實踐中累積自信，樂在成長。",
            courses: ["大肌肉運動", "烘培DIY", "生活常識", "學習區探索", "節慶活動"],
          },
        ].map((item, i) => (
          <RevealSection key={item.title} delay={i * 100}>
            <div className="relative overflow-hidden rounded-3xl bg-white p-8 sm:p-10 shadow-lg shadow-primary/5 h-full">
              <div className={`absolute top-0 right-0 w-32 h-32 ${item.title === "哲思" ? "bg-[#C5D5E4]/50" : item.title === "美學" ? "bg-[#D4B8C4]/50" : item.color === "primary" ? "bg-primary/5" : "bg-secondary/10"} rounded-full -translate-y-1/2 translate-x-1/2`} />
              <div className="relative">
                <div className={`w-14 h-14 rounded-2xl ${item.title === "哲思" ? "bg-[#C5D5E4]/40" : item.title === "美學" ? "bg-[#D4B8C4]/40" : item.color === "primary" ? "bg-primary/10" : "bg-secondary/15"} flex items-center justify-center mb-6`}>
                  <item.icon size={26} className={item.title === "哲思" ? "text-[#3B5A7B]" : item.title === "美學" ? "text-[#8B4A6B]" : item.color === "primary" ? "text-primary" : "text-secondary"} />
                </div>
                <h3 className="text-2xl font-bold text-foreground mb-1">{item.title}</h3>
                <p className={`text-sm font-medium mb-4 ${item.title === "哲思" ? "text-[#3B5A7B]/70" : item.title === "美學" ? "text-[#8B4A6B]/70" : item.title === "活力" ? "text-secondary/70" : "text-primary/70"}`}>{item.subtitle}</p>
                <p className="text-muted-foreground leading-relaxed mb-6">{item.desc}</p>
                <div className="pt-5 border-t border-border/60">
                  <div className="flex flex-wrap gap-2">
                    {item.courses.map(z => {
                      const className = `inline-flex items-center rounded-full px-3 py-1 text-xs font-medium ${
                        item.title === "哲思"
                          ? "bg-[#C5D5E4]/30 text-[#3B5A7B] border border-[#3B5A7B]/15"
                          : item.title === "美學"
                          ? "bg-[#D4B8C4]/30 text-[#8B4A6B] border border-[#8B4A6B]/15"
                          : item.color === "primary"
                          ? "bg-primary/8 text-primary border border-primary/15"
                          : "bg-secondary/12 text-secondary border border-secondary/20"
                      }`;
                      if (z === "每日繪本分享") {
                        return (
                          <Link
                            key={z}
                            to="/daily-picture-book"
                            className="inline-flex items-center rounded-full px-3 py-1 text-xs font-medium bg-[#3B5A7B] text-white hover:bg-[#3B5A7B]/80 transition-colors shadow-sm"
                          >
                            {z}
                          </Link>
                        );
                      }
                      if (z === "語文情境") {
                        return (
                          <Link
                            key={z}
                            to="/language-context"
                            className="inline-flex items-center rounded-full px-3 py-1 text-xs font-medium bg-[#3B5A7B] text-white hover:bg-[#3B5A7B]/80 transition-colors shadow-sm"
                          >
                            {z}
                          </Link>
                        );
                      }
                      if (z === "校園寫生") {
                        return (
                          <Link
                            key={z}
                            to="/newsletter/vol-5"
                            className="inline-flex items-center rounded-full px-3 py-1 text-xs font-medium bg-[#8B4A6B] text-white hover:bg-[#8B4A6B]/80 transition-colors shadow-sm"
                          >
                            {z}
                          </Link>
                        );
                      }
                      if (z === "油彩創作") {
                        return (
                          <Link
                            key={z}
                            to="/oil-painting"
                            className="inline-flex items-center rounded-full px-3 py-1 text-xs font-medium bg-[#8B4A6B] text-white hover:bg-[#8B4A6B]/80 transition-colors shadow-sm"
                          >
                            {z}
                          </Link>
                        );
                      }
                      if (z === "藝術賞析") {
                        return (
                          <Link
                            key={z}
                            to="/art-appreciation"
                            className="inline-flex items-center rounded-full px-3 py-1 text-xs font-medium bg-[#8B4A6B] text-white hover:bg-[#8B4A6B]/80 transition-colors shadow-sm"
                          >
                            {z}
                          </Link>
                        );
                      }
                      if (z === "環保創作") {
                        return (
                          <Link
                            key={z}
                            to="/eco-creation"
                            className="inline-flex items-center rounded-full px-3 py-1 text-xs font-medium bg-[#8B4A6B] text-white hover:bg-[#8B4A6B]/80 transition-colors shadow-sm"
                          >
                            {z}
                          </Link>
                        );
                      }
              if (z === "烘培DIY") {
                return (
                  <Link
                    key={z}
                    to="/baking-diy"
                    className="inline-flex items-center rounded-full px-3 py-1 text-xs font-medium bg-secondary text-secondary-foreground hover:bg-secondary/80 transition-colors shadow-sm"
                  >
                    {z}
                  </Link>
                );
              }
              if (z === "節慶活動") {
                        return (
                          <Link
                            key={z}
                            to="/festival-activities"
                            className="inline-flex items-center rounded-full px-3 py-1 text-xs font-medium bg-secondary text-secondary-foreground hover:bg-secondary/80 transition-colors shadow-sm"
                          >
                            {z}
                          </Link>
                        );
                      }
                      if (z === "大肌肉運動") {
                        return (
                          <Link
                            key={z}
                            to="/gross-motor"
                            className="inline-flex items-center rounded-full px-3 py-1 text-xs font-medium bg-secondary text-secondary-foreground hover:bg-secondary/80 transition-colors shadow-sm"
                          >
                            {z}
                          </Link>
                        );
                      }
                      if (z === "生活常識") {
                        return (
                          <Link
                            key={z}
                            to="/life-skills"
                            className="inline-flex items-center rounded-full px-3 py-1 text-xs font-medium bg-secondary text-secondary-foreground hover:bg-secondary/80 transition-colors shadow-sm"
                          >
                            {z}
                          </Link>
                        );
                      }
                      if (z === "自然生態觀察") {
                        return (
                          <Link
                            key={z}
                            to="/nature-observation"
                            className="inline-flex items-center rounded-full px-3 py-1 text-xs font-medium bg-primary text-primary-foreground hover:bg-primary/80 transition-colors shadow-sm"
                          >
                            {z}
                          </Link>
                        );
                      }
                      if (z === "學習區探索") {
                        return (
                          <Link
                            key={z}
                            to="/learning-zone-exploration"
                            className="inline-flex items-center rounded-full px-3 py-1 text-xs font-medium bg-secondary text-secondary-foreground hover:bg-secondary/80 transition-colors shadow-sm"
                          >
                            {z}
                          </Link>
                        );
                      }
                      return (
                        <span key={z} className={className}>
                          {z}
                        </span>
                      );
                    })}
                  </div>

                </div>
              </div>
            </div>
          </RevealSection>
        ))}
      </div>
    </div>
  </section>
);

// Campus
const Campus = () => (
  <section id="campus" className="py-20 sm:py-28" style={{ background: "linear-gradient(180deg, hsl(120 15% 95%) 0%, hsl(0 0% 100%) 100%)" }}>
    <div className="max-w-6xl mx-auto px-4 sm:px-6">
      <RevealSection>
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-xs font-medium text-primary uppercase tracking-[0.2em]">校園環境</span>
          <h2 className="mt-3 text-3xl sm:text-4xl font-black text-foreground leading-tight">
            如森林般的學習天地
          </h2>
          <p className="mt-4 text-muted-foreground" style={{ textWrap: "pretty" }}>
            我們精心打造綠意盎然、安全溫馨的校園空間，讓孩子在自然中探索、在美學中薰陶、在快樂中成長。
          </p>
        </div>
      </RevealSection>
      {/* 校園美景照片展示 */}
      <RevealSection>
        <h3 id="campus-green" className="text-xl font-bold text-foreground mb-4 flex items-center gap-2">
          <a href="#campus-green" className="hover:text-primary hover:underline transition-colors">🏫 廣闊綠意校園</a>
        </h3>
        <p className="text-muted-foreground mb-6">綠意環繞的校園，提供孩子寬敞的活動範圍與貼近自然的學習場域。</p>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 mb-12">
          {[campusNew1, campus4, campusNew2, campusNew3, campusNew4, campusNew5].map((img, i) => (
            <div key={i} className="rounded-2xl overflow-hidden shadow-md hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
              <img src={img} alt={`校園美景 ${i + 1}`} className="w-full h-full object-cover aspect-[16/9]" loading="lazy" />
            </div>
          ))}
        </div>
      </RevealSection>
      {/* 寬敞教室照片展示 */}
      <RevealSection>
        <h3 className="text-xl font-bold text-foreground mb-4 flex items-center gap-2">📚 多元學習區</h3>
        <p className="text-muted-foreground mb-6">我們依據孩子的好奇心與能力，提供豐富的媒材，鼓勵他們在動手操作與遊戲中自主探索。</p>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 mb-12">
          {[classroom1, classroom2, classroom3, classroom4, classroom5, classroom6].map((img, i) => (
            <div key={i} className="rounded-2xl overflow-hidden shadow-md hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
              <img src={img} alt={`多元學習區 ${i + 1}`} className="w-full h-full object-cover aspect-[16/9]" loading="lazy" />
            </div>
          ))}
        </div>
      </RevealSection>
      {/* 戶外遊戲區照片展示 */}
      <RevealSection>
        <h3 className="text-xl font-bold text-foreground mb-4 flex items-center gap-2">🌳 戶外遊戲區</h3>
        <p className="text-muted-foreground mb-6">寬敞的校園綠地，讓孩子能盡情奔跑、攀爬與遊戲，在陽光與綠意中鍛鍊體能、釋放活力。</p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-12">
          {[playground8, outdoorSoccerField, playgroundRunning, playground1, playground6, playground7].map((img, i) => (
            <div key={i} className="rounded-2xl overflow-hidden shadow-md hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
              <img src={img} alt={`戶外遊戲區 ${i + 1}`} className="w-full h-full object-cover aspect-[16/9]" loading="lazy" />
            </div>
          ))}
        </div>
      </RevealSection>

      {/* 課內直排輪照片展示 */}
      <RevealSection>
        <h3 id="campus-skating" className="text-xl font-bold text-foreground mb-4 flex items-center gap-2">
          <a href="#campus-skating" className="hover:text-primary hover:underline transition-colors">⛸️ 課內直排輪</a>
        </h3>
        <p className="text-muted-foreground mb-6">將直排輪納入課程，由專業教練帶領孩子在安全的場地中鍛鍊體能、平衡感與專注力，享受運動的樂趣。</p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-4 mb-12">
          {[skating1, skating2, skating3, skating4].map((img, i) => (
            <div key={i} className="rounded-2xl overflow-hidden shadow-md hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
              <img src={img} alt={`課內直排輪 ${i + 1}`} className="w-full h-full object-cover aspect-[16/9]" loading="lazy" />
            </div>
          ))}
        </div>
      </RevealSection>

      {/* 安全接送區照片展示 */}
      <RevealSection>
        <h3 id="campus-pickup" className="text-xl font-bold text-foreground mb-4 flex items-center gap-2">
          <a href="#campus-pickup" className="hover:text-primary hover:underline transition-colors">🚐 安全接送區</a>
        </h3>
        <p className="text-muted-foreground mb-6">獨立規劃的接送動線與專屬校車，搭配交通導護人員，讓孩子每天的上下學都安心有序。</p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-12">
          {[pickupArea1, pickupArea3, pickupArea2].map((img, i) => (
            <div key={i} className="rounded-2xl overflow-hidden shadow-md hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
              <img src={img} alt={`安全接送區 ${i + 1}`} className="w-full h-full object-cover aspect-[16/9]" loading="lazy" />
            </div>
          ))}
        </div>
      </RevealSection>

      {/* 園內專職護理師照片展示 */}
      <RevealSection>
        <h3 id="campus-nurse" className="text-xl font-bold text-foreground mb-4 flex items-center gap-2">
          <a href="#campus-nurse" className="hover:text-primary hover:underline transition-colors">🩺 園內專職護理師</a>
        </h3>
        <p className="text-muted-foreground mb-6">
          園內配置專職護理師，每日把關孩子的健康狀況——從衛教宣導、洗手習慣養成，到定期身高體重量測，第一時間照護每一位孩子，讓家長更安心。
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-12">
          {[nurse1, nurse3, nurse4, nurse2].map((img, i) => (
            <div key={i} className="rounded-2xl overflow-hidden shadow-md hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
              <img src={img} alt={`園內專職護理師 ${i + 1}`} className="w-full h-full object-cover aspect-[16/9]" loading="lazy" />
            </div>
          ))}
        </div>
      </RevealSection>

      {/* 優等廚房照片展示 */}
      <RevealSection>
        <h3 id="campus-kitchen" className="text-xl font-bold text-foreground mb-4 flex items-center gap-2">
          <a href="#campus-kitchen" className="hover:text-primary hover:underline transition-colors">🍳 優等廚房</a>
        </h3>
        <p className="text-muted-foreground mb-6">
          高規格配備廚房，連續六年榮獲「臺南市餐飲衛生分級評核認證優等獎」，由專業營養師與資深主廚為孩子把關每日餐點。
        </p>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 mb-12">
          {[kitchen1, kitchen4, kitchen2, kitchen3].map((img, i) => (
            <div key={i} className="rounded-2xl overflow-hidden shadow-md hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
              <img src={img} alt={`優等廚房 ${i + 1}`} className="w-full h-full object-cover aspect-[16/9]" loading="lazy" />
            </div>
          ))}
        </div>
      </RevealSection>
    </div>
  </section>
);

// Pricing
const Pricing = () => (
  <section id="pricing" className="py-20 sm:py-28 bg-white">
    <div className="max-w-6xl mx-auto px-4 sm:px-6">
      <RevealSection>
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-xs font-medium text-primary uppercase tracking-[0.2em]">收費標準</span>
          <h2 className="mt-3 text-3xl sm:text-4xl font-black text-foreground leading-tight">
            公開透明的收費方式
          </h2>
          <p className="mt-4 text-muted-foreground" style={{ textWrap: "pretty" }}>
            仁仁森林幼兒園提供優質的學前教育，以下為 113 年 8 月開始的收費標準。
          </p>
        </div>
      </RevealSection>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {[
          { title: "學費", items: ["23,000 元 / 學期（中・小・幼班）", "17,000 元 / 學期（大班）", "含學生平安保險費用", "另有「特約優惠」、「校友優惠」及「家庭優惠」"], icon: "📋" },
          { title: "月費", items: ["雜費：6,650 元", "材料費：2,080 元", "活動費：520 元", "午餐費：1,030 元", "點心費：520 元"], icon: "📅" },
          { title: "交通車", items: ["單趟：900 元 / 月", "雙趟：1,600 元 / 月", "歡迎非安南區家庭，多多享用此項服務"], icon: "🚌" },
        ].map((item, i) => (
          <RevealSection key={item.title} delay={i * 100}>
            <div className="p-8 rounded-2xl bg-muted/40 hover:bg-white hover:shadow-xl hover:shadow-primary/5 transition-all duration-300 h-full">
              <div className="text-3xl mb-4">{item.icon}</div>
              <h3 className="text-lg font-bold text-foreground mb-4">{item.title}</h3>
              <ul className="space-y-2">
                {item.items.map((line) => (
                  <li key={line} className="flex items-start gap-2 text-sm text-muted-foreground">
                    <span className="text-primary mt-0.5">✓</span>
                    <span>{line}</span>
                  </li>
                ))}
              </ul>
            </div>
          </RevealSection>
        ))}
      </div>
      <RevealSection>
        <div className="mt-8 text-center">
          <a
            href="https://www.surveycake.com/s/x1280"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-primary text-primary-foreground font-bold text-base sm:text-lg shadow-lg hover:shadow-xl hover:scale-105 hover:bg-primary/90 transition-all duration-300"
          >
            歡迎加入仁仁大家庭！
          </a>
        </div>
      </RevealSection>
      <RevealSection>
        <div className="mt-16">
          <div className="text-center mb-8">
            <span className="text-xs font-medium text-primary uppercase tracking-[0.2em]">退費標準</span>
            <h3 className="mt-3 text-2xl sm:text-3xl font-black text-foreground leading-tight">
              退費相關規定
            </h3>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                title: "學費",
                icon: "📋",
                items: [
                  "以學期為單位，上學期 8 月至隔年 1 月；下學期 2 月至 7 月",
                  "按比例退費：就讀 1/3 學期收 7,600 元",
                  "按比例退費：就讀 2/3 學期收 15,300 元",
                  
                ],
              },
              {
                title: "雜費・材料費",
                icon: "📦",
                items: [
                  "幼兒因故請假，不予退費",
                  "因故退學並於事前辦妥退費手續者，依比例退費",
                ],
              },
              {
                title: "午餐費・點心費・交通費",
                icon: "🍱",
                items: [
                  "幼兒因故請假並於事前辦妥請假手續，且請假日數連續達七日（含假日）以上者",
                  "幼兒園因法定傳染病、流行病或流行性疫情等強制停課，連續達七日（含假日）以上者",
                  "國定假日、農曆春節連續達七日（含假日）以上者",
                  "按當月未就讀日數比例採事前扣除方式辦理，但補課之彈性放假日不予退費",
                ],
              },
            ].map((item, i) => (
              <RevealSection key={item.title} delay={i * 100}>
                <div className="p-8 rounded-2xl bg-muted/40 hover:bg-white hover:shadow-xl hover:shadow-primary/5 transition-all duration-300 h-full">
                  <div className="text-3xl mb-4">{item.icon}</div>
                  <h4 className="text-lg font-bold text-foreground mb-4">{item.title}</h4>
                  <ul className="space-y-2">
                    {item.items.map((line) => (
                      <li key={line} className="flex items-start gap-2 text-sm text-muted-foreground">
                        <span className="text-primary mt-0.5">✓</span>
                        <span style={{ textWrap: "pretty" }}>{line}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </RevealSection>
            ))}
          </div>
        </div>
      </RevealSection>
      <RevealSection>
        <div className="mt-12 text-center p-6 rounded-2xl bg-primary/5 border border-primary/10">
          <p className="text-muted-foreground text-sm">
            本園收退費基準依據「臺南市公私立教保服務機構收退費辦法」辦理，詳細費用請來電洽詢：
            <a href="tel:06-2553161" className="text-primary font-medium hover:underline ml-1">(06) 255-3161</a>
          </p>
        </div>
      </RevealSection>
    </div>
  </section>
);

// Contact
const Contact = () => (
  <section id="contact" className="py-20 sm:py-28" style={{ background: "linear-gradient(180deg, hsl(0 0% 100%) 0%, hsl(120 15% 95%) 100%)" }}>
    <div className="max-w-6xl mx-auto px-4 sm:px-6">
      <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
        <RevealSection>
          <div>
            <span className="text-xs font-medium text-primary uppercase tracking-[0.2em]">聯絡我們</span>
            <h2 className="mt-3 text-3xl sm:text-4xl font-black text-foreground leading-tight mb-6">
              歡迎預約參觀
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-8">
              想更了解仁仁森林的教育理念嗎？歡迎來電或親臨參觀，讓我們為您和孩子介紹這片學習的森林。
            </p>
            <div className="space-y-5">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                  <MapPin size={18} className="text-primary" />
                </div>
                <div>
                  <div className="font-medium text-foreground text-sm">校園地址</div>
                  <div className="text-sm text-muted-foreground mt-0.5">臺南市安南區怡安路二段516巷188號</div>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                  <Phone size={18} className="text-primary" />
                </div>
                <div>
                  <div className="font-medium text-foreground text-sm">聯絡電話</div>
                  <a href="tel:06-2553161" className="text-sm text-muted-foreground mt-0.5 hover:text-primary transition-colors">(06) 255-3161</a>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                  <Clock size={18} className="text-primary" />
                </div>
                <div>
                  <div className="font-medium text-foreground text-sm">開放時間</div>
                  <div className="text-sm text-muted-foreground mt-0.5">週一至週五 07:30 — 18:00</div>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                  <Mail size={18} className="text-primary" />
                </div>
                <div>
                  <div className="font-medium text-foreground text-sm">電子信箱</div>
                  <a href="mailto:znzn.tn@msa.hinet.net" className="text-sm text-muted-foreground mt-0.5 hover:text-primary transition-colors">znzn.tn@msa.hinet.net</a>
                </div>
              </div>
            </div>
          </div>
        </RevealSection>
        <RevealSection delay={150}>
          <div className="rounded-2xl overflow-hidden shadow-xl shadow-primary/5 h-72 lg:h-full min-h-[300px]">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3671.337513486697!2d120.19599900000001!3d23.0480846!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x346e7798505f4717%3A0x5522390f169ce599!2z6Ie65Y2X5biC56eB56uL5LuB5LuB5qOu5p6X5bm85YWS5ZyS!5e0!3m2!1sen!2sfr!4v1776712929817!5m2!1sen!2sfr"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="仁仁森林幼兒園地圖"
            />
          </div>
        </RevealSection>
      </div>
    </div>
  </section>
);

// Footer
const Footer = () => (
  <footer className="text-foreground/70 py-14 bg-white">
    <div className="max-w-6xl mx-auto px-4 sm:px-6">
      <div className="grid sm:grid-cols-3 gap-10 sm:gap-8 mb-10">
        <div className="flex flex-col items-center sm:items-start gap-3">
          <img src={footerLogo} alt="仁仁森林幼兒園" className="h-14 w-auto rounded-lg bg-white p-1" />
          <div className="text-center sm:text-left">
            <div className="font-bold text-foreground text-base">仁仁森林幼兒園</div>
            <div className="text-xs text-muted-foreground mt-0.5">臺南市私立 · 創立於1986年</div>
          </div>
        </div>
        <div className="text-center sm:text-left">
          <div className="font-semibold text-foreground text-sm mb-3">聯絡資訊</div>
          <div className="space-y-2 text-sm">
            <div className="flex items-center justify-center sm:justify-start gap-2">
              <Phone size={14} className="text-primary shrink-0" />
              <a href="tel:06-2553161" className="hover:text-primary transition-colors">(06) 255-3161</a>
            </div>
            <div className="flex items-center justify-center sm:justify-start gap-2">
              <Mail size={14} className="text-primary shrink-0" />
              <a href="mailto:znzn.tn@msa.hinet.net" className="hover:text-primary transition-colors">znzn.tn@msa.hinet.net</a>
            </div>
            <div className="flex items-start justify-center sm:justify-start gap-2">
              <MapPin size={14} className="text-primary shrink-0 mt-0.5" />
              <span>臺南市安南區怡安路二段516巷188號</span>
            </div>
          </div>
        </div>
        <div className="text-center sm:text-left">
          <div className="font-semibold text-foreground text-sm mb-3">快速連結</div>
          <div className="space-y-2 text-sm">
            <a href="#about" className="block hover:text-primary transition-colors">關於我們</a>
            <a href="#features" className="block hover:text-primary transition-colors">教學特色</a>
            <a href="#contact" className="block hover:text-primary transition-colors">聯絡我們</a>
          </div>
        </div>
      </div>
      <div className="border-t border-foreground/10 pt-6 text-center text-xs text-muted-foreground">
        © 2026 仁仁森林幼兒園 版權所有
      </div>
    </div>
  </footer>
);

// Page
const Index = () => (
  <div className="overflow-x-hidden">
    <Navbar />
    <Hero />
    <About />
    <Features />
    
    <Campus />
    <Pricing />
    
    <Contact />
    <Footer />
  </div>
);

export default Index;
