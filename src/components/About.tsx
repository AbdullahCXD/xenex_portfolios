"use client";

import { siteConfig } from "@/config";
import { User, Server, Users, Code } from "lucide-react";

export function About() {
  const stats = [
    {
      icon: Code,
      value: siteConfig.about.experience,
      label: "Experience",
      color: "#5cb85c"
    },
    {
      icon: Server,
      value: `${siteConfig.about.completedProjects}+`,
      label: "Projects Done",
      color: "#8b7355"
    },
    {
      icon: Server,
      value: `${siteConfig.about.activeServers}+`,
      label: "Active Servers",
      color: "#d9534f"
    },
    {
      icon: Users,
      value: `${(siteConfig.about.totalUsers / 1000).toFixed(0)}k+`,
      label: "Total Users",
      color: "#5bc0de"
    }
  ];

  return (
    <section id="about" className="py-20 px-6 bg-gradient-to-b from-[#0f0f0f] to-[#050505]">
      <div className="max-w-5xl mx-auto">
        <div className="bg-[rgba(18,18,18,0.6)] backdrop-blur-sm border border-[#222222] rounded-2xl p-8 md:p-12 shadow-2xl">
          {/* Section Title */}
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl text-white mb-4 text-shadow-minecraft">
              About Me
            </h2>
            <div className="w-24 h-1 bg-[#5cb85c] mx-auto"></div>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
            {stats.map((stat, index) => {
              const Icon = stat.icon;
              return (
                <div
                  key={index}
                  className="bg-[#2a2a2a] border-4 border-[#3a3a3a] p-6 minecraft-shadow hover:translate-y-[-4px] transition-transform"
                >
                  <Icon 
                    className="w-8 h-8 mb-4 mx-auto" 
                    style={{ color: stat.color }}
                  />
                  <div 
                    className="text-3xl text-center mb-2 text-shadow-minecraft"
                    style={{ color: stat.color }}
                  >
                    {stat.value}
                  </div>
                  <div className="text-xs text-[#aaaaaa] text-center">
                    {stat.label}
                  </div>
                </div>
              );
            })}
          </div>

          {/* Description */}
          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-6">
              {siteConfig.about.description.map((paragraph, index) => (
                <div
                  key={index}
                  className="bg-[#2a2a2a] border-4 border-[#3a3a3a] p-6 minecraft-shadow"
                >
                  <p className="text-sm text-[#cccccc] leading-relaxed">
                    {paragraph}
                  </p>
                </div>
              ))}
            </div>

            <div className="bg-[#2a2a2a] border-4 border-[#3a3a3a] p-6 minecraft-shadow">
              <h3 className="text-xl text-white mb-6 text-shadow-minecraft flex items-center gap-2">
                <User className="w-5 h-5 text-[#5cb85c]" />
                Quick Info
              </h3>
              <div className="space-y-4">
                <div>
                  <div className="text-xs text-[#aaaaaa] mb-1">Name</div>
                  <div className="text-sm text-white">{siteConfig.name}</div>
                </div>
                <div>
                  <div className="text-xs text-[#aaaaaa] mb-1">Role</div>
                  <div className="text-sm text-white">{siteConfig.title}</div>
                </div>
                <div>
                  <div className="text-xs text-[#aaaaaa] mb-1">Email</div>
                  <div className="text-sm text-[#5cb85c] break-all">
                    {siteConfig.contact.email}
                  </div>
                </div>
                <div>
                  <div className="text-xs text-[#aaaaaa] mb-1">Discord</div>
                  <div className="text-sm text-[#5cb85c]">
                    {siteConfig.contact.discord}
                  </div>
                </div>
                {siteConfig.socials.github && (
                  <div>
                    <div className="text-xs text-[#aaaaaa] mb-1">GitHub</div>
                    <a
                      href={siteConfig.socials.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm text-[#5cb85c] hover:underline"
                    >
                      View Profile
                    </a>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}