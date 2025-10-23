import mixpanel, { initMixpanel } from "@/lib/mixpanel";

export interface ITrackingService {
  track: (event: string, properties?: Record<string, unknown>) => void;
  identify: (userId: string) => void;
  alias: (newId: string) => void;
  reset: () => void;
}

function ensureInit(): boolean {
  return initMixpanel();
}

export const defaultTrackingService: ITrackingService = {
  track: (event, properties) => {
    if (!ensureInit()) return;
    mixpanel.track(event, properties);
  },
  identify: (userId) => {
    if (!ensureInit()) return;
    mixpanel.identify(userId);
  },
  alias: (newId) => {
    if (!ensureInit()) return;
    mixpanel.alias(newId);
  },
  reset: () => {
    if (!ensureInit()) return;
    mixpanel.reset();
  },
};
