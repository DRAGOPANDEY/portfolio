export const siteConfig = {
  name: "Mohit Pandey",
  shortName: "Mohit",
  title: "Mohit Pandey — DevOps Engineer",
  description:
    "Mohit Pandey is a DevOps Engineer specializing in edge systems, air-gap deployments, network integration and infrastructure automation. Production deployments at Maruti, BARC and defence-sector clients. Available for freelance and full-time roles worldwide.",
  url: "https://mohitpandey.dev",
  ogImage: "/og-image.png",
  role: "DevOps Engineer · Edge Systems · Infrastructure",
  tagline: "I ship infrastructure to production.",
  location: "Gurugram, Haryana, India · Remote · Worldwide",
  timezone: "IST (UTC+5:30)",
  email: "mohitpy6371@gmail.com",
  availability: "Open to new opportunities",
  socials: {
    github: "https://github.com/DRAGOPANDEY",
    linkedin: "https://www.linkedin.com/in/mohit-pandey-b5a402214/",
    twitter: "https://twitter.com/mohitpandey",
  },
  navLinks: [
    { label: "About", href: "#about" },
    { label: "Services", href: "#services" },
    { label: "Skills", href: "#skills" },
    { label: "Work", href: "#projects" },
    { label: "Experience", href: "#experience" },
    { label: "Contact", href: "#contact" },
  ],
  clients: ["Maruti Suzuki", "BARC", "Defence Sector", "Government / ITMS"],
};

export type SiteConfig = typeof siteConfig;
