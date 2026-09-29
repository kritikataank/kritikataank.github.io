import { ProjectItem } from '../types/portfolio';

export const PROJECTS: ProjectItem[] = [
  {
    id: 'savvy-ai',
    title: 'SavvyAI – AI Career Guidance Platform',
    category: 'ai-ml',
    categoryLabel: 'AI / ML System',
    subtitle: 'LLM-Powered Personalized Career Pathway Recommendation',
    description:
      'Designed and deployed an AI-powered platform that analyzes user skills, academic backgrounds, and career goals to recommend personalized professional trajectories using Mistral LLM and targeted classification models.',
    problem:
      'Career counseling tools often rely on static heuristics or rigid taxonomies that fail to reflect fast-evolving technical specializations in computing and engineering.',
    approach:
      'Integrated Mistral LLM with structured user evaluation pipelines and a MongoDB backend, enabling prompt-engineered semantic classification of user responses into contextual career roadmaps.',
    technologies: ['Python', 'Mistral LLM', 'MongoDB', 'Machine Learning', 'NLP', 'FastAPI'],
    keyResult:
      'Winner – Smart India Hackathon 2024 (MSDE, Govt. of India); selected in the top 2.4% out of 298+ competing national teams.',
    githubUrl: 'https://github.com/kritikataank',
    featured: true,
  },
  {
    id: 'explainable-rain-prediction',
    title: 'Explainable AI for High-Impact Rain Prediction',
    category: 'research',
    categoryLabel: 'Research & XAI',
    subtitle: 'Interpretable Satellite Imagery Classification for Disaster Preparedness',
    description:
      'Implemented and fine-tuned an InceptionV3 Convolutional Neural Network on satellite imagery to predict high-impact rainfall events, pairing deep feature extraction with LIME for local interpretability.',
    problem:
      'Deep learning meteorology models typically act as black boxes, making it difficult for disaster response agencies to verify whether predictions stem from actual convective storm signatures or spurious ground artifacts.',
    approach:
      'Trained an InceptionV3 CNN backbone on multi-spectral satellite imagery and integrated Local Interpretable Model-agnostic Explanations (LIME) to generate attribution heatmaps highlighting localized atmospheric indicators.',
    technologies: ['Python', 'InceptionV3', 'LIME', 'PyTorch / TensorFlow', 'Computer Vision', 'Streamlit'],
    keyResult:
      'Demonstrated real-time explainable insights for disaster preparedness during Smart India Hackathon 2023.',
    githubUrl: 'https://github.com/kritikataank',
    featured: true,
  },
  {
    id: 'drone-pathfinding-rl',
    title: 'Adaptive Drone Pathfinding Using Deep Reinforcement Learning',
    category: 'research',
    categoryLabel: 'Research Publication',
    subtitle: 'DQN and Double DQN Algorithms for 3D Autonomous UAV Navigation',
    description:
      'Developed a deep reinforcement learning framework for adaptive unmanned aerial vehicle (UAV) path planning in complex simulated 3D environments with dynamic obstacle avoidance.',
    problem:
      'Classical heuristic algorithms (A*, Dijkstra) struggle to adapt to continuous dynamic disturbances, while standard Q-learning suffers from curse of dimensionality and overestimation in continuous spaces.',
    approach:
      'Formulated the 3D navigation problem as a Markov Decision Process (MDP). Implemented Deep Q-Networks (DQN) and Double DQN with customized reward functions, benchmarking performance against A*, Dijkstra, Q-learning, and SARSA.',
    technologies: ['Python', 'PyTorch', 'Deep RL', 'DQN / Double DQN', '3D Simulation', 'Algorithms'],
    keyResult:
      'Published in the International Journal of Creative Research Thoughts (IJCRT), 12(7), h896–h901 (2024). Demonstrated superior convergence stability and path efficiency.',
    githubUrl: 'https://github.com/kritikataank',
    featured: true,
    publicationRef: 'Adaptive Algorithms for Drone Pathfinding Using Reinforcement Learning',
  },
  {
    id: 'quantum-drug-interaction',
    title: 'Drug Interaction Optimization using Quantum Simulation',
    category: 'research',
    categoryLabel: 'Quantum ML',
    subtitle: 'Hybrid AI–Quantum Risk Analysis on TWOSIDES Healthcare Dataset',
    description:
      'Developed a hybrid AI–quantum computing pipeline to model and predict adverse drug-drug interaction risks across high-dimensional pharmaceutical feature representations.',
    problem:
      'Combinatorial drug interaction spaces grow exponentially, challenging classical supervised models with severe sparsity and multi-target complexity.',
    approach:
      'Engineered parameterized quantum circuits using PennyLane and paired them with Random Forest classifiers on the benchmark TWOSIDES dataset, comparing classical versus quantum-enhanced predictive metrics via an interactive Streamlit dashboard.',
    technologies: ['Python', 'PennyLane', 'Quantum ML (QML)', 'Random Forest', 'OpenEnv', 'Streamlit'],
    keyResult:
      'Top 10 Finalist at the QuantumX Hackathon for innovative integration of quantum circuits with classical risk modeling.',
    githubUrl: 'https://github.com/kritikataank',
    featured: true,
  },
  {
    id: 'quora-bert-sincerity',
    title: 'Quora Question Sincerity Classification using BERT',
    category: 'ai-ml',
    categoryLabel: 'NLP / Deep Learning',
    subtitle: 'Fine-Tuning Pretrained Transformer Models for Toxic Content Detection',
    description:
      'Fine-tuned a pretrained BERT-base model for binary text classification to detect insincere, deceptive, or toxic questions on community question-answering platforms.',
    problem:
      'Identifying subtle insincerity requires capturing deep syntactic nuances and contextual intent that bag-of-words or recurrent networks often miss.',
    approach:
      'Constructed custom PyTorch data loaders with dynamic BERT tokenization, attention masking, and a dense classification head with dropout regularization. Trained using AdamW with linear warmup, evaluating precision-recall curves and F1 score.',
    technologies: ['Python', 'PyTorch', 'BERT (HuggingFace)', 'Transformers', 'NLP', 'Scikit-learn'],
    keyResult:
      'Achieved strong classification accuracy and balanced F1 score on highly skewed binary text distribution.',
    githubUrl: 'https://github.com/kritikataank',
    featured: false,
  },
  {
    id: 'cipherchat-security',
    title: 'CipherChat – Secure Mobile Cloud Communication',
    category: 'systems',
    categoryLabel: 'Security & Systems',
    subtitle: 'Hybrid Asymmetric and Lightweight Symmetric Cryptographic Messaging',
    description:
      'Architected and implemented a secure real-time messaging system tailored for mobile cloud environments, combining RSA-based asymmetric key exchange with lightweight PRESENT and SIMON symmetric block ciphers.',
    problem:
      'Mobile devices face constrained computational and battery budgets, rendering conventional heavyweight ciphers inefficient for continuous encrypted communication.',
    approach:
      'Implemented real-time bidirectional WebSocket channels using Node.js and Socket.IO, establishing sessions via RSA-2048 handshake before transitioning to optimized PRESENT/SIMON lightweight ciphers.',
    technologies: ['JavaScript', 'Node.js', 'Socket.IO', 'PRESENT Cipher', 'SIMON Cipher', 'RSA Cryptography'],
    keyResult:
      'Published in the International Journal for Research in Applied Science and Engineering Technology (IJRASET), 12(12):2108-14 (2024).',
    githubUrl: 'https://github.com/kritikataank',
    featured: false,
    publicationRef: 'Innovative Security Framework for Enhancing Data Protection in Mobile Cloud Environments',
  },
  {
    id: 'moodtunes-genai',
    title: 'MoodTunes – Generative AI Music Recommender',
    category: 'ai-ml',
    categoryLabel: 'Generative AI',
    subtitle: 'Contextual Mood-to-Music Synthesis System via AWS PartyRock',
    description:
      'Created a generative AI application that interprets user mood descriptions, emotional tone, and ambient context to recommend customized listening journeys.',
    problem:
      'Traditional playlist algorithms rely heavily on static genre tags rather than qualitative emotional intent or conversational context.',
    approach:
      'Leveraged foundation models on AWS PartyRock with structured prompt pipelines to translate qualitative emotional inputs into music attribute queries.',
    technologies: ['AWS PartyRock', 'Generative AI', 'Prompt Engineering', 'Foundation Models'],
    keyResult:
      'Developed as part of selection for the AWS AI & ML Scholarship Program (2025).',
    githubUrl: 'https://github.com/kritikataank',
    featured: false,
  },
  {
    id: 'svce-sgpa-calculator',
    title: 'VTU SGPA / CGPA Academic Calculator',
    category: 'systems',
    categoryLabel: 'Utility Tool',
    subtitle: 'Streamlit Application for VTU 2021 Scheme Grading Computation',
    description:
      'Engineered and hosted a streamlined web calculator adhering strictly to the Visvesvaraya Technological University (VTU) 2021 grading scheme for undergraduate engineering students.',
    problem:
      'Frequent changes in university evaluation schemes and credit weightings led to widespread calculation errors among students during semester result declarations.',
    approach:
      'Designed an intuitive UI in Streamlit encoding all subject credit matrices, grade point formulas, and cumulative weighting rules.',
    technologies: ['Python', 'Streamlit', 'Data Processing'],
    keyResult:
      'Adopted by 122 students at Sri Venkateshwara College of Engineering for verified semester GPA computation.',
    githubUrl: 'https://github.com/kritikataank',
    featured: false,
  },
];
