import { Button } from "@/components/ui/button";
import { useStaggerAnimation } from "@/hooks/useScrollAnimation";
import { motion } from "framer-motion";
import { AlertTriangle, ArrowDown, Download, Play, Shield } from "lucide-react";
import { CreativeClouds } from "./BackgroundAnimations";

export const HeroSection = () => {
  const { staggerContainer, staggerItem } = useStaggerAnimation();

  return (
    <section
      id="home"
      className="relative min-h-screen flex flex-col overflow-hidden"
      style={{
        backgroundImage: `url('https://cdn.builder.io/api/v1/image/assets%2F33aab6c1f232494f879f8655f36222ea%2F5d9e6b785e1844c29024d2a6122d071b?format=webp&width=800')`,
        backgroundSize: "cover",
        backgroundPosition: "center 25%",
        backgroundRepeat: "no-repeat",
      }}
    >
      {/* Animated Gradient Overlay */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 2 }}
        className="absolute inset-0"
      >
        <motion.div
          animate={{
            background: [
              "linear-gradient(45deg, rgba(0,0,0,0.4) 0%, rgba(0,0,0,0.2) 50%, rgba(0,0,0,0.1) 100%)",
              "linear-gradient(45deg, rgba(0,0,0,0.3) 0%, rgba(59,130,246,0.1) 30%, rgba(0,0,0,0.2) 100%)",
              "linear-gradient(45deg, rgba(0,0,0,0.4) 0%, rgba(251,191,36,0.1) 50%, rgba(0,0,0,0.1) 100%)",
              "linear-gradient(45deg, rgba(0,0,0,0.4) 0%, rgba(0,0,0,0.2) 50%, rgba(0,0,0,0.1) 100%)",
            ],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute inset-0"
        />
        <motion.div
          animate={{
            opacity: [0.1, 0.3, 0.1],
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute inset-0 bg-gradient-radial from-yellow-400/20 via-transparent to-transparent"
        />
      </motion.div>

      {/* Creative Clouds Background */}
      <CreativeClouds />

      {/* Floating Safety Icons */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          initial={{ opacity: 0, scale: 0, y: 50 }}
          animate={{ opacity: 0.8, scale: 1, y: 0 }}
          transition={{
            duration: 1.2,
            delay: 3,
            type: "spring",
            stiffness: 100,
            damping: 10,
          }}
          className="absolute top-1/4 right-1/3"
        >
          <motion.div
            animate={{
              y: [0, -15, 0],
              rotate: [0, 5, -5, 0],
              scale: [1, 1.05, 1],
            }}
            transition={{
              duration: 6,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            whileHover={{
              scale: 1.2,
              rotate: 10,
              boxShadow: "0 10px 30px rgba(255, 255, 255, 0.3)",
            }}
            className="w-12 h-12 sm:w-16 sm:h-16 bg-white/15 backdrop-blur-sm rounded-full flex items-center justify-center border border-white/30 shadow-lg cursor-pointer"
          >
            <motion.div
              animate={{
                rotate: [0, 360],
              }}
              transition={{
                duration: 20,
                repeat: Infinity,
                ease: "linear",
              }}
            >
              <Shield className="w-6 h-6 sm:w-8 sm:h-8 text-white drop-shadow-lg" />
            </motion.div>
            <motion.div
              className="absolute inset-0 rounded-full bg-white/20"
              initial={{ scale: 0, opacity: 0 }}
              whileHover={{ scale: 1.5, opacity: 0.3 }}
              transition={{ duration: 0.3 }}
            />
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0, y: 50 }}
          animate={{ opacity: 0.8, scale: 1, y: 0 }}
          transition={{
            duration: 1.2,
            delay: 3.5,
            type: "spring",
            stiffness: 100,
            damping: 10,
          }}
          className="absolute top-2/3 right-1/4"
        >
          <motion.div
            animate={{
              y: [0, 12, 0],
              rotate: [0, -5, 5, 0],
              scale: [1, 1.08, 1],
            }}
            transition={{
              duration: 5,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 1,
            }}
            whileHover={{
              scale: 1.2,
              rotate: -10,
              boxShadow: "0 10px 30px rgba(255, 255, 255, 0.3)",
            }}
            className="w-12 h-12 sm:w-16 sm:h-16 bg-white/15 backdrop-blur-sm rounded-full flex items-center justify-center border border-white/30 shadow-lg cursor-pointer"
          >
            <motion.div
              animate={{
                scale: [1, 1.1, 1],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            >
              <AlertTriangle className="w-6 h-6 sm:w-8 sm:h-8 text-white drop-shadow-lg" />
            </motion.div>
            <motion.div
              className="absolute inset-0 rounded-full bg-white/20"
              initial={{ scale: 0, opacity: 0 }}
              whileHover={{ scale: 1.5, opacity: 0.3 }}
              transition={{ duration: 0.3 }}
            />
          </motion.div>
        </motion.div>

        {/* Additional floating icon */}
        <motion.div
          initial={{ opacity: 0, scale: 0, x: -50 }}
          animate={{ opacity: 0.7, scale: 1, x: 0 }}
          transition={{
            duration: 1.2,
            delay: 4,
            type: "spring",
            stiffness: 80,
          }}
          className="absolute top-1/2 left-1/4 hidden md:block"
        >
          <motion.div
            animate={{
              y: [0, -8, 0],
              x: [0, 5, 0],
              rotate: [0, 3, -3, 0],
            }}
            transition={{
              duration: 7,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 2,
            }}
            className="w-10 h-10 sm:w-12 sm:h-12 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center border border-white/25"
          >
            <motion.div
              animate={{
                rotate: [0, -360],
              }}
              transition={{
                duration: 15,
                repeat: Infinity,
                ease: "linear",
              }}
              className="text-white/80 text-lg"
            >
              ✨
            </motion.div>
          </motion.div>
        </motion.div>
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
                initial={{ opacity: 0, scale: 0.5, y: 50 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                transition={{
                  duration: 1.2,
                  delay: 0.3,
                  ease: [0.175, 0.885, 0.32, 1.275],
                  type: "spring",
                  stiffness: 100,
                  damping: 10,
                }}
                className="block bg-gradient-to-r from-yellow-400 via-orange-400 to-yellow-400 bg-clip-text text-transparent drop-shadow-2xl"
              >
                <motion.span
                  animate={{
                    textShadow: [
                      "0 0 20px rgba(251, 191, 36, 0.5)",
                      "0 0 40px rgba(251, 191, 36, 0.8)",
                      "0 0 20px rgba(251, 191, 36, 0.5)",
                    ],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                >
                  Stay Safe,
                </motion.span>
              </motion.span>
              <motion.span
                initial={{ opacity: 0, x: -100, rotateX: 90 }}
                animate={{ opacity: 1, x: 0, rotateX: 0 }}
                transition={{
                  duration: 1,
                  delay: 0.8,
                  ease: [0.25, 0.46, 0.45, 0.94],
                  type: "spring",
                  stiffness: 80,
                }}
                className="block"
              >
                Travel Smart
              </motion.span>
            </motion.h1>

            {/* Subtitle */}
            <motion.p
              initial={{ opacity: 0, y: 30, blur: 10 }}
              animate={{ opacity: 1, y: 0, blur: 0 }}
              transition={{
                duration: 0.8,
                delay: 1.2,
                ease: [0.25, 0.46, 0.45, 0.94],
              }}
              className="text-xl md:text-2xl text-white/90 mb-6 max-w-2xl mx-auto leading-relaxed drop-shadow-lg"
            >
              <motion.span
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 1.5 }}
              >
                Your ultimate companion for safe and unforgettable journeys
                around the world with
              </motion.span>
              <motion.span
                initial={{ opacity: 0, color: "rgb(255 255 255 / 0.9)" }}
                animate={{
                  opacity: 1,
                  color: [
                    "rgb(255 255 255 / 0.9)",
                    "rgb(251 191 36)",
                    "rgb(255 255 255 / 0.9)",
                  ],
                }}
                transition={{
                  opacity: { duration: 0.5, delay: 1.8 },
                  color: {
                    duration: 2,
                    delay: 2,
                    repeat: Infinity,
                    ease: "easeInOut",
                  },
                }}
                className="font-semibold"
              >
                real-time safety updates
              </motion.span>
              <motion.span
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 2.1 }}
              >
                {" "}
                and expert guidance
              </motion.span>
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 2.5, ease: "easeOut" }}
              className="flex flex-col sm:flex-row gap-4 justify-center items-center"
            >
              <motion.div
                whileHover={{
                  scale: 1.08,
                  rotateY: 5,
                  boxShadow: "0 25px 50px rgba(250, 204, 21, 0.5)",
                }}
                whileTap={{ scale: 0.92, rotateY: 0 }}
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 2.7 }}
              >
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-yellow-400 to-orange-400 hover:from-yellow-500 hover:to-orange-500 text-yellow-900 font-bold px-10 py-5 rounded-full text-lg shadow-2xl relative overflow-hidden group"
                >
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-yellow-300 to-orange-300"
                    initial={{ x: "-100%", skewX: -15 }}
                    whileHover={{ x: "100%", skewX: -15 }}
                    transition={{ duration: 0.6, ease: "easeInOut" }}
                  />
                  <motion.div
                    className="absolute inset-0 bg-white/20"
                    initial={{ scale: 0, opacity: 0 }}
                    whileHover={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 0.3 }}
                  />
                  <span className="relative z-10 flex items-center">
                    <motion.div
                      whileHover={{ rotate: 180, scale: 1.2 }}
                      transition={{ duration: 0.3 }}
                    >
                      <Download className="mr-2 w-5 h-5" />
                    </motion.div>
                    Download Free App
                  </span>
                </Button>
              </motion.div>

              <motion.div
                whileHover={{
                  scale: 1.08,
                  rotateY: -5,
                  backgroundColor: "rgba(255, 255, 255, 0.95)",
                  color: "rgb(31, 41, 55)",
                }}
                whileTap={{ scale: 0.92, rotateY: 0 }}
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 2.9 }}
              >
                <Button
                  variant="outline"
                  size="lg"
                  className="border-white text-white bg-white/10 hover:bg-white hover:text-gray-900 px-8 py-4 rounded-full text-lg backdrop-blur-sm border-2 shadow-2xl relative overflow-hidden"
                >
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-white/20 to-white/40"
                    initial={{ scale: 0, rotate: 45 }}
                    whileHover={{ scale: 1.5, rotate: 45 }}
                    transition={{ duration: 0.4 }}
                  />
                  <span className="relative z-10 flex items-center">
                    <motion.div
                      whileHover={{ scale: 1.3 }}
                      animate={{ rotate: [0, 5, -5, 0] }}
                      transition={{
                        scale: { duration: 0.2 },
                        rotate: {
                          duration: 2,
                          repeat: Infinity,
                          ease: "easeInOut",
                        },
                      }}
                    >
                      <Play className="mr-2 w-5 h-5" />
                    </motion.div>
                    Watch Demo
                  </span>
                </Button>
              </motion.div>
            </motion.div>

            {/* Value Proposition */}
            <motion.div
              variants={staggerItem}
              className="mt-8 text-white/70 text-sm"
            ></motion.div>
          </motion.div>
        </div>
      </div>

      {/* Enhanced Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0, y: 30, scale: 0.8 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{
          duration: 1,
          delay: 4.5,
          type: "spring",
          stiffness: 100,
          damping: 10,
        }}
        className="absolute bottom-4 sm:bottom-8 left-0 right-0 z-10 flex justify-center items-center px-4"
      >
        <motion.div
          animate={{
            y: [0, 12, 0],
          }}
          transition={{
            duration: 2.5,
            repeat: Infinity,
            ease: "easeInOut",
            repeatType: "reverse",
          }}
          whileHover={{
            scale: 1.1,
            y: -5,
          }}
          whileTap={{
            scale: 0.95,
          }}
          className="text-white/80 text-center cursor-pointer flex flex-col items-center group"
          onClick={() =>
            document
              .getElementById("about")
              ?.scrollIntoView({ behavior: "smooth" })
          }
        >
          <motion.div
            className="text-sm sm:text-base mb-3 whitespace-nowrap font-medium"
            animate={{
              opacity: [0.7, 1, 0.7],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            Scroll to explore
          </motion.div>
          <motion.div
            animate={{
              y: [0, 5, 0],
              scale: [1, 1.1, 1],
            }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 0.3,
            }}
            className="relative"
          >
            <ArrowDown className="w-5 h-5 sm:w-6 sm:h-6" />
            <motion.div
              className="absolute inset-0 border border-white/30 rounded-full"
              animate={{
                scale: [1, 1.5, 2],
                opacity: [0.5, 0.2, 0],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeOut",
              }}
            />
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
};
