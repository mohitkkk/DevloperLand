// "use client";  // Marking as a client component

// import { Services } from "@/components/ui/Services";
// import { FloatingDockDemo } from "@/components/ui/FloatingDockDemo";
// import Experience from "../../components/ui/gsap_demo"

// export default function ServicesPage( ) {
//   return (
//     <div className="bg-black">
//       <div className="flex justify-center">
//         <Experience/>

//       </div>
//       {/* You can also add other components like FloatingDockDemo */}
//       <FloatingDockDemo />
//     </div>
//   );
// }

import React, { useState, useEffect } from 'react';

function App() {
  const [showScrollContent, setShowScrollContent] = useState(false);

  // Handle scroll event
  const handleScroll = () => {
    if (window.scrollY > 100) { // Show content after scrolling 100px
      setShowScrollContent(true);
    } else {
      setShowScrollContent(false);
    }
  };

  // Add and clean up the scroll event listener
  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    
    // Cleanup function to remove event listener
    return () => window.removeEventListener('scroll', handleScroll);
  }, []); // Empty dependency array ensures this runs once on mount

  return (
    <div>
      <div className="fixed-content">
        {/* Content that stays fixed */}
        <h1>Fixed Header</h1>
      </div>

      {showScrollContent && (
        <div className="scroll-content">
          {/* Content that appears after scrolling */}
          <p>This content appears after you scroll down 100px.</p>
        </div>
      )}

      <div style={{ height: '1500px' }}>
        {/* Placeholder to make the page scrollable */}
        Scroll down to see the effect.
      </div>
    </div>
  );
}

export default App;
