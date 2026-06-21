"use client";

import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Quote, Star, ChevronLeft, ChevronRight, Pause, Play } from "lucide-react";

interface Testimonial {
  id: number;
  quote: string;
  author: string;
  company: string;
  rating: number;
  service: string;
  highlight: string;
  initials: string;
  avatarGradient: string;
}

const TESTIMONIALS: Testimonial[] = [
  {
    id: 1,
    quote:
      "Siltawi helped us increase our online sales by 200% within six months. Their team's understanding of the local market, combined with their digital expertise, was truly unmatched.",
    author: "Business Owner",
    company: "Retail Brand, Addis Ababa",
    rating: 5,
    service: "Digital Marketing",
    highlight: "200% increase in online sales",
    initials: "BO",
    avatarGradient: "from-brand-primary to-[#c97d10]",
  },
  {
    id: 2,
    quote:
      "Their website design and marketing services transformed our brand presence completely. We went from invisible online to dominating our niche. Siltawi didn't just build us a website — they built us a brand.",
    author: "Startup Founder",
    company: "Tech Startup, Ethiopia",
    rating: 5,
    service: "Web Development & Branding",
    highlight: "Complete brand transformation",
    initials: "SF",
    avatarGradient: "from-brand-secondary to-[#7a3020]",
  },
  {
    id: 3,
    quote:
      "The content creation team at Siltawi is phenomenal. Every post, every video tells our story in a way we never could ourselves. Our engagement has tripled since partnering with them.",
    author: "Marketing Director",
    company: "Lifestyle Brand, Addis Ababa",
    rating: 5,
    service: "Content Creation",
    highlight: "3x engagement growth",
    initials: "MD",
    avatarGradient: "from-brand-primary to-brand-secondary",
  },
];

function DummyAvatar({
  initials,
  gradient,
}: {
  initials: string;
  gradient: string;
}) {
  return (
    <div
      className={`w-full h-full flex items-center justify-center bg-linear-to-br ${gradient} rounded-full`}
    >
      <span className="text-lg font-bold tracking-wide text-white/95 select-none">
        {initials}
      </span>
    </div>
  );
}

const slideVariants = {
  enter: (direction: number) => ({
    x: direction > 0 ? 80 : -80,
    opacity: 0,
    scale: 0.97,
  }),
  center: {
    x: 0,
    opacity: 1,
    scale: 1,
    transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] as const },
  },
  exit: (direction: number) => ({
    x: direction > 0 ? -80 : 80,
    opacity: 0,
    scale: 0.97,
    transition: { duration: 0.35, ease: [0.22, 1, 0.36, 1] as const },
  }),
};

export default function Testimonials() {
  const [[current, direction], setCurrent] = useState([0, 0]);
  const [paused, setPaused] = useState(false);

  const paginate = useCallback(
    (dir: number) => {
      setCurrent(([prev]) => [
        (prev + dir + TESTIMONIALS.length) % TESTIMONIALS.length,
        dir,
      ]);
    },
    []
  );

  useEffect(() => {
    if (paused) return;
    const timer = setInterval(() => paginate(1), 5500);
    return () => clearInterval(timer);
  }, [paused, paginate]);

  const testimonial = TESTIMONIALS[current];

  return (
    <section
      id="testimonials"
      className="relative py-24 overflow-hidden bg-brand-dark"
    >
      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] as const }}
        >
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-brand-light mb-6">
            Client <span className="text-brand-primary">Testimonials</span>
          </h2>
          <p className="max-w-xl mx-auto text-text-muted text-lg leading-relaxed">
            Real results. Real relationships. Hear from the brands we&apos;ve helped grow.
          </p>
        </motion.div>

        {/* Slider card */}
        <div className="relative rounded-3xl overflow-hidden bg-surface border border-border">
          <div className="p-8 md:p-16 relative">
            {/* Large decorative quote icon */}
            <div className="absolute top-10 right-12 opacity-5 text-brand-primary">
              <Quote size={120} />
            </div>

            <div className="relative min-h-[320px] md:min-h-[260px] flex flex-col">
              <AnimatePresence mode="wait" custom={direction}>
                <motion.div
                  key={current}
                  custom={direction}
                  variants={slideVariants}
                  initial="enter"
                  animate="center"
                  exit="exit"
                  className="flex-1 flex flex-col"
                >
                  {/* Stars */}
                  <div className="flex gap-1.5 mb-8">
                    {Array.from({ length: testimonial.rating }).map((_, i) => (
                      <motion.div
                        key={i}
                        initial={{ opacity: 0, scale: 0 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: i * 0.08, duration: 0.3 }}
                      >
                        <Star className="w-5 h-5 text-brand-primary fill-brand-primary" />
                      </motion.div>
                    ))}
                  </div>

                  {/* Highlight badge */}
                  <div className="mb-6">
                    <span className="inline-block text-xs font-bold px-4 py-1.5 rounded-full bg-brand-dark text-brand-primary border border-border">
                      {testimonial.highlight}
                    </span>
                  </div>

                  {/* Quote text */}
                  <blockquote className="text-xl md:text-3xl font-medium leading-relaxed mb-10 flex-1 text-brand-light">
                    &ldquo;{testimonial.quote}&rdquo;
                  </blockquote>

                  {/* Author info */}
                  <div className="flex items-center gap-5 mt-auto">
                    {/* Styled dummy avatar */}
                    <div className="relative w-14 h-14 rounded-full overflow-hidden shrink-0 border-2 border-brand-primary/30 shadow-lg shadow-brand-primary/10">
                      <DummyAvatar
                        initials={testimonial.initials}
                        gradient={testimonial.avatarGradient}
                      />
                    </div>
                    <div>
                      <p className="font-bold text-brand-light text-lg">
                        {testimonial.author}
                      </p>
                      <p className="text-text-muted text-sm">
                        {testimonial.company}
                      </p>
                    </div>
                    <div className="ml-auto hidden sm:block">
                      <span className="text-sm font-medium px-4 py-2 rounded-full bg-brand-dark text-text-muted border border-border">
                        {testimonial.service}
                      </span>
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </div>

        {/* Controls */}
        <div className="flex items-center justify-between mt-8">
          <div className="flex gap-2">
            {TESTIMONIALS.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrent([i, i > current ? 1 : -1])}
                className="transition-all duration-300 rounded-full cursor-pointer h-2"
                style={{
                  width: i === current ? "32px" : "8px",
                  background: i === current ? "#E5A910" : "#2E2624",
                }}
              />
            ))}
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={() => setPaused((p) => !p)}
              className="w-10 h-10 rounded-full flex items-center justify-center transition-colors bg-surface border border-border text-text-muted hover:text-brand-light"
            >
              {paused ? <Play size={16} /> : <Pause size={16} />}
            </button>
            <div className="flex gap-2">
              <button
                onClick={() => paginate(-1)}
                className="w-10 h-10 rounded-full flex items-center justify-center transition-colors bg-surface border border-border text-text-muted hover:text-brand-light hover:border-brand-primary"
              >
                <ChevronLeft size={20} />
              </button>
              <button
                onClick={() => paginate(1)}
                className="w-10 h-10 rounded-full flex items-center justify-center transition-colors bg-surface border border-border text-text-muted hover:text-brand-light hover:border-brand-primary"
              >
                <ChevronRight size={20} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
