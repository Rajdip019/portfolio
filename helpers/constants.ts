export const constant = {
  personalDetails: {
    firstName: "Rajdeep",
    lastName: "Sengupta",
    email: "rajdipgupta019@gmail.com",
    picture: "/profile-pic.jpeg",
    website: "https://rajdeep.vercel.app", // Use https here
    linkedin: "https://www.linkedin.com/in/rajdeep-sengupta/",
    github: "https://github.com/Rajdip019",
    twitter: "https://twitter.com/RajdeepS019",
    resume : "https://drive.google.com/file/d/14ttjRc7Rv9rRRzgemwG6yzoiWBIKdc6C/view?usp=sharing"
  },
  workExperience: [
    {
      logo: "https://pbs.twimg.com/profile_images/1805248090041126913/xgkui3I-_400x400.jpg",
      company: "Chainrisk Labs",
      link: "https://chainrisk.cloud",
      experiences: [
        {
          title: "Lead Cloud and Infrastructure Engineer", 
          location: "Remote",
          startDate: "Jan 2024",
          endDate: "Present",
          description: [
            "Reduced cloud cost by 60 times and made the system 40 times faster by utilizing CUDA and Rust.",
            "Made an automated risk analysis pipeline which handles 6M+ large simulations per day.",
            "Build AI agents to automate the risk analysis process.",
            "Made monte calro simulations 16 times faster by parallelizing solidity test case using rust.",
            "Working on AWS to build scalable and secure infrastructure for the company.",
          ]
        },
        {
          title: "Software Engineer",
          location: "Remote",
          startDate: "Dec 2022",
          endDate: "Feb 2022",
          description: ["Worked on GCP to built a bounty and audit platform for the company. Language used: TypeScript, Golang."]
        }
      ],
    },
    {
      logo: "https://dryfi-admin.vercel.app/icon.png",
      company: "DryFi",
      link: "https://dryfi.in",
      experiences: [
        {
          title: "Software Developer Engineer",
          location: "Kolkata - Office",
          startDate: "Oct 2023",
          endDate: "Jan 2024",
          description: ["Worked on GCP and Firebase to build scalable and secure infrastructure for the company. Reduced the company software running cost from Rs.6000 to under Rs. 50 by making things in house. Language used: TypeScript, Golang."]
        }
      ],
    },
    {
      logo: "https://pbs.twimg.com/profile_images/1675263541149077504/T3tVYAUr_400x400.png",
      company: "Immplify",
      link: "https://immplify.com",
      experiences: [
        {
          title: "Software Developer Engineer",
          location: "Remote",
          startDate: "Dec 2022",
          endDate: "Oct 2023",
          description: ["Worked on frontend and backend to build and launch full fledged features for the company. Also working on GCP to manage the infrastructure. Language used: TypeScript, Golang."]
        },
        {
          title: "Software Developer Engineer Intern",
          location: "Remote",
          startDate: "April 2022",
          endDate: "Nov 2023",
          description: ["Worked on frontend and backend to build and launch full fledged features for the company. Language used: TypeScript, Golang."]
        }
      ],
    }
  ],
  sideProjects: [
    {
      title: "Flexauth",
      image: "https://pbs.twimg.com/media/GTftzVFW8AAMDvN?format=jpg&name=4096x4096",
      description: "Flexauth is a flexible, blazingly fast 🦀, and secure in house auth system that you can use for your project/company. Setup and deploy it on your servers.",
      link: "https://flexauth.vercel.app",
      techstack: ["Rust", "Axum", "Tokio", "MongoDB", "JWT"]
    }, 
    {
      title: "Freeflow",
      image: "/freeflow.png",
      description: "Freeflow is a CreativeOps tool for the design industry. It manages and automates your creative process from brief to delivery.",
      link: "https://app.freeflow.to/",
      techstack: [ "Next.js", "TypeScript", "GCP", "Firebase", "TailwindCSS"]
    },
    {
      title: "Smart Naka",
      image: "https://assets.devfolio.co/hackathons/c319fcf0bd204d3d9acc419c27e5dcb0/projects/df09a4d61a5e402e909a21a83004cbb2/b1533b45-be7d-4c75-808d-90be602723cb.jpeg",
      description: "A solution made for Assam Police to log and track stolen vehicles with real-time updates.",
      link: "https://devfolio.co/projects/smart-naka-cf33",
      techstack: ["Javascript", "AWS", "DynamoDB", "Lambda", "API Gateway"]
    },
    {
      title: "Prega.io",
      image: "https://assets.devfolio.co/hackathons/816e9a65e49d4f1cbce272f86a59890f/projects/df09a4d61a5e402e909a21a83004cbb2/8967e1f5-d9bf-47a3-9768-583f5179ed8e.png",
      description: "A simple",
      link: "https://devfolio.co/projects/pregaio-9c81",
      techstack: ["Golang", "Firebase", "Cloud Functions"]
    },
    {
      title: "Booklee",
      image: "/booklee.png",
      description: "A medication history tracker for mothers during pregnancy.",
      link: "https://devfolio.co/projects/booklee-9c81",
      techstack: ["Next.js", "Azure", "CosmosDB", "TailwindCSS"]
    },
    {
      title: "Medorant",
      image: "https://images.rawpixel.com/image_800/cHJpdmF0ZS9sci9pbWFnZXMvd2Vic2l0ZS8yMDIyLTA1L25zMTQ2NTEtaW1hZ2Uta3d2eWQybmIuanBn.jpg",
      description: "A app to scan and tell if a medicine is counter-fit for you or not.",
      link: "https://devfolio.co/projects/medorant-8690",
      techstack: ["AWS", "Javascript", "Lambda", "API Gateway"]
    }
  ],
  technologiesAndLanguages: [
    {
      name: "Rust",
      icon: "https://img.icons8.com/?size=100&id=U41Than0pWOW&format=png&color=ffffff"
    },
    {
        name: "TypeScript",
        icon: "https://img.icons8.com/?size=512&id=uJM6fQYqDaZK&format=png",
    },
    {
      name: "Golang",
      icon: "https://img.icons8.com/?size=512&id=44442&format=png",
    },
    {
      name: "Docker",
      icon: "https://img.icons8.com/?size=512&id=22813&format=png",
    },
    {
      name: "Kubernetes",
      icon: "https://img.icons8.com/?size=512&id=cvzmaEA4kC0o&format=png",
    },
    {
      name: "AWS",
      icon: "https://img.icons8.com/?size=512&id=33039&format=png",
    },
    {
      name: "GCP",
      icon: "https://img.icons8.com/?size=512&id=WHRLQdbEXQ16&format=png",
    },
    {
      name: "Terraform",
      icon: "https://img.icons8.com/?size=512&id=kEkT1u7zTDk5&format=png",
    },
    {
      name: "Ansible",
      icon: "https://img.icons8.com/?size=512&id=iGCCE2iEmh2u&format=png",
    },
    {
      name: "Node.js",
      icon: "https://img.icons8.com/?size=512&id=54087&format=png",
    },
    {
      name: "Express.js",
      icon: "https://img.icons8.com/?size=512&id=WNoJgbzDr3i2&format=png",
    },
    {
      name: "Next.js",
      icon: "https://www.datocms-assets.com/75941/1657707878-nextjs_logo.png",
    },
    {
      name: "Linux",
      icon: "https://img.icons8.com/?size=512&id=17842&format=png",
    },
    {
      name: "React",
      icon: "https://img.icons8.com/?size=512&id=NfbyHexzVEDk&format=png",
    },
    {
      name: "Git",
      icon: "https://img.icons8.com/?size=512&id=20906&format=png",
    }
  ],
};
