"use client";

import { useState, useEffect } from "react";
import { Navbar } from "../components/Navbar";
import { Hero } from "../components/Hero";
import { About } from "../components/About";
import { Skills } from "../components/Skills";
import { Projects } from "../components/Projects";
import { Services } from "../components/Services";
import { Testimonials } from "../components/Testimonials";
import { Contact } from "../components/Contact";
import { Footer } from "../components/Footer";

export default function Portfolio() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <div className="min-h-screen">
      {/* Unified fixed background: base gradient + subtle grid pattern on top */}
      <div
        className="fixed inset-0 -z-10 pointer-events-none"
        style={{
          backgroundImage: `
            linear-gradient(180deg, #070707 0%, #0b0b0b 40%, #0f0f0f 100%),
            repeating-linear-gradient(0deg, rgba(255,255,255,0.02), rgba(255,255,255,0.02) 1px, transparent 1px, transparent 16px),
            repeating-linear-gradient(90deg, rgba(255,255,255,0.02), rgba(255,255,255,0.02) 1px, transparent 1px, transparent 16px)
          `,
          backgroundSize: "cover",
          opacity: 0.95,
          backgroundBlendMode: "overlay, normal, normal"
        }}
      />

      {/* Global helper: force Tailwind bg-* utility usage to render transparent so components show the page background.
          This is intentionally broad (selects any element with "bg-" in the class list). If you prefer to target
          only specific elements later, narrow this rule or remove it and update components individually. */}
      <style jsx global>{`
        /* Make any Tailwind bg-* utility show through to the page background */
        *[class*="bg-"] {
          background-color: transparent !important;
          background-image: none !important;
        }
      `}</style>

      {/* Main content (components should now render over the unified background) */}
      <div className="relative">
        <Navbar />
        <Hero />
        <About />
        <Skills />
        <Services />
        <Projects />
        <Testimonials />
        <Contact />
        <Footer />
      </div>
    </div>
  );
}