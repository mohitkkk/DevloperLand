"use client";

import { useState, useEffect } from 'react';
// import { HeroHighlightDemo } from "@/components/ui/HeroHighlightDemo";
import { Services } from "@/components/ui/Services";
import { div } from "framer-motion/m";
import { TabsDemo } from "../components/ui/tabspreview";
import { LinkPreviewDemoSecond } from "../components/ui/LinkPreviewDemoSecond";
// import { MeteorDemo } from "../components/ui/MeteorsDemo";
import { HeroHighlight } from "@/components/ui/hero-highlight";
import { FloatingDockDemo } from "../components/ui/FloatingDockDemo";
import { SparklesPreview } from "../components/ui/sparlklespreview";
import Preloader from '../components/ui/Preloader';

require('dotenv').config();

export default function Home() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate a loading delay (for demonstration purposes)
    const timer = setTimeout(() => {
      setLoading(false); // Set loading to false after the content has "loaded"
    }, 2000); // Adjust this time as per your need

    return () => clearTimeout(timer); // Clean up the timer if the component unmounts
  }, []);

  return (
    <>
      {loading ? (
        <Preloader />
      ) : (
        <div className="h-full bg-black">
          <SparklesPreview />
          <HeroHighlight />
          <FloatingDockDemo />
          <TabsDemo />
          <div className="h-44 bg-black"></div>
          <LinkPreviewDemoSecond />
          {/* <MeteorDemo /> */}
        </div>
      )}
    </>
  );
}
