import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "sonner";

const ContactSection = () => {
  const [form, setForm] = useState({ name: "", phone: "", email: "", concern: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name || !form.phone || !form.email) {
      toast.error("이름, 연락처, 이메일을 모두 입력해 주세요.");
      return;
    }
    toast.success("상담 신청이 접수되었습니다. 곧 연락드리겠습니다.");
    setForm({ name: "", phone: "", email: "", concern: "" });
  };

  return (
    <section id="contact" className="py-20 md:py-28">
      <div className="container max-w-xl">
        <div className="text-center mb-10">
          <p className="font-mono-label mb-3">1:1 CONSULTATION</p>
          <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-3">
            당신의 몸을 다시 설계할 준비가 되셨습니까?
          </h2>
          <p className="text-muted-foreground">
            웰니스 아키텍트 오승우 대표와의 1:1 컨설팅을 신청하세요.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="text-sm font-medium text-foreground mb-1.5 block">이름</label>
            <Input
              placeholder="홍길동"
              value={form.name}
              onChange={(e) => setForm({ ...form, name: e.target.value })}
              className="bg-muted/50"
            />
          </div>
          <div>
            <label className="text-sm font-medium text-foreground mb-1.5 block">연락처</label>
            <Input
              placeholder="010-1234-5678"
              value={form.phone}
              onChange={(e) => setForm({ ...form, phone: e.target.value })}
              className="bg-muted/50"
            />
          </div>
          <div>
            <label className="text-sm font-medium text-foreground mb-1.5 block">이메일</label>
            <Input
              type="email"
              placeholder="example@email.com"
              value={form.email}
              onChange={(e) => setForm({ ...form, email: e.target.value })}
              className="bg-muted/50"
            />
          </div>
          <div>
            <label className="text-sm font-medium text-foreground mb-1.5 block">
              현재 가장 큰 건강 고민
            </label>
            <Textarea
              placeholder="자유롭게 작성해 주세요."
              rows={4}
              value={form.concern}
              onChange={(e) => setForm({ ...form, concern: e.target.value })}
              className="bg-muted/50 resize-none"
            />
          </div>
          <Button type="submit" size="lg" className="w-full rounded-full py-4 h-auto text-base bg-primary text-primary-foreground hover:bg-primary/90">
            상담 신청하기
          </Button>
        </form>
      </div>
    </section>
  );
};

export default ContactSection;
