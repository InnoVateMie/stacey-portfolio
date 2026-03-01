"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Building2, Calendar, MapPin, GraduationCap, Sparkles, Briefcase } from "lucide-react";

const experiences = [
  {
    company: "AVS Life Sciences",
    role: "Systems Administrator",
    period: "Present",
    location: "Oreland, PA",
    description:
      "Managing IT infrastructure and systems, optimizing workflows, and implementing automation solutions to enhance operational efficiency.",
    highlights: [
      "IT systems management",
      "Workflow automation",
      "Technical support",
      "Cross-functional collaboration",
    ],
    current: true,
  },
  {
    company: "Previous Roles",
    role: "Administration & Marketing",
    period: "10+ Years",
    location: "Pennsylvania",
    description:
      "Extensive background in administrative excellence, marketing strategy, and operational management across various industries.",
    highlights: [
      "Executive support",
      "Social media strategy",
      "Office management",
      "Project execution",
    ],
    current: false,
  },
];

const education = [
  {
    institution: "Antonelli Institute",
    degree: "Professional Education",
    description: "Foundational training in design and professional skills",
  },
];

export default function Experience() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <section id="experience" className="py-20 sm:py-28 bg-[var(--section-bg)] relative overflow-hidden" ref={ref}>
      {/* Background */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#6366f1]/30 to-transparent" />
      <div className="absolute bottom-1/3 right-0 w-[400px] h-[400px] bg-[#f59e0b]/5 rounded-full blur-[120px]" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 sm:mb-16"
        >
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#6366f1]/10 border border-[#6366f1]/20 text-[#818cf8] text-sm font-medium mb-4">
            <Sparkles className="w-4 h-4" />
            Career Journey
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[var(--foreground)] mb-4">
            Experience & <span className="text-[#f59e0b]">Education</span>
          </h2>
          <p className="text-[var(--foreground)]/50 max-w-2xl mx-auto text-base sm:text-lg">
            A proven track record of delivering results and making organizations stronger
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-5 gap-8 lg:gap-10">
          {/* Experience Timeline */}
          <div className="lg:col-span-3">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-xl bg-[#6366f1]/20 flex items-center justify-center">
                <Briefcase className="w-5 h-5 text-[#818cf8]" />
              </div>
              <h3 className="text-xl font-semibold text-[var(--foreground)]">Work Experience</h3>
            </div>
            
            <div className="space-y-6">
              {experiences.map((exp, index) => (
                <motion.div
                  key={exp.company}
                  initial={{ opacity: 0, x: -30 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.5, delay: index * 0.15 }}
                  className="relative"
                >
                  {/* Timeline Line */}
                  {index !== experiences.length - 1 && (
                    <div className="absolute left-5 top-14 w-0.5 h-[calc(100%+24px)] bg-gradient-to-b from-[#6366f1]/50 to-transparent" />
                  )}

                  <div className="flex gap-4">
                    {/* Timeline Dot */}
                    <div
                      className={`w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0 z-10 ${
                        exp.current
                          ? "bg-gradient-to-br from-[#6366f1] to-[#8b5cf6]"
                          : "bg-[var(--foreground)]/10 border border-[var(--border)]"
                      }`}
                    >
                      <Building2 className={`w-5 h-5 ${exp.current ? 'text-[var(--foreground)]' : 'text-[var(--foreground)]/60'}`} />
                    </div>

                    {/* Content Card */}
                    <div className="glass-card rounded-2xl p-5 sm:p-6 flex-grow hover:border-[#6366f1]/30 transition-colors">
                      <div className="flex flex-wrap items-start justify-between gap-2 mb-3">
                        <div>
                          <h4 className="text-lg font-semibold text-[var(--foreground)]">
                            {exp.role}
                          </h4>
                          <p className="text-[#818cf8] font-medium text-sm">{exp.company}</p>
                        </div>
                        {exp.current && (
                          <span className="px-3 py-1 bg-[#6366f1]/20 text-[#818cf8] text-xs font-medium rounded-full border border-[#6366f1]/30">
                            Current
                          </span>
                        )}
                      </div>

                      <div className="flex flex-wrap gap-3 text-sm text-[var(--foreground)]/40 mb-4">
                        <span className="flex items-center gap-1">
                          <Calendar className="w-4 h-4" />
                          {exp.period}
                        </span>
                        <span className="flex items-center gap-1">
                          <MapPin className="w-4 h-4" />
                          {exp.location}
                        </span>
                      </div>

                      <p className="text-[var(--foreground)]/60 text-sm mb-4">{exp.description}</p>

                      <div className="flex flex-wrap gap-2">
                        {exp.highlights.map((highlight) => (
                          <span
                            key={highlight}
                            className="px-3 py-1 bg-[var(--foreground)]/5 rounded-lg text-xs text-[var(--foreground)]/70 border border-[var(--border)]"
                          >
                            {highlight}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Education & Info */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-xl bg-[#f59e0b]/20 flex items-center justify-center">
                <GraduationCap className="w-5 h-5 text-[#f59e0b]" />
              </div>
              <h3 className="text-xl font-semibold text-[var(--foreground)]">Education</h3>
            </div>
            
            <div className="space-y-4">
              {education.map((edu, index) => (
                <motion.div
                  key={edu.institution}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                  className="glass-card rounded-2xl p-5"
                >
                  <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#f59e0b]/20 to-[#f59e0b]/5 flex items-center justify-center mb-4">
                    <GraduationCap className="w-5 h-5 text-[#f59e0b]" />
                  </div>
                  <h4 className="font-semibold text-[var(--foreground)] mb-1">
                    {edu.institution}
                  </h4>
                  <p className="text-[#f59e0b] text-sm font-medium mb-2">
                    {edu.degree}
                  </p>
                  <p className="text-sm text-[var(--foreground)]/40">{edu.description}</p>
                </motion.div>
              ))}
            </div>

            {/* Continuous Learning Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="mt-4 glass-card rounded-2xl p-5 border-l-4 border-l-[#6366f1]"
            >
              <h4 className="font-semibold text-[var(--foreground)] mb-3">Continuous Learning</h4>
              <p className="text-sm text-[var(--foreground)]/50 mb-4">
                Committed to staying ahead with AI tools, automation technologies, and industry best practices.
              </p>
              <div className="flex flex-wrap gap-2">
                {["AI Tools", "Automation", "Leadership", "Tech Trends"].map(
                  (tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 bg-[#6366f1]/10 border border-[#6366f1]/20 rounded-full text-xs text-[#818cf8]"
                    >
                      {tag}
                    </span>
                  )
                )}
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
