// src/hooks/useTracking.ts
import { TrackingContext } from "@/context/TrackingContext";
import { useCallback, useContext } from "react";

const useTracking = (componentName: string) => {
  const trackingService = useContext(TrackingContext);

  const createTrackHandler = useCallback(
    (eventName: string) => () => {
      trackingService?.track(eventName, { component: componentName });
    },
    [componentName, trackingService]
  );

  return { createTrackHandler };
};

export default useTracking;
