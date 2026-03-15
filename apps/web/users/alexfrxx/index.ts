import { Resume } from '../../types'
import {
   faLinkedin,
   faGithub,
   faTelegram,
} from '@fortawesome/free-brands-svg-icons'
import { SKILLS } from './SKILLS'
import { LOCATIONS } from './LOCATIONS'
import { LANGUAGES } from './LANGUAGES'
import { EXPERIENCES } from './EXPERIENCES'
import { EDUCATIONS } from './EDUCATIONS'
import { PROJECTS } from './PROJECTS'
import { CONTRIBUTIONS } from './CONTRIBUTIONS'
import { TECHNOLOGIES } from './TECHNOLOGIES'

export const RESUME: Resume = {
   firstName: 'Alex',
   lastName: 'Frolov',
   name: 'Aleksandr Frolov',
   nick: 'alexfrxx',
   gender: 'male',
   nameLink: 'https://www.linkedin.com/in/AleksandrFrolov2809/',

   initials: 'DS',
   initialsLink: 'https://www.linkedin.com/in/AleksandrFrolov2809/',

   locations: LOCATIONS,
   languages: LANGUAGES,

   avatar: '/me.jpeg',
   avatarLink: 'https://www.linkedin.com/in/AleksandrFrolov2809/',

   summary: 'Frontend Developer & AI Automator & UI/UX Enthusiast',
   summaryLink: 'https://www.linkedin.com/in/AleksandrFrolov2809/',

   about: [
      {
         description:
            'From an early age, I’ve been passionate about creating beautiful and functional websites. I started with marketing and landing pages on Tilda and Taplink, which helped me understand the value of design and user experience. At 16, I began studying frontend development, and since then I’ve been fully focused on web development. I’m constantly learning new things, improving my skills, and enjoying the process of building high-quality interfaces. In an era where AI writes code, it’s important to think not only about how it works, but also about how people use it. I pay special attention to usability, simplicity, and user experience.',
      },
      {
         title: 'Competencies',
         items: [
            'Frontend Development',
            'Fullstack Development',
            'Architecture',
            'UI/UX Design and Development',
            'Software Development',
            'Process Structuration and Optimization',
            'Executive Leadership',
         ],
      },
      {
         title: 'Stacks',
         items: ['JAM'],
      },
   ],
   aboutLink: 'https://www.linkedin.com/in/AleksandrFrolov2809/',

   help: [
      {
         title: '1. Technical Strategy and Vision',
         items: [
            "Architect and guide the overall technical direction: Define the technological roadmap aligned with the company's goals. This includes selecting the right tech stack, frameworks, and tools to future-proof the organization.",
            'Research and innovation: Stay updated on emerging technologies and trends to identify opportunities for innovation and competitive advantage.',
            'Scalability and sustainability: Ensure that technical solutions are scalable and maintainable, promoting a long-term vision for growth.',
         ],
      },
      {
         title: '2. Team Leadership and Development',
         items: [
            'Build and mentor a strong team: Guide the technical team by fostering a culture of learning, innovation, and accountability. Provide mentorship to developers to help them grow their skills and become leaders themselves.',
            'Efficient collaboration: Establish clear communication channels, set team goals, and ensure proper collaboration between developers, product managers, and stakeholders.',
            'Hiring and resource management: Lead the recruitment process to bring in talent that fits both technically and culturally. Allocate resources to ensure efficient project delivery.',
         ],
      },
      {
         title: '3. Project and Product Delivery',
         items: [
            'Oversee project execution: Ensure timely and high-quality delivery of products by monitoring development cycles, managing risks, and removing blockers.',
            'Quality assurance: Enforce best practices in software development, including code reviews, testing, and continuous integration and deployment (CI/CD).',
            'Align technical efforts with business goals: Balance technical debt with feature development to ensure the team delivers value while maintaining codebase health.',
         ],
      },
   ],
   helpLink: 'https://www.linkedin.com/in/AleksandrFrolov2809/',

   website: 'https://www.linkedin.com/in/AleksandrFrolov2809/',

   contact: {
      website: 'https://www.linkedin.com/in/AleksandrFrolov2809/',
      email: 'fr.280907@gmail.com',
      phone: '+48 511 206 751',
      linkedin: 'https://www.linkedin.com/in/AleksandrFrolov2809/',
      github: 'https://github.com/alexfrxx',
      telegram: 'https://t.me/alexFrxx',
      socials: [
         {
            name: 'LinkedIn',
            url: 'https://www.linkedin.com/in/AleksandrFrolov2809/',
            icon: faLinkedin,
         },
         {
            name: 'Github',
            url: 'https://github.com/alexfrxx',
            icon: faGithub,
         },
         {
            name: 'Telegram',
            url: 'https://t.me/alexFrxx',
            icon: faTelegram,
         },
      ],
   },

   technologies: TECHNOLOGIES,

   experiences: EXPERIENCES,

   educations: EDUCATIONS,

   skills: SKILLS,

   projects: PROJECTS,

   contributions: CONTRIBUTIONS,

   characteristics: [
      'self-motivated',
      'self-organized',
      'self-conscious',
      'self-control',
      'responsible',
      'honest',
      'fair',
      'hardworking',
      'energetic',
      'sociable',
      'purposeful',
      'resourcefulness',
      'cheerfulness',
      'patience',
      'principles',
      'decisive',
      'careful',
      'friendly',
      'enjoy learning and teaching',
   ],

   keywords: [
      'Aleksandr Frolov',
      'Alex Frolov',
      'alexfrxx',
      'Frontend Developer',
      'Fullstack Developer',
      'JavaScript',
      'TypeScript',
   ],
}
