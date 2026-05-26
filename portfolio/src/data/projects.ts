export type ProjectCategory = "All" | "Game Dev" | "VR/XR" | "Mobile";

export interface Project {
  id: string;
  title: string;
  description: string;
  category: ProjectCategory;
  youtubeId?: string;
  githubUrl?: string;
  externalUrl?: string;
  thumbnail?: string;
  tags: string[];
  studio?: string;
}

export const projects: Project[] = [
  {
    id: "cake-sorting",
    title: "Cake Sorting",
    description:
      "A satisfying stacking puzzle where you sort cake layers by color to craft perfect pastries. Simple to play, challenging to master — a tasty twist on the classic sorting mechanic with smooth animations and vibrant visuals.",
    category: "Game Dev",
    youtubeId: "6IBLbo50tMA",
    thumbnail: "/images/cake-sorting.jpg",
    studio: "Pound Games",
    tags: ["Unity", "C#", "Hyper-Casual", "Puzzle", "Mobile"],
  },
  {
    id: "keycap-jam",
    title: "KeyCap Jam",
    description:
      "A casual 2D puzzle game where players place keyboard buttons into matching slots, featuring automatic movement and strategic placement mechanics. Clean and colorful visual style with satisfying combo rewards.",
    category: "Game Dev",
    youtubeId: "HU_cFFnYIcM",
    thumbnail: "/images/keycap-jam.jpg",
    studio: "Pound Games",
    tags: ["Unity", "C#", "Puzzle", "2D", "Mobile"],
  },
  {
    id: "dice-blast",
    title: "Dice Blast",
    description:
      "A strategic grid-based puzzle game where players swipe dice to match same-colored faces under time pressure. Features progressive difficulty, new obstacles, power-ups, and innovative dice-matching mechanics.",
    category: "Game Dev",
    youtubeId: "bYFAN4Da-cw",
    thumbnail: "/images/dice-blast.jpg",
    studio: "Pound Games",
    tags: ["Unity", "C#", "Puzzle", "Strategy", "Mobile"],
  },
  {
    id: "merge-ahead",
    title: "Merge aHead",
    description:
      "A drop-merge casual game where players tap to release quirky heads that combine upon contact, creating satisfying chain reactions. Strategic depth with simple controls and high retention potential.",
    category: "Game Dev",
    youtubeId: "NI3PRWh9Dbs",
    thumbnail: "/images/merge-ahead.jpg",
    studio: "Pound Games",
    tags: ["Unity", "C#", "Merge", "Casual", "Mobile"],
  },
  {
    id: "age-run",
    title: "Age Run",
    description:
      "Age Run is a hypercasual game designed for players of all ages. The game follows a challenging concept that keeps players engaged and coming back for more.",
    category: "Game Dev",
    youtubeId: "YqPCIcHLBBI",
    githubUrl: "https://github.com/aybarsduran/AgeRun",
    thumbnail: `https://img.youtube.com/vi/YqPCIcHLBBI/hqdefault.jpg`,
    tags: ["Unity", "C#", "Hypercasual", "Mobile"],
  },
  {
    id: "hotel-hive",
    title: "Hotel Hive",
    description:
      "A hotel booking application built with Android Studio and Kotlin. Uses Firebase for backend services and integrates with HotelsAPI to provide real-time hotel booking functionalities.",
    category: "Mobile",
    youtubeId: "wmM_M48miuc",
    githubUrl: "https://github.com/aybarsduran/HotelHive",
    thumbnail: `https://img.youtube.com/vi/wmM_M48miuc/hqdefault.jpg`,
    tags: ["Kotlin", "Android", "Firebase", "API"],
  },
  {
    id: "two-balls",
    title: "Two Balls",
    description:
      "A simple Unity 2D game where players tap the screen to change the ball's pattern between a basketball or a soccer ball based on the pad's design.",
    category: "Game Dev",
    youtubeId: "dpU8Sy6TqFQ",
    githubUrl: "https://github.com/aybarsduran/TwoBalls",
    thumbnail: `https://img.youtube.com/vi/dpU8Sy6TqFQ/hqdefault.jpg`,
    tags: ["Unity", "C#", "2D", "Mobile"],
  },
  {
    id: "match3",
    title: "Match-3 Puzzle Game",
    description:
      "A match-3 puzzle game designed for iOS and Android platforms using Unity 3D. Features colorful block matching mechanics aimed at delivering addictive gameplay experiences.",
    category: "Game Dev",
    youtubeId: "E79eQc_8PMA",
    thumbnail: `https://img.youtube.com/vi/E79eQc_8PMA/hqdefault.jpg`,
    tags: ["Unity", "C#", "iOS", "Android", "Puzzle"],
  },
  {
    id: "space-voyager",
    title: "Space Voyager",
    description:
      "A Unity 2D game where players navigate a spaceship, aiming to achieve the highest score while avoiding collisions and traveling to different planets.",
    category: "Game Dev",
    youtubeId: "tM1XRStg28A",
    githubUrl: "https://github.com/aybarsduran/SpaceVoyager",
    thumbnail: `https://img.youtube.com/vi/tM1XRStg28A/hqdefault.jpg`,
    tags: ["Unity", "C#", "2D", "Space"],
  },
  {
    id: "lingua-quest",
    title: "LinguaQuest",
    description:
      "An immersive VR experience for Oculus Quest designed to enhance English language skills through engaging gameplay. Players solve progressively difficult riddles across multiple levels in a virtual environment.",
    category: "VR/XR",
    youtubeId: "T4kiwCZM59c",
    externalUrl:
      "https://www.oculus.com/deeplink/?action=view&path=/app/6899962980027053&ref=oculus_desktop",
    thumbnail: `https://img.youtube.com/vi/T4kiwCZM59c/hqdefault.jpg`,
    tags: ["Unity", "VR", "Oculus Quest", "C#", "EdTech"],
  },
  {
    id: "vr-research",
    title: "VR Research Project",
    description:
      "A VR Unity project for a research initiative simulating an exam environment for an overseas university. Built with Photon for Oculus Quest, this immersive experience enhances examination processes through virtual reality.",
    category: "VR/XR",
    youtubeId: "JD-0TmtNX3k",
    externalUrl: "https://youtu.be/JD-0TmtNX3k",
    thumbnail: `https://img.youtube.com/vi/JD-0TmtNX3k/hqdefault.jpg`,
    tags: ["Unity", "VR", "Photon", "Oculus Quest", "Research"],
  },
  {
    id: "vr-research-ai",
    title: "VR Research Project with AI",
    description:
      "A VR Unity project for Oculus Quest incorporating Inworld AI and Photon to simulate an interactive exam environment. Showcases advanced AI integration and immersive VR development skills.",
    category: "VR/XR",
    youtubeId: "KQfwAobe4s4",
    externalUrl: "https://youtu.be/KQfwAobe4s4",
    thumbnail: `https://img.youtube.com/vi/KQfwAobe4s4/hqdefault.jpg`,
    tags: ["Unity", "VR", "Inworld AI", "Photon", "C#"],
  },
];

export const categories: ProjectCategory[] = [
  "All",
  "Game Dev",
  "VR/XR",
  "Mobile",
];
