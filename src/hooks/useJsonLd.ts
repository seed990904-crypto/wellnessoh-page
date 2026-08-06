import { useEffect } from "react";

const SCRIPT_ID = "ld-json-page";

/**
 * SPA용 JSON-LD 주입 훅.
 * 페이지 이동·언마운트 시 이전 스크립트를 제거해 중복을 방지한다.
 */
export function useJsonLd(schema: object | object[]) {
  const json = JSON.stringify(Array.isArray(schema) ? schema : [schema]);

  useEffect(() => {
    document.getElementById(SCRIPT_ID)?.remove();

    const el = document.createElement("script");
    el.type = "application/ld+json";
    el.id = SCRIPT_ID;
    el.textContent = json;
    document.head.appendChild(el);

    return () => {
      document.getElementById(SCRIPT_ID)?.remove();
    };
  }, [json]);
}
