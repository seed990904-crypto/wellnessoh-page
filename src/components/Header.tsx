import { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { Menu, X, User } from "lucide-react";

const CAFE24_LOGIN = "https://call2life2026.cafe24.com/member/login.html";

const navItems = [
  { label: "브랜드스토리", href: "#about" },
  { label: "원료&기술력", href: "/ingredients-technology" },
  { label: "블로그", href: "/blog" },
  { label: "팟케스트", href: "/podcast" },
  { label: "바이오해킹 제품", href: "/products" },
  { label: "청춘리셋 참여", href: "/youth-reset" },
];

const Header = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 30);
    window.addEventListener("scroll", handler, { passive: true });
    return () => window.removeEventListener("scroll", handler);
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [mobileOpen]);

  const isActive = (href: string) => {
    if (href.startsWith("#")) return false;
    return location.pathname === href || location.pathname.startsWith(href + "/");
  };

  const scrollTo = (href: string) => {
    setMobileOpen(false);
    if (!href.startsWith("#")) {
      navigate(href);
      return;
    }
    if (location.pathname !== "/") {
      navigate(`/${href}`);
      return;
    }
    document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
  };

  const handleLogoClick = () => {
    setMobileOpen(false);
    if (location.pathname !== "/") navigate("/");
    else window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <header className="fixed top-5 left-0 right-0 z-50 flex justify-center px-4">
      <div
        className={`w-[90%] max-w-[1200px] flex items-center justify-between h-14 px-5 md:px-8 rounded-full border border-white/60 shadow-[0_4px_6px_-1px_rgba(0,0,0,0.1)] transition-all duration-300 backdrop-blur-xl ${
          scrolled ? "bg-white/80" : "bg-white/50"
        }`}
      >
        {/* Left */}
        <div className="flex items-center gap-3 shrink-0">
          <button
            className="md:hidden p-1.5 text-foreground hover:text-muted-foreground transition-colors"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="메뉴"
          >
            {mobileOpen ? <X size={20} /> : <Menu size={20} />}
          </button>

          <button onClick={handleLogoClick} className="flex flex-col items-center leading-none cursor-pointer">
            <span className="text-[11px] md:text-sm font-bold tracking-tight text-foreground">
              Wellness Architect
            </span>
            <span className="w-full h-px bg-foreground/20 my-0.5 hidden md:block" />
            <span
              className="hidden md:block text-[10px] tracking-[0.45em] text-foreground/60 font-medium"
              style={{ fontFamily: "'Noto Sans KR', sans-serif" }}
            >
              웰니스 아키텍트
            </span>
          </button>
        </div>

        {/* Center Nav */}
        <nav className="hidden md:flex items-center gap-2 lg:gap-5 flex-1 justify-center">
          {navItems.map((item) => (
            <button
              key={item.href}
              onClick={() => scrollTo(item.href)}
              className={`text-[10px] lg:text-[11px] font-medium uppercase tracking-wider transition-colors whitespace-nowrap pb-0.5 ${
                isActive(item.href)
                  ? "text-primary border-b border-primary"
                  : "text-foreground hover:text-primary"
              }`}
            >
              {item.label}
            </button>
          ))}
        </nav>

        {/* Right — 카페24 로그인 */}
        <div className="flex items-center shrink-0">
          <a
            href={CAFE24_LOGIN}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="로그인"
            className="flex items-center gap-1.5 p-1.5 text-xs text-foreground hover:text-primary transition-colors"
          >
            <User size={18} />
            <span className="hidden md:inline">로그인</span>
          </a>
        </div>
      </div>

      {/* 모바일 메뉴 */}
      <div
        className={`fixed top-20 left-0 right-0 z-40 flex justify-center px-4 md:hidden transition-all duration-200 ${
          mobileOpen ? "opacity-100 translate-y-0 pointer-events-auto" : "opacity-0 -translate-y-2 pointer-events-none"
        }`}
      >
        <div className="w-[90%] max-w-[1200px] rounded-2xl bg-white/90 backdrop-blur-xl border border-white/60 shadow-[0_4px_6px_-1px_rgba(0,0,0,0.1)]">
          <nav className="flex flex-col py-4 px-6">
            {navItems.map((item) => (
              <button
                key={item.href}
                onClick={() => scrollTo(item.href)}
                className={`text-sm font-medium transition-colors text-left py-3 border-b border-border/30 last:border-0 ${
                  isActive(item.href) ? "text-primary" : "text-foreground hover:text-primary"
                }`}
              >
                {item.label}
              </button>
            ))}
            <a
              href={CAFE24_LOGIN}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setMobileOpen(false)}
              className="flex items-center gap-2 text-sm font-medium text-foreground hover:text-primary transition-colors pt-4 mt-1"
            >
              <User size={16} />
              로그인 (카페24 쇼핑몰)
            </a>
          </nav>
        </div>
      </div>

      {/* 모바일 메뉴 배경 딤 */}
      {mobileOpen && (
        <div
          className="fixed inset-0 z-30 bg-black/10 md:hidden"
          onClick={() => setMobileOpen(false)}
        />
      )}
    </header>
  );
};

export default Header;
