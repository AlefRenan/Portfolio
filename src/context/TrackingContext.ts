import { createContext } from "react";
import {
  defaultTrackingService,
  ITrackingService,
} from "@/services/trackingService";

export const TrackingContext = createContext<ITrackingService>(
  defaultTrackingService
);
