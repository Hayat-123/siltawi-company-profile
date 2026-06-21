"use client";

import { useRef, useEffect, useState } from "react";
import { motion, useInView } from "framer-motion";
import { Briefcase, Users, UserCheck, Clock, ThumbsUp } from "lucide-react";

const STATS = [
  {
    value: 100,
    suffix: "+",
    label: "Projects Completed",
    description: "Delivered across Ethiopia & beyond",
    icon: Briefcase,
  },
  {
    value: 50,
    suffix: "+",
    label: "Active Clients",
    description: "Brands we proudly serve today",
    icon: Users,
  },
  {
    value: 15,
    suffix: "",
    label: "Team Members",
    description: "Specialists across every discipline",
    icon: UserCheck,
  },
  {
    value: 3,
    suffix: "+",
    label: "Years of Experience",
    description: "Building digital excellence since 2023",
    icon: Clock,
  },
  {
    value: 95,
    suffix: "%",
    label: "Client Satisfaction",
    description: "Our clients love what we deliver",
    icon: ThumbsUp,
  },
];

function CountUp({
  target,
  suffix,
  inView,
}: {
  target: number;
  suffix: string;
  inView: boolean;
}) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!inView) return;
    const duration = 2000;
    const startTime = performance.now();

    const tick = (now: number) => {
      const elapsed = now - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3); // ease-out cubic
      setCount(Math.floor(eased * target));
      if (progress < 1) requestAnimationFrame(tick);
    };

    const id = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(id);
  }, [inView, target]);

  return (
    <>
      {count}
      {suffix}
    </>
  );
}

export default function Stats() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="stats" className="py-24 bg-surface border-b border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <motion.div
          className="text-center mb-14"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        >
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-brand-light mb-4">
            Our <span className="text-brand-primary">Impact</span> in Numbers
          </h2>
          <p className="text-text-muted text-lg max-w-xl mx-auto leading-relaxed">
            Real results that speak for themselves — from our very first project
            to today.
          </p>
        </motion.div>

        {/* Stats grid */}
        <div
          ref={ref}
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-5"
        >
          {STATS.map((stat, i) => {
            const Icon = stat.icon;
            return (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="group flex flex-col items-center text-center p-8 rounded-2xl bg-brand-dark border border-border hover:border-brand-primary/40 transition-all duration-300 hover:bg-[#161210]"
              >
                <div className="w-12 h-12 rounded-full bg-brand-primary/10 border border-brand-primary/20 flex items-center justify-center mb-5 group-hover:bg-brand-primary/20 transition-colors duration-300">
                  <Icon className="w-5 h-5 text-brand-primary" />
                </div>
                <div className="text-4xl md:text-5xl font-bold text-brand-light mb-2 tabular-nums leading-none">
                  <CountUp
                    target={stat.value}
                    suffix={stat.suffix}
                    inView={inView}
                  />
                </div>
                <div className="text-xs font-bold uppercase tracking-widest text-brand-primary mb-2">
                  {stat.label}
                </div>
                <div className="text-xs text-text-muted leading-relaxed">
                  {stat.description}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
