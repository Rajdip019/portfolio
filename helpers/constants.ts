export const constant = {
  /** One line that says what kind of engineer this is. */
  positioning:
    "I solve the engineering problems that show up on the balance sheet — leading teams to design architectures that scale under real traffic, and cutting what they cost to run by orders of magnitude.",

  /**
   * Headline numbers, pulled out of the work history so they lead the page
   * instead of hiding inside bullet lists. Each one is attributed, so it is
   * clear these span roles rather than describing a single job.
   */
  impact: [
    {
      value: "60×",
      label: "lower cloud cost",
      context: "Rebuilt the risk engine on Rust + CUDA",
      company: "Chainrisk Labs",
    },
    {
      value: "$1.5B",
      label: "assets attested",
      context: "Proof of Reserves on Nitro Enclaves + Circom ZK",
      company: "Chainrisk Labs",
    },
    {
      value: "30×",
      label: "cheaper to operate",
      context: "Brought the stack in-house — ₹30,000 to under ₹1,000",
      company: "DryFi",
    },
  ],

  /** Stack grouped by concern — names must match technologiesAndLanguages. */
  stackGroups: [
    { title: "Languages", items: ["Rust", "Golang", "TypeScript"] },
    { title: "Cloud", items: ["AWS", "GCP", "Terraform", "Ansible", "Linux"] },
    { title: "Platform", items: ["Docker", "Kubernetes", "Git"] },
    { title: "Product", items: ["Node.js", "Express.js", "Next.js", "React"] },
  ],

  /** Answers the first question a remote recruiter has: where, and which hours. */
  availability: {
    status: "Open to conversations",
    location: "Kolkata, India",
    timezone: "IST · UTC+5:30",
    hours: "Remote — flexible across time zones",
  },

  personalDetails: {
    firstName: "Rajdeep",
    lastName: "Sengupta",
    email: "rajdipgupta019@gmail.com",
    picture: "/profile.jpeg",
    // Feeds canonical URLs, og:image, the sitemap and JSON-LD — keep it the
    // primary domain set in Vercel, with no trailing slash.
    website: "https://rajdeepsengupta.com",
    linkedin: "https://www.linkedin.com/in/rajdeep-sengupta/",
    github: "https://github.com/Rajdip019",
    twitter: "https://twitter.com/RajdeepS019",
    // Self-hosted from /public: no Drive sign-in wall or preview chrome, opens
    // inline, and the file ships with the deploy so it can never go stale.
    resume: "/resume.pdf"
  },
  workExperience: [
    {
      logo: "/logos/chainrisk.jpg",
      company: "Chainrisk Labs",
      link: "https://chainrisk.xyz",
      experiences: [
        {
          title: "Lead Engineer",
          location: "Remote",
          startDate: "Aug 2025",
          endDate: "Present",
          description: [
            "Lead a team of 5 engineers across the risk engine, simulation pipeline and cloud platform — owning architecture decisions, review and delivery.",
            "Built Chainrisk's Proof of Reserves over ~$1.5B in assets — attestations computed inside AWS Nitro Enclaves for hardware-isolated, verifiable execution, and proven with zero-knowledge circuits written in Circom.",
            "Extended the same proof system to real-world assets (RWA), bringing off-chain holdings under the same verifiable guarantees.",
            "Rebuilt the Monte Carlo risk engine in Rust with CUDA-accelerated kernels, replacing interpreted per-scenario execution with batched GPU compute: 60× lower cloud spend and 40× faster end-to-end runtime.",
            "Parallelised Solidity test-case execution across cores in Rust, taking Monte Carlo runs 16× faster by saturating available compute instead of running scenarios serially.",
            "Built AI agents that automate the risk-analysis workflow, turning a manual analyst process into a reproducible pipeline.",
          ]
        },
        {
          title: "Lead Cloud and Infrastructure Engineer",
          location: "Remote",
          startDate: "Jan 2024",
          endDate: "Aug 2025",
          description: [
            "Designed and built Chainrisk's entire cloud architecture from the ground up, then owned the whole infrastructure footprint end to end.",
            "Architected the automated risk-analysis pipeline that sustains 6M+ large-scale simulations per day.",
            "Standardised every environment as code — workloads containerised with Docker, orchestrated on Kubernetes, provisioned with Terraform and Ansible on AWS.",
            "Owned reliability, capacity and cost across the platform, keeping environments consistent from local development through to production.",
          ]
        },
        {
          title: "Software Engineer",
          location: "Remote",
          startDate: "Dec 2022",
          endDate: "Feb 2023",
          description: ["Built the bounty and audit platform on GCP in TypeScript and Go."]
        }
      ],
    },
    {
      logo: "/logos/immplify.png",
      company: "Immplify",
      link: "https://immplify.com",
      experiences: [
        {
          title: "Software Developer Engineer",
          location: "Remote",
          startDate: "Dec 2022",
          endDate: "Present",
          employmentType: "Part-time",
          description: ["Ship full-stack features across frontend and backend in TypeScript and Go, and manage the GCP infrastructure they run on."]
        },
        {
          title: "Software Developer Engineer Intern",
          location: "Remote",
          startDate: "April 2022",
          endDate: "Nov 2022",
          description: ["Built and launched full-stack features across frontend and backend in TypeScript and Go."]
        }
      ],
    },
    {
      logo: "/logos/dryfi.png",
      company: "DryFi",
      link: "https://dryfi.in",
      experiences: [
        {
          title: "Software Developer Engineer",
          location: "Kolkata - Office",
          startDate: "Oct 2023",
          endDate: "Jan 2024",
          description: [
            "Brought the company's software stack in-house on GCP and Firebase, taking monthly running cost from ₹30,000 to under ₹1,000 — a 30× reduction.",
            "Owned backend and infrastructure in TypeScript and Go, replacing paid third-party services with self-hosted equivalents.",
          ]
        }
      ],
    }
  ],
  sideProjects: [
    {
      title: "Flexauth",
      image: "/projects/flexauth.jpg",
      description: "Flexauth is a flexible, blazingly fast 🦀, and secure in house auth system that you can use for your project/company. Setup and deploy it on your servers.",
      link: "https://flexauth.vercel.app",
      techstack: ["Rust", "Axum", "Tokio", "MongoDB", "JWT"]
    }, 
    {
      title: "Freeflow",
      image: "/freeflow.png",
      description: "A CreativeOps tool for the design industry — manages and automates the creative process from brief to delivery.",
      link: "https://freeflow-stage.vercel.app/auth",
      techstack: [ "Next.js", "TypeScript", "GCP", "Firebase", "TailwindCSS"]
    },
    {
      title: "Smart Naka",
      image: "/projects/smart-naka.jpg",
      description: "A solution made for Assam Police to log and track stolen vehicles with real-time updates.",
      link: "https://devfolio.co/projects/smart-naka-cf33",
      techstack: ["Javascript", "AWS", "DynamoDB", "Lambda", "API Gateway"]
    },
    {
      title: "Prega.io",
      image: "/projects/prega.png",
      description: "A document manager for expectant mothers — keeps prescriptions, reports and pregnancy records in one place, shareable with doctors and family through expiring links.",
      link: "https://devfolio.co/projects/pregaio-9c81",
      techstack: ["Golang", "Firebase", "Cloud Functions"]
    },
    {
      title: "Booklee",
      image: "/booklee.png",
      description: "A marketplace for buying and selling second-hand books, with an option to donate old academic titles to NGOs.",
      // Previous link https://devfolio.co/projects/booklee-9c81 returns 404. Restore when there is a live URL.
      techstack: ["Next.js", "Azure", "CosmosDB", "TailwindCSS"]
    },
    {
      title: "Medorant",
      image: "/projects/medorant.jpg",
      description: "An app to scan and tell if a medicine is counterfeit for you or not.",
      link: "https://devfolio.co/projects/medorant-8690",
      techstack: ["AWS", "Javascript", "Lambda", "API Gateway"]
    }
  ],
  technologiesAndLanguages: [
    {
      name: "Rust",
      icon: "/tech/rust.png"
    },
    {
        name: "TypeScript",
        icon: "/tech/typescript.png",
    },
    {
      name: "Golang",
      icon: "/tech/golang.png",
    },
    {
      name: "Docker",
      icon: "/tech/docker.png",
    },
    {
      name: "Kubernetes",
      icon: "/tech/kubernetes.png",
    },
    {
      name: "AWS",
      icon: "/tech/aws.png",
    },
    {
      name: "GCP",
      icon: "/tech/gcp.png",
    },
    {
      name: "Terraform",
      icon: "/tech/terraform.png",
    },
    {
      name: "Ansible",
      icon: "/tech/ansible.png",
    },
    {
      name: "Node.js",
      icon: "/tech/nodejs.png",
    },
    {
      name: "Express.js",
      icon: "/tech/express.png",
    },
    {
      name: "Next.js",
      icon: "/tech/nextjs.png",
    },
    {
      name: "Linux",
      icon: "/tech/linux.png",
    },
    {
      name: "React",
      icon: "/tech/react.png",
    },
    {
      name: "Git",
      icon: "/tech/git.png",
    }
  ],
};
