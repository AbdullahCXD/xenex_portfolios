"use client";

import { siteConfig } from "@/config";
import { Quote } from "lucide-react";

export function Testimonials() {
  if (!siteConfig.testimonials || siteConfig.testimonials.length === 0) {
    return null;
  }

  return (
    <section id="testimonials" className="py-20 px-6 bg-[#0f0f0f]">
      <div className="max-w-7xl mx-auto">
        {/* Section Title */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl text-white mb-4 text-shadow-minecraft">
            What Clients Say
          </h2>
          <div className="w-24 h-1 bg-[#5cb85c] mx-auto"></div>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {siteConfig.testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-[#2a2a2a] border-4 border-[#3a3a3a] p-6 minecraft-shadow hover:translate-y-[-8px] transition-transform duration-300"
            >
              {/* Quote Icon */}
              <div className="mb-4">
                <Quote className="w-8 h-8 text-[#5cb85c]" />
              </div>

              {/* Testimonial Text */}
              <p className="text-sm text-[#cccccc] mb-6 leading-relaxed">
                "{testimonial.text}"
              </p>

              {/* Author Info */}
              <div className="flex items-center gap-4 pt-4 border-t-2 border-[#3a3a3a]">
                {/* Avatar removed: show initials/placeholder instead */}
                <div className="w-12 h-12 border-2 border-[#4a4a4a] bg-[#1f1f1f] flex items-center justify-center text-white text-sm font-medium flex-shrink-0">
                  {testimonial.name
                    ? testimonial.name
                        .split(" ")
                        .map((n) => n[0])
                        .slice(0, 2)
                        .join("")
                        .toUpperCase()
                    : "—"}
                </div>
                <div>
                  <div className="text-sm text-white">{testimonial.name}</div>
                  <div className="text-xs text-[#5cb85c]">{testimonial.role}</div>
                  <div className="text-xs text-[#888888]">{testimonial.server}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}