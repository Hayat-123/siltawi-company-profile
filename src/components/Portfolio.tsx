"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import {
  Megaphone,
  Globe,
  Palette,
  Video,
  Search,
  ExternalLink,
  BarChart2,
  Code2,
  Brush,
  Camera,
  TrendingUp,
  MousePointerClick,
} from "lucide-react";

const CATEGORIES = [
  { id: "all", label: "All Work" },
  { id: "digital-marketing", label: "Digital Marketing" },
  { id: "web-development", label: "Web Development" },
  { id: "branding", label: "Branding & Design" },
  { id: "content", label: "Content Creation" },
  { id: "seo", label: "SEO Services" },
];

const CATEGORY_ICONS: Record<string, React.ReactNode> = {
  "digital-marketing": <Megaphone size={14} />,
  "web-development": <Globe size={14} />,
  branding: <Palette size={14} />,
  content: <Video size={14} />,
  seo: <Search size={14} />,
};

// Visual icon and gradient for each project thumbnail
interface Project {
  id: number;
  title: string;
  category: string;
  categoryLabel: string;
  imageUrl: string;
  thumbIcon: React.ElementType;
  thumbAccent: string;
  description: string;
  tags: string[];
  metric?: string;
}

const PROJECTS: Project[] = [
  {
    id: 1,
    title: "Brand Awareness Campaign",
    category: "digital-marketing",
    categoryLabel: "Digital Marketing",
    imageUrl: "/images/portfolio-brand-awareness.png",
    thumbIcon: Megaphone,
    thumbAccent: "#E5A910",
    description: "Full-scale social media campaign driving 200% growth in online engagement for a local retail brand.",
    tags: ["Social Media", "Ads", "Influencer"],
    metric: "+200% Engagement",
  },
  {
    id: 2,
    title: "E-Commerce Platform",
    category: "web-development",
    categoryLabel: "Web Development",
    imageUrl: "/images/portfolio-ecommerce.png",
    thumbIcon: Code2,
    thumbAccent: "#c97d10",
    description: "Modern e-commerce website with seamless payment integration and mobile-first responsive design.",
    tags: ["E-Commerce", "React", "UX Design"],
    metric: "3x Conversion",
  },
  {
    id: 3,
    title: "Corporate Brand Identity",
    category: "branding",
    categoryLabel: "Branding & Design",
    imageUrl: "/images/portfolio-branding.png",
    thumbIcon: Brush,
    thumbAccent: "#F8D424",
    description: "End-to-end brand identity system including logo, color palette, typography, and brand guidelines.",
    tags: ["Logo", "Brand Identity", "UI/UX"],
    metric: "Full Rebrand",
  },
  {
    id: 4,
    title: "Social Content Strategy",
    category: "content",
    categoryLabel: "Content Creation",
    imageUrl: "/images/portfolio-content.png",
    thumbIcon: Camera,
    thumbAccent: "#F05253",
    description: "Monthly content production covering photo shoots, reels, and editorial copy for a lifestyle brand.",
    tags: ["Photography", "Video", "Copywriting"],
    metric: "50+ Assets/mo",
  },
  {
    id: 5,
    title: "SEO Growth Engine",
    category: "seo",
    categoryLabel: "SEO Services",
    imageUrl: "/images/portfolio-seo.png",
    thumbIcon: TrendingUp,
    thumbAccent: "#E5A910",
    description: "Technical SEO audit and ongoing optimization that tripled organic traffic in under 4 months.",
    tags: ["On-Page", "Technical", "Local SEO"],
    metric: "+300% Traffic",
  },
  {
    id: 6,
    title: "Landing Page Suite",
    category: "web-development",
    categoryLabel: "Web Development",
    imageUrl: "/images/portfolio-landing-page.png",
    thumbIcon: MousePointerClick,
    thumbAccent: "#c97d10",
    description: "High-converting landing pages A/B tested and deployed for a B2B SaaS client targeting East Africa.",
    tags: ["Landing Page", "CRO", "Analytics"],
    metric: "42% CVR",
  },
  {
    id: 7,
    title: "Influencer Ad Campaign",
    category: "digital-marketing",
    categoryLabel: "Digital Marketing",
    imageUrl: "/images/portfolio-influencer.png",
    thumbIcon: BarChart2,
    thumbAccent: "#F8D424",
    description: "Coordinated multi-influencer campaign generating 1M+ impressions across Ethiopian social platforms.",
    tags: ["Influencer", "Paid Ads", "Strategy"],
    metric: "1M+ Impressions",
  },
  {
    id: 8,
    title: "Product Video Series",
    category: "content",
    categoryLabel: "Content Creation",
    imageUrl: "/images/portfolio-video.png",
    thumbIcon: Video,
    thumbAccent: "#F05253",
    description: "Cinematic product showcase videos produced for a premium coffee brand targeting international markets.",
    tags: ["Video Production", "Photography", "Storytelling"],
    metric: "12 Episodes",
  },
];

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08 } },
};

