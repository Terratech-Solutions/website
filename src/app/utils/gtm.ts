'use client';

import { sendGTMEvent as sendEvent } from '@next/third-parties/google';

export function sendGTMEvent(data: Object, dataLayerName?: string) {
  return sendEvent(data, dataLayerName);
}
