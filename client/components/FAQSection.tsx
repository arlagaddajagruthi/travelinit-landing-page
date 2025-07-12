import { useStaggerAnimation } from "@/hooks/useScrollAnimation";
import { motion } from "framer-motion";
import { CheckCircle } from "lucide-react";
import { useState } from "react";
import { AnimatedSection } from "./AnimatedSection";
import { CreativeParticleSnow } from "./BackgroundAnimations";

export const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const { staggerContainer, staggerItem } = useStaggerAnimation();

  const faqs = [
    {
      question: "Is Travelitin free to use?",
      answer:
        "Yes! Travelitin offers a comprehensive free tier with essential safety features including real-time alerts, basic maps, and community support. We also offer premium plans starting at $9.99/month with advanced features like AI travel assistant, offline maps, and priority 24/7 support.",
    },
    {
      question: "How accurate and up-to-date is the safety information?",
      answer:
        "Our safety information is sourced from government travel advisories, local embassies, WHO health updates, and verified user reports. Our AI system updates information every 15 minutes, and our safety experts review critical alerts within 30 minutes.",
    },
    {
      question: "Can I use Travelitin offline without internet?",
      answer:
        "Yes! Premium users can download comprehensive offline packages including detailed maps, safety zones, emergency contacts, and transportation hubs for any destination. The offline mode works for up to 30 days.",
    },
    {
      question: "How does Travelitin protect my personal data?",
      answer:
        "We use enterprise-grade encryption for all data transmission and storage. Your location data is anonymized and never shared with third parties. We're GDPR compliant and you can delete your account and data at any time.",
    },
    {
      question: "What should I do in case of an emergency while traveling?",
      answer:
        "Travelitin provides multiple emergency options: one-tap emergency button for local services, 24/7 multilingual support, automatic location sharing with emergency contacts, and direct connection to embassies when needed.",
    },
    {
      question: "Which countries does Travelitin cover?",
      answer:
        "Travelitin provides comprehensive coverage for 195+ countries and territories worldwide, including detailed safety data for over 10,000 cities and remote destinations.",
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
