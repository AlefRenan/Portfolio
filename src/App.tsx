import { logosRight } from "@/data/skills";
import Header from "@/components/Header";
import Carousel from "@/components/Carousel";
import About from "@/components/About";
import Project from "@/components/Project";
import Hero from "@/components/Hero";
import Contact from "@/components/Contact";
import { useEffect } from "react";
import useTracking from "@/utils/hooks/useTracking";
import { ThemeProvider } from "@/components/theme-provider";
import { TrackingProvider } from "@/context/TrackingProvider";

import "./App.css";

function App() {
  const { createTrackHandler } = useTracking("Home Page");

  useEffect(() => {
    createTrackHandler("Page View")();
  }, [createTrackHandler]);

  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <TrackingProvider>
        <Header />
        <Hero />
        <div className="mt-12">
          <Carousel direction="right" logos={logosRight} />
        </div>
        <About />
        <Project />
        <Contact />
      </TrackingProvider>
    </ThemeProvider>
  );
}

export default App;
