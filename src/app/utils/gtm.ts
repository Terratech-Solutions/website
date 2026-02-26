'use client';

import { sendGTMEvent as sendEvent } from '@next/third-parties/google';

export function sendGTMEvent(data: Record<string, any>, dataLayerName?: string) {
  return sendEvent(data, dataLayerName);
}
