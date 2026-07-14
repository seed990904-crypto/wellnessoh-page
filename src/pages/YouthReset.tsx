import { useState, useEffect } from "react";
import { Check, ArrowRight, Clock, Users, Zap } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FloatingCTA from "@/components/FloatingCTA";

const phases = [
  {
    badge: "WEEKS 1–2",
    label: "REBOOT",
    title: "리부트 — 호르몬 & 대사 리셋",
    points: [
      "체내 독소 배출 및 염증 완화",
      "인슐린 저항성 개선 및 렙틴 호르몬 활성화",
      "신체 에너지 대사 전환 (포도당 → 지방 대사)",
    ],
  },
  {
    badge: "WEEKS 3–4",
    label: "IMPACT",
    title: "임팩트 — 면역 시스템 리셋",
    points: [
      "면역 조절 활성화 및 당사슬 안테나 회복",
      "뇌기능 활성화 및 장내 마이크로바이옴 개선",
      "알러지 증상 회복 및 신체 활력 극대화",
    ],
  },
  {
    badge: "WEEKS 5–6",
    label: "MAINTAIN",
    title: "메인테인 — 노화 진행 리셋",
    points: [
      "바이오해킹 효과 유지 및 건강한 세포 자생력 강화",
      "호르몬, 대사 기능의 완벽한 균형 회복",
      "더 나은 집중력, 업무 및 운동 능력 향상",
    ],
  },
];

const targets = [
  { icon: "🔥", title: "체력 저하", text: "40대 이후 예전과 달리\n갑자기 체력이 떨어진 분" },
  { icon: "😴", title: "만성 피로", text: "아무리 자도 피곤하고\n회복이 되지 않는 분" },
  { icon: "🧠", title: "인지 기능 저하", text: "기억력·집중력이\n예전 같지 않은 분" },
  { icon: "⚖️", title: "체중 정체", text: "식단을 관리해도\n체중이 변하지 않는 분" },
  { icon: "💊", title: "보충제 무반응", text: "건강기능식품을 먹어도\n효과를 느끼지 못하는 분" },
  { icon: "🌱", title: "루트케어 추구", text: "대증요법이 아닌\n근본적인 건강 회복을 원하는 분" },
];

const includes = [
  {
    icon: Users,
    title: "1:1 밀착 컨설팅",
    desc: "웰니스 아키텍트 오승우 대표와 6주간 매주 1:1 진행 상황 점검 및 맞춤 피드백",
  },
  {
    icon: Zap,
    title: "바이오해킹 툴 패키지",
    desc: "4대 코너스톤 기반으로 선별된 청춘리셋 전용 제품 패키지 (개인별 맞춤 구성)",
  },
  {
    icon: Clock,
    title: "6주 라이프스타일 가이드",
    desc: "식단·수면·운동·보충제 루틴을 포함한 주차별 실천 가이드북 제공",
  },
];

type FormState = {
  name: string;
  phone: string;
  email: string;
  timing: string;
  concern: string;
};

