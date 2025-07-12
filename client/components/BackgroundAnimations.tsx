import { useMousePosition } from "@/hooks/useMousePosition";
import { motion, useScroll, useTransform } from "framer-motion";
import { useEffect, useState } from "react";

export const CreativeClouds = () => {
  const { scrollY } = useScroll();
  const cloudOpacity = useTransform(scrollY, [0, 1000], [0.9, 0.3]);

  return (
    <motion.div
      className="absolute inset-0 overflow-hidden pointer-events-none"
      style={{ opacity: cloudOpacity }}
    >
      {/* Enhanced Realistic Wind Streams */}
      {[...Array(20)].map((_, i) => (
        <motion.div
          key={`wind-stream-${i}`}
          className="absolute"
          style={{
            width: Math.random() * 300 + 150,
            height: Math.random() * 4 + 2,
            top: `${Math.random() * 80 + 10}%`,
            left: `-15%`,
            background: `linear-gradient(90deg,
              transparent 0%,
              rgba(255,255,255,0.2) 15%,
              rgba(255,255,255,0.6) 30%,
              rgba(255,255,255,0.8) 50%,
              rgba(255,255,255,0.6) 70%,
              rgba(255,255,255,0.2) 85%,
              transparent 100%)`,
            borderRadius: "50px",
            filter: "blur(1px)",
          }}
          animate={{
            x: ["0vw", "130vw"],
            opacity: [0, 0.6, 1, 0.8, 0],
            scaleX: [0.3, 1.8, 1.4, 0.6, 0.3],
            scaleY: [1, 1.5, 1.2, 1, 1],
          }}
          transition={{
            duration: Math.random() * 12 + 8,
            repeat: Infinity,
            ease: "easeInOut",
            delay: Math.random() * 8,
          }}
        />
      ))}

      {/* Floating Sparkle Particles */}
      {[...Array(40)].map((_, i) => (
        <motion.div
          key={`sparkle-${i}`}
          className="absolute"
          style={{
            width: Math.random() * 3 + 1,
            height: Math.random() * 3 + 1,
            top: `${Math.random() * 80 + 10}%`,
            left: `-8%`,
            background: `radial-gradient(circle, rgba(255,255,255,0.9) 0%, rgba(255,255,255,0.4) 50%, transparent 100%)`,
            borderRadius: "50%",
            filter: "blur(0.5px)",
          }}
          animate={{
            x: ["0vw", "110vw"],
            y: [0, Math.sin(i * 0.4) * 50, Math.cos(i * 0.3) * 30],
            opacity: [0, 0.8, 1, 0.6, 0],
            scale: [0, 1.5, 1, 1.2, 0],
          }}
          transition={{
            duration: Math.random() * 10 + 6,
            repeat: Infinity,
            ease: "linear",
            delay: Math.random() * 6,
          }}
        />
      ))}

      {/* Layered Realistic Clouds */}
      {[...Array(8)].map((_, i) => {
        const cloudSize = Math.random() * 200 + 120;
        const cloudHeight = cloudSize * 0.6;
        return (
          <motion.div
            key={`cloud-${i}`}
            className="absolute"
            style={{
              width: cloudSize,
              height: cloudHeight,
              top: `${Math.random() * 60 + 10}%`,
              left: `-${Math.random() * 40 + 20}%`,
            }}
            animate={{
              x: ["0vw", "140vw"],
              scale: [0.7, 1.3, 1.1, 0.8],
            }}
            transition={{
              duration: Math.random() * 60 + 80,
              repeat: Infinity,
              ease: "linear",
              delay: Math.random() * 30,
            }}
          >
            <div className="relative w-full h-full">
              {/* Cloud Base */}
              <motion.div
                className="absolute inset-0 bg-white/25 rounded-full blur-xl"
                animate={{
                  scale: [1, 1.1, 1],
                  opacity: [0.3, 0.5, 0.3],
                }}
                transition={{
                  duration: Math.random() * 8 + 6,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />
              {/* Cloud Middle Layer */}
              <motion.div
                className="absolute inset-4 bg-white/20 rounded-full blur-lg"
                animate={{
                  scale: [1, 1.15, 1],
                  x: [0, 10, 0],
                }}
                transition={{
                  duration: Math.random() * 6 + 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 1,
                }}
              />
              {/* Cloud Core */}
              <motion.div
                className="absolute inset-8 bg-white/15 rounded-full blur-md"
                animate={{
                  scale: [1, 1.2, 1],
                  y: [0, -5, 0],
                }}
                transition={{
                  duration: Math.random() * 4 + 3,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 2,
                }}
              />
              {/* Cloud Highlights */}
              <motion.div
                className="absolute top-4 left-8 w-3/4 h-1/2 bg-white/10 rounded-full blur-sm"
                animate={{
                  opacity: [0.2, 0.4, 0.2],
                  scale: [1, 1.1, 1],
                }}
                transition={{
                  duration: Math.random() * 5 + 3,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 0.5,
                }}
              />
            </div>
          </motion.div>
        );
      })}

      {/* Enhanced Flying Elements */}
      {["🕊️", "✈️", "🦋"].map((element, i) => (
        <motion.div
          key={`flying-${i}`}
          className="absolute text-white/50 drop-shadow-lg"
          style={{
            fontSize: Math.random() * 8 + 16,
            top: `${15 + Math.sin(i) * 15}%`,
            left: `-8%`,
            filter: "drop-shadow(0 4px 8px rgba(0,0,0,0.2))",
          }}
          animate={{
            x: ["0vw", "108vw"],
            y: [0, Math.sin(i * 0.6) * 40, Math.cos(i * 0.4) * 25, 0],
            rotate: [0, 5, -5, 0],
            scale: [0.8, 1.2, 1, 0.9],
          }}
          transition={{
            duration: 50 + i * 5,
            repeat: Infinity,
            ease: "easeInOut",
            delay: i * 8,
          }}
        >
          <motion.div
            animate={{
              rotate: [0, 10, -10, 0],
            }}
            transition={{
              duration: Math.random() * 3 + 2,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            {element}
          </motion.div>
        </motion.div>
      ))}

      {/* Ambient Light Rays */}
      {[...Array(6)].map((_, i) => (
        <motion.div
          key={`light-ray-${i}`}
          className="absolute"
          style={{
            width: 2,
            height: Math.random() * 400 + 200,
            top: `-10%`,
            left: `${Math.random() * 100}%`,
            background: `linear-gradient(180deg,
              rgba(255,255,255,0.3) 0%,
              rgba(255,255,255,0.1) 50%,
              transparent 100%)`,
            transform: `rotate(${Math.random() * 20 - 10}deg)`,
            filter: "blur(1px)",
          }}
          animate={{
            opacity: [0, 0.6, 0.3, 0.8, 0],
            scaleY: [0.8, 1.2, 1, 1.1, 0.8],
          }}
          transition={{
            duration: Math.random() * 8 + 6,
            repeat: Infinity,
            ease: "easeInOut",
            delay: Math.random() * 5,
          }}
        />
      ))}
    </motion.div>
  );
};

export const RichAboutBackground = () => {
  const mousePos = useMousePosition();

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Company/Travel themed floating elements */}
      {["🌍", "✈️", "🏛️", "📈", "🤝", "🎯", "🌟", "🏆"].map((icon, i) => (
        <motion.div
          key={`company-icon-${i}`}
          className="absolute"
          style={{
            fontSize: Math.random() * 35 + 40,
            left: `${Math.random() * 90 + 5}%`,
            top: `${Math.random() * 80 + 10}%`,
            filter: "drop-shadow(0 6px 12px rgba(0,0,0,0.15))",
          }}
          animate={{
            y: [
              0,
              Math.sin(i * 0.6) * 60 +
                (mousePos.y - window.innerHeight / 2) * 0.03,
              Math.cos(i * 0.4) * 40,
              0,
            ],
            x: [
              0,
              Math.cos(i * 0.7) * 50 +
                (mousePos.x - window.innerWidth / 2) * 0.04,
              Math.sin(i * 0.5) * 35,
              0,
            ],
            rotate: [0, 20, -20, 0],
            scale: [1, 1.3, 0.8, 1],
            opacity: [0.5, 0.9, 0.7, 0.5],
          }}
          transition={{
            duration: Math.random() * 18 + 15,
            repeat: Infinity,
            ease: "easeInOut",
            delay: Math.random() * 10,
          }}
        >
          <div className="relative">
            <div className="text-orange-400/70">{icon}</div>
            <div className="absolute inset-0 text-orange-300/30 blur-md">
              {icon}
            </div>
            <div className="absolute inset-0 text-yellow-400/20 blur-lg scale-110">
              {icon}
            </div>
          </div>
        </motion.div>
      ))}

      {/* Mission/vision bubbles */}
      {["Mission", "Vision", "Values", "Goals"].map((text, i) => (
        <motion.div
          key={`bubble-${i}`}
          className="absolute"
          style={{
            left: `${Math.random() * 70 + 15}%`,
            top: `${Math.random() * 60 + 20}%`,
          }}
          animate={{
            y: [0, Math.sin(i * 0.8) * 40, 0],
            x: [0, Math.cos(i * 0.6) * 30, 0],
            scale: [1, 1.2, 1],
            opacity: [0.4, 0.7, 0.4],
          }}
          transition={{
            duration: Math.random() * 14 + 12,
            repeat: Infinity,
            ease: "easeInOut",
            delay: Math.random() * 8,
          }}
        >
          <div className="relative">
            <div className="px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full border border-yellow-300/30 shadow-lg">
              <span className="text-gray-600/60 text-sm font-medium">
                {text}
              </span>
            </div>
            <div className="absolute inset-0 bg-yellow-200/20 rounded-full blur-md scale-110" />
          </div>
        </motion.div>
      ))}
    </div>
  );
};

export const AestheticFeaturesBackground = () => {
  const mousePos = useMousePosition();
  const featureIcons = ["🛡️", "🗺️", "⚠️", "👥", "💰", "🚫", "🛏️", "🍽️", "⭐"];

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Elegant floating feature icons */}
      {featureIcons.map((icon, i) => (
        <motion.div
          key={`feature-icon-${i}`}
          className="absolute"
          style={{
            fontSize: Math.random() * 25 + 30,
            left: `${Math.random() * 90 + 5}%`,
            top: `${Math.random() * 80 + 10}%`,
            filter: "drop-shadow(0 4px 8px rgba(0,0,0,0.1))",
          }}
          animate={{
            y: [
              0,
              Math.sin(i * 0.7) * 50 +
                (mousePos.y - window.innerHeight / 2) * 0.02,
              Math.cos(i * 0.5) * 30,
              0,
            ],
            x: [
              0,
              Math.cos(i * 0.8) * 40 +
                (mousePos.x - window.innerWidth / 2) * 0.03,
              Math.sin(i * 0.6) * 25,
              0,
            ],
            rotate: [0, 15, -15, 0],
            scale: [1, 1.2, 0.9, 1],
            opacity: [0.4, 0.8, 0.6, 0.4],
          }}
          transition={{
            duration: Math.random() * 15 + 12,
            repeat: Infinity,
            ease: "easeInOut",
            delay: Math.random() * 8,
          }}
        >
          <div className="relative">
            <div className="text-yellow-400/60">{icon}</div>
            <div className="absolute inset-0 text-yellow-300/20 blur-sm">
              {icon}
            </div>
          </div>
        </motion.div>
      ))}

      {/* Ambient light orbs */}
      {[...Array(4)].map((_, i) => (
        <motion.div
          key={`orb-${i}`}
          className="absolute rounded-full"
          style={{
            width: Math.random() * 120 + 80,
            height: Math.random() * 120 + 80,
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            background: `radial-gradient(circle,
              rgba(250, 204, 21, 0.15) 0%,
              rgba(251, 191, 36, 0.08) 40%,
              rgba(245, 158, 11, 0.03) 70%,
              transparent 100%)`,
            filter: "blur(25px)",
          }}
          animate={{
            scale: [1, 1.4, 1],
            opacity: [0.3, 0.7, 0.3],
            x: [0, Math.random() * 200 - 100],
            y: [0, Math.random() * 150 - 75],
          }}
          transition={{
            duration: Math.random() * 18 + 15,
            repeat: Infinity,
            ease: "easeInOut",
            delay: Math.random() * 8,
          }}
        />
      ))}
    </div>
  );
};

