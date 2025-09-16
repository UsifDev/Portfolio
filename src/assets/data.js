export const projectsData = [
  {
    id: 1,
    title: "Space Forces",
    description:
      "An android 2D strategy game made in GlistEngine for GameLab, where you deploy ships to destroy and reach the opponent's base similar to Clash Royale. The game has multiple ship types, upgrades and power-ups.",
    date: "2024-09-01",
    highlighted: true,
    lessons: [
      "How to organize features into smaller manageable tasks to account for project deadline.",
      "Separated game logic into reusable functions / sub-routines for convenience and debugging.",
      "Leveraged structs to contain and mutate closely-tied data including sprites.",
    ],
    challenge:
      "Given only 6 weeks to develop the entire game alone, I organized my tasks effectively by breaking up the project into features and stages which allowed me to have a little extra time to add some polish to the game.",
    skills: [
      { name: "C++", level: "advanced" },
      { name: "Procedural Programming", level: "intermediate" },
      { name: "Project Management", level: "beginner" },
      { name: "Optimization", level: "intermediate" },
      { name: "Debugging", level: "intermediate" },
      { name: "Android", level: "intermediate" },
    ],
    media: [
      {
        url: "/Portfolio/projects/space_forces/1.jpg",
        caption: "Main Menu",
      },
      {
        url: "/Portfolio/projects/space_forces/2.jpg",
        caption: "Ship Selection",
      },
      {
        url: "/Portfolio/projects/space_forces/3.jpg",
        caption: "Upgrades Shop Screen",
      },
      {
        url: "/Portfolio/projects/space_forces/4.jpg",
        caption: "Gameplay",
      },
      {
        url: "/Portfolio/projects/space_forces/5.jpg",
        caption: "Combo",
      },
      {
        url: "/Portfolio/projects/space_forces/6.jpg",
        caption: "Gameplay",
      },
      {
        url: "/Portfolio/projects/space_forces/7.jpg",
        caption: "Game Result",
      },
    ],
  },
  {
    id: 2,
    title: "Shape Match",
    description:
      "A casual match-3 game made in Unity as a submission for the junior programmer pathway to demonstrate the four pillars of OOP.",
    date: "2025-06-01",
    highlighted: true,
    lessons: [
      "Learned about C# task-based asynchronous programming.",
      "Implemented touch handling with Unity Input System.",
      "Leveraged strategy design pattern for physics-based animation handling and swapping.",
      "Utilized singleton patterns for settings, spawning and general game management.",
    ],
    challenge:
      "Having built the game before using an asynchronous technique, I wanted to build it again without that technique for the course submission and that meant i needed a much more meticuluos state handling approach to ensure proper animation handling. So, I reused some code and implemented similar game state management to Space Forces which allowed me to finish the project within one week.",
    skills: [
      { name: "C#", level: "advanced" },
      { name: "Asynchronous Programming", level: "intermediate" },
      { name: "Unity", level: "intermediate" },
      { name: "Coroutines", level: "beginner" },
      { name: "Collections", level: "intermediate" },
      { name: "Optimization", level: "beginner" },
      { name: "Software Design", level: "intermediate" },
      { name: "Project Management", level: "beginner" },
      { name: "Visual Design", level: "beginner" },
    ],
    media: [
      {
        url: "/Portfolio/projects/shape_match/1.png",
        caption: "Main Menu",
      },
      {
        url: "/Portfolio/projects/shape_match/2.png",
        caption: "Gameplay",
      },
      {
        url: "/Portfolio/projects/shape_match/3.png",
        caption: "Randomization Example",
      },
      {
        url: "/Portfolio/projects/shape_match/4.png",
        caption: "Particle Effects",
      },
      {
        url: "/Portfolio/projects/shape_match/5.gif",
        caption: "Asyncronous Technique",
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
      "Designed the app with MVVM and Clean architectures for scalability and maintainability.",
      "Converted Figma designs to Android Composables with Relay tool.",
      "Implemented the database with Room for convenience and SQL query verification.",
      "Applied advanced Kotlin programming features such as coroutines (for db transactions), scope functions and collection iterators (for cleaner consise code).",
    ],
    challenge:
      "Being under a short time and having no prior experience in Kotlin nor Android development, this project was the most challenging. I followed a strict workflow, outlining the tasks required as i go and iterating when necessary, achieveing a good quality result in respect to the constraints and learning A LOT about android development in the process.",
    skills: [
      { name: "Kotlin", level: "advanced" },
      { name: "Software Design", level: "advanced" },
      { name: "Composables", level: "intermediate" },
      { name: "Project Management", level: "intermediate" },
      { name: "Technical Writing", level: "intermediate" },
      { name: "Coroutines", level: "beginner" },
      { name: "Collections", level: "intermediate" },
      { name: "Database Design", level: "advanced" },
      { name: "Debugging", level: "intermediate" },
      { name: "Android", level: "beginner" },
      { name: "Search Functionality", level: "intermediate" },
      { name: "Figma", level: "intermediate" },
    ],
    media: [
      {
        url: "/Portfolio/projects/GITH/1.jpg",
        caption: "Habits List",
      },
      {
        url: "/Portfolio/projects/GITH/2.jpg",
        caption: "Habit Editor",
      },
      {
        url: "/Portfolio/projects/GITH/3.jpg",
        caption: "Routines List",
      },
      {
        url: "/Portfolio/projects/GITH/4.jpg",
        caption: "Routine Editor",
      },
      {
        url: "/Portfolio/projects/GITH/5.jpg",
        caption: "Categories List",
      },
      {
        url: "/Portfolio/projects/GITH/6.jpg",
        caption: "Category Editor",
      },
      {
        url: "/Portfolio/projects/GITH/7.png",
        caption: "Domain Model",
      },
    ],
  },
  {
    id: 4,
    title: "Foodie App",
    description:
      "A restaurant search web application made using React-Native and Yelp API.",
    date: "2023-11-01",
    lessons: [
      "Learned about React-Native hooks and components.",
      "Integrated Yelp search API.",
      "Implemented various sorting and ordering options.",
      "Debugged and tested using Expo Go.",
    ],
    skills: [
      { name: "Search Functionality", level: "intermediate" },
      { name: "JavaScript", level: "intermediate" },
      { name: "API Integration", level: "intermediate" },
      { name: "Asynchronous Programming", level: "beginner" },
    ],
    media: [
      {
        url: "/Portfolio/projects/foodie_app/1.jpg",
        caption: "Home Screen",
      },
      {
        url: "/Portfolio/projects/foodie_app/2.jpg",
        caption: "Search Screen",
      },
      {
        url: "/Portfolio/projects/foodie_app/3.jpg",
        caption: "Yelp Link",
      },
    ],
  },
  {
    id: 5,
    title: "This portfolio 😄",
    description: "Built using Vue.",
    date: "2025-07-01",
    lessons: [
      "Learned about static webpage hosting with GitHub.",
      "Built and Deployed using Vite.",
    ],
    skills: [
      { name: "JavaScript", level: "intermediate" },
      { name: "Vue", level: "beginner" },
      { name: "Composables", level: "intermediate" },
      { name: "Visual Design", level: "beginner" },
    ],
  },
  {
    id: 6,
    title: "Fingerprint recognition with MatLab",
    description:
      "A fingerprint recognition system using LBP technique and pattern recognition.",
    date: "2024-05-01",
    lessons: [
      "Learned about using structuring elements to recognize object features within a small pixel neighborhood.",
      "How to use MatlLab and process images in bulk.",
      "How to present densely informative subjects in a consise way.",
    ],
    skills: [
      { name: "Image Processing", level: "intermediate" },
      { name: "Feature extraction", level: "beginner" },
      { name: "Procedural Programming", level: "intermediate" },
    ],
    media: [
      {
        url: "/Portfolio/projects/image_proc/1.png",
        caption: "LBP enhancement",
      },
      {
        url: "/Portfolio/projects/image_proc/2.png",
        caption: "Fingerprint Image Processing",
      },
    ],
  },
  {
    id: 7,
    title: "SMS Spam Classification",
    description: "A text classifier that flags spam messages.",
    date: "2023-03-01",
    lessons: [
      "Learned about vectorization and tokenization.",
      "How to build machine learning models.",
      "Data organizing and processing.",
    ],
    skills: [
      { name: "Artificial Intelligence", level: "intermediate" },
      { name: "Feature extraction", level: "intermediate" },
      { name: "Procedural Programming", level: "intermediate" },
      { name: "Python", level: "intermediate" },
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
  resumeLink: "/Portfolio/Bite-sized CV.pdf",
};

export const aboutData = {
  image: new img("/Portfolio/dev icon.png", "Developer Icon"),
  description: [
    "I am a Software Engineering graduate, strongly interested in <strong>video game development</strong>. Being a gamer and a perfectionist, I have gained deep insight into the industry over time, that enables me to swiftly <strong>identify key interactive experience elements</strong> and plan improvements for <strong>user experience</strong> of applications and video games.",
    "I like learning new things, optimizing stuff and developing software to solve various types of problems. Most of my skills are transferable and I am <strong>open to</strong> applying them in <strong>other software fields</strong> too.",
  ],
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
    new img("/Portfolio/companies/microsoft.png"),
    "https://www.freecodecamp.org/certification/UsifDev/foundational-c-sharp-with-microsoft",
    "C# Foundations",
  ),
  new badge(
    new img("/Portfolio/ml-projects.jpg"),
    "https://www.freecodecamp.org/certification/usifdev/machine-learning-with-python-v7",
    "ML with Python",
  ),
  new badge(
    new img("/Portfolio/web-dev-icon.png"),
    "https://www.freecodecamp.org/certification/UsifDev/responsive-web-design",
    "Responsive Design",
  ),
];
