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

  const featureCategories = [
    {
      category: "Safety & Security",
      color: "from-red-400 to-red-600",
      features: [
        {
          icon: Shield,
          title: "Real-time Safety Intelligence",
          description:
            "AI-powered safety updates with government advisories, local incidents, and crowd-sourced reports from verified travelers",
          badge: "AI-Powered",
        },
        {
          icon: AlertTriangle,
          title: "Instant Emergency Alerts",
          description:
            "Immediate push notifications for natural disasters, political unrest, health emergencies, and security threats in your area",
          badge: "Real-time",
        },
        {
          icon: Ban,
          title: "Advanced Scam Protection",
          description:
            "Machine learning algorithms detect and warn against common tourist scams, fake booking sites, and fraudulent activities",
          badge: "ML-Protected",
        },
      ],
    },
    {
      category: "Navigation & Discovery",
      color: "from-blue-400 to-blue-600",
      features: [
        {
          icon: Map,
          title: "Smart Interactive Maps",
          description:
            "Offline-capable maps with safety zones, verified attractions, local transportation hubs, and emergency service locations",
          badge: "Offline Ready",
        },
        {
          icon: Bed,
          title: "Verified Safe Stays",
          description:
            "Curated accommodations with safety certifications, verified reviews from solo travelers, and 24/7 host verification",
          badge: "Verified",
        },
        {
          icon: Utensils,
          title: "Trusted Food & Dining",
          description:
            "Restaurant recommendations with hygiene ratings, dietary accommodations, and local cuisine guides from food safety experts",
          badge: "Expert Rated",
        },
      ],
    },
    {
      category: "Community & Support",
      color: "from-green-400 to-green-600",
      features: [
        {
          icon: Users,
          title: "Global Traveler Network",
          description:
            "Connect with verified travelers, join local meetups, find travel buddies, and access community-driven safety insights",
          badge: "2M+ Members",
        },
        {
          icon: Star,
          title: "24/7 Concierge Support",
          description:
            "Round-the-clock multilingual assistance with emergency coordination, travel rebooking, and local expert consultations",
          badge: "Always Available",
        },
        {
          icon: DollarSign,
          title: "Smart Budget Assistant",
          description:
            "AI-powered expense tracking with local price comparisons, currency conversion, and spending optimization recommendations",
          badge: "AI Assistant",
        },
      ],
    },
  ];

  return (
    <section id="features" className="py-20 bg-white relative overflow-hidden">
      {/* Aesthetic Features Background */}
      <AestheticFeaturesBackground />

      <div className="container mx-auto px-4">
        <AnimatedSection className="text-center mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-block bg-yellow-100 text-yellow-800 px-4 py-2 rounded-full text-sm font-semibold mb-4"
          >
            Everything You Need for Safe Travel
          </motion.div>
          <motion.h2
            whileInView={{ scale: [0.8, 1.1, 1] }}
            transition={{ duration: 1 }}
            className="text-4xl md:text-6xl font-bold text-gray-900 mb-6"
          >
            Comprehensive Travel
            <span className="bg-gradient-to-r from-yellow-400 to-orange-400 bg-clip-text text-transparent">
              {" "}
              Safety Suite
            </span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed"
          >
            From real-time safety intelligence to 24/7 support, discover how our
            platform keeps millions of travelers safe worldwide
          </motion.p>
        </AnimatedSection>

        <div className="space-y-20">
          {featureCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.category}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: categoryIndex * 0.2 }}
              viewport={{ once: true, margin: "-50px" }}
              className="relative"
            >
              {/* Category Header */}
              <div className="text-center mb-12">
                <motion.div
                  whileInView={{ scale: [0.8, 1.1, 1] }}
                  transition={{ duration: 0.8 }}
                  className={`inline-block px-6 py-3 rounded-full bg-gradient-to-r ${category.color} text-white font-bold text-lg mb-4 shadow-lg`}
                >
                  {category.category}
                </motion.div>
              </div>

              {/* Features Grid */}
              <motion.div
                variants={staggerContainer}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-50px" }}
                className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 relative z-10"
              >
                {category.features.map((feature, index) => (
                  <motion.div
                    key={index}
                    variants={staggerItem}
                    whileHover={{
                      y: -8,
                      boxShadow: "0 20px 40px rgba(0,0,0,0.1)",
                    }}
                    className="bg-white p-8 rounded-3xl shadow-xl border border-gray-100 group relative overflow-hidden"
                  >
                    {/* Badge */}
                    <motion.div
                      initial={{ opacity: 0, scale: 0 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ delay: 0.3, type: "spring" }}
                      className="absolute top-4 right-4 bg-yellow-400 text-yellow-900 px-3 py-1 rounded-full text-xs font-bold"
                    >
                      {feature.badge}
                    </motion.div>

                    <motion.div
                      whileHover={{
                        scale: 1.1,
                        rotate: 5,
                      }}
                      className={`w-16 h-16 bg-gradient-to-r ${category.color} rounded-2xl flex items-center justify-center mb-6 shadow-lg`}
                    >
                      <feature.icon className="w-8 h-8 text-white" />
                    </motion.div>

                    <motion.h3 className="text-xl font-bold text-gray-900 mb-4 leading-tight">
                      {feature.title}
                    </motion.h3>

                    <p className="text-gray-600 leading-relaxed text-sm">
                      {feature.description}
                    </p>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
