export function gaEvent(action: string, params?: Record<string, any>) {
  if (typeof window === 'undefined' || !window.gtag) return;
  window.gtag('event', action, params || {});
}

export const clickEvent = (label: string) => gaEvent('click_event', { label });
