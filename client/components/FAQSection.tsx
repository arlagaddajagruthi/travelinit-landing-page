import { useState } from "react";
import { motion } from "framer-motion";
import { AnimatedSection } from "./AnimatedSection";
import { CreativeParticleSnow } from "./BackgroundAnimations";
import { useStaggerAnimation } from "@/hooks/useScrollAnimation";
import { CheckCircle } from "lucide-react";

export const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const { staggerContainer, staggerItem } = useStaggerAnimation();

  const faqs = [
    {
      question: "Is Travelitin free to use?",
      answer:
        "Yes! Travelitin offers a comprehensive free tier with essential safety features. We also offer premium plans with advanced features for frequent travelers.",
    },
    {
      question: "How accurate is the safety information?",
      answer:
        "Our safety information is sourced from reliable government agencies, local authorities, and real-time data feeds, updated continuously for accuracy.",
    },
    {
      question: "Can I use Travelitin offline?",
      answer:
        "Yes! You can download essential safety information and maps for offline use when internet connectivity is limited.",
    },
    {
      question: "Is my personal information secure?",
      answer:
        "Absolutely. We use enterprise-grade encryption and never share your personal data with third parties. Your privacy is our priority.",
    },
    {
      question: "How do I get emergency assistance?",
      answer:
        "Travelitin provides 24/7 emergency support through our app. You can instantly connect with local emergency services and our support team.",
    },
  ];

  return (
    <section className="py-20 bg-gray-50 relative overflow-hidden">
      {/* Creative Particle Snow Background */}
      <CreativeParticleSnow />

      <div className="container mx-auto px-4 text-center">
        <AnimatedSection>
          <motion.h2
            whileInView={{ scale: [0.8, 1.05, 1] }}
            transition={{ duration: 1 }}
            className="text-4xl md:text-5xl font-bold text-gray-900 mb-16"
          >
            Frequently Asked Questions
          </motion.h2>
        </AnimatedSection>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="max-w-3xl mx-auto space-y-6 relative z-10"
        >
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              variants={staggerItem}
              whileHover={{ scale: 1.02 }}
              className="bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden"
            >
              <motion.button
                whileHover={{ backgroundColor: "rgba(254, 240, 138, 0.1)" }}
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full p-6 text-left flex items-center justify-between hover:bg-yellow-50 transition-colors"
              >
                <span className="text-lg font-semibold text-gray-900">
                  {faq.question}
                </span>
                <motion.div
                  animate={{ rotate: openIndex === index ? 45 : 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <CheckCircle className="w-6 h-6 text-yellow-500" />
                </motion.div>
              </motion.button>
              <motion.div
                initial={false}
                animate={{
                  height: openIndex === index ? "auto" : 0,
                  opacity: openIndex === index ? 1 : 0,
                }}
                transition={{ duration: 0.3, ease: "easeInOut" }}
                className="overflow-hidden"
              >
                <div className="p-6 pt-0 text-gray-600 leading-relaxed">
                  {faq.answer}
                </div>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};
