export const personalInfo = {
  name: "Mayor",
  title: "Full-Stack Developer & AI Engineer",
  location: "Port Harcourt, Nigeria",
  email: "mayor@mayortech.com",
  linkedin: "https://linkedin.com/in/mayor",
  status: "Open to freelance and contract work",
  timezone: "WAT (UTC+1)",
};

export const skills = [
  "Full-Stack",
  "React",
  "TypeScript",
  "Python",
  "Supabase",
  "AI Automation",
  "Machine Learning",
  "Flask",
];

export const projects = [
  {
    slug: "game-hub-2",
    title: "Game Hub 2.0",
    year: 2026,
    status: "Built",
    role: "Full-Stack Developer",
    stack: ["React", "TypeScript", "Supabase", "Tailwind"],
    description: "Multi-game platform with real-time scoring, user profiles, and tournament management. Built as a progressive web app with offline support.",
    problem: "Existing game platforms lacked unified scoring across multiple game types and had no tournament infrastructure for local communities.",
    keyDecisions: [
      "Chose Supabase for real-time subscriptions over WebSocket custom implementation",
      "Implemented optimistic UI updates for score tracking to reduce perceived latency",
      "Used service workers for offline game state persistence",
    ],
    outcome: "Delivered a working multi-game platform with real-time leaderboards and tournament brackets.",
    phase: "P0: Core scoring engine and user auth. P1: Tournament brackets and real-time updates. P2: PWA offline support and admin dashboard.",
    diagram: "truss",
    dwg: "DWG-GH2-001",
  },
  {
    slug: "orchestrateiq",
    title: "OrchestrateIQ",
    year: 2026,
    status: "Built",
    role: "Full-Stack Developer",
    stack: ["React", "Python", "Flask", "Supabase"],
    description: "AI-powered task orchestration tool that breaks complex projects into manageable subtasks and suggests execution order based on dependencies.",
    problem: "Project managers needed a tool that could intelligently decompose large tasks and predict bottlenecks before they occur.",
    keyDecisions: [
      "Used Flask microservice architecture for AI inference pipeline",
      "Implemented DAG-based dependency resolution for task scheduling",
      "Chose Supabase Row Level Security for multi-tenant data isolation",
    ],
    outcome: "Built an orchestration engine that reduces project planning time by decomposing tasks automatically.",
    phase: "P0: Task decomposition engine. P1: Dependency visualization. P2: Predictive bottleneck analysis.",
    diagram: "gear",
    dwg: "DWG-OIQ-002",
  },
  {
    slug: "fake-news-detection",
    title: "Fake News Detection System",
    year: 2026,
    status: "Built",
    role: "ML Engineer",
    stack: ["Python", "Scikit-learn", "Flask", "React"],
    description: "Machine learning system that classifies news articles as real or fake using NLP techniques including TF-IDF vectorization and logistic regression.",
    problem: "Misinformation spreads faster than fact-checking can keep up. An automated first-pass classifier was needed to flag potentially false claims.",
    keyDecisions: [
      "Selected logistic regression over deep learning for interpretability and speed",
      "Used TF-IDF with n-grams for feature extraction from article text",
      "Built Flask API with batch prediction endpoint for throughput",
    ],
    outcome: "Delivered a classification system with measurable precision/recall on held-out test data.",
    phase: "P0: Data pipeline and feature engineering. P1: Model training and evaluation. P2: API and web interface.",
    diagram: "stressStrain",
    dwg: "DWG-FND-003",
  },
  {
    slug: "movie-catalogue",
    title: "Movie Catalogue",
    year: 2026,
    status: "Built",
    role: "Frontend Developer",
    stack: ["React", "TypeScript", "Tailwind"],
    description: "Movie discovery and catalogue application with search, filtering, and detailed movie information pages using a public movie API.",
    problem: "Users needed a clean, fast interface for browsing and discovering movies with detailed metadata.",
    keyDecisions: [
      "Implemented virtualized list rendering for large catalogue performance",
      "Used React Router for deep-linkable movie detail pages",
      "Cached API responses client-side to reduce redundant network calls",
    ],
    outcome: "Built a responsive movie catalogue with fast search and smooth browsing experience.",
    phase: "P0: API integration and list view. P1: Search and filtering. P2: Detail pages and favorites.",
    diagram: "rebar",
    dwg: "DWG-MC-004",
  },
  {
    slug: "ecommerce-platform",
    title: "E-Commerce Platform",
    year: 2026,
    status: "In Progress",
    role: "Full-Stack Developer",
    stack: ["React", "Supabase", "Tailwind", "Stripe"],
    description: "Full e-commerce storefront with product management, cart, checkout, and admin dashboard for inventory and order management.",
    problem: "Small businesses need affordable, customizable storefronts without the complexity of enterprise platforms.",
    keyDecisions: [
      "Chose Supabase for auth, database, and storage in a single platform",
      "Implemented server-side cart state to prevent checkout race conditions",
      "Used Stripe for PCI-compliant payment processing",
    ],
    outcome: "Building a complete storefront solution from product listing to order fulfillment.",
    phase: "P0: Product catalogue and cart. P1: Checkout and payments. P2: Admin dashboard and analytics.",
    diagram: "ibeam",
    dwg: "DWG-EC-005",
  },
  {
    slug: "pc-optimizer",
    title: "PC Optimization Tool",
    year: 2026,
    status: "In Progress",
    role: "Developer",
    stack: ["Python", "React", "Flask"],
    description: "Desktop application concept for system performance analysis and optimization recommendations based on hardware profiling.",
    problem: "Users lack visibility into what is slowing their systems down and what specific changes would improve performance.",
    keyDecisions: [
      "Designed hardware profiling module that runs non-invasive diagnostics",
      "Built recommendation engine that maps hardware constraints to actionable fixes",
      "Used React frontend for real-time system monitoring dashboard",
    ],
    outcome: "Concept and prototype demonstrating automated system analysis and optimization suggestions.",
    phase: "P0: Hardware profiling. P1: Recommendation engine. P2: Real-time monitoring UI.",
    diagram: "gauge",
    dwg: "DWG-PCO-006",
  },
];