const YouthReset = () => {
  const [form, setForm] = useState<FormState>({
    name: "",
    phone: "",
    email: "",
    timing: "",
    concern: "",
  });
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name || !form.phone || !form.email) {
      return;
    }
    setStatus("sending");
    try {
      const res = await fetch("https://formsubmit.co/ajax/call2life@naver.com", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          이름: form.name,
          연락처: form.phone,
          이메일: form.email,
          참여희망시기: form.timing || "미정",
          현재고민: form.concern || "없음",
          _subject: "청춘리셋 대기자 등록 신청",
        }),
      });
      if (res.ok) {
        setStatus("success");
        setForm({ name: "", phone: "", email: "", timing: "", concern: "" });
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Hero */}
      <section className="pt-32 pb-20 bg-foreground text-background">
        <div className="max-w-4xl mx-auto px-6 md:px-12 text-center">
          <p className="font-mono text-[11px] tracking-[0.25em] text-background/50 uppercase mb-4">
            YOUTH RESET PROGRAM
          </p>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
            6주로 되찾는<br />
            <span className="text-primary">청춘리셋</span>
          </h1>
          <p className="text-background/70 text-base md:text-lg leading-relaxed max-w-2xl mx-auto mb-10">
            단순한 대증요법이 아닌 '루트케어(근본치료)'를 통해<br className="hidden md:block" />
            신체의 자연치유력을 극대화하는 웰니스 아키텍트의 1:1 밀착 솔루션입니다.
          </p>
          <div className="flex flex-wrap justify-center gap-6 text-sm text-background/60">
            <span className="flex items-center gap-2"><Check className="w-4 h-4 text-primary" /> 6주 완성 프로그램</span>
            <span className="flex items-center gap-2"><Check className="w-4 h-4 text-primary" /> 1:1 맞춤 컨설팅</span>
            <span className="flex items-center gap-2"><Check className="w-4 h-4 text-primary" /> 바이오해킹 툴 포함</span>
          </div>
        </div>
      </section>

      {/* 6주 타임라인 */}
      <section className="py-20 bg-background">
        <div className="max-w-5xl mx-auto px-6 md:px-12">
          <div className="text-center mb-12">
            <p className="font-mono-label mb-3">PROGRAM TIMELINE</p>
            <h2 className="text-2xl md:text-3xl font-bold text-foreground">6주간의 생체 재건축</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-0 items-stretch">
            {phases.map((phase, i) => (
              <div key={phase.badge} className="flex items-stretch">
                <div className="flex-1 bg-muted/40 border border-border/60 rounded-xl p-6 md:p-7 flex flex-col">
                  <div className="flex items-center gap-2 mb-4">
                    <span className="font-mono text-[10px] tracking-widest text-muted-foreground">{phase.badge}</span>
                    <span className="font-mono text-[10px] font-bold tracking-wider text-primary bg-primary/10 px-2 py-0.5 rounded-full">{phase.label}</span>
                  </div>
                  <h3 className="text-sm md:text-base font-bold text-foreground mb-4 leading-snug">{phase.title}</h3>
                  <ul className="space-y-2.5 flex-1">
                    {phase.points.map((pt) => (
                      <li key={pt} className="flex gap-2 text-xs text-muted-foreground leading-relaxed">
                        <Check className="w-3.5 h-3.5 text-primary shrink-0 mt-0.5" />
                        <span>{pt}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                {i < phases.length - 1 && (
                  <div className="hidden md:flex items-center justify-center w-8 shrink-0">
                    <ArrowRight className="w-4 h-4 text-muted-foreground/30" />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 이런 분들께 */}
      <section className="py-20 bg-muted/30">
        <div className="max-w-4xl mx-auto px-6 md:px-12">
          <div className="text-center mb-12">
            <p className="font-mono-label mb-3">WHO IS THIS FOR</p>
            <h2 className="text-2xl md:text-3xl font-bold text-foreground">이런 분들께 추천합니다</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            {targets.map((t) => (
              <div
                key={t.title}
                className="bg-white rounded-2xl border border-border/60 px-6 py-5 flex flex-col gap-3 hover:shadow-sm hover:-translate-y-0.5 transition-all duration-200"
              >
                <span className="text-2xl">{t.icon}</span>
                <div>
                  <p className="font-semibold text-foreground text-sm mb-1.5">{t.title}</p>
                  <p className="text-xs text-muted-foreground leading-relaxed whitespace-pre-line">{t.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 포함 내용 */}
      <section className="py-20 bg-background">
        <div className="max-w-4xl mx-auto px-6 md:px-12">
          <div className="text-center mb-12">
            <p className="font-mono-label mb-3">WHAT'S INCLUDED</p>
            <h2 className="text-2xl md:text-3xl font-bold text-foreground">프로그램에 포함된 것들</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {includes.map((item) => (
              <div key={item.title} className="text-center px-4">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <item.icon className="w-5 h-5 text-primary" />
                </div>
                <h3 className="font-semibold text-foreground mb-2">{item.title}</h3>
                <p className="text-xs text-muted-foreground leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 대기자 등록 폼 */}
      <section id="waitlist" className="py-20 bg-foreground text-background">
        <div className="max-w-xl mx-auto px-6 md:px-12">
          <div className="text-center mb-10">
            <p className="font-mono text-[11px] tracking-[0.25em] text-background/40 uppercase mb-3">WAITLIST</p>
            <h2 className="text-2xl md:text-3xl font-bold mb-3">다음 기수 대기자 등록</h2>
            <p className="text-background/60 text-sm leading-relaxed">
              등록하시면 다음 기수 모집 시 가장 먼저 안내드립니다.<br />
              부담 없이 신청하세요 — 등록 후 연락드려 상세 안내해 드립니다.
            </p>
          </div>

          {status === "success" ? (
            <div className="bg-primary/20 border border-primary/30 rounded-2xl p-10 text-center">
              <div className="w-14 h-14 rounded-full bg-primary/20 flex items-center justify-center mx-auto mb-4">
                <Check className="w-7 h-7 text-primary" />
              </div>
              <h3 className="text-lg font-bold mb-2">대기자 등록 완료!</h3>
              <p className="text-background/60 text-sm leading-relaxed">
                다음 기수 모집이 시작되면 가장 먼저 연락드리겠습니다.<br />
                궁금한 점은 언제든지 1:1 상담을 신청해 주세요.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="text-xs font-medium text-background/60 mb-1.5 block tracking-wide uppercase">
                  이름 <span className="text-primary">*</span>
                </label>
                <input
                  type="text"
                  required
                  placeholder="홍길동"
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  className="w-full bg-white/10 border border-white/20 rounded-xl px-4 py-3 text-sm text-background placeholder:text-background/30 focus:outline-none focus:border-primary/60 transition-colors"
                />
              </div>

              <div>
                <label className="text-xs font-medium text-background/60 mb-1.5 block tracking-wide uppercase">
                  연락처 <span className="text-primary">*</span>
                </label>
                <input
                  type="tel"
                  required
                  placeholder="010-1234-5678"
                  value={form.phone}
                  onChange={(e) => setForm({ ...form, phone: e.target.value })}
                  className="w-full bg-white/10 border border-white/20 rounded-xl px-4 py-3 text-sm text-background placeholder:text-background/30 focus:outline-none focus:border-primary/60 transition-colors"
                />
              </div>

              <div>
                <label className="text-xs font-medium text-background/60 mb-1.5 block tracking-wide uppercase">
                  이메일 <span className="text-primary">*</span>
                </label>
                <input
                  type="email"
                  required
                  placeholder="example@email.com"
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  className="w-full bg-white/10 border border-white/20 rounded-xl px-4 py-3 text-sm text-background placeholder:text-background/30 focus:outline-none focus:border-primary/60 transition-colors"
                />
              </div>

              <div>
                <label className="text-xs font-medium text-background/60 mb-1.5 block tracking-wide uppercase">
                  참여 희망 시기
                </label>
                <select
                  value={form.timing}
                  onChange={(e) => setForm({ ...form, timing: e.target.value })}
                  className="w-full bg-white/10 border border-white/20 rounded-xl px-4 py-3 text-sm text-background focus:outline-none focus:border-primary/60 transition-colors appearance-none"
                >
                  <option value="" className="text-foreground bg-white">선택해 주세요</option>
                  <option value="이번 기수 (최대한 빠르게)" className="text-foreground bg-white">이번 기수 (최대한 빠르게)</option>
                  <option value="다음 기수 (1~2개월 후)" className="text-foreground bg-white">다음 기수 (1~2개월 후)</option>
                  <option value="미정 (일단 정보만 받고 싶음)" className="text-foreground bg-white">미정 (일단 정보만 받고 싶음)</option>
                </select>
              </div>

              <div>
                <label className="text-xs font-medium text-background/60 mb-1.5 block tracking-wide uppercase">
                  현재 가장 큰 건강 고민 <span className="text-background/30 font-normal">(선택)</span>
                </label>
                <textarea
                  placeholder="자유롭게 적어 주세요."
                  rows={3}
                  value={form.concern}
                  onChange={(e) => setForm({ ...form, concern: e.target.value })}
                  className="w-full bg-white/10 border border-white/20 rounded-xl px-4 py-3 text-sm text-background placeholder:text-background/30 focus:outline-none focus:border-primary/60 transition-colors resize-none"
                />
              </div>

              {status === "error" && (
                <p className="text-red-400 text-xs text-center">
                  전송 중 오류가 발생했습니다. 잠시 후 다시 시도해 주세요.
                </p>
              )}

              <button
                type="submit"
                disabled={status === "sending"}
                className="w-full rounded-full py-4 text-sm font-semibold bg-primary text-primary-foreground hover:bg-primary/90 disabled:opacity-60 transition-all duration-200"
              >
                {status === "sending" ? "전송 중…" : "대기자 등록하기"}
              </button>

              <p className="text-center text-[11px] text-background/30 leading-relaxed">
                개인정보는 청춘리셋 프로그램 안내 목적으로만 사용되며<br />
                제3자에게 제공되지 않습니다.
              </p>
            </form>
          )}
        </div>
      </section>

      <Footer />
      <FloatingCTA />
    </div>
  );
};

export default YouthReset;
