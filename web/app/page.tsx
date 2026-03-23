"use client";

import { motion } from "framer-motion";
import { Compass, MapPin, Sparkles, User, Settings, ArrowRight, ShieldCheck, Globe, HelpCircle } from "lucide-react";
import { GlassCard } from "@/components/GlassCard";
import HeroScene from "@/components/HeroScene";

const springConfig = { type: "spring", stiffness: 300, damping: 30 };

export default function OnboardingPage() {
  return (
    <main className="min-h-screen relative p-4 md:p-12 max-w-7xl mx-auto flex flex-col gap-8 justify-center overflow-hidden">
      <HeroScene />
      
      <div className="space-y-4 mb-8 z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="flex items-center gap-2 text-gold font-bold tracking-[0.2em] uppercase text-sm"
        >
          <Sparkles className="w-4 h-4" />
          Portugal Experience
        </motion.div>
        
        <motion.h1 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={springConfig}
          className="text-5xl md:text-8xl font-bold tracking-tight text-white"
        >
          Portugal <span className="gold-gradient-text">Immersive</span>
        </motion.h1>
        
        <motion.p 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ ...springConfig, delay: 0.1 }}
          className="text-white/60 text-lg md:text-xl max-w-2xl backdrop-blur-sm bg-black/10 p-2 rounded-lg"
        >
          Your AI-powered 3D companion. Discover hidden gems, navigate safely, and understand local culture as if you were born here.
        </motion.p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 grid-rows-2 gap-4 h-auto md:h-[600px] z-10">
        {/* SafePath 3D Selector */}
        <GlassCard className="md:col-span-2 md:row-span-2 group cursor-pointer border-gold/30" delay={0.2}>
          <div className="space-y-4">
            <div className="p-3 w-fit rounded-2xl bg-gold/10 border border-gold/20">
              <ShieldCheck className="w-8 h-8 text-gold" />
            </div>
            <h2 className="text-3xl font-semibold text-white">SafePath 3D</h2>
            <p className="text-white/40">Real-time safety visualization. Navigate with confidence through neighborhoods verified by locals and AI.</p>
          </div>
          <div className="flex justify-between items-center mt-6">
            <span className="text-gold font-medium">Active Monitoring</span>
            <div className="p-2 rounded-full bg-white/5 group-hover:bg-gold/20 transition-colors">
              <ArrowRight className="w-5 h-5 text-white/40 group-hover:text-gold" />
            </div>
          </div>
        </GlassCard>

        {/* 3D Explorer */}
        <GlassCard className="md:col-span-1 group cursor-pointer" delay={0.3}>
          <div className="space-y-4">
            <Globe className="w-6 h-6 text-gold/60" />
            <h3 className="text-xl font-medium text-white">Visual Guide</h3>
            <p className="text-xs text-white/30">Augmented landmarks and historical context in 3D.</p>
          </div>
        </GlassCard>

        {/* Survival Aid */}
        <GlassCard className="md:col-span-1 group cursor-pointer border-red-500/20" delay={0.4}>
          <div className="space-y-4">
            <HelpCircle className="w-6 h-6 text-red-400/60" />
            <h3 className="text-xl font-medium text-white">Survival Aid</h3>
            <p className="text-xs text-white/30">Emergency contacts, local translation, and help nearby.</p>
          </div>
        </GlassCard>

        {/* Profile & Customization */}
        <GlassCard className="md:col-span-2 group cursor-pointer" delay={0.5}>
          <div className="flex items-center gap-6">
            <div className="p-4 rounded-3xl bg-white/5 border border-white/10">
              <User className="w-8 h-8 text-white/80" />
            </div>
            <div className="flex-1">
              <h3 className="text-xl font-medium text-white">Travel Profile</h3>
              <p className="text-white/40 text-sm">Tailoring Portugal to your vibe.</p>
            </div>
            <Settings className="w-6 h-6 text-white/20" />
          </div>
        </GlassCard>
      </div>

      <motion.footer
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8 }}
        className="mt-8 text-center z-10"
      >
        <p className="text-white/20 text-sm uppercase tracking-widest font-medium">
          Powered by Etnad 🐉 &middot; Sovereign Elite V2
        </p>
      </motion.footer>
    </main>
  );
}
