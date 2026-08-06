import { useEffect } from "react";

interface SEOOptions {
  title?: string;
  description?: string;
  image?: string;
  url?: string;
  type?: "website" | "article";
}

const BASE_TITLE = "웰니스 아키텍트 오대표 | Wellness Architect";
const BASE_DESC = "19년 경력 웰니스 아키텍트 오승우. 세포 단위의 자연치유력을 복원하는 생물학적 건축물 설계.";
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

    return () => {
      document.title = BASE_TITLE;
    };
  }, [title, description, image, url, type]);
}
