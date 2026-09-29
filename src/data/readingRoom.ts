export interface BookSpine {
  id: string;
  title: string;
  author: string;
  year: number;
  genre: 'nonfiction' | 'fiction' | 'sci-fi' | 'mystery & thriller' | 'fantasy' | 'romance';
  height: number; // in px or scale (e.g. 260 to 350)
  width: number; // spine width in px (e.g. 36 to 62)
  spineColor: string; // hex color of book spine
  textColor?: string; // hex color for spine text
  accentColor?: string; // top/bottom banner or band
  status?: 'reading' | 'completed' | 'to-read';
  rating?: string;
  notes?: string;
  quotes?: string[];
  coverUrl?: string;
  description?: string;
}

export interface FieldNote {
  id: string;
  title: string;
  date: string;
  bookRef: string;
  tags: string[];
  excerpt: string;
  content: string;
}

export const BOOK_COLLECTION: BookSpine[] = [
  {
    id: 'book-of-why',
    title: 'The Book of Why',
    author: 'Judea Pearl',
    year: 2018,
    genre: 'nonfiction',
    height: 310,
    width: 48,
    spineColor: '#934032',
    textColor: '#f9f6f0',
    accentColor: '#6d2e24',
    status: 'completed',
    rating: '5/5',
    description: 'The New Science of Cause and Effect. A foundational text reshaping how we formalize causal inference, do-calculus, and counterfactuals beyond empirical correlation.',
    notes: 'Pearl makes a revolutionary case that current machine learning is merely associative (fitting curves) and cannot achieve true intelligence without a causal world model and interventions.',
    quotes: ['You cannot answer a question that you cannot ask, and you cannot ask what you cannot see.']
  },
  {
    id: 'ddia',
    title: 'Designing Data-Intensive Applications',
    author: 'Martin Kleppmann',
    year: 2017,
    genre: 'nonfiction',
    height: 335,
    width: 60,
    spineColor: '#223843',
    textColor: '#fbf5f3',
    accentColor: '#c85a32',
    status: 'completed',
    rating: '5/5',
    description: 'The definitive guide to storage engines, distributed consensus, transactions, replication, and data processing architectures.',
    notes: 'Invaluable for carrier-grade network protocol development and real-time distributed inference pipelines.',
    quotes: ['Reliability is continuing to work correctly, even when things go wrong.']
  },
  {
    id: 'exhalation',
    title: 'Exhalation: Stories',
    author: 'Ted Chiang',
    year: 2019,
    genre: 'sci-fi',
    height: 290,
    width: 38,
    spineColor: '#3d3a37',
    textColor: '#ece7de',
    accentColor: '#998675',
    status: 'completed',
    rating: '5/5',
    description: 'Nine breathtaking stories exploring thermodynamics, free will, entropy, artificial cognition, and the nature of conscious memory.',
    notes: 'The Lifecycle of Software Objects is the best examination of the patience and affection required to cultivate genuine artificial general intelligence ever written.'
  },
  {
    id: 'thinking-fast-slow',
    title: 'Thinking, Fast and Slow',
    author: 'Daniel Kahneman',
    year: 2011,
    genre: 'nonfiction',
    height: 320,
    width: 52,
    spineColor: '#d4a34b',
    textColor: '#2c2211',
    accentColor: '#b08434',
    status: 'completed',
    rating: '4.5/5',
    description: 'System 1 (heuristic, automatic intuition) versus System 2 (deliberate, slow reasoning) in cognitive psychology.',
    notes: 'Directly applicable to LLM architecture: autoregressive generation mimics System 1; tree-of-thought, search, and reinforcement learning policy search emulate System 2.'
  },
  {
    id: 'piranesi',
    title: 'Piranesi',
    author: 'Susanna Clarke',
    year: 2020,
    genre: 'fantasy',
    height: 275,
    width: 34,
    spineColor: '#1c3144',
    textColor: '#d9e2ec',
    accentColor: '#486581',
    status: 'completed',
    rating: '5/5',
    description: 'A labyrinth of infinite halls containing thousands of statues and a captive ocean with rising tides.',
    notes: 'A quiet masterpiece about innocence, classification, and finding immense wonder within solitary exploration.'
  },
  {
    id: 'design-everyday-things',
    title: 'The Design of Everyday Things',
    author: 'Don Norman',
    year: 2013,
    genre: 'nonfiction',
    height: 315,
    width: 44,
    spineColor: '#a84234',
    textColor: '#fff5f5',
    accentColor: '#782d23',
    status: 'completed',
    rating: '4.5/5',
    description: 'Affordances, signifiers, constraints, and mental conceptual models in human-machine interface design.',
    notes: 'Crucial for Explainable AI (XAI) toolkits: transparency is a human cognitive affordance, not merely an algorithmic output.'
  },
  {
    id: 'klara-and-sun',
    title: 'Klara and the Sun',
    author: 'Kazuo Ishiguro',
    year: 2021,
    genre: 'sci-fi',
    height: 280,
    width: 34,
    spineColor: '#bfa76f',
    textColor: '#2a2415',
    accentColor: '#967f4c',
    status: 'completed',
    rating: '4.5/5',
    description: 'An Artificial Friend with keen observational faculties observes the complex vulnerabilities and love of human hearts.',
    notes: 'Ishiguro writes with such poignant gentleness about robotic perception and inductive reasoning.'
  },
  {
    id: 'deep-learning-goodfellow',
    title: 'Deep Learning',
    author: 'Ian Goodfellow et al.',
    year: 2016,
    genre: 'nonfiction',
    height: 350,
    width: 64,
    spineColor: '#1a2930',
    textColor: '#e0e6ed',
    accentColor: '#f7c844',
    status: 'reading',
    rating: 'Essential',
    description: 'The seminal textbook on deep learning theory, linear algebra, probability, regularizations, and optimization for neural nets.',
    notes: 'Currently revisiting Chapter 15 & 18 on representation learning, deep generative models, and partition functions.'
  },
  {
    id: 'convenience-store-woman',
    title: 'Convenience Store Woman',
    author: 'Sayaka Murata',
    year: 2016,
    genre: 'fiction',
    height: 255,
    width: 30,
    spineColor: '#e07a5f',
    textColor: '#ffffff',
    accentColor: '#c75d42',
    status: 'completed',
    rating: '4.5/5',
    description: 'A touching portrait of an eccentric 36-year-old Tokyo convenience store worker who finds solace in rigid social manuals.'
  },
  {
    id: 'geb',
    title: 'Gödel, Escher, Bach',
    author: 'Douglas Hofstadter',
    year: 1979,
    genre: 'nonfiction',
    height: 345,
    width: 68,
    spineColor: '#302636',
    textColor: '#f1e8f5',
    accentColor: '#d4af37',
    status: 'reading',
    rating: 'Masterpiece',
    description: 'An Eternal Golden Braid exploring recursive self-reference, formal systems, brains, and Gödel’s Incompleteness Theorem.',
    notes: 'Strangely prophetic regarding emergence and self-referential loops in synthetic intelligence.'
  },
  {
    id: 'stories-of-your-life',
    title: 'Stories of Your Life and Others',
    author: 'Ted Chiang',
    year: 2002,
    genre: 'sci-fi',
    height: 295,
    width: 36,
    spineColor: '#3b534b',
    textColor: '#e8f0ec',
    accentColor: '#283832',
    status: 'completed',
    rating: '5/5',
    description: 'Contains Story of Your Life (inspiration for Arrival) and Understand.',
    notes: 'Chiang’s linguistic determinism and variational principles (Fermat’s principle of least time) are unmatched.'
  },
  {
    id: 'before-coffee-gets-cold',
    title: 'Before the Coffee Gets Cold',
    author: 'Toshikazu Kawaguchi',
    year: 2015,
    genre: 'fantasy',
    height: 270,
    width: 32,
    spineColor: '#8a5a44',
    textColor: '#fffaf5',
    accentColor: '#633d2c',
    status: 'completed',
    rating: '4/5',
    description: 'In a small Tokyo back alley café, customers can travel back in time, provided they return before their cup grows cold.'
  },
  {
    id: 'sapiens',
    title: 'Sapiens: A Brief History of Humankind',
    author: 'Yuval Noah Harari',
    year: 2014,
    genre: 'nonfiction',
    height: 310,
    width: 46,
    spineColor: '#d6cfc7',
    textColor: '#2d2b28',
    accentColor: '#9e9589',
    status: 'completed',
    rating: '4/5',
    description: 'How shared fictions and collective imagination enabled biological primates to conquer the earth and establish complex societies.'
  },
  {
    id: 'bad-blood',
    title: 'Bad Blood: Secrets and Lies in a Silicon Valley Startup',
    author: 'John Carreyrou',
    year: 2018,
    genre: 'mystery & thriller',
    height: 300,
    width: 40,
    spineColor: '#8a1c14',
    textColor: '#ffffff',
    accentColor: '#5c100a',
    status: 'completed',
    rating: '5/5',
    description: 'The gripping investigative account of the rise and shocking collapse of Theranos.',
    notes: 'A sober reminder of why rigorous empirical validation and scientific reproducibility must always prevail over hype.'
  },
  {
    id: 'all-systems-red',
    title: 'All Systems Red (Murderbot)',
    author: 'Martha Wells',
    year: 2017,
    genre: 'sci-fi',
    height: 250,
    width: 28,
    spineColor: '#2b3a4a',
    textColor: '#e8edf3',
    accentColor: '#e07a5f',
    status: 'completed',
    rating: '4.5/5',
    description: 'A security construct that hacks its own governor module just wants to be left alone to watch serialized entertainment dramas.'
  },
  {
    id: 'psalm-for-wild-built',
    title: 'A Psalm for the Wild-Built',
    author: 'Becky Chambers',
    year: 2021,
    genre: 'sci-fi',
    height: 255,
    width: 26,
    spineColor: '#587b58',
    textColor: '#f5faf5',
    accentColor: '#3a523a',
    status: 'completed',
    rating: '5/5',
    description: 'A tea monk meets a robot wandering the wilderness, asking the question: "what do people need?"'
  },
  {
    id: '1q84',
    title: '1Q84',
    author: 'Haruki Murakami',
    year: 2009,
    genre: 'fiction',
    height: 360,
    width: 68,
    spineColor: '#433e3f',
    textColor: '#f4f4f4',
    accentColor: '#a84234',
    status: 'completed',
    rating: '4/5',
    description: 'A parallel Tokyo in 1984 with two moons hanging silently in the night sky, Little People, and intertwined fates.'
  },
  {
    id: 'tomorrow-and-tomorrow',
    title: 'Tomorrow, and Tomorrow, and Tomorrow',
    author: 'Gabrielle Zevin',
    year: 2022,
    genre: 'fiction',
    height: 305,
    width: 44,
    spineColor: '#26547c',
    textColor: '#fcfcfc',
    accentColor: '#ef476f',
    status: 'completed',
    rating: '4.5/5',
    description: 'A luminous story of friendship, video game creation, algorithmic play, identity, and the creative collaboration of a lifetime.'
  },
  {
    id: 'kafka-on-the-shore',
    title: 'Kafka on the Shore',
    author: 'Haruki Murakami',
    year: 2002,
    genre: 'fiction',
    height: 315,
    width: 48,
    spineColor: '#382f45',
    textColor: '#f0ecf4',
    accentColor: '#8a79a5',
    status: 'completed',
    rating: '4.5/5',
    description: 'Cats that converse with humans, fish falling from rainclouds, and a boy named Kafka running away to a private memorial library.'
  }
];

