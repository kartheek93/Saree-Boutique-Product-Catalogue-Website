"use client";

import { useEffect, useRef } from "react";
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

// Deterministic floating gold silk threads for extra depth
const SILK_THREADS = Array.from({ length: 20 }, (_, i) => ({
  left: (i * 49.7) % 100,
  top: (i * 31.3 + (i % 4) * 9) % 100,
  width: 50 + (i % 4) * 25,
  height: 1 + (i % 2) * 0.5,
  rotate: (i * 18) % 360,
  delay: (i % 4) * 0.4,
  dur: 8 + (i % 3) * 2,
}));

export function SareeHero() {
  // 3D tilt driven by cursor position
  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  
  const rotateY = useSpring(useTransform(mx, [-0.5, 0.5], [-8, 8]), {
    stiffness: 120,
    damping: 18,
  });
  const rotateX = useSpring(useTransform(my, [-0.5, 0.5], [5, -5]), {
    stiffness: 120,
    damping: 18,
  });

  // Parallax offsets for the floating threads
  const pX = useSpring(useTransform(mx, [-0.5, 0.5], [-12, 12]), { stiffness: 80, damping: 20 });
  const pY = useSpring(useTransform(my, [-0.5, 0.5], [-10, 10]), { stiffness: 80, damping: 20 });

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

  return (
    <section
      ref={sectionRef}
      onMouseMove={onMove}
      onMouseLeave={onLeave}
      className="relative isolate flex min-h-screen flex-col items-center justify-center overflow-hidden bg-[#1a0012] py-20 text-white"
      style={{ perspective: 1200 }}
    >
      {/* Photorealistic Maroon Saree Background Image Layer with Wave Panning */}
      <div className="pointer-events-none absolute inset-0 z-0 select-none overflow-hidden bg-[#1a0012]">
        <motion.div
          animate={{
            scale: [1.02, 1.07, 1.02],
            x: [0, -20, 0],
            y: [0, -12, 0],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute inset-0 size-full opacity-80"
          style={{
            backgroundImage: "url('/maroon-saree-bg.png')",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />
        
        {/* Maroon overlay gradients to blend the image and optimize text contrast */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#1a0012]/85 via-[#2a041c]/65 to-[#12000c]" />
        <div className="absolute inset-0 bg-gradient-to-tr from-[#3a0a1a]/40 via-transparent to-[#000000]/70" />
      </div>

      {/* Floating Gold Silk Fibers */}
      <div className="pointer-events-none absolute inset-0 z-0">
        {SILK_THREADS.map((thread, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full bg-gradient-to-r from-gold-soft to-gold opacity-25"
            style={{
              left: `${thread.left}%`,
              top: `${thread.top}%`,
              width: thread.width,
              height: thread.height,
              rotate: thread.rotate,
              boxShadow: "0 0 10px rgba(255, 230, 160, 0.45)",
            }}
            animate={{
              y: [0, -30, 0],
              x: [0, 15, 0],
              rotate: [thread.rotate, thread.rotate + 10, thread.rotate],
              opacity: [0.15, 0.4, 0.15],
            }}
            transition={{
              duration: thread.dur,
              delay: thread.delay,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        ))}
      </div>

      {/* Hero Content (3D tilt on mouse hover) */}
      <motion.div
        style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
        className="relative z-20 flex flex-col items-center px-6 text-center"
      >
        <motion.span
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.5 }}
          className="mb-5 text-xs font-semibold uppercase tracking-[0.4em] text-gold-soft"
          style={{
            transform: "translateZ(40px)",
            textShadow: "0 2px 8px rgba(0,0,0,0.8)"
          }}
        >
          {siteConfig.address.city} · Saree Boutique
        </motion.span>

        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="font-heading text-6xl font-semibold leading-[0.95] tracking-tight sm:text-8xl md:text-[8.5rem]"
          style={{
            transform: "translateZ(70px)",
            backgroundImage: "linear-gradient(180deg, #fff3c4 0%, #f2cf6b 38%, #c9a84c 70%, #9a7b2e 100%)",
            WebkitBackgroundClip: "text",
            backgroundClip: "text",
            color: "transparent",
            textShadow: "0 1px 0 rgba(255,240,190,0.4), 0 0 55px rgba(255,200,90,0.45), 0 12px 30px rgba(0,0,0,0.6)",
          }}
        >
          {siteConfig.name}
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.9 }}
          className="mt-5 max-w-md text-base text-gold-soft/90 font-medium sm:text-lg"
          style={{
            transform: "translateZ(30px)",
            textShadow: "0 2px 10px rgba(0,0,0,0.95)"
          }}
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

      {/* Fade into the cream page below */}
      <div className="pointer-events-none absolute inset-x-0 bottom-0 z-10 h-32 bg-gradient-to-b from-transparent to-background" />

      {/* Scroll hint */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.5 }}
        className="absolute bottom-8 left-1/2 z-20 -translate-x-1/2 text-[11px] uppercase tracking-[0.25em] text-gold-soft/80"
        style={{ textShadow: "0 1px 6px rgba(0,0,0,0.95)" }}
      >
        Scroll to explore ↓
      </motion.div>
    </section>
  );
}
