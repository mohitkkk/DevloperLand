"use client";  // Marking as a client component

import { FloatingDockDemo } from "@/components/ui/FloatingDockDemo";
import App from "@/components/ui/Scrool"

export default function ServicesPage( ) {
  return (
    <div className="bg-black">
      <div className="flex justify-center">
        <App />
      </div>
      {/* You can also add other components like FloatingDockDemo */}
      <FloatingDockDemo />
    </div>
  );
}