const cardVariants = {
  hidden: { opacity: 0, y: 32, scale: 0.96 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] as const },
  },
  exit: {
    opacity: 0,
    scale: 0.9,
    y: -16,
    transition: { duration: 0.25 },
  },
};

export default function Portfolio() {
  const [activeCategory, setActiveCategory] = useState("all");

  const filtered =
    activeCategory === "all"
      ? PROJECTS
      : PROJECTS.filter((p) => p.category === activeCategory);

  return (
    <section
      id="portfolio"
      className="relative py-24 overflow-hidden bg-brand-dark"
    >
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        >
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-brand-light mb-6">
            Featured <span className="text-brand-primary">Case Studies</span>
          </h2>
          <p className="max-w-2xl mx-auto text-text-muted text-lg leading-relaxed">
            A curated selection of campaigns, builds, and creative work that drive measurable impact for our clients.
          </p>
        </motion.div>

        {/* Filter tabs */}
        <motion.div
          className="flex flex-wrap justify-center gap-3 mb-16"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          {CATEGORIES.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className="flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-300 cursor-pointer"
              style={
                activeCategory === cat.id
                  ? {
                      background: "var(--color-surface)",
                      color: "var(--color-brand-primary)",
                      border: "1px solid var(--color-brand-primary)",
                    }
                  : {
                      background: "transparent",
                      color: "var(--color-text-muted)",
                      border: "1px solid var(--color-border)",
                    }
              }
            >
              {cat.id !== "all" && CATEGORY_ICONS[cat.id]}
              {cat.label}
            </button>
          ))}
        </motion.div>

        {/* Project Grid */}
        <motion.div
          layout
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 gap-8"
        >
          <AnimatePresence mode="popLayout">
            {filtered.map((project) => {
              return (
                <motion.article
                  key={project.id}
                  layout
                  variants={cardVariants}
                  initial="hidden"
                  animate="visible"
                  exit="exit"
                  className="group relative rounded-2xl overflow-hidden cursor-pointer bg-surface border border-border hover:border-brand-primary/30 transition-all duration-500"
                >
                  {/* Image thumbnail */}
                  <div className="relative h-64 md:h-80 overflow-hidden bg-surface flex items-center justify-center">
                    <Image
                      src={project.imageUrl}
                      alt={project.title}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      className="object-cover transition-transform duration-700 group-hover:scale-110 opacity-60 group-hover:opacity-100"
                    />
                    
                    {/* Dark gradient overlay at the bottom for text readability if needed */}
                    <div className="absolute inset-0 bg-linear-to-t from-brand-dark via-transparent to-transparent opacity-80" />

                    {/* Metric badge */}
                    {project.metric && (
                      <div
                        className="absolute bottom-4 right-4 text-sm font-bold px-4 py-1.5 rounded-full bg-brand-dark"
                        style={{
                          color: project.thumbAccent,
                          border: `1px solid #2E2624`,
                        }}
                      >
                        {project.metric}
                      </div>
                    )}

                    {/* Category badge */}
                    <div
                      className="absolute top-4 left-4 flex items-center gap-1.5 text-xs font-semibold px-3 py-1.5 rounded-full bg-brand-dark text-text-muted border border-border"
                    >
                      <span style={{ color: project.thumbAccent }}>{CATEGORY_ICONS[project.category]}</span>
                      {project.categoryLabel}
                    </div>

                    {/* Hover overlay CTA */}
                    <div className="absolute inset-0 bg-brand-dark/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                       <span className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-brand-primary text-brand-primary font-medium tracking-wide">
                         View Case Study <ExternalLink size={16} />
                       </span>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-8">
                    <h3 className="font-bold text-2xl mb-3 text-brand-light group-hover:text-brand-primary transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-text-muted text-sm leading-relaxed mb-6 font-light">
                      {project.description}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {project.tags.map((tag) => (
                        <span
                          key={tag}
                          className="text-xs font-medium px-3 py-1 rounded-full bg-brand-dark text-text-muted border border-border"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </motion.article>
              );
            })}
          </AnimatePresence>
        </motion.div>

        {/* CTA */}
        <motion.div
          className="text-center mt-20"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <a
            href="#contact"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-full font-semibold text-sm transition-all duration-300 border border-border text-brand-light hover:border-brand-primary hover:text-brand-primary"
          >
            Discuss a Similar Project
            <ExternalLink size={16} />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
