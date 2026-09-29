import { TechnicalSkillCategory } from '../types/portfolio';

/**
 * ============================================================================
 * ACADEMIC & RESEARCH PORTFOLIO CONFIGURATION TEMPLATE
 * ============================================================================
 * Edit this file to customize your name, profile photo, research focus,
 * bio, contact links, and technical skills.
 */
export const PROFILE = {
  // Your Name & Title
  name: 'Kritika Taank',
  title: 'AI/ML Engineer · Software Developer · Aspiring ML Researcher',
  
  // Profile Photo: Place your photo in the /public/assets/ folder and specify its filename here.
  // Example: '/assets/avatar.jpg' or a remote image URL.
  avatarUrl: '/assets/kritika_photo.jpg',
  
  // Short roles and highlights
  role: 'Associate Software Engineer',
  organization: 'Nokia Solutions and Networks',
  researchFocusTagline: 'Explainable AI, Deep RL, Causal ML',

  // Biographical summary
  shortBio:
    'Associate Software Engineer at Nokia with a degree in Computer Science and Engineering from Sri Venkateshwara College of Engineering (CGPA: 9.27/10). Working at the intersection of production telecommunications software, transport AI/ML systems, and machine learning research.',

  fullBio: [
    'I am an Associate Software Engineer at Nokia Solutions and Networks in Bengaluru, where I engineer transport-layer protocols for scalable mobile network infrastructure and develop agentic AI systems and machine learning frameworks for automated fault resolution.',
    'I graduated with a Bachelor of Engineering in Computer Science and Engineering from Sri Venkateshwara College of Engineering (VTU) with a CGPA of 9.27/10. During my undergraduate studies, I focused on applied machine learning, deep reinforcement learning, explainable AI, and computer vision.',
    'My research interests center on developing trustworthy, interpretable, and mathematically grounded machine learning systems — specifically within Explainable AI (XAI), Reinforcement Learning for decision-making, and Causal Machine Learning.',
  ],

  currently: {
    role: 'Associate Software Engineer',
    company: 'Nokia Solutions and Networks',
    division: 'Mobile Networks & Telecommunications',
    location: 'Bengaluru, India (Hybrid)',
    focus: 'Transport-layer protocols, fault-resolution AI agents, and Transport AI/ML pipeline frameworks.',
    researchFocus: 'Explainable AI (LIME/Attribution), Deep RL (DQN/DDQN), and Causal Machine Learning.',
  },

  // Contact & Social Links (Set to empty string '' to omit any)
  contact: {
    email: 'taank.kritika@gmail.com',
    github: 'https://github.com/kritikataank',
    linkedin: 'https://linkedin.com/in/kritikataank',
    scholar: 'https://scholar.google.com',
    twitter: '',
    website: 'https://kritikataank.github.io',
  },

  education: {
    degree: 'B.E. Computer Science and Engineering',
    institution: 'Sri Venkateshwara College of Engineering',
    location: 'Bengaluru, Karnataka, India',
    period: '2021 – 2025',
    cgpa: '9.27 / 10.0',
    highlights: [
      'Graduated with high academic distinction (CGPA: 9.27/10)',
      'Winner of Smart India Hackathon 2024 (MSDE, Govt. of India) ranked in top 2.4% of 298+ ideas',
      'Completed intensive Amazon ML Summer School 2023 (Deep Learning, Graphical Models, Causal Inference, RL)',
      'Google Developer Student Club (GDSC) Lead (2023–2024), hosting 15+ technical workshops',
    ],
  },
};

export const TECHNICAL_SKILLS: TechnicalSkillCategory[] = [
  {
    category: 'Languages',
    skills: ['Python (NumPy, Pandas)', 'C++', 'C', 'SQL', 'JavaScript', 'Bash'],
  },
  {
    category: 'AI / ML Foundations',
    skills: [
      'PyTorch',
      'Scikit-learn',
      'Deep Learning',
      'Supervised / Unsupervised Learning',
      'Deep RL (DQN / DDQN)',
      'Computer Vision (CNNs, InceptionV3)',
      'NLP',
      'Explainable AI (LIME)',
      'Quantum ML (PennyLane)',
      'Generative AI',
    ],
  },
  {
    category: 'Agentic Systems & LLMs',
    skills: [
      'Agentic AI',
      'Model Context Protocol (MCP)',
      'LLM Fine-Tuning & Evaluation',
      'Human-in-the-Loop (HITL) Architectures',
      'OpenAI / Claude APIs',
      'Mistral LLM',
    ],
  },
  {
    category: 'Frameworks & Infrastructure',
    skills: [
      'Git / GitHub',
      'Jenkins',
      'Docker',
      'Kubernetes',
      'OpenShift',
      'AWS (EC2, S3, PartyRock)',
      'GCP (Vertex AI)',
      'Azure',
      'RESTful APIs',
      'Django',
      'Flask',
      'Postman',
      'Cursor',
      'Claude',
    ],
  },
];
