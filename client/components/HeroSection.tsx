import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Play, ArrowDown, Shield, Map, AlertTriangle } from "lucide-react";
import { FloatingIcon } from "./FloatingIcon";
import { ParallaxElement } from "./ParallaxElement";
import { CreativeClouds } from "./BackgroundAnimations";
import { useStaggerAnimation } from "@/hooks/useScrollAnimation";

export const HeroSection = () => {
  const { staggerContainer, staggerItem } = useStaggerAnimation();

  return (
    <section
      id="home"
      className="relative min-h-screen flex flex-col overflow-hidden"
      style={{
        backgroundImage: `url('https://cdn.builder.io/api/v1/image/assets%2F33aab6c1f232494f879f8655f36222ea%2F5d9e6b785e1844c29024d2a6122d071b?format=webp&width=800')`,
        backgroundSize: "cover",
        backgroundPosition: "center center",
        backgroundRepeat: "no-repeat",
      }}
    >
      {/* Animated Overlay */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.5 }}
        className="absolute inset-0 bg-gradient-to-r from-black/40 via-black/20 to-transparent"
      />

      {/* Creative Clouds Background */}
      <CreativeClouds />

      {/* Enhanced Floating Safety Icons with Parallax */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <ParallaxElement offset={-50}>
          <motion.div
            initial={{ opacity: 0, scale: 0, rotate: -180 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            transition={{ duration: 1, delay: 1.2, ease: "backOut" }}
            className="absolute top-1/4 right-1/3"
          >
            <FloatingIcon delay={0} amplitude={15}>
              <motion.div
                whileHover={{ scale: 1.2, rotate: 10 }}
                className="w-12 h-12 sm:w-16 sm:h-16 md:w-20 md:h-20 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center border border-white/20 shadow-lg"
              >
                <Shield className="w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10 text-white drop-shadow-lg" />
              </motion.div>
            </FloatingIcon>
          </motion.div>
        </ParallaxElement>

        <ParallaxElement offset={-30}>
          <motion.div
            initial={{ opacity: 0, scale: 0, rotate: 180 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            transition={{ duration: 1, delay: 1.4, ease: "backOut" }}
            className="absolute top-1/3 left-1/4"
          >
            <FloatingIcon delay={1} amplitude={12}>
              <motion.div
                whileHover={{ scale: 1.2, rotate: -10 }}
                className="w-12 h-12 sm:w-16 sm:h-16 md:w-20 md:h-20 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center border border-white/20 shadow-lg"
              >
                <Map className="w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10 text-white drop-shadow-lg" />
              </motion.div>
            </FloatingIcon>
          </motion.div>
        </ParallaxElement>

        <ParallaxElement offset={-70}>
          <motion.div
            initial={{ opacity: 0, scale: 0, rotate: -90 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            transition={{ duration: 1, delay: 1.6, ease: "backOut" }}
            className="absolute top-2/3 right-1/4"
          >
            <FloatingIcon delay={2} amplitude={18}>
              <motion.div
                whileHover={{ scale: 1.2, rotate: 15 }}
                className="w-12 h-12 sm:w-16 sm:h-16 md:w-20 md:h-20 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center border border-white/20 shadow-lg"
              >
                <AlertTriangle className="w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10 text-white drop-shadow-lg" />
              </motion.div>
            </FloatingIcon>
          </motion.div>
        </ParallaxElement>
      </div>

      {/* Hero Content */}
      <div className="relative z-10 flex-1 flex items-center justify-center px-4">
        <div className="container mx-auto text-center">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
            className="max-w-4xl mx-auto"
          >
            {/* Main Headline */}
            <motion.h1
              variants={staggerItem}
              className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight"
            >
              <motion.span
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1, delay: 0.5, ease: "backOut" }}
                className="block bg-gradient-to-r from-yellow-400 via-orange-400 to-yellow-400 bg-clip-text text-transparent drop-shadow-2xl"
              >
                Stay Safe,
              </motion.span>
              <motion.span
                initial={{ opacity: 0, x: -100 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 1, delay: 0.8, ease: "backOut" }}
                className="block"
              >
                Travel Smart
              </motion.span>
            </motion.h1>

            {/* Subtitle */}
            <motion.p
              variants={staggerItem}
              className="text-xl md:text-2xl text-white/90 mb-8 max-w-2xl mx-auto leading-relaxed drop-shadow-lg"
            >
              Your ultimate companion for safe and unforgettable journeys around
              the world
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              variants={staggerItem}
              className="flex flex-col sm:flex-row gap-4 justify-center items-center"
            >
              <motion.div
                whileHover={{
                  scale: 1.05,
                  boxShadow: "0 20px 40px rgba(250, 204, 21, 0.4)",
                }}
                whileTap={{ scale: 0.95 }}
              >
                <Button
                  size="lg"
                  className="bg-yellow-400 hover:bg-yellow-500 text-yellow-900 font-bold px-8 py-4 rounded-full text-lg shadow-2xl relative overflow-hidden group"
                >
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-yellow-300 to-orange-300"
                    initial={{ x: "-100%" }}
                    whileHover={{ x: "0%" }}
                    transition={{ duration: 0.3 }}
                  />
                  <span className="relative z-10 flex items-center">
                    Start Your Journey
                    <ArrowDown className="ml-2 w-5 h-5" />
                  </span>
                </Button>
              </motion.div>

              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button
                  variant="outline"
                  size="lg"
                  className="border-white text-white bg-white/10 hover:bg-white hover:text-gray-900 px-8 py-4 rounded-full text-lg backdrop-blur-sm border-2 shadow-2xl"
                >
                  <Play className="mr-2 w-5 h-5" />
                  Watch Demo
                </Button>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 2 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="text-white/80 text-center cursor-pointer"
          onClick={() =>
            document
              .getElementById("about")
              ?.scrollIntoView({ behavior: "smooth" })
          }
        >
          <div className="text-sm mb-2">Scroll to explore</div>
          <ArrowDown className="w-6 h-6 mx-auto" />
        </motion.div>
      </motion.div>
    </section>
  );
};
