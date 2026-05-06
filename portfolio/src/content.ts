export const navItems = [
  { id: 'home', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'experience', label: 'Experience' },
  { id: 'skills', label: 'Skills' },
  { id: 'projects', label: 'Projects' },
  { id: 'contact', label: 'Contact' },
] as const

export const profile = {
  name: 'Hassan Mirza',
  title: 'Full-Stack Software Developer',
  tagline:
    'I design and build software systems with a focus on simplicity, performance, and real-world constraints.',
  education: 'Bachelor of Computer Applications (BCA)',
  location: 'Lucknow, India (open to remote/hybrid)',
  email: 'v9mirza@proton.me',
} as const

export const socialLinks = [
  { label: 'GitHub', href: 'https://github.com/' },
  { label: 'LinkedIn', href: 'https://www.linkedin.com/' },
  { label: 'Twitter', href: 'https://x.com/' },
  { label: 'Blog', href: 'https://medium.com/' },
] as const

export const experience = [
  {
    company: 'Weproz Tech, Lucknow',
    role: 'Full-Stack Developer Intern',
    location: 'Lucknow',
    start: 'Feb 2026',
    end: 'Present',
    responsibilities: [
      'Building MERN applications end-to-end',
      'Designing REST APIs with JWT authentication and role-based access control',
      'Developing responsive React interfaces',
      'Working with Docker and Linux-based environments',
    ],
  },
] as const

export const skills = [
  {
    title: 'Languages & Runtime',
    items: ['JavaScript / TypeScript', 'Node.js', 'Python', 'C/C++'],
  },
  {
    title: 'Web & APIs',
    items: [
      'React',
      'Express',
      'REST API Design',
      'JWT Authentication',
      'RBAC',
    ],
  },
  {
    title: 'Data & Infrastructure',
    items: [
      'MongoDB',
      'MySQL',
      'Schema Design',
      'Linux',
      'Docker',
      'Cloud',
      'Git',
    ],
  },
  {
    title: 'Tools & Craft',
    items: [
      'Shell scripting',
      'Terminal tooling',
      'Debugging',
      'Testing',
      'Technical writing',
      'Figma',
    ],
  },
] as const

export const projects = [
  {
    title: 'Resumex',
    description:
      'Resume builder with ATS-friendly templates, real-time editing, and PDF export.',
    stack: ['React', 'Node.js', 'Express', 'MongoDB', 'PDF export'],
    links: {
      github: 'https://github.com/',
      live: 'https://example.com/',
    },
  },
  {
    title: 'E-commerce Platform',
    description:
      'Full MERN app with cart, checkout, and order flows.',
    stack: ['React', 'Node.js', 'Express', 'MongoDB', 'JWT'],
    links: {
      github: 'https://github.com/',
      live: 'https://example.com/',
    },
  },
  {
    title: 'Quiz Management System',
    description:
      'Role-based platform with real-time features and automated scoring.',
    stack: ['React', 'Node.js', 'Express', 'MongoDB', 'WebSockets'],
    links: {
      github: 'https://github.com/',
      live: 'https://example.com/',
    },
  },
  {
    title: 'LazyPorts',
    description:
      'Terminal-based Linux tool for managing ports visually.',
    stack: ['Linux', 'Shell scripting', 'Debugging'],
    links: {
      github: 'https://github.com/',
      live: 'https://example.com/',
    },
  },
] as const

