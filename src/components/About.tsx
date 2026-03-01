"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Quote, Heart, Lightbulb, Users, Sparkles, Target, Zap } from "lucide-react";

export default function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  const values = [
    {
      icon: <Lightbulb className="w-5 h-5" />,
      title: "Innovation",
      description: "Finding faster ways to get things done",
    },
    {
      icon: <Users className="w-5 h-5" />,
      title: "Leadership",
      description: "Calm leadership anticipating needs",
    },
    {
      icon: <Heart className="w-5 h-5" />,
      title: "Integrity",
      description: "Energy, integrity, and excellence",
    },
  ];

  const highlights = [
    { icon: <Zap className="w-5 h-5" />, text: "Workflow Transformation" },
    { icon: <Target className="w-5 h-5" />, text: "Results-Driven" },
    { icon: <Sparkles className="w-5 h-5" />, text: "AI & Automation" },
  ];

  return (
    <section id="about" className="py-20 sm:py-28 bg-[var(--section-bg)] relative overflow-hidden" ref={ref}>
      {/* Background Elements */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#6366f1]/5 rounded-full blur-[150px] -translate-y-1/2 translate-x-1/2" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-[#f59e0b]/5 rounded-full blur-[120px] translate-y-1/2 -translate-x-1/2" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 sm:mb-16"
        >
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#6366f1]/10 border border-[#6366f1]/20 text-[#818cf8] text-sm font-medium mb-4">
            <Sparkles className="w-4 h-4" />
            About Me
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[var(--foreground)] mb-4">
            The Person Behind the <span className="text-[#f59e0b]">Results</span>
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          {/* Left: Visual Card */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="relative order-2 lg:order-1"
          >
            <div className="relative">
              {/* Main Card */}
              <div className="glass-card rounded-3xl p-6 sm:p-8 relative overflow-hidden">
                {/* Gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-[#6366f1]/10 via-transparent to-[#f59e0b]/10" />
                
                {/* Content */}
                <div className="relative">
                  {/* Avatar */}
                  <div className="w-24 h-24 sm:w-32 sm:h-32 rounded-2xl bg-gradient-to-br from-[#6366f1] to-[#8b5cf6] flex items-center justify-center mb-6 shadow-lg shadow-[#6366f1]/30">
                    <span className="text-4xl sm:text-5xl font-bold text-white">SM</span>
                  </div>
                  
                  <h3 className="text-2xl sm:text-3xl font-bold text-[var(--foreground)] mb-2">Stacey Mardt</h3>
                  <p className="text-[#818cf8] font-medium mb-6">Systems Administrator & Operations Catalyst</p>
                  
                  {/* Highlights */}
                  <div className="space-y-3">
                    {highlights.map((item, index) => (
                      <motion.div
                        key={item.text}
                        initial={{ opacity: 0, x: -20 }}
                        animate={isInView ? { opacity: 1, x: 0 } : {}}
                        transition={{ duration: 0.4, delay: 0.3 + index * 0.1 }}
                        className="flex items-center gap-3 text-[var(--foreground)]/80"
                      >
                        <div className="w-10 h-10 rounded-lg bg-[var(--foreground)]/5 flex items-center justify-center text-[#f59e0b]">
                          {item.icon}
                        </div>
                        <span className="text-sm sm:text-base">{item.text}</span>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Quote Card - Below image on mobile */}
              <motion.div
                initial={{ opacity: 0, y: 20, scale: 0.9 }}
                animate={isInView ? { opacity: 1, y: 0, scale: 1 } : {}}
                transition={{ duration: 0.6, delay: 0.5 }}
                className="mt-4 sm:mt-0 sm:absolute sm:-bottom-6 sm:-right-4 lg:right-4 glass-card p-4 sm:p-5 rounded-xl sm:rounded-2xl border-l-4 border-[#f59e0b]"
              >
                <Quote className="w-5 h-5 sm:w-6 sm:h-6 text-[#f59e0b] mb-2" />
                <p className="text-[var(--foreground)]/90 text-xs sm:text-sm italic">
                  &ldquo;I don&apos;t just fit into a workplace; I make it stronger, smarter, and better.&rdquo;
                </p>
              </motion.div>
            </div>
          </motion.div>

          {/* Right: Content */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="order-1 lg:order-2"
          >
            <div className="space-y-4 text-[var(--foreground)]/60 leading-relaxed text-base sm:text-lg">
              <p>
                With a strong background in <span className="text-[var(--foreground)] font-medium">administration, IT systems, marketing, and social media strategy</span>, I bring a rare mix of technical expertise, creative problem-solving, and rock-solid reliability.
              </p>
              <p>
                I don&apos;t just manage workflows, I <span className="text-[#f59e0b] font-medium">transform them</span>. I find faster ways to get things done, implement smart systems, and make the impossible feel effortless.
              </p>
              <p>
                I&apos;m known as the person people turn to for answers, solutions, and calm leadership. I anticipate needs, fix problems before they happen, and make everyone&apos;s job easier.
              </p>
              <p>
                I&apos;m passionate about using <span className="text-[#818cf8] font-medium">AI and automation</span> to improve efficiency, and I believe true success comes from strong relationships, communication, and trust.
              </p>
            </div>

            {/* Values Grid */}
            <div className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-3">
              {values.map((value, index) => (
                <motion.div
                  key={value.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                  className="glass-card p-4 rounded-xl hover:border-[#6366f1]/40 transition-colors group"
                >
                  <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-[#6366f1]/20 to-[#8b5cf6]/20 flex items-center justify-center text-[#818cf8] mb-3 group-hover:scale-110 transition-transform">
                    {value.icon}
                  </div>
                  <h3 className="font-semibold text-[var(--foreground)] text-sm mb-1">{value.title}</h3>
                  <p className="text-xs text-[var(--foreground)]/50">{value.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
