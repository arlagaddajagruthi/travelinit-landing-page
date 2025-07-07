import { motion } from "framer-motion";
import { AnimatedSection } from "./AnimatedSection";
import { FloatingIcon } from "./FloatingIcon";
import { AestheticFeaturesBackground } from "./BackgroundAnimations";
import { useStaggerAnimation } from "@/hooks/useScrollAnimation";
import {
  Shield,
  Map,
  AlertTriangle,
  Users,
  DollarSign,
  Ban,
  Bed,
  Utensils,
  Star,
} from "lucide-react";

export const FeaturesSection = () => {
  const { staggerContainer, staggerItem } = useStaggerAnimation();

  const features = [
    {
      icon: Shield,
      title: "Safety Information",
      description:
        "Real-time safety updates and comprehensive destination guides",
    },
    {
      icon: Map,
      title: "Interactive Maps",
      description: "Detailed maps with safety zones and local information",
    },
    {
      icon: AlertTriangle,
      title: "Emergency Alerts",
      description:
        "Instant notifications about potential risks and emergencies",
    },
    {
      icon: Users,
      title: "Community Support",
      description: "Connect with fellow travelers and local communities",
    },
    {
      icon: DollarSign,
      title: "Budget Tracking",
      description: "Keep track of your expenses with smart budgeting tools",
    },
    {
      icon: Ban,
      title: "Scam Protection",
      description: "Stay protected from common travel scams and frauds",
    },
    {
      icon: Bed,
      title: "Safe Accommodation",
      description: "Verified and secure lodging recommendations",
    },
    {
      icon: Utensils,
      title: "Food Safety",
      description: "Restaurant recommendations with health and safety ratings",
    },
    {
      icon: Star,
      title: "24/7 Support",
      description: "Round-the-clock assistance whenever you need help",
    },
  ];

  return (
    <section id="features" className="py-20 bg-white relative overflow-hidden">
      {/* Aesthetic Features Background */}
      <AestheticFeaturesBackground />

      <div className="container mx-auto px-4">
        <AnimatedSection className="text-center mb-16">
          <motion.h2
            whileInView={{ scale: [0.8, 1.1, 1] }}
            transition={{ duration: 1 }}
            className="text-4xl md:text-5xl font-bold text-gray-900 mb-4"
          >
            Features
          </motion.h2>
        </AnimatedSection>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 relative z-10"
        >
          {features.map((feature, index) => (
            <motion.div
              key={index}
              variants={staggerItem}
              whileHover={{
                scale: 1.05,
                boxShadow: "0 25px 50px rgba(0,0,0,0.15)",
              }}
              className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100 group relative overflow-hidden"
            >
              <motion.div
                whileHover={{
                  scale: 1.2,
                  rotate: 10,
                  boxShadow: "0 10px 25px rgba(250, 204, 21, 0.4)",
                }}
                className="w-14 h-14 sm:w-16 sm:h-16 md:w-20 md:h-20 bg-yellow-400 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-yellow-500 transition-colors shadow-lg"
              >
                <feature.icon className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 text-yellow-900" />
              </motion.div>
              <motion.h3
                whileHover={{ color: "#EAB308" }}
                className="text-xl font-bold text-gray-900 mb-4 text-center group-hover:text-yellow-600 transition-colors"
              >
                {feature.title}
              </motion.h3>
              <p className="text-gray-600 text-center leading-relaxed">
                {feature.description}
              </p>

              {/* Decorative elements */}
              <FloatingIcon delay={0} amplitude={8}>
                <motion.div
                  initial={{ opacity: 0, scale: 0 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.5, type: "spring" }}
                  className="absolute -top-4 -right-4 w-10 h-10 sm:w-12 sm:h-12 md:w-16 md:h-16 bg-yellow-300 rounded-full flex items-center justify-center shadow-lg"
                >
                  <Star className="w-4 h-4 sm:w-6 sm:h-6 md:w-8 md:h-8 text-yellow-800" />
                </motion.div>
              </FloatingIcon>

              <FloatingIcon delay={1} amplitude={6}>
                <motion.div
                  initial={{ opacity: 0, scale: 0 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.7, type: "spring" }}
                  className="absolute -bottom-4 -left-4 w-10 h-10 sm:w-12 sm:h-12 md:w-16 md:h-16 bg-orange-300 rounded-full flex items-center justify-center shadow-lg"
                >
                  <Shield className="w-4 h-4 sm:w-6 sm:h-6 md:w-8 md:h-8 text-orange-800" />
                </motion.div>
              </FloatingIcon>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};
