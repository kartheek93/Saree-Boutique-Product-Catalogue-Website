"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import {
  motion,
  useMotionValue,
  useSpring,
  useTransform,
} from "framer-motion";
import { ArrowRight } from "lucide-react";

import { siteConfig } from "@/lib/site-config";
import { WhatsAppCTA } from "@/components/shared/whatsapp-cta";
import { generalInquiryMessage } from "@/lib/whatsapp";

/**
 * Particle Hero — the cinematic opening of the site.
 *
 * The spotlight reveals the company name in a cool light, then the whole scene
 * AUTOMATICALLY converts to bright, rich gold. The content reacts to the cursor
 * with a 3D tilt (perspective + rotateX/rotateY), and the orb / particles
 * parallax for depth. In-house build (the 21st.dev "particle-hero" is paywalled),
 * animated with CSS + Framer Motion — transform/opacity only.
 */

// Deterministic particle field (no Math.random → no hydration mismatch).
const PARTICLES = Array.from({ length: 60 }, (_, i) => ({
  left: (i * 61.8) % 100,
  top: (i * 38.2 + (i % 7) * 5) % 100,
  size: (i % 3) + 1,
  delay: (i % 9) * 0.4,
  dur: 3 + (i % 5),
  depth: (i % 3) + 1, // for parallax
}));

