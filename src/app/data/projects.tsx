export type Project = {
  title: string;
  description: string;
  tags: string[];
  image: string;
  liveUrl: string;
  githubUrl: string;
  category: 'Web' | 'Mobile' | 'Server';
};

export const projects: Project[] = [
  {
    title: 'SOSCore System',
    description:
      'A full-stack SOSCore solution with automation recap integration and admin dashboard.',
    tags: ['Laravel', 'PostgreSQL', 'Livewire', 'Docker'],
    image: '/projects/soscoresystem.jpg',
    liveUrl: '#',
    githubUrl: '#',
    category: 'Web',
  },
  {
    title: 'HRIS Mobile App',
    description:
      'A mobile HRIS application with attendance, leave management, and payroll features.',
    tags: ['Kotlin', 'Jetpack Compose', 'Clean Architecture'],
    image: '/projects/hris.jpg',
    liveUrl: '#',
    githubUrl: '#',
    category: 'Mobile',
  },

  {
    title: 'E-Commerce Platform',
    description: 'A full-stack e-commerce solution with payment integration and admin dashboard.',
    tags: ['Laravel', 'PostgreSQL', 'Livewire', 'Tailwind CSS'],
    image: '/projects/ecommerce.jpg',
    liveUrl: '#',
    githubUrl: '#',
    category: 'Web',
  },
  {
    title: 'Thrifting Clothing Website',
    description: 'A full-stack e-commerce solution with payment integration and admin dashboard.',
    tags: ['Laravel', 'PostgreSQL', 'Livewire', 'Tailwind CSS'],
    image: '/projects/thrift.jpg',
    liveUrl: '#',
    githubUrl: '#',
    category: 'Web',
  },
  {
    title: 'Booking Platform',
    description: ' booking platform with Payment integration and Admin Dashboard.',
    tags: ['Laravel', 'PostgreSQL', 'Tailwind CSS'],
    image: '/projects/booking.jpg',
    liveUrl: '#',
    githubUrl: '#',
    category: 'Web',
  },
  {
    title: 'Portfolio Website',
    description: 'A modern portfolio website with 3D animations and interactive UI components.',
    tags: ['Next.js', 'Tailwind CSS', 'GSAP'],
    image: '/projects/portofolio.jpg',
    liveUrl: '#',
    githubUrl: '#',
    category: 'Web',
  },
  // Mobile Projects

  {
    title: 'Memo App',
    description: 'A simple memo application with cloud sync and reminders.',
    tags: ['Flutter', 'Firebase'],
    image: '/projects/memo.webp',
    liveUrl: '#',
    githubUrl: '#',
    category: 'Mobile',
  },
  {
    title: 'Story App',
    description:
      'Story application with offline reading and bookmarking features integration with Google Maps',
    tags: ['Kotlin', 'Jetpack Compose', 'Room'],
    image: '/projects/story.png',
    liveUrl: '#',
    githubUrl: '#',
    category: 'Mobile',
  },
  // Server Projects
  {
    title: 'Faker User API',
    description: 'Scalable API gateway , rate limiting, and logging.',
    tags: ['Django', 'REST Framework', 'Docker', 'PostgreSQL'],
    image: '/projects/faker.jpeg',
    liveUrl: '#',
    githubUrl: 'https://github.com/ngabroger/myapi',
    category: 'Server',
  },
  {
    title: 'Whatsapp API Service',
    description: 'Whatsapp API service for sending and receiving messages programmatically.',
    tags: ['Docker', 'Node.js'],
    image: '/projects/whatsapp.png',
    liveUrl: '#',
    githubUrl: 'https://github.com/ngabroger/whatsappbot',
    category: 'Server',
  },
];

export const featuredProjects = projects.slice(0, 3);

export const getProjectsByCategory = (category: string) => {
  if (category === 'All') return projects;
  return projects.filter((project) => project.category === category);
};

export const categories = ['All', 'Web', 'Mobile', 'Server'] as const;
