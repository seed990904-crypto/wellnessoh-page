import { Tag, ArrowRight } from "lucide-react";

const SuperImmuneLaunchBanner = () => (
  <a
    href="https://mkt.shopping.naver.com/link/6afe9182bcaa3e6fdff48c4c"
    target="_blank"
    rel="noopener noreferrer"
    className="group block w-full bg-[#08081a] hover:bg-[#0d0d2a] transition-colors duration-200"
  >
    <div className="max-w-6xl mx-auto px-4 py-2.5 flex items-center justify-center gap-2.5">
      <Tag className="w-3.5 h-3.5 text-blue-400 shrink-0" />
      <span className="text-[10px] font-mono font-bold tracking-[0.2em] text-blue-400/80 uppercase shrink-0">
        Annual Event · 2026
      </span>
      <span className="w-px h-3 bg-blue-700/50 shrink-0" />
      <span className="text-sm font-semibold text-blue-100">
        블랙프라이데이 최대 33% 할인 · 11.20–11.30
      </span>
      <span className="flex items-center gap-1 text-xs font-bold text-blue-400 group-hover:gap-2 transition-all duration-200 shrink-0">
        지금 보기 <ArrowRight className="w-3.5 h-3.5" />
      </span>
    </div>
  </a>
);

export default SuperImmuneLaunchBanner;
