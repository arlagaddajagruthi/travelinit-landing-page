import { useStaggerAnimation } from "@/hooks/useScrollAnimation";
import { motion } from "framer-motion";
import { Cpu, Rocket, Star, Zap } from "lucide-react";
import { AnimatedSection } from "./AnimatedSection";
import { FuturisticTechBackground } from "./BackgroundAnimations";

export const UpcomingFeaturesSection = () => {
  const { staggerContainer, staggerItem } = useStaggerAnimation();

  const upcomingFeatures = [
    {
      icon: Cpu,
      title: "AI Travel Assistant",
      description:
        "Personalized recommendations powered by advanced artificial intelligence and machine learning algorithms",
      status: "Coming Q1 2025",
      color: "from-blue-400 to-cyan-400",
    },
    {
      icon: Zap,
      title: "Offline Maps & Navigation",
      description:
        "Lightning-fast access to detailed maps and navigation even without internet connection",
      status: "Coming Q2 2025",
      color: "from-purple-400 to-pink-400",
    },
    {
      icon: Rocket,
      title: "Smart Group Planning",
      description:
        "Next-generation collaborative trip planning with real-time synchronization and AI optimization",
      status: "Coming Q3 2025",
      color: "from-green-400 to-emerald-400",
    },
  ];

  return (
    <section
      id="upcoming"
      className="py-20 bg-gradient-to-br from-slate-50 via-blue-50 to-purple-50 relative overflow-hidden"
    >
      {/* Futuristic Tech Background */}
      <FuturisticTechBackground />

      <div className="container mx-auto px-4 relative z-10">
        <AnimatedSection className="text-center mb-16">
          <motion.div
            whileInView={{ scale: [0, 1], rotate: [0, 360] }}
            transition={{ duration: 1.5 }}
          >
            <Star className="w-20 h-20 text-yellow-400 mx-auto mb-8 drop-shadow-lg" />
          </motion.div>
          <motion.h2
            whileInView={{ scale: [0.8, 1.05, 1] }}
            transition={{ duration: 1 }}
            className="text-4xl md:text-5xl font-bold text-gray-900 mb-4"
          >
            Upcoming Features
          </motion.h2>
          <motion.p
            whileInView={{ opacity: [0, 1], y: [20, 0] }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-xl text-gray-600 max-w-2xl mx-auto"
          >
            Exciting new features are on the horizon to make your travel
            experience even better
          </motion.p>
        </AnimatedSection>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-3 gap-8"
        >
          {upcomingFeatures.map((feature, index) => (
            <motion.div
              key={index}
              variants={staggerItem}
              whileHover={{
                scale: 1.05,
                boxShadow: "0 25px 50px rgba(0,0,0,0.15)",
              }}
              className="bg-white/80 backdrop-blur-sm p-8 rounded-3xl border border-white/20 text-center group shadow-xl hover:shadow-2xl transition-all duration-300"
            >
              <motion.div
                whileHover={{ scale: 1.15, rotate: 5 }}
                className={`w-20 h-20 bg-gradient-to-r ${feature.color} rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-xl group-hover:shadow-2xl transition-all duration-300`}
              >
                <feature.icon className="w-10 h-10 text-white drop-shadow-lg" />
              </motion.div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:bg-gradient-to-r group-hover:from-blue-600 group-hover:to-purple-600 group-hover:bg-clip-text group-hover:text-transparent transition-all duration-300">
                {feature.title}
              </h3>
              <p className="text-gray-600 mb-8 leading-relaxed text-sm">
                {feature.description}
              </p>
              <motion.div
                whileHover={{
                  scale: 1.05,
                  boxShadow: "0 10px 25px rgba(59, 130, 246, 0.3)",
                }}
                className={`inline-block px-6 py-3 bg-gradient-to-r ${feature.color} text-white rounded-full text-sm font-bold shadow-lg hover:shadow-xl transition-all duration-300`}
              >
                {feature.status}
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};
