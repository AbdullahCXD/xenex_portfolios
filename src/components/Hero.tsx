"use client";

import { Button } from "./ui/button";
import { ArrowRight, Mail } from "lucide-react";
import { siteConfig } from "@/config";
import Image from "next/image";

export function Hero() {
  const scrollToContact = () => {
    document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" });
  };

  const scrollToProjects = () => {
    document.querySelector("#projects")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="home" className="min-h-screen flex items-center pt-32 pb-20 px-6">
      <div className="max-w-7xl mx-auto w-full">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left side - Text */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-4xl md:text-6xl text-white leading-tight text-shadow-minecraft">
                {siteConfig.name}
              </h1>
              <p className="text-2xl md:text-3xl text-[#5cb85c] text-shadow-minecraft">
                {siteConfig.title}
              </p>
            </div>
            
            <p className="text-sm text-[#aaaaaa] max-w-lg leading-relaxed">
              {siteConfig.bio}
            </p>
            
            <div className="flex flex-wrap gap-4">
              <Button 
                onClick={scrollToProjects}
                className="bg-[#5cb85c] hover:bg-[#4a9d4a] text-white border-b-4 border-[#3d8c3d] hover:border-b-2 hover:translate-y-[2px] transition-all text-xs px-6 py-5 btn-press"
              >
                View My Work
                <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
              <Button 
                onClick={scrollToContact}
                className="bg-[#8b7355] hover:bg-[#6e5a43] text-white border-b-4 border-[#5a4433] hover:border-b-2 hover:translate-y-[2px] transition-all text-xs px-6 py-5 btn-press"
              >
                <Mail className="mr-2 w-4 h-4" />
                Get In Touch
              </Button>
            </div>

            {/* Quick Stats */}
            <div className="grid grid-cols-3 gap-4 pt-8">
              <div className="bg-[#2a2a2a] border-4 border-[#3a3a3a] p-4 minecraft-shadow">
                <div className="text-2xl text-[#5cb85c] text-shadow-minecraft">
                  {siteConfig.about.experience}
                </div>
                <div className="text-xs text-[#aaaaaa] mt-1">Experience</div>
              </div>
              <div className="bg-[#2a2a2a] border-4 border-[#3a3a3a] p-4 minecraft-shadow">
                <div className="text-2xl text-[#5cb85c] text-shadow-minecraft">
                  {siteConfig.about.completedProjects}+
                </div>
                <div className="text-xs text-[#aaaaaa] mt-1">Projects</div>
              </div>
              <div className="bg-[#2a2a2a] border-4 border-[#3a3a3a] p-4 minecraft-shadow">
                <div className="text-2xl text-[#5cb85c] text-shadow-minecraft">
                  {(siteConfig.about.totalUsers / 1000).toFixed(0)}k+
                </div>
                <div className="text-xs text-[#aaaaaa] mt-1">Users</div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}