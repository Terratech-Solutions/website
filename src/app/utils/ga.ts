export type GAEventParams = {
  event: string;
} & Record<string, unknown>;

export function sendGAEvent(params: GAEventParams) {
  if (
    typeof window !== 'undefined' &&
    (window as typeof window & { gtag?: (...args: any[]) => void }).gtag
  ) {
    const { event, ...rest } = params;
    window.gtag!('event', event, rest);
  }
}
