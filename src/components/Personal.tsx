"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Heart, Dog, Users, Award, Star, Sparkles, Trophy } from "lucide-react";

const personalHighlights = [
  {
    icon: <Dog className="w-5 h-5" />,
    title: "Dog Rescue Volunteer",
    description: "Helping dogs find their forever homes",
    color: "#f59e0b",
  },
  {
    icon: <Trophy className="w-5 h-5" />,
    title: "Special Olympics",
    description: "Proud supporter of athletes",
    color: "#6366f1",
  },
  {
    icon: <Heart className="w-5 h-5" />,
    title: "Proud Mom",
    description: "Two amazing kids, three dogs",
    color: "#ec4899",
  },
  {
    icon: <Award className="w-5 h-5" />,
    title: "Family Achievement",
    description: "Son earning black belt 2025",
    color: "#10b981",
  },
];

const testimonialQuotes = [
  {
    quote: "I anticipate needs, fix problems before they happen, and make everyone's job easier.",
    context: "Leadership Philosophy",
  },
  {
    quote: "I believe true success comes from strong relationships, communication, and trust.",
    context: "Core Values",
  },
  {
    quote: "Focus and persistence always pay off.",
    context: "Personal Motto",
  },
];

export default function Personal() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <section id="personal" className="py-20 sm:py-28 bg-[var(--section-bg)] relative overflow-hidden" ref={ref}>
      {/* Background */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-[#ec4899]/5 rounded-full blur-[150px]" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 sm:mb-16"
        >
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#ec4899]/10 border border-[#ec4899]/20 text-[#f472b6] text-sm font-medium mb-4">
            <Sparkles className="w-4 h-4" />
            Beyond Work
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[var(--foreground)] mb-4">
            The Person Behind the <span className="text-[#f59e0b]">Profile</span>
          </h2>
          <p className="text-[var(--foreground)]/50 max-w-2xl mx-auto text-base sm:text-lg">
            Outside of work, I bring the same level of drive and dedication to my life
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
          {/* Personal Highlights */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h3 className="text-xl font-semibold text-[var(--foreground)] mb-6 flex items-center gap-2">
              <Heart className="w-5 h-5 text-[#ec4899]" />
              What Drives Me
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {personalHighlights.map((item, index) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.4, delay: 0.3 + index * 0.1 }}
                  className="glass-card rounded-xl p-4 hover:border-opacity-50 transition-all group"
                  style={{ borderColor: `${item.color}30` }}
                >
                  <div 
                    className="w-10 h-10 rounded-lg flex items-center justify-center mb-3 transition-transform group-hover:scale-110"
                    style={{ backgroundColor: `${item.color}15`, color: item.color }}
                  >
                    {item.icon}
                  </div>
                  <h4 className="font-semibold text-[var(--foreground)] text-sm mb-1">{item.title}</h4>
                  <p className="text-xs text-[var(--foreground)]/40">{item.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Quotes / Values */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <h3 className="text-xl font-semibold text-[var(--foreground)] mb-6 flex items-center gap-2">
              <Star className="w-5 h-5 text-[#f59e0b]" />
              Words I Live By
            </h3>
            <div className="space-y-4">
              {testimonialQuotes.map((item, index) => (
                <motion.div
                  key={item.context}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.4, delay: 0.5 + index * 0.1 }}
                  className="glass-card rounded-xl p-5 relative overflow-hidden"
                >
                  <div className="absolute top-3 right-3 text-[#f59e0b]/10">
                    <Star className="w-10 h-10" />
                  </div>
                  <p className="text-[var(--foreground)]/80 text-sm italic mb-3 relative">
                    &ldquo;{item.quote}&rdquo;
                  </p>
                  <span className="text-xs text-[#f59e0b] font-medium">
                    {item.context}
                  </span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Feature Banner */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.7 }}
          className="mt-10 sm:mt-12"
        >
          <div className="glass-card rounded-2xl p-6 sm:p-8 relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-[#6366f1]/10 via-[#ec4899]/10 to-[#f59e0b]/10" />
            
            <div className="relative grid md:grid-cols-2 gap-6 items-center">
              <div>
                <h3 className="text-xl sm:text-2xl font-bold text-[var(--foreground)] mb-3">
                  Same Drive, Same Dedication
                </h3>
                <p className="text-[var(--foreground)]/50 text-sm sm:text-base leading-relaxed">
                  Whether solving complex IT challenges, supporting my kids&apos; activities, 
                  or volunteering at a dog rescue, I bring the same energy. My family 
                  keeps me grounded and motivated.
                </p>
              </div>
              <div className="grid grid-cols-3 gap-3">
                {[
                  { number: "2", label: "Kids" },
                  { number: "3", label: "Dogs" },
                  { number: "100%", label: "Heart" },
                ].map((stat, index) => (
                  <motion.div
                    key={stat.label}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={isInView ? { opacity: 1, scale: 1 } : {}}
                    transition={{ duration: 0.4, delay: 0.8 + index * 0.1 }}
                    className="text-center p-4 bg-[var(--foreground)]/5 rounded-xl border border-[var(--border)]"
                  >
                    <div className="text-2xl sm:text-3xl font-bold text-[#f59e0b]">
                      {stat.number}
                    </div>
                    <div className="text-xs text-[var(--foreground)]/40 mt-1">{stat.label}</div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
