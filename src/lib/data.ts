import {
  Activity,
  Bot,
  BrainCircuit,
  BriefcaseBusiness,
  Cloud,
  Database,
  LayoutDashboard,
  PanelsTopLeft,
  ShieldCheck,
  Stethoscope,
  Workflow
} from "lucide-react";

export const siteConfig = {
  name: "Abhinav Sai Tirunagari",
  title: "AI Engineer & Full-Stack Developer",
  description:
    "Building RAG systems, intelligent data pipelines, and modern web experiences.",
  email: "abhitiru.dev@gmail.com",
  location: "Gainesville, FL, USA",
  github: "https://github.com/Abhinavasai",
  linkedin: "https://www.linkedin.com/in/abhinava-sai-tirunagari-8822721aa/",
  resume: "/AbhinavaSaiTirunagari_Resume.docx",
  status: "Open to AI / RAG roles and full-stack opportunities"
} as const;

export const heroBadges = [
  "RAG Systems",
  "LLMs",
  "FastAPI",
  "Next.js",
  "Azure DevOps",
  "Healthcare AI"
];

export const aboutParagraphs = [
  "I build AI products where retrieval quality, system design, and user experience all matter. My recent work centers on RAG pipelines, benchmark-driven evaluation, and graph-aware retrieval systems that need to be both experimentally rigorous and production-ready.",
  "Across the stack, I work comfortably from FastAPI services, vector databases, and streaming APIs through to polished Next.js interfaces, CI/CD, and cloud delivery. I care about developer experience as much as end-user clarity, so I design systems that are observable, testable, and easy to evolve.",
  "My healthcare and quality-safety exposure at the University of Florida adds a practical lens to how I build software: decisions should be evidence-based, resilient under real constraints, and useful to multidisciplinary teams making high-stakes choices."
];

export const quickFacts = [
  { label: "Current Focus", value: "RAG evaluation, LLM applications, full-stack AI" },
  { label: "Location", value: "Gainesville, Florida" },
  { label: "Languages", value: "Python, TypeScript, Java, JavaScript, C++" },
  { label: "Core Tools", value: "FastAPI, Next.js, Azure DevOps, Docker, vector DBs" }
];

export const stats = [
  { label: "Domains", value: "AI Systems, Healthcare, Platform Engineering" },
  { label: "Delivery Style", value: "Research-led, production-minded" },
  { label: "Specialty", value: "Benchmarking and retrieval quality" }
];

export const experiences = [
  {
    role: "Student Assistant, Quality & Patient Safety",
    company: "University of Florida",
    location: "Gainesville, FL, USA",
    type: "Part-Time",
    period: "Jan 2026 – Jun 2026",
    icon: Stethoscope,
    points: [
      "Apply AI, quality improvement, project management, and industrial and systems engineering methods to real-world healthcare quality and safety initiatives.",
      "Analyze operational and clinical data, frame improvement opportunities, and support evidence-based decisions that improve care quality and patient outcomes.",
      "Collaborate with multidisciplinary stakeholders to strengthen communication, change management, and delivery discipline in complex healthcare environments."
    ]
  },
  {
    role: "Full Stack AI Intern",
    company: "Cognera Health",
    location: "Remote, USA",
    type: "Internship",
    period: "Jun 2025 – Dec 2025",
    icon: BrainCircuit,
    points: [
      "Developed mobile-responsive product experiences with React and TypeScript, partnering with cross-functional teams to define API contracts and ship user-facing features.",
      "Worked in agile delivery loops and peer reviews, breaking down complex product requirements into reliable implementation tasks for technical and non-technical stakeholders.",
      "Expanded test coverage and UI reliability while evaluating emerging tools and proposing stronger mobile-first interaction patterns."
    ]
  },
  {
    role: "Member Technical",
    company: "ADP",
    location: "India",
    type: "Full-Time",
    period: "Jun 2023 – Jun 2024",
    icon: Workflow,
    points: [
      "Contributed to enterprise software delivery with an emphasis on dependable backend behavior, release quality, and issue resolution across production-facing systems.",
      "Worked with modern service-oriented development practices to improve maintainability, team velocity, and collaboration across engineering workflows.",
      "Built a stronger foundation in large-scale software delivery, debugging, and disciplined execution in a high-throughput product environment."
    ]
  },
  {
    role: "Research Intern",
    company: "ADRIN-ISRO",
    location: "India",
    type: "Internship",
    period: "Jan 2023 – Jun 2023",
    icon: Activity,
    points: [
      "Supported research-oriented engineering work in a scientific environment, translating technical ideas into structured implementation and analysis tasks.",
      "Developed experience in experimentation, disciplined problem framing, and communicating findings clearly across research and engineering contexts.",
      "Strengthened end-to-end thinking around data, systems, and measurable technical outcomes."
    ]
  }
] as const;

