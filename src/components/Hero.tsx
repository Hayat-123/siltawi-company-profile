"use client";

import { motion } from "framer-motion";
import { ArrowRight, MoveRight } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative min-h-[90vh] flex items-center justify-center pt-24 overflow-hidden bg-brand-dark">
      {/* Subtle Premium Background Texture */}
      <div 
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23E5A910' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
        }}
      />
      
      {/* Soft gradient wash */}
      <div className="absolute inset-0 bg-linear-to-b from-surface/50 to-transparent pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="flex flex-col items-center"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-surface border border-border mb-8">
            <span className="w-2 h-2 rounded-full bg-brand-primary animate-pulse" />
            <span className="text-xs font-medium text-text-muted uppercase tracking-wider">
              Addis Ababa's Premier Agency
            </span>
          </div>

          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight text-brand-light leading-[1.1] mb-8 max-w-5xl mx-auto">
            We build brands that <span className="text-brand-primary inline-block">demand attention</span>
          </h1>

          <p className="text-lg md:text-xl text-text-muted max-w-2xl mx-auto mb-10 leading-relaxed font-light">
            Siltawi Digital Marketing helps businesses grow their online presence through branding, web development, and data-driven creative strategies.
          </p>

          <div className="flex flex-col sm:flex-row items-center gap-4 justify-center">
            <a
              href="#contact"
              className="group inline-flex items-center justify-center gap-2 px-8 py-4 text-base font-semibold text-brand-dark bg-brand-primary hover:bg-[#c97d10] transition-all duration-300 rounded-full w-full sm:w-auto"
            >
              Work With Us
              <MoveRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>
            <a
              href="#portfolio"
              className="group inline-flex items-center justify-center gap-2 px-8 py-4 text-base font-medium text-brand-light bg-transparent border border-border hover:border-text-muted transition-all duration-300 rounded-full w-full sm:w-auto"
            >
              View Our Work
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