export const CreativeWindSystem = () => {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Flowing wind currents */}
      {[...Array(20)].map((_, i) => (
        <motion.div
          key={`wind-current-${i}`}
          className="absolute"
          style={{
            width: Math.random() * 300 + 150,
            height: 3,
            top: `${Math.random() * 80 + 10}%`,
            left: `-20%`,
            background: `linear-gradient(90deg,
              transparent 0%,
              rgba(59, 130, 246, 0.2) 10%,
              rgba(96, 165, 250, 0.4) 30%,
              rgba(147, 197, 253, 0.6) 50%,
              rgba(96, 165, 250, 0.4) 70%,
              rgba(59, 130, 246, 0.2) 90%,
              transparent 100%)`,
            borderRadius: "3px",
            filter: "blur(1px)",
          }}
          animate={{
            x: ["0vw", "120vw"],
            scaleX: [0.5, 1.8, 1.2, 0.8, 0.5],
            opacity: [0, 0.8, 1, 0.6, 0],
          }}
          transition={{
            duration: Math.random() * 12 + 8,
            repeat: Infinity,
            ease: "easeInOut",
            delay: Math.random() * 10,
          }}
        />
      ))}

      {/* Swirling wind patterns */}
      {[...Array(8)].map((_, i) => (
        <motion.div
          key={`swirl-${i}`}
          className="absolute"
          style={{
            width: Math.random() * 100 + 50,
            height: Math.random() * 100 + 50,
            top: `${Math.random() * 70 + 15}%`,
            left: `${Math.random() * 80 + 10}%`,
          }}
          animate={{
            rotate: [0, 360],
            scale: [0.8, 1.3, 0.8],
            opacity: [0.2, 0.6, 0.2],
          }}
          transition={{
            duration: Math.random() * 15 + 12,
            repeat: Infinity,
            ease: "linear",
            delay: Math.random() * 8,
          }}
        >
          <svg className="w-full h-full" viewBox="0 0 100 100">
            <path
              d="M20,50 Q30,20 50,30 Q70,40 80,50 Q70,80 50,70 Q30,60 20,50"
              fill="none"
              stroke="rgba(59, 130, 246, 0.3)"
              strokeWidth="2"
              strokeDasharray="5,5"
            />
            <path
              d="M25,50 Q35,25 50,35 Q65,45 75,50 Q65,75 50,65 Q35,55 25,50"
              fill="none"
              stroke="rgba(96, 165, 250, 0.4)"
              strokeWidth="1"
              strokeDasharray="3,3"
            />
          </svg>
        </motion.div>
      ))}

      {/* Floating particles in wind */}
      {[...Array(35)].map((_, i) => (
        <motion.div
          key={`particle-${i}`}
          className="absolute"
          style={{
            width: Math.random() * 3 + 1,
            height: Math.random() * 3 + 1,
            top: `${Math.random() * 80 + 10}%`,
            left: `-5%`,
            background: `rgba(147, 197, 253, ${Math.random() * 0.6 + 0.2})`,
            borderRadius: "50%",
            filter: "blur(0.5px)",
          }}
          animate={{
            x: ["0vw", "105vw"],
            y: [0, Math.sin(i * 0.4) * 60, Math.cos(i * 0.3) * 40],
            scale: [0, 1, 1, 0],
            opacity: [0, 0.8, 1, 0],
          }}
          transition={{
            duration: Math.random() * 10 + 6,
            repeat: Infinity,
            ease: "linear",
            delay: Math.random() * 8,
          }}
        />
      ))}

      {/* Gentle floating elements */}
      {["🍃", "🌾", "✨", "💨"].map((item, i) => (
        <motion.div
          key={`floating-${i}`}
          className="absolute text-blue-400/40"
          style={{
            fontSize: Math.random() * 12 + 16,
            top: `${Math.random() * 60 + 20}%`,
            left: `${Math.random() * 90 + 5}%`,
          }}
          animate={{
            y: [0, Math.sin(i * 0.7) * 40, Math.cos(i * 0.5) * 30, 0],
            x: [0, Math.cos(i * 0.6) * 50, Math.sin(i * 0.4) * 35, 0],
            rotate: [0, 15, -15, 0],
            scale: [1, 1.2, 0.9, 1],
          }}
          transition={{
            duration: Math.random() * 16 + 12,
            repeat: Infinity,
            ease: "easeInOut",
            delay: Math.random() * 10,
          }}
        >
          {item}
        </motion.div>
      ))}
    </div>
  );
};

