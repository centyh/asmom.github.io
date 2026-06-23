/**
 * ============================================
 * PAGE CONTENT DATA
 * ============================================
 * All structured content for pages lives here.
 * Edit these arrays/objects to customize the template content.
 *
 * Replace placeholder images in src/assets/ with your own.
 */

export const site = {
  url: 'https://centyh.github.io/asmom.github.io/',
  meta: {
    title: 'Asmo Majalahti | Game Developer',
    description: 'Game Developer graduating from Metropolia UAS. Check out my projects and technical expertise.',
  },
  hero: {
    name: 'Asmo Majalahti',
    role: 'Game Developer',
    tagline: 'Game Developer finishing studies at Metropolia UAS. Passionate about gameplay programming, clean systems architecture and smooth player experiences',
    contact: 'Open to new opportunities, junior/mid-level roles and game dev collaborations.',
    avatarSrc: 'kuva.png',
    avatarAlt: '',
  },
  about: {
    paragraphs: [
      'I am a Game Developer currently finishing my final thesis to graduate from Metropolia University of Applied Sciences. Through intensive project-based studies and personal passion, I have built a solid technical foundation in bringing games from initial concepts into playable realities.',
      'I highly value clean code, strong system boundaries, and gameplay feel. I enjoy tackling complex logic puzzles, developing responsive UI/UX systems, optimizing performance, and working closely in multidisciplinary teams to create memorable gaming experiences.',
      {
        heading: 'Core Focus Area',
        bullets: [
          'Gameplay programming and polishing the "game feel"',
          'Systems architecture—writing modular, scalable, and maintainable code',
          'UI/UX implementation and developing custom tooling to improve team workflows',
        ],
      },
      {
        heading: 'Core Tech Stack',
        techItems: ['C#', 'C++', 'Python', 'JavaScript', 'HTML/CSS', 'Git/GitHub', 'Unity 2D & 3D', 'Visual Studio', 'Node.js', 'Figma', 'Doxygen', 'Jira & Trello', 'Troubleshooting', 'Prefab workflows', 'Team collaboration'],
      },
    ],
  },
  experiences: [
    {
      period: 'Jan 2026 - Mar 2026',
      title: 'Game Programmer / Construction Simulator',
      company: 'Metropolia UAS',
      summary:
        'Engineered comprehensive UI architectures and game systems, focusing on real-time progress tracking, data-driven systems, and professional documentation.',
      highlights: [
        'Engineered comprehensive UI architectures, including material management panels, real-time progress tracking and interactive menu systems using Unity\'s prefab system',
        'Developed custom UI animation scripts for windows and buttons to enhance user experience and visual responsiveness',
        'Implemented systems to parse and process large CSV data sheets for dynamic game content and asset balancing', // <-- UUSI RIVI!
        'Implemented and optimized "Worker Efficiency" logic, creating algorithms to scale task progression based on workforce allocation',
        'Introduced professional documentation standards by using Doxygen to comment and generate technical guides for the codebase',
      ],
      tech: ['C#', 'Unity', 'Unity UI', 'Doxygen', 'Algorithms', 'Figma', 'CSV Data Parsing', 'Data-Driven Design'],
    },
    {
      period: 'Jul 2022 - Present',
      title: 'Cinema Host / Technician',
      company: 'Finnkino Oy - Espoo',
      summary:
        'Responsible for the technical operations, troubleshooting, and maintenance of digital cinema systems to ensure seamless delivery.',
      highlights: [
        'Responsible for the operation and maintenance of digital projectors, sound systems and other cinema technology to ensure smooth screenings',
        'Perform technical troubleshooting and repairs to minimize downtime during shows',
      ],
      tech: ['Technical Troubleshooting', 'Hardware Maintenance', 'AV Systems', 'Customer Service'],
    },
    {
      period: 'Summer 2021',
      title: 'Game Programmer Intern',
      company: 'Headstart Technology',
      summary:
        'Designed and developed educational mini-games for children, focusing on intuitive navigation, mechanics, and engaging user experiences.',
      highlights: [
        'Designed and programmed educational mini-games for children, focusing on intuitive mechanics and engaging user experiences',
        'Developed the primary navigation system and main menu, ensuring a seamless transition between different game modules',
        'Contributed to the development of gamified learning solutions, balancing fun gameplay with educational objectives',
      ],
      tech: ['C#', 'Unity', 'Game Programming', 'Educational', 'UI/UX Design'],
    },
  ],
  featuredProjects: [
    {
      title: 'Construction Simulator',
      period: '2026',
      summary: 'A data-driven management simulator developed for construction students to practice site management, resource allocation, and budget tracking.',
      solution: 'Engineered a clean architecture using Unity to parse large Excel/CSV datasets for dynamic task balancing. Developed robust UI systems for real-time progress tracking and worker efficiency algorithms.',
      impact: 'Delivered a highly scalable educational tool that successfully simulates real-world workforce management and financial constraints.',
      image: 'raksa.gif', // Voit vaihtaa tähän simulaattorin screenshotin nimen myöhemmin public-kansioon
      imageAlt: 'Construction Simulator gameplay screenshot',
      techCategories: [
        {
          category: 'Core Systems',
          items: ['C#', 'Unity', 'CSV Data Parsing', 'Algorithms'],
        },
        {
          category: 'Architecture',
          items: ['UI Architecture', 'Data-Driven Design', 'Doxygen Documentation', 'Client Project'],
        },
      ],
    },
    {
      title: 'C++ Chess AI Bot',
      period: '2025',
      summary: 'A console-based chess engine developed in C++ featuring an AI opponent capable of calculating optimal moves.',
      solution: 'Implemented the core chess logic, board representations, and integrated the Alpha-Beta pruning algorithm to optimize the AI search tree efficiency.',
      impact: 'Demonstrated deep understanding of low-level memory management, complex data structures, and algorithmic optimization without external game engines.',
      image: 'chess.gif', // Voit vaihtaa tähän konsolinäkymän screenshotin nimen
      imageAlt: 'C++ Chess engine console preview',
      techCategories: [
        {
          category: 'Backend & Logic',
          items: ['C++', 'Alpha-Beta Pruning', 'AI Algorithms'],
        },
        {
          category: 'Software Engineering',
          items: ['Data Structures', 'Performance Optimization', 'Console UI'],
        },
      ],
    },
    {
      title: 'Ah Rats!',
      period: '2025',
      summary: 'A 3D multiplayer game developed in a collaborative 6-person team, featuring real-time network synchronization and physics-based gameplay.',
      solution: 'Co-programmed network authority logic, player movement replication, and dynamic object synchronization. Managed strict code boundaries to seamlessly integrate art assets with backend systems.',
      impact: 'Successfully delivered a fully functional 3D multiplayer prototype, showcasing deep understanding of network architectures and cross-disciplinary teamwork.',
      image: 'rat.gif', // Voit vaihtaa tähän myöhemmin pelin screenshotin
      imageAlt: 'Ah Rats! multiplayer gameplay',
      techCategories: [
        {
          category: 'Networking & Logic',
          items: ['C#', 'Unity 3D', 'Multiplayer Networking', 'State Synchronization'],
        },
        {
          category: 'Software Engineering',
          items: ['3D Physics', 'Cross-Disciplinary Teamwork', 'Git Workflow'],
        },
      ],
    },
    {
      title: 'One Million Trashbags',
      period: '2024',
      summary: 'A 2D game developed for YLE (Finnish Broadcasting Company) to support their national environmental campaign.',
      solution: 'Collaborated in a 3-person team to program core gameplay loops, user interface flows, and optimized asset delivery for a smooth, multi-platform user experience.',
      impact: 'Shipped a production-ready game for a high-profile national campaign, demonstrating strong client-collaboration, agile teamwork, and accessible design.',
      image: 'trash.gif', // Voit vaihtaa tähän pelin screenshotin nimen public-kansioon
      imageAlt: 'Miljoona roskapussia game showcase',
      techCategories: [
        {
          category: 'Development',
          items: ['C#', 'Unity 2D', 'Cross-Platform Optimization'],
        },
        {
          category: 'Teamwork',
          items: ['Client Project', 'Agile Development', 'UI/UX Implementation'],
        },
      ],
    },
  ],
  projectArchivePage: {
    title: 'All projects',
    description: 'Project archive: dates, roles, and technologies across representative engagements.',
    intro: 'A concise archive of engagements and representative work.',
  },
  projectArchive: [
    { date: '2025', project: 'Design system rollout', role: 'Frontend', techStack: 'Astro, CSS, Storybook' },
    { date: '2024', project: 'Checkout reliability', role: 'Full-stack', techStack: 'TypeScript, Postgres, Redis' },
    { date: '2024', project: 'Auth hardening', role: 'Backend', techStack: 'OAuth2, JWT, rate limits' },
    { date: '2023', project: 'Analytics pipeline', role: 'Data', techStack: 'SQL, dbt, warehouse' },
    { date: '2023', project: 'Mobile web refresh', role: 'Frontend', techStack: 'HTML, CSS, a11y audits' },
  ],
  contact: {
    email: '97asmo@gmail.com',
    github: 'https://github.com/centyh',
    linkedin: 'https://www.linkedin.com/in/asmo-majalahti-33146921a/',
  },
} as const;

export type ProjectArchiveRow = (typeof site.projectArchive)[number];
export type FeaturedProject = (typeof site.featuredProjects)[number];
