import { useAnimation, useInView } from "framer-motion";
import { useEffect, useRef } from "react";

export const useScrollAnimation = (delay: number = 0) => {
  const controls = useAnimation();
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-50px" });

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  const variants = {
    hidden: {
      opacity: 0,
      y: 50,
      scale: 0.9,
      willChange: "transform, opacity",
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      willChange: "auto",
      transition: {
        duration: 0.6, // Reduced from 0.8
        delay,
        ease: [0.25, 0.46, 0.45, 0.94],
      },
    },
  };

  return { ref, controls, variants, inView };
};

export const useStaggerAnimation = () => {
  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const staggerItem = {
    hidden: {
      opacity: 0,
      y: 30,
      scale: 0.9,
      willChange: "transform, opacity",
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      willChange: "auto",
      transition: {
        duration: 0.5, // Reduced from 0.6
        ease: [0.25, 0.46, 0.45, 0.94],
      },
    },
  };

  return { staggerContainer, staggerItem };
};
