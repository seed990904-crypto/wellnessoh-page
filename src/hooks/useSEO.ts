import { useEffect } from "react";

interface SEOOptions {
  title?: string;
  description?: string;
  image?: string;
  url?: string;
  type?: "website" | "article";
}

const BASE_TITLE = "웰니스 아키텍트 오승우 | Wellness Architect";
const BASE_DESC = "19년 필드 경험의 웰니스 아키텍트 오승우. 1만 명을 설계했고, 지금은 엄마의 하루를 설계합니다. 4대 코너스톤 기반 생활 설계와 청춘리셋, Call2Life.";
const BASE_IMAGE = "https://waoh.life/host-photo.png";
const BASE_URL = "https://waoh.life";

function setMeta(name: string, content: string, attr: "name" | "property" = "name") {
  let el = document.querySelector<HTMLMetaElement>(`meta[${attr}="${name}"]`);
  if (!el) {
    el = document.createElement("meta");
    el.setAttribute(attr, name);
    document.head.appendChild(el);
  }
  el.content = content;
}

function setCanonical(href: string) {
  let el = document.querySelector<HTMLLinkElement>('link[rel="canonical"]');
  if (!el) {
    el = document.createElement("link");
    el.setAttribute("rel", "canonical");
    document.head.appendChild(el);
  }
  el.href = href;
}

export function useSEO({ title, description, image, url, type = "website" }: SEOOptions) {
  useEffect(() => {
    const fullTitle = title ? `${title} | Wellness Architect` : BASE_TITLE;
    const desc = description ?? BASE_DESC;
    const img = image ?? BASE_IMAGE;
    const pageUrl = url ? `${BASE_URL}${url}` : BASE_URL;

    document.title = fullTitle;

    setMeta("description", desc);

    setMeta("og:title", fullTitle, "property");
    setMeta("og:description", desc, "property");
    setMeta("og:image", img, "property");
    setMeta("og:url", pageUrl, "property");
    setMeta("og:type", type, "property");

    setMeta("twitter:title", fullTitle);
    setMeta("twitter:description", desc);
    setMeta("twitter:image", img);

    setCanonical(pageUrl);

    return () => {
      document.title = BASE_TITLE;
    };
  }, [title, description, image, url, type]);
}
