"use client";

import { motion } from "framer-motion";
import {
  Users,
  Palette,
  BadgeDollarSign,
  Zap,
  BarChart3,
  Headphones,
  Lightbulb,
  Shield,
  Award,
  Heart,
  BookOpen,
  Store,
  Rocket,
  UtensilsCrossed,
  GraduationCap,
  Building2,
  HeartHandshake,
  Stethoscope,
  ShoppingBag,
} from "lucide-react";

const WHY_ITEMS = [
  {
    icon: Users,
    title: "Experienced Digital Team",
    description:
      "Seasoned specialists across every discipline of digital marketing, working together for your brand.",
  },
  {
    icon: Palette,
    title: "Creative & Modern Designs",
    description:
      "Cutting-edge visuals that capture attention, communicate your identity, and leave lasting impressions.",
  },
  {
    icon: BadgeDollarSign,
    title: "Affordable Pricing",
    description:
      "Premium-quality work packaged at rates designed to fit startups and growing businesses alike.",
  },
  {
    icon: Zap,
    title: "Fast Project Delivery",
    description:
      "Efficient workflows that consistently meet your deadlines without ever compromising on quality.",
  },
  {
    icon: BarChart3,
    title: "Data-Driven Strategies",
    description:
      "Every campaign and decision is backed by analytics, audience insights, and measurable KPIs.",
  },
  {
    icon: Headphones,
    title: "Ongoing Support & Consultation",
    description:
      "We don't disappear after launch — continuous consultation and support is part of every engagement.",
  },
];

const CORE_VALUES = [
  { icon: Lightbulb, label: "Innovation" },
  { icon: Palette, label: "Creativity" },
  { icon: Shield, label: "Transparency" },
  { icon: Award, label: "Excellence" },
  { icon: Heart, label: "Customer Success" },
  { icon: BookOpen, label: "Continuous Learning" },
];

const TARGET_CLIENTS = [
  { icon: Store, label: "Small Businesses" },
  { icon: Rocket, label: "Startups" },
  { icon: UtensilsCrossed, label: "Restaurants & Cafes" },
  { icon: GraduationCap, label: "Educational Institutions" },
  { icon: Building2, label: "Real Estate Companies" },
  { icon: HeartHandshake, label: "NGOs" },
  { icon: Stethoscope, label: "Healthcare Providers" },
  { icon: ShoppingBag, label: "E-commerce Businesses" },
];

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] as const },
  },
};

export default function WhyChooseUs() {
  return (
    <section id="why-us" className="py-24 bg-surface border-b border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-24">

        {/* ── Why Choose Siltawi ── */}
        <div>
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] as const }}
          >
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-brand-light mb-6">
              Why Choose <span className="text-brand-primary">Siltawi?</span>
            </h2>
            <p className="max-w-2xl mx-auto text-text-muted text-lg leading-relaxed">
              We combine the right tools, talent, and tenacity to deliver results
              that truly matter to your business.
            </p>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {WHY_ITEMS.map((item) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={item.title}
                  variants={itemVariants}
                  className="group p-8 rounded-2xl bg-brand-dark border border-border hover:border-brand-primary/40 transition-all duration-300"
                >
                  <div className="flex items-start gap-5">
                    <div className="w-12 h-12 rounded-xl bg-brand-primary/10 border border-brand-primary/20 flex items-center justify-center shrink-0 group-hover:bg-brand-primary/20 transition-colors">
                      <Icon className="w-5 h-5 text-brand-primary" />
                    </div>
                    <div>
                      <h3 className="font-bold text-lg text-brand-light mb-2">
                        {item.title}
                      </h3>
                      <p className="text-text-muted text-sm leading-relaxed">
                        {item.description}
                      </p>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        </div>

        {/* ── Divider ── */}
        <div className="border-t border-border" />

        {/* ── Core Values ── */}
        <div>
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-brand-light mb-4">
              Our Core <span className="text-brand-primary">Values</span>
            </h2>
            <p className="text-text-muted text-base max-w-xl mx-auto">
              The principles that guide every decision, campaign, and client
              relationship at Siltawi.
            </p>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="flex flex-wrap justify-center gap-4"
          >
            {CORE_VALUES.map((val) => {
              const Icon = val.icon;
              return (
                <motion.div
                  key={val.label}
                  variants={itemVariants}
                  className="group flex items-center gap-3 px-7 py-4 rounded-full bg-brand-dark border border-border hover:border-brand-primary/50 hover:bg-brand-primary/5 transition-all duration-300 cursor-default"
                >
                  <Icon className="w-4 h-4 text-brand-primary" />
                  <span className="text-sm font-semibold text-brand-light">
                    {val.label}
                  </span>
                </motion.div>
              );
            })}
          </motion.div>
        </div>

        {/* ── Divider ── */}
        <div className="border-t border-border" />

        {/* ── Who We Serve ── */}
        <div>
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-brand-light mb-4">
              Who We <span className="text-brand-primary">Serve</span>
            </h2>
            <p className="text-text-muted text-base max-w-xl mx-auto">
              From early-stage startups to established enterprises — we craft
              tailored solutions for every industry.
            </p>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4"
          >
            {TARGET_CLIENTS.map((client) => {
              const Icon = client.icon;
              return (
                <motion.div
                  key={client.label}
                  variants={itemVariants}
                  className="group flex flex-col items-center gap-3 p-6 rounded-2xl bg-brand-dark border border-border hover:border-brand-primary/40 hover:bg-brand-primary/5 transition-all duration-300 text-center cursor-default"
                >
                  <div className="w-11 h-11 rounded-full bg-brand-primary/10 flex items-center justify-center group-hover:bg-brand-primary/20 transition-colors">
                    <Icon className="w-5 h-5 text-brand-primary" />
                  </div>
                  <span className="text-sm font-medium text-text-muted group-hover:text-brand-light transition-colors leading-snug">
                    {client.label}
                  </span>
                </motion.div>
              );
            })}
          </motion.div>
        </div>

      </div>
    </section>
  );
}
