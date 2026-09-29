import { ProjectItem } from '../types/portfolio';

export const PROJECTS: ProjectItem[] = [
  {
    id: 'savvy-ai',
    title: 'SavvyAI – AI Career Guidance System',
    category: 'ai-ml',
    categoryLabel: 'Project',
    subtitle: 'LLM-Powered Personalized Career Pathway Recommendation',
    description:
      'Designed and deployed an AI-powered platform that recommends personalized career paths using Mistral LLM, achieving accurate classification of user responses. Demonstrated AI innovation in career counseling and won the Smart India Hackathon 2024.',
    problem:
      'Students and early-career professionals often struggle with navigating complex career roadmaps due to rigid or generic counseling heuristics that cannot dynamically adapt to individuals’ nuanced skill profiles.',
    approach:
      'Integrated Mistral LLM with structured user evaluation pipelines and MongoDB, applying prompt-engineered semantic classification to map user aspirations into tailored trajectory recommendations.',
    technologies: ['Python', 'MongoDB', 'Mistral LLM', 'ML Model', 'FastAPI'],
    keyResult:
      'Winner – Smart India Hackathon 2024 (MSDE, Govt. of India); selected in top 2.4% out of 298+ national ideas.',
    githubUrl: 'https://github.com/kritikataank',
    featured: true,
  },
  {
    id: 'explainable-rain-prediction',
    title: 'Explainable AI for High-Impact Rain Prediction',
    category: 'ai-ml',
    categoryLabel: 'Project',
    subtitle: 'Interpretable Satellite Imagery Classification for Disaster Preparedness',
    description:
      'Implemented and fine-tuned an InceptionV3 CNN for satellite imagery classification to predict heavy rainfall, integrating LIME for explainability. Deployed via Streamlit, delivering real-time insights that demonstrated the practical applications of AI in disaster preparedness during the Smart India Hackathon 2023.',
    problem:
      'Traditional deep learning weather models act as opaque black boxes, making it hazardous for emergency disaster response teams to trust rainfall predictions without verifiable spatial feature attribution.',
    approach:
      'Trained an InceptionV3 Convolutional Neural Network backbone on multi-spectral satellite imagery and integrated Local Interpretable Model-agnostic Explanations (LIME) to generate localized attribution heatmaps highlighting storm signatures.',
    technologies: ['Python', 'InceptionV3', 'LIME', 'Streamlit', 'Computer Vision'],
    keyResult:
      'Delivered real-time explainable insights for disaster preparedness during Smart India Hackathon 2023.',
    githubUrl: 'https://github.com/kritikataank',
    featured: true,
  },
  {
    id: 'quantum-drug-interaction',
    title: 'Drug Interaction Optimization using Quantum Simulation',
    category: 'ai-ml',
    categoryLabel: 'Project',
    subtitle: 'Hybrid AI–Quantum Risk Analysis on TWOSIDES Healthcare Dataset',
    description:
      'Developed a hybrid AI–quantum drug interaction risk analysis system using Random Forest, PennyLane quantum circuits, and the TWOSIDES healthcare dataset, and built a Streamlit dashboard to compare classical and quantum-enhanced predictions; Top 10 finalist, QuantumX Hackathon.',
    problem:
      'Combinatorial drug-drug interaction pairs create an exponentially large risk-prediction space that classical models struggle to represent effectively with limited sparse clinical data.',
    approach:
      'Engineered parameterized quantum circuits using PennyLane and integrated quantum embeddings with Random Forest classifiers on the TWOSIDES healthcare dataset, deploying an interactive comparison dashboard via Streamlit.',
    technologies: ['Python', 'PennyLane', 'QML', 'OpenEnv', 'Random Forest', 'Streamlit'],
    keyResult:
      'Top 10 Finalist at the QuantumX Hackathon for hybrid quantum-classical interaction risk modeling.',
    githubUrl: 'https://github.com/kritikataank',
    featured: true,
  },
  {
    id: 'quora-bert-sincerity',
    title: 'Quora Question Sincerity Classification using BERT',
    category: 'ai-ml',
    categoryLabel: 'Project',
    subtitle: 'Fine-Tuning Pretrained Transformer Models for Toxic Content Detection',
    description:
      'Fine-tuned a pretrained BERT-base model for binary classification of Quora questions, implementing custom PyTorch data pipelines, BERT tokenization, attention masking, and a classification head; evaluated model performance using validation accuracy and F1 score.',
    problem:
      'Detecting nuanced toxic, insincere, or provocative queries in massive online forums requires deep semantic contextualization that standard n-gram classifiers fail to capture.',
    approach:
      'Constructed custom PyTorch data loaders with HuggingFace BERT tokenization, attention masking, and a dense classification head with dropout regularization, trained using AdamW optimization.',
    technologies: ['Python', 'PyTorch', 'BERT', 'NLP', 'Transformers', 'HuggingFace'],
    keyResult:
      'Achieved robust validation accuracy and balanced precision-recall F1 score on highly skewed distribution.',
    githubUrl: 'https://github.com/kritikataank',
    featured: false,
  },
  {
    id: 'cipherchat-security',
    title: 'CipherChat – Secure Mobile Cloud Communication',
    category: 'research',
    categoryLabel: 'Research Project',
    subtitle: 'Hybrid Asymmetric and Lightweight Symmetric Cryptographic Messaging',
    description:
      'Developed a secure real-time messaging system combining RSA-based asymmetric key exchange with lightweight PRESENT and SIMON symmetric ciphers for encrypted communication, implemented using Node.js and Socket.IO.',
    problem:
      'Resource-constrained mobile edge devices encounter severe battery and processing bottlenecks when executing traditional heavyweight cryptographic primitives for continuous messaging.',
    approach:
      'Architected end-to-end encrypted bidirectional WebSocket communication using Node.js and Socket.IO, employing RSA-2048 for ephemeral session handshakes followed by lightweight PRESENT and SIMON ciphers for payload encryption.',
    technologies: ['JavaScript', 'Node.js', 'Socket.IO', 'Cryptography', 'PRESENT Cipher', 'SIMON Cipher'],
    keyResult:
      'Published in the International Journal for Research in Applied Science and Engineering Technology (IJRASET), 12(12):2108-14 (2024).',
    githubUrl: 'https://github.com/kritikataank',
    featured: true,
    publicationRef: 'Innovative Security Framework for Enhancing Data Protection in Mobile Cloud Environments',
  },
  {
    id: 'drone-pathfinding-rl',
    title: 'Adaptive Drone Pathfinding Using Deep Reinforcement Learning',
    category: 'research',
    categoryLabel: 'Research Project',
    subtitle: 'DQN and Double DQN Algorithms for 3D Autonomous UAV Navigation',
    description:
      'Developed a deep reinforcement learning approach for adaptive UAV pathfinding using DQN and Double DQN, with reward-based obstacle avoidance and simulated 3D environments; evaluated against A*, Dijkstra, Q-learning and SARSA using path length, convergence time and success rate.',
    problem:
      'Standard pathfinding algorithms struggle in dynamic continuous environments, while tabular Q-learning fails due to state-space explosion and action-value overestimation.',
    approach:
      'Formulated continuous 3D navigation as an MDP with dense distance and obstacle penalty reward functions. Implemented DQN and Double DQN architectures, benchmarking against A*, Dijkstra, Q-learning, and SARSA.',
    technologies: ['Python', 'PyTorch', 'Deep RL', 'DQN / Double DQN', '3D Simulation', 'Algorithms'],
    keyResult:
      'Published in the International Journal of Creative Research Thoughts (IJCRT), 12(7), h896–h901 (2024).',
    githubUrl: 'https://github.com/kritikataank',
    featured: true,
    publicationRef: 'Adaptive Algorithms for Drone Pathfinding Using Reinforcement Learning',
  },
];
