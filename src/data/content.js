// ---------------------------------------------------------------------------
// All of the site's real copy lives here. Edit this file to update the
// site.
// ---------------------------------------------------------------------------
import dairyMultitenantApp from '../assets/DairyMultitenantApp.png'
import YouthlinkApp from '../assets/Youthlink.png'
export const profile = {
  name: 'Steve Adam Maina',
  role: 'Full Stack Developer',
  tagline: 'Building scalable Web & Mobile apps — and testing them until they don\u2019t break.',
  about: `Full stack developer with 2+ years of experience building scalable web
and mobile applications. Specialized in Angular, React, Node.js, and Flutter,
with proven expertise in quality assurance and performance testing.
Passionate about delivering high-quality software through clean, documented
code, rigorous testing, and continuous improvement.`,
}


export const education = [
  {
    period: 'Aug 2020 \u2013 Nov 2024',
    school: 'Daystar University',
    detail: 'B.Sc. in Applied Computer Science',
  },
  {
    period: 'May \u2013 Jul 2022',
    school: 'Cisco Academy',
    detail: 'CCNA 1 Certification \u2014 Introduction to Networking',
  },
  {
    period: 'Jan \u2013 Apr 2020',
    school: 'eMobilis Mobile Technology Institute',
    detail: 'MIT Boot Camp \u2014 web (HTML/CSS/Bootstrap/PHP/JS/Python/MySQL), Git/GitHub basics, Android (Kotlin/Java)',
  },
]

// World-map "levels" — one per section, shown in the top nav/progress track.
export const levels = [
  { id: 'about', label: '1-1', name: 'ABOUT' },
  { id: 'skills', label: '1-2', name: 'SKILLS' },
  { id: 'projects', label: '1-3', name: 'PROJECTS' },
  { id: 'experience', label: '1-4', name: 'EXPERIENCE' },
  { id: 'contact', label: '1-5', name: 'CONTINUE?' },
]

// Skill "stat bars" — percentages are placeholders, adjust to your own
export const skillCategories = [
  {
    id: 'languages', title: 'Languages', items: [
      { name: 'Python', icon: 'python' },
      { name: 'Golang', icon: 'go' },
      { name: 'Java', icon: 'java' },
      { name: 'TypeScript', icon: 'ts' },
      { name: 'JavaScript', icon: 'js' },
      { name: 'SQL', icon: 'postgresql' },
    ]
  },
  {
    id: 'frontend', title: 'Frontend', items: [
      { name: 'React', icon: 'react' },
      { name: 'Next.js', icon: 'nextjs' },
      { name: 'Angular', icon: 'angular' },
      { name: 'Svelte', icon: 'svelte' },
      { name: 'Tailwind', icon: 'tailwind' },
      { name: 'HTML5', icon: 'html' },
      { name: 'CSS3', icon: 'css' },
    ]
  },
  {
    id: 'backend', title: 'Backend', items: [
      { name: 'Node.js', icon: 'nodejs' },
      { name: 'Express', icon: 'express' },
      { name: 'Spring Boot', icon: 'spring' },
      { name: 'Django', icon: 'django' },
    ]
  },
  {
    id: 'mobile', title: 'Mobile Development', items: [
      { name: 'React Native', icon: 'react' },
      { name: 'Flutter', icon: 'flutter' },
      { name: 'Android Studio', icon: 'androidstudio' },
    ]
  },
  {
    id: 'databases', title: 'Databases', items: [
      { name: 'PostgreSQL', icon: 'postgresql' },
      { name: 'MongoDB', icon: 'mongodb' },
      { name: 'MySQL', icon: 'mysql' },
      { name: 'Redis', icon: 'redis' },
    ]
  },
  {
    id: 'cloud', title: 'Cloud Platforms', items: [
      { name: 'AWS', icon: 'aws' },
      { name: 'GCP', icon: 'gcp' },
    ]
  },
  {
    id: 'ai', title: 'AI & Machine Learning', items: [
      { name: 'PyTorch', icon: 'pytorch' },
      { name: 'TensorFlow', icon: 'tensorflow' },
      { name: 'scikit-learn', icon: 'sklearn' },
      { name: 'OpenCV', icon: 'opencv' },
      { name: 'Pandas', icon: 'pandas' },
      { name: 'NumPy', icon: 'numpy' },
    ]
  },
  {
    id: 'technologies', title: 'Technologies', items: [
      { name: 'GraphQL', icon: 'graphql' },
      { name: 'Docker', icon: 'docker' },
      { name: 'Kubernetes', icon: 'kubernetes' },
    ]
  },
  {
    id: 'cicd', title: 'CI/CD', items: [
      { name: 'GitHub Actions', icon: 'githubactions' },
      { name: 'Jenkins', icon: 'jenkins' },
      { name: 'CircleCI', icon: 'circleci' },
    ]
  },
  {
    id: 'ui', title: 'UI', items: [
      { name: 'Figma', icon: 'figma' },
      { name: 'Wordpress', icon: 'wordpress' },
      { name: 'Sass', icon: 'sass' },
      { name: 'Bootstrap', icon: 'bootstrap' },
    ]
  },
  {
    id: 'hosting', title: 'Hosting', items: [
      { name: 'Vercel', icon: 'vercel' },
      { name: 'Netlify', icon: 'netlify' },
    ]
  },
  {
    id: 'qa', title: 'QA & Automation', items: [
      { name: 'Selenium', icon: 'selenium' },
      { name: 'Postman', icon: 'postman' },
      { name: 'Grafana', icon: 'grafana' },
    ]
  },
  {
    id: 'tools', title: 'Tools', items: [
      { name: 'Git', icon: 'git' },
      { name: 'VS Code', icon: 'vscode' },
      { name: 'Vim', icon: 'vim' },
      { name: 'Powershell', icon: 'powershell' },
      { name: 'Linux', icon: 'linux' },
    ]
  },
]

