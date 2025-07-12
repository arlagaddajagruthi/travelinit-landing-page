import { motion } from "framer-motion";
import {
  Facebook,
  Instagram,
  Linkedin,
  Mail,
  MapPin,
  Phone,
  Twitter,
  Youtube
} from "lucide-react";

export const Footer = () => {
  const mainLinks = [
    { name: "About", href: "#about" },
    { name: "Features", href: "#features" },
    { name: "Contact", href: "#contact" },
    { name: "Feedback Form", href: "#feedback" },
  ];

  const legalLinks = [
    { name: "Privacy Policy", href: "#privacy" },
    { name: "Terms of Use", href: "#terms" },
  ];

  const socialLinks = [
    { icon: Facebook, href: "#", name: "Facebook" },
    { icon: Twitter, href: "#", name: "Twitter" },
    { icon: Instagram, href: "#", name: "Instagram" },
    { icon: Linkedin, href: "#", name: "LinkedIn" },
    { icon: Youtube, href: "#", name: "YouTube" },
  ];

  const contactInfo = [
    {
      icon: Mail,
      text: "support@travelitin.com",
      href: "mailto:support@travelitin.com",
    },
    { icon: Phone, text: "+1 (555) 123-4567", href: "tel:+15551234567" },
    { icon: MapPin, text: "San Francisco, CA", href: "#" },
  ];

  return (
    <footer className="bg-[#111827] text-white py-16 relative overflow-hidden">
      <div className="container mx-auto px-4 relative z-10">
        {/* Main Content */}
        <div className="text-center mb-12">
          {/* Logo */}
          <motion.img
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            whileHover={{ scale: 1.05 }}
            src="/logo.jpg"
            alt="Travelitin Logo"
            className="h-12 w-auto mx-auto mb-8"
          />

          {/* Main Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex flex-wrap justify-center gap-8 mb-8"
          >
            {mainLinks.map((link, index) => (
              <motion.a
                key={link.name}
                href={link.href}
                whileHover={{
                  color: "#FDE047",
                  scale: 1.05,
                }}
                className="text-white hover:text-yellow-300 transition-all duration-200 font-medium"
              >
                {link.name}
              </motion.a>
            ))}
          </motion.div>

          {/* Contact Email */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mb-8"
          >
            <motion.a
              href="mailto:contact@travelinit.com"
              whileHover={{ color: "#FDE047", scale: 1.05 }}
              className="flex items-center justify-center gap-2 text-white hover:text-yellow-300 transition-all duration-200"
            >
              <Mail className="w-5 h-5" />
              <span>contact@travelinit.com</span>
            </motion.a>
          </motion.div>

          {/* Social Media Icons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="flex justify-center gap-4 mb-12"
          >
            {socialLinks.map((social, index) => (
              <motion.a
                key={social.name}
                href={social.href}
                whileHover={{ scale: 1.2, y: -2 }}
                whileTap={{ scale: 0.9 }}
                className="w-10 h-10 bg-gray-700 hover:bg-yellow-400 hover:text-gray-900 rounded-full flex items-center justify-center transition-all duration-200"
                title={social.name}
              >
                <social.icon className="w-5 h-5 text-yellow-400 hover:text-gray-900 transition-colors" />
              </motion.a>
            ))}
          </motion.div>
        </div>

        {/* Bottom Section */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="border-t border-gray-700 pt-8"
        >
          {/* Copyright */}
          <div className="text-center text-gray-400 mb-4">
            <p>
              © 2025 Travelitin Services Private Limited. All Rights Reserved.
            </p>
          </div>

          {/* Legal Links */}
          <div className="flex justify-center gap-4">
            {legalLinks.map((link, index) => (
              <motion.a
                key={link.name}
                href={link.href}
                whileHover={{
                  color: "#FDE047",
                  scale: 1.05,
                }}
                className="text-gray-400 hover:text-yellow-300 transition-all duration-200 text-sm"
              >
                {link.name}
              </motion.a>
            ))}
          </div>
        </motion.div>
      </div>
    </footer>
  );
};
