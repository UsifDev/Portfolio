class img {
  constructor(imgpath, imgalt) {
    this.path = imgpath;
    this.alt = imgalt;
  }
}
const tempImage = new img("src/assets/image.png", "temp");
export const portfolioData = {
  header: {
    navLinks: [
      { text: "Home", href: "#home" },
      { text: "About Me", href: "#about" },
      { text: "Experience", href: "#experience" },
      { text: "Skills", href: "#skills" },
      { text: "Achievements", href: "#achievement" },
      { text: "Projects", href: "#portfolio" },
      { text: "Contact", href: "#contact" },
    ],
  },
  home: {
    greeting: "Hello",
    name: "I'm Geek <br> <span>101</span>",
    role: "Software Developer and Programming Enthusiast",
    resumeLink: "https://www.geeksforgeeks.org/",
  },
  about: {
    image: tempImage,
    title: "About Me",
    subtitle: "Hi, My name is Geek101 !!",
    description: [
      "I am a Software Engineering graduate of Istanbul Aydin University. I have a keen interest in Problem Solving and finding new and Dynamic Ideas.",
      "I am a Machine Learning Enthusiast & Game Developer. I can provide clean code and solve complex problems.",
    ],
    skills: [
      "1. Problem Solving",
      "2. DSA",
      "3. Machine Learning",
      "4. Web Development",
    ],
  },
  experience: [
    {
      image: tempImage,
      company: "GameLab Istanbul",
      role: "Game Developer Intern",
      duration: "July 2024 – Sept 2024",
      responsibilities: [
        "Built a memory-efficient 2D game in C++ using structs, vectors, and smart pointers, cutting production time down to just 6 weeks.",
        "Engineered the entire game into a single `.cpp`/`.h` pair with strict modularization rules, improving workflow efficiency.",
        "Developed a custom asset loader using smart pointers and vectors, optimizing RAM usage and enhancing overall performance enabling seamless UI updates during loading screens.",
      ],
    },
    {
      image: tempImage,
      company: "GameLab Istanbul",
      role: "C++ Game Programming Training",
      duration: "July 2023 – Jan 2024",
      responsibilities: [
        "Developed two 2D and 3D games (top-down shooter, car racer) using GlistEngine with features like AI pathfinding, collision detection, and database integration for save systems.",
        "Integrated sound systems and external databases using SQLite, enabling persistent game data storage.",
      ],
    },
  ],
  skills: {
    title: "My Skills",
    informative: [
      {
        name: "Game Development",
        icon: tempImage,
        description:
          "Front-end development is the art of bringing digital creativity to life, focusing on the user interface and user experience to seamlessly merge design with functionality, shaping the visual and interactive elements of websites.",
      },
      {
        name: "Bot programming",
        icon: tempImage,
        description:
          "Competitive programming is a sport of coding, where individuals engage in solving algorithmic challenges against the clock, showcasing their problem-solving skills and efficiency in crafting elegant and optimized solutions.",
      },
      {
        name: "Machine Learning",
        icon: tempImage,
        description:
          "Machine learning is a transformative field at the intersection of computer science and A.I., empowering systems to learn from data, recognize patterns, and make intelligent decisions, entering in a automated insights and problem-solving.",
      },
    ],
    stack: [
      {
        name: "C++",
        icon: tempImage,
      },
      {
        name: "Python",
        icon: tempImage,
      },
      {
        name: "JavaScript",
        icon: tempImage,
      },
      {
        name: "Kotlin",
        icon: tempImage,
      },
      {
        name: "Godot(GDScript)",
        icon: tempImage,
      },
      {
        name: "GLSL",
        icon: tempImage,
      },
      {
        name: "React-Native",
        icon: tempImage,
      },
      {
        name: "Pandas",
        icon: tempImage,
      },
      {
        name: "Keras",
        icon: tempImage,
      },
      {
        name: "Androidx",
        icon: tempImage,
      },
      {
        name: "Unity",
        icon: tempImage,
      },
      {
        name: "Git",
        icon: tempImage,
      },
      {
        name: "JupyterLab",
        icon: tempImage,
      },
      {
        name: "Figma",
        icon: tempImage,
      },
      {
        name: "Blender3D",
        icon: tempImage,
      },
    ],
  },
  achievements: [
    {
      image: tempImage,
      description: "Graduated! 😁🎓",
      title: "BSc in Software Engineering!",
    },
    {
      image: tempImage,
      description: "A full game in 6 weeks!",
      title: "Pushed hard on my code organization skills",
    },
    {
      image: tempImage,
      description: "Machine Learning Certification",
      title: "Developed five ML projects in about a week",
    },
  ],
  projects: [
    {
      link: "https://www.geeksforgeeks.org/library-management-system/",
      image: tempImage,
      type: "Web App Development",
      title: "Restaurant Finder with Yelp API",
    },
    {
      link: "https://www.geeksforgeeks.org/forecast-weather-project-check-today-weather-for-any-location/",
      image: tempImage,
      type: "Web App Development",
      title: "Weather Forecasting App",
    },
    {
      link: "https://www.geeksforgeeks.org/dog-breed-classification-using-transfer-learning/",
      image: tempImage,
      type: "Machine Learning",
      title: "Lung Cancer Prediction with K-means",
    },
    {
      link: "https://www.geeksforgeeks.org/ml-boston-housing-kaggle-challenge-with-linear-regression/",
      image: tempImage,
      type: "Machine Learning",
      title: "Book Recommendation Engine with KNN",
    },
    {
      link: "https://www.geeksforgeeks.org/ml-boston-housing-kaggle-challenge-with-linear-regression/",
      image: tempImage,
      type: "Machine Learning",
      title: "Spam Classifier",
    },
    {
      link: "https://www.geeksforgeeks.org/ml-boston-housing-kaggle-challenge-with-linear-regression/",
      image: tempImage,
      type: "Game Development",
      title: "Unity 6 Board Game Prototype",
    },
    {
      link: "https://www.geeksforgeeks.org/ml-boston-housing-kaggle-challenge-with-linear-regression/",
      image: tempImage,
      type: "Game Development",
      title: "Bot programming",
    },
  ],
  contact: {
    address: "Local Address",
    email: "example.gmail.com",
    phone: "+90 0000000000",
    socialLinks: [
      { icon: "bx bxl-linkedin", link: "https://www.linkedin.com/" },
      { icon: "bx bxl-instagram", link: "https://www.instagram.com/" },
      { icon: "bx bxl-github", link: "https://github.com/" },
      { icon: "bx bxl-whatsapp", link: "https://wa.me/910000000000" },
    ],
    languages: [
      { language: "English", proficiency: "Professional Proficiency" },
      { language: "Arabic", proficiency: "Native" },
    ],
  },
};
