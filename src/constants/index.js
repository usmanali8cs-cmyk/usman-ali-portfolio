import {
  frontend,
  backend,
  ux,
  prototyping,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  git,
  figma,
  docker,
  postgresql,
  rubyrails,
  graphql,
  komikult,
  leaderboard,
  math,
  movie,
  nyeusi,
  space,
  coverhunt,
  dcc,
  kelhel,
  microverse,
} from '../assets';

export const navLinks = [
  {
    id: 'about',
    title: 'About',
  },
  {
    id: 'projects',
    title: 'Projects',
  },
  {
    id: 'contact',
    title: 'Contact',
  },
];

const services = [
  {
    title: 'Frontend Developer',
    icon: frontend,
  },
  {
    title: 'Backend Developer',
    icon: backend,
  },
  {
    title: 'UI/UX Design',
    icon: ux,
  },
  {
    title: 'Software Prototyping',
    icon: prototyping,
  },
];

const technologies = [
  {
    name: 'HTML 5',
    icon: html,
  },
  {
    name: 'CSS 3',
    icon: css,
  },
  {
    name: 'JavaScript',
    icon: javascript,
  },
  {
    name: 'TypeScript',
    icon: typescript,
  },
  {
    name: 'React JS',
    icon: reactjs,
  },
  {
    name: 'Redux Toolkit',
    icon: redux,
  },
  {
    name: 'Tailwind CSS',
    icon: tailwind,
  },
  {
    name: 'Node JS',
    icon: nodejs,
  },
  {
    name: 'Rails',
    icon: rubyrails,
  },
  {
    name: 'graphql',
    icon: graphql,
  },
  {
    name: 'postgresql',
    icon: postgresql,
  },
  {
    name: 'git',
    icon: git,
  },
  {
    name: 'figma',
    icon: figma,
  },
  {
    name: 'docker',
    icon: docker,
  },
];

const experiences = [
  {
    title: 'Web Developer',
    company_name: 'Everest Group',
    icon: coverhunt,
    iconBg: '#333333',
    date: 'Aug 2017 - Dec 2020',
  },
  {
    title: 'Senior Software Engineer',
    company_name: 'Rootstrap',
    icon: coverhunt,
    iconBg: '#333333',
    date: 'Jan 2021 - Current',
  }
];

const projects = [
  {
    id: 'project-1',
    name: 'PHPHub Server',
    description: 'A Laravel 5.1-based server-side API for the PHPHub community platform, designed for scalable community-driven applications.',
    tags: [
      {
        name: 'php',
        color: 'blue-text-gradient',
      },
      {
        name: 'laravel',
        color: 'green-text-gradient',
      },
      {
        name: 'api',
        color: 'pink-text-gradient',
      },
    ],
    image: komikult,
    repo: 'https://github.com/usmanali8cs-cmyk/phphub-server',
    demo: ''
  },
  {
    id: 'project-2',
    name: 'CloudBase Framework',
    description:
      'A serverless deployment tool for one-click hosting of front-end and back-end apps across multiple frameworks.',
      tags: [
        {
          name: 'nodejs',
          color: 'blue-text-gradient',
        },
        {
          name: 'typescript',
          color: 'green-text-gradient',
        },
        {
          name: 'docker',
          color: 'pink-text-gradient',
        },
      ],
    image: leaderboard,
    repo: 'https://github.com/usmanali8cs-cmyk/cloudbase-framework',
    demo: '',
  },
  {
    id: 'project-3',
    name: 'SaasKit',
    description: 'A .NET toolkit for building SaaS applications with seamless multi-tenancy and rapid development features.',
    tags: [
      {
        name: 'dotnet',
        color: 'blue-text-gradient',
      },
      {
        name: 'aspnetcore',
        color: 'green-text-gradient',
      },
      {
        name: 'saas',
        color: 'pink-text-gradient',
      },
    ],
    image: math,
    repo: 'https://github.com/usmanali8cs-cmyk/SAASKIT',
    demo: '',
  },
  {
    id: 'project-4',
    name: 'Angular RealWorld App',
    description: `A Medium-like blogging platform with CRUD operations, authentication, and pagination, built using Angular.`,
    tags: [
      {
        name: 'angular',
        color: 'blue-text-gradient',
      },
      {
        name: 'typescript',
        color: 'green-text-gradient',
      },
      {
        name: 'rxjs',
        color: 'pink-text-gradient',
      },
    ],
    image: movie,
    repo: 'https://github.com/usmanali8cs-cmyk/angular-realworld-app',
    demo: '',
  },
  {
    id: 'project-5',
    name: 'ngX Starter Kit',
    description:
      'An Angular 14+ starter kit for enterprise-grade projects, featuring scalable architecture and modern tools.',
      tags: [
        {
          name: 'angular',
          color: 'blue-text-gradient',
        },
        {
          name: 'typescript',
          color: 'green-text-gradient',
        },
        {
          name: 'docker',
          color: 'pink-text-gradient',
        },
      ],
    image: nyeusi,
    repo: 'https://github.com/usmanali8cs-cmyk/ngx-starter-kit',
    demo: '',
  },
];

export { services, technologies, experiences, projects };
