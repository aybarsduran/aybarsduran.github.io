export interface Skill {
  name: string;
  icon: string;
  level: number; // 1-5
  category: string;
}

export interface SkillCategory {
  name: string;
  skills: Skill[];
}

export const skillCategories: SkillCategory[] = [
  {
    name: "Game Development",
    skills: [
      { name: "Unity", icon: "unity", level: 5, category: "Game Development" },
      { name: "C#", icon: "csharp", level: 5, category: "Game Development" },
      { name: "Game Design", icon: "gamepad", level: 4, category: "Game Development" },
      { name: "Shader Graph", icon: "shader", level: 3, category: "Game Development" },
    ],
  },
  {
    name: "XR Development",
    skills: [
      { name: "VR Development", icon: "vr", level: 4, category: "XR Development" },
      { name: "Oculus Quest", icon: "oculus", level: 4, category: "XR Development" },
      { name: "XR Interaction Toolkit", icon: "xr", level: 4, category: "XR Development" },
      { name: "Photon Networking", icon: "photon", level: 3, category: "XR Development" },
    ],
  },
  {
    name: "Mobile & Software",
    skills: [
      { name: "Java", icon: "java", level: 4, category: "Mobile & Software" },
      { name: "Kotlin", icon: "kotlin", level: 4, category: "Mobile & Software" },
      { name: "Android Studio", icon: "android", level: 4, category: "Mobile & Software" },
      { name: "Python", icon: "python", level: 3, category: "Mobile & Software" },
    ],
  },
  {
    name: "Tools & Technologies",
    skills: [
      { name: "Firebase", icon: "firebase", level: 3, category: "Tools & Technologies" },
      { name: "Git & GitHub", icon: "git", level: 4, category: "Tools & Technologies" },
      { name: "Figma", icon: "figma", level: 3, category: "Tools & Technologies" },
      { name: "REST APIs", icon: "api", level: 4, category: "Tools & Technologies" },
    ],
  },
];

export const socialLinks = [
  {
    name: "LinkedIn",
    url: "https://www.linkedin.com/in/aybarsduran/",
    icon: "linkedin",
  },
  {
    name: "GitHub",
    url: "https://github.com/aybarsduran",
    icon: "github",
  },
  {
    name: "HackerRank",
    url: "https://www.hackerrank.com/profile/aybarsduran",
    icon: "hackerrank",
  },
  {
    name: "Stack Overflow",
    url: "https://stackoverflow.com/users/22237320/aybars-duran",
    icon: "stackoverflow",
  },
  {
    name: "Email",
    url: "mailto:aybarsduran@outlook.com",
    icon: "email",
  },
];
