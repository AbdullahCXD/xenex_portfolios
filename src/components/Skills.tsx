"use client";

import { siteConfig } from "@/config";

export function Skills() {
  return (
    <section id="skills" className="py-20 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Section Title */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl text-white mb-4 text-shadow-minecraft">
            Skills & Technologies
          </h2>
          <div className="w-24 h-1 bg-[#5cb85c] mx-auto"></div>
        </div>

        {/* Skills Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {siteConfig.skills.map((category, categoryIndex) => (
            <div
              key={categoryIndex}
              className="bg-[#2a2a2a] border-4 border-[#3a3a3a] p-6 minecraft-shadow"
            >
              <h3 className="text-xl text-white mb-6 text-shadow-minecraft">
                {category.category}
              </h3>
              <div className="space-y-4">
                {category.items.map((skill, skillIndex) => (
                  <div key={skillIndex}>
                    <div className="flex items-center justify-between mb-2">
                      <div className="flex items-center gap-2">
                        <span className="text-lg">{skill.icon}</span>
                        <span className="text-sm text-white">{skill.name}</span>
                      </div>
                      <span className="text-xs text-[#5cb85c]">{skill.level}%</span>
                    </div>
                    {/* Progress Bar */}
                    <div className="h-4 bg-[#1a1a1a] border-2 border-[#4a4a4a] overflow-hidden">
                      <div
                        className="h-full bg-[#5cb85c] border-r-2 border-[#3d8c3d] transition-all duration-1000 ease-out"
                        style={{ width: `${skill.level}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Additional Info */}
        <div className="mt-12 bg-[#2a2a2a] border-4 border-[#3a3a3a] p-6 minecraft-shadow text-center">
          <p className="text-sm text-[#aaaaaa]">
            Always learning and expanding my skillset. Currently exploring new technologies and best practices in Discord and Minecraft development.
          </p>
        </div>
      </div>
    </section>
  );
}