"use client";  // Marking as a client component

import { Services } from "@/components/ui/Services";
import { FloatingDockDemo } from "@/components/ui/FloatingDockDemo";
import Experience from "../../components/ui/gsap_demo"

export default function ServicesPage( ) {
  return (
    <div className="bg-black">
      <div className="flex justify-center">
        <Experience/>

      </div>
      {/* You can also add other components like FloatingDockDemo */}
      <FloatingDockDemo />
    </div>
  );
}
