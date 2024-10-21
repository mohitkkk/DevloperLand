
// import { HeroHighlightDemo } from "@/components/ui/HeroHighlightDemo";
import { Services } from "@/components/ui/Services";
import {FloatingDockDemo} from "../components/ui/FloatingDockDemo"
import { div } from "framer-motion/m";
import { SparklesPreview } from "../components/ui/sparlklespreview"
import {TabsDemo} from "../components/ui/tabspreview"
import {HeroHighlight} from "../components/ui/hero-highlight"
import { LinkPreviewDemoSecond } from "../components/ui/LinkPreviewDemoSecond"
import {MeteorDemo} from "../components/ui/MeteorsDemo"
require('dotenv').config()


export default function Home() {
  return (
    <div className="h-full bg-black">
    
    
    <SparklesPreview />
    <HeroHighlight />
    <FloatingDockDemo />
    <TabsDemo />
    <div className="h-44 bg-black"></div>
    <LinkPreviewDemoSecond />
    {/* <MeteorDemo /> */}
    
    </div>
    

  );
}