export const aboutParagraphs = [
  "I'm a full-stack developer and AI engineer based in Port Harcourt, Nigeria. I build web products and automation systems that solve real problems — from multi-game platforms to ML-powered tools. My work sits at the intersection of software engineering and applied machine learning.",
  "I focus on shipping working software: clean architecture, tested logic, and interfaces that people can actually use. I care about the decisions that matter — what to build first, what to cut, and what breaks under load.",
  "I also run MayorTech, my own e-commerce venture, which keeps me close to real product decisions: who uses it, what it costs to run, and what breaks.",
];

export const education = {
  degree: "BSc Computer Science",
  institution: "Rivers State University of Science and Technology",
};

export const stackCategories = [
  {
    id: "frontend",
    label: "Frontend",
    code: "F",
    items: [
      { item: "React", grade: "Daily", usedIn: ["Game Hub 2.0", "OrchestrateIQ", "Movie Catalogue", "E-Commerce Platform"] },
      { item: "TypeScript", grade: "Daily", usedIn: ["Game Hub 2.0", "Movie Catalogue"] },
      { item: "Tailwind CSS", grade: "Daily", usedIn: ["Game Hub 2.0", "Movie Catalogue", "E-Commerce Platform"] },
      { item: "HTML/CSS", grade: "Daily", usedIn: ["Game Hub 2.0", "Movie Catalogue", "E-Commerce Platform"] },
    ],
  },
  {
    id: "backend",
    label: "Backend & Data",
    code: "B",
    items: [
      { item: "Supabase", grade: "Daily", usedIn: ["Game Hub 2.0", "OrchestrateIQ", "E-Commerce Platform"] },
      { item: "Flask", grade: "Regular", usedIn: ["OrchestrateIQ", "Fake News Detection", "PC Optimization Tool"] },
      { item: "Python", grade: "Daily", usedIn: ["OrchestrateIQ", "Fake News Detection", "PC Optimization Tool"] },
      { item: "PostgreSQL", grade: "Regular", usedIn: ["Game Hub 2.0", "OrchestrateIQ"] },
    ],
  },
  {
    id: "ml",
    label: "Machine Learning",
    code: "M",
    items: [
      { item: "Scikit-learn", grade: "Regular", usedIn: ["Fake News Detection"] },
      { item: "NLP / TF-IDF", grade: "Working", usedIn: ["Fake News Detection"] },
      { item: "Pandas / NumPy", grade: "Regular", usedIn: ["Fake News Detection", "PC Optimization Tool"] },
    ],
  },
  {
    id: "automation",
    label: "Automation",
    code: "A",
    items: [
      { item: "AI Workflows", grade: "Regular", usedIn: ["OrchestrateIQ"] },
      { item: "Task Scheduling", grade: "Working", usedIn: ["OrchestrateIQ"] },
      { item: "API Integration", grade: "Daily", usedIn: ["Game Hub 2.0", "Movie Catalogue", "E-Commerce Platform"] },
    ],
  },
  {
    id: "tooling",
    label: "Tooling",
    code: "T",
    items: [
      { item: "Git / GitHub", grade: "Daily", usedIn: ["Game Hub 2.0", "OrchestrateIQ", "Movie Catalogue"] },
      { item: "Vite", grade: "Daily", usedIn: ["Game Hub 2.0", "Movie Catalogue"] },
      { item: "VS Code", grade: "Daily", usedIn: ["Game Hub 2.0", "OrchestrateIQ", "Movie Catalogue"] },
    ],
  },
];