export const CreativeWeatherSystem = () => {
  const [showLightning, setShowLightning] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      if (Math.random() > 0.95) {
        setShowLightning(true);
        setTimeout(() => setShowLightning(false), 200);
      }
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Lightning effect */}
      {showLightning && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: [0, 1, 0, 1, 0] }}
          transition={{ duration: 0.2 }}
          className="absolute inset-0 bg-blue-200/30 pointer-events-none"
        />
      )}

      {/* Advanced rain with wind effects */}
      {[...Array(80)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute bg-gradient-to-b from-blue-300/40 to-blue-400/20 rounded-full"
          style={{
            width: 1 + Math.random() * 2,
            height: Math.random() * 30 + 15,
            left: `${Math.random() * 100}%`,
            top: `-10%`,
          }}
          animate={{
            y: ["0vh", "110vh"],
            x: [0, Math.sin(i) * 30],
            opacity: [0.8, 1, 0],
          }}
          transition={{
            duration: Math.random() * 3 + 1.5,
            repeat: Infinity,
            ease: "linear",
            delay: Math.random() * 4,
          }}
        />
      ))}
    </div>
  );
};

export const CreativeOceanWorld = () => {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Layered ocean waves */}
      {[...Array(8)].map((_, i) => (
        <motion.div
          key={`wave-${i}`}
          className="absolute bottom-0 w-full bg-gradient-to-t from-blue-400/20 to-blue-300/10"
          style={{
            height: 25 + i * 5,
            zIndex: 8 - i,
          }}
          animate={{
            x: [0, -100, 0],
            scaleY: [1, 1.3, 1],
          }}
          transition={{
            duration: 8 + i * 2,
            repeat: Infinity,
            ease: "easeInOut",
            delay: i * 0.5,
          }}
        />
      ))}

      {/* Swimming fish */}
      {[...Array(6)].map((_, i) => (
        <motion.div
          key={`fish-${i}`}
          className="absolute text-blue-500/40"
          style={{
            fontSize: Math.random() * 10 + 15,
            top: `${Math.random() * 30 + 60}%`,
            left: `${Math.random() * 80 + 10}%`,
          }}
          animate={{
            x: [0, Math.random() * 200 - 100, 0],
            y: [0, Math.random() * 50 - 25, 0],
            rotate: [0, 20, -20, 0],
          }}
          transition={{
            duration: Math.random() * 10 + 8,
            repeat: Infinity,
            ease: "easeInOut",
            delay: Math.random() * 5,
          }}
        >
          🐟
        </motion.div>
      ))}
    </div>
  );
};

