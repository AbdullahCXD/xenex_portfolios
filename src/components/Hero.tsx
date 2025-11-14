"use client";

import { Button } from "./ui/button";
import { ArrowRight, Mail } from "lucide-react";
import { siteConfig } from "@/config";

export function Hero() {
  const scrollToContact = () => {
    document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" });
  };

  const scrollToProjects = () => {
    document.querySelector("#projects")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center bg-gradient-to-b from-[#070707] via-[#0b0b0b] to-[#0f0f0f] px-6"
    >
      <div className="max-w-5xl w-full">
        {/* Modern centered card */}
        <div className="bg-[rgba(18,18,18,0.6)] backdrop-blur-sm border border-[#222222] rounded-2xl p-8 md:p-12 shadow-2xl">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            {/* Left side - Text */}
            <div className="space-y-6 text-center md:text-left">
              <div>
                <h1 className="text-4xl md:text-6xl text-white leading-tight font-semibold tracking-tight">
                  {siteConfig.name}
                </h1>
                <p className="text-xl md:text-2xl text-[#5cb85c] mt-1 font-medium">
                  {siteConfig.title}
                </p>
              </div>

              <p className="text-sm text-[#cfcfcf] max-w-lg mx-auto md:mx-0 leading-relaxed">
                {siteConfig.bio}
              </p>

              <div className="flex flex-wrap gap-3 justify-center md:justify-start">
                <Button
                  onClick={scrollToProjects}
                  className="rounded-lg bg-[#5cb85c] hover:bg-[#4a9d4a] text-white shadow-md border-b-2 border-[#3d8c3d] transition-transform transform hover:-translate-y-0.5 text-sm px-5 py-3"
                >
                  View My Work
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Button>
                <Button
                  onClick={scrollToContact}
                  className="rounded-lg bg-[#8b7355] hover:bg-[#6e5a43] text-white shadow-md border-b-2 border-[#5a4433] transition-transform transform hover:-translate-y-0.5 text-sm px-5 py-3"
                >
                  <Mail className="mr-2 w-4 h-4" />
                  Get In Touch
                </Button>
              </div>
            </div>

            {/* Right side - Quick Stats */}
            <div className="flex flex-col gap-4">
              <div className="grid grid-cols-3 gap-4">
                <div className="bg-[#0f0f0f]/60 border border-[#222] rounded-lg p-4 flex flex-col items-center justify-center">
                  <div className="text-2xl text-[#5cb85c] font-semibold">
                    {siteConfig.about.experience}
                  </div>
                  <div className="text-xs text-[#bdbdbd] mt-1">Experience</div>
                </div>

                <div className="bg-[#0f0f0f]/60 border border-[#222] rounded-lg p-4 flex flex-col items-center justify-center">
                  <div className="text-2xl text-[#5cb85c] font-semibold">
                    {siteConfig.about.completedProjects}
                  </div>
                  <div className="text-xs text-[#bdbdbd] mt-1">Projects</div>
                </div>

                <div className="bg-[#0f0f0f]/60 border border-[#222] rounded-lg p-4 flex flex-col items-center justify-center">
                  <div className="text-2xl text-[#5cb85c] font-semibold">
                    {(siteConfig.about.totalUsers / 1000).toFixed(0)}k+
                  </div>
                  <div className="text-xs text-[#bdbdbd] mt-1">Users</div>
                </div>
              </div>

              <div className="text-sm text-[#aaaaaa] mt-2 max-w-md mx-auto md:mx-0">
                Friendly, hands-on management — I organise staff, run events, and
                keep communities welcoming and well-run.
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}