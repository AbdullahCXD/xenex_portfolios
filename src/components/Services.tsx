"use client";

import { siteConfig } from "@/config";
import { Check } from "lucide-react";

export function Services() {
  return (
    <section id="services" className="py-20 px-6 bg-gradient-to-b from-[#0f0f0f] to-[#050505]">
      <div className="max-w-5xl mx-auto">
        <div className="bg-[rgba(18,18,18,0.6)] backdrop-blur-sm border border-[#222222] rounded-2xl p-8 md:p-12 shadow-2xl">
          {/* Section Title */}
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl text-white mb-4 text-shadow-minecraft">
              What I Offer
            </h2>
            <div className="w-24 h-1 bg-[#5cb85c] mx-auto"></div>
            <p className="text-sm text-[#aaaaaa] mt-4 max-w-2xl mx-auto">
              Professional development services tailored to your community's needs. Quality, performance, and reliability guaranteed.
            </p>
          </div>

          {/* Services Grid */}
          <div className="grid md:grid-cols-3 gap-8 mt-6">
            {siteConfig.services.map((service, index) => (
              <div
                key={index}
                className="bg-[#2a2a2a] border-4 border-[#3a3a3a] minecraft-shadow hover:translate-y-[-8px] transition-transform duration-300"
              >
                {/* Service Header */}
                <div className="bg-[#1a1a1a] border-b-4 border-[#3a3a3a] p-6 text-center">
                  <div className="text-5xl mb-4">{service.icon}</div>
                  <h3 className="text-xl text-white text-shadow-minecraft">
                    {service.title}
                  </h3>
                </div>

                {/* Service Content */}
                <div className="p-6">
                  <p className="text-sm text-[#aaaaaa] mb-6 leading-relaxed">
                    {service.description}
                  </p>

                  {/* Features List */}
                  <div className="space-y-3">
                    {service.features.map((feature, featureIndex) => (
                      <div
                        key={featureIndex}
                        className="flex items-start gap-3"
                      >
                        <div className="mt-1 w-4 h-4 bg-[#5cb85c] border-2 border-[#3d8c3d] flex items-center justify-center flex-shrink-0">
                          <Check className="w-3 h-3 text-white" strokeWidth={3} />
                        </div>
                        <span className="text-xs text-[#cccccc]">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* CTA Section */}
          <div className="mt-12 bg-[#2a2a2a] border-4 border-[#3a3a3a] p-8 minecraft-shadow text-center">
            <h3 className="text-2xl text-white mb-4 text-shadow-minecraft">
              Ready to Build Something Amazing?
            </h3>
            <p className="text-sm text-[#aaaaaa] mb-6 max-w-2xl mx-auto">
              Let's discuss your project and bring your ideas to life. I'm here to help create the perfect solution for your community.
            </p>
            <button
              onClick={() => document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" })}
              className="bg-[#5cb85c] hover:bg-[#4a9d4a] text-white border-b-4 border-[#3d8c3d] hover:border-b-2 hover:translate-y-[2px] transition-all text-xs px-8 py-4 btn-press"
            >
              Get Started
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}