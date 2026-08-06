export {};

declare global {
  interface Window {
    gtag: (
      command: "event" | "config" | "js" | "set",
      targetOrAction: string | Date,
      params?: Record<string, unknown>,
    ) => void;
    dataLayer: unknown[];
  }
}
