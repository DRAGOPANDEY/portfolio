export type Project = {
  id: string;
  title: string;
  tagline: string;
  description: string;
  highlights: string[];
  stack: string[];
  category: "DevOps" | "Edge" | "Networking" | "Infrastructure" | "Automation";
  github?: string;
  demo?: string;
  featured?: boolean;
  accent: string;
};

export const projects: Project[] = [
  {
    id: "edge-device-cloning",
    title: "Edge Device Cloning Pipeline",
    tagline: "Golden-image provisioning — 80% setup time reduction",
    description:
      "Built a complete cloning and provisioning pipeline for Jetson Nano edge devices. Replaced the slow per-device manual setup with a golden-image workflow — bringing fresh devices from box to production-ready in minutes instead of hours.",
    highlights: [
      "Cut Jetson Nano setup time by ~80% across the fleet",
      "Golden-image creation with all drivers, CUDA and services baked in",
      "First-boot scripts auto-configure hostname, IP, keys and registration",
      "Repeatable, drift-free provisioning for 30+ field devices",
    ],
    stack: ["Jetson Nano", "Linux", "Bash", "systemd", "dd / clonezilla"],
    category: "Edge",
    featured: true,
    accent: "from-emerald-500 to-cyan-500",
  },
  {
    id: "nic-vahan-itms-integration",
    title: "NIC & VAHAN ITMS Integration",
    tagline: "Government ITMS integration for enforcement workflows",
    description:
      "Integrated India's National Informatics Centre (NIC) and VAHAN ITMS platforms with in-house enforcement and traffic systems — enabling vehicle lookup, evidence submission and government-grade reporting directly from operator dashboards.",
    highlights: [
      "Bi-directional integration with NIC and VAHAN APIs",
      "Government-compliant evidence packaging",
      "Operator dashboards for review and submission",
      "Deployed across multiple enforcement sites",
    ],
    stack: ["Python", "REST APIs", "PostgreSQL", "Django", "Linux"],
    category: "DevOps",
    featured: true,
    accent: "from-violet-500 to-fuchsia-500",
  },
  {
    id: "air-gap-deployment",
    title: "Air-Gap Deployment Methodology",
    tagline: "Offline installs for enterprise & defence-grade sites",
    description:
      "Designed and operated a complete air-gap deployment workflow for high-security customers like Maruti Suzuki, BARC and defence-sector sites. Bundles, mirrors and rolls out the full stack without internet — fast, repeatable and auditable.",
    highlights: [
      "Offline installer bundles with all OS, Docker and Python deps",
      "Internal package mirrors for repeatable installs",
      "Hardened Nginx + SSL reverse-proxy stack",
      "Used at Maruti, BARC and defence-sector clients",
    ],
    stack: ["Linux", "Docker", "Nginx", "Bash", "Air-Gap"],
    category: "Infrastructure",
    featured: true,
    accent: "from-rose-500 to-orange-500",
  },
  {
    id: "reverse-ssh-edge-access",
    title: "Reverse SSH Tunnel for Edge Fleet",
    tagline: "Secure remote access to edge devices behind NAT",
    description:
      "Built a Reverse SSH Tunnel infrastructure that lets the ops team securely SSH into any deployed edge device — Jetson Nano, Raspberry Pi or Intel NUC — even when the device sits behind client-side NAT or firewall. Powers remote support, dashboard access and OTA updates.",
    highlights: [
      "Auto-reconnecting persistent tunnels with systemd",
      "Centralized bastion with per-device key isolation",
      "Reduced field-visit support tickets dramatically",
      "Audit logs for every remote session",
    ],
    stack: ["Linux", "SSH", "systemd", "Jetson Nano", "Raspberry Pi"],
    category: "Networking",
    featured: true,
    accent: "from-cyan-500 to-blue-500",
  },
  {
    id: "automated-deployment-scripts",
    title: "Automated Setup & Deployment Scripts",
    tagline: "One-command bring-up for the entire stack",
    description:
      "A library of idempotent Bash and Python scripts that take a fresh Linux machine — server or edge device — and bring it to a fully production-ready state with all services, networking and security configured.",
    highlights: [
      "Idempotent — safe to re-run any number of times",
      "Pre-flight checks, post-deploy verification",
      "Standardizes deployment across teams and clients",
      "Used across every new site setup",
    ],
    stack: ["Bash", "Python", "Linux", "systemd", "Ansible-style"],
    category: "Automation",
    featured: true,
    accent: "from-indigo-500 to-blue-500",
  },
  {
    id: "san-iscsi-gpu-training",
    title: "SAN over iSCSI for GPU Workloads",
    tagline: "Centralized high-throughput shared storage",
    description:
      "Architected and deployed a Storage Area Network (SAN) using the iSCSI protocol to optimize GPU resource utilization. Eliminated local-disk bottlenecks and gave every node access to the same datasets at line rate.",
    highlights: [
      "iSCSI target/initiator stack on Linux, tuned for throughput",
      "Shared datasets across multiple GPU nodes",
      "Significantly reduced data-load times",
      "Snapshot + rollback safety for large corpora",
    ],
    stack: ["iSCSI", "Linux", "Dell EMC", "CUDA", "Docker"],
    category: "Infrastructure",
    accent: "from-blue-500 to-indigo-500",
  },
  {
    id: "ssl-nginx-production",
    title: "Nginx + SSL Production Stack",
    tagline: "Hardened reverse-proxy with auto-renewing certificates",
    description:
      "A production-ready Nginx configuration with TLS termination, HTTP/2, security headers and automated Let's Encrypt renewal — used as the front door for every service deployed.",
    highlights: [
      "A+ SSL Labs grade configuration",
      "Auto-renewing certificates via certbot",
      "Rate limiting and DDoS-mitigation rules",
      "Reverse-proxy for Django and internal services",
    ],
    stack: ["Nginx", "Linux", "Docker", "certbot"],
    category: "DevOps",
    featured: true,
    accent: "from-purple-500 to-violet-500",
  },
  {
    id: "edge-device-optimization",
    title: "Edge Device Optimization R&D",
    tagline: "Maximum performance on Raspberry Pi, Jetson & NUC",
    description:
      "Led research and benchmarking across Raspberry Pi, Jetson Nano and Intel NUC to identify the right device for each workload and the right tuning for FPS, thermals and power efficiency in real-world 24/7 deployments.",
    highlights: [
      "TensorRT and ONNX runtime tuning on Jetson Nano",
      "Power and thermal profiling under continuous load",
      "Hardware recommendation guide for sales and clients",
      "Standardized configurations for fleet operations",
    ],
    stack: ["Jetson Nano", "Raspberry Pi", "Intel NUC", "CUDA", "Linux"],
    category: "Edge",
    accent: "from-fuchsia-500 to-rose-500",
  },
  {
    id: "network-infrastructure",
    title: "Network Infrastructure & Routing",
    tagline: "Office, lab and client-site network deployments",
    description:
      "Designed and deployed network infrastructure across office, lab and customer sites — managing routing, switching, VLAN segmentation and secure remote access. Selected and configured the right managed / unmanaged switches for each scale.",
    highlights: [
      "Managed and unmanaged switch deployments",
      "Routing and VLAN segmentation for multi-tenant labs",
      "Static / dynamic addressing for edge fleet",
      "Secure remote access via reverse-proxy tunnels",
    ],
    stack: ["Networking", "Routing", "Switches", "VLAN", "Linux"],
    category: "Networking",
    accent: "from-cyan-500 to-emerald-500",
  },
  {
    id: "postgres-replication-ha",
    title: "PostgreSQL Streaming Replication (HA)",
    tagline: "High-availability database tier for production",
    description:
      "Implemented PostgreSQL streaming replication on Linux with a primary + standby topology for high availability and disaster recovery — the data backbone for production event stores across multiple sites.",
    highlights: [
      "Primary / hot-standby with replication slots",
      "Automated failover scripts and health checks",
      "Encrypted nightly backups with offsite sync",
      "One-command restore-verification dry-runs",
    ],
    stack: ["PostgreSQL", "Linux", "Bash", "Docker"],
    category: "Infrastructure",
    accent: "from-orange-500 to-pink-500",
  },
  {
    id: "docker-automation",
    title: "Docker Automation Suite",
    tagline: "One-command deployment for multi-service stacks",
    description:
      "A reusable Docker Compose framework for shipping multi-service applications with Nginx, PostgreSQL and SSL — letting any project go from clone to production in under five minutes.",
    highlights: [
      "Parameterized compose templates",
      "Auto-provisioned Nginx + Let's Encrypt SSL",
      "Health checks, log rotation and restart policies",
      "Same template ships to dev, staging and prod",
    ],
    stack: ["Docker", "Docker Compose", "Nginx", "Linux", "Bash"],
    category: "DevOps",
    accent: "from-indigo-500 to-blue-500",
  },
  {
    id: "flask-api-db-optimization",
    title: "Flask APIs & PostgreSQL Tuning",
    tagline: "70% faster queries on high-traffic backend services",
    description:
      "Designed and deployed Flask REST APIs and a tuned PostgreSQL backend during my Magic EdTech tenure. Indexing strategies and query optimization cut query execution times by up to 70%, while Docker containerization improved deployment efficiency by ~40%.",
    highlights: [
      "Cut query execution times by up to 70% via indexing & tuning",
      "Improved deployment efficiency by ~40% with Docker containerization",
      "REST APIs in Flask with robust validation and error handling",
      "Consistent dev / test / prod environments via Docker",
    ],
    stack: ["Python", "Flask", "PostgreSQL", "Docker", "REST APIs"],
    category: "DevOps",
    accent: "from-emerald-500 to-teal-500",
  },
  {
    id: "cicd-jenkins-ansible",
    title: "CI/CD Pipeline with Jenkins & Ansible",
    tagline: "Automated build, artifact and deploy pipeline",
    description:
      "Built and tuned a complete CI/CD pipeline using Jenkins for build orchestration, JFrog Artifactory for artifact management, Ansible for configuration management and Docker for deployment — covering Linux and Azure DevOps / AWS EC2 targets.",
    highlights: [
      "Jenkins jobs for build, test and Docker image publishing",
      "JFrog Artifactory as the single source of truth for binaries",
      "Ansible playbooks for repeatable server configuration",
      "Deployments to AWS EC2 and Azure DevOps targets",
    ],
    stack: ["Jenkins", "Ansible", "JFrog", "Docker", "Azure DevOps", "AWS EC2"],
    category: "Automation",
    featured: true,
    accent: "from-amber-500 to-orange-500",
  },
  {
    id: "python-web-scraping",
    title: "Python Web Scraping Toolkit",
    tagline: "Resilient data-extraction pipelines",
    description:
      "Built scalable Python scraping pipelines during my Magic EdTech tenure — powering data extraction, validation and downstream automation workflows that stayed resilient to layout changes.",
    highlights: [
      "Scrapers resilient to DOM and layout changes",
      "Validated and normalized output for downstream pipelines",
      "WCAG accessibility checks integrated into QA",
      "Jira-driven Agile workflows",
    ],
    stack: ["Python", "Web Scraping", "Jira", "WCAG"],
    category: "Automation",
    accent: "from-purple-500 to-violet-500",
  },
];

export const featuredProjects = projects.filter((p) => p.featured);
