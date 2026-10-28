import { Project, SkillCategory, CareerMilestone, ArchitecturalPrinciple, Testimonial } from '../types/portfolio';

export const PERSONAL_INFO = {
  name: "Rajiv",
  title: "Staff Systems Architect & Full-Stack Engineer",
  email: "rajiv2122004@gmail.com",
  github: "https://github.com",
  linkedin: "https://linkedin.com",
  x: "https://x.com",
  location: "San Francisco, CA / Hybrid",
  yearsExperience: "10+",
  availability: "Advisory & Principal Roles",
  tagline: "Building high-concurrency event fabrics, zero-latency collaborative systems, and mission-critical cloud backbones.",
  bio: "Senior engineer and systems architect specializing in distributed consensus, low-latency stream architectures, and reactive spatial web interfaces. Dedicated to mathematically sound codebases, sub-millisecond p99 guarantees, and respectful human-centric digital experiences."
};

export const PROJECTS: Project[] = [
  {
    id: "aetherscale",
    title: "AetherScale Event Mesh",
    category: "distributed",
    tagline: "Sub-millisecond distributed message router processing 450,000 events/second.",
    summary: "High-throughput, multi-tenant distributed pub/sub fabric built with Rust and raft consensus. Eliminates message duplication while maintaining strict ordering guarantees across geographic partition boundaries.",
    architectureDetails: [
      "Custom zero-copy binary serialization protocol cutting CPU cache misses by 42%",
      "Dynamic backpressure propagation through non-blocking TCP pipeline rings",
      "Automated partition rebalancing across Kubernetes clusters with zero dropped frames",
      "Comprehensive telemetry integration via OpenTelemetry and eBPF kernel probes"
    ],
    metrics: [
      { label: "Throughput", value: "450k msg/s" },
      { label: "p99 Latency", value: "0.84 ms" },
      { label: "Memory Footprint", value: "68 MB/node" }
    ],
    stack: ["Rust", "Raft Consensus", "eBPF", "Tokio", "Kubernetes"],
    githubUrl: "https://github.com/example/aetherscale",
    liveUrl: "https://aetherscale.example.internal",
    status: "Enterprise Active",
    featured: true,
    year: "2025"
  },
  {
    id: "nexus-canvas",
    title: "Nexus Spatial Collaboration Canvas",
    category: "spatial",
    tagline: "Infinite-canvas 2D/3D collaborative design engine running at 120 FPS.",
    summary: "Built from the ground up on WebGL shaders and WebAssembly CRDT state machines. Supports 100+ simultaneous collaborators with real-time cursor interpolations and branchable multi-user history trees.",
    architectureDetails: [
      "Hybrid spatial QuadTree indexing for rendering 50,000 vector primitives concurrently",
      "WebRTC DataChannel p2p fallback mesh reducing server relay bandwidth by 78%",
      "Conflict-free Replicated Data Types (CRDT) with state-based compaction",
      "Sub-frame predictive touch & stylus input interpolation for zero perceived stroke latency"
    ],
    metrics: [
      { label: "Render Frame Rate", value: "120 FPS" },
      { label: "Concurrent Peers", value: "100+ / room" },
      { label: "Input Jitter", value: "< 2 ms" }
    ],
    stack: ["TypeScript", "WebGL", "Rust Wasm", "WebRTC", "React 19"],
    githubUrl: "https://github.com/example/nexus-canvas",
    liveUrl: "https://nexuscanvas.example.internal",
    status: "Production",
    featured: true,
    year: "2025"
  },
  {
    id: "chronos-db",
    title: "Chronos Time-Series Ingestion",
    category: "distributed",
    tagline: "Columnar time-series storage engine with tiered cold-storage migration.",
    summary: "Purpose-built distributed time-series engine designed to handle erratic IoT sensor bursts. Features dual-tier LSM trees that write directly to local NVMe before transparent compaction into object stores.",
    architectureDetails: [
      "Gorilla-style floating point delta compression achieving 11:1 compression ratio",
      "Predictive ingest queue with token-bucket rate smoothing and adaptive shard splitting",
      "Native SQL query engine compiler generating vectorized SIMD instructions"
    ],
    metrics: [
      { label: "Data Ingest Rate", value: "1.2 GB/sec" },
      { label: "Compression Ratio", value: "11 : 1" },
      { label: "Cold Read Speed", value: "340 MB/sec" }
    ],
    stack: ["Go", "RocksDB", "Apache Arrow", "PostgreSQL", "gRPC"],
    githubUrl: "https://github.com/example/chronos-db",
    status: "Open Source",
    featured: true,
    year: "2024"
  },
  {
    id: "vanguard-mesh",
    title: "Vanguard Zero-Trust Gateway",
    category: "cloud",
    tagline: "Cryptographic service proxy enforcing hardware-backed identity verification.",
    summary: "Transparent edge reverse-proxy providing mTLS mutual authentication, hardware security module (HSM) attestation, and dynamic role-based access tokens with instantaneous revocation capability.",
    architectureDetails: [
      "Zero-overhead TLS session resumption with distributed Redis ticket cluster",
      "Hardware-enforced TPM 2.0 key attestation for container workloads",
      "Sub-millisecond access policy evaluation via compiled WebAssembly authorization rules"
    ],
    metrics: [
      { label: "Auth Decision Time", value: "0.15 ms" },
      { label: "Revocation Propagation", value: "< 50 ms" },
      { label: "Connection Capacity", value: "2M active" }
    ],
    stack: ["Go", "Envoy Wasm", "OpenSSL", "Redis", "Terraform"],
    githubUrl: "https://github.com/example/vanguard",
    status: "Production",
    featured: false,
    year: "2024"
  },
  {
    id: "pulse-ds",
    title: "Pulse Accessible Design System",
    category: "web",
    tagline: "Zero-dependency, mathematically tokenized component architecture for enterprise SaaS.",
    summary: "Modular React and web components built with strict keyboard navigation, full screen-reader semantic trees, and fluid typographic scale. Implemented across 14 enterprise frontend applications.",
    architectureDetails: [
      "Strict WCAG 2.1 AAA color contrast ratios across dark and light thematic modes",
      "Sub-pixel fluid layout calculations avoiding layout shifts (CLS 0.000)",
      "Zero-runtime CSS bundle generated via compile-time design token extractors"
    ],
    metrics: [
      { label: "Bundle Size", value: "14.2 KB gzip" },
      { label: "WCAG Score", value: "100 / 100" },
      { label: "CLS Rating", value: "0.000" }
    ],
    stack: ["React 19", "TypeScript", "Tailwind CSS", "Storybook", "Vitest"],
    githubUrl: "https://github.com/example/pulse-ds",
    liveUrl: "https://pulse-ds.example.internal",
    status: "Production",
    featured: false,
    year: "2024"
  },
  {
    id: "orbital-orchestrator",
    title: "Orbital Multi-Cloud Canary",
    category: "cloud",
    tagline: "Self-healing deployment orchestrator with statistical anomaly detection.",
    summary: "Cloud deployment engine executing progressive canary releases across heterogeneous AWS and GCP clusters. Automatically pauses and rolls back upon detecting subtle deviations in latency or error entropy.",
    architectureDetails: [
      "Bayesian statistical change-point detection on streaming Prometheus metrics",
      "Automated eBPF connection drain preventing abrupt in-flight request termination",
      "Declarative GitOps engine with cryptographically signed release attestations"
    ],
    metrics: [
      { label: "Rollback Trigger", value: "< 4.2 sec" },
      { label: "False Positive Rate", value: "< 0.01%" },
      { label: "Regions Covered", value: "18 Global" }
    ],
    stack: ["Python", "Kubernetes Operator", "Prometheus", "Docker", "GCP"],
    githubUrl: "https://github.com/example/orbital",
    status: "Production",
    featured: false,
    year: "2023"
  }
];

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    name: "Distributed & Backend Architecture",
    description: "Designing resilient systems capable of handling billions of operations with deterministic failure recovery.",
    skills: [
      { name: "Rust", level: "Production Expert", experience: "5+ Years", context: "High-concurrency systems, low-level I/O engines, custom binary formats" },
      { name: "Go", level: "Staff Level", experience: "8+ Years", context: "Microservices, gRPC backplanes, network proxies, Kubernetes operators" },
      { name: "Node.js & TypeScript", level: "Mastery", experience: "10+ Years", context: "Enterprise API servers, async event queues, tooling & full-stack core" },
      { name: "Kafka & Event Streams", level: "Architect", experience: "7+ Years", context: "Partition topologies, consumer group tuning, dead-letter recovery" },
      { name: "PostgreSQL & Cloud SQL", level: "Advanced", experience: "9+ Years", context: "Query plan optimization, custom indexing, write-ahead log replication" }
    ]
  },
  {
    name: "Modern Frontend & Spatial Interfaces",
    description: "Crafting fluid, high-frame-rate user interfaces with mathematical typography and accessible ergonomics.",
    skills: [
      { name: "React 19 & Next.js", level: "Mastery", experience: "8+ Years", context: "Server components, fine-grained state, suspense orchestration, hook primitives" },
      { name: "WebGL & Three.js", level: "Advanced", experience: "4+ Years", context: "3D camera rigs, custom vertex/fragment shaders, procedural environments" },
      { name: "Motion & Interaction", level: "Expert", experience: "6+ Years", context: "Physics-based spring dynamics, gesture tracking, layout transitions" },
      { name: "Tailwind CSS & Token Systems", level: "Mastery", experience: "6+ Years", context: "Mathematical spacing, dark mode color grading, strict zero-pill discipline" },
      { name: "WebAssembly (Wasm)", level: "Production", experience: "4+ Years", context: "Browser-side data compaction, CRDT reconciliation, compute offload" }
    ]
  },
  {
    name: "Infrastructure, Cloud & Reliability",
    description: "Operating multi-region infrastructure with automated verification and zero-downtime posture.",
    skills: [
      { name: "Kubernetes & Containers", level: "Staff Level", experience: "7+ Years", context: "Custom CRDs, multi-cluster federation, resource quotas, autoscaling" },
      { name: "Terraform & IaC", level: "Advanced", experience: "6+ Years", context: "Immutable cloud state, multi-account VPC peering, least-privilege IAM" },
      { name: "Observability (OpenTelemetry)", level: "Architect", experience: "5+ Years", context: "Distributed tracing, high-cardinality metrics, flame graphs, eBPF" },
      { name: "Security & Zero Trust", level: "Advanced", experience: "6+ Years", context: "mTLS, OAuth2 / OIDC, cryptographic signing, automated key rotation" }
    ]
  }
];

