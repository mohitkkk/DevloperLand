import React, { useState, useEffect } from 'react';

const App: React.FC = () => {
  // State to track if the scroll threshold has been reached
  const [showScrollContent, setShowScrollContent] = useState(false);

  // Function to handle scroll events
  const handleScroll = () => {
    // Check if the user has scrolled more than 100px vertically
    if (window.scrollY > 100) {
      setShowScrollContent(true); // Show the horizontal scroll content
    } else {
      setShowScrollContent(false); // Hide the horizontal scroll content
    }
  };

  // Add and clean up scroll event listener when component mounts/unmounts
  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className="w-screen h-screen flex flex-col">
      {/* Top half of the page (Regular vertical scrolling) */}
      <div className="w-full h-1/2 overflow-y-auto bg-gray-100 p-4">
        <p>This content scrolls vertically.</p>
        <p>More content below...</p>
        <p>Keep scrolling...</p>
        <p>Even more content below...</p>
        <p>And more vertical content...</p>
        <p>Keep scrolling vertically...</p>
      </div>

      {/* Bottom half of the page (Horizontal scrolling) */}
      <div className="w-full h-1/2 overflow-x-auto bg-blue-200 p-4">
        {showScrollContent && (
          <div className="inline-flex space-x-10 min-w-[1500px]">
            {/* Horizontal scrolling images */}
            {['img1', 'img2', 'img3', 'img4', 'img5'].map((img, index) => (
              <img
                key={index}
                src={`/images/${img}.png`}
                alt={`Image ${index + 1}`}
                className="w-48 h-48"
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default App;