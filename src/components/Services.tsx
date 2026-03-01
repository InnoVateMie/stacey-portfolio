"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import {
  Settings,
  MonitorSmartphone,
  TrendingUp,
  Users,
  Cpu,
  FileText,
  ArrowRight,
  Sparkles,
} from "lucide-react";

const services = [
  {
    icon: <Settings className="w-7 h-7" />,
    title: "Workflow Transformation",
    description:
      "I don't just manage workflows, I transform them. Finding faster ways to get things done and implementing smart systems.",
    features: ["Process Analysis", "Efficiency Optimization", "System Implementation"],
    color: "#6366f1",
  },
  {
    icon: <MonitorSmartphone className="w-7 h-7" />,
    title: "IT Systems Management",
    description:
      "Comprehensive IT support and systems administration. From troubleshooting to implementing new technologies.",
    features: ["Technical Support", "System Administration", "Infrastructure"],
    color: "#8b5cf6",
  },
  {
    icon: <TrendingUp className="w-7 h-7" />,
    title: "Marketing & Social Media",
    description:
      "Designing marketing content that gets noticed and delivers results. Strategic social media management.",
    features: ["Content Strategy", "Social Media", "Brand Development"],
    color: "#f59e0b",
  },
  {
    icon: <Users className="w-7 h-7" />,
    title: "Leadership Support",
    description:
      "Executive-level administrative support that anticipates needs and makes everyone's job easier.",
    features: ["Executive Assistance", "Team Coordination", "Project Management"],
    color: "#ec4899",
  },
  {
    icon: <Cpu className="w-7 h-7" />,
    title: "AI & Automation",
    description:
      "Leveraging AI and automation to improve efficiency. Implementing smart solutions that streamline operations.",
    features: ["AI Integration", "Process Automation", "Smart Workflows"],
    color: "#06b6d4",
  },
  {
    icon: <FileText className="w-7 h-7" />,
    title: "Operations Excellence",
    description:
      "Streamlining operations from end to end. Creating systems that make your organization run smoothly.",
    features: ["Operations Management", "Documentation", "Compliance"],
    color: "#10b981",
  },
];

export default function Services() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <section id="services" className="py-20 sm:py-28 bg-[var(--background)] relative overflow-hidden" ref={ref}>
      {/* Background */}
      <div className="absolute top-1/2 left-0 w-[500px] h-[500px] bg-[#f59e0b]/5 rounded-full blur-[150px] -translate-y-1/2 -translate-x-1/2" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 sm:mb-16"
        >
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#f59e0b]/10 border border-[#f59e0b]/20 text-[#fbbf24] text-sm font-medium mb-4">
            <Sparkles className="w-4 h-4" />
            What I Offer
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[var(--foreground)] mb-4">
            Services & <span className="text-[#f59e0b]">Solutions</span>
          </h2>
          <p className="text-[var(--foreground)]/50 max-w-2xl mx-auto text-base sm:text-lg">
            Comprehensive support that transforms how you work. From IT systems to marketing,
            I deliver results that make a lasting impact.
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              className="group"
            >
              <div 
                className="h-full glass-card rounded-2xl p-6 hover:border-opacity-50 transition-all duration-300"
                style={{ borderColor: `${service.color}30` }}
              >
                {/* Icon */}
                <div 
                  className="w-14 h-14 rounded-xl flex items-center justify-center mb-5 transition-transform group-hover:scale-110"
                  style={{ backgroundColor: `${service.color}15`, color: service.color }}
                >
                  {service.icon}
                </div>

                {/* Title */}
                <h3 className="text-lg font-semibold text-[var(--foreground)] mb-3">
                  {service.title}
                </h3>

                {/* Description */}
                <p className="text-[var(--foreground)]/50 text-sm mb-5 leading-relaxed">
                  {service.description}
                </p>

                {/* Features */}
                <div className="space-y-2 mb-5">
                  {service.features.map((feature) => (
                    <div
                      key={feature}
                      className="flex items-center text-sm text-[var(--foreground)]/60"
                    >
                      <span 
                        className="w-1.5 h-1.5 rounded-full mr-2 flex-shrink-0" 
                        style={{ backgroundColor: service.color }}
                      />
                      {feature}
                    </div>
                  ))}
                </div>

                {/* Link */}
                <a
                  href="#contact"
                  className="inline-flex items-center text-sm font-medium transition-all group-hover:gap-3"
                  style={{ color: service.color }}
                >
                  Learn More 
                  <ArrowRight className="w-4 h-4 ml-1 transition-transform group-hover:translate-x-1" />
                </a>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom Banner */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-12 sm:mt-16"
        >
          <div className="glass-card rounded-3xl p-6 sm:p-10 text-center relative overflow-hidden">
            {/* Gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-r from-[#6366f1]/10 via-[#8b5cf6]/10 to-[#f59e0b]/10" />
            
            <div className="relative">
              <h3 className="text-2xl sm:text-3xl font-bold text-[var(--foreground)] mb-4">
                Ready to Transform Your Operations?
              </h3>
              <p className="text-[var(--foreground)]/60 max-w-2xl mx-auto mb-8 text-sm sm:text-base">
                If you want someone who shows up every day with energy, integrity, and excellence,
                who takes ownership and solves problems - let&apos;s connect.
              </p>
              <motion.a
                href="#contact"
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-[#6366f1] to-[#8b5cf6] text-white rounded-xl font-semibold hover:shadow-lg hover:shadow-[#6366f1]/30 transition-all"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                Start a Conversation 
                <ArrowRight className="w-5 h-5 ml-2" />
              </motion.a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