export const ARCHITECTURAL_PRINCIPLES: ArchitecturalPrinciple[] = [
  {
    number: "01",
    title: "Preserve Source Authenticity Above All",
    summary: "Original data and human identity must remain unpolluted by artificial approximation.",
    manifesto: "In computing as in design, true fidelity means respecting the source. We never apply destructive filters, synthetic distortions, or artificial facsimiles when genuine human reality is at stake. The system must adapt its perspective around the truth, rather than bending the truth to fit the system.",
    implementationExample: "Immutable asset pipelines where raw cryptographic hashes and pixel buffers are displayed in their pure original geometry without synthetic interpolations."
  },
  {
    number: "02",
    title: "Zero-Loss State Synchronization",
    summary: "Distributed nodes must converge deterministically regardless of transient network partitions.",
    manifesto: "Failure is not an exception; it is a baseline reality of physical networking. Architectures must be structured around commutative and associative state transformations where eventual consistency is provable rather than hoped for.",
    implementationExample: "Log-structured merge engines and CRDT lattices that allow offline writes to resolve cleanly upon network reconnection without data clobbering."
  },
  {
    number: "03",
    title: "Human Perception as Latency Budget",
    summary: "Interfaces must respond within neurological threshold budgets (16ms for rendering, 100ms for I/O).",
    manifesto: "A laggy system is an unusable system. We design software around human biology: optimistic UI updates, background pipeline prefetching, and zero unnecessary visual clutter ensure human flow state remains unbroken.",
    implementationExample: "Predictive input queues with sub-frame touch interpolation and zero-blocking layout calculations."
  },
  {
    number: "04",
    title: "Explicit Invariants Over Implicit Conventions",
    summary: "System boundaries should be enforced by typed compiler guarantees and runtime assertions.",
    manifesto: "Documentation decays; type systems endure. When safety invariants are encoded into compiler rules, entire classes of security vulnerabilities, race conditions, and architectural drift become structurally impossible.",
    implementationExample: "Rust ownership models and TypeScript branded types preventing cross-tenant data leakage at compile time."
  }
];

