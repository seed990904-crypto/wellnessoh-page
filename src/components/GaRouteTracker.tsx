import { useEffect } from "react";
import { useLocation } from "react-router-dom";

/**
 * BrowserRouter 내부에 한 번만 마운트.
 * 라우트 변경마다 GA4 page_view 이벤트를 전송한다.
 * setTimeout(0)으로 useSEO가 document.title을 업데이트한 뒤 전송해 타이틀 중복을 방지.
 */
export function GaRouteTracker() {
  const location = useLocation();

  useEffect(() => {
    if (typeof window.gtag !== "function") return;

    const t = setTimeout(() => {
      window.gtag("event", "page_view", {
        page_path: location.pathname + location.search,
        page_location: window.location.href,
        page_title: document.title,
      });
    }, 0);

    return () => clearTimeout(t);
  }, [location.pathname, location.search]);

  return null;
}
