import { motion } from "framer-motion";
import { Heart } from "lucide-react";

export const Footer = () => {
  const footerLinks = {
    Company: ["About", "Features", "Contact", "Feedback Form"],
    Support: ["Help Center", "Safety Guidelines", "Emergency Contact", "FAQ"],
    Legal: [
      "Privacy Policy",
      "Terms of Service",
      "Cookie Policy",
      "Disclaimer",
    ],
  };

  return (
    <footer className="bg-gray-900 text-white py-16 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-10">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-yellow-400 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              scale: [0, 1, 0],
              opacity: [0, 1, 0],
            }}
            transition={{
              duration: Math.random() * 3 + 2,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid md:grid-cols-4 gap-8 mb-12">
          {/* Logo and description */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="md:col-span-1"
          >
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="flex items-center space-x-2 mb-4"
            >
              <div className="w-10 h-10 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-lg flex items-center justify-center shadow-lg">
                <span className="text-white font-bold text-lg">✈</span>
              </div>
              <span className="text-2xl font-bold text-white">SafeWander</span>
            </motion.div>
            <p className="text-gray-400 leading-relaxed">
              Making travel safer and more accessible for everyone, everywhere.
            </p>
          </motion.div>

          {/* Footer links */}
          {Object.entries(footerLinks).map(([category, links], index) => (
            <motion.div
              key={category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <h4 className="text-lg font-semibold mb-4 text-yellow-400">
                {category}
              </h4>
              <ul className="space-y-2">
                {links.map((link, linkIndex) => (
                  <motion.li key={linkIndex}>
                    <motion.a
                      whileHover={{
                        color: "#FDE047",
                        x: 5,
                      }}
                      href="#"
                      className="text-gray-400 hover:text-yellow-300 transition-all duration-200"
                    >
                      {link}
                    </motion.a>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* Bottom section */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="pt-8 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center"
        >
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="flex items-center space-x-2 text-gray-400"
          >
            <span>Made with</span>
            <motion.div
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 1, repeat: Infinity, ease: "easeInOut" }}
            >
              <Heart className="w-5 h-5 text-red-500 fill-current" />
            </motion.div>
            <span>for travelers worldwide</span>
          </motion.div>

          <motion.div
            whileHover={{ scale: 1.05 }}
            className="text-gray-400 mt-4 md:mt-0"
          >
            <span>© 2024 SafeWander. All rights reserved.</span>
          </motion.div>
        </motion.div>
      </div>
    </footer>
  );
};
