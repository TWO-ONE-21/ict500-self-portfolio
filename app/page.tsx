"use client";

import ParticleBackground from "@/components/ParticleBackground";
import SnapSection from "@/components/SnapSection";
import GlassCard from "@/components/GlassCard";
import SquadGallery from "@/components/SquadGallery";
import ClassGallery from "@/components/ClassGallery";
import { slides } from "@/lib/data";
import { motion } from "framer-motion";
import confetti from "canvas-confetti";

export default function Home() {
  return (
    <main className="snap-y snap-mandatory h-screen w-full overflow-y-scroll scroll-smooth">
      <ParticleBackground />

      {slides.map((slide) => (
        <SnapSection key={slide.id} id={`slide-${slide.id}`}>
          {/* Video Background Logic */}
          {slide.background === "video" && (
            <div className="absolute inset-0 z-0 overflow-hidden">
              <video
                autoPlay
                loop
                muted
                playsInline
                className="w-full h-full object-cover opacity-30 grayscale"
              >
                <source src="/assets/timelapse.mp4" type="video/mp4" />
              </video>
              <div className="absolute inset-0 bg-black/30" /> {/* Overlay to ensure text readability */}
            </div>
          )}

          {slide.type === "intro" && (
            <GlassCard className="w-full max-w-4xl flex flex-col md:flex-row items-stretch bg-black/40 backdrop-blur-xl border-white/5 relative z-10 overflow-hidden min-h-[500px]">
              <div
                className="flex-1 flex flex-col items-center md:items-start justify-center p-8 md:p-12 relative bg-cover bg-center rounded-2xl"
                style={{ backgroundImage: slide.img ? `url('${slide.img}')` : undefined }}
              >
                {/* Dark overlay for readability */}
                <div className="absolute inset-0 bg-black/60 z-0"></div>

                <div className="relative z-10 text-center md:text-left">
                  <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
                    className="text-6xl md:text-8xl font-serif text-[#d4af37] tracking-tight"
                  >
                    {slide.headline}
                  </motion.h1>
                  <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
                    className="text-xl md:text-2xl text-white/90 font-light tracking-[0.2em] uppercase pl-1 shadow-black drop-shadow-md"
                  >
                    {slide.sub}
                  </motion.h2>
                </div>
              </div>
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
                className="flex-1 border-l border-white/10 pl-0 md:pl-8 pt-6 md:pt-0"
              >
                <p
                  className="text-lg md:text-xl leading-relaxed text-white/90 font-light text-justify md:text-left"
                  dangerouslySetInnerHTML={{ __html: slide.body!.replace(/\*\*(.*?)\*\*/g, '<strong class="text-white font-semibold">$1</strong>') }}
                />
              </motion.div>
            </GlassCard>
          )}

          {slide.type === "standard" && (
            <GlassCard className="w-full max-w-3xl flex flex-col items-center text-center space-y-8 bg-black/10 backdrop-blur-[1px] relative z-10">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: "easeOut", staggerChildren: 0.2 }}
                className="space-y-4"
              >
                <motion.h2
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6 }}
                  className="text-sm md:text-base font-medium tracking-[0.3em] text-[#d4af37] uppercase"
                >
                  {slide.headline}
                </motion.h2>
                <motion.h3
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.1 }}
                  className="text-3xl md:text-5xl font-serif text-white tracking-tight"
                >
                  {slide.q}
                </motion.h3>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="relative max-h-[60vh] overflow-y-auto pr-2 custom-scrollbar"
              >
                {/* Decorative quote mark */}
                <span className="absolute -top-8 -left-4 text-8xl font-serif text-white/5 opacity-50">“</span>

                <div
                  className="text-lg md:text-xl leading-8 text-white/80 font-light max-w-2xl px-4"
                  dangerouslySetInnerHTML={{ __html: slide.a!.replace(/\*\*(.*?)\*\*/g, '<span class="text-white font-semibold">$1</span>') }}
                />

                <span className="absolute -bottom-12 -right-4 text-8xl font-serif text-white/5 opacity-50 rotate-180">“</span>
              </motion.div>
            </GlassCard>
          )}

          {slide.type === "squad" && (
            <div className="w-full h-full max-w-7xl relative z-10">
              <SquadGallery />
            </div>
          )}

          {slide.type === "mentor" && (
            <motion.div
              className="w-full h-full flex items-center justify-center relative z-10"
              onViewportEnter={() => {
                confetti({
                  particleCount: 100,
                  spread: 70,
                  origin: { y: 0.6 },
                  colors: ['#d4af37', '#ffffff', '#e5c07b']
                });
              }}
            >
              <GlassCard className="w-full max-w-5xl flex flex-col md:flex-row items-center gap-12 bg-black/40 backdrop-blur-xl border-white/5 p-16 relative z-10">
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.8 }}
                  className="shrink-0 w-full md:w-[480px] aspect-[4/3] bg-white/5 relative overflow-hidden rounded-sm border border-white/10"
                >
                  <div className="absolute inset-0 flex items-center justify-center bg-black/20">
                    <img src="/assets/mentor.webp" className="w-full h-full object-cover" alt="Mentor" />
                  </div>
                </motion.div>

                <div className="flex-1 space-y-6 text-center md:text-left">
                  <motion.h2
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="text-5xl md:text-7xl font-serif text-[#d4af37]"
                  >
                    {slide.headline}
                  </motion.h2>
                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                  >
                    <p className="text-xl md:text-2xl leading-relaxed text-white/90 font-light" dangerouslySetInnerHTML={{ __html: slide.body!.replace(/\*\*(.*?)\*\*/g, '<span class="text-white font-semibold">$1</span>') }} />
                  </motion.div>
                </div>
              </GlassCard>
            </motion.div>
          )}

          {slide.type === "class" && (
            <div className="w-full h-full relative z-10">
              <ClassGallery />
            </div>
          )}

        </SnapSection>
      ))}
    </main>
  );
}