export const projects = [
  {
    slug: "hipporag-benchmarking-suite",
    title: "HippoRAG Benchmarking & Evaluation Suite",
    tagline: "Multi-hop retrieval benchmarking across graph-aware and baseline RAG systems.",
    category: "AI Evaluation",
    accent: "from-sky-500/30 via-cyan-400/10 to-amber-300/20",
    description:
      "Experimental evaluation framework comparing HippoRAG v1 and v2 against classical and modern RAG baselines on multi-hop QA tasks.",
    problem:
      "Teams need a reliable way to compare graph-augmented retrieval systems against strong baselines on datasets where multi-hop reasoning, latency, and cost all matter.",
    approach:
      "Built configurable pipelines to benchmark HippoRAG 1 and 2 alongside vector RAG, video-aware retrieval workflows, and graph-augmented baselines over MuSiQue, 2WikiMultiHopQA, and HotpotQA. The system tracks retrieval recall, latency, and cost, then publishes dashboards for side-by-side analysis.",
    impact:
      "Surfaced clear trade-offs between retrieval quality, runtime, and spend, highlighting stronger multi-hop retrieval performance from HippoRAG while informing design decisions for future RAG systems.",
    outcomes: [
      "Compared multiple retrieval architectures under a single repeatable evaluation framework.",
      "Tracked R@k, latency, and cost in a dashboard-friendly format for faster research iteration.",
      "Created a benchmark workflow that can be extended to new datasets and retrieval strategies."
    ],
    stack: ["Python", "LangChain", "LlamaIndex", "Neo4j", "pgvector", "Streamlit", "Next.js"],
    links: {
      github: "#",
      demo: "#"
    }
  },
  {
    slug: "video-rag-system",
    title: "YouTube / Video RAG System",
    tagline: "Semantic search and question answering over hours of long-form video.",
    category: "RAG Platform",
    accent: "from-cyan-500/25 via-sky-400/10 to-violet-300/20",
    description:
      "Retrieval-Augmented Generation pipeline for long-form YouTube and video content with semantic search, grounded answers, and high-context navigation.",
    problem:
      "Long-form video is hard to query meaningfully because relevant evidence is buried inside transcripts, scene boundaries, and fragmented context windows.",
    approach:
      "Designed a pipeline that handles video ingestion, transcription, segmentation, embedding, vector indexing, and answer generation. The system focuses on chunk quality, retrieval coverage for very long context, and a query experience that lets users move from summary to source evidence quickly.",
    impact:
      "Improved discoverability for long-form content and created a practical UX for exploring videos with grounded, retrieval-backed answers.",
    outcomes: [
      "Enabled semantic search over lengthy video archives.",
      "Improved answer grounding through robust chunking and retrieval strategies.",
      "Designed the stack for pluggable LLM providers and scalable serving."
    ],
    stack: ["Python", "FastAPI", "OpenAI", "Gemini", "Vector DB", "Next.js", "TypeScript"],
    links: {
      github: "#",
      demo: "#"
    }
  },
  {
    slug: "full-stack-ai-platform",
    title: "Full-Stack AI Platform",
    tagline: "FastAPI, Next.js, streaming UX, and Azure CI/CD in one production-ready stack.",
    category: "Full-Stack AI",
    accent: "from-emerald-400/25 via-sky-400/10 to-blue-500/20",
    description:
      "Production-ready AI web platform pairing a FastAPI backend with a motion-rich Next.js frontend and Azure DevOps delivery pipelines.",
    problem:
      "Shipping AI features reliably requires more than a model endpoint. It needs observable APIs, smooth client experiences, background jobs, and repeatable deployment.",
    approach:
      "Implemented REST and WebSocket endpoints for chat, long-running evaluation jobs, logs, and metrics. Built a Next.js frontend with optimistic UI, skeleton states, and streamed responses, then wired linting, testing, type-checking, build steps, and cloud deployment into Azure pipelines.",
    impact:
      "Demonstrates end-to-end engineering depth across product UX, backend services, and deployment workflows while improving delivery reliability and developer experience.",
    outcomes: [
      "Combined real-time AI interactions with operational visibility and deployment discipline.",
      "Reduced friction between experimentation and production delivery.",
      "Created a reusable foundation for future RAG and evaluation products."
    ],
    stack: ["FastAPI", "Next.js", "TypeScript", "Tailwind", "Azure Pipelines", "Docker", "WebSockets"],
    links: {
      github: "#",
      demo: "#"
    }
  },
  {
    slug: "delphi-llvm-compiler-toolkit",
    title: "Delphi LLVM Compiler Toolkit",
    tagline: "A compiler toolchain with LLVM IR generation, interpretation, and WASM support.",
    category: "Systems",
    accent: "from-amber-400/25 via-orange-300/10 to-slate-400/20",
    description:
      "Java-based toolchain for Delphi programs featuring a full LLVM IR compiler, scoped interpreter, and WebAssembly support.",
    problem:
      "Compiler construction demands correctness across parsing, semantic handling, intermediate representation, and runtime behavior.",
    approach:
      "Built a structured compiler pipeline using ANTLR4 for parsing and translation into LLVM IR, then extended the stack with an interpreter and WASM capabilities.",
    impact:
      "Showcases strong systems fundamentals and the ability to work through deeply technical implementation layers with precision.",
    outcomes: [
      "Delivered an end-to-end compiler workflow from parsing to execution targets.",
      "Applied formal language tooling and low-level systems concepts in a cohesive project.",
      "Demonstrated comfort with complex program analysis and runtime concerns."
    ],
    stack: ["Java", "ANTLR4", "LLVM", "WebAssembly"],
    links: {
      github: "https://github.com/Abhinavasai/Delphi-to-LLVM-IR-Compiler-WASM-Runner-and-Interpreter",
      demo: "#"
    }
  },
  {
    slug: "expense-management-system",
    title: "Expense Management System",
    tagline: "Microservices expense tracking with secure auth and a React frontend.",
    category: "Enterprise Web",
    accent: "from-fuchsia-400/25 via-pink-300/10 to-orange-300/20",
    description:
      "Microservices-based employee expense platform using Java Spring Boot, React, PostgreSQL, and JWT authentication.",
    problem:
      "Expense workflows need clear ownership, secure access, and scalable service boundaries to support real business use cases.",
    approach:
      "Built a modular application architecture with secure authentication, API-driven workflows, and a web interface for managing employee expense operations.",
    impact:
      "Demonstrates the ability to build full-stack business systems with a strong backend core and production-style security concerns.",
    outcomes: [
      "Implemented a secure, multi-service architecture for workflow management.",
      "Connected backend services to a practical frontend experience.",
      "Reinforced experience in enterprise-style Java application design."
    ],
    stack: ["Java", "Spring Boot", "React", "PostgreSQL", "JWT"],
    links: {
      github: "https://github.com/Abhinavasai/Employee-Management-System",
      demo: "#"
    }
  },
  {
    slug: "movie-semantic-search",
    title: "Movie Semantic Search",
    tagline: "Scene retrieval driven by emotion, genre, and natural-language query intent.",
    category: "Applied AI",
    accent: "from-violet-400/25 via-indigo-300/10 to-sky-300/20",
    description:
      "Scene-retrieval system using computer vision and NLP to locate relevant movie segments from semantic queries.",
    problem:
      "Video archives are difficult to search when user intent depends on emotion, tone, or narrative structure rather than exact keywords.",
    approach:
      "Combined OpenCV and NLP techniques to model movie scene characteristics and support semantic querying across content attributes such as emotion and genre.",
    impact:
      "Highlights early work at the intersection of retrieval, multimodal understanding, and practical search experience design.",
    outcomes: [
      "Enabled higher-level search over scene meaning instead of simple metadata lookup.",
      "Applied multimodal reasoning patterns that connect naturally to later RAG work.",
      "Balanced model behavior with user-facing exploration needs."
    ],
    stack: ["Python", "OpenCV", "NLP", "Information Retrieval"],
    links: {
      github: "#",
      demo: "https://docs.google.com/document/d/1s8oUIuMDJ9NIJpn4hUzQkr-HKui-rZvH/edit?usp=sharing&ouid=107279962979487063515&rtpof=true&sd=true"
    }
  }
] as const;

