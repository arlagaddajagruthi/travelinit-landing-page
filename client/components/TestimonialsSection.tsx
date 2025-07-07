import { motion } from "framer-motion";
import { AnimatedSection } from "./AnimatedSection";
import { useStaggerAnimation } from "@/hooks/useScrollAnimation";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Star } from "lucide-react";

export const TestimonialsSection = () => {
  const { staggerContainer, staggerItem } = useStaggerAnimation();

  const testimonials = [
    {
      name: "Sarah Chen",
      role: "Adventure Traveler",
      image:
        "https://images.pexels.com/photos/4926703/pexels-photo-4926703.jpeg",
      rating: 5,
      text: "travelinit completely transformed how I plan my trips. The safety features gave me confidence to explore places I never thought possible!",
    },
    {
      name: "Marcus Thompson",
      role: "Digital Nomad",
      image: "https://images.pexels.com/photos/764681/pexels-photo-764681.jpeg",
      rating: 5,
      text: "As someone who travels for work constantly, the real-time alerts and emergency assistance features are absolutely invaluable.",
    },
    {
      name: "Elena Rodriguez",
      role: "Family Traveler",
      image:
        "https://images.pexels.com/photos/4926703/pexels-photo-4926703.jpeg",
      rating: 5,
      text: "Traveling with kids became so much easier. The comprehensive safety information helps me plan better family vacations.",
    },
  ];

  return (
    <section
      id="testimonials"
      className="py-20 bg-gradient-to-br from-yellow-50 to-orange-50 relative overflow-hidden"
    >
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-5">
        {[...Array(15)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-yellow-400 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -20, 0],
              opacity: [0.3, 1, 0.3],
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
        <AnimatedSection className="text-center mb-16">
          <motion.h2
            whileInView={{ scale: [0.8, 1.05, 1] }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-5xl font-bold text-gray-900 mb-4"
          >
            What Our{" "}
            <span className="bg-gradient-to-r from-yellow-600 via-orange-600 to-yellow-600 bg-clip-text text-transparent">
              Travelers
            </span>{" "}
            Say
          </motion.h2>
          <motion.p
            whileInView={{ opacity: [0, 1], y: [20, 0] }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed"
          >
            Real stories from travelers who trust travelinit for their journeys
            around the world
          </motion.p>
        </AnimatedSection>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid md:grid-cols-3 gap-8"
        >
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              variants={staggerItem}
              whileHover={{
                scale: 1.05,
                boxShadow: "0 25px 50px rgba(0,0,0,0.1)",
                y: -10,
              }}
              className="bg-white p-8 rounded-2xl shadow-lg border border-yellow-100 relative group"
            >
              {/* Quote decoration */}
              <motion.div
                whileHover={{ scale: 1.1, rotate: 5 }}
                className="absolute top-4 right-4 text-6xl text-yellow-200 font-serif"
              >
                "
              </motion.div>

              {/* Star rating */}
              <div className="flex justify-center mb-6">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <motion.div
                    key={i}
                    initial={{ scale: 0, rotate: -180 }}
                    whileInView={{ scale: 1, rotate: 0 }}
                    transition={{
                      duration: 0.5,
                      delay: 0.1 * i,
                      type: "spring",
                      stiffness: 200,
                    }}
                  >
                    <Star className="w-5 h-5 text-yellow-400 fill-current" />
                  </motion.div>
                ))}
              </div>

              {/* Testimonial text */}
              <motion.p
                whileInView={{ opacity: [0, 1] }}
                transition={{ duration: 0.8, delay: 0.3 }}
                className="text-gray-700 mb-8 leading-relaxed text-center italic"
              >
                {testimonial.text}
              </motion.p>

              {/* User info with avatar */}
              <motion.div
                whileInView={{ opacity: [0, 1], y: [20, 0] }}
                transition={{ duration: 0.8, delay: 0.5 }}
                className="flex items-center justify-center"
              >
                <motion.div whileHover={{ scale: 1.1 }} className="mr-4">
                  <Avatar className="w-16 h-16 border-4 border-yellow-200 shadow-lg">
                    <AvatarImage
                      src={testimonial.image}
                      alt={testimonial.name}
                      className="object-cover"
                    />
                    <AvatarFallback className="bg-yellow-200 text-yellow-900 font-semibold">
                      {testimonial.name
                        .split(" ")
                        .map((n) => n[0])
                        .join("")}
                    </AvatarFallback>
                  </Avatar>
                </motion.div>
                <div className="text-center">
                  <h4 className="font-bold text-gray-900 group-hover:text-yellow-600 transition-colors">
                    {testimonial.name}
                  </h4>
                  <p className="text-gray-600 text-sm">{testimonial.role}</p>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>

        {/* Call to action */}
        <AnimatedSection className="text-center mt-16">
          <motion.div
            whileInView={{ scale: [0.8, 1] }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <motion.p
              className="text-lg text-gray-700 mb-6"
              whileInView={{ opacity: [0, 1] }}
              transition={{ duration: 0.8, delay: 0.5 }}
            >
              Join thousands of travelers who trust travelinit for their
              adventures
            </motion.p>
            <motion.button
              whileHover={{
                scale: 1.05,
                boxShadow: "0 20px 40px rgba(250, 204, 21, 0.4)",
              }}
              whileTap={{ scale: 0.95 }}
              className="bg-yellow-400 hover:bg-yellow-500 text-yellow-900 font-bold px-8 py-4 rounded-full text-lg shadow-2xl relative overflow-hidden group"
            >
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-yellow-300 to-orange-300"
                initial={{ x: "-100%" }}
                whileHover={{ x: "0%" }}
                transition={{ duration: 0.3 }}
              />
              <span className="relative z-10">Start Your Safe Journey</span>
            </motion.button>
          </motion.div>
        </AnimatedSection>
      </div>
    </section>
  );
};
