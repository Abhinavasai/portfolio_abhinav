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
  Workflow,
} from "lucide-react";

// Updated from profile.txt, Abhinava_Sai_Tirunagari_CV.yaml, and docs/All_Projects.md.

export const siteConfig = {
  name: "Abhinava Sai Tirunagari",
  title: "Full-Stack AI Engineer",
  description:
    "Building end-to-end AI products, clinical data platforms, and distributed systems.",
  email: "abhinavgemini0@gmail.com",
  location: "Gainesville, FL, USA",
  github: "https://github.com/Abhinavasai",
  linkedin: "https://www.linkedin.com/in/abhinava-sai-tirunagari/",
  resume: "/AbhinavaSaiTirunagari_Resume.pdf",
  status:
    "Available for full-stack AI, backend, and platform engineering opportunities",
} as const;

export const heroBadges = [
  "LLM Agents",
  "RAG Systems",
  "FastAPI",
  "React / Next.js",
  "AWS & Azure",
  "Distributed Systems",
] as const;

export const aboutParagraphs = [
  "I'm a full-stack AI engineer with a Master's in Computer Science from the University of Florida. I build end-to-end products that connect LLM infrastructure, backend services, and interfaces to real user workflows.",
  "At the University of Florida, I shipped clinical AI features across Python/FastAPI, React/TypeScript, and Neo4j, improving prediction accuracy from 45% to 75%. At Cognera Health, I progressed from intern to full-time AI engineer, building clinician dashboards and Azure RAG workflows for treatment plans and clinical notes.",
  "My experience spans enterprise financial services at ADP, satellite image research at ADRIN-ISRO, and data integration at INRY. Across these environments, I focus on tested software, observable services, reliable data pipelines, and thoughtful collaboration with domain experts.",
] as const;

export const quickFacts = [
  {
    label: "Current Focus",
    value: "Full-stack AI, LLM agents, distributed systems",
  },
  {
    label: "Location",
    value: "Gainesville, Florida - open to roles across the US",
  },
  {
    label: "Languages",
    value: "Python, TypeScript, Java, Go, C, C++",
  },
  {
    label: "Core Tools",
    value: "FastAPI, React, Next.js, Spring Boot, AWS, Azure",
  },
] as const;

export const stats = [
  {
    label: "Clinical AI",
    value: "45% to 75% prediction accuracy",
  },
  {
    label: "Enterprise Scale",
    value: "Financial platforms serving 10,000+ users",
  },
  {
    label: "Research",
    value: "85% accuracy, 90% precision in satellite classification",
  },
] as const;

export const education = [
  {
    institution: "University of Florida",
    degree: "Master of Science in Computer Science",
    period: "Aug 2024 - May 2026",
    location: "Gainesville, FL",
    gpa: "3.81/4.0",
  },
  {
    institution: "Mahindra Ecole Centrale",
    degree: "Bachelor of Technology in Computer Science Engineering",
    period: "Aug 2019 - May 2023",
    location: "Hyderabad, India",
    gpa: "8.94/10.0",
  },
] as const;

export const experiences = [
  {
    role: "Student Assistant, Quality & Patient Safety",
    company: "University of Florida",
    location: "Gainesville, FL",
    type: "Part-Time",
    period: "Jan 2026 - Jun 2026",
    icon: Stethoscope,
    points: [
      "Shipped full-stack AI features for a clinical data platform  -  LLM agents over unstructured clinical data in Neo4j, React/TypeScript frontend, Python/FastAPI backend  -  improving prediction accuracy from 45% to 75% with rapid production iteration.",
      "Designed event-driven data pipelines and well-tested full-stack components by translating domain expert workflows into robust product features.",
    ],
  },
  {
    role: "Full Stack AI Engineer",
    company: "Cognera Health",
    location: "Alabama, United States (Remote)",
    type: "Full-Time",
    period: "Dec 2025 - May 2026",
    icon: BrainCircuit,
    points: [
      "Designed REST APIs and clinician-facing dashboards in Python, FastAPI, React, Next.js, and TypeScript for healthcare analytics, billing, and AI-powered workflows.",
      "Built RAG pipelines for treatment-plan and clinical-note generation, and an Azure RAG system using Azure Functions, Azure AI Search, and Microsoft Foundry Agents.",
      "Deployed development instances on Azure and designed PostgreSQL/Supabase data and API workflows with authentication, authorization, and secure handling of healthcare data.",
    ],
  },
  {
    role: "Full Stack Intern",
    company: "Cognera Health",
    location: "Alabama, United States (Remote)",
    type: "Internship",
    period: "Aug 2025 - Nov 2025",
    icon: Bot,
    points: [
      "Built Python and FastAPI backend services for AI-driven healthcare applications, including asynchronous processing, scalable APIs, and low-latency inference workloads.",
      "Developed clinician-facing product features in React, Next.js, and TypeScript for real-time analytics and AI-powered insights.",
      "Designed Supabase and PostgreSQL data infrastructure with authentication, authorization, and secure data pipelines.",
    ],
  },
  {
    role: "Member Technical",
    company: "ADP",
    location: "Hyderabad, India",
    type: "Full-Time",
    period: "Jul 2023 - Jun 2024",
    icon: Workflow,
    points: [
      "Developed Java and Python REST API services with PostgreSQL/SQL Server for a financial platform serving 10,000+ users  -  designed data transformation pipelines, reusable service components, and unit/integration tests in distributed Agile teams.",
      "Contributed to API design, data modeling, and expanded test coverage that improved maintainability and release quality across payroll and financial processing workflows.",
    ],
  },
  {
    role: "Research Intern",
    company: "ADRIN-ISRO",
    location: "Hyderabad, India",
    type: "Internship",
    period: "Jan 2023 - May 2023",
    icon: Activity,
    points: [
      "Conducted deep learning research for satellite image analysis  -  built Python data ingestion pipelines; designed and trained PyTorch CNN models for geospatial classification tasks (85% accuracy, 90% precision); profiled and debugged model performance issues and validated with Pytest.",
      "Built reproducible experimentation workflows for dataset preparation, model training, and performance evaluation on geospatial imagery.",
    ],
  },
  {
    role: "Intern",
    company: "Integrhythm (INRY)",
    location: "Hyderabad, India",
    type: "Internship",
    period: "Jun 2022 - Aug 2022",
    icon: Database,
    points: [
      "Developed Python and Java data integration pipelines automating complex data processing with 50% manual effort reduction.",
      "Standardized ingestion and transformation steps to make recurring data operations more reliable and easier to maintain.",
    ],
  },
] as const;

