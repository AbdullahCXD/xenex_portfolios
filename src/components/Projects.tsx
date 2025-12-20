"use client";

import { useState } from "react";
import { siteConfig } from "@/config";
import { ExternalLink, Star } from "lucide-react";

export function Projects() {
  const [filter, setFilter] = useState<"all" | "featured">("all");

  const filteredServers = siteConfig.servers.filter(server => 
    filter === "all" ? true : server.featured
  );

  const allTags = Array.from(
    new Set(siteConfig.servers.flatMap(s => s.tags))
  );

  return (
    <section id="projects" className="py-20 px-6 bg-linear-to-b from-transparent to-[#050505]">
      <div className="max-w-5xl mx-auto">
        <div className="bg-[rgba(18,18,18,0.6)] backdrop-blur-sm border border-[#222222] rounded-2xl p-8 md:p-12 shadow-2xl">
          {/* Section Title */}
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl text-white mb-4 text-shadow-minecraft">
              My Servers
            </h2>
            <div className="w-24 h-1 bg-[#5cb85c] mx-auto mb-8"></div>
            
            {/* Filter Buttons */}
            <div className="flex justify-center gap-4">
              <button
                onClick={() => setFilter("all")}
                className={`text-xs px-6 py-3 border-4 transition-all ${
                  filter === "all"
                    ? "bg-[#5cb85c] border-[#3d8c3d] text-white"
                    : "bg-[#2a2a2a] border-[#3a3a3a] text-[#aaaaaa] hover:text-white"
                } minecraft-shadow btn-press`}
              >
                All Servers ({siteConfig.servers.length})
              </button>
              <button
                onClick={() => setFilter("featured")}
                className={`text-xs px-6 py-3 border-4 transition-all ${
                  filter === "featured"
                    ? "bg-[#5cb85c] border-[#3d8c3d] text-white"
                    : "bg-[#2a2a2a] border-[#3a3a3a] text-[#aaaaaa] hover:text-white"
                } minecraft-shadow btn-press`}
              >
                Featured ({siteConfig.servers.filter(s => s.featured).length})
              </button>
            </div>
          </div>

          {/* Servers Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-6">
            {filteredServers.map((server) => (
              <div
                key={server.id}
                className="bg-[#2a2a2a] border-4 border-[#3a3a3a] minecraft-shadow hover:-translate-y-2 transition-all duration-300 flex flex-col"
              >
                {/* Server Image / Placeholder (removed next/image) */}
                <div className="relative h-48 border-b-4 border-[#3a3a3a] overflow-hidden bg-[#1a1a1a] flex items-center justify-center">
                    <div className="relative z-10 text-center px-4">
                      <div className="text-5xl font-bold text-[#5cb85c]">
                        {server.title!
                          .split(" ")
                          .map((w) => (w ? w[0] : ""))
                          .slice(0, 2)
                          .join("")
                          .toUpperCase()}
                      </div>
                      <div className="text-xs text-[#aaaaaa] mt-2">
                        {server.tags!.join(" • ")}
                      </div>
                    </div>

                  {server.featured && (
                    <div className="absolute top-4 right-4 bg-[#f0ad4e] border-2 border-[#d89442] px-3 py-1 flex items-center gap-1 z-20">
                      <Star className="w-3 h-3 fill-white text-white" />
                      <span className="text-xs text-white">Featured</span>
                    </div>
                  )}
                </div>

                {/* Server Content */}
                <div className="p-6 flex-1 flex flex-col">
                  <h3 className="text-xl text-white mb-3 text-shadow-minecraft">
                    {server.title}
                  </h3>
                  
                  <p className="text-sm text-[#aaaaaa] mb-4 leading-relaxed">
                    {server.description}
                  </p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {server.tags!.map((tag, index) => (
                      <span
                        key={index}
                        className="text-xs bg-[#1a1a1a] border-2 border-[#3a3a3a] px-3 py-1 text-[#5cb85c]"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Features */}
                  <div className="mb-4 flex-1">
                    <div className="text-xs text-[#888888] mb-2">Key Features:</div>
                    <ul className="space-y-1">
                      {server.features!.slice(0, 3).map((feature, index) => (
                        <li key={index} className="text-xs text-[#cccccc] flex items-start gap-2">
                          <span className="text-[#5cb85c] mt-1">▪</span>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Stats */}
                  <div className="grid grid-cols-3 gap-2 mb-4">
                    {Object.entries(server.stats!).map(([key, value], index) => (
                      <div key={index} className="bg-[#1a1a1a] border-2 border-[#3a3a3a] p-2 text-center">
                        <div className="text-xs text-[#5cb85c]">{value}</div>
                        <div className="text-xs text-[#888888] capitalize">{key}</div>
                      </div>
                    ))}
                  </div>

                  {/* Links */}
                  {server.links && Object.keys(server.links).length > 0 && (
                    <div className="flex gap-2">
                      {server.links.demo && (
                        <a
                          href={server.links.demo}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex-1 bg-[#5cb85c] hover:bg-[#4a9d4a] text-white border-b-4 border-[#3d8c3d] hover:border-b-2 hover:translate-y-[2px] transition-all text-xs px-4 py-3 text-center btn-press flex items-center justify-center gap-2"
                        >
                          <ExternalLink className="w-3 h-3" />
                          View Demo
                        </a>
                      )}
                      {(server.links as any).github && (
                        <a
                          href={(server.links as any).github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex-1 bg-[#8b7355] hover:bg-[#6e5a43] text-white border-b-4 border-[#5a4433] hover:border-b-2 hover:translate-y-[2px] transition-all text-xs px-4 py-3 text-center btn-press"
                        >
                          GitHub
                        </a>
                      )}
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>

          {filteredServers.length === 0 && (
            <div className="text-center py-12">
              <p className="text-[#aaaaaa]">No servers found in this category.</p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}