export const FIELD_NOTES: FieldNote[] = [
  {
    id: 'note-1',
    title: 'Associative Learning vs. Causal Interventions',
    date: '2025-01-14',
    bookRef: 'The Book of Why (Judea Pearl)',
    tags: ['Causal ML', 'XAI', 'Theory'],
    excerpt: 'Current Deep Learning models optimize P(Y|X). But true explanation requires understanding P(Y | do(X)).',
    content: 'When we deploy an explanation algorithm like LIME or SHAP on a neural network, we are interrogating the model’s internal decision surface, not the underlying data generation process. Pearl’s Causal Hierarchy (Association -> Intervention -> Counterfactuals) demonstrates that statistical correlation alone cannot survive domain shifts.'
  },
  {
    id: 'note-2',
    title: 'Distributed State Machines in Telecom Protocol Layers',
    date: '2024-11-08',
    bookRef: 'Designing Data-Intensive Applications (Martin Kleppmann)',
    tags: ['Systems', 'Nokia', 'Distributed Computing'],
    excerpt: 'Why consensus under physical hardware link loss requires explicit state transition invariants.',
    content: 'Studying partition tolerance and two-phase commits informs how we write zero-packet-drop transport software across three hardware variants. When a physical optical transceiver drops momentarily, backpressure handling must prevent buffer exhaustion.'
  },
  {
    id: 'note-3',
    title: 'Recursive Self-Reference & Formal Systems',
    date: '2024-08-20',
    bookRef: 'Gödel, Escher, Bach (Douglas Hofstadter)',
    tags: ['Formal Logic', 'Mathematics', 'Philosophy'],
    excerpt: 'Strange loops and the mathematical boundaries of consistency in deductive engines.',
    content: 'Any sufficiently expressive axiomatic system contains truths that cannot be derived mechanically from within itself. This limitation is not a defect—it is the very engine of self-referential emergence.'
  }
];

