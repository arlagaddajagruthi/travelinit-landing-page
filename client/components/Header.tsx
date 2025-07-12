import { Button } from "@/components/ui/button";
import { useStaggerAnimation } from "@/hooks/useScrollAnimation";
import { motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [headerBackground, setHeaderBackground] = useState(
    "rgba(255, 255, 255, 0.1)",
  );
  const { staggerContainer, staggerItem } = useStaggerAnimation();

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const opacity = Math.min(Math.max(scrollY / 100, 0.1), 0.95);
      setHeaderBackground(`rgba(255, 255, 255, ${opacity})`);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navigationItems = [
    "About",
    "Features",
    "How it works",
    "Upcoming",
    "Contact",
  ];

  return (
    <motion.header
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
      style={{ backgroundColor: headerBackground }}
      className="sticky top-0 z-50 backdrop-blur-md border-b border-gray-100"
    >
      <div className="container mx-auto px-4 py-4">
        <nav className="flex items-center justify-between">
          {/* Animated Logo */}
          <motion.div
            initial={{ x: -50, opacity: 0, scale: 0.8 }}
            animate={{ x: 0, opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "backOut" }}
            className="flex items-center"
          >
            <motion.img
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              src="/logo.jpg"
              alt="Travelitin Logo"
              className="h-12 w-auto"
            />
          </motion.div>

          {/* Desktop Navigation */}
          <motion.div
            initial={{ x: 50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="hidden md:flex items-center space-x-8"
          >
            {navigationItems.map((item, index) => (
              <motion.a
                key={item}
                whileHover={{
                  scale: 1.05,
                  color: "#EAB308",
                }}
                whileTap={{ scale: 0.95 }}
                transition={{ duration: 0.2 }}
                href={`#${item.toLowerCase().replace(/\s+/g, "-")}`}
                className="text-gray-700 hover:text-yellow-600 font-medium transition-colors relative group"
              >
                {item}
                <motion.div
                  className="absolute -bottom-1 left-0 right-0 h-0.5 bg-yellow-400 origin-left"
                  initial={{ scaleX: 0 }}
                  whileHover={{ scaleX: 1 }}
                  transition={{ duration: 0.3 }}
                />
              </motion.a>
            ))}

            <motion.div
              whileHover={{
                scale: 1.05,
                boxShadow: "0 10px 25px rgba(250, 204, 21, 0.4)",
              }}
              whileTap={{ scale: 0.95 }}
            >
              <Button className="bg-yellow-400 hover:bg-yellow-500 text-yellow-900 font-semibold px-6 rounded-full">
                Try Now
              </Button>
            </motion.div>
          </motion.div>

          {/* Mobile Menu Button */}
          <motion.button
            initial={{ x: 50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="md:hidden relative"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <motion.div
              animate={{ rotate: isMenuOpen ? 180 : 0 }}
              transition={{ duration: 0.3, ease: "backInOut" }}
            >
              {isMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </motion.div>
          </motion.button>
        </nav>

        {/* Mobile Menu */}
        <motion.div
          initial={false}
          animate={{
            height: isMenuOpen ? "auto" : 0,
            opacity: isMenuOpen ? 1 : 0,
          }}
          transition={{ duration: 0.3, ease: "easeInOut" }}
          className="md:hidden overflow-hidden"
        >
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            animate={isMenuOpen ? "visible" : "hidden"}
            className="py-4 space-y-2"
          >
            {navigationItems.map((item) => (
              <motion.button
                key={item}
                variants={staggerItem}
                whileHover={{
                  scale: 1.02,
                  backgroundColor: "rgba(254, 240, 138, 0.1)",
                }}
                whileTap={{ scale: 0.98 }}
                onClick={() => {
                  setIsMenuOpen(false);
                  document
                    .getElementById(item.toLowerCase().replace(/\s+/g, "-"))
                    ?.scrollIntoView({ behavior: "smooth" });
                }}
                className="block w-full text-left px-4 py-3 text-gray-700 hover:bg-yellow-50 hover:text-yellow-600 transition-all duration-200 first:rounded-t-xl last:rounded-b-xl"
              >
                {item}
              </motion.button>
            ))}

            <motion.div variants={staggerItem}>
              <motion.div
                whileHover={{
                  scale: 1.05,
                  boxShadow: "0 10px 25px rgba(250, 204, 21, 0.4)",
                }}
                whileTap={{ scale: 0.95 }}
              >
                <Button className="bg-yellow-400 hover:bg-yellow-500 text-yellow-900 font-semibold px-6 rounded-full transform transition-all duration-300 relative overflow-hidden">
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-yellow-300 to-orange-300 opacity-0"
                    whileHover={{ opacity: 1 }}
                    transition={{ duration: 0.3 }}
                  />
                  <span className="relative z-10">Try Now</span>
                </Button>
              </motion.div>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </motion.header>
  );
};
