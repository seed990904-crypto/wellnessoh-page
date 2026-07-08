const Footer = () => (
  <footer className="bg-muted/50 border-t py-12">
    <div className="container">
      <div className="flex flex-col md:flex-row items-center justify-between gap-6 mb-8">
        <p className="font-semibold text-foreground">
          Wellness Architect | 오승우
        </p>
        <div className="flex items-center gap-6 text-sm text-muted-foreground">
          <a href="#" className="hover:text-foreground transition-colors">
            인스타그램
          </a>
          <a href="#" className="hover:text-foreground transition-colors">
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
