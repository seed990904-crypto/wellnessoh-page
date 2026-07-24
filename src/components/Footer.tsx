const Footer = () => (
  <footer className="bg-muted/50 border-t py-12">
    <div className="container">
      <div className="flex flex-col md:flex-row items-center justify-between gap-6 mb-8">
        <p className="font-semibold text-foreground">
          Wellness Architect | 오승우
        </p>
        <div className="flex flex-wrap items-center justify-center md:justify-start gap-x-6 gap-y-2 text-sm text-muted-foreground">
          <a href="https://www.instagram.com/wellness_architect.oh?igsh=MTNrMzIycG9xaXRsNQ==" target="_blank" rel="noopener noreferrer" className="hover:text-foreground transition-colors">
            인스타그램
          </a>
          <a href="https://cafe.naver.com/ccreset" target="_blank" rel="noopener noreferrer" className="hover:text-foreground transition-colors">
            네이버 카페 (바이오해커 클럽)
          </a>
          <a href="#contact" className="hover:text-foreground transition-colors">
            1:1 상담 문의
          </a>
        </div>
      </div>
      <p className="text-center text-xs text-muted-foreground">
        © 2026 Call2Life. All rights reserved.
      </p>
    </div>
  </footer>
);

export default Footer;