export const services = [
  {
    no: "1.0",
    description: "Web Application",
    deliverable: "Full-stack web app with auth, database, and deployment",
    scope: "React/TypeScript frontend, Supabase backend, responsive UI, API integration",
  },
  {
    no: "2.0",
    description: "E-Commerce Storefront with Admin",
    deliverable: "Product catalogue, cart, checkout, admin dashboard",
    scope: "Product management, payment integration, order tracking, inventory control",
  },
  {
    no: "3.0",
    description: "AI Automation Workflow",
    deliverable: "Automated pipeline with AI decision points",
    scope: "Task orchestration, API connectors, scheduling, monitoring",
  },
  {
    no: "4.0",
    description: "Machine-Learning Tool",
    deliverable: "Trained model with API endpoint and interface",
    scope: "Data pipeline, model training, evaluation, deployment",
  },
  {
    no: "5.0",
    description: "Dashboard",
    deliverable: "Data visualization dashboard with real-time updates",
    scope: "Charts, filters, data tables, export, role-based access",
  },
];

export const processPhases = [
  {
    id: "spec",
    label: "SPEC",
    number: "01",
    description: "Define scope, constraints, and acceptance criteria. Write the spec before touching code.",
    tasks: ["Requirements gathering", "Technical architecture decision", "Data model design", "API contract definition"],
    milestone: "SPEC SIGN-OFF",
  },
  {
    id: "build",
    label: "BUILD",
    number: "02",
    description: "Implement in short iterations. Ship working slices, not abstract layers.",
    tasks: ["Core logic implementation", "UI component build", "API integration", "Database setup"],
    milestone: "BUILD COMPLETE",
  },
  {
    id: "verify",
    number: "03",
    label: "VERIFY",
    description: "Test against the spec. Edge cases, error states, load conditions.",
    tasks: ["Unit tests", "Integration tests", "Edge case validation", "Performance check"],
    milestone: "VERIFIED",
  },
  {
    id: "ship",
    number: "04",
    label: "SHIP",
    description: "Deploy, monitor, hand over. Documentation and knowledge transfer.",
    tasks: ["Production deployment", "Monitoring setup", "Documentation", "Handover session"],
    milestone: "HANDOVER",
  },
];
