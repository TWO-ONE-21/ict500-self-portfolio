"use client";

import ParticleBackground from "@/components/ParticleBackground";
import SnapSection from "@/components/SnapSection";
import GlassCard from "@/components/GlassCard";
import SquadGallery from "@/components/SquadGallery";
import ClassGallery from "@/components/ClassGallery";
import { slides } from "@/lib/data";
import { motion } from "framer-motion";

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
            <GlassCard className="w-full max-w-4xl text-center md:text-left flex flex-col md:flex-row gap-8 items-center bg-black/40 backdrop-blur-xl border-white/5 relative z-10">
              <div className="flex-1 space-y-4">
                <motion.h1
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                  className="text-6xl md:text-8xl font-serif text-[#d4af37] tracking-tight"
                >
                  {slide.headline}
                </motion.h1>
                <motion.h2
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.4 }}
                  className="text-xl md:text-2xl text-white/80 font-light tracking-widest pl-1"
                >
                  {slide.sub}
                </motion.h2>
              </div>
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
                className="flex-1 border-l border-white/10 pl-0 md:pl-8 pt-6 md:pt-0"
              >
                <p className="text-lg md:text-xl leading-relaxed text-white/90 font-light text-justify md:text-left">
                  {slide.body}
                </p>
              </motion.div>
            </GlassCard>
          )}

          {slide.type === "standard" && (
            <GlassCard className="w-full max-w-3xl flex flex-col items-center text-center space-y-8 bg-black/10 backdrop-blur-[1px] relative z-10">
              <motion.div
                initial={{ opacity: 0, y: -20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="space-y-2"
              >
                <h2 className="text-sm md:text-base font-medium tracking-[0.3em] text-[#d4af37] uppercase">
                  {slide.headline}
                </h2>
                <h3 className="text-3xl md:text-5xl font-serif text-white">
                  {slide.q}
                </h3>
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
           <GlassCard className="w-full max-w-5xl flex flex-col md:flex-row items-center gap-12 bg-black/40 backdrop-blur-xl border-white/5 p-16 relative z-10">
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8 }}
                className="shrink-0 w-full md:w-[400px] h-[533px] bg-white/5 relative overflow-hidden rounded-sm border border-white/10"
              >
                <div className="absolute inset-0 flex items-center justify-center bg-black/20">
                  <span className="text-[#d4af37] font-serif italic text-2xl">mentor.jpg</span>
                  {/* <img src="/assets/mentor.jpg" className="w-full h-full object-cover" /> */}
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