export function ParticleHero() {
  // Auto-convert to gold shortly after the name appears.
  const [gold, setGold] = useState(false);
  useEffect(() => {
    const t = setTimeout(() => setGold(true), 1700);
    return () => clearTimeout(t);
  }, []);

  // 3D tilt driven by cursor position.
  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const rotateY = useSpring(useTransform(mx, [-0.5, 0.5], [-13, 13]), {
    stiffness: 120,
    damping: 18,
  });
  const rotateX = useSpring(useTransform(my, [-0.5, 0.5], [9, -9]), {
    stiffness: 120,
    damping: 18,
  });
  // parallax offsets for depth layers
  const pX = useSpring(useTransform(mx, [-0.5, 0.5], [-24, 24]), { stiffness: 80, damping: 20 });
  const pY = useSpring(useTransform(my, [-0.5, 0.5], [-16, 16]), { stiffness: 80, damping: 20 });

  const sectionRef = useRef<HTMLElement>(null);
  const onMove = (e: React.MouseEvent) => {
    const r = sectionRef.current?.getBoundingClientRect();
    if (!r) return;
    mx.set((e.clientX - r.left) / r.width - 0.5);
    my.set((e.clientY - r.top) / r.height - 0.5);
  };
  const onLeave = () => {
    mx.set(0);
    my.set(0);
  };

  const beam = gold ? "rgba(255,205,90," : "rgba(208,222,255,";
  const dust = gold ? "rgba(255,210,110,0.85)" : "rgba(220,230,255,0.7)";
  const dustGlow = gold ? "rgba(255,200,90,0.7)" : "rgba(200,220,255,0.6)";

  return (
    <section
      ref={sectionRef}
      onMouseMove={onMove}
      onMouseLeave={onLeave}
      className="relative isolate flex min-h-screen flex-col items-center justify-center overflow-hidden transition-colors duration-1000"
      style={{
        perspective: 1200,
        backgroundColor: gold ? "#0c0702" : "#0a0510",
      }}
    >
      {/* glowing orb (parallax) */}
      <motion.div
        style={{ x: pX, y: pY }}
        className="absolute left-1/2 top-[11%] z-10 -translate-x-1/2"
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.6 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="size-14 rounded-full transition-all duration-1000"
          style={{
            backgroundColor: gold ? "#1a1102" : "#0a0510",
            boxShadow: `0 0 55px 10px ${gold ? "rgba(255,200,90,0.65)" : "rgba(200,220,255,0.5)"}, 0 0 150px 50px ${beam}0.25)`,
          }}
        />
      </motion.div>

      {/* spotlight beam (parallax) */}
      <motion.div
        style={{ x: pX }}
        initial={{ opacity: 0, scaleY: 0.7 }}
        animate={{ opacity: 1, scaleY: 1 }}
        transition={{ duration: 1.2, ease: "easeOut", delay: 0.15 }}
        className="pointer-events-none absolute left-1/2 top-[12%] z-0 h-[82%] w-[64%] -translate-x-1/2 origin-top transition-all duration-1000"
      >
        <div
          className="size-full transition-all duration-1000"
          style={{
            background: `linear-gradient(to bottom, ${beam}${gold ? "0.30" : "0.20"}), ${beam}0.05) 55%, transparent 90%)`,
            clipPath: "polygon(47% 0, 53% 0, 86% 100%, 14% 100%)",
            filter: "blur(22px)",
          }}
        />
      </motion.div>

      {/* particle field (parallax by depth) */}
      <motion.div style={{ x: pX, y: pY }} className="pointer-events-none absolute inset-0 z-0">
        {PARTICLES.map((p, i) => (
          <span
            key={i}
            className="absolute rounded-full transition-colors duration-1000"
            style={{
              left: `${p.left}%`,
              top: `${p.top}%`,
              width: p.size * p.depth,
              height: p.size * p.depth,
              backgroundColor: dust,
              boxShadow: `0 0 ${4 + p.depth * 2}px ${dustGlow}`,
              animation: `cj-twinkle ${p.dur}s ease-in-out ${p.delay}s infinite`,
            }}
          />
        ))}
      </motion.div>

      {/* content — 3D tilt */}
      <motion.div
        style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
        className="relative z-20 flex flex-col items-center px-6 text-center"
      >
        <motion.span
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.5 }}
          className="mb-5 text-xs font-semibold uppercase tracking-[0.4em] transition-colors duration-1000"
          style={{ color: gold ? "rgba(232,205,135,0.85)" : "rgba(255,255,255,0.6)", transform: "translateZ(40px)" }}
        >
          {siteConfig.address.city} · Saree Boutique
        </motion.span>

        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="font-heading text-6xl font-semibold leading-[0.95] tracking-tight transition-all duration-1000 sm:text-8xl md:text-[8.5rem]"
          style={{
            transform: "translateZ(70px)",
            backgroundImage: gold
              ? "linear-gradient(180deg, #fff3c4 0%, #f2cf6b 38%, #c9a84c 70%, #9a7b2e 100%)"
              : "linear-gradient(180deg, #ffffff 0%, #ffffff 55%, rgba(255,255,255,0.6) 100%)",
            WebkitBackgroundClip: "text",
            backgroundClip: "text",
            color: "transparent",
            textShadow: gold
              ? "0 1px 0 rgba(255,240,190,0.4), 0 0 55px rgba(255,200,90,0.55), 0 12px 30px rgba(120,80,10,0.5)"
              : "0 0 45px rgba(200,220,255,0.4)",
          }}
        >
          {siteConfig.name}
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.9 }}
          className="mt-5 max-w-md text-base transition-colors duration-1000 sm:text-lg"
          style={{ color: gold ? "rgba(245,225,180,0.8)" : "rgba(255,255,255,0.7)", transform: "translateZ(30px)" }}
        >
          {siteConfig.tagline}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.05 }}
          className="mt-9 flex flex-wrap items-center justify-center gap-3"
          style={{ transform: "translateZ(20px)" }}
        >
          <Link
            href="/sarees"
            className="group inline-flex h-12 items-center justify-center gap-2 rounded-full bg-gold px-7 text-base font-semibold text-plum transition-all hover:bg-[#e8c765] hover:shadow-lg hover:shadow-gold/30 active:translate-y-px"
          >
            Browse the Collection
            <ArrowRight className="size-4 transition-transform group-hover:translate-x-0.5" />
          </Link>
          <WhatsAppCTA message={generalInquiryMessage()} label="Chat on WhatsApp" size="lg" />
        </motion.div>
      </motion.div>

      {/* fade into the cream page below */}
      <div className="pointer-events-none absolute inset-x-0 bottom-0 z-10 h-32 bg-gradient-to-b from-transparent to-background" />

      {/* scroll hint */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.5 }}
        className="absolute bottom-8 left-1/2 z-20 -translate-x-1/2 text-[11px] uppercase tracking-[0.25em] transition-colors duration-1000"
        style={{ color: gold ? "rgba(232,205,135,0.7)" : "rgba(255,255,255,0.5)" }}
      >
        Scroll to explore ↓
      </motion.div>
    </section>
  );
}
