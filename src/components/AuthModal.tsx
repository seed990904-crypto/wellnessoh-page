import { useState, useEffect, useRef } from "react";
import { Eye, EyeOff, CheckCircle2, Loader2 } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";

type Tab = "login" | "signup";
type PhoneVerifyState = "idle" | "sending" | "sent" | "verified";

interface AuthModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

const VERIFY_TIMEOUT = 180; // 3분

const AuthModal = ({ open, onOpenChange }: AuthModalProps) => {
  const [tab, setTab] = useState<Tab>("login");

  const [loginForm, setLoginForm] = useState({ email: "", password: "" });
  const [signupForm, setSignupForm] = useState({
    name: "",
    email: "",
    phone: "",
    password: "",
    passwordConfirm: "",
    agreeTerms: false,
    agreePrivacy: false,
  });

  const [showLoginPw, setShowLoginPw] = useState(false);
  const [showSignupPw, setShowSignupPw] = useState(false);
  const [showSignupPwConfirm, setShowSignupPwConfirm] = useState(false);

  // 핸드폰 인증 상태
  const [phoneVerifyState, setPhoneVerifyState] = useState<PhoneVerifyState>("idle");
  const [verifyCode, setVerifyCode] = useState("");
  const [verifyError, setVerifyError] = useState("");
  const [countdown, setCountdown] = useState(0);
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const stopTimer = () => {
    if (timerRef.current) {
      clearInterval(timerRef.current);
      timerRef.current = null;
    }
  };

  const startTimer = () => {
    stopTimer();
    setCountdown(VERIFY_TIMEOUT);
    timerRef.current = setInterval(() => {
      setCountdown((prev) => {
        if (prev <= 1) {
          stopTimer();
          return 0;
        }
        return prev - 1;
      });
    }, 1000);
  };

  useEffect(() => () => stopTimer(), []);

  const formatCountdown = (s: number) =>
    `${String(Math.floor(s / 60)).padStart(2, "0")}:${String(s % 60).padStart(2, "0")}`;

  const formatPhone = (value: string) => {
    const digits = value.replace(/\D/g, "").slice(0, 11);
    if (digits.length <= 3) return digits;
    if (digits.length <= 7) return `${digits.slice(0, 3)}-${digits.slice(3)}`;
    return `${digits.slice(0, 3)}-${digits.slice(3, 7)}-${digits.slice(7)}`;
  };

  const handleSendCode = () => {
    const digits = signupForm.phone.replace(/\D/g, "");
    if (digits.length < 10) {
      setVerifyError("올바른 휴대폰 번호를 입력해 주세요.");
      return;
    }
    setVerifyError("");
    setPhoneVerifyState("sending");
    // TODO: 서버 연동 시 SMS 발송 API 호출
    setTimeout(() => {
      setPhoneVerifyState("sent");
      setVerifyCode("");
      startTimer();
    }, 800);
  };

  const handleVerifyCode = () => {
    if (verifyCode.length !== 6) {
      setVerifyError("인증번호 6자리를 입력해 주세요.");
      return;
    }
    // TODO: 서버 연동 시 인증번호 확인 API 호출
    // 현재는 UI 전용 — 6자리 입력 시 인증 완료 처리
    setVerifyError("");
    setPhoneVerifyState("verified");
    stopTimer();
  };

  const handleResend = () => {
    setVerifyCode("");
    setVerifyError("");
    handleSendCode();
  };

  const handleLoginSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: 서버 연동 시 API 호출 추가
    console.log("로그인 시도:", loginForm.email);
  };

  const handleSignupSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (phoneVerifyState !== "verified") {
      setVerifyError("휴대폰 인증을 완료해 주세요.");
      return;
    }
    if (signupForm.password !== signupForm.passwordConfirm) {
      return;
    }
    // TODO: 서버 연동 시 API 호출 추가
    console.log("회원가입 시도:", signupForm.email);
  };

  const switchTab = (next: Tab) => {
    setTab(next);
    setShowLoginPw(false);
    setShowSignupPw(false);
    setShowSignupPwConfirm(false);
    setPhoneVerifyState("idle");
    setVerifyCode("");
    setVerifyError("");
    stopTimer();
  };

  const canSubmitSignup =
    signupForm.agreeTerms &&
    signupForm.agreePrivacy &&
    phoneVerifyState === "verified";

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-[420px] p-0 overflow-hidden rounded-2xl border border-white/60 bg-white/80 backdrop-blur-xl shadow-xl max-h-[92vh] flex flex-col">
        {/* Tab switcher */}
        <div className="flex border-b border-border shrink-0">
          <button
            onClick={() => switchTab("login")}
            className={`flex-1 py-4 text-sm font-semibold tracking-wide transition-colors ${
              tab === "login"
                ? "text-primary border-b-2 border-primary"
                : "text-muted-foreground hover:text-foreground"
            }`}
          >
            로그인
          </button>
          <button
            onClick={() => switchTab("signup")}
            className={`flex-1 py-4 text-sm font-semibold tracking-wide transition-colors ${
              tab === "signup"
                ? "text-primary border-b-2 border-primary"
                : "text-muted-foreground hover:text-foreground"
            }`}
          >
            회원가입
          </button>
        </div>

        <div className="overflow-y-auto px-8 py-7">
          {tab === "login" ? (
            <>
              <DialogHeader className="mb-6">
                <DialogTitle className="text-center text-xl font-bold tracking-tight">
                  다시 만나서 반가워요
                </DialogTitle>
                <p className="text-center text-xs text-muted-foreground mt-1">
                  waoh.life 계정으로 로그인하세요
                </p>
              </DialogHeader>

              <form onSubmit={handleLoginSubmit} className="space-y-4" noValidate>
                <div className="space-y-1.5">
                  <Label htmlFor="login-email" className="text-xs font-medium">
                    이메일 <span className="text-destructive">*</span>
                  </Label>
                  <Input
                    id="login-email"
                    type="email"
                    placeholder="example@waoh.life"
                    required
                    value={loginForm.email}
                    onChange={(e) =>
                      setLoginForm((p) => ({ ...p, email: e.target.value }))
                    }
                    className="h-10 rounded-lg bg-white/60 border-border/80 text-sm focus-visible:ring-primary/30"
                    onInvalid={(e) =>
                      (e.target as HTMLInputElement).setCustomValidity(
                        loginForm.email ? "올바른 이메일 형식을 입력해 주세요." : "이메일을 입력해 주세요."
                      )
                    }
                    onInput={(e) => (e.target as HTMLInputElement).setCustomValidity("")}
                  />
                </div>

                <div className="space-y-1.5">
                  <div className="flex items-center justify-between">
                    <Label htmlFor="login-password" className="text-xs font-medium">
                      비밀번호 <span className="text-destructive">*</span>
                    </Label>
                    <button
                      type="button"
                      className="text-[11px] text-primary hover:underline"
                    >
                      비밀번호 찾기
                    </button>
                  </div>
                  <div className="relative">
                    <Input
                      id="login-password"
                      type={showLoginPw ? "text" : "password"}
                      placeholder="비밀번호를 입력하세요"
                      required
                      value={loginForm.password}
                      onChange={(e) =>
                        setLoginForm((p) => ({ ...p, password: e.target.value }))
                      }
                      className="h-10 rounded-lg bg-white/60 border-border/80 text-sm pr-10 focus-visible:ring-primary/30"
                      onInvalid={(e) =>
                        (e.target as HTMLInputElement).setCustomValidity("비밀번호를 입력해 주세요.")
                      }
                      onInput={(e) => (e.target as HTMLInputElement).setCustomValidity("")}
                    />
                    <button
                      type="button"
                      onClick={() => setShowLoginPw((v) => !v)}
                      className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground transition-colors"
                    >
                      {showLoginPw ? <EyeOff size={15} /> : <Eye size={15} />}
                    </button>
                  </div>
                </div>

                <Button
                  type="submit"
                  className="w-full h-10 rounded-lg text-sm font-semibold mt-2"
                >
                  로그인
                </Button>
              </form>

              <p className="text-center text-xs text-muted-foreground mt-5">
                계정이 없으신가요?{" "}
                <button
                  type="button"
                  onClick={() => switchTab("signup")}
                  className="text-primary font-semibold hover:underline"
                >
                  회원가입
                </button>
              </p>
            </>
          ) : (
            <>
              <DialogHeader className="mb-6">
                <DialogTitle className="text-center text-xl font-bold tracking-tight">
                  웰니스 여정을 시작하세요
                </DialogTitle>
                <p className="text-center text-xs text-muted-foreground mt-1">
                  waoh.life 멤버십에 가입하세요
                </p>
              </DialogHeader>

              <form onSubmit={handleSignupSubmit} className="space-y-4" noValidate>
                {/* 이름 */}
                <div className="space-y-1.5">
                  <Label htmlFor="signup-name" className="text-xs font-medium">
                    이름 <span className="text-destructive">*</span>
                  </Label>
                  <Input
                    id="signup-name"
                    type="text"
                    placeholder="홍길동"
                    required
                    value={signupForm.name}
                    onChange={(e) =>
                      setSignupForm((p) => ({ ...p, name: e.target.value }))
                    }
                    className="h-10 rounded-lg bg-white/60 border-border/80 text-sm focus-visible:ring-primary/30"
                    onInvalid={(e) =>
                      (e.target as HTMLInputElement).setCustomValidity("이름을 입력해 주세요.")
                    }
                    onInput={(e) => (e.target as HTMLInputElement).setCustomValidity("")}
                  />
                </div>

                {/* 이메일 */}
                <div className="space-y-1.5">
                  <Label htmlFor="signup-email" className="text-xs font-medium">
                    이메일 <span className="text-destructive">*</span>
                  </Label>
                  <Input
                    id="signup-email"
                    type="email"
                    placeholder="example@waoh.life"
                    required
                    value={signupForm.email}
                    onChange={(e) =>
                      setSignupForm((p) => ({ ...p, email: e.target.value }))
                    }
                    className="h-10 rounded-lg bg-white/60 border-border/80 text-sm focus-visible:ring-primary/30"
                    onInvalid={(e) =>
                      (e.target as HTMLInputElement).setCustomValidity(
                        signupForm.email ? "올바른 이메일 형식을 입력해 주세요." : "이메일을 입력해 주세요."
                      )
                    }
                    onInput={(e) => (e.target as HTMLInputElement).setCustomValidity("")}
                  />
                </div>

                {/* 휴대폰 번호 */}
                <div className="space-y-1.5">
                  <Label htmlFor="signup-phone" className="text-xs font-medium">
                    휴대폰 번호 <span className="text-destructive">*</span>
                  </Label>
                  <div className="flex gap-2">
                    <Input
                      id="signup-phone"
                      type="tel"
                      placeholder="010-0000-0000"
                      value={signupForm.phone}
                      disabled={phoneVerifyState === "verified"}
                      onChange={(e) => {
                        setSignupForm((p) => ({
                          ...p,
                          phone: formatPhone(e.target.value),
                        }));
                        if (phoneVerifyState === "sent") {
                          setPhoneVerifyState("idle");
                          stopTimer();
                          setVerifyCode("");
                        }
                        setVerifyError("");
                      }}
                      className={`h-10 rounded-lg bg-white/60 border-border/80 text-sm focus-visible:ring-primary/30 flex-1 ${
                        phoneVerifyState === "verified" ? "text-muted-foreground" : ""
                      }`}
                    />
                    {phoneVerifyState === "verified" ? (
                      <div className="flex items-center gap-1 text-xs text-emerald-600 font-semibold shrink-0 px-1">
                        <CheckCircle2 size={15} />
                        인증완료
                      </div>
                    ) : (
                      <Button
                        type="button"
                        variant="outline"
                        size="sm"
                        onClick={phoneVerifyState === "sent" ? handleResend : handleSendCode}
                        disabled={phoneVerifyState === "sending"}
                        className="shrink-0 h-10 text-xs px-3 rounded-lg border-primary/40 text-primary hover:bg-primary/5"
                      >
                        {phoneVerifyState === "sending" ? (
                          <Loader2 size={13} className="animate-spin" />
                        ) : phoneVerifyState === "sent" ? (
                          "재발송"
                        ) : (
                          "인증번호 발송"
                        )}
                      </Button>
                    )}
                  </div>

                  {/* 인증번호 입력 */}
                  {phoneVerifyState === "sent" && (
                    <div className="flex gap-2 mt-2">
                      <div className="relative flex-1">
                        <Input
                          type="text"
                          inputMode="numeric"
                          maxLength={6}
                          placeholder="인증번호 6자리"
                          value={verifyCode}
                          onChange={(e) => {
                            setVerifyCode(e.target.value.replace(/\D/g, "").slice(0, 6));
                            setVerifyError("");
                          }}
                          className="h-10 rounded-lg bg-white/60 border-border/80 text-sm pr-16 focus-visible:ring-primary/30"
                        />
                        {countdown > 0 && (
                          <span className="absolute right-3 top-1/2 -translate-y-1/2 text-[11px] text-destructive font-mono tabular-nums">
                            {formatCountdown(countdown)}
                          </span>
                        )}
                      </div>
                      <Button
                        type="button"
                        size="sm"
                        onClick={handleVerifyCode}
                        disabled={countdown === 0}
                        className="shrink-0 h-10 text-xs px-4 rounded-lg"
                      >
                        확인
                      </Button>
                    </div>
                  )}

                  {countdown === 0 && phoneVerifyState === "sent" && (
                    <p className="text-[11px] text-destructive mt-1">
                      인증 시간이 만료됐습니다. 재발송 버튼을 눌러주세요.
                    </p>
                  )}

                  {verifyError && (
                    <p className="text-[11px] text-destructive mt-1">{verifyError}</p>
                  )}
                </div>

                {/* 비밀번호 */}
                <div className="space-y-1.5">
                  <Label htmlFor="signup-password" className="text-xs font-medium">
                    비밀번호 <span className="text-destructive">*</span>
                  </Label>
                  <div className="relative">
                    <Input
                      id="signup-password"
                      type={showSignupPw ? "text" : "password"}
                      placeholder="8자 이상 입력하세요"
                      required
                      minLength={8}
                      value={signupForm.password}
                      onChange={(e) =>
                        setSignupForm((p) => ({ ...p, password: e.target.value }))
                      }
                      className="h-10 rounded-lg bg-white/60 border-border/80 text-sm pr-10 focus-visible:ring-primary/30"
                      onInvalid={(e) =>
                        (e.target as HTMLInputElement).setCustomValidity(
                          signupForm.password ? "비밀번호는 8자 이상이어야 합니다." : "비밀번호를 입력해 주세요."
                        )
                      }
                      onInput={(e) => (e.target as HTMLInputElement).setCustomValidity("")}
                    />
                    <button
                      type="button"
                      onClick={() => setShowSignupPw((v) => !v)}
                      className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground transition-colors"
                    >
                      {showSignupPw ? <EyeOff size={15} /> : <Eye size={15} />}
                    </button>
                  </div>
                </div>

                {/* 비밀번호 확인 */}
                <div className="space-y-1.5">
                  <Label htmlFor="signup-password-confirm" className="text-xs font-medium">
                    비밀번호 확인 <span className="text-destructive">*</span>
                  </Label>
                  <div className="relative">
                    <Input
                      id="signup-password-confirm"
                      type={showSignupPwConfirm ? "text" : "password"}
                      placeholder="비밀번호를 다시 입력하세요"
                      required
                      value={signupForm.passwordConfirm}
                      onChange={(e) =>
                        setSignupForm((p) => ({
                          ...p,
                          passwordConfirm: e.target.value,
                        }))
                      }
                      className={`h-10 rounded-lg bg-white/60 border-border/80 text-sm pr-10 focus-visible:ring-primary/30 ${
                        signupForm.passwordConfirm && signupForm.password !== signupForm.passwordConfirm
                          ? "border-destructive focus-visible:ring-destructive/30"
                          : ""
                      }`}
                      onInvalid={(e) =>
                        (e.target as HTMLInputElement).setCustomValidity("비밀번호 확인을 입력해 주세요.")
                      }
                      onInput={(e) => (e.target as HTMLInputElement).setCustomValidity("")}
                    />
                    <button
                      type="button"
                      onClick={() => setShowSignupPwConfirm((v) => !v)}
                      className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground transition-colors"
                    >
                      {showSignupPwConfirm ? <EyeOff size={15} /> : <Eye size={15} />}
                    </button>
                  </div>
                  {signupForm.passwordConfirm && signupForm.password !== signupForm.passwordConfirm && (
                    <p className="text-[11px] text-destructive">비밀번호가 일치하지 않습니다.</p>
                  )}
                </div>

                {/* 약관 동의 */}
                <div className="space-y-2 pt-1">
                  <div className="flex items-start gap-2">
                    <Checkbox
                      id="agree-terms"
                      checked={signupForm.agreeTerms}
                      onCheckedChange={(v) =>
                        setSignupForm((p) => ({ ...p, agreeTerms: !!v }))
                      }
                      className="mt-0.5"
                    />
                    <label
                      htmlFor="agree-terms"
                      className="text-xs text-muted-foreground leading-relaxed cursor-pointer"
                    >
                      <span className="text-foreground font-medium">[필수]</span> 이용약관에 동의합니다
                    </label>
                  </div>
                  <div className="flex items-start gap-2">
                    <Checkbox
                      id="agree-privacy"
                      checked={signupForm.agreePrivacy}
                      onCheckedChange={(v) =>
                        setSignupForm((p) => ({ ...p, agreePrivacy: !!v }))
                      }
                      className="mt-0.5"
                    />
                    <label
                      htmlFor="agree-privacy"
                      className="text-xs text-muted-foreground leading-relaxed cursor-pointer"
                    >
                      <span className="text-foreground font-medium">[필수]</span> 개인정보 처리방침에 동의합니다
                    </label>
                  </div>
                </div>

                <Button
                  type="submit"
                  disabled={!canSubmitSignup}
                  className="w-full h-10 rounded-lg text-sm font-semibold mt-1 disabled:opacity-50"
                >
                  회원가입
                </Button>
              </form>

              <p className="text-center text-xs text-muted-foreground mt-5 pb-1">
                이미 계정이 있으신가요?{" "}
                <button
                  type="button"
                  onClick={() => switchTab("login")}
                  className="text-primary font-semibold hover:underline"
                >
                  로그인
                </button>
              </p>
            </>
          )}
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default AuthModal;
