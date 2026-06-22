"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Menu, X } from "lucide-react";

const NAV_LINKS = [
  { label: "Services", href: "#services" },
  { label: "Portfolio", href: "#portfolio" },
  { label: "About", href: "#about" },
  { label: "Team", href: "#team" },
  { label: "Testimonials", href: "#testimonials" },
];

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-brand-dark/80 backdrop-blur-md border-b border-border py-3"
          : "bg-transparent py-5"
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <a href="#" className="flex items-center gap-2 z-50 relative">
            <Image
              src="/siltawi_logo.svg"
              alt="Siltawi Digital Marketing"
              width={140}
              height={32}
              className="object-contain"
            />
          </a>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            {NAV_LINKS.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-sm font-medium text-text-muted hover:text-brand-light transition-colors"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* CTA */}
          <div className="hidden md:flex items-center">
            <a
              href="#contact"
              className="inline-flex items-center justify-center px-6 py-2.5 text-sm font-semibold text-brand-dark bg-brand-primary hover:bg-[#c97d10] transition-colors rounded-full"
            >
              Start Your Project
            </a>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            className="md:hidden relative z-50 p-2 text-brand-light"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle Menu"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <motion.div
        className="fixed inset-0 z-40 bg-brand-dark md:hidden flex flex-col items-center justify-center gap-8"
        initial={{ opacity: 0, clipPath: "circle(0% at top right)" }}
        animate={{
          opacity: isMobileMenuOpen ? 1 : 0,
          clipPath: isMobileMenuOpen
            ? "circle(150% at top right)"
            : "circle(0% at top right)",
        }}
        transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
        style={{ pointerEvents: isMobileMenuOpen ? "auto" : "none" }}
      >
        <nav className="flex flex-col items-center gap-6">
          {NAV_LINKS.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-2xl font-semibold text-brand-light hover:text-brand-primary transition-colors"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {link.label}
            </a>
          ))}
          <a
            href="#contact"
            className="mt-4 px-8 py-3 text-lg font-semibold text-brand-dark bg-brand-primary hover:bg-[#c97d10] transition-colors rounded-full"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Start Your Project
          </a>
        </nav>
      </motion.div>
    </motion.header>
  );
}
