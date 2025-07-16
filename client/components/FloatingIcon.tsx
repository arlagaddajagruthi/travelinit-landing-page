import { motion } from "framer-motion";

interface FloatingIconProps {
  children: React.ReactNode;
  delay?: number;
  amplitude?: number;
  duration?: number;
}

export const FloatingIcon = ({
  children,
  delay = 0,
  amplitude = 10,
  duration = 4,
}: FloatingIconProps) => (
  <motion.div
    style={{ willChange: "transform" }}
    animate={{
      y: [-amplitude, amplitude, -amplitude],
      rotate: [-3, 3, -3],
      scale: [1, 1.05, 1],
    }}
    transition={{
      duration: duration + delay,
      repeat: Infinity,
      ease: "easeInOut",
      delay,
    }}
  >
    {children}
  </motion.div>
);
