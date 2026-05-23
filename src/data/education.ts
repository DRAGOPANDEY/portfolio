export type Education = {
  degree: string;
  field: string;
  institution: string;
  period: string;
  location?: string;
};

export const education: Education[] = [
  {
    degree: "Bachelor of Technology (B.Tech)",
    field: "Electronics and Communications Engineering",
    institution: "Maharshi Dayanand University (MDU), Rohtak",
    period: "Aug 2018 — Aug 2022",
    location: "Rohtak, Haryana, India",
  },
];

export type Language = {
  name: string;
  level: string;
};

export const languages: Language[] = [
  { name: "Hindi", level: "Native / Bilingual" },
  { name: "English", level: "Professional Working" },
];