export const CreativeParticleSnow = () => {
  const mousePos = useMousePosition();

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Wind-affected snowflakes */}
      {[...Array(60)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute bg-white/60 rounded-full"
          style={{
            width: Math.random() * 4 + 2,
            height: Math.random() * 4 + 2,
            left: `${Math.random() * 100}%`,
            top: `-5%`,
            filter: "blur(0.5px)",
          }}
          animate={{
            y: ["0vh", "105vh"],
            x: [
              0,
              Math.sin(i * 0.5) * 80 +
                (mousePos.x - window.innerWidth / 2) * 0.02,
              Math.sin(i * 0.3) * 60 +
                (mousePos.x - window.innerWidth / 2) * 0.01,
            ],
            scale: [0.8, 1.2, 0.8],
            opacity: [0, 1, 0.8, 0],
          }}
          transition={{
            duration: Math.random() * 8 + 5,
            repeat: Infinity,
            ease: "linear",
            delay: Math.random() * 5,
          }}
        />
      ))}
    </div>
  );
};

export const CreativeFloatingElements = () => {
  const mousePos = useMousePosition();

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Interactive floating feedback elements */}
      {["💝", "⭐", "💌", "📝", "✨", "💭"].map((item, i) => (
        <motion.div
          key={`feedback-${i}`}
          className="absolute text-pink-400/40"
          style={{
            fontSize: Math.random() * 20 + 15,
            left: `${Math.random() * 90 + 5}%`,
            top: `${Math.random() * 80 + 10}%`,
          }}
          animate={{
            y: [
              0,
              Math.sin(i * 0.8) * 40 +
                (mousePos.y - window.innerHeight / 2) * 0.01,
              0,
            ],
            x: [
              0,
              Math.cos(i * 0.6) * 30 +
                (mousePos.x - window.innerWidth / 2) * 0.02,
              0,
            ],
            rotate: [0, 360],
            scale: [0.8, 1.3, 0.8],
          }}
          transition={{
            duration: Math.random() * 12 + 8,
            repeat: Infinity,
            ease: "easeInOut",
            delay: Math.random() * 6,
          }}
        >
          {item}
        </motion.div>
      ))}
    </div>
  );
};

