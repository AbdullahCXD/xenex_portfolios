"use client";

import { siteConfig } from "@/config";
import { Mail, MessageCircle, Github, Twitter } from "lucide-react";

export function Contact() {
  const contactMethods = [
    {
      icon: Mail,
      label: "Email",
      value: siteConfig.contact.email,
      href: `mailto:${siteConfig.contact.email}`,
      color: "#d9534f"
    },
    {
      icon: MessageCircle,
      label: "Discord",
      value: siteConfig.contact.discord,
      href: siteConfig.contact.discordInvite || "#",
      color: "#5865f2"
    }
  ];

  const socialLinks = [];
  if (siteConfig.socials.github) {
    socialLinks.push({
      icon: Github,
      label: "GitHub",
      href: siteConfig.socials.github,
      color: "#ffffff"
    });
  }
  if (siteConfig.socials.twitter) {
    socialLinks.push({
      icon: Twitter,
      label: "Twitter",
      href: siteConfig.socials.twitter,
      color: "#1da1f2"
    });
  }

  return (
    <section id="contact" className="py-20 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Section Title */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl text-white mb-4 text-shadow-minecraft">
            Get In Touch
          </h2>
          <div className="w-24 h-1 bg-[#5cb85c] mx-auto"></div>
          <p className="text-sm text-[#aaaaaa] mt-4 max-w-2xl mx-auto">
            Have a project in mind? Want to collaborate? Feel free to reach out through any of these channels!
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          {/* Contact Methods */}
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            {contactMethods.map((method, index) => {
              const Icon = method.icon;
              return (
                <a
                  key={index}
                  href={method.href}
                  target={method.href.startsWith("http") ? "_blank" : undefined}
                  rel={method.href.startsWith("http") ? "noopener noreferrer" : undefined}
                  className="bg-[#2a2a2a] border-4 border-[#3a3a3a] p-8 minecraft-shadow hover:translate-y-[-8px] transition-all duration-300 group"
                >
                  <div className="flex items-start gap-6">
                    <div 
                      className="w-16 h-16 border-4 flex items-center justify-center flex-shrink-0"
                      style={{ 
                        backgroundColor: method.color + "20",
                        borderColor: method.color 
                      }}
                    >
                      <Icon 
                        className="w-8 h-8" 
                        style={{ color: method.color }}
                      />
                    </div>
                    <div className="flex-1 min-w-0">
                      <h3 className="text-xl text-white mb-2 text-shadow-minecraft">
                        {method.label}
                      </h3>
                      <p 
                        className="text-sm break-all group-hover:underline"
                        style={{ color: method.color }}
                      >
                        {method.value}
                      </p>
                    </div>
                  </div>
                </a>
              );
            })}
          </div>

          {/* Social Links */}
          {socialLinks.length > 0 && (
            <div className="bg-[#2a2a2a] border-4 border-[#3a3a3a] p-8 minecraft-shadow">
              <h3 className="text-xl text-white mb-6 text-shadow-minecraft text-center">
                Find Me Online
              </h3>
              <div className="flex justify-center gap-4">
                {socialLinks.map((social, index) => {
                  const Icon = social.icon;
                  return (
                    <a
                      key={index}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-[#1a1a1a] border-4 w-16 h-16 flex items-center justify-center hover:translate-y-[-4px] transition-all duration-300"
                      style={{ borderColor: social.color + "40" }}
                      title={social.label}
                    >
                      <Icon 
                        className="w-6 h-6" 
                        style={{ color: social.color }}
                      />
                    </a>
                  );
                })}
              </div>
            </div>
          )}

          {/* Availability Notice */}
          <div className="mt-12 bg-[#2a2a2a] border-4 border-[#5cb85c] p-6 minecraft-shadow text-center">
            <p className="text-sm text-[#cccccc]">
              💼 Currently <span className="text-[#5cb85c] font-bold">Available</span> for freelance work
            </p>
            <p className="text-xs text-[#aaaaaa] mt-2">
              Response time: Usually within 24 hours
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}