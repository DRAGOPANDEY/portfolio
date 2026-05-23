export type Service = {
  title: string;
  description: string;
  deliverables: string[];
  icon: string;
};

export const services: Service[] = [
  {
    title: "Edge Device Deployment & R&D",
    description:
      "Production-grade rollouts on Raspberry Pi, Jetson Nano and Intel NUC — including device cloning, golden-image pipelines and fleet provisioning that cut setup time by 80%.",
    deliverables: [
      "Golden-image cloning for rapid device provisioning",
      "Edge device benchmarking and tuning",
      "Reverse SSH tunnel for remote fleet support",
    ],
    icon: "cpu",
  },
  {
    title: "DevOps & Infrastructure",
    description:
      "Linux, Docker, Nginx + SSL, PostgreSQL HA, SAN over iSCSI and Dell EMC server administration — built to scale and stay up.",
    deliverables: [
      "Dockerized deployment stacks",
      "SAN / iSCSI shared storage for GPU workloads",
      "PostgreSQL streaming replication + backup automation",
    ],
    icon: "server",
  },
  {
    title: "Air-Gap & Secure Deployments",
    description:
      "Offline, air-gapped and high-security deployments for enterprise and defence-grade environments — including Maruti, BARC and defence-sector clients.",
    deliverables: [
      "Air-gap installer bundles + offline mirrors",
      "Hardened Nginx + SSL reverse-proxy layer",
      "Network routing, switches and secure remote access",
    ],
    icon: "shield",
  },
  {
    title: "Automation, Scripting & Integration",
    description:
      "Bash, Python and systemd automation for everything from one-command setup to enterprise integrations like NIC and VAHAN ITMS.",
    deliverables: [
      "Automated setup & deployment scripts",
      "NIC / VAHAN ITMS platform integrations",
      "Health checks, watchdogs and alerting",
    ],
    icon: "zap",
  },
];
