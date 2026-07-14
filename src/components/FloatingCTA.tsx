import { useState, useEffect, useRef } from "react";
import { MessageCircle } from "lucide-react";

const FloatingCTA = () => {
  const [expanded, setExpanded] = useState(false);
  const ref = useRef<HTMLAnchorElement>(null);

  // 외부 클릭 시 닫기
  useEffect(() => {
    if (!expanded) return;
    const handler = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        setExpanded(false);
      }
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, [expanded]);

  const handleClick = (e: React.MouseEvent) => {
    if (!expanded) {
      e.preventDefault();
      setExpanded(true);
    }
    // 펼쳐진 상태에서 클릭하면 #contact로 이동
  };

  return (
    <a
      ref={ref}
      href="#contact"
      onClick={handleClick}
      className="fixed z-50 bottom-6 right-6 inline-flex items-center gap-2 rounded-full bg-primary text-primary-foreground shadow-lg hover:brightness-90 overflow-hidden cursor-pointer"
      style={{
        height: "52px",
        minWidth: "52px",
        padding: expanded ? "0 20px 0 14px" : "0",
        justifyContent: "center",
        transition: "padding 0.3s ease, box-shadow 0.2s ease",
        boxShadow: expanded
          ? "0 8px 24px rgba(37,99,235,0.35)"
          : "0 4px 14px rgba(0,0,0,0.18)",
      }}
    >
      <MessageCircle size={22} className="shrink-0" />
      <span
        className="text-sm font-semibold whitespace-nowrap"
        style={{
          maxWidth: expanded ? "180px" : "0",
          opacity: expanded ? 1 : 0,
          overflow: "hidden",
          transition: "max-width 0.35s ease, opacity 0.25s ease",
        }}
      >
        1:1 웰니스 컨설팅 신청하기
      </span>
    </a>
  );
};

export default FloatingCTA;
