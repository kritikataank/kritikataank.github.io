import { ExperienceRole } from '../types/portfolio';

export const EXPERIENCES: ExperienceRole[] = [
  {
    id: 'nokia-associate-se',
    organization: 'Nokia Solutions and Networks',
    role: 'Associate Software Engineer',
    period: 'Aug 2025 – Present',
    type: 'Hybrid',
    location: 'Bengaluru, Karnataka, India',
    domain: 'Mobile Networks & Telecommunications',
    overview:
      'Contributing to the resilience and scalability of mobile telecommunications infrastructure. My work bridges core production transport protocol software engineering with the development of applied AI/ML systems for automated fault diagnostics and inference serving.',
    softwareEngineeringWork: {
      summary: 'Production Telecommunication Infrastructure & Transport Layer Protocols',
      points: [
        'Develop and maintain transport-layer protocols and critical functionality in production carrier-grade network systems, ensuring high-throughput, low-latency, and reliable communication infrastructure across cellular networks.',
        'Delivered a key feature enhancement supporting 3 distinct hardware variants, owning the lifecycle end-to-end from architectural design and implementation through rigorous code reviews and global production release.',
      ],
      technologies: ['C++', 'Linux', 'Transport Layer Protocols', 'Networking Systems', 'Git / Gerrit', 'CI/CD'],
    },
    aiMlWork: {
      summary: 'Internal AI Agentic Systems & ML Pipeline Frameworks',
      points: [
        'Built an intelligent fault-resolution AI agent leveraging component databases to construct a structured knowledge base for rapidly diagnosing potential root causes of network system issues.',
        'Engineered an end-to-end Transport AI/ML framework facilitating automated telemetry data collection, model training pipelines, and low-latency inference serving.',
      ],
      technologies: ['Python', 'Agentic AI', 'Knowledge Bases', 'ML Frameworks', 'Inference Serving', 'Data Pipelines'],
    },
    technologies: ['C++', 'Python', 'Transport Protocols', 'Agentic AI', 'Linux Systems', 'Inference Serving', 'Docker'],
  },
  {
    id: 'nokia-intern',
    organization: 'Nokia Solutions and Networks',
    role: 'Software Engineering Intern',
    period: 'Aug 2024 – May 2025',
    type: 'Hybrid',
    location: 'Bengaluru, Karnataka, India',
    domain: 'C++ & Cloud Technologies',
    overview:
      'Pre-graduation technical internship focused on high-performance systems programming, containerization, microservice orchestration, and automated CI/CD deployment pipelines.',
    generalPoints: [
      'Engineered high-performance C++ backend modules for telecommunications software, adhering to stringent latency, memory safety, and concurrency standards.',
      'Streamlined automated continuous integration and continuous delivery (CI/CD) pipelines utilizing Jenkins, significantly reducing regression feedback loops across development sprints.',
      'Deployed and orchestrated microservices across Kubernetes, AWS cloud services (EC2, S3), and Red Hat OpenShift, enhancing system efficiency, operational automation, and fault tolerance.',
    ],
    technologies: ['C++', 'Jenkins', 'Kubernetes', 'AWS (EC2, S3)', 'Red Hat OpenShift', 'Docker', 'Linux', 'Microservices'],
  },
  {
    id: 'omdena-junior-mle',
    organization: 'Omdena',
    role: 'Junior Machine Learning Engineer',
    period: 'Apr 2023 – Jun 2023',
    type: 'Remote',
    location: 'Berlin Chapter (Remote Collaboration)',
    domain: 'Python & NLP (Regex, NLTK and TF-IDF vectorization)',
    overview:
      'Participated in a global AI challenge with the Omdena Berlin team, engineering machine learning models and NLP pipelines for consumer recommendation systems.',
    generalPoints: [
      'Built and deployed a personalized grocery shopping recommendation system using Python, Pandas, and Scikit-learn.',
      'Applied classical NLP techniques including regular expressions, NLTK tokenization, and TF-IDF vectorization for text preprocessing and semantic feature extraction from item descriptions.',
      'Collaborated within a distributed global engineering team through GitHub, ensuring clean version control, modular code architecture, and experiment reproducibility.',
    ],
    technologies: ['Python', 'Pandas', 'Scikit-learn', 'NLP', 'NLTK', 'TF-IDF Vectorization', 'Regex', 'GitHub'],
  },
];
