import { motion } from "framer-motion";
import { AnimatedSection } from "./AnimatedSection";
import { ParallaxElement } from "./ParallaxElement";
import { RichAboutBackground } from "./BackgroundAnimations";

export const AboutSection = () => {
  return (
    <section id="about" className="py-20 bg-white relative overflow-hidden">
      {/* Rich About Us Background */}
      <RichAboutBackground />

      <ParallaxElement offset={30}>
        <div className="absolute top-10 right-10 w-16 h-16 sm:w-24 sm:h-24 md:w-32 md:h-32 bg-yellow-100 rounded-full opacity-20" />
      </ParallaxElement>
      <ParallaxElement offset={-20}>
        <div className="absolute bottom-10 left-10 w-12 h-12 sm:w-18 sm:h-18 md:w-24 md:h-24 bg-orange-100 rounded-full opacity-30" />
      </ParallaxElement>

      <div className="container mx-auto px-4 relative z-10">
        <AnimatedSection className="text-center mb-16">
          <motion.h2
            whileInView={{ scale: [0.8, 1.05, 1] }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-5xl font-bold text-gray-900 mb-4"
          >
            About{" "}
            <span className="bg-gradient-to-r from-yellow-600 via-orange-600 to-yellow-600 bg-clip-text text-transparent">
              SafeWander
            </span>
          </motion.h2>
          <motion.p
            whileInView={{ opacity: [0, 1], y: [20, 0] }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed"
          >
            Born from our own travel mishaps and amazing discoveries, SafeWander
            is built by travelers, for travelers. We believe everyone deserves
            to explore this beautiful world with confidence and connect with
            like-minded adventurers along the way.
          </motion.p>
        </AnimatedSection>

        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              title: "Our Mission",
              description:
                "To turn every travel dream into reality by connecting adventurers with the right information, people, and experiences.",
              icon: "🎯",
            },
            {
              title: "Our Vision",
              description:
                "A global community where sharing travel experiences, tips, and safety advice creates unforgettable journeys for everyone.",
              icon: "🌟",
            },
            {
              title: "Our Values",
              description:
                "Real connections, authentic stories, looking out for each other, and believing that the best adventures happen when we explore together.",
              icon: "❤️",
            },
          ].map((item, index) => (
            <AnimatedSection key={index} delay={index * 0.2}>
              <motion.div
                whileHover={{
                  scale: 1.05,
                  boxShadow: "0 20px 40px rgba(0,0,0,0.1)",
                }}
                className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100 text-center group"
              >
                <motion.div
                  whileHover={{ scale: 1.2, rotate: 10 }}
                  className="text-4xl mb-4"
                >
                  {item.icon}
                </motion.div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-yellow-600 transition-colors">
                  {item.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {item.description}
                </p>
              </motion.div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
};
