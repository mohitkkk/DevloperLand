
import { HeroHighlightDemo } from "@/components/ui/HeroHighlightDemo";
import { Services } from "@/components/ui/Services";
import {FloatingDockDemo} from "../components/ui/FloatingDockDemo"
import { div } from "framer-motion/m";
import { SparklesPreview } from "../components/ui/sparlklespreview"
require('dotenv').config()

export default function Home() {
  return (
    <div>
    
    <SparklesPreview />
    <HeroHighlightDemo />
    <FloatingDockDemo />
    
    
    </div>
    

  );
}
