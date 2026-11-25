import { Gift, RefreshCw, Truck, Zap } from "lucide-react";

const CAFE24_JOIN = "https://call2life2026.cafe24.com/member/join.html";
const NAVER_BF    = "https://mkt.shopping.naver.com/link/6afe9182bcaa3e6fdff48c4c";

const benefits = [
  {
    icon: Zap,
    eyebrow: "BLACK FRIDAY",
    title: "최대 33% 할인",
    desc: "2026.11.25 – 11.30 한정",
    cta: "지금 구매",
    href: NAVER_BF,
    accent: "#1a1aff",
    bg: "from-[#0a0a1a] to-[#0f0f2e]",
    ctaBg: "bg-[#1a1aff] hover:bg-[#1212cc]",
    external: true,
  },
  {
    icon: Gift,
    eyebrow: "신규 회원 혜택",
    title: "첫 구매 10% 쿠폰",
    desc: "가입 즉시 쿠폰 자동 지급",
    cta: "무료 가입 →",
    href: CAFE24_JOIN,
    accent: "#2ecc71",
    bg: "from-[#0a1a0f] to-[#0f2318]",
    ctaBg: "bg-[#2ecc71] hover:bg-[#27ae60] text-white",
    external: true,
  },
  {
    icon: RefreshCw,
    eyebrow: "정기구독",
    title: "최대 25% 상시 할인",
    desc: "1·3·6개월 플랜 자유 선택",
    cta: "구독 보기",
    href: "/products",
    accent: "#c8975a",
    bg: "from-[#1a1208] to-[#231a0a]",
    ctaBg: "bg-[#c8975a] hover:bg-[#b8854a] text-white",
    external: false,
  },
  {
    icon: Truck,
    eyebrow: "무료 배송",
    title: "5만원 이상 무료",
    desc: "도서산간 제외 / 빠른 출고",
    cta: "쇼핑 시작",
    href: "/products",
    accent: "#888",
    bg: "from-[#111] to-[#1a1a1a]",
    ctaBg: "bg-white/10 hover:bg-white/20 text-white border border-white/20",
    external: false,
  },
] as const;

const BenefitBanner = () => (
  <section className="bg-[#0a0a0a] py-10 md:py-14">
    <div className="max-w-6xl mx-auto px-6 md:px-12">

      {/* 모바일: 가로 스크롤 / 데스크탑: 4열 그리드 */}
      <div className="flex gap-4 overflow-x-auto pb-2 md:pb-0 md:grid md:grid-cols-4 md:gap-5 snap-x snap-mandatory">
        {benefits.map(({ icon: Icon, eyebrow, title, desc, cta, href, bg, ctaBg, external }) => (
          <a
            key={eyebrow}
            href={href}
            {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
            className={`
              flex-shrink-0 w-[72vw] sm:w-[52vw] md:w-auto snap-start
              bg-gradient-to-br ${bg}
              rounded-2xl p-5 flex flex-col gap-3
              border border-white/[0.07]
              hover:-translate-y-1 hover:shadow-2xl
              transition-all duration-200 no-underline
            `}
          >
            <div className="flex items-center gap-2 opacity-60">
              <Icon className="w-3.5 h-3.5 text-white" strokeWidth={2.5} />
              <span className="text-[9px] font-mono font-bold tracking-[0.2em] text-white uppercase">
                {eyebrow}
              </span>
            </div>

            <div className="flex-1">
              <p className="text-white font-black text-xl leading-tight tracking-tight mb-1">
                {title}
              </p>
              <p className="text-white/40 text-xs leading-relaxed">{desc}</p>
            </div>

            <span className={`
              self-start text-xs font-bold px-4 py-2 rounded-full
              transition-colors duration-150 ${ctaBg}
            `}>
              {cta}
            </span>
          </a>
        ))}
      </div>

    </div>
  </section>
);

export default BenefitBanner;