export const skillGroups = [
  {
    title: "AI & Data",
    icon: Bot,
    items: ["LLMs", "RAG Systems", "LangChain", "LlamaIndex", "Vector Databases", "Evaluation Pipelines", "Prompt Engineering", "Experiment Tracking"]
  },
  {
    title: "Backend",
    icon: Database,
    items: ["FastAPI", "Python", "Node.js", "REST APIs", "WebSockets", "Microservices", "PostgreSQL", "Graph Retrieval"]
  },
  {
    title: "Frontend",
    icon: PanelsTopLeft,
    items: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Component Systems", "Responsive UI", "Streaming UX", "Accessibility"]
  },
  {
    title: "DevOps & Cloud",
    icon: Cloud,
    items: ["Azure", "Azure Pipelines", "GitHub Actions", "Docker", "CI/CD", "Observability", "Environment Config", "Deployment Automation"]
  },
  {
    title: "Other",
    icon: ShieldCheck,
    items: ["Healthcare Quality & Safety", "Industrial & Systems Engineering", "Research Workflows", "Stakeholder Communication", "Project Management"]
  }
] as const;

export const highlights = [
  {
    label: "Research-first RAG",
    value: "Benchmarking, evaluation rigor, graph-aware retrieval",
    icon: LayoutDashboard
  },
  {
    label: "Shipping systems",
    value: "APIs, frontend delivery, cloud deployment, CI/CD",
    icon: BriefcaseBusiness
  }
] as const;

export const navItems = [
  { label: "About", href: "/#about" },
  { label: "Experience", href: "/#experience" },
  { label: "Projects", href: "/projects" },
  { label: "Skills", href: "/#skills" },
  { label: "Contact", href: "/#contact" }
];
