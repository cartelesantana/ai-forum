"use client";

import { motion, useInView, useAnimation } from "framer-motion";
import { useRef, useEffect } from "react";

type props = {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  type?: "left" | "right" | "top" | "bottom" | "scale";
};

export default function SecionSlide({ children, delay, className, type }: props) {
  const ref = useRef(null);
  const isInview = useInView(ref, { once: true });
  const controls = useAnimation();

  const animations_type = {
    left: {
      hidden: { opacity: 0, x: 30 },
      visible: { opacity: 1, x: 0 },
    },
    right: {
      hidden: { opacity: 0, x: -30 },
      visible: { opacity: 1, x: 0 },
    },
    top: {
      hidden: { opacity: 0, y: 30 },
      visible: { opacity: 1, y: 0 },
    },
    bottom: {
      hidden: { opacity: 0, y: -30 },
      visible: { opacity: 1, y: 0 },
    },
    scale: {
      hidden: { opacity: 0, scale: 0.5 },
      visible: { opacity: 1, scale: 1 },
    },
  };

  useEffect(() => {
    if (isInview) {
      controls.start("visible");
    }
  }, [isInview]);

  return (
    <motion.div
      ref={ref}
      // variants={{
      //   hidden: { opacity: 0, x: 30 },
      //   visible: { opacity: 1, x: 0 },
      // }}
      variants={animations_type[type ?? "left"]}
      transition={{
        type: "spring",
        duration: 1,
        // damping: 8,
        delay: delay,
        // stiffness: 100,
      }}
      initial="hidden"
      animate={controls}
      className={className}
    >
      {children}
    </motion.div>
  );
}