// Projects — one "item card" each.

export const projects = [
  {
    id: 'media-converter',
    title: 'Media Converter',
    siteUrl: 'https://github.com/SteveAdam/MediaConverter',
    summary:
      'Universal media converter for YouTube videos, playlists, and local files, plus document conversion across PDF, PPTX, XLSX, DOCX, and more.',
    tags: ['TypeScript', 'React', 'Node.js'],
    icon: 'ts',
    techStack: ['TypeScript', 'React', 'Node.js'],
    objectives: [
      'Built a converter that handles YouTube videos, playlists, and user-uploaded files with quality options.',
      'Added document conversion across common office formats (PDF, PPTX, XLSX, DOCX).',
      'Kept the conversion pipelines typed in TypeScript so format handling stays consistent.',
    ],
    links: {
      repo: 'https://github.com/SteveAdam/MediaConverter',
    },
  },
  {
    id: 'farmers-forecast',
    title: 'Farmers Forecast',
    siteUrl: 'https://farmers-forecasts-d1fd68.netlify.app/',
    summary:
      'A React weather dashboard for Kenyan farms: real-time conditions, 7-day forecasts, and AI-generated summaries to support planting and harvest decisions.',
    tags: ['React', 'JavaScript', 'Vite'],
    icon: 'react',
    techStack: ['React', 'Vite', 'WeatherAI API', 'Gemini'],
    objectives: [
      'Integrated live weather and 7-day forecast APIs with AI summaries for farm planning.',
      'Added quick-access locations for Kenyan farms (Nairobi, Kisii, Bomet, Kericho) and saved favorites in the browser.',
      'Designed a responsive dashboard so the same view works on desktop, tablet, and mobile.',
    ],
    links: {
      repo: 'https://github.com/SteveAdam/Farmers-Forecast',
      demo: 'https://farmers-forecasts-d1fd68.netlify.app/',
    },
  },
  {
    id: 'nes-portfolio',
    title: 'NES Personal Portfolio',
    siteUrl: 'https://steveadam.github.io/NES-PersonalPortfolio/',
    summary:
      'A personal portfolio styled after classic NES games, framed as a Super Mario world map and built with React, Vite, and nes.css.',
    tags: ['React', 'Vite', 'CSS'],
    icon: 'react',
    techStack: ['React', 'Vite', 'nes.css'],
    objectives: [
      'Designed the site as a game world map, with a sticky progress bar tracking each section like a Mario level.',
      'Presented skills as RPG stat bars, projects as item cards, and experience as a completed quest log.',
      'Shipped a responsive NES aesthetic using Press Start 2P, VT323, and nes.css on a dark debug-console palette.',
    ],
    links: {
      repo: 'https://github.com/SteveAdam/NES-PersonalPortfolio',
      demo: 'https://steveadam.github.io/NES-PersonalPortfolio/',
    },
  },
  {
    id: 'youthlink',
    title: 'YouthLink Platform',
    photo: YouthlinkApp,
    // siteUrl: 'https://www.ay-link.com/home', // TODO: swap for a real screenshot or siteUrl
    summary:
      'Built a youth engagement and recruiting platform linking career seekers with jobs and internships, using Angular and TypeScript integrated with a Node.js backend for a responsive, seamless experience.',
    tags: ['Angular', 'TypeScript', 'Node.js'],
    icon: 'angular',
    techStack: ['Angular', 'TypeScript', 'Node.js', 'REST API'],
    objectives: [
      'Architected the seeker/employer platform, defining the component structure (Angular) and API contract (Node.js).',
      'Built reusable, typed UI components to keep the seeker and employer-facing flows consistent.',
      'Integrated the Node.js backend for job listings, applications, and profile management.',
      'Focused on responsive layouts so the experience holds up across desktop and mobile.',
    ],
    links: {
      // repo: 'https://github.com/SteveAdam/youthlink', // TODO: add real repo URL
      // demo: 'https://www.ay-link.com/home',
    },
  },
  {
    id: 'ncba-dairy',
    title: 'NCBA Dairy Collection System',
    photo: dairyMultitenantApp,
    summary:
      'A multi-tenant mobile app for dairy collection management, built with Flutter and a Java Spring Boot backend, with a scalable architecture supporting multiple cooperatives simultaneously.',
    tags: ['Flutter', 'Java', 'Spring Boot'],
    icon: 'flutter',
    techStack: ['Flutter', 'Java', 'Spring Boot', 'PostgreSQL'],
    objectives: [
      'Designed a multi-tenant data model so multiple dairy cooperatives could run on one shared system safely.',
      'Built the Flutter mobile app used by collection agents in the field.',
      'Implemented Spring Boot backend services for collection, tenant, and reporting logic.',
      'Handled offline-friendly UX considerations for field agents with unreliable connectivity.',
    ],
    links: {
      // repo: 'https://github.com/SteveAdam/ncba-dairy',
    },
  },
  {
    id: 'bidco-yofinvoice',
    title: 'Bidco Yofinvoice',
    siteUrl: 'https://yofinvoice.com/for-buyers/',
    summary:
      'End-to-end QA testing for Bidco\u2019s enterprise supply chain financing platform, identifying and tracking critical bugs ahead of deployment.',
    tags: ['QA Testing', 'Documentation'],
    icon: null,
    techStack: ['JMeter', 'Grafana', 'Manual & Automated QA'],
    objectives: [
      'Ran end-to-end QA testing across the supply chain financing workflow ahead of releases.',
      'Identified, documented, and tracked critical bugs through to resolution with the dev team.',
      'Used JMeter and Grafana for performance and load testing under realistic traffic.',
      'Wrote test plans and documentation to make QA coverage repeatable across releases.',
    ],
    links: {},
  },
  {
    id: 'numeral-tech',
    title: 'Numeral Tech Academy UI/UX',
    siteUrl: 'https://numeraliot.com/',
    summary:
      'Designed and implemented user-friendly, intuitive interfaces for an education technology platform, focused on improving learner engagement.',
    tags: ['HTML', 'CSS', 'JavaScript'],
    icon: 'html',
    techStack: ['HTML5', 'CSS3', 'JavaScript'],
    objectives: [
      'Designed learner-facing interfaces focused on reducing friction in the course-taking flow.',
      'Implemented responsive layouts in vanilla HTML/CSS/JS to keep the footprint light.',
      'Iterated on UI based on learner engagement feedback.',
    ],
    links: {},
  },
  {
    id: 'real-estate-chain',
    title: 'Decentralized Real Estate App',
    siteUrl: 'https://rmm.realtoken.network/markets/',
    summary:
      'Final-year project implementing secure property purchase and sale mechanisms via smart contracts on Ethereum, for transparent real estate transactions.',
    tags: ['React', 'Solidity', 'Ethereum'],
    icon: 'solidity',
    techStack: ['React', 'Solidity', 'Ethereum', 'Web3.js'],
    objectives: [
      'Designed and wrote Solidity smart contracts to handle property listing, escrow, and transfer of ownership.',
      'Built the React frontend for browsing listings and initiating purchases via a connected wallet.',
      'Focused the contract logic on transparency and tamper-resistance for transaction history.',
      'Final-year project — deployed and tested against a local Ethereum testnet.',
    ],
    links: {},
  },
  {
    id: 'mobile-medic',
    title: 'Mobile Medic',
    siteUrl: 'https://medic.org/stories/tag/mobile-app/',
    summary:
      'A telemedicine Android app connecting patients with doctors for remote diagnosis, with an intuitive UI/UX for patient\u2013doctor interactions.',
    tags: ['Kotlin', 'Android Studio'],
    icon: 'kotlin',
    techStack: ['Kotlin', 'Android Studio'],
    objectives: [
      'Built the Android app end-to-end in Kotlin, from patient onboarding to doctor consultation flows.',
      'Designed the UI/UX around minimizing steps between "I need a doctor" and getting connected.',
      'Handled patient-doctor session state and appointment scheduling logic.',
    ],
    links: {},
  },
  {
    id: 'uptime-monitor',
    title: 'HTTP Uptime Monitoring Tool',
    siteUrl: 'https://uptimerobot.com/',
    summary:
      'A URL monitoring system for tracking website availability, with automated alerts and performance tracking.',
    tags: ['JavaScript', 'Node.js'],
    icon: 'nodejs',
    techStack: ['Node.js', 'JavaScript'],
    objectives: [
      'Built a polling service that periodically checks configured URLs for availability and response time.',
      'Implemented automated alerting when a monitored endpoint goes down or degrades.',
      'Tracked historical uptime/performance data for trend visibility.',
    ],
    links: {},
  },
]