export const TO_READ_LIST = [
  { title: 'Reinforcement Learning: An Introduction', author: 'Richard S. Sutton & Andrew G. Barto', year: 2018, genre: 'nonfiction', note: 'Re-reading TD(lambda) and policy gradient convergence bounds.' },
  { title: 'The Master Algorithm', author: 'Pedro Domingos', year: 2015, genre: 'nonfiction', note: 'Survey of symbolists, connectionists, evolutionaries, Bayesians, and analogizers.' },
  { title: 'Chip War', author: 'Chris Miller', year: 2022, genre: 'nonfiction', note: 'The fight for the world’s most critical technology and semiconductor fabrication.' },
  { title: 'Causal Inference in Statistics: A Primer', author: 'Judea Pearl et al.', year: 2016, genre: 'nonfiction', note: 'Structural causal models and backdoor criterion derivation.' },
  { title: 'Neuromancer', author: 'William Gibson', year: 1984, genre: 'sci-fi', note: 'The seminal cyberpunk vision of the matrix and constructed consensus hallucinations.' },
  { title: 'Project Hail Mary', author: 'Andy Weir', year: 2021, genre: 'sci-fi', note: 'First-principles physics problem-solving under extreme interstellar constraints.' },
  { title: 'The Three-Body Problem', author: 'Cixin Liu', year: 2008, genre: 'sci-fi', note: 'Cosmic sociology, celestial mechanics, and game-theoretic deterrence.' },
  { title: 'Superintelligence', author: 'Nick Bostrom', year: 2014, genre: 'nonfiction', note: 'Paths, dangers, and instrumental convergence in autonomous optimization.' },
  { title: 'Structure and Interpretation of Computer Programs', author: 'Abelson & Sussman', year: 1996, genre: 'nonfiction', note: 'Metalinguistic abstraction and evaluator mechanics.' },
];
