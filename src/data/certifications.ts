export type Certification = {
  title: string;
  issuer: string;
  year: string;
  credentialUrl?: string;
  icon: string;
};

export const certifications: Certification[] = [
  {
    title: "Full Stack Data Science",
    issuer: "Professional Certification",
    year: "Earned",
    icon: "award",
  },
  {
    title: "Python for Data Science",
    issuer: "Professional Certification",
    year: "Earned",
    icon: "code",
  },
];

export const stats = [
  { label: "Years of Experience", value: "3+" },
  { label: "Edge Devices Deployed", value: "30+" },
  { label: "Setup Time Reduced", value: "80%" },
  { label: "On-call Uptime", value: "24/7" },
];
