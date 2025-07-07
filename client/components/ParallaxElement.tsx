import { motion, useScroll, useTransform } from "framer-motion";

interface ParallaxElementProps {
  children: React.ReactNode;
  offset?: number;
}

export const ParallaxElement = ({
  children,
  offset = 50,
}: ParallaxElementProps) => {
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 1000], [0, offset]);

  return <motion.div style={{ y }}>{children}</motion.div>;
};
