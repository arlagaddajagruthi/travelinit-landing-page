import { motion, useScroll, useTransform } from "framer-motion";

export const CreativeClouds = () => {
  const { scrollY } = useScroll();
  const cloudOpacity = useTransform(scrollY, [0, 1000], [0.9, 0.3]);

  return (
    <motion.div
      className="absolute inset-0 overflow-hidden pointer-events-none"
      style={{ opacity: cloudOpacity }}
    >
      {/* Minimal Wind Streams */}
      {[...Array(2)].map((_, i) => (
        <motion.div
          key={`wind-stream-${i}`}
          className="absolute"
          style={{
            width: 200,
            height: 2,
            top: `${30 + i * 30}%`,
            left: `-10%`,
            background: `linear-gradient(90deg,
              transparent 0%,
              rgba(255,255,255,0.4) 50%,
              transparent 100%)`,
            borderRadius: "2px",
          }}
          animate={{
            x: ["0vw", "110vw"],
            opacity: [0, 0.6, 0],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "linear",
            delay: i * 8,
          }}
        />
      ))}

      {/* Single Flying Element */}
      <motion.div
        className="absolute text-white/30"
        style={{
          fontSize: 18,
          top: `40%`,
          left: `-5%`,
        }}
        animate={{
          x: ["0vw", "105vw"],
          y: [0, 15, -8, 0],
        }}
        transition={{
          duration: 35,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      >
        ✈️
      </motion.div>

      {/* Subtle floating particles */}
      {[...Array(3)].map((_, i) => (
        <motion.div
          key={`particle-${i}`}
          className="absolute"
          style={{
            width: 4,
            height: 4,
            top: `${20 + i * 25}%`,
            left: `${10 + i * 30}%`,
            background: "rgba(255,255,255,0.3)",
            borderRadius: "50%",
            filter: "blur(1px)",
          }}
          animate={{
            y: [0, -20, 0],
            opacity: [0.3, 0.8, 0.3],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 8 + i * 2,
            repeat: Infinity,
            ease: "easeInOut",
            delay: i * 3,
          }}
        />
      ))}
    </motion.div>
  );
};

// Keep only essential background components and remove heavy ones
export const RichAboutBackground = () => {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Minimal floating elements */}
      {["🌍", "🎯"].map((icon, i) => (
        <motion.div
          key={`simple-icon-${i}`}
          className="absolute text-orange-400/40"
          style={{
            fontSize: 25,
            left: `${20 + i * 60}%`,
            top: `${30 + i * 40}%`,
          }}
          animate={{
            y: [0, 20, 0],
            scale: [1, 1.1, 1],
            opacity: [0.4, 0.6, 0.4],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "easeInOut",
            delay: i * 6,
          }}
        >
          {icon}
        </motion.div>
      ))}
    </div>
  );
};

export const AestheticFeaturesBackground = () => {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Minimal feature icons */}
      {["🛡️", "🗺️"].map((icon, i) => (
        <motion.div
          key={`feature-icon-${i}`}
          className="absolute text-yellow-400/40"
          style={{
            fontSize: 22,
            left: `${15 + i * 70}%`,
            top: `${25 + i * 50}%`,
          }}
          animate={{
            y: [0, 15, 0],
            rotate: [0, 10, 0],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
            delay: i * 5,
          }}
        >
          {icon}
        </motion.div>
      ))}
    </div>
  );
};

// Remove all other heavy background components and replace with lightweight versions
export const CreativeWindSystem = () => {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      <motion.div
        className="absolute text-blue-400/20"
        style={{
          fontSize: 16,
          top: `50%`,
          left: `30%`,
        }}
        animate={{
          rotate: [0, 360],
          scale: [1, 1.2, 1],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "linear",
        }}
      >
        💨
      </motion.div>
    </div>
  );
};

export const CreativeWeatherSystem = () => null;
export const CreativeOceanWorld = () => null;
export const CreativeParticleSnow = () => null;
export const CreativeFloatingElements = () => null;
export const CreativeTravelElements = () => null;
export const FuturisticTechBackground = () => null;
