import { motion } from "framer-motion";
import { AnimatedSection } from "./AnimatedSection";
import { useStaggerAnimation } from "@/hooks/useScrollAnimation";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Star, Quote } from "lucide-react";

export const TestimonialsSection = () => {
  const { staggerContainer, staggerItem } = useStaggerAnimation();

  const testimonials = [
    {
      name: "Sarah Martinez",
      role: "Solo Traveler",
      image:
        "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg",
      rating: 5,
      text: "SafeWander gave me the confidence to take my first solo trip to Southeast Asia. The real-time safety alerts were a lifesaver!",
      location: "Traveled to Thailand & Vietnam",
    },
    {
      name: "James Chen",
      role: "Digital Nomad",
      image:
        "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg",
      rating: 5,
      text: "As someone who works remotely while traveling, having instant access to local emergency contacts and safety info is invaluable.",
      location: "Based in 12+ countries",
    },
    {
      name: "Maria Santos",
      role: "Adventure Seeker",
      image:
        "https://images.pexels.com/photos/1102341/pexels-photo-1102341.jpeg",
      rating: 5,
      text: "The community features helped me connect with fellow travelers and discover hidden gems safely. Highly recommend!",
      location: "Backpacked through Europe",
    },
  ];

  return (
    <section
      id="testimonials"
      className="py-20 bg-gradient-to-b from-orange-50 to-yellow-50 relative overflow-hidden"
    >
      {/* Organic background elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-32 h-32 bg-yellow-300 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-40 h-40 bg-orange-300 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/3 w-24 h-24 bg-yellow-200 rounded-full blur-2xl"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <AnimatedSection className="text-center mb-16">
          <motion.div
            whileInView={{ rotate: [0, 5, -5, 0] }}
            transition={{ duration: 2 }}
            className="inline-block mb-6"
          >
            <Quote className="w-16 h-16 text-yellow-500" />
          </motion.div>
          <motion.h2
            whileInView={{ opacity: [0, 1], y: [30, 0] }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-5xl font-bold text-gray-900 mb-4"
          >
            Real Stories from{" "}
            <span className="bg-gradient-to-r from-yellow-600 via-orange-600 to-yellow-600 bg-clip-text text-transparent">
              Real Travelers
            </span>
          </motion.h2>
          <motion.p
            whileInView={{ opacity: [0, 1], y: [20, 0] }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed"
          >
            Discover how SafeWander has transformed travel experiences for
            adventurers worldwide
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
                y: -15,
                boxShadow: "0 20px 40px rgba(0,0,0,0.1)",
              }}
              className="bg-white p-8 rounded-3xl shadow-lg border border-orange-100 relative group overflow-hidden"
            >
              {/* Decorative corner */}
              <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-bl from-yellow-200 to-transparent rounded-bl-full opacity-50"></div>

              {/* Star rating */}
              <div className="flex mb-6">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <motion.div
                    key={i}
                    initial={{ scale: 0, rotate: -180 }}
                    whileInView={{ scale: 1, rotate: 0 }}
                    transition={{
                      duration: 0.6,
                      delay: 0.1 * i,
                      type: "spring",
                      stiffness: 150,
                    }}
                  >
                    <Star className="w-5 h-5 text-yellow-400 fill-current mr-1" />
                  </motion.div>
                ))}
              </div>

              {/* Testimonial text */}
              <motion.blockquote
                whileInView={{ opacity: [0, 1] }}
                transition={{ duration: 0.8, delay: 0.3 }}
                className="text-gray-700 mb-6 leading-relaxed italic text-lg"
              >
                "{testimonial.text}"
              </motion.blockquote>

              {/* Location */}
              <motion.p
                whileInView={{ opacity: [0, 1] }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="text-sm text-orange-600 font-medium mb-6"
              >
                📍 {testimonial.location}
              </motion.p>

              {/* User info */}
              <motion.div
                whileInView={{ opacity: [0, 1], y: [20, 0] }}
                transition={{ duration: 0.8, delay: 0.5 }}
                className="flex items-center"
              >
                <motion.div whileHover={{ scale: 1.1 }} className="mr-4">
                  <Avatar className="w-14 h-14 border-3 border-yellow-200 shadow-md">
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
                <div>
                  <h4 className="font-bold text-gray-900 group-hover:text-orange-600 transition-colors">
                    {testimonial.name}
                  </h4>
                  <p className="text-gray-500 text-sm">{testimonial.role}</p>
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
            className="bg-white p-8 rounded-2xl shadow-lg border border-yellow-200 max-w-2xl mx-auto"
          >
            <motion.p
              className="text-lg text-gray-700 mb-6"
              whileInView={{ opacity: [0, 1] }}
              transition={{ duration: 0.8, delay: 0.5 }}
            >
              Ready to start your own safe adventure story?
            </motion.p>
            <motion.button
              whileHover={{
                scale: 1.05,
                boxShadow: "0 15px 30px rgba(255, 165, 0, 0.3)",
              }}
              whileTap={{ scale: 0.95 }}
              className="bg-gradient-to-r from-yellow-400 to-orange-500 hover:from-yellow-500 hover:to-orange-600 text-white font-bold px-8 py-4 rounded-full text-lg shadow-lg relative overflow-hidden group"
            >
              <span className="relative z-10">Join SafeWander Community</span>
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-orange-400 to-yellow-400"
                initial={{ x: "-100%" }}
                whileHover={{ x: "0%" }}
                transition={{ duration: 0.3 }}
              />
            </motion.button>
          </motion.div>
        </AnimatedSection>
      </div>
    </section>
  );
};
