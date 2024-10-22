"use client";
import { cn } from "@/lib/utils";
import { useMotionValue, motion, useMotionTemplate } from "framer-motion";
import React, { useEffect, useState } from "react";
// import { SparklesPreview } from "../ui/sparlklespreview"
import { Services } from "./Services";

export const HeroHighlight = ({
  containerClassName,
}: {
  containerClassName?: string;
}) => {
  const [isMounted, setIsMounted] = useState(false);
  const [mouseX, setMouseX] = useState(0);
  const [mouseY, setMouseY] = useState(0);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) return null;

  function handleMouseMove({
    currentTarget,
    clientX,
    clientY,
  }: React.MouseEvent<HTMLDivElement>) {
    if (!currentTarget) return;
    let { left, top } = currentTarget.getBoundingClientRect();

    setMouseX(clientX - left);
    setMouseY(clientY - top);
  }

  return (
    <div
      className={cn(
        "relative h-full my-12 flex items-center bg-black justify-center w-full group",
        containerClassName
      )}
      onMouseMove={handleMouseMove}
    >
      <div className="h-[110%] md:h-[120%] absolute inset-0 bg-dot-thick-neutral-800  pointer-events-none " />
      <motion.div
        className="h-[110%] md:h-[120%] pointer-events-none bg-dot-thick-indigo-500 absolute inset-0 opacity-0 transition duration-300 group-hover:opacity-100"
        style={{
          WebkitMaskImage: `radial-gradient(200px circle at ${mouseX}px ${mouseY}px, black 0%, transparent 100%)`,
          maskImage: `radial-gradient(200px circle at ${mouseX}px ${mouseY}px, black 0%, transparent 100%)`,
        }}
      />

      <div className="h-full z-50 "> <Services /> </div>
    </div>
  );
};