export const CreativeTravelElements = () => {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Floating backpacks */}
      {[...Array(5)].map((_, i) => (
        <motion.div
          key={`backpack-${i}`}
          className="absolute text-blue-500/40"
          style={{
            fontSize: Math.random() * 25 + 30,
            top: `${Math.random() * 50 + 20}%`,
            left: `-10%`,
          }}
          animate={{
            x: ["0vw", "110vw"],
            y: [0, Math.sin(i * 1.5) * 50, Math.cos(i * 1.2) * 30, 0],
            rotate: [0, 10, -10, 5, 0],
            scale: [0.9, 1.3, 1.1, 0.9],
          }}
          transition={{
            duration: Math.random() * 30 + 40,
            repeat: Infinity,
            ease: "easeInOut",
            delay: Math.random() * 12,
          }}
        >
          🎒
        </motion.div>
      ))}

      {/* Travel accessories */}
      {["📷", "🕶️", "🎩", "📱", "💳", "🔋"].map((item, i) => (
        <motion.div
          key={`accessory-${i}`}
          className="absolute text-green-500/35"
          style={{
            fontSize: Math.random() * 12 + 16,
            top: `${Math.random() * 70 + 15}%`,
            left: `${Math.random() * 90 + 5}%`,
          }}
          animate={{
            y: [-12, 18, -12],
            x: [-6, 12, -6],
            rotate: [-12, 12, -12],
            scale: [0.9, 1.2, 0.9],
          }}
          transition={{
            duration: Math.random() * 6 + 5,
            repeat: Infinity,
            ease: "easeInOut",
            delay: Math.random() * 4,
          }}
        >
          {item}
        </motion.div>
      ))}
    </div>
  );
};

