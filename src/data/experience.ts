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
      "DevOps, R&D and operations for Intozi's flagship platform — owning edge fleet, server infrastructure, network integration and air-gap deployments at enterprise clients including Maruti Suzuki, BARC and defence-sector sites.",
    achievements: [
      "Designed and implemented organization-wide best practices for seamless project deployment across edge and server environments",
      "Built a Jetson Nano cloning and provisioning pipeline that reduced edge device setup time by ~80%",
      "Researched and optimized edge devices — Raspberry Pi, Jetson Nano and Intel NUC — for field deployments",
      "Set up a Reverse SSH Tunnel infrastructure for secure remote access to edge devices and on-site dashboards",
      "Configured and operated a Storage Area Network (SAN) over iSCSI to optimize GPU resources for model training",
      "Designed and deployed air-gap installation workflows for high-security customers — Maruti Suzuki, BARC and defence-sector sites",
      "Integrated NIC and VAHAN ITMS platforms with in-house enforcement systems for government-grade reporting",
      "Researched and integrated 2D and 4D radars with proprietary applications",
      "Managed and maintained Dell EMC servers for optimal performance and uptime",
      "Implemented Data Version Control (DVC) for reproducible datasets and model training",
      "Implemented PostgreSQL streaming replication on Linux for high availability and disaster recovery",
      "Wrote automated setup and deployment scripts that standardized new-site bring-up across teams",
      "Deployed and managed networking equipment — routing, managed and unmanaged switches across office and lab",
      "Hardened production stacks with Nginx, SSL / TLS and security headers (A+ SSL Labs grade)",
      "Provided 24/7 technical support and real-time customer issue resolution for production deployments",
    ],
    stack: [
      "Linux",
      "Docker",
      "Nginx",
      "SSL / TLS",
      "Bash",
      "Jetson Nano",
      "Raspberry Pi",
      "Intel NUC",
      "iSCSI / SAN",
      "Dell EMC",
      "Air-Gap",
      "NIC",
      "VAHAN ITMS",
      "PostgreSQL",
      "Networking",
    ],
  },
  {
    role: "Data Research Analyst",
    company: "ITS India Forum",
    period: "May 2024 — Aug 2024",
    location: "Gurugram, India",
    description:
      "Supported research and strategic initiatives in intelligent transportation systems (ITS) — combining data analysis, technical research and stakeholder collaboration.",
    achievements: [
      "Conducted data research and analysis to support mobility and transportation projects",
      "Drafted Minutes of Meetings (MoMs) documenting key discussions and decisions",
      "Organized round-table conferences and facilitated expert discussions on transportation innovation",
      "Authored articles on emerging ITS trends, policies and advancements",
    ],
    stack: ["Data Analysis", "Research", "Technical Writing"],
  },
  {
    role: "Python Developer · QA Engineer",
    company: "Magic EdTech",
    period: "Apr 2023 — Aug 2024",
    location: "Noida, India",
    description:
      "Python developer, API engineer and QA engineer working on backend services, database tuning and containerized deployments for educational technology products.",
    achievements: [
      "Enhanced database performance with indexing strategies — cut query execution times by up to 70% for high-traffic apps",
      "Developed and deployed RESTful APIs using Flask, enabling seamless service-to-service communication",
      "Containerized applications with Docker — improved deployment efficiency by ~40% and standardized dev/test/prod environments",
      "Built resilient web-scraping pipelines and data-extraction workflows in Python",
      "Owned QA, accessibility testing (WCAG) and functional testing for high-traffic edu products",
      "Executed test cases, UI/UX validation and security testing in Jira-based Agile workflows",
    ],
    stack: [
      "Python",
      "Flask",
      "REST APIs",
      "Docker",
      "PostgreSQL",
      "Web Scraping",
      "Jira",
      "WCAG",
    ],
  },
  {
    role: "Associate Analyst (Google Onsite)",
    company: "Vaco Binary Semantics LLP",
    period: "Nov 2022 — Mar 2023",
    location: "Gurugram, India",
    description:
      "Worked on a Google onsite project focused on data analysis, validation and reporting to drive data-driven decision-making.",
    achievements: [
      "Performed data cleaning, EDA, feature engineering and visualization with SQL + Python (Pandas, NumPy)",
      "Built dashboards and reports using Tableau / Power BI",
      "Collaborated with Google teams to analyze user behavior and optimize ad performance",
      "Communicated findings clearly to both technical and non-technical stakeholders",
    ],
    stack: ["SQL", "Python", "Pandas", "NumPy", "Tableau", "Power BI"],
  },
];
