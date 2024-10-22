"use client";
import { cn } from "@/lib/utils"; // Utility function to combine class names
import React from "react";

export const Meteors = ({
  number, // Optional prop to specify the number of meteors
  className, // Optional prop to add additional CSS classes
}: {
  number?: number;
  className?: string;
}) => {
  // Create an array of the specified length (or default to 20) filled with `true` values
  const meteors = new Array(number || 20).fill(true);
  return (
    <>
      {meteors.map((el, idx) => (
        <span
          // Assign a unique key for each meteor based on its index
          key={"meteor" + idx}
          // Combine the base meteor styles with any additional className passed in
          className={cn(
            "animate-meteor-effect absolute top-1 left-1/2 h-0.5 w-0.5 rounded-[9999px] bg-slate-500 shadow-[0_0_0_1px_#ffffff10] rotate-[215deg]",
            // Pseudo-element styles for the meteor's tail
            "before:content-[''] before:absolute before:top-1/2 before:transform before:-translate-y-[50%] before:w-[50px] before:h-[1px] before:bg-gradient-to-r before:from-[#64748b] before:to-transparent",
            className
          )}
          // Inline styles to randomize the initial position, delay, and duration of the meteor animation
          style={{
            // Set the starting top position to 0
            top: 0,
            // Randomize the left position between -400 and 400 pixels
            left: Math.random() * 100 + "vw",
            // Randomize the animation delay between 0.2 and 0.8 seconds
            animationDelay: Math.random() * (0.8 - 0.2) + 0.2 + "s",
            // Randomize the animation duration between 2 and 10 seconds
            animationDuration: Math.floor(Math.random() * (10 - 2) + 2) + "s",
            zIndex: Math.floor(Math.random() * 10),

          }}
        ></span>
      ))}
    </>
  );
};
