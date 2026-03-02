"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import {
  Mail,
  Github,
  Linkedin,
  Send,
  MapPin,
  Phone,
  Copy,
  CheckCheck,
} from "lucide-react";
import ContactUsForm from "./ContactUsForm";

export default function Contact() {
  const [copied, setCopied] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const copyEmail = async () => {
    await navigator.clipboard.writeText("joyram2015@gmail.com");
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="contact" className="py-32 relative" ref={ref}>
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-20"
        >
          <div className="flex items-center gap-4 mb-4">
            <span className="font-mono text-accent3 text-sm">05.</span>
            <h2 className="font-display font-bold text-bright text-4xl md:text-5xl">
              contact(me)
            </h2>
            <div className="flex-1 h-px bg-border" />
          </div>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16">
          {/* Left */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.2, duration: 0.7 }}
            className="space-y-8"
          >
            <div className="space-y-4">
              <h3 className="font-display font-bold text-bright text-2xl">
                Let&apos;s build something{" "}
                <span className="gradient-text">incredible</span>
              </h3>
              <p className="text-muted leading-relaxed">
                Whether you have a project in mind, want to collaborate, or just
                want to geek out about React architecture and system design — my
                inbox is always open.
              </p>
              <p className="text-muted leading-relaxed">
                Currently{" "}
                <span className="text-accent font-mono text-sm">
                  open to full-time opportunities
                </span>{" "}
                and freelance projects. Let&apos;s talk.
              </p>
            </div>

            {/* Contact info cards */}
            <div className="space-y-3">
              {[
                {
                  icon: <Mail size={16} />,
                  label: "Email",
                  value: "joyram2015@gmail.com",
                  action: copyEmail,
                  actionLabel: copied ? (
                    <CheckCheck size={14} />
                  ) : (
                    <Copy size={14} />
                  ),
                },
                {
                  icon: <Phone size={16} />,
                  label: "Phone",
                  value: "01716191849",
                },
                {
                  icon: <MapPin size={16} />,
                  label: "Location",
                  value: "Narsingdi, Dhaka, Bangladesh",
                },
              ].map((item, i) => (
                <motion.div
                  key={item.label}
                  initial={{ opacity: 0, x: -20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ delay: 0.4 + i * 0.1 }}
                  className="flex items-center gap-4 p-4 border border-border rounded-lg bg-surface/50 hover:border-accent/30 transition-colors group"
                >
                  <span className="text-accent">{item.icon}</span>
                  <div className="flex-1 min-w-0">
                    <div className="font-mono text-xs text-muted">
                      {item.label}
                    </div>
                    <div className="font-mono text-sm text-text truncate">
                      {item.value}
                    </div>
                  </div>
                  {item.action && (
                    <button
                      onClick={item.action}
                      className="text-muted hover:text-accent transition-colors p-1"
                      data-hover
                    >
                      {item.actionLabel}
                    </button>
                  )}
                </motion.div>
              ))}
            </div>

            {/* Socials */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.7 }}
              className="flex gap-3"
            >
              {[
                {
                  href: "https://github.com/Joyram49",
                  icon: <Github size={18} />,
                  label: "GitHub",
                },
                {
                  href: "https://www.linkedin.com/in/joy-ram-das-a89893a-a89893a2/",
                  icon: <Linkedin size={18} />,
                  label: "LinkedIn",
                },
                {
                  href: "https://mail.google.com/mail/?view=cm&to=joyram2015@gmail.com",
                  icon: <Mail size={18} />,
                  label: "Email",
                },
              ].map((s) => (
                <motion.a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  className="flex items-center gap-2 font-mono text-sm text-muted border border-border px-4 py-2.5 rounded-lg hover:border-accent hover:text-accent transition-all duration-300"
                  whileHover={{ y: -2 }}
                  data-hover
                >
                  {s.icon}
                  {s.label}
                </motion.a>
              ))}
            </motion.div>
          </motion.div>

          <ContactUsForm isInView={isInView} />
        </div>
      </div>
    </section>
  );
}
