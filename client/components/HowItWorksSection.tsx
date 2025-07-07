import { motion } from "framer-motion";
import { AnimatedSection } from "./AnimatedSection";
import { CreativeWindSystem } from "./BackgroundAnimations";
import { useStaggerAnimation } from "@/hooks/useScrollAnimation";
import { Navigation, Shield, Heart } from "lucide-react";

export const HowItWorksSection = () => {
  const { staggerContainer, staggerItem } = useStaggerAnimation();

  const steps = [
    {
      number: "01",
      title: "Plan Your Journey",
      description:
        "Enter your destination and get comprehensive safety information and travel guidelines.",
      icon: Navigation,
    },
    {
      number: "02",
      title: "Stay Protected",
      description:
        "Receive real-time alerts and access emergency assistance whenever you need it.",
      icon: Shield,
    },
    {
      number: "03",
      title: "Enjoy Your Trip",
      description:
        "Travel with confidence knowing you have the best safety companion by your side.",
      icon: Heart,
    },
  ];

  return (
    <section
      id="how-it-works"
      className="py-20 bg-gray-50 relative overflow-hidden"
    >
      {/* Creative Wind System Background */}
      <CreativeWindSystem />

      <div className="container mx-auto px-4 text-center">
        <AnimatedSection>
          <motion.h2
            whileInView={{ scale: [0.8, 1.1, 1] }}
            transition={{ duration: 1 }}
            className="text-4xl md:text-5xl font-bold text-gray-900 mb-16"
          >
            How it works
          </motion.h2>
        </AnimatedSection>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid md:grid-cols-3 gap-12 relative z-10"
        >
          {steps.map((step, index) => (
            <motion.div key={index} variants={staggerItem} className="relative">
              <motion.div
                whileInView={{ scale: [0, 1], rotate: [0, 360] }}
                transition={{ duration: 1.5, delay: 0.3 }}
                className="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 bg-yellow-400 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg"
              >
                <step.icon className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 text-yellow-900" />
              </motion.div>

              <motion.div
                whileInView={{ scale: [0, 1] }}
                transition={{ duration: 0.8, delay: 0.5 }}
                className="text-6xl font-bold text-yellow-400/20 mb-4"
              >
                {step.number}
              </motion.div>

              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                {step.title}
              </h3>

              <p className="text-gray-600 leading-relaxed max-w-sm mx-auto">
                {step.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};
