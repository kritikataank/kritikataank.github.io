import { ResearchTheme } from '../types/portfolio';

export const RESEARCH_THEMES: ResearchTheme[] = [
  {
    id: 'explainable-ai',
    title: 'Explainable & Trustworthy AI (XAI)',
    shortDescription:
      'Interpretable neural representations, feature attribution, and fidelity analysis in high-stakes domain predictions.',
    explanation:
      'Deep neural models deployed in mission-critical applications often function as black boxes. My work explores how local interpretable model-agnostic explanations (LIME) and attribution techniques can substantiate predictive decisions in critical domains like meteorology and disaster forecasting, validating that models rely on genuine physical phenomena rather than spurious boundary artifacts.',
    connectedProjects: [
      'Explainable AI for High-Impact Rain Prediction',
      'Drug Interaction Optimization using Quantum Simulation',
    ],
    tags: ['LIME', 'InceptionV3', 'Attribution', 'Model Interpretability', 'High-Stakes AI'],
    coreQuestions: [
      'How faithfully do local attribution methods reflect deep feature representations under distribution shift?',
      'Can explainability metrics serve as proactive debugging signals before model deployment in safety-critical settings?',
    ],
  },
  {
    id: 'reinforcement-learning',
    title: 'Deep Reinforcement Learning & Autonomous Decision-Making',
    shortDescription:
      'Adaptive path planning, sample efficiency, and stability in continuous and constrained 3D environments.',
    explanation:
      'Navigating dynamic, obstacle-dense 3D spaces requires balancing exploration with optimal policy convergence. In published research, I evaluated deep Q-networks (DQN) and Double DQN against classical search algorithms (A*, Dijkstra) and tabular methods (SARSA, Q-learning) to analyze convergence rate, reward structuring, and path optimality for UAV navigation.',
    connectedProjects: ['Drone Pathfinding using Reinforcement Learning'],
    connectedPublications: ['Adaptive Algorithms for Drone Pathfinding Using Reinforcement Learning (IJCRT 2024)'],
    tags: ['PyTorch', 'Deep Q-Networks (DQN)', 'Double DQN', 'UAV Pathfinding', 'Markov Decision Processes'],
    coreQuestions: [
      'How does Double DQN overcome value overestimation in high-dimensional continuous state representations?',
      'What reward function formulations optimize trade-offs between path length, convergence speed, and collision avoidance?',
    ],
  },
  {
    id: 'nlp-agentic-systems',
    title: 'NLP, Large Language Models & Agentic Systems',
    shortDescription:
      'Task-oriented LLM orchestration, semantic classification, and human-in-the-loop agentic architectures.',
    explanation:
      'Language models provide powerful reasoning capabilities when scaffolded by structured knowledge graphs and agentic workflows. My experience spans fine-tuning transformer architectures like BERT for sincerity classification, deploying Mistral LLMs for personalized domain guidance in SavvyAI (winning the Smart India Hackathon 2024), and constructing fault-resolution AI agents over component databases at Nokia.',
    connectedProjects: [
      'SavvyAI – AI Career Guidance System',
      'Quora Question Sincerity Classification using BERT',
      'Nokia Transport Fault-Resolution AI Agent',
      'Omdena Grocery Recommendation Engine',
    ],
    tags: ['Mistral LLM', 'BERT', 'PyTorch Transformers', 'Model Context Protocol (MCP)', 'Agentic AI', 'HITL'],
    coreQuestions: [
      'How can agentic knowledge retrieval reduce hallucinations when resolving intricate system faults?',
      'What are effective fine-tuning and token-masking strategies for binary classification on noisy user queries?',
    ],
  },
  {
    id: 'quantum-ml',
    title: 'Quantum & Hybrid Machine Learning',
    shortDescription:
      'Parameterized quantum circuits and classical-quantum hybrid models for complex biochemical datasets.',
    explanation:
      'Investigating computational advantages of variational quantum algorithms on combinatorial, high-dimensional biological data. In the QuantumX Hackathon (Top 10 Finalist), I engineered a hybrid quantum-classical pipeline leveraging PennyLane quantum circuits alongside Random Forest classifiers on the TWOSIDES healthcare dataset to evaluate drug-drug interaction risk.',
    connectedProjects: ['Drug Interaction Optimization using Quantum Simulation'],
    tags: ['PennyLane', 'Quantum Machine Learning (QML)', 'Random Forest', 'Healthcare AI', 'OpenEnv'],
    coreQuestions: [
      'Where do parameterized quantum circuits provide measurable expressivity improvements over classical feature spaces?',
      'How does quantum circuit depth affect optimization stability on real-world multi-drug interaction datasets?',
    ],
  },
  {
    id: 'causal-ml',
    title: 'Causal Machine Learning & Probabilistic Modeling',
    shortDescription:
      'Distinguishing invariant causal mechanisms from observational correlations for robust generalization.',
    explanation:
      'Grounded in coursework and technical seminars completed at the Amazon ML Summer School 2023 (covering Deep Learning, Probabilistic Graphical Models, Causal Inference, and Reinforcement Learning). Exploring how structural causal models, DAGs, and counterfactual reasoning prevent catastrophic collapse when deep models encounter out-of-distribution shifts.',
    connectedProjects: [
      'Amazon ML Summer School 2023 Cohort Studies',
      'Explainable AI Attribution Studies',
    ],
    tags: ['Causal Inference', 'Probabilistic Graphical Models', 'Structural Causal Models', 'Domain Generalization'],
    coreQuestions: [
      'How can causal graphs guide representation learning to ensure robustness under environmental interventions?',
      'Can probabilistic models calibrate uncertainty estimates in deep neural prediction pipelines?',
    ],
  },
];