// Color palette for project cards, used in a repeating cycle.
export const timeline = [
  {
    type: 'education',
    title: 'eMobilis Mobile Technology Institute',
    detail: 'MIT Boot Camp \u2014 Web & Mobile App Development',
    period: 'Jan \u2013 Apr 2020',
  },
  {
    type: 'education',
    title: 'Daystar University',
    detail: 'B.Sc. Applied Computer Science',
    period: 'Aug 2020 \u2013 Nov 2024',
  },
  {
    type: 'education',
    title: 'Cisco Academy',
    detail: 'CCNA 1 Certification',
    period: 'May \u2013 Jul 2022',
  },
  {
    type: 'work',
    title: 'Deveint Limited',
    detail: 'QA testing & documentation \u2014 Bidco Yofinvoice, Numeral Tech Academy',
    period: 'Jun 2024 \u2013 Mar 2025',
  },
  {
    type: 'work',
    title: 'E&M Technologies',
    detail: 'Full stack development \u2014 YouthLink, NCBA Dairy Collection System',
    period: 'Apr 2025 \u2013 Present',
  },
]
// "Quest log" — work experience, shown as completed quests with objectives.
export const quests = [
  {
    title: 'E&M Technologies',
    period: 'Apr 2025 \u2013 Present',
    objectives: [
      'Delivered frontend applications using Angular and TypeScript for the YouthLink platform.',
      'Developed cross-platform mobile apps with Flutter, including a multi-tenant Dairy Collection system for NCBA Bank.',
      'Led testing automation initiatives using JMeter and Grafana for performance and load testing.',
      'Collaborated cross-functionally to integrate frontend with Node.js backend services.',
    ],
  },
  {
    title: 'Deveint Limited',
    period: 'Jun 2024 \u2013 Mar 2025',
    objectives: [
      'Designed and implemented responsive UIs, including for Numeral Tech Academy.',
      'Conducted quality assurance testing for Bidco\u2019s Supply Chain Financing system.',
      'Wrote technical documentation and user manuals to improve system accessibility.',
      'Helped establish QA best practices and testing protocols across teams.',
    ],
  },
]

// Contact — public-facing links only (phone/address kept off the site).
export const contact = {
  email: 'steve.kyrosevents@gmail.com',
  github: 'https://github.com/SteveAdam',
  linkedin: 'https://www.linkedin.com/in/steve-adam-595b75307/',
  cvFile: 'steve_adam_maina_cv.pdf',
}
