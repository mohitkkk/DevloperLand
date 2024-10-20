"use client";

import { useState, useEffect } from 'react';
import { HeroHighlight } from "@/components/ui/hero-highlight";
import { Services } from "@/components/ui/Services";
import { FloatingDockDemo } from "../components/ui/FloatingDockDemo";
import { SparklesPreview } from "../components/ui/sparlklespreview";
import Preloader from '../components/ui/Preloader';

require('dotenv').config();

export default function Home() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate a loading delay (for demonstration purposes)
    const timer = setTimeout(() => {
      setLoading(false);  // Set loading to false after the content has "loaded"
    }, 2000); // Adjust this time as per your need

    return () => clearTimeout(timer); // Clean up the timer if the component unmounts
  }, []);

  return (
    <>
      {loading ? (
        <Preloader />  
      ) : (
        <div>
          <SparklesPreview />
          <HeroHighlight />
          <FloatingDockDemo />
        </div>
      )}
    </>
  );
}