export const projects = [
  {
    slug: "clinical-rag-platform",
    image: "/projects/clinical-rag-platform.webp",
    imageWidth: 1448,
    imageHeight: 1086,
    title: "Clinical RAG Platform",
    tagline:
      "Grounded AI workflows for clinical analytics, treatment plans, and notes.",
    category: "Healthcare",
    period: "Aug 2025 \u2013 May 2026",
    context: "Cognera Health",
    accent: "from-accentSoft via-surface to-bg",
    description:
      "Grounded AI workflows for clinical analytics, treatment plans, and notes.",
    problem:
      "Clinical teams need secure retrieval and generation integrated with their existing workflows.",
    approach:
      "Designed REST APIs and clinician-facing dashboards for healthcare analytics, billing, and AI-powered workflows. Built RAG pipelines for information extraction and generation, including treatment-plan and clinical-note generation.",
    impact:
      "Connects clinician-facing dashboards to authenticated data services and Azure agent orchestration.",
    outcomes: [
      "Designed REST APIs and clinician-facing dashboards for healthcare analytics, billing, and AI-powered workflows.",
      "Built RAG pipelines for information extraction and generation, including treatment-plan and clinical-note generation.",
      "Developed an end-to-end RAG system on Microsoft Azure using Azure Functions, Azure AI Search, and Microsoft Foundry Agents for retrieval, agent orchestration, and LLM generation.",
      "Designed PostgreSQL/Supabase data and API workflows with authentication, authorization, and secure handling of healthcare application data.",
    ],
    stack: [
      "Python",
      "FastAPI",
      "React",
      "Next.js",
      "TypeScript",
      "Azure Functions",
      "Azure AI Search",
      "Microsoft Foundry Agents",
      "PostgreSQL",
      "Supabase",
    ],
    links: {
      github: "#",
      demo: "#",
    },
  },
  {
    slug: "graphrag-biomedical-qa",
    image: "/projects/graphrag-biomedical-qa.webp",
    imageWidth: 1448,
    imageHeight: 1086,
    title: "GraphRAG: Multi-Hop Knowledge Graph Pipeline for Biomedical QA",
    tagline:
      "Biomedical question answering with ontology-aware graph and vector retrieval.",
    category: "RAG Systems",
    period: "May 2025",
    context: "Personal",
    accent: "from-accentSoft via-surface to-bg",
    description:
      "Biomedical question answering with ontology-aware graph and vector retrieval.",
    problem:
      "Biomedical questions often require evidence across multiple entities and passages.",
    approach:
      "Engineered an 8-stage indexing pipeline with LLM entity extraction and UMLS ontology resolution using SapBERT and FAISS. Implemented dual-mode retrieval with NetworkX graph traversal and LanceDB vector search, including Leiden community detection.",
    impact: "Provides multi-hop and thematic retrieval with source provenance.",
    outcomes: [
      "Engineered an 8-stage indexing pipeline with LLM entity extraction and UMLS ontology resolution using SapBERT and FAISS.",
      "Implemented dual-mode retrieval with NetworkX graph traversal and LanceDB vector search, including Leiden community detection.",
      "Built a FastAPI backend and Streamlit streaming QA interface with source provenance.",
    ],
    stack: [
      "Python",
      "FastAPI",
      "Streamlit",
      "NetworkX",
      "LanceDB",
      "FAISS",
      "SapBERT",
      "Hugging Face Transformers",
      "LLM APIs",
      "UMLS",
      "Parquet",
    ],
    links: {
      github:
        "https://github.com/Abhinavasai/GraphRAG-Multi-Hop-Knowledge-Graph-Pipeline-for-Biomedical-QA",
      demo: "#",
    },
  },
  {
    slug: "lumen-job-pipeline",
    image: "/projects/lumen-job-pipeline.webp",
    imageWidth: 1448,
    imageHeight: 1086,
    title: "Lumen Job Pipeline",
    tagline:
      "AI-ranked job discovery, tailored resumes, and application review.",
    category: "Full-Stack AI",
    period: "2025 \u2013 Present",
    context: "Personal",
    accent: "from-accentSoft via-surface to-bg",
    description:
      "AI-ranked job discovery, tailored resumes, and application review.",
    problem:
      "Job seekers need to consolidate postings, filter noise, and tailor applications.",
    approach:
      "Built a local job pipeline that collects LinkedIn, Adzuna, and Greenhouse postings, deduplicates them, and classifies a Relevant Jobs pool. Ranks that pool with Azure OpenAI into AI Top Picks and generates tailored RenderCV PDFs.",
    impact:
      "Unifies collection, deduplication, AI ranking, PDF generation, and user-controlled application workflows.",
    outcomes: [
      "Built a local job pipeline that collects LinkedIn, Adzuna, and Greenhouse postings, deduplicates them, and classifies a Relevant Jobs pool.",
      "Ranks that pool with Azure OpenAI into AI Top Picks and generates tailored RenderCV PDFs.",
      "Serves the same workflows through a FastAPI backend, a Next.js dashboard, and a Streamlit UI.",
      "Opens supported application forms in visible Chrome for user-submitted autofill.",
    ],
    stack: [
      "Python",
      "FastAPI",
      "Next.js",
      "Streamlit",
      "Azure OpenAI",
      "SQLite",
      "RenderCV",
      "Playwright",
    ],
    links: {
      github: "https://github.com/Abhinavasai/Lumen",
      demo: "#",
    },
  },
  {
    slug: "healthonyx",
    image: "/projects/healthonyx.webp",
    imageWidth: 1448,
    imageHeight: 1086,
    title: "Healthonyx",
    tagline: "Role-based healthcare monitoring and medical record management.",
    category: "Healthcare",
    period: "Jan 2025",
    context: "Personal",
    accent: "from-accentSoft via-surface to-bg",
    description:
      "Role-based healthcare monitoring and medical record management.",
    problem:
      "Doctors, patients, and administrators need distinct, secure workflows for healthcare records.",
    approach:
      "Built a healthcare monitoring platform with a Go REST API and an Angular TypeScript frontend. Implemented JWT authentication with role-based access for doctor, patient, and admin users.",
    impact:
      "Combines healthcare workflows with role-based access and three layers of automated testing.",
    outcomes: [
      "Built a healthcare monitoring platform with a Go REST API and an Angular TypeScript frontend.",
      "Implemented JWT authentication with role-based access for doctor, patient, and admin users.",
      "Added PostgreSQL migrations, Docker Compose, and three-layer CI testing: Go unit tests, Karma/Jasmine, and Cypress end-to-end tests.",
    ],
    stack: [
      "Go",
      "Angular",
      "TypeScript",
      "PostgreSQL",
      "Docker",
      "Docker Compose",
      "JWT",
      "GitHub Actions",
      "Cypress",
      "Jasmine/Karma",
    ],
    links: {
      github: "https://github.com/Abhinavasai/Healthonyx",
      demo: "#",
    },
    contribution:
      "Team project - Frontend Engineer (as credited in the repository).",
  },
  {
    slug: "ai-commerce-insights",
    image: "/projects/ai-commerce-insights.webp",
    imageWidth: 1448,
    imageHeight: 1086,
    title: "AI Commerce Insights Platform",
    tagline:
      "Document-to-insight workflows powered by vector search and knowledge graphs.",
    category: "Full-Stack AI",
    period: "2025",
    context: "Personal",
    accent: "from-accentSoft via-surface to-bg",
    description:
      "Document-to-insight workflows powered by vector search and knowledge graphs.",
    problem:
      "Seller and catalog information arrives in unstructured documents and disconnected records.",
    approach:
      "Built a platform that turns unstructured seller and catalog documents into structured insights with RAG and LLM agents. Implemented LangChain tools for vector search, graph query, catalog lookup, and insight search, with a streaming chat interface.",
    impact:
      "Connects document ingestion, graph relationships, vector retrieval, and streaming agent interactions.",
    outcomes: [
      "Built a platform that turns unstructured seller and catalog documents into structured insights with RAG and LLM agents.",
      "Implemented LangChain tools for vector search, graph query, catalog lookup, and insight search, with a streaming chat interface.",
      "Modeled seller, product, and category relationships in Neo4j.",
      "Processed uploads through S3 and SQS, with pgvector HNSW search over OpenAI embeddings.",
    ],
    stack: [
      "Python",
      "FastAPI",
      "React",
      "TypeScript",
      "PostgreSQL",
      "pgvector",
      "Neo4j",
      "OpenAI",
      "LangChain",
      "AWS SQS",
      "S3",
      "Docker",
      "GitHub Actions",
    ],
    links: {
      github: "#",
      demo: "#",
    },
  },
  {
    slug: "subscription-commerce-platform",
    image: "/projects/subscription-commerce-platform.webp",
    imageWidth: 1448,
    imageHeight: 1086,
    title: "Subscription Commerce Platform",
    tagline: "Quote-to-payment subscriptions with event-driven hybrid billing.",
    category: "Commerce",
    period: "2025",
    context: "Personal",
    accent: "from-accentSoft via-surface to-bg",
    description:
      "Quote-to-payment subscriptions with event-driven hybrid billing.",
    problem:
      "Subscription commerce needs consistent order, payment, metering, and retry workflows.",
    approach:
      "Built a quote-to-payment platform for B2B and B2C subscriptions with hybrid billing: fixed base plus usage-based overage. Designed an event-driven modular monolith where quote acceptance creates orders, order confirmation provisions Stripe subscriptions, and usage metering triggers overage billing.",
    impact:
      "Connects quotes, Stripe subscriptions, usage billing, and customer and administrator portals.",
    outcomes: [
      "Built a quote-to-payment platform for B2B and B2C subscriptions with hybrid billing: fixed base plus usage-based overage.",
      "Designed an event-driven modular monolith where quote acceptance creates orders, order confirmation provisions Stripe subscriptions, and usage metering triggers overage billing.",
      "Integrated Stripe Elements, webhook-driven invoice and payment sync, and a dunning flow with retry and auto-cancellation.",
      "Built a customer portal and an admin dashboard for catalog, quotes, subscriptions, billing, usage, and KPIs.",
    ],
    stack: [
      "Java Spring Boot 3.x",
      "React 18",
      "TypeScript",
      "PostgreSQL",
      "Redis",
      "Stripe",
      "Kafka",
      "JWT",
      "Flyway",
      "Docker",
      "AWS ECS Fargate",
      "GitHub Actions",
    ],
    links: {
      github: "#",
      demo: "#",
    },
  },
  {
    slug: "ecommerce-audit-anomaly-detection",
    image: "/projects/ecommerce-audit-anomaly-detection.webp",
    imageWidth: 1448,
    imageHeight: 1086,
    title: "Ecommerce Audit & Anomaly Detection System",
    tagline:
      "Payment reconciliation with anomaly detection and investigation workflows.",
    category: "Financial Systems",
    period: "2025",
    context: "Personal",
    accent: "from-accentSoft via-surface to-bg",
    description:
      "Payment reconciliation with anomaly detection and investigation workflows.",
    problem:
      "Payment and legacy records need reconciliation, anomaly analysis, and traceable investigation.",
    approach:
      "Built financial reconciliation across Stripe, PayPal, and Square with rules, Isolation Forest, and LLM classification. Synced legacy SQL Server tables into PostgreSQL with checksum change detection, watermark extraction, and APScheduler.",
    impact:
      "Combines rules, Isolation Forest, LLM analysis, live alerts, and an audit trail.",
    outcomes: [
      "Built financial reconciliation across Stripe, PayPal, and Square with rules, Isolation Forest, and LLM classification.",
      "Synced legacy SQL Server tables into PostgreSQL with checksum change detection, watermark extraction, and APScheduler.",
      "Used GPT-4o for anomaly classification, root-cause notes, recommendations, case summaries, and natural-language SQL.",
      "Added case workflows, investigation comments, Redis pub/sub WebSocket alerts, and an audit trail.",
    ],
    stack: [
      "Python",
      "FastAPI",
      "React",
      "TypeScript",
      "Ant Design",
      "PostgreSQL",
      "SQL Server",
      "Redis",
      "OpenAI",
      "Scikit-learn",
      "APScheduler",
      "WebSocket",
      "Terraform",
      "AWS ECS Fargate",
      "GitHub Actions",
    ],
    links: {
      github: "#",
      demo: "#",
    },
  },
  {
    slug: "event-driven-workflow-engine",
    image: "/projects/event-driven-workflow-engine.webp",
    imageWidth: 1448,
    imageHeight: 1086,
    title: "Event-Driven Data Workflow Engine",
    tagline:
      "Stateful file ingestion and transformation across Redis Streams services.",
    category: "Data Engineering",
    period: "2025",
    context: "Personal",
    accent: "from-accentSoft via-surface to-bg",
    description:
      "Stateful file ingestion and transformation across Redis Streams services.",
    problem:
      "Multi-service data processing needs step sequencing, retry handling, and run coordination.",
    approach:
      "Built a workflow engine for file ingestion, validation, transformation, and bulk loading into PostgreSQL across services connected by Redis Streams. Designed a database-backed state machine in Java with step sequencing, retries, dead-letter streams, and a lock against concurrent runs.",
    impact:
      "Provides a database-backed workflow state machine, transformation service, and monitoring dashboard.",
    outcomes: [
      "Built a workflow engine for file ingestion, validation, transformation, and bulk loading into PostgreSQL across services connected by Redis Streams.",
      "Designed a database-backed state machine in Java with step sequencing, retries, dead-letter streams, and a lock against concurrent runs.",
      "Wrote a Python transform service with pandas transformers and Parquet intermediates cached in Redis.",
      "Built a React monitoring dashboard with run timelines, file upload, and API-key role-based access.",
    ],
    stack: [
      "Java Spring Boot 3.x",
      "Python",
      "FastAPI",
      "React",
      "Redis Streams",
      "PostgreSQL",
      "Pandas",
      "Parquet",
      "Docker",
      "GitHub Actions",
    ],
    links: {
      github: "#",
      demo: "#",
    },
  },
  {
    slug: "financial-audit-data-platform",
    image: "/projects/financial-audit-data-platform.webp",
    imageWidth: 1448,
    imageHeight: 1086,
    title: "Full-Stack Financial Audit & Data Pipeline Platform",
    tagline:
      "Full-stack audit workflows with AI-assisted transaction validation.",
    category: "Financial Systems",
    period: "Mar 2025",
    context: "Professional",
    accent: "from-accentSoft via-surface to-bg",
    description:
      "Full-stack audit workflows with AI-assisted transaction validation.",
    problem:
      "Financial records need structured storage, validation, and anomaly review.",
    approach:
      "Built a financial audit and payments data platform with a React/TypeScript frontend and a Python/FastAPI backend. Designed PostgreSQL schemas for transaction and audit records.",
    impact:
      "Connects audit records and AI validation to a full-stack interface and automated deployment.",
    outcomes: [
      "Built a financial audit and payments data platform with a React/TypeScript frontend and a Python/FastAPI backend.",
      "Designed PostgreSQL schemas for transaction and audit records.",
      "Built LLM-powered data validation and anomaly detection pipelines.",
      "Automated deployment with Docker and GitHub Actions CI/CD.",
    ],
    stack: [
      "React",
      "TypeScript",
      "Node.js",
      "Python",
      "FastAPI",
      "REST APIs",
      "PostgreSQL",
      "SQL Server",
      "Redis",
      "LLM APIs",
      "AWS",
      "Docker",
      "GitHub Actions",
      "Pytest",
    ],
    links: {
      github: "#",
      demo: "#",
    },
  },
  {
    slug: "event-driven-data-automation",
    image: "/projects/event-driven-data-automation.webp",
    imageWidth: 1448,
    imageHeight: 1086,
    title: "Event-Driven Data Automation & Workflow Engine",
    tagline: "Operational data automation for downstream audit and reporting.",
    category: "Data Engineering",
    period: "Sept 2023",
    context: "ADP",
    accent: "from-accentSoft via-surface to-bg",
    description:
      "Operational data automation for downstream audit and reporting.",
    problem:
      "Operational data must be processed reliably across audit and reporting services.",
    approach:
      "Built an event-driven workflow engine in Python and Java that processes and structures operational data for downstream audit and reporting. Designed ETL pipelines with PostgreSQL and SQL Server.",
    impact:
      "Brings ETL, caching, automated tests, and deployment into an event-driven workflow.",
    outcomes: [
      "Built an event-driven workflow engine in Python and Java that processes and structures operational data for downstream audit and reporting.",
      "Designed ETL pipelines with PostgreSQL and SQL Server.",
      "Integrated Redis for caching.",
      "Automated testing and deployment with Docker, Pytest, and GitHub Actions CI/CD.",
    ],
    stack: [
      "Python",
      "Java",
      "FastAPI",
      "REST APIs",
      "PostgreSQL",
      "SQL Server",
      "Redis",
      "Docker",
      "GitHub Actions",
      "Pytest",
    ],
    links: {
      github: "#",
      demo: "#",
    },
  },
  {
    slug: "ufo-sighting-classification",
    image: "/projects/ufo-sighting-classification.webp",
    imageWidth: 1448,
    imageHeight: 1086,
    title: "UFO Sighting Classification",
    tagline:
      "Live classification and visualization of message-driven sighting data.",
    category: "Applied ML",
    period: "Spring 2025",
    context: "University of Florida",
    accent: "from-accentSoft via-surface to-bg",
    description:
      "Live classification and visualization of message-driven sighting data.",
    problem:
      "Incoming sighting messages need classification and live visualization.",
    approach:
      "Built a real-time system for UFO sighting classification and live visualization. Designed a message-driven architecture with a RabbitMQ fanout exchange to stream sighting data into a dashboard.",
    impact:
      "Connects RabbitMQ consumers, a Random Forest classifier, and a live Streamlit dashboard.",
    outcomes: [
      "Built a real-time system for UFO sighting classification and live visualization.",
      "Designed a message-driven architecture with a RabbitMQ fanout exchange to stream sighting data into a dashboard.",
      "Developed data consumers, ML classifiers, and visualization layers, with containerized deployment via Apptainer.",
      "Added Pytest coverage for classification and message-parsing edge cases.",
    ],
    stack: [
      "Python",
      "RabbitMQ",
      "Streamlit",
      "Random Forest",
      "Apptainer",
      "Pytest",
    ],
    links: {
      github: "https://github.com/Abhinavasai/UFO-SIGHTING-CLASSIFICATION",
      demo: "https://drive.google.com/file/d/1daLyBjTobclPJ1Z85rHLMbd6u9T7dnVL/view?usp=sharing",
    },
  },
  {
    slug: "delphi-llvm-compiler-toolkit",
    image: "/projects/delphi-llvm-compiler-toolkit.webp",
    imageWidth: 1448,
    imageHeight: 1086,
    title: "Delphi LLVM Compiler & Interpreter Toolkit",
    tagline:
      "A Delphi compiler, scoped interpreter, and browser WebAssembly runner.",
    category: "Systems",
    period: "Spring 2025",
    context: "University of Florida",
    accent: "from-accentSoft via-surface to-bg",
    description:
      "A Delphi compiler, scoped interpreter, and browser WebAssembly runner.",
    problem:
      "Language tooling must handle parsing, scope, control flow, and multiple execution targets.",
    approach:
      "Built a Java toolchain for Delphi (Turbo Pascal) with an LLVM IR compiler, WebAssembly output, and a scoped interpreter using ANTLR4. Generated LLVM IR with ANTLR visitors and produced browser-executable WebAssembly through clang and wasm-ld.",
    impact:
      "Supports interpreted and compiled execution with verification programs across language features.",
    outcomes: [
      "Built a Java toolchain for Delphi (Turbo Pascal) with an LLVM IR compiler, WebAssembly output, and a scoped interpreter using ANTLR4.",
      "Generated LLVM IR with ANTLR visitors and produced browser-executable WebAssembly through clang and wasm-ld.",
      "Implemented interpreter support for scoping, control flow, function calls, and constant propagation.",
      "Verified both interpreted and compiled modes with programs covering arithmetic, I/O, loops, functions, and parameter passing.",
    ],
    stack: [
      "Java",
      "ANTLR4",
      "LLVM IR",
      "WebAssembly",
      "Clang",
      "wasm-ld",
      "HTML",
      "JavaScript",
    ],
    links: {
      github:
        "https://github.com/Abhinavasai/Delphi-to-LLVM-IR-Compiler-WASM-Runner-and-Interpreter",
      demo: "#",
    },
  },
  {
    slug: "bittorrent-application",
    image: "/projects/bittorrent-application.webp",
    imageWidth: 1448,
    imageHeight: 1086,
    title: "BitTorrent Application",
    tagline: "Multi-threaded peer-to-peer file sharing with a custom tracker.",
    category: "Systems",
    period: "Fall 2024",
    context: "University of Florida",
    accent: "from-accentSoft via-surface to-bg",
    description:
      "Multi-threaded peer-to-peer file sharing with a custom tracker.",
    problem:
      "Peer-to-peer file transfer must coordinate chunks and handle interrupted connections.",
    approach:
      "Built a Java peer-to-peer file-sharing system modeled on BitTorrent, with a custom tracker, multi-threaded downloads, and file chunking. Handled interrupted peer sessions and measured peer connectivity and download speed.",
    impact:
      "Implements peer coordination, parallel downloads, and connectivity and speed measurements.",
    outcomes: [
      "Built a Java peer-to-peer file-sharing system modeled on BitTorrent, with a custom tracker, multi-threaded downloads, and file chunking.",
      "Handled interrupted peer sessions and measured peer connectivity and download speed.",
    ],
    stack: ["Java", "Multi-threading", "Custom Tracker Server"],
    links: {
      github: "https://github.com/Abhinavasai/Bittorrent_Application_Java",
      demo: "#",
    },
  },
  {
    slug: "health-service-management",
    image: "/projects/health-service-management.webp",
    imageWidth: 1448,
    imageHeight: 1086,
    title: "Health Service Application Management",
    tagline:
      "A layered desktop application for hospital operations and reporting.",
    category: "Healthcare",
    period: "Sept 2024",
    context: "Personal",
    accent: "from-accentSoft via-surface to-bg",
    description:
      "A layered desktop application for hospital operations and reporting.",
    problem:
      "Hospital administration needs connected patient, appointment, staff, and revenue records.",
    approach:
      "Built a Java Swing application with MySQL for hospital services, patients, and revenue. Used DAO, DTO, and service layers for appointments, staff tracking, and revenue reports.",
    impact:
      "Organizes hospital operations through a Java Swing interface and layered MySQL access.",
    outcomes: [
      "Built a Java Swing application with MySQL for hospital services, patients, and revenue.",
      "Used DAO, DTO, and service layers for appointments, staff tracking, and revenue reports.",
    ],
    stack: ["Java Swing", "MySQL", "DAO/DTO/Service Layers"],
    links: {
      github: "https://github.com/Abhinavasai/HealthServiceApllication",
      demo: "#",
    },
  },
  {
    slug: "real-time-sign-translation",
    image: "/projects/real-time-sign-translation.webp",
    imageWidth: 1448,
    imageHeight: 1086,
    title: "Real-Time Sign Translation System",
    tagline:
      "Real-time sign recognition with gesture-to-text and speech output.",
    category: "Applied ML",
    period: "May 2024",
    context: "Personal",
    accent: "from-accentSoft via-surface to-bg",
    description:
      "Real-time sign recognition with gesture-to-text and speech output.",
    problem:
      "Sign-language recognition must operate across changing backgrounds and lighting.",
    approach:
      "Developed a real-time sign-language translation system using CNNs and OpenCV. Added grayscale conversion and background subtraction, TensorFlow gesture-to-text inference, and speech synthesis.",
    impact:
      "Connects image preprocessing, CNN inference, text output, and speech synthesis.",
    outcomes: [
      "Developed a real-time sign-language translation system using CNNs and OpenCV.",
      "Added grayscale conversion and background subtraction, TensorFlow gesture-to-text inference, and speech synthesis.",
      "Trained on American Sign Language data across varied backgrounds and lighting.",
    ],
    stack: ["Python", "CNNs", "OpenCV", "TensorFlow", "Speech Synthesis"],
    links: {
      github: "#",
      demo: "#",
    },
  },
  {
    slug: "expense-management-system",
    image: "/projects/expense-management-system.webp",
    imageWidth: 1448,
    imageHeight: 1086,
    title: "Expense Management System",
    tagline:
      "Secure employee expense tracking across Spring Boot microservices.",
    category: "Enterprise Web",
    period: "Sept 2023",
    context: "ADP",
    accent: "from-accentSoft via-surface to-bg",
    description:
      "Secure employee expense tracking across Spring Boot microservices.",
    problem:
      "Employee expenses need authenticated workflows and department-based reporting.",
    approach:
      "Built a microservices application for employee expense tracking. Stored data in PostgreSQL and used JWT authentication.",
    impact:
      "Supports expense reporting and auditing with PostgreSQL, JWT, and AWS CI/CD.",
    outcomes: [
      "Built a microservices application for employee expense tracking.",
      "Stored data in PostgreSQL and used JWT authentication.",
      "Tracked the work in JIRA and deployed with CI/CD on AWS.",
      "Supported department-based expense reporting and auditing.",
    ],
    stack: [
      "Java Spring Boot",
      "React.js",
      "PostgreSQL",
      "AWS",
      "JWT",
      "GitHub Actions",
      "JIRA",
    ],
    links: {
      github: "https://github.com/Abhinavasai/Employee-Management-System",
      demo: "#",
    },
  },
  {
    slug: "movie-semantic-search",
    image: "/projects/movie-semantic-search.webp",
    imageWidth: 1448,
    imageHeight: 1086,
    title: "Movie Semantic Search",
    tagline:
      "Movie scene search by meaning, emotion, genre, and visual content.",
    category: "Applied ML",
    period: "Aug 2021 \u2013 Mar 2023",
    context: "Mahindra University",
    accent: "from-accentSoft via-surface to-bg",
    description:
      "Movie scene search by meaning, emotion, genre, and visual content.",
    problem:
      "Relevant movie scenes are difficult to find using exact keywords alone.",
    approach:
      "Built semantic search over movie scenes with OpenCV and NLP. Combined scene-boundary detection with keyword navigation.",
    impact:
      "Combines scene boundaries, NLP, and content filters for movie exploration.",
    outcomes: [
      "Built semantic search over movie scenes with OpenCV and NLP.",
      "Combined scene-boundary detection with keyword navigation.",
      "Supported filtering by emotion, genre, and visual content.",
    ],
    stack: ["Python", "OpenCV", "NLP", "Scikit-image", "Metadata Extraction"],
    links: {
      github: "#",
      demo: "https://docs.google.com/document/d/1s8oUIuMDJ9NIJpn4hUzQkr-HKui-rZvH/edit?usp=sharing",
    },
  },
  {
    slug: "hostel-management-app",
    image: "/projects/hostel-management-app.webp",
    imageWidth: 1448,
    imageHeight: 1086,
    title: "Hostel Management App",
    tagline: "Android hostel requests, permissions, and announcements.",
    category: "Mobile",
    period: "May 2022",
    context: "Mahindra University",
    accent: "from-accentSoft via-surface to-bg",
    description: "Android hostel requests, permissions, and announcements.",
    problem:
      "Hostel residents and administrators need shared request and permission workflows.",
    approach:
      "Built an Android app for hostel requests, outing permissions, and announcements. Used Firebase Authentication and Realtime Database, with OTP verification and push notifications.",
    impact:
      "Connects authenticated Android users to real-time records, OTP verification, and notifications.",
    outcomes: [
      "Built an Android app for hostel requests, outing permissions, and announcements.",
      "Used Firebase Authentication and Realtime Database, with OTP verification and push notifications.",
    ],
    stack: [
      "Java",
      "XML",
      "Android",
      "Firebase Realtime Database",
      "Firebase Authentication",
    ],
    links: {
      github: "https://github.com/Abhinavasai/Hostel_Management_App",
      demo: "#",
    },
  },
  {
    slug: "hadoop-average-calculator",
    image: "/projects/hadoop-average-calculator.webp",
    imageWidth: 1448,
    imageHeight: 1086,
    title: "Average Calculator Using Hadoop MapReduce",
    tagline: "Distributed average computation with Hadoop MapReduce.",
    category: "Data Engineering",
    period: "May 2022",
    context: "Mahindra University",
    accent: "from-accentSoft via-surface to-bg",
    description: "Distributed average computation with Hadoop MapReduce.",
    problem:
      "Large dataset aggregation needs work divided across mapper and reducer stages.",
    approach:
      "Computed averages over large datasets with Hadoop MapReduce mapper and reducer jobs. Tested the job on a local Hadoop cluster.",
    impact:
      "Implements and tests average aggregation on a local Hadoop cluster.",
    outcomes: [
      "Computed averages over large datasets with Hadoop MapReduce mapper and reducer jobs.",
      "Tested the job on a local Hadoop cluster.",
    ],
    stack: ["Java", "Hadoop MapReduce", "HDFS"],
    links: {
      github: "#",
      demo: "#",
    },
  },
  {
    slug: "groceries-portal",
    image: "/projects/groceries-portal.webp",
    imageWidth: 1448,
    imageHeight: 1086,
    title: "Groceries Portal",
    tagline: "Desktop shopping and inventory workflows backed by MySQL.",
    category: "Commerce",
    period: "Nov 2021",
    context: "Mahindra University",
    accent: "from-accentSoft via-surface to-bg",
    description: "Desktop shopping and inventory workflows backed by MySQL.",
    problem:
      "Shopping, checkout, and inventory changes need consistent transaction records.",
    approach:
      "Built a desktop groceries system with search, cart, checkout, and inventory checks. Added authentication, inventory updates, transaction records, and a normalized MySQL schema.",
    impact:
      "Connects search, cart, checkout, authentication, and inventory in a normalized database.",
    outcomes: [
      "Built a desktop groceries system with search, cart, checkout, and inventory checks.",
      "Added authentication, inventory updates, transaction records, and a normalized MySQL schema.",
    ],
    stack: ["Java Swing", "JavaFX", "MySQL"],
    links: {
      github: "#",
      demo: "#",
    },
  },
] as const;

