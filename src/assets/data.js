export const portfolioData = {
  header: {
    logo: 'Yousif<span>Aljbouri</span>',
    navLinks: [
      { text: 'Home', href: '#home' },
      { text: 'About Me', href: '#about' },
      { text: 'Experience', href: '#experience' },
      { text: 'Skills', href: '#skills' },
      { text: 'Achievements', href: '#achievement' },
      { text: 'Projects', href: '#portfolio' },
      { text: 'Contact', href: '#contact' },
    ],
  },
  home: {
    greeting: 'Hello',
    name: "I'm Geek <br> <span>101</span>",
    role: 'Software Developer and Programming Enthusiast',
    resumeLink: 'https://www.geeksforgeeks.org/',
  },
  about: {
    imagePath: 'profile.jpg',
    title: 'About Me',
    subtitle: 'Hi, My name is Geek101 !!',
    description: [
      'I am a Software Engineering graduate of Istanbul Aydin University. I have a keen interest in Problem Solving and finding new and Dynamic Ideas.',
      'I am a Machine Learning Enthusiast & Game Developer. I can provide clean code and solve complex problems.',
    ],
    skills: ['1. Problem Solving', '2. DSA', '3. Machine Learning', '4. Web Development'],
  },
  experience: [
    {
      imagePath: '@assets/companies/',
      company: 'GameLab Istanbul',
      role: 'Game Developer Intern',
      duration: 'July 2024 – Sept 2024',
      responsibilities: [
        'Built a memory-efficient 2D game in C++ using structs, vectors, and smart pointers, cutting production time down to just 6 weeks.',
        'Engineered the entire game into a single `.cpp`/`.h` pair with strict modularization rules, improving workflow efficiency.',
        'Developed a custom asset loader using smart pointers and vectors, optimizing RAM usage and enhancing overall performance enabling seamless UI updates during loading screens.',
      ],
    },
    {
      imagePath: '@assets/companies/',
      company: 'GameLab Istanbul',
      role: 'C++ Game Programming Training',
      duration: 'July 2023 – Jan 2024',
      responsibilities: [
        'Developed two 2D and 3D games (top-down shooter, car racer) using GlistEngine with features like AI pathfinding, collision detection, and database integration for save systems.',
        'Integrated sound systems and external databases using SQLite, enabling persistent game data storage.',
      ],
    },
  ],
  skills: {
    title: 'My Skills',
    informative: [
      {
        name: 'Game Development',
        icon: '@/assets/fe-removebg-preview.png',
        description:
          'Front-end development is the art of bringing digital creativity to life, focusing on the user interface and user experience to seamlessly merge design with functionality, shaping the visual and interactive elements of websites.',
      },
      {
        name: 'Bot programming',
        icon: '@/assets/cp-removebg-preview.png',
        description:
          'Competitive programming is a sport of coding, where individuals engage in solving algorithmic challenges against the clock, showcasing their problem-solving skills and efficiency in crafting elegant and optimized solutions.',
      },
      {
        name: 'Machine Learning',
        icon: '@/assets/ml-removebg-preview.png',
        description:
          'Machine learning is a transformative field at the intersection of computer science and A.I., empowering systems to learn from data, recognize patterns, and make intelligent decisions, entering in a automated insights and problem-solving.',
      },
    ],
    stack: [
      {
        name: 'C++',
        icon: '@/assets/skills/',
      },
      {
        name: 'Python',
        icon: '@/assets/skills/',
      },
      {
        name: 'JavaScript',
        icon: '@/assets/skills/',
      },
      {
        name: 'Kotlin',
        icon: '@/assets/skills/',
      },
      {
        name: 'Godot(GDScript)',
        icon: '@/assets/skills/',
      },
      {
        name: 'GLSL',
        icon: '@/assets/skills/',
      },
      {
        name: 'React-Native',
        icon: '@/assets/skills/',
      },
      {
        name: 'Pandas',
        icon: '@/assets/skills/',
      },
      {
        name: 'Keras',
        icon: '@/assets/skills/',
      },
      {
        name: 'Androidx',
        icon: '@/assets/skills/',
      },
      {
        name: 'Unity',
        icon: '@/assets/skills/',
      },
      {
        name: 'Git',
        icon: '@/assets/skills/',
      },
      {
        name: 'JupyterLab',
        icon: '@/assets/skills/',
      },
      {
        name: 'Figma',
        icon: '@/assets/skills/',
      },
      {
        name: 'Blender3D',
        icon: '@/assets/skills/',
      },
    ],
  },
  achievements: [
    {
      image: '@/assets/coding.jpg',
      description: 'Graduated! 😁🎓',
      title: 'BSc in Software Engineering!',
    },
    {
      image: '@/assets/coding.jpg',
      description: 'A full game in 6 weeks!',
      title: 'Pushed hard on my code organization skills',
    },
    {
      image: '@/assets/hackathon.jpg',
      description: 'Machine Learning Certification',
      title: 'Developed five ML projects in about a week',
    },
  ],
  projects: [
    {
      link: 'https://www.geeksforgeeks.org/library-management-system/',
      image: '@/assets/lib1.jpg',
      type: 'Web App Development',
      title: 'Restaurant Finder with Yelp API',
    },
    {
      link: 'https://www.geeksforgeeks.org/forecast-weather-project-check-today-weather-for-any-location/',
      image: '@/assets/weather.jpg',
      type: 'Web App Development',
      title: 'Weather Forecasting App',
    },
    {
      link: 'https://www.geeksforgeeks.org/dog-breed-classification-using-transfer-learning/',
      image: '@/assets/breed.jpg',
      type: 'Machine Learning',
      title: 'Lung Cancer Prediction with K-means',
    },
    {
      link: 'https://www.geeksforgeeks.org/ml-boston-housing-kaggle-challenge-with-linear-regression/',
      image: '@/assets/price.jpg',
      type: 'Machine Learning',
      title: 'Book Recommendation Engine with KNN',
    },
    {
      link: 'https://www.geeksforgeeks.org/ml-boston-housing-kaggle-challenge-with-linear-regression/',
      image: '@/assets/price.jpg',
      type: 'Machine Learning',
      title: 'Spam Classifier',
    },
    {
      link: 'https://www.geeksforgeeks.org/ml-boston-housing-kaggle-challenge-with-linear-regression/',
      image: '@/assets/price.jpg',
      type: 'Game Development',
      title: 'Unity 6 Board Game Prototype',
    },
    {
      link: 'https://www.geeksforgeeks.org/ml-boston-housing-kaggle-challenge-with-linear-regression/',
      image: '@/assets/price.jpg',
      type: 'Game Development',
      title: 'Bot programming',
    },
  ],
  contact: {
    address: 'Local Address',
    email: 'example@gmail.com',
    phone: '+90 0000000000',
    socialLinks: [
      { icon: 'bxl-linkedin', link: 'https://www.linkedin.com/' },
      { icon: 'bxl-instagram', link: 'https://www.instagram.com/' },
      { icon: 'bxl-github', link: 'https://github.com/' },
      { icon: 'bxl-whatsapp', link: 'https://wa.me/910000000000' },
    ],
    languages: [
      { language: 'English', proficiency: 'Professional Proficiency' },
      { language: 'Arabic', proficiency: 'Native' },
    ],
  },
}
