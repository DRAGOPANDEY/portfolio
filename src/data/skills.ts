export type SkillCategory = {
  title: string;
  description: string;
  skills: { name: string; level: number }[];
};

export const skillCategories: SkillCategory[] = [
  {
    title: "DevOps, CI/CD & Cloud",
    description: "Pipelines, automation and cloud-native tooling",
    skills: [
      { name: "Linux", level: 95 },
      { name: "Docker & Compose", level: 92 },
      { name: "Jenkins", level: 85 },
      { name: "CI/CD Pipelines", level: 85 },
      { name: "Ansible", level: 82 },
      { name: "Azure DevOps", level: 80 },
      { name: "AWS EC2", level: 80 },
      { name: "JFrog Artifactory", level: 78 },
      { name: "Nginx + SSL / TLS", level: 92 },
      { name: "Bash Scripting", level: 92 },
      { name: "Git / GitHub", level: 92 },
    ],
  },
  {
    title: "Edge Systems & Infrastructure",
    description: "Edge device R&D, storage and server administration",
    skills: [
      { name: "Jetson Nano", level: 92 },
      { name: "Raspberry Pi", level: 90 },
      { name: "Intel NUC", level: 88 },
      { name: "Edge Device Cloning (Golden Image)", level: 92 },
      { name: "iSCSI / SAN Storage", level: 85 },
      { name: "Dell EMC Servers", level: 85 },
      { name: "GPU / CUDA Deployment", level: 85 },
      { name: "Reverse SSH Tunnel", level: 90 },
      { name: "PostgreSQL Streaming Replication", level: 85 },
    ],
  },
  {
    title: "Networking, Security & Backend",
    description: "Air-gap, routing, integration and backend dev",
    skills: [
      { name: "Networking & Routing", level: 88 },
      { name: "Managed / Unmanaged Switches", level: 85 },
      { name: "Air-Gap Deployments", level: 85 },
      { name: "NIC / VAHAN ITMS Integration", level: 82 },
      { name: "Reverse Proxy & Tunneling", level: 90 },
      { name: "Firewall & ACLs", level: 80 },
      { name: "Python (Automation)", level: 93 },
      { name: "Flask / Django / REST APIs", level: 88 },
      { name: "PostgreSQL Indexing & Tuning", level: 85 },
    ],
  },
];

export const techStack = [
  "Linux",
  "Docker",
  "Jenkins",
  "CI/CD",
  "Ansible",
  "Azure DevOps",
  "AWS EC2",
  "JFrog",
  "Nginx",
  "Jetson Nano",
  "Raspberry Pi",
  "iSCSI",
  "PostgreSQL",
  "Air-Gap",
  "VAHAN ITMS",
  "Python",
  "Flask",
];
