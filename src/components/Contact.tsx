"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";
import {
  Mail,
  MapPin,
  Linkedin,
  Send,
  CheckCircle,
  User,
  MessageSquare,
  Sparkles,
  ArrowRight,
} from "lucide-react";

export default function Contact() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
    setTimeout(() => setIsSubmitted(false), 3000);
  };

  const contactInfo = [
    {
      icon: <MapPin className="w-5 h-5" />,
      title: "Location",
      value: "Oreland, Pennsylvania",
      color: "#6366f1",
    },
    {
      icon: <Linkedin className="w-5 h-5" />,
      title: "LinkedIn",
      value: "Connect professionally",
      color: "#0a66c2",
    },
    {
      icon: <Mail className="w-5 h-5" />,
      title: "Email",
      value: "Send a message",
      color: "#f59e0b",
    },
  ];

  const benefits = [
    "Rock-solid reliability",
    "Proactive problem solver",
    "Results-driven approach",
    "Calm under pressure",
  ];

  return (
    <section id="contact" className="py-20 sm:py-28 bg-[var(--background)] relative overflow-hidden" ref={ref}>
      {/* Background */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-[#6366f1]/10 rounded-full blur-[150px]" />
      
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
            Get In Touch
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[var(--foreground)] mb-4">
            Let&apos;s <span className="text-[#f59e0b]">Connect</span>
          </h2>
          <p className="text-[var(--foreground)]/50 max-w-2xl mx-auto text-base sm:text-lg">
            Ready to make your workplace stronger, smarter, and better? 
            I&apos;d love to hear from you.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-5 gap-8 lg:gap-10">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-2 space-y-4"
          >
            {/* Contact Cards */}
            <div className="space-y-3">
              {contactInfo.map((item, index) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.4, delay: 0.3 + index * 0.1 }}
                  className="glass-card rounded-xl p-4 flex items-center gap-4 hover:border-opacity-50 transition-all cursor-pointer group"
                  style={{ borderColor: `${item.color}30` }}
                >
                  <div 
                    className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0 transition-transform group-hover:scale-110"
                    style={{ backgroundColor: `${item.color}15`, color: item.color }}
                  >
                    {item.icon}
                  </div>
                  <div>
                    <h4 className="font-medium text-[var(--foreground)] text-sm">{item.title}</h4>
                    <p className="text-[var(--foreground)]/40 text-xs">{item.value}</p>
                  </div>
                  <ArrowRight className="w-4 h-4 text-[var(--foreground)]/20 ml-auto opacity-0 group-hover:opacity-100 transition-opacity" />
                </motion.div>
              ))}
            </div>

            {/* Benefits Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="glass-card rounded-xl p-5 border-l-4 border-l-[#6366f1]"
            >
              <h4 className="font-semibold text-[var(--foreground)] mb-4 text-sm">Why Work With Me?</h4>
              <ul className="space-y-2">
                {benefits.map((benefit, index) => (
                  <li key={benefit} className="flex items-center gap-2 text-sm text-[var(--foreground)]/60">
                    <CheckCircle className="w-4 h-4 text-[#10b981] flex-shrink-0" />
                    {benefit}
                  </li>
                ))}
              </ul>
            </motion.div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="lg:col-span-3"
          >
            <div className="glass-card rounded-2xl p-6 sm:p-8">
              <h3 className="text-xl font-semibold text-[var(--foreground)] mb-6">
                Send a Message
              </h3>
              
              {isSubmitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="text-center py-12"
                >
                  <div className="w-16 h-16 rounded-full bg-gradient-to-br from-[#10b981] to-[#059669] flex items-center justify-center mx-auto mb-4 shadow-lg shadow-[#10b981]/30">
                    <CheckCircle className="w-8 h-8 text-[var(--foreground)]" />
                  </div>
                  <h4 className="text-xl font-semibold text-[var(--foreground)] mb-2">
                    Message Sent!
                  </h4>
                  <p className="text-[var(--foreground)]/50">
                    Thank you for reaching out. I&apos;ll get back to you soon.
                  </p>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-[var(--foreground)]/70 mb-2">
                        Your Name
                      </label>
                      <div className="relative">
                        <User className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-[var(--foreground)]/30" />
                        <input
                          type="text"
                          required
                          className="w-full pl-12 pr-4 py-3 bg-[var(--foreground)]/5 border border-[var(--border)] rounded-xl focus:outline-none focus:ring-2 focus:ring-[#6366f1] focus:border-transparent transition-all text-[var(--foreground)] placeholder:text-[var(--foreground)]/30"
                          placeholder="John Doe"
                        />
                      </div>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-[var(--foreground)]/70 mb-2">
                        Email Address
                      </label>
                      <div className="relative">
                        <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-[var(--foreground)]/30" />
                        <input
                          type="email"
                          required
                          className="w-full pl-12 pr-4 py-3 bg-[var(--foreground)]/5 border border-[var(--border)] rounded-xl focus:outline-none focus:ring-2 focus:ring-[#6366f1] focus:border-transparent transition-all text-[var(--foreground)] placeholder:text-[var(--foreground)]/30"
                          placeholder="john@example.com"
                        />
                      </div>
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-[var(--foreground)]/70 mb-2">
                      Subject
                    </label>
                    <input
                      type="text"
                      required
                      className="w-full px-4 py-3 bg-[var(--foreground)]/5 border border-[var(--border)] rounded-xl focus:outline-none focus:ring-2 focus:ring-[#6366f1] focus:border-transparent transition-all text-[var(--foreground)] placeholder:text-[var(--foreground)]/30"
                      placeholder="How can I help?"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-[var(--foreground)]/70 mb-2">
                      Message
                    </label>
                    <div className="relative">
                      <MessageSquare className="absolute left-4 top-4 w-5 h-5 text-[var(--foreground)]/30" />
                      <textarea
                        required
                        rows={4}
                        className="w-full pl-12 pr-4 py-3 bg-[var(--foreground)]/5 border border-[var(--border)] rounded-xl focus:outline-none focus:ring-2 focus:ring-[#6366f1] focus:border-transparent transition-all resize-none text-[var(--foreground)] placeholder:text-[var(--foreground)]/30"
                        placeholder="Tell me about your project or inquiry..."
                      />
                    </div>
                  </div>

                  <motion.button
                    type="submit"
                    className="w-full sm:w-auto px-8 py-4 bg-gradient-to-r from-[#6366f1] to-[#8b5cf6] text-[var(--foreground)] rounded-xl font-medium hover:shadow-lg hover:shadow-[#6366f1]/30 transition-all flex items-center justify-center gap-2"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    Send Message 
                    <Send className="w-5 h-5" />
                  </motion.button>
                </form>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
