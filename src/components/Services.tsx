"use client";

import { motion } from "framer-motion";
import { Megaphone, Globe, Palette, Video, Search, ArrowUpRight } from "lucide-react";

const SERVICES = [
  {
    title: "Digital Marketing",
    description: "Data-driven campaigns across social media, targeted ads, and influencer partnerships to maximize your ROI.",
    icon: Megaphone,
    tags: ["Social Media", "Ads", "Influencer"]
  },
  {
    title: "Website Development",
    description: "High-performance company profiles, e-commerce platforms, and landing pages built for conversion and scale.",
    icon: Globe,
    tags: ["Profiles", "E-commerce", "Landing Pages", "Maintenance"]
  },
  {
    title: "Branding & Design",
    description: "Comprehensive brand identities, striking logos, and intuitive UI/UX design that captures your unique essence.",
    icon: Palette,
    tags: ["Logo", "Identity", "UI/UX"]
  },
  {
    title: "Content Creation",
    description: "Compelling storytelling through professional photography, cinematic video, and engaging social content.",
    icon: Video,
    tags: ["Social Content", "Video", "Photography"]
  },
  {
    title: "SEO Services",
    description: "Technical, on-page, and local SEO strategies to dominate search rankings and drive organic traffic.",
    icon: Search,
    tags: ["On-Page", "Technical", "Local"]
  }
];

export default function Services() {
  return (
    <section id="services" className="py-24 bg-surface">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row gap-16">
          
          {/* Section Heading Area */}
          <div className="lg:w-1/3">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="sticky top-32"
            >
              <h2 className="text-brand-light text-4xl md:text-5xl font-bold tracking-tight mb-6">
                Our <span className="text-brand-primary">Expertise</span>
              </h2>
              <p className="text-text-muted text-lg leading-relaxed mb-8">
                We combine creative thinking with technical precision to deliver solutions that drive real business growth across digital channels.
              </p>
              <a 
                href="#contact" 
                className="inline-flex items-center gap-2 text-brand-primary font-semibold hover:text-brand-light transition-colors group"
              >
                Discuss your needs 
                <ArrowUpRight className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </a>
            </motion.div>
          </div>

          {/* Services Grid */}
          <div className="lg:w-2/3">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {SERVICES.map((service, index) => {
                const Icon = service.icon;
                return (
                  <motion.div
                    key={service.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className={`group p-8 rounded-2xl bg-brand-dark border border-border hover:border-brand-primary/50 transition-colors ${
                      index === SERVICES.length - 1 ? "md:col-span-2" : ""
                    }`}
                  >
                    <div className="w-12 h-12 rounded-full bg-surface border border-border flex items-center justify-center mb-6 group-hover:bg-brand-primary/10 transition-colors">
                      <Icon className="w-5 h-5 text-brand-primary" />
                    </div>
                    
                    <h3 className="text-xl font-bold text-brand-light mb-3">{service.title}</h3>
                    <p className="text-text-muted text-sm leading-relaxed mb-6">
                      {service.description}
                    </p>
                    
                    <div className="flex flex-wrap gap-2 mt-auto">
                      {service.tags.map(tag => (
                        <span key={tag} className="text-xs font-medium px-3 py-1 rounded-full bg-surface text-text-muted border border-border">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
