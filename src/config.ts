// src/config.ts
export const siteConfig = {
  // Personal Information
  name: "Xenex",
  title: "Discord & Minecraft Management",
  bio: "I'm a 17‑year‑old from the UK who helps communities run smoothly — I organise staff, run events, and keep servers healthy and welcoming.",
  avatar: "/avatar.png", // Place your avatar in public folder
  
  // Contact Information
  contact: {
    email: "contact@xenex.online",
    discord: "deffo_xenex",
  },
  
  // Social Links (optional)
  socials: {
    status: "coming_soon",
    github: undefined
  },
  
  // Skills
  skills: [
    {
      category: "Community Management",
      items: [
        { name: "Server Management", level: 95, icon: "🛠️" },
        { name: "Staff Management", level: 90, icon: "👥" },
        { name: "Event Planning", level: 88, icon: "🎪" },
        { name: "Moderation & Rules", level: 92, icon: "🔒" },
        { name: "Community Growth", level: 85, icon: "📈" }
      ]
    }
  ],
  
  // Projects
  projects: [
    {
      id: "chunkmc-staff-manager",
      title: "ChunkMC — Staff Manager",
      description: "I manage the staff team for ChunkMC: handling recruitment, onboarding, schedules, and moderation processes so the community can enjoy stable, well-run servers.",
      image: null,
      tags: ["Staff Manager", "Community"],
      features: [
        "Recruiting and onboarding new moderators",
        "Creating shift rotas and coverage plans",
        "Setting up moderation policies and procedures",
        "Coordinating community events"
      ],
      stats: {
        users: "2,900++",
        servers: "1",
      },
      links: {
        demo: "https://discord.gg/xs6bjDhUtm",
      },
      featured: true
    }
  ],
  
  // Testimonials (optional)
  testimonials: [
    {
      name: "AbdullahCXD",
      role: "Programmer",
      text: "I love working with Xenex most of the item, he's chill and he is fun to work with. I love his work and he does it very efficiently!",
      avatar: null,
      server: "XenStudios"
    },
    {
      name: "Dilan",
      role: "CEO",
      text: " I’ve been working with Xenex for over 2 years now, he’s not only a kind, hard-working and reliable staff member but he is also very talented at his roles",
      avatar: null,
      server: "StormNodes & XenStudios"
    }
  ],
  
  // About Section
  about: {
    experience: "3+ years",
    completedProjects: 13,
    activeServers: 15,
    totalUsers: 300000,
    description: [
      "I've spent the last three years helping communities grow and operate smoothly — 13 projects so far. I handle day-to-day server management, staff coordination and event running. I'm a 17‑year‑old Brit who cares about making servers fair, fun and welcoming."
    ]
  },
  
  // Services/What I Offer
  services: [
    {
      title: "General Server Management",
      description: "I take care of the day-to-day stuff so you don't have to — rules, channel setup, moderation flows and general upkeep.",
      icon: "🧭",
      features: [
        "Designing server structure and rules",
        "Channel and role setup",
        "Moderation workflows and automation",
        "Regular server health checks"
      ]
    },
    {
      title: "Staff Management & Training",
      description: "Recruiting and training staff, creating onboarding materials, and keeping the team organised and motivated.",
      icon: "👥",
      features: [
        "Recruitment and interviews",
        "Onboarding guides and checklists",
        "Shift scheduling and handovers",
        "Staff training and feedback loops"
      ]
    },
    {
      title: "Events & Community Growth",
      description: "Planning and running events that get people involved and keep members coming back.",
      icon: "🎪",
      features: [
        "Event planning and promotion",
        "Prize and logistics management",
        "Engagement strategies to grow activity",
        "Post-event summaries and learnings"
      ]
    }
  ]
};

export type SiteConfig = typeof siteConfig;