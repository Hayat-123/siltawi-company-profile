"use client";

import { useRef } from "react";
import Image from "next/image";
import { motion, useInView } from "framer-motion";
import {
  TrendingUp,
  Users,
  Code2,
  Brush,
  Camera,
  SearchCheck,
} from "lucide-react";

const TEAM_MEMBERS = [
  {
    id: 1,
    role: "CEO & Founder",
    description: "Leads company strategy and business development, driving Siltawi's vision for the future of digital marketing in Ethiopia.",
    icon: TrendingUp,
    imageUrl: "/images/team-ceo.jpg",
    glowColor: "rgba(229,169,16,0.25)",
    initials: "SF",
  },
  {
    id: 2,
    role: "Marketing Manager",
    description: "Oversees all marketing campaigns and ensures client success through data-driven strategies and creative execution.",
    icon: Users,
    imageUrl: "/images/team-marketing.jpg",
    glowColor: "rgba(229,169,16,0.2)",
    initials: "MM",
  },
  {
    id: 3,
    role: "Web Development Team",
    description: "Builds cutting-edge websites and web applications using modern technologies that perform and convert.",
    icon: Code2,
    imageUrl: "/images/team-webdev.jpg",
    glowColor: "rgba(74,30,23,0.35)",
    initials: "WD",
  },
  {
    id: 4,
    role: "Graphic Design Team",
    description: "Creates stunning branding systems and visual content that communicate identity and inspire action.",
    icon: Brush,
    imageUrl: "/images/team-design.jpg",
    glowColor: "rgba(74,30,23,0.3)",
    initials: "GD",
  },
  {
    id: 5,
    role: "Content Creation Team",
    description: "Produces photos, videos, and marketing materials that tell authentic stories and grow brand audiences.",
    icon: Camera,
    imageUrl: "/images/team-content.jpg",
    glowColor: "rgba(229,169,16,0.2)",
    initials: "CC",
  },
  {
    id: 6,
    role: "SEO Specialists",
    description: "Improve search engine rankings and website visibility through technical expertise and strategic content optimization.",
    icon: SearchCheck,
    imageUrl: "/images/team-seo.jpg",
    glowColor: "rgba(135,38,117,0.25)",
    initials: "SE",
  },
];

const sectionVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
};

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] as const },
  },
};

export default function Team() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section
      id="team"
      className="relative py-24 overflow-hidden bg-surface"
    >
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] as const }}
        >
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-brand-light mb-6">
            Meet the <span className="text-brand-primary">Team</span>
          </h2>
          <p className="max-w-2xl mx-auto text-text-muted text-lg leading-relaxed">
            A passionate crew of strategists, creators, developers, and specialists united by one goal — your growth.
          </p>
        </motion.div>

        {/* Cards grid */}
        <motion.div
          ref={ref}
          variants={sectionVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {TEAM_MEMBERS.map((member) => {
            const Icon = member.icon;
            return (
              <motion.div
                key={member.id}
                variants={cardVariants}
                className="group relative rounded-2xl overflow-hidden bg-brand-dark border border-border hover:border-brand-primary/40 transition-colors duration-300 flex flex-col"
              >
                {/* Avatar area */}
                <div className="relative h-64 overflow-hidden bg-surface">
                  <Image
                    src={member.imageUrl}
                    alt={member.role}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className="object-cover transition-transform duration-700 group-hover:scale-110 opacity-70 group-hover:opacity-100 grayscale hover:grayscale-0"
                  />
                  
                  <div className="absolute inset-0 bg-linear-to-t from-brand-dark via-transparent to-transparent opacity-90" />

                  {/* Icon badge */}
                  <div
                    className="absolute bottom-4 right-4 w-12 h-12 rounded-xl flex items-center justify-center bg-brand-dark border border-border text-brand-primary group-hover:scale-110 transition-transform duration-300"
                  >
                    <Icon size={20} />
                  </div>
                </div>

                {/* Content */}
                <div className="p-8 flex-1 flex flex-col">
                  <div className="flex items-start justify-between mb-3">
                    <h3 className="font-bold text-xl text-brand-light">
                      {member.role}
                    </h3>
                  </div>
                  <p className="text-text-muted text-sm leading-relaxed font-light">
                    {member.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Bottom CTA strip */}
        <motion.div
          className="mt-20 rounded-2xl p-10 flex flex-col md:flex-row items-center justify-between gap-8 border border-border bg-brand-dark"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <div>
            <h3 className="text-2xl font-bold text-brand-light mb-2">
              Ready to work with a world-class team?
            </h3>
            <p className="text-text-muted text-lg font-light">
              We&apos;re always looking for talented individuals and exciting clients.
            </p>
          </div>
          <a
            href="#contact"
            className="shrink-0 px-8 py-4 rounded-full font-semibold text-base transition-all duration-300 bg-brand-primary text-brand-dark hover:bg-[#c97d10]"
          >
            Get In Touch
          </a>
        </motion.div>
      </div>
    </section>
  );
}