export const FuturisticTechBackground = () => {
  const mousePos = useMousePosition();

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Digital Grid Pattern */}
      <motion.div
        className="absolute inset-0 opacity-20"
        animate={{
          opacity: [0.1, 0.3, 0.1],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      >
        <svg
          className="w-full h-full"
          viewBox="0 0 100 100"
          preserveAspectRatio="none"
        >
          <defs>
            <pattern
              id="grid"
              width="10"
              height="10"
              patternUnits="userSpaceOnUse"
            >
              <path
                d="M 10 0 L 0 0 0 10"
                fill="none"
                stroke="#3b82f6"
                strokeWidth="0.2"
                opacity="0.6"
              />
            </pattern>
          </defs>
          <rect width="100" height="100" fill="url(#grid)" />
        </svg>
      </motion.div>

      {/* Floating AI/Tech Icons */}
      {["🤖", "📱", "📊", "✨", "🚀", "🌍", "💻", "🔍"].map((icon, i) => (
        <motion.div
          key={`tech-icon-${i}`}
          className="absolute"
          style={{
            fontSize: Math.random() * 20 + 25,
            left: `${Math.random() * 90 + 5}%`,
            top: `${Math.random() * 80 + 10}%`,
            filter: "drop-shadow(0 6px 12px rgba(59, 130, 246, 0.3))",
          }}
          animate={{
            y: [
              0,
              Math.sin(i * 0.8) * 60 +
                (mousePos.y - window.innerHeight / 2) * 0.02,
              Math.cos(i * 0.6) * 40,
              0,
            ],
            x: [
              0,
              Math.cos(i * 0.9) * 50 +
                (mousePos.x - window.innerWidth / 2) * 0.03,
              Math.sin(i * 0.7) * 35,
              0,
            ],
            rotate: [0, 20, -20, 0],
            scale: [1, 1.2, 0.9, 1],
          }}
          transition={{
            duration: Math.random() * 12 + 10,
            repeat: Infinity,
            ease: "easeInOut",
            delay: Math.random() * 8,
          }}
        >
          <div className="relative">
            <div className="text-blue-400/70">{icon}</div>
            <div className="absolute inset-0 text-blue-300/30 blur-sm scale-110">
              {icon}
            </div>
            <div className="absolute inset-0 text-purple-400/20 blur-md scale-125">
              {icon}
            </div>
          </div>
        </motion.div>
      ))}

      {/* Flowing Data Streams */}
      {[...Array(12)].map((_, i) => (
        <motion.div
          key={`data-stream-${i}`}
          className="absolute"
          style={{
            width: Math.random() * 200 + 100,
            height: 2,
            top: `${Math.random() * 80 + 10}%`,
            left: `-15%`,
            background: `linear-gradient(90deg,
              transparent 0%,
              rgba(59, 130, 246, 0.3) 20%,
              rgba(147, 197, 253, 0.7) 50%,
              rgba(59, 130, 246, 0.3) 80%,
              transparent 100%)`,
            borderRadius: "2px",
            filter: "blur(0.5px)",
          }}
          animate={{
            x: ["0vw", "120vw"],
            opacity: [0, 0.8, 1, 0.6, 0],
            scaleX: [0.5, 2, 1.5, 0.8, 0.5],
          }}
          transition={{
            duration: Math.random() * 8 + 6,
            repeat: Infinity,
            ease: "linear",
            delay: Math.random() * 6,
          }}
        />
      ))}

      {/* Glowing Orbs */}
      {[...Array(6)].map((_, i) => (
        <motion.div
          key={`tech-orb-${i}`}
          className="absolute rounded-full"
          style={{
            width: Math.random() * 80 + 40,
            height: Math.random() * 80 + 40,
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            background: `radial-gradient(circle,
              rgba(59, 130, 246, 0.4) 0%,
              rgba(147, 197, 253, 0.2) 40%,
              rgba(236, 72, 153, 0.1) 70%,
              transparent 100%)`,
            filter: "blur(20px)",
          }}
          animate={{
            scale: [0.8, 1.5, 1.2, 0.8],
            opacity: [0.3, 0.8, 0.5, 0.3],
            x: [0, Math.random() * 100 - 50],
            y: [0, Math.random() * 80 - 40],
          }}
          transition={{
            duration: Math.random() * 15 + 12,
            repeat: Infinity,
            ease: "easeInOut",
            delay: Math.random() * 6,
          }}
        />
      ))}

      {/* Binary Code Rain */}
      {[...Array(15)].map((_, i) => (
        <motion.div
          key={`binary-${i}`}
          className="absolute text-blue-400/30 font-mono text-xs"
          style={{
            top: `-10%`,
            left: `${Math.random() * 100}%`,
          }}
          animate={{
            y: ["0vh", "110vh"],
            opacity: [0, 0.8, 0.6, 0],
          }}
          transition={{
            duration: Math.random() * 8 + 6,
            repeat: Infinity,
            ease: "linear",
            delay: Math.random() * 4,
          }}
        >
          {Array.from({ length: 10 }, () => Math.round(Math.random())).join("")}
        </motion.div>
      ))}

      {/* Future Tech Badges */}
      {["AI", "IoT", "5G", "AR", "VR", "ML"].map((tech, i) => (
        <motion.div
          key={`tech-badge-${i}`}
          className="absolute"
          style={{
            left: `${Math.random() * 80 + 10}%`,
            top: `${Math.random() * 70 + 15}%`,
          }}
          animate={{
            y: [0, Math.sin(i * 1.2) * 30, 0],
            x: [0, Math.cos(i * 0.8) * 25, 0],
            scale: [1, 1.15, 1],
            opacity: [0.4, 0.8, 0.4],
          }}
          transition={{
            duration: Math.random() * 10 + 8,
            repeat: Infinity,
            ease: "easeInOut",
            delay: Math.random() * 6,
          }}
        >
          <div className="relative">
            <div className="px-3 py-1 bg-gradient-to-r from-blue-500/20 to-purple-500/20 backdrop-blur-sm rounded-full border border-blue-400/30 shadow-lg">
              <span className="text-blue-300/80 text-xs font-bold">{tech}</span>
            </div>
            <div className="absolute inset-0 bg-blue-400/10 rounded-full blur-md scale-110" />
          </div>
        </motion.div>
      ))}
    </div>
  );
};
