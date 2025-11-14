"use client";

import { siteConfig } from "@/config";
import { Heart, ArrowUp } from "lucide-react";

export function Footer() {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const quickLinks = [
    { label: "Home", href: "#home" },
    { label: "About", href: "#about" },
    { label: "Skills", href: "#skills" },
    { label: "Projects", href: "#projects" },
    { label: "Contact", href: "#contact" }
  ];

  return (
    <footer className="bg-[#0f0f0f] border-t-4 border-[#2a2a2a] relative">
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Brand Section */}
          <div>
            <h3 className="text-xl text-white mb-4 text-shadow-minecraft">
              {siteConfig.name}
            </h3>
            <p className="text-sm text-[#aaaaaa] leading-relaxed">
              {siteConfig.title}
            </p>
            <p className="text-xs text-[#888888] mt-4">
              Building the future, one block at a time.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg text-white mb-4 text-shadow-minecraft">
              Quick Links
            </h3>
            <div className="space-y-2">
              {quickLinks.map((link, index) => (
                <button
                  key={index}
                  onClick={() => {
                    document.querySelector(link.href)?.scrollIntoView({ behavior: "smooth" });
                  }}
                  className="block text-sm text-[#aaaaaa] hover:text-[#5cb85c] transition-colors"
                >
                  {link.label}
                </button>
              ))}
            </div>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg text-white mb-4 text-shadow-minecraft">
              Contact
            </h3>
            <div className="space-y-2">
              <a
                href={`mailto:${siteConfig.contact.email}`}
                className="block text-sm text-[#aaaaaa] hover:text-[#5cb85c] transition-colors break-all"
              >
                {siteConfig.contact.email}
              </a>
              <div className="text-sm text-[#aaaaaa]">
                {siteConfig.contact.discord}
              </div>
              {siteConfig.socials.github && (
                <a
                  href={siteConfig.socials.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block text-sm text-[#aaaaaa] hover:text-[#5cb85c] transition-colors"
                >
                  GitHub Profile
                </a>
              )}
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t-2 border-[#2a2a2a] flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-[#888888] flex items-center gap-2">
            © {currentYear} {siteConfig.name}. Crafted with
            <Heart className="w-3 h-3 text-[#d9534f] fill-current" />
            and lots of code.
          </p>
          <div className="flex items-center gap-4">
            <span className="text-xs text-[#888888]">
              Built with Next.js & Tailwind
            </span>
          </div>
        </div>
      </div>

      {/* Scroll to Top Button */}
      <button
        onClick={scrollToTop}
        className="fixed bottom-8 right-8 bg-[#5cb85c] hover:bg-[#4a9d4a] text-white w-12 h-12 border-4 border-[#3d8c3d] minecraft-shadow hover:translate-y-[-4px] transition-all btn-press flex items-center justify-center group"
        aria-label="Scroll to top"
      >
        <ArrowUp className="w-5 h-5 group-hover:animate-bounce" />
      </button>
    </footer>
  );
}