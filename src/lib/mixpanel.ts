import mixpanel from "mixpanel-browser";

const TOKEN = import.meta.env.VITE_MIXPANEL_PROJECT_TOKEN as string | undefined;
const isBrowser = typeof window !== "undefined";

let initialized = false;

export function initMixpanel(opts: Record<string, unknown> = {}): boolean {
  if (!isBrowser) return false;
  if (initialized) return true;

  if (!TOKEN) {
    console.warn(
      "[Mixpanel] VITE_MIXPANEL_PROJECT_TOKEN ausente. Telemetria desativada."
    );
    return false;
  }

  mixpanel.init(TOKEN, {
    debug: import.meta.env.DEV,
    ...opts,
  });

  initialized = true;
  return true;
}

export function isMixpanelReady() {
  return initialized;
}

export default mixpanel;