export const CAREER_MILESTONES: CareerMilestone[] = [
  {
    role: "Staff Systems Architect",
    company: "Core Infrastructure & Platforms",
    period: "2023 — Present",
    location: "San Francisco, CA",
    highlights: [
      "Architected the next-generation event routing fabric powering 120M+ requests per minute with 99.999% SLA.",
      "Spearheaded multi-region cloud disaster recovery protocol, reducing MTTR from 14 minutes to 8 seconds.",
      "Mentored 24 senior engineers and established company-wide architectural review RFC standards."
    ],
    technologies: ["Rust", "Kubernetes", "Kafka", "Go", "OpenTelemetry"]
  },
  {
    role: "Senior Distributed Systems Engineer",
    company: "Real-Time Cloud Systems",
    period: "2020 — 2023",
    location: "San Francisco, CA",
    highlights: [
      "Engineered low-latency stream processing pipeline cutting compute spend by $1.8M annually.",
      "Developed high-concurrency WebRTC data synchronizer for collaborative canvas tools.",
      "Led the migration of legacy monolith services into bounded domain micro-runtimes."
    ],
    technologies: ["Go", "TypeScript", "PostgreSQL", "WebRTC", "Docker"]
  },
  {
    role: "Full-Stack Software Engineer & Lead",
    company: "Digital Product Labs",
    period: "2017 — 2020",
    location: "New York, NY",
    highlights: [
      "Built resilient client-side web applications and serverless micro-backends.",
      "Created internal UI component library adopted across 6 cross-functional engineering squads.",
      "Implemented automated CI/CD pipelines with cryptographic code signing and vulnerability audits."
    ],
    technologies: ["React", "TypeScript", "Node.js", "GraphQL", "AWS"]
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    quote: "Rajiv has the rare ability to bridge low-level systems engineering with pristine visual design. His distributed event mesh became the most rock-solid component of our infrastructure, running without a hiccup through Black Friday spikes.",
    author: "Elena Rostova",
    role: "VP of Engineering",
    company: "Global Scale Platforms",
    avatarText: "ER"
  },
  {
    quote: "What sets Rajiv apart is his uncompromising insistence on authenticity and craftsmanship. Whether optimizing a memory allocation loop or designing an interactive 3D viewport, he never takes lazy shortcuts.",
    author: "Marcus Chen",
    role: "Principal Infrastructure Architect",
    company: "CloudCore Systems",
    avatarText: "MC"
  },
  {
    quote: "Working with Rajiv elevated our entire engineering department. He transformed our ad-hoc microservices into an orderly, mathematically sound system with zero-downtime deployments.",
    author: "Sarah Lindqvist",
    role: "Director of Software Engineering",
    company: "FinTech Networks",
    avatarText: "SL"
  }
];
