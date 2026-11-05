import { Link } from "react-router-dom";
import heroPortrait from "@/assets/hero-portrait.jpg";


const AboutSection = () => {
  return (
    <section id="about" className="bg-background py-20 md:py-32 overflow-hidden">
      <div className="max-w-6xl mx-auto px-6 md:px-12">

        {/* 레이블 */}
        <p className="font-mono-label mb-10 md:mb-14">AUTHORITY</p>

        {/* 메인 그리드 — 포트레이트 40% / 콘텐츠 60% */}
        <div className="grid grid-cols-1 md:grid-cols-[4fr_6fr] gap-10 md:gap-16 items-start">

          {/* 포트레이트 — 오버레이 없이 클린 */}
          <div className="relative">
            <img
              src={heroPortrait}
              alt="웰니스 아키텍트 오승우 대표"
              className="w-full aspect-[4/5] object-cover object-top rounded-2xl"
            />
          </div>

          {/* 콘텐츠 */}
          <div className="flex flex-col justify-between h-full md:pt-2">

            {/* 이름 */}
            <div>
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-foreground leading-tight mb-8">
                웰니스 아키텍트<br />오승우
              </h2>

              {/* 핵심 스테이트먼트 */}
              <p className="text-base md:text-lg font-medium text-foreground leading-relaxed mb-8">
                19년간 치열한 현장에서<br />
                무너진 건강이 다시 세워지는 그 길을<br />
                가장 가까이에서 함께 걸어온 사람입니다.
              </p>

              {/* 바디 */}
              <p className="text-sm text-muted-foreground leading-relaxed mb-10">
                미국과 한국에서 1만 명 이상에게 1:1 웰니스 설계 컨설팅을 제공했습니다.
                S서울병원 협업을 비롯해 과학적 근거 기반의 맞춤 솔루션을 개발했으며,
                콜투라이프의 모든 제품은 "어머님이 드셔도 되는 것만"이라는 기준으로 설계됩니다.
              </p>
            </div>

            {/* 하단: 링크 */}
            <div className="pt-8 border-t border-border">
              <Link
                to="/about"
                className="inline-flex items-center text-sm font-medium text-primary hover:text-primary/70 transition-colors"
              >
                브랜드 스토리 전체 보기 →
              </Link>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};

export default AboutSection;
