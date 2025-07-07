import { motion } from "framer-motion";
import { AnimatedSection } from "./AnimatedSection";
import { CreativeOceanWorld } from "./BackgroundAnimations";
import { useStaggerAnimation } from "@/hooks/useScrollAnimation";
import { Star } from "lucide-react";

export const UpcomingFeaturesSection = () => {
  const { staggerContainer, staggerItem } = useStaggerAnimation();

  const upcomingFeatures = [
    {
      title: "AI Travel Assistant",
      description:
        "Personalized recommendations powered by artificial intelligence",
      status: "Coming Q1 2024",
    },
    {
      title: "Offline Maps",
      description: "Access detailed maps even without internet connection",
      status: "Coming Q2 2024",
    },
    {
      title: "Group Travel Planning",
      description: "Coordinate and plan trips with friends and family",
      status: "Coming Q2 2024",
    },
  ];

  return (
    <section id="upcoming" className="py-20 bg-white relative overflow-hidden">
      {/* Creative Ocean World Background */}
      <CreativeOceanWorld />

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
              className="bg-gradient-to-br from-yellow-50 to-orange-50 p-8 rounded-2xl border border-yellow-200 text-center group"
            >
              <motion.div
                whileHover={{ scale: 1.2, rotate: 10 }}
                className="w-16 h-16 bg-yellow-400 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg group-hover:bg-yellow-500 transition-colors"
              >
                <Star className="w-8 h-8 text-yellow-900" />
              </motion.div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-yellow-600 transition-colors">
                {feature.title}
              </h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                {feature.description}
              </p>
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="inline-block px-4 py-2 bg-yellow-400 text-yellow-900 rounded-full text-sm font-semibold shadow-md"
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
