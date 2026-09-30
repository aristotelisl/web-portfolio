// All site content lives here. Each bullet is tagged with the skills it
// demonstrates; the skill filter, highlights and tag rows are derived from these.

export type Skill =
  | 'Python'
  | 'JavaScript'
  | 'Java'
  | 'C# / ASP.NET'
  | 'C++'
  | 'Next.js'
  | 'RAG / LLMs'
  | 'Agentic AI'
  | 'ML'
  | 'Backend'
  | 'Web'
  | 'Cloud'
  | 'Data viz'
  | 'Robotics'
  | 'Product';

export const skillFilters: Skill[] = [
  'Python',
  'JavaScript',
  'Java',
  'C# / ASP.NET',
  'C++',
  'Next.js',
  'RAG / LLMs',
  'Agentic AI',
  'ML',
  'Backend',
  'Web',
  'Cloud',
  'Data viz',
  'Robotics',
  'Product',
];

export type Section = 'Experience' | 'Education' | 'Awards';

export interface Bullet {
  text: string;
  link?: { label: string; href: string };
  skills: Skill[];
}

export interface Entry {
  id: string;
  section: Section;
  dates: string;
  title: string;
  org: string;
  place: string;
  summary: string;
  bullets: Bullet[];
  figure?: boolean;
}

export const entries: Entry[] = [
  {
    id: 'aseto',
    section: 'Experience',
    dates: '10/2024 — 09/2025',
    title: 'Software Developer',
    org: 'Aseto',
    place: 'Larnaca, Cyprus',
    summary:
      'Built the AI voice agent: agentic RAG pipelines, fine-tuned ML models, Python microservices, ASP.NET APIs and a Next.js platform.',
    figure: true,
    bullets: [
      {
        text: "Designed and implemented agentic AI workflows and RAG pipelines for Aseto's AI Voice Agent, with multistep reasoning and retrieval using LlamaIndex",
        skills: ['Agentic AI', 'RAG / LLMs', 'Python'],
      },
      {
        text: 'Trained and fine-tuned ML models for the conversational AI pipeline, improving response accuracy and task-specific performance',
        skills: ['ML', 'Python', 'RAG / LLMs'],
      },
      {
        text: 'Engineered backend logic automating inbound and outbound communication, integrating the agent with telephony systems and real-time data sources',
        skills: ['Backend', 'Python'],
      },
      {
        text: 'Designed and maintained modular Python microservices',
        skills: ['Python', 'Backend'],
      },
      {
        text: "Built and launched the company's {link} using Next.js — scalable, responsive and fast across devices",
        link: { label: 'marketing and operations platform', href: 'https://www.aseto.ai' },
        skills: ['Next.js', 'JavaScript', 'Web'],
      },
      {
        text: 'Developed and integrated robust APIs in ASP.NET, enabling communication across services and supporting key features of the AI assistant',
        skills: ['C# / ASP.NET', 'Backend'],
      },
    ],
  },
  {
    id: 'azul',
    section: 'Experience',
    dates: '07/2023 — 09/2023',
    title: 'Junior Software Engineer, Intern',
    org: 'Azul Systems',
    place: 'Limassol, Cyprus',
    summary: 'Built an internal Java grammar visualiser web app with search, syntax highlighting and dependency graphs.',
    bullets: [
      {
        text: 'Developed a Java grammar visualiser web application, helping engineers navigate relationships across hundreds of grammar files',
        skills: ['Java', 'Web'],
      },
      {
        text: 'Implemented syntax highlighting, search and directed acyclic graph visualisations of hierarchical grammar dependencies',
        skills: ['Web', 'Data viz'],
      },
    ],
  },
  {
    id: 'bath',
    section: 'Education',
    dates: '10/2025 — 09/2026',
    title: 'MSc Computer Science',
    org: 'University of Bath',
    place: 'Bath, England',
    summary: 'Dissertation on AI-generated, interactive causal loop diagrams — an industry project with DAS.',
    bullets: [
      {
        text: 'Dissertation: AI-Assisted Generation and Interactive Exploration of Causal Loop Diagrams from Future Scenario Narratives (industry project with DAS)',
        skills: ['RAG / LLMs', 'Data viz', 'Web'],
      },
      {
        text: 'Relevant modules: Software Engineering, Software Development, AI and Machine Learning',
        skills: ['ML'],
      },
    ],
  },
  {
    id: 'soton',
    section: 'Education',
    dates: '10/2021 — 06/2024',
    title: 'BSc (Hons) Computer Science',
    org: 'University of Southampton',
    place: 'Southampton, England',
    summary: 'Dissertation on AI techniques for the inheritance of lost arts.',
    bullets: [
      {
        text: 'Dissertation: Artificial Intelligence Techniques for Inheritance of Lost Arts',
        skills: ['ML'],
      },
      {
        text: 'Relevant modules: Machine Learning Technologies, Intelligent Systems, Cloud Application Development',
        skills: ['ML', 'Cloud'],
      },
    ],
  },
  {
    id: 'esbf',
    section: 'Awards',
    dates: '05/2026',
    title: '1st Place — ESBF Innovation Competition',
    org: 'University of Bath',
    place: '£3,000 prize',
    summary: "Won with 99NOW, a pitch to modernise the UK's 999 system with live video and AI-assisted risk assessment.",
    bullets: [
      {
        text: 'Awarded 1st place and £3,000 in the Engineers and Scientists in Business Fellowship (ESBF) Innovation Competition, part of the Entrepreneurship module',
        skills: ['Product'],
      },
      {
        text: 'Co-created and pitched 99NOW, a next-generation emergency communication platform proposing live video, digital reporting and AI-assisted risk assessment for 999',
        skills: ['Product', 'RAG / LLMs'],
      },
    ],
  },
  {
    id: 'robotex-intl',
    section: 'Awards',
    dates: '11/2019',
    title: '3rd Place — Robotex International',
    org: 'Enhanced Line Following',
    place: 'Tallinn, Estonia',
    summary: 'Custom Arduino robot in C++ with a five-sensor PID controller.',
    bullets: [
      {
        text: 'Developed and programmed a custom-built robot using C++ on the Arduino platform',
        skills: ['C++', 'Robotics'],
      },
      {
        text: 'Implemented a PID controller with five sensors for precise line-following',
        skills: ['C++', 'Robotics'],
      },
    ],
  },
  {
    id: 'robotex-cy',
    section: 'Awards',
    dates: '06/2018',
    title: '1st & 2nd Place — Robotex Cyprus',
    org: 'Engino Line Following & Lego Sumo',
    place: 'Nicosia, Cyprus',
    summary: '1st in Engino Line Following, 2nd in Lego Sumo.',
    bullets: [
      {
        text: 'Awarded 1st place in Engino Line Following and 2nd place in Lego Sumo',
        skills: ['Robotics'],
      },
      {
        text: 'Designed and programmed robots using the Engino and Lego platforms',
        skills: ['Robotics'],
      },
    ],
  },
];

