import { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { Menu, X, Search, User, Sparkles } from "lucide-react";

const navItems = [
  { label: "브랜드스토리", href: "#about" },
  { label: "원료&기술력", href: "/ingredients-technology" },
  { label: "블로그", href: "/blog" },
  { label: "팟케스트", href: "#podcast" },
  { label: "바이오해킹 제품", href: "#biohacking-tools" },
];

const Header = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

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

    const el = document.querySelector(href);
    el?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <header className="fixed top-5 left-0 right-0 z-50 flex justify-center px-4">
      <div className="w-[90%] max-w-[1200px] flex items-center justify-between h-14 px-8 rounded-full bg-white/50 backdrop-blur-xl border border-white/60 shadow-[0_4px_6px_-1px_rgba(0,0,0,0.1)]">
        {/* Left Section */}
        <div className="flex items-center gap-4 shrink-0">
          <button
            className="p-1.5 text-foreground hover:text-muted-foreground transition-colors"
            onClick={() => setMobileOpen(!mobileOpen)}
          >
            {mobileOpen ? <X size={20} /> : <Menu size={20} />}
          </button>

          <button onClick={() => { setMobileOpen(false); if (location.pathname !== "/") { navigate("/"); } else { window.scrollTo({ top: 0, behavior: "smooth" }); } }} className="flex flex-col items-start leading-none cursor-pointer">
            <span className="text-sm font-bold tracking-tight text-white drop-shadow-sm">
              Wellness Architect
            </span>
            <span className="w-full h-px bg-white/80 my-0.5" />
            <span className="text-[10px] tracking-[0.25em] text-white font-medium drop-shadow-sm" style={{ fontFamily: "'Noto Sans KR', sans-serif" }}>
              웰니스 아키텍트 오대표
            </span>
          </button>
        </div>

        {/* Center Navigation – Desktop */}
        <nav className="hidden lg:flex items-center gap-6 flex-1 justify-center">
          {navItems.map((item) => (
            <button
              key={item.href}
              onClick={() => scrollTo(item.href)}
              className="text-[11px] font-medium uppercase tracking-wider text-foreground hover:text-muted-foreground transition-colors whitespace-nowrap"
            >
              {item.label}
            </button>
          ))}
          <button
            onClick={() => scrollTo("#youth-reset")}
            className="text-[11px] font-medium uppercase tracking-wider whitespace-nowrap text-foreground hover:text-muted-foreground transition-colors"
          >
            청춘리셋 참여
          </button>
        </nav>

        {/* Right Section */}
        <div className="hidden md:flex items-center gap-4 shrink-0">
          <button className="flex items-center gap-1.5 text-xs font-medium border border-foreground/20 rounded-full px-4 py-1.5 text-foreground hover:bg-accent transition-colors">
            Ask Ai <Sparkles size={12} />
          </button>
          <button className="p-1.5 text-foreground hover:text-muted-foreground transition-colors">
            <Search size={18} />
          </button>
          <button className="flex items-center gap-1.5 text-xs text-foreground hover:text-muted-foreground transition-colors">
            <User size={18} />
            <span>Login</span>
          </button>
        </div>
      </div>

      {mobileOpen && (
        <div className="fixed top-20 left-0 right-0 z-40 flex justify-center px-4 lg:hidden">
          <div className="w-[90%] max-w-[1200px] rounded-2xl bg-white/70 backdrop-blur-xl border border-white/60 shadow-[0_4px_6px_-1px_rgba(0,0,0,0.1)]">
            <nav className="flex flex-col py-5 px-8 gap-4">
              {navItems.map((item) => (
                <button
                  key={item.href}
                  onClick={() => scrollTo(item.href)}
                  className="text-xs font-medium uppercase tracking-wider text-foreground hover:text-muted-foreground text-left"
                >
                  {item.label}
                </button>
              ))}
              <button
                onClick={() => scrollTo("#youth-reset")}
                className="text-xs font-medium uppercase tracking-wider text-foreground hover:text-muted-foreground text-left"
              >
                청춘리셋 참여
              </button>

              <div className="flex items-center gap-4 pt-3 border-t border-border mt-2">
                <button className="flex items-center gap-1.5 text-xs font-medium border border-foreground/20 rounded-full px-4 py-1.5 text-foreground">
                  Ask Ai <Sparkles size={12} />
                </button>
                <button className="p-1.5 text-foreground">
                  <Search size={18} />
                </button>
                <button className="flex items-center gap-1.5 text-xs text-foreground">
                  <User size={18} />
                  <span>Login</span>
                </button>
              </div>
            </nav>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
