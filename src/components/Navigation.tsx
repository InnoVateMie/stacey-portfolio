"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Sparkles, Sun, Moon, User, Wrench, Briefcase, Layers, Mail } from "lucide-react";

const navItems = [
  { label: "About", href: "#about", icon: User },
  { label: "Skills", href: "#skills", icon: Wrench },
  { label: "Experience", href: "#experience", icon: Briefcase },
  { label: "Services", href: "#services", icon: Layers },
  { label: "Contact", href: "#contact", icon: Mail },
];

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [theme, setTheme] = useState<"dark" | "light">("dark");

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme") as "dark" | "light" | null;
    if (savedTheme) {
      setTheme(savedTheme);
      document.documentElement.setAttribute("data-theme", savedTheme);
    }
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === "dark" ? "light" : "dark";
    setTheme(newTheme);
    document.documentElement.setAttribute("data-theme", newTheme);
    localStorage.setItem("theme", newTheme);
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
      
      const sections = navItems.map(item => item.href.replace("#", ""));
      sections.unshift("home");
      
      for (const section of sections.reverse()) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 100) {
            setActiveSection(section);
            break;
          }
        }
      }
    };
    
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <motion.nav
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          isScrolled
            ? "bg-[var(--background)]/95 backdrop-blur-md shadow-lg shadow-black/5 py-3"
            : "bg-transparent py-4"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <motion.a
              href="#home"
              className="flex items-center gap-2 group"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#6366f1] to-[#f59e0b] flex items-center justify-center">
                <span className="text-[var(--foreground)] font-bold text-lg">S</span>
              </div>
              <div className="hidden sm:block">
                <span className="text-xl font-bold text-[var(--foreground)]">Stacey</span>
                <span className="text-xl font-bold text-[#f59e0b]"> Mardt</span>
              </div>
            </motion.a>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center gap-1">
              {navItems.map((item) => (
                <motion.a
                  key={item.label}
                  href={item.href}
                  className={`relative px-4 py-2 text-sm font-medium transition-colors ${
                    activeSection === item.href.replace("#", "")
                      ? "text-[var(--foreground)]"
                      : "text-[var(--foreground)]/60 hover:text-[var(--foreground)]"
                  }`}
                  whileHover={{ y: -2 }}
                >
                  {item.label}
                  {activeSection === item.href.replace("#", "") && (
                    <motion.span
                      layoutId="activeNav"
                      className="absolute inset-0 bg-[var(--foreground)]/10 rounded-lg -z-10"
                      transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                    />
                  )}
                </motion.a>
              ))}
              
              {/* Theme Toggle */}
              <motion.button
                onClick={toggleTheme}
                className="ml-4 w-10 h-10 rounded-xl bg-[var(--card-bg)] border border-[var(--border)] flex items-center justify-center text-[var(--foreground)] hover:bg-[var(--section-bg)] transition-colors"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <AnimatePresence mode="wait">
                  {theme === "dark" ? (
                    <motion.div
                      key="moon"
                      initial={{ rotate: -90, opacity: 0 }}
                      animate={{ rotate: 0, opacity: 1 }}
                      exit={{ rotate: 90, opacity: 0 }}
                      transition={{ duration: 0.2 }}
                    >
                      <Moon className="w-5 h-5" />
                    </motion.div>
                  ) : (
                    <motion.div
                      key="sun"
                      initial={{ rotate: 90, opacity: 0 }}
                      animate={{ rotate: 0, opacity: 1 }}
                      exit={{ rotate: -90, opacity: 0 }}
                      transition={{ duration: 0.2 }}
                    >
                      <Sun className="w-5 h-5" />
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.button>
              
              <motion.a
                href="#contact"
                className="ml-3 px-5 py-2.5 bg-gradient-to-r from-[#6366f1] to-[#8b5cf6] text-white rounded-full text-sm font-medium hover:shadow-lg hover:shadow-[#6366f1]/30 transition-all"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <span className="flex items-center gap-2">
                  <Sparkles className="w-4 h-4" />
                  Let&apos;s Talk
                </span>
              </motion.a>
            </div>

            {/* Mobile Controls */}
            <div className="flex items-center gap-2 lg:hidden">
              {/* Mobile Theme Toggle */}
              <motion.button
                onClick={toggleTheme}
                className="w-10 h-10 rounded-xl bg-[var(--card-bg)]/80 border border-[var(--border)] flex items-center justify-center text-[var(--foreground)]"
                whileTap={{ scale: 0.95 }}
              >
                {theme === "dark" ? <Moon className="w-5 h-5" /> : <Sun className="w-5 h-5" />}
              </motion.button>
              
              {/* Mobile Menu Button */}
              <motion.button
                className="w-10 h-10 rounded-xl bg-[var(--card-bg)]/80 border border-[var(--border)] flex items-center justify-center text-[var(--foreground)]"
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                whileTap={{ scale: 0.95 }}
              >
                <AnimatePresence mode="wait">
                  {isMobileMenuOpen ? (
                    <motion.div
                      key="close"
                      initial={{ rotate: -90, opacity: 0 }}
                      animate={{ rotate: 0, opacity: 1 }}
                      exit={{ rotate: 90, opacity: 0 }}
                      transition={{ duration: 0.2 }}
                    >
                      <X size={20} />
                    </motion.div>
                  ) : (
                    <motion.div
                      key="menu"
                      initial={{ rotate: 90, opacity: 0 }}
                      animate={{ rotate: 0, opacity: 1 }}
                      exit={{ rotate: -90, opacity: 0 }}
                      transition={{ duration: 0.2 }}
                    >
                      <Menu size={20} />
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.button>
            </div>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu Overlay - Half Page Slide with Icons */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="fixed inset-0 bg-black/40 backdrop-blur-sm z-40 lg:hidden"
              onClick={() => setIsMobileMenuOpen(false)}
            />
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 30, stiffness: 300 }}
              className="fixed top-0 right-0 bottom-0 w-[300px] max-w-[85vw] bg-[var(--background)] border-l border-[var(--border)] z-50 lg:hidden flex flex-col"
            >
              {/* Header */}
              <div className="flex items-center justify-between p-4 border-b border-[var(--border)]">
                <span className="text-sm font-medium text-[var(--foreground)]/60">Menu</span>
                <motion.button
                  className="w-9 h-9 rounded-full bg-[var(--card-bg)] flex items-center justify-center text-[var(--foreground)]/60"
                  onClick={() => setIsMobileMenuOpen(false)}
                  whileTap={{ scale: 0.95 }}
                >
                  <X size={18} />
                </motion.button>
              </div>

              {/* Navigation Links */}
              <div className="flex-1 py-2">
                <nav>
                  {navItems.map((item, index) => {
                    const Icon = item.icon;
                    return (
                      <motion.a
                        key={item.label}
                        href={item.href}
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.05 }}
                        className={`flex items-center gap-4 px-4 py-3.5 mx-2 rounded-xl transition-all ${
                          activeSection === item.href.replace("#", "")
                            ? "bg-[var(--primary)]/10"
                            : "hover:bg-[var(--section-bg)]"
                        }`}
                        onClick={() => setIsMobileMenuOpen(false)}
                      >
                        <div className={`w-9 h-9 rounded-lg flex items-center justify-center ${
                          activeSection === item.href.replace("#", "")
                            ? "bg-[var(--primary)] text-white"
                            : "bg-[var(--section-bg)] text-[var(--foreground)]/60"
                        }`}>
                          <Icon size={18} />
                        </div>
                        <span className={`text-[15px] font-medium ${
                          activeSection === item.href.replace("#", "") 
                            ? "text-[var(--primary)]" 
                            : "text-[var(--foreground)]/80"
                        }`}>
                          {item.label}
                        </span>
                        {activeSection === item.href.replace("#", "") && (
                          <div className="ml-auto w-1.5 h-1.5 rounded-full bg-[var(--primary)]" />
                        )}
                      </motion.a>
                    );
                  })}
                </nav>
              </div>

              {/* Footer */}
              <div className="p-4 border-t border-[var(--border)]">
                <motion.a
                  href="#contact"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                  className="flex items-center justify-center gap-2 w-full px-5 py-3 bg-gradient-to-r from-[#6366f1] to-[#8b5cf6] text-white rounded-xl font-medium text-sm"
                  onClick={() => setIsMobileMenuOpen(false)}
                  whileTap={{ scale: 0.98 }}
                >
                  <Sparkles className="w-4 h-4" />
                  Let&apos;s Talk
                </motion.a>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
