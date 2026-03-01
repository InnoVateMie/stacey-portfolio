"use client";

import { motion } from "framer-motion";
import { Sparkles, Zap, Target, ChevronRight } from "lucide-react";
import Image from "next/image";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[var(--background)]"
    >
      {/* Animated Background Grid */}
      <div className="absolute inset-0 overflow-hidden">
        <div 
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `linear-gradient(rgba(99, 102, 241, 0.5) 1px, transparent 1px),
                              linear-gradient(90deg, rgba(99, 102, 241, 0.5) 1px, transparent 1px)`,
            backgroundSize: '60px 60px'
          }}
        />
        
        <motion.div
          className="absolute top-1/4 -left-32 w-[500px] h-[500px] bg-[#6366f1]/20 rounded-full blur-[120px]"
          animate={{ x: [0, 100, 0], y: [0, -50, 0], scale: [1, 1.2, 1] }}
          transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute bottom-1/4 -right-32 w-[600px] h-[600px] bg-[#f59e0b]/10 rounded-full blur-[120px]"
          animate={{ x: [0, -80, 0], y: [0, 60, 0], scale: [1.2, 1, 1.2] }}
          transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
        />
      </div>

      {/* Floating Elements */}
      <motion.div className="absolute top-32 right-[15%] hidden md:block" animate={{ y: [0, -20, 0] }} transition={{ duration: 5, repeat: Infinity }}>
        <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-[#6366f1]/20 to-transparent border border-[#6366f1]/30 flex items-center justify-center backdrop-blur-sm">
          <Sparkles className="w-7 h-7 text-[#6366f1]" />
        </div>
      </motion.div>
      <motion.div className="absolute bottom-40 left-[10%] hidden lg:block" animate={{ y: [0, 20, 0] }} transition={{ duration: 6, repeat: Infinity }}>
        <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#f59e0b]/20 to-transparent border border-[#f59e0b]/30 flex items-center justify-center backdrop-blur-sm">
          <Zap className="w-6 h-6 text-[#f59e0b]" />
        </div>
      </motion.div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 sm:pt-20">
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-8 items-center">
          {/* Left Content */}
          <div className="text-center lg:text-left order-2 lg:order-1">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="mb-4 inline-flex">
              <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[var(--card-bg)] border border-[var(--border)] text-xs sm:text-sm font-medium text-[var(--foreground)]/80">
                <Sparkles className="w-3.5 h-3.5 text-[#f59e0b]" />
                Open to collaborations
              </span>
            </motion.div>

            {/* Name - Script style */}
            <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.1 }} className="mb-3 leading-tight flex items-baseline justify-center lg:justify-start gap-3 sm:gap-4">
              <span className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl text-[var(--foreground)]" style={{ fontFamily: 'var(--font-script)' }}>Stacey</span>
              <span className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-light tracking-[0.25em] text-[var(--foreground)]/80" style={{ fontFamily: 'var(--font-display)' }}>MARDT</span>
            </motion.h1>

            <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.2 }} className="mb-4">
              <span className="text-base sm:text-lg md:text-xl text-[var(--foreground)] font-semibold">Systems Administrator</span>
              <span className="mx-2 text-[var(--foreground)]/30">|</span>
              <span className="text-base sm:text-lg md:text-xl text-[#f59e0b] font-semibold">Operations Catalyst</span>
            </motion.div>

            <motion.p initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.3 }} className="text-sm sm:text-base text-[var(--foreground)]/50 max-w-xl mx-auto lg:mx-0 mb-6 leading-relaxed">
              I don&apos;t just manage workflows, I <span className="text-[var(--foreground)]/80 font-medium">transform them</span>. Bringing technical expertise and creative problem-solving to drive your success.
            </motion.p>

            {/* CTA Buttons - Smaller on mobile */}
            <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.4 }} className="flex flex-col sm:flex-row gap-3 justify-center lg:justify-start">
              <motion.a href="#contact" className="group px-5 sm:px-6 py-2.5 sm:py-3 bg-gradient-to-r from-[#6366f1] to-[#8b5cf6] text-white rounded-lg text-sm font-medium hover:shadow-lg hover:shadow-[#6366f1]/30 transition-all flex items-center justify-center gap-1.5" whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                Work With Me
                <ChevronRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
              </motion.a>
              <motion.a href="#about" className="px-5 sm:px-6 py-2.5 sm:py-3 bg-[var(--card-bg)] border border-[var(--border)] text-[var(--foreground)] rounded-lg text-sm font-medium hover:bg-[var(--section-bg)] transition-all flex items-center justify-center" whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                Discover More
              </motion.a>
            </motion.div>

            {/* Stats */}
            <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.5 }} className="mt-8 grid grid-cols-3 gap-3 max-w-sm mx-auto lg:mx-0">
              {[{ number: "15+", label: "Years" }, { number: "100%", label: "Commitment" }, { number: "24/7", label: "Support" }].map((stat, index) => (
                <motion.div key={stat.label} className="text-center p-3 rounded-lg bg-[var(--card-bg)] border border-[var(--border)]" initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.4, delay: 0.6 + index * 0.1 }}>
                  <div className="text-xl sm:text-2xl font-bold text-[var(--foreground)]">{stat.number}</div>
                  <div className="text-xs text-[var(--foreground)]/40 mt-0.5">{stat.label}</div>
                </motion.div>
              ))}
            </motion.div>
          </div>

          {/* Right Content - Stacey's Image */}
          <motion.div initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.8, delay: 0.3 }} className="order-1 lg:order-2 flex justify-center lg:justify-end">
            <div className="relative">
              <motion.div className="w-56 h-56 sm:w-72 sm:h-72 lg:w-80 lg:h-80 rounded-full bg-gradient-to-br from-[#6366f1]/20 via-[#8b5cf6]/10 to-[#f59e0b]/20 border border-[var(--border)] flex items-center justify-center relative overflow-hidden" animate={{ rotate: 360 }} transition={{ duration: 60, repeat: Infinity, ease: "linear" }}>
                <div className="absolute inset-4 rounded-full border border-dashed border-[var(--border)]" />
              </motion.div>
              
              <div className="absolute inset-0 flex items-center justify-center">
                <motion.div initial={{ opacity: 0, scale: 0.5 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.6, delay: 0.6 }} className="relative">
                  <div className="w-44 h-44 sm:w-56 sm:h-56 lg:w-64 lg:h-64 rounded-full overflow-hidden shadow-2xl shadow-[#6366f1]/20 bg-[var(--card-bg)]" style={{ clipPath: 'circle(50%)' }}>
                    <Image src="/Stacey.png" alt="Stacey Mardt" fill className="object-cover object-top scale-110" priority sizes="(max-width: 640px) 176px, (max-width: 1024px) 224px, 256px" />
                  </div>
                </motion.div>
              </div>

              {[0, 1, 2].map((i) => (
                <motion.div key={i} className="absolute top-1/2 left-1/2 w-2.5 h-2.5 rounded-full bg-[#f59e0b]" animate={{ x: Math.cos(i * 2.09) * 120, y: Math.sin(i * 2.09) * 120 }} transition={{ duration: 8, repeat: Infinity, delay: i * 2.67, ease: "linear" }} style={{ marginLeft: '-5px', marginTop: '-5px' }} />
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
