"use client";

import { motion } from "framer-motion";
import { Heart, Linkedin, Mail, ArrowUp, Sparkles } from "lucide-react";

const navLinks = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Experience", href: "#experience" },
  { label: "Services", href: "#services" },
  { label: "Contact", href: "#contact" },
];

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-[var(--background)] border-t border-[var(--border)]">
      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* Brand */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#6366f1] to-[#f59e0b] flex items-center justify-center">
                <span className="text-[var(--foreground)] font-bold text-lg">S</span>
              </div>
              <h3 className="text-xl font-bold">
                <span className="text-[var(--foreground)]">Stacey</span>
                <span className="text-[#f59e0b]"> Mardt</span>
              </h3>
            </div>
            <p className="text-[var(--foreground)]/50 mb-6 max-w-md text-sm leading-relaxed">
              Your Behind the Scenes Catalyst for Success. Making workplaces stronger, 
              smarter, and better through technical expertise and creative problem-solving.
            </p>
            <div className="flex gap-3">
              <a
                href="#"
                className="w-10 h-10 rounded-xl bg-[var(--foreground)]/5 border border-[var(--border)] flex items-center justify-center hover:bg-[#6366f1] hover:border-[#6366f1] transition-all group"
              >
                <Linkedin className="w-5 h-5 text-[var(--foreground)]/60 group-hover:text-[var(--foreground)]" />
              </a>
              <a
                href="#contact"
                className="w-10 h-10 rounded-xl bg-[var(--foreground)]/5 border border-[var(--border)] flex items-center justify-center hover:bg-[#f59e0b] hover:border-[#f59e0b] transition-all group"
              >
                <Mail className="w-5 h-5 text-[var(--foreground)]/60 group-hover:text-[var(--foreground)]" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-[var(--foreground)] mb-4 text-sm flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-[#6366f1]" />
              Quick Links
            </h4>
            <ul className="space-y-2">
              {navLinks.slice(0, 3).map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-[var(--foreground)]/40 hover:text-[var(--foreground)] text-sm transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* More Links */}
          <div>
            <h4 className="font-semibold text-[var(--foreground)] mb-4 text-sm flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-[#f59e0b]" />
              Explore
            </h4>
            <ul className="space-y-2">
              {navLinks.slice(3).map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-[var(--foreground)]/40 hover:text-[var(--foreground)] text-sm transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-[var(--border)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-[var(--foreground)]/30 text-xs sm:text-sm flex items-center gap-1">
              Made with <Heart className="w-3 h-3 sm:w-4 sm:h-4 text-[#ec4899]" /> by Stacey Mardt
            </p>
            <p className="text-[var(--foreground)]/30 text-xs sm:text-sm">
              {new Date().getFullYear()} All rights reserved.
            </p>
            <motion.button
              onClick={scrollToTop}
              className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-gradient-to-r from-[#6366f1] to-[#8b5cf6] flex items-center justify-center text-[var(--foreground)] hover:shadow-lg hover:shadow-[#6366f1]/30 transition-all"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <ArrowUp className="w-4 h-4 sm:w-5 sm:h-5" />
            </motion.button>
          </div>
        </div>
      </div>
    </footer>
  );
}
