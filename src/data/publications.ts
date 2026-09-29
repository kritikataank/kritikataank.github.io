import { PublicationItem } from '../types/portfolio';

export const PUBLICATIONS: PublicationItem[] = [
  {
    id: 'pub-ijcrt-drone-rl',
    title: 'Adaptive Algorithms for Drone Pathfinding Using Reinforcement Learning',
    authors: [
      'Abhilash, A.',
      'Keerthi, R.',
      'Taank, K.',
      'Keerthan, M.',
      'Palegar, K.'
    ],
    venue: 'International Journal of Creative Research Thoughts (IJCRT)',
    year: '2024',
    citation: 'IJCRT, Vol. 12, Issue 7, pp. h896–h901, July 2024',
    pages: 'h896–h901',
    abstract:
      'Presents a deep reinforcement learning framework for autonomous unmanned aerial vehicle (UAV) pathfinding in dynamic 3D environments. Evaluates Deep Q-Networks (DQN) and Double DQN with customized reward-based obstacle avoidance against classical search algorithms (A*, Dijkstra) and tabular reinforcement learning methods (Q-learning, SARSA) across path length, convergence duration, and mission success rate.',
    technologies: ['Python', 'PyTorch', 'Deep RL', 'DQN / Double DQN', 'UAV Simulation', 'Markov Decision Processes'],
    projectTitle: 'Drone Pathfinding using Reinforcement Learning',
    paperUrl: 'https://www.ijcrt.org/papers/IJCRT2407881.pdf',
    codeUrl: 'https://github.com/kritikataank',
    bibtex: `@article{taank2024drone,
  title     = {Adaptive Algorithms for Drone Pathfinding Using Reinforcement Learning},
  author    = {Abhilash, A. and Keerthi, R. and Taank, K. and Keerthan, M. and Palegar, K.},
  journal   = {International Journal of Creative Research Thoughts (IJCRT)},
  volume    = {12},
  number    = {7},
  pages     = {h896--h901},
  year      = {2024},
  issn      = {2320-2882}
}`,
  },
  {
    id: 'pub-ijraset-mobile-cloud-security',
    title: 'Innovative Security Framework for Enhancing Data Protection in Mobile Cloud Environments [J]',
    authors: [
      'Suresh P',
      'Kritika Taank',
      'Akshay Kumar',
      'Muskan Patel'
    ],
    venue: 'International Journal for Research in Applied Science and Engineering Technology (IJRASET)',
    year: '2024',
    citation: 'IJRASET, 2024;12(12):2108-14',
    pages: '2108–2114',
    abstract:
      'Proposes a hybrid cryptographic framework tailored for resource-constrained mobile cloud applications. Integrates RSA-based asymmetric key exchange for secure session establishment with lightweight symmetric block ciphers (PRESENT and SIMON) for high-efficiency data payload encryption, demonstrated through a real-time messaging implementation using Node.js and Socket.IO.',
    technologies: ['JavaScript', 'Node.js', 'Socket.IO', 'Lightweight Cryptography', 'PRESENT / SIMON', 'RSA'],
    projectTitle: 'CipherChat – Secure Mobile Cloud Communication',
    paperUrl: 'https://www.ijraset.com/best-journal/innovative-security-framework-for-enhancing-data-protection-in-mobile-cloud-environments',
    codeUrl: 'https://github.com/kritikataank',
    bibtex: `@article{suresh2024security,
  title     = {Innovative Security Framework for Enhancing Data Protection in Mobile Cloud Environments [J]},
  author    = {Suresh, P. and Taank, Kritika and Kumar, Akshay and Patel, Muskan},
  journal   = {International Journal for Research in Applied Science and Engineering Technology (IJRASET)},
  volume    = {12},
  number    = {12},
  pages     = {2108--2114},
  year      = {2024},
  issn      = {2321-9653}
}`,
  },
];
