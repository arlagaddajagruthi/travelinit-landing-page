import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { AnimatedSection } from "./AnimatedSection";
import { CreativeFloatingElements } from "./BackgroundAnimations";
import { Mail, MapPin } from "lucide-react";

export const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log("Form submitted:", formData);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <section id="contact" className="py-20 bg-white relative overflow-hidden">
      {/* Creative Floating Elements Background */}
      <CreativeFloatingElements />

      <div className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto">
          <AnimatedSection>
            <motion.h2
              whileInView={{ scale: [0.8, 1.05, 1] }}
              transition={{ duration: 1 }}
              className="text-4xl md:text-5xl font-bold text-gray-900 mb-4 text-center"
            >
              Get in Touch
            </motion.h2>
            <motion.p
              whileInView={{ opacity: [0, 1], y: [20, 0] }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-xl text-gray-600 text-center mb-12"
            >
              Have questions or feedback? We'd love to hear from you!
            </motion.p>
          </AnimatedSection>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="bg-white p-8 rounded-2xl shadow-xl border border-gray-100 relative z-10"
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <motion.div
                whileInView={{ opacity: [0, 1], x: [-20, 0] }}
                transition={{ duration: 0.6, delay: 0.1 }}
              >
                <Input
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full p-4 text-lg rounded-xl border-2 border-gray-200 focus:border-yellow-400 focus:ring-2 focus:ring-yellow-200 transition-all"
                  required
                />
              </motion.div>

              <motion.div
                whileInView={{ opacity: [0, 1], x: [-20, 0] }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <Input
                  type="email"
                  name="email"
                  placeholder="Your Email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full p-4 text-lg rounded-xl border-2 border-gray-200 focus:border-yellow-400 focus:ring-2 focus:ring-yellow-200 transition-all"
                  required
                />
              </motion.div>

              <motion.div
                whileInView={{ opacity: [0, 1], x: [-20, 0] }}
                transition={{ duration: 0.6, delay: 0.3 }}
              >
                <Textarea
                  name="message"
                  placeholder="Your Message"
                  rows={6}
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full p-4 text-lg rounded-xl border-2 border-gray-200 focus:border-yellow-400 focus:ring-2 focus:ring-yellow-200 transition-all resize-none"
                  required
                />
              </motion.div>

              <motion.div
                whileInView={{ opacity: [0, 1], y: [20, 0] }}
                transition={{ duration: 0.6, delay: 0.4 }}
                whileHover={{
                  scale: 1.05,
                  boxShadow: "0 20px 40px rgba(250, 204, 21, 0.4)",
                }}
                whileTap={{ scale: 0.95 }}
              >
                <Button
                  type="submit"
                  className="w-full bg-yellow-400 hover:bg-yellow-500 text-yellow-900 font-bold py-4 text-xl rounded-xl shadow-lg hover:shadow-xl transition-all"
                >
                  Send Message
                </Button>
              </motion.div>
            </form>

            <motion.div
              whileInView={{ opacity: [0, 1], y: [20, 0] }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="mt-8 pt-8 border-t border-gray-200 flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-8 text-gray-600"
            >
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="flex items-center space-x-2"
              >
                <Mail className="w-5 h-5 text-yellow-500" />
                <span>contact@travelitin.com</span>
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="flex items-center space-x-2"
              >
                <MapPin className="w-5 h-5 text-yellow-500" />
                <span>Global Support</span>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
