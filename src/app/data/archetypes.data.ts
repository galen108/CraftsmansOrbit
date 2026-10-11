import { Archetype } from '../models/archetype.model';

export const ARCHETYPES: Archetype[] = [
  {
    index: 0,
    archetype: 'The Visionary',
    tagline: 'Dream Till It Becomes Real',
    role: 'Founding SSGA Architect',
    accentColor: '#c8a84b',
    sections: [
      {
        title: 'What Auralicode® LLC Builds',
        blocks: [
          {
            type: 'text',
            content:
              'Auralicode® LLC delivers SSGA Architecture, modernization, accessibility, and structural rebuilds for mission-driven organizations and SaaS teams. Our capabilities are grounded in clarity, predictability, and modernization architecture that lasts.'
          }
        ]
      },
      {
        title: 'Core Capabilities',
        blocks: [
          {
            type: 'definition-list',
            techItems: [
              {
                name: 'Accessibility Modernization',
                description:
                  'Rebuilding systems with WCAG 2.2, semantic clarity, predictable interaction, and lived-experience insight.'
              },
              {
                name: 'Sovereign Static Generated Architecture',
                description:
                  'Stabilizing interfaces and metadata, eliminating hydration traps, and rebuilding public-facing Angular/Next.js/Nuxt systems for indexability.'
              },
              {
                name: 'Structural UI/UX',
                description:
                  'Clean DOM structure, predictable patterns, and navigation that reduces cognitive load.'
              },
              {
                name: 'Performance Engineering',
                description: 'INP, LCP, and CLS focused performance, stable rendering, and detectably fast systems.'
              },
              {
                name: 'System Rebuilds',
                description: 'From brittle templates to robust architecture — rebuilding systems the right way.'
              }
            ]
          }
        ]
      },
      {
        title: 'Core Disciplines',
        blocks: [
          {
            type: 'definition-list',
            techItems: [
              {
                name: 'Angular, Next.js, and Nuxt Architecture',
                description:
                  'Structured, scalable application architecture delivering predictable rendering, resilient hydration, and long‑term maintainability.'
              },
              {
                name: 'TypeScript Engineering',
                description:
                  'Strongly typed engineering enabling safer code, clearer contracts, and predictable application behavior.'
              },
              {
                name: 'Semantic HTML & Modern CSS Architecture',
                description:
                  'Accessible, maintainable interface structure using semantic markup and scalable, component‑driven CSS patterns.'
              },
              {
                name: 'Backend & API Engineering',
                description:
                  'Robust service architecture providing secure data-flows, stable integrations, and predictable multi‑environment behavior.'
              },
              {
                name: 'WCAG 2.2 & Accessibility Systems',
                description:
                  'Inclusive interaction systems ensuring perceivable, operable, understandable, and robust experiences for all.'
              },
              {
                name: 'Performance Engineering (INP, LCP, CLS)',
                description:
                  'Optimized rendering pipelines delivering fast interactions, stable layouts, and consistently responsive experiences.'
              },
              {
                name: 'Metadata & SEO Architecture',
                description:
                  'Search‑safe metadata systems enabling accurate indexing, canonical clarity, and durable long‑term discoverability.'
              }
            ]
          }
        ]
      },
      {
        title: 'Why These Capabilities Matter',
        blocks: [
          {
            type: 'text',
            content:
              'Because systems that are confusing, unpredictable, or inaccessible create friction — for users, for staff, for teams, for communities. We remove that friction.'
          }
        ]
      }
    ]
  },

  {
    index: 1,
    archetype: 'The Principal',
    tagline: 'The Standard-Bearer',
    role: 'The Definitive 40-Item Tech Stack',
    accentColor: '#a8b4c0',
    sections: [
      {
        title: 'Founder & Mission',
        blocks: [
          {
            type: 'text',
            content:
              'Founder: Galen Tenney — Mission: High-control, full-stack engineering bridging modern frontend precision with legacy enterprise stability.'
          }
        ]
      },
      {
        title: '1. Modern Frameworks & Libraries',
        blocks: [
          {
            type: 'list',
            items: [
              'Angular (v17+): The core for enterprise-scale, structured applications.',
              'TypeScript: The mandatory type-safe layer across all builds.',
              'Next.js (React): For high-performance, SEO-optimized web architecture.',
              'Nuxt (Vue.js): Versatile alternatives for reactive state-driven interfaces.',
              'React Native: Cross-platform mobile development.',
              'Full-Stack Engineering: The holistic discipline of managing the entire data-to-UI lifecycle.'
            ]
          }
        ]
      },
      {
        title: '2. UI & Component Architecture',
        blocks: [
          {
            type: 'list',
            items: [
              'Angular Material & PrimeNG: Robust primitives for the Angular ecosystem.',
              'MUI (Material UI) & Shadcn/ui: Industry-standard React component patterns.',
              'Radix UI & Headless UI: Unstyled, accessible foundations for custom design systems.',
              'Vuetify: Semantic Material Design for Vue.js.',
              'Ant Design, Chakra UI, Mantine, Tailwind UI, Kendo UI: Specialized suites for enterprise and rapid development.',
              'React Paper: Material Design specifically for React Native.'
            ]
          }
        ]
      },
      {
        title: '3. Styling & Design Systems',
        blocks: [
          {
            type: 'list',
            items: [
              'Tailwind CSS: Utility-first styling for rapid, scalable UI.',
              'SASS / CSS3: Advanced pre-processing and native styling capabilities.',
              'Graphic Design & Digital Illustration: In-house creative assets and brand identity.',
              'Native System Font Stacks: Prioritizing performance and OS-level visual harmony.'
            ]
          }
        ]
      },
      {
        title: '4. Backend & Data Architecture',
        blocks: [
          {
            type: 'list',
            items: [
              'Microsoft SQL Server & MySQL/MariaDB: Relational databases for secure data storage.',
              'RESTful APIs: The connective tissue between services.',
              'Legacy Systems Integration: The specialized skill of modernizing "old" tech without breaking it.',
              'Java/Spring, Groovy/Grails, Python, PHP: Multi-language backend experience for diverse environment requirements.'
            ]
          }
        ]
      },
      {
        title: '5. Infrastructure & Tooling',
        blocks: [
          {
            type: 'list',
            items: [
              'JetBrains IntelliJ IDEA Ultimate: The heavy-duty IDE for enterprise engineering.',
              'AI-Assisted Workflows: Leveraging Claude Code and Junie AI for precision-targeted development.',
              'High-Control Manual Deployment: Eschewing "magic" buttons for granular server control.',
              'Google Cloud Run, Docker, Kubernetes: Modern containerization and orchestration.',
              'Netlify: Edge-optimized hosting and deployment.'
            ]
          }
        ]
      }
    ]
  },

  {
    index: 2,
    archetype: 'The Engineer',
    tagline: 'The Master Builder',
    role: 'IntelliJ IDEA Full Stack',
    accentColor: '#4a8fa8',
    sections: [
      {
        title: 'Software Development Platform & AI Tooling',
        blocks: [
          {
            type: 'chips',
            items: [
              'JetBrains IntelliJ IDEA Ultimate',
              'Claude Code (Anthropic)',
              'Codex (OpenAI)',
              'Junie AI (JetBrains)'
            ]
          }
        ]
      },
      {
        title: 'Frontend Frameworks & Platforms',
        blocks: [
          {
            type: 'chips',
            items: [
              'React',
              'Next.js',
              'Angular CLI',
              'Vue.js',
              'Nuxt',
              'React Native',
              'Express',
              'Node.js',
              'Vite',
              'HTML5 Boilerplate',
              'WordPress',
              'Bootstrap',
              'Material',
              'Foundation'
            ]
          }
        ]
      },
      {
        title: 'UI Component Libraries',
        blocks: [
          {
            type: 'chips',
            items: [
              'Material-UI (MUI)',
              'Angular Material',
              'Vuetify',
              'PrimeNG',
              'PrimeReact',
              'PrimeVue',
              'Ant Design',
              'Chakra UI',
              'Mantine',
              'Tailwind UI',
              'Radix UI',
              'Kendo UI',
              'Bootstrap NG/React/Vue',
              'React Paper'
            ]
          }
        ]
      },
      {
        title: 'Backend Frameworks & Languages',
        blocks: [
          {
            type: 'chips',
            items: ['Java', 'JVM Ecosystem', 'Groovy', 'Grails', 'Python', 'Ruby', 'Ruby on Rails', 'Go', 'PHP']
          }
        ]
      },
      {
        title: 'Database Tools',
        blocks: [
          {
            type: 'chips',
            items: [
              'SQL Systems',
              'NoSQL Systems',
              'ORM',
              'Query Builders',
              'Database Architecture',
              'Database Optimization'
            ]
          }
        ]
      },
      {
        title: 'DevOps & Cloud',
        blocks: [
          {
            type: 'chips',
            items: ['Docker', 'Kubernetes', 'CI/CD Pipelines', 'Version Control', 'Deployment Automation']
          }
        ]
      },
      {
        title: 'HTTP Clients & API Tooling',
        blocks: [
          {
            type: 'chips',
            items: ['REST', 'GraphQL', 'API Development', 'Testing', 'Monitoring', 'Documentation']
          }
        ]
      },
      {
        title: 'Testing Frameworks',
        blocks: [{ type: 'chips', items: ['JUnit', 'TestNG', 'Selenium', 'Cypress'] }]
      },
      {
        title: 'Build & Project Tools',
        blocks: [
          {
            type: 'chips',
            items: ['Maven', 'Gradle', 'git', 'GitHub', 'Google Cloud Run', 'Netlify', 'BlueHost']
          }
        ]
      },
      {
        title: 'eCommerce Essentials',
        blocks: [
          {
            type: 'chips',
            items: ['Online Store Integrations', 'Payment Gateways', 'Conversion Optimization', 'Analytics']
          }
        ]
      },
      {
        title: 'Creative & Productivity Suites',
        blocks: [
          {
            type: 'chips',
            items: ['Adobe Creative Cloud', 'Apple Creator Studio', 'Microsoft 365 Professional', 'Google Workspace']
          }
        ]
      },
      {
        title: 'AI-Assisted Workflows',
        blocks: [
          {
            type: 'chips',
            items: ['AI-Powered Productivity', 'AI-Driven Design', 'AI-Enhanced Development Pipelines']
          }
        ]
      }
    ]
  },

  {
    index: 3,
    archetype: 'The Architect',
    tagline: 'The Strategist',
    role: 'Swiss Army Knife Technical Architecture',
    accentColor: '#6e8a9e',
    sections: [
      {
        title: '',
        blocks: [
          {
            type: 'text',
            content:
              'Auralicode LLC utilizes a "Swiss Army Knife" technical architecture that balances modern, high-performance frameworks with the stability required for enterprise environments.'
          }
        ]
      },
      {
        title: 'Core Frontend Frameworks',
        blocks: [
          {
            type: 'text',
            content:
              'The primary stack is built on modern, component-based architectures that prioritize scalability and maintainable codebases:'
          },
          {
            type: 'list',
            items: [
              'Angular (v17+): Used as a primary framework for robust, enterprise-grade applications.',
              'Next.js (React) & Nuxt (Vue.js): Employed for high-performance, SEO-friendly, and interactive web experiences.',
              'TypeScript: The foundational language across all modern projects, ensuring type safety and reducing runtime errors.'
            ]
          }
        ]
      },
      {
        title: 'Styling & UI Design',
        blocks: [
          {
            type: 'list',
            items: [
              'SCSS/SASS: Utilized for advanced, modular CSS architecture.',
              'Human-Centered Design: A focus on WCAG accessibility standards and bespoke UI component libraries rather than generic templates.'
            ]
          }
        ]
      },
      {
        title: 'Backend & Data Management',
        blocks: [
          {
            type: 'list',
            items: [
              'Node.js: For server-side logic and building scalable backend services.',
              'Python: Specifically leveraged for data handling and specialized processing tasks.',
              'Database Systems: Extensive experience managing SQL Server for structured data needs.'
            ]
          }
        ]
      },
      {
        title: 'Deployment & Infrastructure',
        blocks: [
          {
            type: 'list',
            items: [
              'Netlify: Used for agile hosting and CI/CD of static and client-side rendered (CSR) projects.',
              'Google Cloud Platform (GCP): Specifically Cloud Run, utilized when server-side rendering (SSR) or more complex cloud infrastructure is required.'
            ]
          }
        ]
      },
      {
        title: 'Enterprise & Legacy Integration',
        blocks: [
          {
            type: 'text',
            content:
              'Unlike studios that only focus on the "new," Auralicode maintains the capability to support and bridge legacy enterprise systems:'
          },
          {
            type: 'list',
            items: [
              'CMS Platforms: Drupal and WordPress.',
              'Enterprise Tools: SharePoint integration and PHP-based environments.'
            ]
          }
        ]
      }
    ]
  },

  {
    index: 4,
    archetype: 'The System Architect',
    tagline: 'The Operator',
    role: 'Development Environment as Code',
    accentColor: '#38b4c8',
    sections: [
      {
        title: '',
        blocks: [
          {
            type: 'text',
            content:
              "Auralicode's tech stack is built on a foundation of type-safe, high-performance web technologies designed for architectural stability and longevity. The studio avoids \"no-code\" or \"low-code\" shortcuts, instead utilizing a professional developer toolchain that combines modern JavaScript frameworks with robust infrastructure."
          }
        ]
      },
      {
        title: 'Frontend Development',
        blocks: [
          {
            type: 'definition-list',
            techItems: [
              {
                name: 'Frameworks',
                description:
                  'Angular CLI is the primary framework, with Next.js (React) and Nuxt (Vue.js) also used for single-page applications and static sites.'
              },
              {
                name: 'Languages',
                description:
                  'TypeScript is used across the board to ensure code quality and prevent runtime errors.'
              },
              {
                name: 'UI Libraries',
                description:
                  'Specialized styling and component libraries like Angular Material, Tailwind, and Material-UI (MUI) allow for bespoke designs without sacrificing accessibility.'
              },
              {
                name: 'State & Routing',
                description:
                  'Advanced routing and state management are handled natively within the Angular, Next.js (React), and Nuxt (Vue.js) ecosystems.'
              }
            ]
          }
        ]
      },
      {
        title: 'Backend & Logic',
        blocks: [
          {
            type: 'definition-list',
            techItems: [
              {
                name: 'Runtimes',
                description: 'Node.js is the primary engine for server-side logic and API development.'
              },
              {
                name: 'Data Processing',
                description:
                  'Python is utilized for more complex data-heavy tasks or specialized backend services.'
              },
              {
                name: 'Database Systems',
                description:
                  "Support for both SQL (relational) and NoSQL (flexible) databases depending on the project's data structure requirements."
              },
              {
                name: 'Integration',
                description:
                  'Capabilities for integrating with enterprise systems like WordPress, SharePoint, and Drupal for hybrid architectures.'
              }
            ]
          }
        ]
      },
      {
        title: 'Infrastructure & Operations',
        blocks: [
          {
            type: 'definition-list',
            techItems: [
              {
                name: 'Hosting & Deployment',
                description:
                  'Netlify is preferred for static and frontend-heavy projects, while Cloud Run on Google Cloud Platform (GCP) is used for complex server-side applications.'
              },
              {
                name: 'Containers & Orchestration',
                description: 'Docker and Kubernetes are used to package and manage application environments.'
              },
              {
                name: 'CI/CD & Version Control',
                description:
                  'GitHub and Git handle versioning, with Netlify CI/CD from GitHub ensuring smooth updates (SSGA builds deploy manually).'
              },
              {
                name: 'Testing',
                description:
                  'Automated testing is conducted using tools like Cypress to maintain high reliability as systems scale.'
              }
            ]
          }
        ]
      },
      {
        title: '',
        blocks: [
          {
            type: 'text',
            content:
              'This stack is primarily managed through JetBrains IntelliJ IDEA Ultimate, often enhanced with AI-driven development tools to maintain a high iteration speed.'
          }
        ]
      }
    ]
  },

  {
    index: 5,
    archetype: 'The Technician',
    tagline: 'The Implementor',
    role: 'Essential Tech Stack',
    accentColor: '#5a9a6e',
    sections: [
      {
        title: 'Full Stack — Essential Tools',
        blocks: [
          {
            type: 'chips',
            items: [
              'IntelliJ IDEA Ultimate',
              'React',
              'Next.js',
              'Angular CLI',
              'Vue.js',
              'Nuxt',
              'React Native',
              'Node.js',
              'WordPress',
              'Material-UI (MUI)',
              'Angular Material',
              'Vuetify',
              'Tailwind UI',
              'React Paper',
              'Groovy/Grails',
              'Python',
              'PHP',
              'SQL/NoSQL',
              'Docker',
              'Kubernetes',
              'CI/CD',
              'Cypress',
              'Gradle',
              'git/GitHub',
              'Cloud Run',
              'Netlify',
              'Creative Cloud',
              'Creator Studio',
              'Microsoft 365',
              'Google Workspace'
            ]
          }
        ]
      }
    ]
  },

  {
    index: 6,
    archetype: 'The Specialist',
    tagline: 'The Polymath',
    role: 'Industry Skills — Aurality-Design.com',
    accentColor: '#9068c8',
    sections: [
      {
        title: 'Expert',
        blocks: [
          {
            type: 'chips',
            items: [
              'HTML5',
              'CSS3',
              'SCSS/Sass',
              'JavaScript',
              'jQuery',
              'Bootstrap',
              'Material Design',
              'Angular CLI',
              'WordPress',
              'Source Control',
              'Developer Tools',
              'Cross-Browser Testing',
              'macOS',
              'iOS',
              'iPadOS',
              'Windows',
              'IntelliJ IDEA',
              'Creative Cloud'
            ]
          }
        ]
      },
      {
        title: 'Working',
        blocks: [
          {
            type: 'chips',
            items: [
              'React',
              'Vue.js',
              'Next.js',
              'Node.js',
              'npm',
              'Vite',
              'XML',
              'AJAX',
              'JSON',
              'SharePoint',
              'Drupal',
              'PHP',
              'MySQL',
              'Java',
              'Groovy',
              'Grails',
              'SQL Server Management Studio',
              'Drush',
              'Composer',
              'Python',
              'Agile Methodology',
              'Digital Strategy',
              'Microsoft 365',
              'Google Workspace',
              'Foundation',
              'Linux',
              'Android',
              'WebStorm',
              'Visual Studio Code',
              'Final Cut Pro',
              'Logic Pro',
              'watchOS',
              'tvOS'
            ]
          }
        ]
      },
      {
        title: 'Familiar',
        blocks: [
          {
            type: 'chips',
            items: [
              'React Native',
              'Less',
              'Express',
              'Tomcat',
              'Velocity',
              'Gulp',
              'Email Marketing',
              'visionOS',
              'ChromeOS'
            ]
          }
        ]
      }
    ]
  },

  {
    index: 7,
    archetype: 'The Founder',
    tagline: 'The Architecture of Autonomy',
    role: 'From the Enterprise Trap to the Auralicode Standard',
    accentColor: '#c87a4b',
    sections: [
      {
        title: 'A Nine-Month Odyssey',
        blocks: [
          {
            type: 'text',
            content:
              'The "Auralicode Standard" is defined by a technical architecture that balances high-performance frameworks with enterprise stability. This journey sculpted a tech stack that functions like a Swiss Army Knife.'
          }
        ]
      },
      {
        title: 'The Swiss Army Knife Architecture',
        blocks: [
          {
            type: 'definition-list',
            techItems: [
              {
                name: 'The Blade — Angular / Next.js / TypeScript',
                description: 'Sharp, precise, and capable of heavy-duty engineering.'
              },
              {
                name: 'The Precision Tools — Material / Tailwind Plus / Node.js',
                description: 'Ensuring human-centered design and full-stack capabilities.'
              },
              {
                name: 'The Foundation — SSGA / (SQL/NoSQL) / Netlify',
                description: 'Providing the stability required for B2B solutions.'
              }
            ]
          }
        ]
      },
      {
        title: 'The Bespoke Architecture',
        blocks: [
          {
            type: 'text',
            content:
              "By integrating these fundamental tools with complex, modern systems, we've created a \"Bespoke Architecture\" that avoids the technical debt inherent in template-driven agencies. Auralicode doesn't just \"edit\" websites; it architects them."
          }
        ]
      }
    ]
  },

  {
    index: 8,
    archetype: 'The Steward',
    tagline: 'The Guardian',
    role: 'Senior Web Architect | Full-Stack Engineer | Prior DHS Public Trust (NACI)',
    accentColor: '#4a5aa8',
    sections: [
      {
        title: 'Summary of Qualifications',
        blocks: [
          {
            type: 'text',
            content:
              'With over 18 years of experience, bridging the gap between complex digital strategy and high-performance execution. Specializes in modernizing legacy systems and architecting secure, scalable front-end ecosystems for high-stakes environments. Focus: intent-driven engineering — ensuring every line of code serves the broader business architecture.'
          }
        ]
      },
      {
        title: 'Core Expertise',
        blocks: [
          {
            type: 'definition-list',
            techItems: [
              {
                name: 'Architecture & Leadership',
                description:
                  'Strategy-led system design, stakeholder management, and cross-platform infrastructure.'
              },
              {
                name: 'Front-End Mastery',
                description:
                  'Specialist in Angular CLI and CSS/SCSS architecture, with working depth in React (Next.js) and Vue.js (Nuxt).'
              },
              {
                name: 'Federal / Secure Environments',
                description:
                  'Extensive experience navigating DoD/DHS security standards and ADA Section 508 compliance.'
              }
            ]
          }
        ]
      },
      {
        title: 'Expert',
        blocks: [
          {
            type: 'chips',
            items: [
              'HTML5',
              'CSS3/SCSS',
              'JavaScript',
              'TypeScript',
              'Angular CLI',
              'Angular Material',
              'Bootstrap',
              'jQuery',
              'WordPress',
              'Responsive Web Design',
              'WCAG/Section 508 Accessibility',
              'Metadata & SEO',
              'Git/GitHub',
              'Netlify',
              'Adobe Creative Cloud',
              'Graphic & UI Design'
            ]
          }
        ]
      },
      {
        title: 'Working',
        blocks: [
          {
            type: 'chips',
            items: [
              'Next.js (React)',
              'Nuxt (Vue.js)',
              'Nuxt UI',
              'Tailwind',
              'Node.js/npm',
              'Vite',
              'Drupal (Composer/Drush)',
              'PHP',
              'MySQL/MariaDB',
              'Microsoft SQL Server (SSMS)',
              'Java/Spring (Hibernate/Envers)',
              'Groovy/Grails',
              'Python',
              'REST/JSON APIs',
              'SharePoint',
              'Microsoft 365 Administration',
              'Google Ads/Analytics/Search Console/Tag Manager',
              'Meta for Business',
              'Google Cloud Run',
              'Cypress',
              'Agile Methodology',
              'Google Workspace',
              'Apple Creator Studio'
            ]
          }
        ]
      },
      {
        title: 'Familiar',
        blocks: [
          {
            type: 'chips',
            items: [
              'AWS',
              'Azure',
              'Docker',
              'Kubernetes',
              'NoSQL databases',
              'GraphQL',
              'React Native',
              'MUI',
              'Vuetify',
              'PrimeUI',
              'Ant Design',
              'Chakra UI',
              'Mantine',
              'Radix UI',
              'Kendo UI'
            ]
          }
        ]
      },
      {
        title: 'Government, Security & Strategy',
        blocks: [
          {
            type: 'chips',
            items: [
              'Held a DHS Public Trust (NACI) 2019–2025 with a DoD-issued Common Access Card (CAC)',
              'Section 508 Compliance (ADA)',
              'Information Security',
              'Digital Strategy & Stakeholder Management'
            ]
          }
        ]
      }
    ]
  },

  {
    index: 9,
    archetype: 'The Designer / The Developer',
    tagline: 'The Generalist',
    role: 'Skills — 1 & 2 Page Resume Format',
    accentColor: '#a84a6e',
    sections: [
      {
        title: 'Core Skills',
        blocks: [
          {
            type: 'chips',
            items: [
              'HTML5',
              'CSS3',
              'SCSS',
              'JavaScript',
              'jQuery',
              'React',
              'Next.js',
              'Angular',
              'Vue.js',
              'Nuxt',
              'TypeScript',
              'Node',
              'npm',
              'MVC',
              'OOP',
              'XML',
              'AJAX',
              'JSON',
              'Material Design',
              'Bootstrap',
              'WordPress',
              'Drupal',
              'PHP',
              'MySQL',
              'git',
              'GitHub',
              'Agile Methodology',
              'Digital Strategy',
              'Creative/Office Apps',
              'Human-Led AI Integration'
            ]
          }
        ]
      }
    ]
  }
];
