import { Button } from "@/components/ui/button";

const HeroSection = () => {
  const scrollToContact = () => {
    document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="hero" className="relative h-screen w-full overflow-hidden flex items-center justify-center">
      {/* Background Video */}
      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
      >
        <source src="/hero-video.mp4" type="video/mp4" />
      </video>

      {/* Dark Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/40 to-black/60" />

      {/* Content */}
      <div className="relative z-10 w-full flex flex-col items-center justify-center text-center px-6 space-y-6">
        <h1 className="whitespace-nowrap text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-bold leading-tight tracking-tight text-white">
          Live Better. Live Younger. Live Longer.
        </h1>

        <p className="text-base md:text-lg lg:text-xl text-white/85 leading-relaxed max-w-2xl mx-auto">
          롱제비티를 위한 당신의 건강을 기초부터 설계해 드립니다.
        </p>

        <Button
          size="lg"
          onClick={scrollToContact}
          className="mt-20 rounded-full text-base px-10 py-3 h-auto bg-transparent text-white border border-white hover:bg-white hover:text-black transition-all duration-300"
        >
          Longevity Score
        </Button>

        <p className="text-sm text-white font-light">
          나의 롱제비티 지수 확인하기
        </p>
      </div>
    </section>
  );
};

export default HeroSection;
