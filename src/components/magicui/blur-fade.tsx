"use client";

import { AnimatePresence, motion, useInView, Variants } from "framer-motion";
import { useRef } from "react";
import { cn } from "@/lib/utils";

interface BlurFadeProps {
  children: React.ReactNode;
  className?: string;
  variant?: {
    hidden: { y: number };
    visible: { y: number };
  };
  duration?: number;
  delay?: number;
  yOffset?: number;
  inView?: boolean;
  inViewMargin?: string;
  blur?: string;
}

const BlurFade = ({
  children,
  className,
  variant,
  duration = 0.5,
  delay = 0,
  yOffset = 24,
  inView = true,
  inViewMargin = "-128px",
  blur = "4px",
}: BlurFadeProps) => {
  const ref = useRef(null);
  const inViewResult = useInView(ref, { once: true, margin: inViewMargin as `${number}px` });
  const isInView = !inView || inViewResult;
  const defaultVariants: Variants = {
    hidden: { y: yOffset, opacity: 0, filter: `blur(${blur})` },
    visible: {
      y: 0,
      opacity: 1,
      filter: "blur(0px)",
    },
  };
  const combinedVariants = variant || defaultVariants;
  return (
    <AnimatePresence>
      <motion.div
        ref={ref}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        exit="hidden"
        variants={combinedVariants}
        transition={{
          duration,
          delay,
          ease: [0.21, 0.47, 0.32, 0.98],
        }}
        className={cn(className)}
      >
        {children}
      </motion.div>
    </AnimatePresence>
  );
};

export default BlurFade;
