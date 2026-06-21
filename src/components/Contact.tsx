"use client";

import { useState, useRef } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import {
  Mail,
  Phone,
  MapPin,
  Globe,
  Send,
  CheckCircle2,
  Loader2,
  ArrowRight,
} from "lucide-react";

const CONTACT_INFO = [
  {
    icon: Mail,
    label: "Email",
    value: "info@siltawi.com",
    href: "mailto:info@siltawi.com",
  },
  {
    icon: Phone,
    label: "Phone",
    value: "+251 900 000 000",
    href: "tel:+251900000000",
  },
  {
    icon: MapPin,
    label: "Location",
    value: "Addis Ababa, Ethiopia",
    href: "https://www.google.com/maps/place/Addis+Ababa",
  },
  {
    icon: Globe,
    label: "Website",
    value: "www.siltawi.com",
    href: "https://www.siltawi.com",
  },
];

const SERVICES = [
  "Digital Marketing",
  "Website Development",
  "Branding & Design",
  "Content Creation",
  "SEO Services",
  "Other",
];

type FormState = "idle" | "loading" | "success";

export default function Contact() {
  const [formState, setFormState] = useState<FormState>("idle");
  const [selectedService, setSelectedService] = useState("");
  const formRef = useRef<HTMLFormElement>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setFormState("loading");
    // Simulate API call
    await new Promise((r) => setTimeout(r, 1800));
    setFormState("success");
    formRef.current?.reset();
    setSelectedService("");
    setTimeout(() => setFormState("idle"), 4000);
  };

  return (
    <section id="contact" className="relative py-24 bg-surface">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-brand-light mb-6">
            Start Your <span className="text-brand-primary">Project</span>
          </h2>
          <p className="max-w-2xl mx-auto text-text-muted text-lg leading-relaxed">
            Ready to grow? Reach out and let's discuss how Siltawi can transform your brand's digital presence.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
          {/* Left Column: Info + Map */}
          <motion.div
            className="lg:col-span-2 flex flex-col gap-6"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            {/* Contact Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-4">
              {CONTACT_INFO.map((item) => {
                const Icon = item.icon;
                return (
                  <a
                    key={item.label}
                    href={item.href}
                    target={item.label === "Website" ? "_blank" : undefined}
                    rel={item.label === "Website" ? "noopener noreferrer" : undefined}
                    className="group flex items-center gap-4 p-6 rounded-2xl bg-brand-dark border border-border hover:border-brand-primary/50 transition-all duration-300"
                  >
                    <div className="w-12 h-12 rounded-xl bg-surface border border-border flex items-center justify-center text-brand-primary group-hover:bg-brand-primary/10 transition-colors">
                      <Icon size={20} />
                    </div>
                    <div>
                      <p className="text-sm font-medium text-text-muted mb-1 uppercase tracking-wide">{item.label}</p>
                      <p className="text-base font-semibold text-brand-light group-hover:text-brand-primary transition-colors">{item.value}</p>
                    </div>
                  </a>
                );
              })}
            </div>

            {/* Map */}
            <div className="rounded-2xl overflow-hidden flex-1 min-h-[260px] bg-brand-dark border border-border relative">
              <iframe
                title="Siltawi Digital Marketing - Addis Ababa Location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d126764.87249792327!2d38.65817774999999!3d9.005400600000002!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x164b85cef5ab402d%3A0x8467b6b037a24d49!2sAddis%20Ababa%2C%20Ethiopia!5e0!3m2!1sen!2sus!4v1718000000000!5m2!1sen!2sus"
                width="100%"
                height="100%"
                style={{ border: 0, filter: "grayscale(100%) invert(90%) opacity(0.8)", minHeight: "260px" }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
              <div className="absolute bottom-4 left-4 right-4 p-4 rounded-xl bg-surface/90 backdrop-blur border border-border flex justify-between items-center">
                <span className="text-brand-light font-semibold text-sm">Addis Ababa HQ</span>
                <span className="text-brand-primary text-xs font-bold px-2 py-1 bg-brand-primary/10 rounded-md">Open</span>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Form */}
          <motion.div
            className="lg:col-span-3 h-full"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1 }}
          >
            <div className="p-8 md:p-12 rounded-3xl bg-brand-dark border border-border h-full">
              <h3 className="text-2xl font-bold text-brand-light mb-8">Send us a Message</h3>
              
              {formState === "success" ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="h-full flex flex-col items-center justify-center text-center py-20"
                >
                  <div className="w-20 h-20 rounded-full bg-brand-primary/10 border border-brand-primary/30 flex items-center justify-center mb-6">
                    <CheckCircle2 size={40} className="text-brand-primary" />
                  </div>
                  <h4 className="text-2xl font-bold text-brand-light mb-4">Message Sent Successfully!</h4>
                  <p className="text-text-muted max-w-sm">
                    Thank you for reaching out. A strategist from our team will contact you within 24 hours.
                  </p>
                </motion.div>
              ) : (
                <form ref={formRef} onSubmit={handleSubmit} className="flex flex-col gap-6">
                  
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <FormField id="contact-name" label="Full Name" type="text" placeholder="John Doe" required />
                    <FormField id="contact-email" label="Email Address" type="email" placeholder="john@example.com" required />
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <FormField id="contact-phone" label="Phone Number" type="tel" placeholder="+251 900 000 000" />
                    <FormField id="contact-company" label="Company Name" type="text" placeholder="Your Brand" />
                  </div>

                  <div className="flex flex-col gap-3">
                    <label className="text-xs font-semibold text-text-muted uppercase tracking-wider">Service of Interest</label>
                    <div className="flex flex-wrap gap-2">
                      {SERVICES.map((service) => (
                        <button
                          key={service}
                          type="button"
                          onClick={() => setSelectedService(selectedService === service ? "" : service)}
                          className="text-sm px-4 py-2 rounded-full font-medium transition-all duration-200 cursor-pointer"
                          style={
                            selectedService === service
                              ? { background: "#E5A910", color: "#120F0E", border: "1px solid #E5A910" }
                              : { background: "#1A1615", color: "#FAFAF7", border: "1px solid #2E2624" }
                          }
                        >
                          {service}
                        </button>
                      ))}
                    </div>
                  </div>

                  <div className="flex flex-col gap-3">
                    <label htmlFor="contact-message" className="text-xs font-semibold text-text-muted uppercase tracking-wider">Project Details</label>
                    <textarea
                      id="contact-message"
                      rows={5}
                      placeholder="Tell us about your goals, timeline, and budget..."
                      required
                      className="w-full rounded-xl px-5 py-4 text-sm resize-none outline-none transition-all duration-200 bg-surface border border-border text-brand-light focus:border-brand-primary focus:ring-1 focus:ring-brand-primary"
                    />
                  </div>

                  <motion.button
                    type="submit"
                    disabled={formState === "loading"}
                    whileHover={{ scale: 1.01 }}
                    whileTap={{ scale: 0.99 }}
                    className="w-full flex items-center justify-center gap-3 px-8 py-4 rounded-xl font-semibold text-base transition-all duration-300 cursor-pointer disabled:opacity-70 disabled:cursor-not-allowed mt-4 bg-brand-primary text-brand-dark hover:bg-[#c97d10]"
                  >
                    {formState === "loading" ? (
                      <>
                        <Loader2 size={18} className="animate-spin" />
                        Sending...
                      </>
                    ) : (
                      <>
                        Send Inquiry
                        <Send size={18} />
                      </>
                    )}
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

function FormField({
  id,
  label,
  type,
  placeholder,
  required,
}: {
  id: string;
  label: string;
  type: string;
  placeholder: string;
  required?: boolean;
}) {
  return (
    <div className="flex flex-col gap-3">
      <label
        htmlFor={id}
        className="text-xs font-semibold text-text-muted uppercase tracking-wider"
      >
        {label}
        {required && (
          <span className="text-brand-primary ml-1">*</span>
        )}
      </label>
      <input
        id={id}
        type={type}
        placeholder={placeholder}
        required={required}
        className="w-full rounded-xl px-5 py-4 text-sm outline-none transition-all duration-200 bg-surface border border-border text-brand-light focus:border-brand-primary focus:ring-1 focus:ring-brand-primary"
      />
    </div>
  );
}
