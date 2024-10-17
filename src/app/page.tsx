
import { HeroHighlightDemo } from "@/components/ui/HeroHighlightDemo";
import { Services } from "@/components/ui/Services";
import {FloatingDockDemo} from "../components/ui/FloatingDockDemo"
import { div } from "framer-motion/m";
require('dotenv').config()

export default function Home() {
  return (
    <div>
    <HeroHighlightDemo />
    <Services />
    <FloatingDockDemo />
    
    
    </div>
    

  );
}
