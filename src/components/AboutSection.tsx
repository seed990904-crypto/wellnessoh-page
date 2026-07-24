import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import heroPortrait from "@/assets/hero-portrait.jpg";

const AboutSection = () => {
  return (
    <section id="about" className="bg-background py-28 md:py-36">
      <div className="max-w-6xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20 items-center">
          {/* Left Column: Portrait */}
          <div>
            <img
              src={heroPortrait}
              alt="오승우 대표 프로필 사진"
              className="w-full rounded-2xl shadow-lg object-cover aspect-[3/4]"
            />
          </div>

          {/* Right Column: Text */}
          <div className="space-y-6">
            <p className="font-mono-label">About</p>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-foreground">
              About 오승우
            </h2>

            <p className="text-lg md:text-xl font-medium text-foreground/90 italic">
              "다시 태어날 당신에게"
            </p>

            <div className="space-y-5 text-base md:text-[17px] leading-relaxed text-muted-foreground">
              <p>
                안녕하세요, 콜투라이프[Call2Life] 대표 오승우입니다.
              </p>
              <p>
                저는 지난 19년간 미국과 한국에서 10,000명 이상에게 건강 컨설팅을 제공하며, 웰니스 통합 건강 시스템을 통해 건강 회복과 삶의 활력 증진을 도왔습니다.
              </p>
              <p>
                콜투라이프의 미션은 과학적 연구 기반의 안전하고 자연적인 천연 원료와 건강한 식단, 입증된 혁신적인 웰빙 솔루션을 제공하는 것입니다.
              </p>
              <p>
                우리는 단순한 건강 개선을 넘어, 신체적·정신적으로 더 건강하고 행복한 삶을 누릴 수 있도록 돕고자 합니다. 모든 사람이 자신만의 건강한 라이프스타일을 찾고 이를 지속적으로 실천할 수 있도록 돕는 것이 콜투라이프의 사명입니다.
              </p>
              <p>
                건강은 단순한 선택이 아니라, 더 나은 삶을 위한 필수 요소이며 콜투라이프는 그 여정을 당신과 함께 할 것입니다.
              </p>
            </div>

            <Button
              asChild
              className="rounded-full px-10 py-4 h-auto text-sm font-medium bg-primary text-primary-foreground hover:bg-primary/90 mt-4"
            >
              <Link to="/about">Learn more →</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
