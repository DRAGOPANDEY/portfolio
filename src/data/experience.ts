export type Experience = {
  role: string;
  company: string;
  period: string;
  location: string;
  description: string;
  achievements: string[];
  stack: string[];
};

export const experiences: Experience[] = [
  {
    role: "Software Development Engineer",
    company: "Intozi Tech Pvt Ltd",
    period: "Aug 2024 — Present",
    location: "Gurugram, India",
    description:
      "DevOps, R&D and operations — edge fleet, server infrastructure and air-gap rollouts at Maruti, BARC and defence-sector clients.",
    achievements: [
      "Built Jetson Nano cloning pipeline — cut edge device setup time by ~80%",
      "Designed air-gap deployment workflows for Maruti, BARC & defence sites",
      "Set up Reverse SSH Tunnel infrastructure for the entire edge fleet",
      "Configured SAN over iSCSI to optimize GPU resources for model training",
      "Integrated NIC & VAHAN ITMS platforms with the in-house enforcement stack",
      "Implemented PostgreSQL streaming replication for HA across sites",
      "Hardened Nginx + SSL production stack (A+ SSL Labs) and 24/7 on-call",
    ],
    stack: [
      "Linux",
      "Docker",
      "Nginx",
      "Jetson Nano",
      "iSCSI / SAN",
      "Air-Gap",
      "PostgreSQL",
      "Python",
    ],
  },
  {
    role: "Python Developer · QA Engineer",
    company: "Magic EdTech",
    period: "Apr 2023 — Aug 2024",
    location: "Noida, India",
    description:
      "Backend services, database tuning and containerized deployments for educational technology products.",
    achievements: [
      "Cut query execution time by up to 70% with PostgreSQL indexing & tuning",
      "Improved deployment efficiency by ~40% via Docker containerization",
      "Built Flask REST APIs and resilient web-scraping pipelines",
      "Owned WCAG accessibility, functional and security testing in Agile sprints",
    ],
    stack: [
      "Python",
      "Flask",
      "Docker",
      "PostgreSQL",
      "REST APIs",
      "Web Scraping",
    ],
  },
  {
    role: "Data Research Analyst",
    company: "ITS India Forum",
    period: "May 2024 — Aug 2024",
    location: "Gurugram, India",
    description:
      "Research and strategic initiatives in intelligent transportation systems.",
    achievements: [
      "Data research & analysis for mobility and transportation projects",
      "Organized round-table conferences with industry experts",
      "Authored articles on emerging ITS trends and policies",
    ],
    stack: ["Data Analysis", "Research", "Technical Writing"],
  },
  {
    role: "Associate Analyst (Google Onsite)",
    company: "Vaco Binary Semantics LLP",
    period: "Nov 2022 — Mar 2023",
    location: "Gurugram, India",
    description:
      "Google onsite project — data analysis, validation and reporting.",
    achievements: [
      "EDA, feature engineering and visualization with SQL + Python",
      "Dashboards in Tableau / Power BI for user-behavior insights",
      "Collaborated with Google teams to optimize ad performance",
    ],
    stack: ["SQL", "Python", "Pandas", "Tableau", "Power BI"],
  },
];
