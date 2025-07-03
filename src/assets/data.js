export const projectsData = [
  {
    id: 1,
    title: "Space Forces",
    description:
      "A 2D strategy game where you deploy ships to destroy and reach the opponent's base. The game has multiple ship types, upgrades and power-ups.",
    date: "2024-09-01",
    highlighted: true,
    lessons: [
      "Organized features into smaller manageable tasks",
      "Separated game logic into reusable functions or sub-routines",
      "Leveraged structs to contain and mutate closely-tied data",
    ],
    skills: [
      { name: "C++", level: "advanced" },
      { name: "Procedural programming", level: "intermediate" },
      { name: "Sprites handling", level: "intermediate" },
      { name: "Project Management", level: "beginner" },
    ],
    media: [
      {
        url: "src/assets/image.png",
        caption: "",
      },
      {
        url: "src/assets/image.png",
        caption: "says something",
      },
    ],
  },
  {
    id: 2,
    title: "Shape Match",
    description: "A casual match-3 game using Unity.",
    date: "2025-06-01",
    highlighted: true,
    lessons: [
      "Learned about C# task-based asynchronous programming",
      "Implemented touch handling with Unity Input System",
      "Object Oriented game programming",
    ],
    skills: [
      { name: "C#", level: "advanced" },
      { name: "Asynchronous Programming", level: "intermediate" },
      { name: "Unity", level: "intermediate" },
      { name: "Coroutines", level: "beginner" },
      { name: "Collections", level: "intermediate" },
    ],
    media: [
      {
        url: "src/assets/image.png",
        caption: "",
      },
      {
        url: "src/assets/image.png",
        caption: "says something",
      },
    ],
  },
  {
    id: 3,
    title: "Capstone Project: Get In The Habit (GITH)",
    description:
      "An android habit tracker application with a focus on energy / motivation tracking.",
    date: "2024-06-01",
    highlighted: true,
    lessons: [
      "Designed the app with MVVM and Clean architectures",
      "Used coroutines",
      "Implemented Composables with Jetpack Compose in Kotlin",
    ],
    skills: [
      { name: "Kotlin", level: "advanced" },
      { name: "Software Architecture", level: "intermediate" },
      { name: "Composables", level: "intermediate" },
      { name: "Navigation Component", level: "beginner" },
      { name: "Project Management", level: "intermediate" },
      { name: "Technical Writing", level: "beginner" },
      { name: "Coroutines", level: "beginner" },
      { name: "Collections", level: "intermediate" },
      { name: "Database Design", level: "intermediate" },
    ],
    media: [
      {
        url: "src/assets/image.png",
        caption: "",
      },
      {
        url: "src/assets/image.png",
        caption: "says something",
      },
    ],
  },
  {
    id: 4,
    title: "Foodie App",
    description:
      "A restaurant search React-Native web application with Yelp API integration.",
    date: "2023-11-01",
    lessons: [
      "Learned about React-Native hooks and components",
      "Integrated external API calls",
      "Implemented various sorting and ordering options",
    ],
    skills: [
      { name: "Data Organizing", level: "intermediate" },
      { name: "JavaScript", level: "intermediate" },
      { name: "API Integration", level: "intermediate" },
      { name: "Asynchronous Programming", level: "beginner" },
    ],
    media: [
      {
        url: "src/assets/image.png",
        caption: "",
      },
      {
        url: "src/assets/image.png",
        caption: "says something",
      },
    ],
  },
  {
    id: 5,
    title: "This portfolio 😄",
    description: "Built using Vue.",
    date: "2025-07-01",
    highlighted: true,
    lessons: [
      "Learned about static webpage hosting with GitHub",
      "Implemented Vue SFCs",
      "",
    ],
    skills: [
      { name: "h", level: "intermediate" },
      { name: "JavaScript", level: "advanced" },
      { name: "Vue", level: "beginner" },
      { name: "Composables", level: "intermediate" },
    ],
    media: [
      {
        url: "src/assets/image.png",
        caption: "",
      },
      {
        url: "src/assets/image.png",
        caption: "says something",
      },
    ],
  },
];

class img {
  constructor(imgpath, imgalt) {
    this.path = imgpath;
    this.alt = imgalt;
  }
}

class badge {
  constructor(img, link, title) {
    this.image = img;
    if (!this.image.alt) this.image.alt = title + " Badge Icon";
    this.link = link;
    this.title = title;
  }
}

export const headerData = {
  navLinks: [
    { text: "Home", href: "#home" },
    { text: "About", href: "#about" },
    { text: "Projects", href: "#portfolio" },
    { text: "Skills", href: "#skills" },
  ],
};

export const homeData = {
  greeting: "Hello, My name is",
  role: "Game Developer and Software Engineer",
  resumeLink: "src/assets/Bite-sized CV.pdf",
};

export const aboutData = {
  image: new img("src/assets/dev icon.png", "Developer Icon"),
  description: [
    "I am a Software Engineering graduate of Istanbul Aydin University, on my way in specializing in <strong>video game developement</strong>.",
    "I like learning new things, solving problems and coming up with creative solutions. I am <strong>open</strong> to applying my skills in <strong>other software fields</strong> too.",
  ],
  skills: ["Code Organization", "OOP", "Optimization", "Clean code"],
};

export const contactData = {
  address: "Tahtakale, Avcilar, Istanbul, Turkey",
  email: "yousifmaljbouri@gmail.com",
  phone: "+90 538 854 01 95",
  socialLinks: [
    {
      icon: "bx bxl-linkedin",
      link: "https://www.linkedin.com/in/yousefaljbouri/",
    },
    { icon: "bx bxl-github", link: "https://github.com/UsifDev" },
    { icon: "bx bxl-whatsapp", link: "https://wa.me/905388540195" },
  ],
};

export const badgesData = [
  new badge(
    new img("src/assets/companies/microsoft.png"),
    "https://www.freecodecamp.org/certification/UsifDev/foundational-c-sharp-with-microsoft",
    "C# Foundations"
  ),
  new badge(
    new img("src/assets/ml-projects.jpg"),
    "https://www.freecodecamp.org/certification/usifdev/machine-learning-with-python-v7",
    "ML with Python"
  ),
  new badge(
    new img("src/assets/web-dev-icon.png"),
    "https://www.freecodecamp.org/certification/UsifDev/responsive-web-design",
    "Responsive Design"
  ),
];
