"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import {
  Monitor, Settings, TrendingUp, MessageSquare, Users, Cpu, Palette, Shield,
  Sparkles
} from "lucide-react";

const skills = [
  { category: "IT & Systems", icon: <Monitor className="w-5 h-5" />, items: ["Systems Administration", "IT Troubleshooting", "Network Management", "Software Implementation"], color: "#6366f1", description: "Managing complex IT infrastructure" },
  { category: "Operations", icon: <Settings className="w-5 h-5" />, items: ["Workflow Optimization", "Process Automation", "Project Management", "Resource Planning"], color: "#8b5cf6", description: "Streamlining operations" },
  { category: "Marketing", icon: <TrendingUp className="w-5 h-5" />, items: ["Social Media Strategy", "Content Creation", "Brand Management", "Campaign Analytics"], color: "#f59e0b", description: "Creating content that delivers" },
  { category: "Communication", icon: <MessageSquare className="w-5 h-5" />, items: ["Executive Support", "Client Relations", "Team Collaboration", "Documentation"], color: "#10b981", description: "Building strong relationships" },
  { category: "Leadership", icon: <Users className="w-5 h-5" />, items: ["Team Coordination", "Problem Solving", "Decision Making", "Mentorship"], color: "#ec4899", description: "Leading with confidence" },
  { category: "AI & Automation", icon: <Cpu className="w-5 h-5" />, items: ["AI Tools Integration", "Process Automation", "Efficiency Systems", "Smart Workflows"], color: "#06b6d4", description: "Leveraging cutting-edge tech" },
  { category: "Design", icon: <Palette className="w-5 h-5" />, items: ["Marketing Materials", "Visual Design", "Brand Assets", "Presentation Design"], color: "#f97316", description: "Creating visual experiences" },
  { category: "Administration", icon: <Shield className="w-5 h-5" />, items: ["Office Management", "Scheduling", "Data Management", "Compliance"], color: "#84cc16", description: "Keeping operations organized" },
];

export default function Skills() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 640);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % skills.length);
  const prevSlide = () => setCurrentSlide((prev) => (prev - 1 + skills.length) % skills.length);

  const visibleSkills = isMobile 
    ? [skills[currentSlide]] 
    : skills;

  return (
    <section id="skills" className="py-20 sm:py-28 bg-[var(--background)] relative overflow-hidden" ref={ref}>
      <div className="absolute inset-0">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[#6366f1]/5 rounded-full blur-[150px]" />
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={isInView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6 }} className="text-center mb-10 sm:mb-16">
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#6366f1]/10 border border-[#6366f1]/20 text-[#818cf8] text-sm font-medium mb-4">
            <Sparkles className="w-4 h-4" />
            Expertise
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[var(--foreground)] mb-4">
            Skills & <span className="text-[#f59e0b]">Capabilities</span>
          </h2>
          <p className="text-[var(--foreground)]/50 max-w-2xl mx-auto text-base sm:text-lg">
            A comprehensive skill set bridging technology, operations, and creative solutions
          </p>
        </motion.div>

        {/* Mobile Carousel with Swipe */}
        {isMobile && (
          <div className="relative">
            <div className="overflow-hidden touch-pan-y">
              <motion.div
                key={currentSlide}
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -50 }}
                transition={{ duration: 0.3 }}
                drag="x"
                dragConstraints={{ left: 0, right: 0 }}
                dragElastic={0.2}
                onDragEnd={(e, { offset, velocity }) => {
                  const swipe = offset.x;
                  const swipeVelocity = velocity.x;
                  
                  if (swipe < -50 || swipeVelocity < -500) {
                    nextSlide();
                  } else if (swipe > 50 || swipeVelocity > 500) {
                    prevSlide();
                  }
                }}
                className="glass-card rounded-2xl p-5 border-l-4 cursor-grab active:cursor-grabbing"
                style={{ borderLeftColor: skills[currentSlide].color }}
              >
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 rounded-lg flex items-center justify-center" style={{ backgroundColor: `${skills[currentSlide].color}20`, color: skills[currentSlide].color }}>
                    {skills[currentSlide].icon}
                  </div>
                  <h3 className="text-lg font-semibold text-[var(--foreground)]">{skills[currentSlide].category}</h3>
                </div>
                <p className="text-sm text-[var(--foreground)]/50 mb-3">{skills[currentSlide].description}</p>
                <ul className="space-y-2">
                  {skills[currentSlide].items.map((item) => (
                    <li key={item} className="text-sm text-[var(--foreground)]/60 flex items-center">
                      <span className="w-1.5 h-1.5 rounded-full mr-2 flex-shrink-0" style={{ backgroundColor: skills[currentSlide].color }} />
                      {item}
                    </li>
                  ))}
                </ul>
                <p className="text-xs text-[var(--foreground)]/30 text-center mt-4">Swipe to navigate</p>
              </motion.div>
            </div>
            
            {/* Navigation Dots Only */}
            <div className="flex items-center justify-center gap-1.5 mt-4">
              {skills.map((_, idx) => (
                <button key={idx} onClick={() => setCurrentSlide(idx)} className={`w-2 h-2 rounded-full transition-all ${idx === currentSlide ? 'bg-[#6366f1] w-4' : 'bg-[var(--foreground)]/20'}`} />
              ))}
            </div>
          </div>
        )}

        {/* Desktop Grid */}
        {!isMobile && (
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
            {skills.map((skill, index) => (
              <motion.div key={skill.category} initial={{ opacity: 0, y: 30 }} animate={isInView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.5, delay: index * 0.05 }} className="group">
                <div className="glass-card rounded-2xl p-5 h-full transition-all duration-300 hover:border-opacity-50" style={{ borderColor: `${skill.color}30` }}>
                  <div className="w-10 h-10 rounded-lg flex items-center justify-center mb-3 transition-transform group-hover:scale-110" style={{ backgroundColor: `${skill.color}20`, color: skill.color }}>
                    {skill.icon}
                  </div>
                  <h3 className="text-base font-semibold text-[var(--foreground)] mb-1">{skill.category}</h3>
                  <p className="text-xs text-[var(--foreground)]/40 mb-2">{skill.description}</p>
                  <ul className="space-y-1">
                    {skill.items.map((item) => (
                      <li key={item} className="text-xs text-[var(--foreground)]/60 flex items-center">
                        <span className="w-1 h-1 rounded-full mr-2 flex-shrink-0" style={{ backgroundColor: skill.color }} />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        )}

        <motion.div initial={{ opacity: 0, y: 20 }} animate={isInView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6, delay: 0.6 }} className="mt-10 sm:mt-16 text-center">
          <div className="inline-flex flex-col sm:flex-row items-center gap-3 glass-card px-5 sm:px-8 py-4 rounded-2xl">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#6366f1] to-[#8b5cf6] flex items-center justify-center">
              <Cpu className="w-5 h-5 text-[var(--foreground)]" />
            </div>
            <div className="text-center sm:text-left">
              <p className="text-[var(--foreground)] font-medium text-sm">Always Learning</p>
              <p className="text-[var(--foreground)]/50 text-xs">Improving with AI & emerging technologies</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