export const skillGroups = [
  {
    title: "AI & LLM Systems",
    icon: Bot,
    items: [
      "RAG",
      "LLM Agents",
      "OpenAI APIs",
      "LangChain",
      "LlamaIndex",
      "LangGraph",
      "AutoGen",
      "Prompt Engineering",
      "PyTorch",
      "Hugging Face Transformers",
    ],
  },
  {
    title: "Backend & Distributed Systems",
    icon: Database,
    items: [
      "Python",
      "Java",
      "Go",
      "FastAPI",
      "Spring Boot",
      "REST APIs",
      "GraphQL",
      "Kafka",
      "RabbitMQ",
      "Redis Streams",
      "Webhooks",
    ],
  },
  {
    title: "Frontend & Product",
    icon: PanelsTopLeft,
    items: [
      "TypeScript",
      "JavaScript",
      "React",
      "Next.js",
      "Angular",
      "HTML/CSS",
      "Streaming Interfaces",
      "Android",
    ],
  },
  {
    title: "Data & Retrieval",
    icon: LayoutDashboard,
    items: [
      "PostgreSQL",
      "SQL Server",
      "Neo4j",
      "pgvector",
      "LanceDB",
      "FAISS",
      "Redis",
      "DynamoDB",
      "SQLite",
      "Pandas",
      "ETL",
    ],
  },
  {
    title: "Cloud & Operations",
    icon: Cloud,
    items: [
      "AWS",
      "Azure",
      "Docker",
      "Kubernetes",
      "Terraform",
      "GitHub Actions",
      "Azure Functions",
      "Azure AI Search",
      "Prometheus",
      "Grafana",
    ],
  },
  {
    title: "Systems & Quality",
    icon: ShieldCheck,
    items: [
      "C",
      "C++",
      "Linux",
      "LLVM IR",
      "WebAssembly",
      "TDD",
      "Pytest",
      "Integration Testing",
      "Cypress",
      "Agile/Scrum",
    ],
  },
] as const;

export const highlights = [
  {
    label: "Clinical AI delivery",
    value: "LLM agents, grounded retrieval, clinician-facing products",
    icon: LayoutDashboard,
  },
  {
    label: "End-to-end engineering",
    value: "APIs, interfaces, distributed data workflows, cloud delivery",
    icon: BriefcaseBusiness,
  },
] as const;

export const navItems = [
  {
    label: "About",
    href: "/#about",
  },
  {
    label: "Experience",
    href: "/#experience",
  },
  {
    label: "Projects",
    href: "/projects",
  },
  {
    label: "Skills",
    href: "/#skills",
  },
  {
    label: "Contact",
    href: "/#contact",
  },
] as const;
