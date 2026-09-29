import { AchievementItem, CertificationItem } from '../types/portfolio';

export const ACHIEVEMENTS: AchievementItem[] = [
  {
    id: 'sih-winner-2024',
    title: 'Winner – Smart India Hackathon 2024',
    category: 'Competition & Hackathon',
    organization: 'Ministry of Skill Development & Entrepreneurship (MSDE), Govt. of India',
    date: 'Dec 2024',
    description:
      'Built SavvyAI, an AI career guidance system; ranked in top 2.4% of 298+ national teams.',
    highlight: true,
    metric: 'Top 2.4% of 298+ national teams',
  },
  {
    id: 'amazon-ml-summer-school-2023',
    title: 'Amazon ML Summer School 2023 Fellow',
    category: 'Program & Fellowship',
    organization: 'Amazon India Machine Learning Team',
    date: 'Jul – Aug 2023',
    description:
      'Selected for intensive program covering Deep Learning, Graphical Models, Causal Inference, and RL.',
    highlight: true,
  },
  {
    id: 'aws-ai-ml-scholarship-2025',
    title: 'AWS AI & ML Scholarship Recipient (2025)',
    category: 'Program & Fellowship',
    organization: 'Amazon Web Services & Udacity',
    date: '2025',
    description:
      'Developed MoodTunes, a generative AI music recommender using AWS PartyRock.',
    highlight: true,
  },
  {
    id: 'gdsc-lead-2023-2024',
    title: 'Google Developer Student Club (GDSC) Lead (2023–2024)',
    category: 'Leadership',
    organization: 'Google Developers / SVCE Chapter',
    date: 'Jul 2023 – Jun 2024',
    description:
      'Hosted 15+ workshops; campus achieved Tier 1 in Google Cloud Campaign.',
    highlight: true,
    metric: '15+ workshops · Tier 1 Google Cloud campus rank',
  },
  {
    id: 'mlsa-beta-ambassador',
    title: 'Microsoft Learn Student Ambassador – Beta Milestone',
    category: 'Leadership',
    organization: 'Microsoft',
    date: '2023 – 2024',
    description:
      'Advanced to Beta milestone in the global ambassador network, conducting technical tutorials and earning Microsoft Certified: Azure AI Fundamentals.',
    highlight: false,
  },
  {
    id: 'gdsc-india-podcast-feature',
    title: 'Featured Speaker on GDSC India Podcast & Live Stream',
    category: 'Leadership',
    organization: 'Google Developer Student Clubs India',
    date: '2024',
    description:
      'Invited as a featured speaker on the national GDSC India Podcast to discuss machine learning foundations and developer community leadership.',
    highlight: false,
  },
  {
    id: 'svce-sgpa-adoption',
    title: 'Deployment of Campus SGPA Academic Calculator',
    category: 'Academic Impact',
    organization: 'Sri Venkateshwara College of Engineering (VTU)',
    date: '2023',
    description:
      'Engineered and deployed an open-access calculator for VTU 2021 grading scheme, independently adopted by 122+ engineering students.',
    highlight: false,
    metric: '122 student users',
  },
];

export const CERTIFICATIONS: CertificationItem[] = [
  {
    id: 'cert-aws-ml',
    title: 'AWS Educate Machine Learning Foundations',
    issuer: 'Amazon Web Services (AWS)',
    date: 'Jul 2025',
    credentialUrl: 'https://aws.amazon.com/education/awseducate/',
  },
  {
    id: 'cert-azure-ai900',
    title: 'Microsoft Certified: Azure AI Fundamentals (AI-900)',
    issuer: 'Microsoft',
    date: 'Jun 2023',
    credentialUrl: 'https://learn.microsoft.com/en-us/credentials/certifications/azure-ai-fundamentals/',
  },
  {
    id: 'cert-google-ai-essentials',
    title: 'Google AI Essentials',
    issuer: 'Google',
    date: 'Aug 2025',
    credentialUrl: 'https://grow.google/ai-essentials/',
  },
  {
    id: 'cert-gemini-api',
    title: 'Gemini API by Google',
    issuer: 'Google',
    date: 'Sep 2024',
    credentialUrl: 'https://ai.google.dev/',
  },
  {
    id: 'cert-intro-genai-aws',
    title: 'Introducing Generative AI with AWS',
    issuer: 'Amazon Web Services (AWS)',
    date: 'Jun 2025',
    credentialUrl: 'https://aws.amazon.com/training/classroom/introduction-to-generative-ai/',
  },
  {
    id: 'cert-postman-expert',
    title: 'Postman API Fundamentals Student Expert',
    issuer: 'Postman',
    date: 'May 2023',
    credentialUrl: 'https://badgr.com/public/badges/postman-student-expert',
  },
  {
    id: 'cert-solutions-arch',
    title: 'Solutions Architecture Virtual Experience Program',
    issuer: 'Forage / Industry Program',
    date: 'May 2023',
    credentialUrl: 'https://www.theforage.com/',
  },
];
