const SITE_URL = "https://waoh.life";

export const personSchema = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "오승우",
  jobTitle: "Founder & CEO, Wellness Architect",
  description:
    "19년 임상 웰니스 경력, 1만 명 이상 상담·코칭, 통합면역·치매예방센터 팀 리더.",
  url: `${SITE_URL}/about`,
  sameAs: [
    "https://www.instagram.com/wellness_architect.oh/",
    // YouTube 채널 URL — 확정 후 추가
  ],
  worksFor: {
    "@type": "Organization",
    name: "웰니스 아키텍트",
  },
};

export const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "웰니스 아키텍트",
  legalName: "주식회사 씨투엘코리아",
  url: SITE_URL,
  logo: `${SITE_URL}/host-photo.png`,
  founder: {
    "@type": "Person",
    name: "오승우",
  },
  contactPoint: {
    "@type": "ContactPoint",
    contactType: "customer support",
    url: `${SITE_URL}/#contact`,
  },
};

export const brandSchemas = [personSchema, organizationSchema];
