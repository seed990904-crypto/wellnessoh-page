import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Check, ClipboardList } from "lucide-react";

const ContactSection = () => {
  const [form, setForm] = useState({ name: "", phone: "", email: "", concern: "" });
  const [longevityDone, setLongevityDone] = useState(false);
  const [longevityError, setLongevityError] = useState(false);
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");

  const openLongevityScore = () => {
    const options = {
      width: 700,
      onSubmit: () => {
        setLongevityDone(true);
        setLongevityError(false);
      },
    };
    if (window.Tally) {
      window.Tally.openPopup("ja9EEY", options);
    } else {
      window.open("https://tally.so/r/ja9EEY", "_blank");
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name || !form.phone || !form.email) return;
    if (!longevityDone) {
      setLongevityError(true);
      return;
    }
    setStatus("sending");
    try {
      const res = await fetch("https://formsubmit.co/ajax/call2life@naver.com", {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({
          이름: form.name,
          연락처: form.phone,
          이메일: form.email,
          건강고민: form.concern || "없음",
          롱제버티스코어진단: "완료",
          _subject: "1:1 웰니스 상담 신청",
        }),
      });
      if (res.ok) {
        setStatus("success");
        setForm({ name: "", phone: "", email: "", concern: "" });
        setLongevityDone(false);
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };

  return (
    <section id="contact" className="py-20 md:py-28">
      <div className="container max-w-xl">
        <div className="text-center mb-10">
          <p className="font-mono-label mb-3">1:1 CONSULTATION</p>
          <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-3">
            당신의 몸을 다시 설계할 준비가 되셨습니까?
          </h2>
          <p className="text-muted-foreground text-sm leading-relaxed">
            웰니스 아키텍트 오승우 대표와 1:1로 직접 상담하세요.<br />
            건강 고민을 남겨주시면 빠르게 연락드립니다.
          </p>
        </div>

        {status === "success" ? (
          <div className="bg-primary/5 border border-primary/20 rounded-2xl p-10 text-center">
            <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
              <Check className="w-7 h-7 text-primary" />
            </div>
            <h3 className="text-lg font-bold text-foreground mb-2">상담 신청 완료!</h3>
            <p className="text-muted-foreground text-sm leading-relaxed">
              접수되었습니다. 빠른 시일 내에 연락드리겠습니다.
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4">

            {/* 롱제버티 스코어 진단 */}
            <div className={`rounded-xl border p-4 transition-colors ${longevityDone ? "bg-primary/5 border-primary/30" : longevityError ? "bg-red-50 border-red-200" : "bg-muted/40 border-border"}`}>
              <div className="flex items-start gap-3">
                <div className={`w-9 h-9 rounded-lg flex items-center justify-center shrink-0 ${longevityDone ? "bg-primary/10" : "bg-muted"}`}>
                  {longevityDone
                    ? <Check className="w-5 h-5 text-primary" />
                    : <ClipboardList className="w-5 h-5 text-muted-foreground" />
                  }
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-semibold text-foreground mb-0.5">
                    롱제버티 스코어 진단 <span className="text-primary">*</span>
                  </p>
                  <p className="text-xs text-muted-foreground mb-3 leading-relaxed">
                    {longevityDone
                      ? "진단이 완료되었습니다. 아래 정보를 입력하고 상담을 신청해 주세요."
                      : "상담 전 나의 건강 점수를 먼저 확인해 주세요. (필수)"}
                  </p>
                  {!longevityDone && (
                    <Button
                      type="button"
                      size="sm"
                      onClick={openLongevityScore}
                      className="rounded-lg text-xs bg-primary text-primary-foreground hover:bg-primary/90 h-8 px-4"
                    >
                      지금 진단하기 →
                    </Button>
                  )}
                </div>
              </div>
              {longevityError && (
                <p className="text-red-500 text-xs mt-3 ml-12">롱제버티 스코어 진단을 먼저 완료해 주세요.</p>
              )}
            </div>

            <div>
              <label className="text-sm font-medium text-foreground mb-1.5 block">이름 <span className="text-primary">*</span></label>
              <Input
                required
                placeholder="홍길동"
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                className="bg-muted/50"
              />
            </div>
            <div>
              <label className="text-sm font-medium text-foreground mb-1.5 block">연락처 <span className="text-primary">*</span></label>
              <Input
                required
                placeholder="010-1234-5678"
                value={form.phone}
                onChange={(e) => setForm({ ...form, phone: e.target.value })}
                className="bg-muted/50"
              />
            </div>
            <div>
              <label className="text-sm font-medium text-foreground mb-1.5 block">이메일 <span className="text-primary">*</span></label>
              <Input
                required
                type="email"
                placeholder="example@email.com"
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                className="bg-muted/50"
              />
            </div>
            <div>
              <label className="text-sm font-medium text-foreground mb-1.5 block">
                현재 가장 큰 건강 고민 <span className="text-muted-foreground font-normal">(선택)</span>
              </label>
              <Textarea
                placeholder="자유롭게 작성해 주세요."
                rows={4}
                value={form.concern}
                onChange={(e) => setForm({ ...form, concern: e.target.value })}
                className="bg-muted/50 resize-none"
              />
            </div>
            {status === "error" && (
              <p className="text-red-500 text-xs text-center">전송 중 오류가 발생했습니다. 잠시 후 다시 시도해 주세요.</p>
            )}
            <Button
              type="submit"
              size="lg"
              disabled={status === "sending"}
              className="w-full rounded-full py-4 h-auto text-base bg-primary text-primary-foreground hover:bg-primary/90 disabled:opacity-60"
            >
              {status === "sending" ? "전송 중…" : "상담 신청하기"}
            </Button>
            <p className="text-center text-[11px] text-muted-foreground/60">
              개인정보는 상담 목적으로만 사용되며 제3자에게 제공되지 않습니다.
            </p>
          </form>
        )}
      </div>
    </section>
  );
};

export default ContactSection;
