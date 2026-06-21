"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function About() {
  return (
    <section id="about" className="py-24 bg-brand-dark border-y border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          
          {/* Content Left */}
          <div className="lg:w-1/2">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            >
              <h2 className="text-brand-light text-4xl md:text-5xl font-bold tracking-tight mb-6">
                Redefining Digital Excellence in <span className="text-brand-primary">Ethiopia</span>
              </h2>
              
              <div className="space-y-6 text-text-muted text-lg leading-relaxed mb-10 font-light">
                <p>
                  Siltawi Digital Marketing is a premier agency based in Addis Ababa. We believe that in today's crowded digital landscape, generic solutions no longer cut it. Brands need distinctive voices, sharp strategies, and flawless execution.
                </p>
                <p>
                  Founded in 2023, we partner with visionary startups, small businesses, and established enterprises to elevate their brand presence. We don't just generate leads; we build lasting digital legacies through innovative, data-backed solutions.
                </p>
                <div className="p-6 rounded-2xl bg-surface border border-border text-brand-light mt-8">
                  <h3 className="text-sm font-bold uppercase tracking-wider text-brand-primary mb-2">Our Mission</h3>
                  <p className="text-base text-text-muted mb-6 leading-relaxed">
                    To empower businesses with innovative digital marketing solutions that drive growth, enhance brand visibility, and create meaningful customer connections.
                  </p>
                  <h3 className="text-sm font-bold uppercase tracking-wider text-brand-primary mb-2">Our Vision</h3>
                  <p className="text-base text-text-muted leading-relaxed">
                    To become one of Africa's leading digital marketing agencies by delivering creative, data-driven, and results-oriented digital solutions.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Graphic Right */}
          <div className="lg:w-1/2 w-full">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="relative aspect-square md:aspect-4/3 rounded-3xl overflow-hidden bg-surface border border-border flex items-center justify-center p-8"
            >
              {/* Image Graphic */}
              <div className="w-full h-full relative">
                <Image 
                  src="/images/about-office.png" 
                  alt="Siltawi Digital Marketing team in Addis Ababa office" 
                  fill 
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover rounded-2xl opacity-80 grayscale hover:grayscale-0 transition-all duration-700" 
                />
                <div className="absolute inset-0 border border-border rounded-2xl mix-blend-overlay" />
                <div className="absolute inset-0 bg-linear-to-t from-surface via-transparent to-transparent opacity-80 rounded-2xl pointer-events-none" />
                
                {/* Floating elements */}
                <div className="absolute -right-4 top-1/3 p-4 bg-brand-dark/90 border border-border rounded-xl shadow-2xl backdrop-blur-md">
                  <div className="text-xs text-text-muted font-medium uppercase tracking-wider mb-1">Growth</div>
                  <div className="text-xl font-bold text-brand-light">+240%</div>
                </div>
              </div>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}
