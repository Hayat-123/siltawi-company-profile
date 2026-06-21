"use client";

import Image from "next/image";
import { Mail, MapPin, Phone } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-brand-dark pt-20 pb-10 border-t border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          
          {/* Brand Col */}
          <div className="lg:col-span-1">
            <Image
              src="/siltawi_logo.svg"
              alt="Siltawi Digital Marketing"
              width={140}
              height={32}
              className="mb-6"
            />
            <p className="text-text-muted text-sm leading-relaxed mb-6 pr-4">
              A premium digital marketing agency in Ethiopia helping brands build their legacy through design, strategy, and execution.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-full bg-surface border border-border flex items-center justify-center text-text-muted hover:text-brand-primary hover:border-brand-primary/50 transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-surface border border-border flex items-center justify-center text-text-muted hover:text-brand-primary hover:border-brand-primary/50 transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path></svg>
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-surface border border-border flex items-center justify-center text-text-muted hover:text-brand-primary hover:border-brand-primary/50 transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-brand-light font-semibold mb-6">Navigation</h4>
            <ul className="space-y-4">
              {["Services", "Portfolio", "About", "Team", "Testimonials"].map((link) => (
                <li key={link}>
                  <a href={`#${link.toLowerCase()}`} className="text-text-muted text-sm hover:text-brand-primary transition-colors">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services Links */}
          <div>
            <h4 className="text-brand-light font-semibold mb-6">Services</h4>
            <ul className="space-y-4">
              {["Digital Marketing", "Web Development", "Branding & Design", "Content Creation", "SEO Strategy"].map((link) => (
                <li key={link}>
                  <a href="#services" className="text-text-muted text-sm hover:text-brand-primary transition-colors">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-brand-light font-semibold mb-6">Contact Us</h4>
            <ul className="space-y-4">
              <li>
                <a href="mailto:info@siltawi.com" className="flex items-center gap-3 text-text-muted text-sm hover:text-brand-light transition-colors">
                  <Mail size={16} className="text-brand-primary" />
                  info@siltawi.com
                </a>
              </li>
              <li>
                <a href="tel:+251900000000" className="flex items-center gap-3 text-text-muted text-sm hover:text-brand-light transition-colors">
                  <Phone size={16} className="text-brand-primary" />
                  +251 900 000 000
                </a>
              </li>
              <li className="flex items-start gap-3 text-text-muted text-sm">
                <MapPin size={16} className="text-brand-primary shrink-0 mt-0.5" />
                <span>Addis Ababa, Ethiopia</span>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom */}
        <div className="pt-8 border-t border-border flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-text-muted text-xs">
            &copy; {new Date().getFullYear()} Siltawi Digital Marketing. All rights reserved.
          </p>
          <div className="flex gap-6">
            <a href="#" className="text-text-muted text-xs hover:text-brand-light transition-colors">Privacy Policy</a>
            <a href="#" className="text-text-muted text-xs hover:text-brand-light transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