// Timeline bars, in months since Oct 2021 (end-exclusive). `b: null` means ongoing.
export interface Segment {
  id: string;
  label: string;
  short: string;
  a: number;
  b: number | null;
  lane: 0 | 1 | 2;
}

export const TIMELINE_START = { year: 2021, month: 10 };

export const segments: Segment[] = [
  { id: 'soton', label: 'BSc · Southampton', short: 'BSc', a: 0, b: 33, lane: 0 },
  { id: 'bath', label: 'MSc · Bath', short: 'MSc', a: 48, b: 60, lane: 0 },
  { id: 'azul', label: 'Azul', short: 'Azul', a: 21, b: 24, lane: 1 },
  { id: 'aseto', label: 'Aseto · Software Developer', short: 'Aseto', a: 36, b: 48, lane: 1 },
  { id: 'esbf', label: 'ESBF 1st', short: 'ESBF', a: 55, b: 56, lane: 2 },
];

export const glance = [
  { value: '2', label: 'CS degrees (BSc, MSc)' },
  { value: '2', label: 'engineering roles' },
  { value: '1st', label: 'ESBF Innovation prize' },
  { value: '4', label: 'competition podiums' },
];

export const skillGroups = [
  { title: 'Languages', items: ['Python', 'JavaScript', 'C#', 'Java', 'C++'] },
  { title: 'AI & LLM engineering', items: ['Agentic workflows', 'RAG', 'Prompt engineering', 'LLM integration'] },
  { title: 'Frameworks', items: ['ASP.NET', 'Next.js', 'Vite', 'Express.js', 'FastAPI', 'Flask', 'LlamaIndex'] },
  { title: 'Tools', items: ['Docker', 'Git', 'PostgreSQL', 'Linux', 'Microsoft Azure'] },
];

export const contact = {
  email: 'aristotelisl002@gmail.com',
  github: 'aristotelisl',
  linkedin: 'aloucaides',
  cv: '/CV_Aristotelis_Loucaides.pdf',
};
