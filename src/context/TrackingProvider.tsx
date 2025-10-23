import React from "react";
import { TrackingContext } from "./TrackingContext";
import { defaultTrackingService } from "@/services/trackingService";

interface TrackingProviderProps {
  children: React.ReactNode;
}

export const TrackingProvider: React.FC<TrackingProviderProps> = ({
  children,
}) => {
  return (
    <TrackingContext.Provider value={defaultTrackingService}>
      {children}
    </TrackingContext.Provider>
  );
};
