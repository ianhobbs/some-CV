import {
  AmbitLogo,
  BarepapersLogo,
  BimLogo,
  CDGOLogo,
  ClevertechLogo,
  ConsultlyLogo,
  EvercastLogo,
  Howdy,
  JarockiMeLogo,
  JojoMobileLogo,
  Minimal,
  MobileVikingsLogo,
  MonitoLogo,
  NSNLogo,
  ParabolLogo,
  TastyCloudLogo,
  YearProgressLogo,
} from "@/images/logos";
import { GitHubIcon, LinkedInIcon, XIcon } from "@/components/icons";

export const RESUME_DATA = {
  name: "Ian Hobbs",
  initials: "IJ",
  location: "Sydney, Australia, EST",
  locationLink: "https://www.google.com/maps/place/Sydney",
  about:
    "Creative with a focus on Web, Photomedia and Coding",
  summary:
    "As a Full Stack Engineer, I have successfully taken multiple products from 0 to 1. I lead teams effectively, ensuring an environment where people can do their best work. Currently, I work mostly with TypeScript, React, Node.js, and GraphQL. I have over 20 years of experience in working remotely with companies all around the world.",
  avatarUrl: "https://avatars.githubusercontent.com/ianhobbs",
  personalWebsiteUrl: "https://jarocki.me",
  contact: {
    email: "bartosz.jarocki@hey.com",
    tel: "+48530213401",
    social: [
      {
        name: "GitHub",
        url: "https://github.com/BartoszJarocki",
        icon: GitHubIcon,
      },
      {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/bjarocki/",
        icon: LinkedInIcon,
      },
      {
        name: "X",
        url: "https://x.com/BartoszJarocki",
        icon: XIcon,
      },
    ],
  },
  education: [
    {
      school: "Wrocław University of Technology",
      degree: "Bachelor's Degree in Control systems engineering and Robotics",
      start: "2007",
      end: "2010",
    },
    {
      school: "Wrocław University of Technology",
      degree: "Bachelor's Degree in Control systems engineering and Robotics",
      start: "2007",
      end: "2010",
    },
  ],
  work: [
    {
      company: "Ian Hobbs Media",
      link: "https://ianhobbsmedia.com.au",
      badges: [],
      title: "Owner",
      logo: ParabolLogo,
      start: "2020",
      end: "2024 ongoing",
      description:
        "Web production. Experience includes; Videographer, Editor, Photographer,Front-end development, Animator, Storyboarding, Prototype development,Design, Server management and Data management. Client and project management. Art direction and concept development. Media strategy and Editorial strategy.",
    },
    {
      company: "Codey",
      link: "https://codey.com.au",
      badges: [],
      title: "Owner",
      logo: ClevertechLogo,
      start: "2011",
      end: "2024 ongoing",
      description:
        "Hosting server and site maintenance. Server management and Data management. Client service. Backup management. Site optimisation. Threat mitigation",
    },
    {
      company: "Sydney University SCA",
      link: "https://www.sydney.edu.au/arts/schools/sydney-college-of-the-arts.html",
      badges: ["Contract"],
      title: "Research Officer",
      logo: JojoMobileLogo,
      start: "10/2018",
      end: "12/2018",
      description:
        "Contract to research, collect and promote staff research outputs for University pages. Videography, Photography and research development. Prototyping web pages",
    },
    {
      company: "Sydney University SCA",
      link: "https://www.sydney.edu.au/arts/schools/sydney-college-of-the-arts.html",
      badges: ["Sessional"],
      title: "Lecturer",
      logo: NSNLogo,
      start: "2010",
      end: "2014",
      description: "Design and deliver subjects in Photography and Electronic & New Media.",
    },
    {
      company: "Insearch UTS",
      link: "https://utscollege.edu.au",
      badges: ["Sessional"],
      title: "Lecturer",
      logo: NSNLogo,
      start: "2010",
      end: "2014",
      description: "Deliver subjects in Digital Literacy",
    },
    {
      company: "SAE + Quamtum",
      link: "https://sae.edu.au/",
      badges: ["Sessional"],
      title: "Lecturer",
      logo: NSNLogo,
      start: "2007",
      end: "2010",
      description: "Deliver courses in Web, Design, Video and Animation. Audio",
    },
    {
      company: "University of Newcastle. Fine Arts Faculty",
      link: "https://www.newcastle.edu.au",
      badges: ["Sessional"],
      title: "Lecturer",
      logo: NSNLogo,
      start: "2001",
      end: "2006",
      description: "Design and deliver courses in Digital Imaging, Video",
    },
    {
      company: "University of Western Sydney. Communications & Design.",
      link: "https://www.westernsydney.edu.au",
      badges: ["Sessional"],
      title: "Lecturer",
      logo: NSNLogo,
      start: "2001",
      end: "2006",
      description: "Design and New Media, Web and Time based media.",
    },
    {
      company: "Enmore TAFE",
      link: "https://www.tafensw.edu.au/design-centre-enmore",
      badges: ["Sessional"],
      title: "Teacher",
      logo: NSNLogo,
      start: "2001",
      end: "2006",
      description: "Design and deliver courses in New media, Flash, Web Photo-media, Design. Animation",
    }
  ],
  skills: [
    "Photography",
    "Studio Photography",
    "PHP-CMS",
    "JavaScript",
    "CSS",
    "Tailwind",
    "Project Management",
    "Web Production",
    "Animation",
    "After Effects",
    "Audio production"
  ],
  projects: [
    {
      title: "Clear Control Site",
      techStack: [
        "KirbyCMS",
        "Tailwind",
        "AlpineJS",
        "GSAP",
        "Design",
        "Content"
      ],
      description: "A business website with seductive animations and strong case study representations",
      logo: ConsultlyLogo,
      link: {
        label: "clearcontrol.com.au",
        href: "https://www.clearcontrol.com.au/",
      },
    },
    {
      title: "Cementa Site",
      techStack: ["PerchCMS", "AlpineJS", "Blythe", "Content",""],
      description:
        "A festival site showcasing artists and Festival events",
      logo: MonitoLogo,
      link: {
        label: "cementa.com.au",
        href: "https://cementa.com.au/",
      },
    },
    {
      title: "A Thousand Words",
      techStack: ["PerchCMS", "AlpineJS", "Animation"],
      description:
        "A website of the Museum of Sydney 'A Thousand Words' exhibition",
      logo: JarockiMeLogo,
      link: {
        label: "atwonline.com.au",
        href: "https://atwonline.com.au",
      },
    },
    {
      title: "Minimal",
      techStack: ["Side Project", "Next.js", "Puppeteer"],
      description:
        "Minimalist calendars, habit trackers and planners generator",
      logo: Minimal,
      link: {
        label: "useminimal.com",
        href: "https://useminimal.com/",
      },
    },
    {
      title: "Barepapers",
      techStack: ["Side Project", "Next.js", "Puppeteer"],
      description:
        "Generates beautiful wallpapers using random shapes and gradients",
      logo: BarepapersLogo,
      link: {
        label: "barepapers.com",
        href: "https://barepapers.com/",
      },
    },
    {
      title: "Year progress",
      techStack: ["Side Project", "TypeScript", "Next.js"],
      description: "Tracks current year progress and displays a countdown",
      logo: YearProgressLogo,
      link: {
        label: "getyearprogress.com",
        href: "https://getyearprogress.com/",
      },
    },
    {
      title: "Parabol",
      techStack: [
        "Full Stack Developer",
        "TypeScript",
        "React",
        "Node.js",
        "GraphQL",
      ],
      description:
        "The Agile meeting co-pilot that delivers better meetings with less effort",
      logo: ParabolLogo,
      link: {
        label: "github.com",
        href: "https://parabol.co/",
      },
    },
    {
      title: "Evercast",
      techStack: [
        "Lead Frontend Developer",

        "TypeScript",
        "React",
        "Node.js",
        "GraphQL",
      ],
      description:
        "Creative collaboration platform that combines video conferencing and HD media streaming",
      logo: EvercastLogo,
      link: {
        label: "evercast.us",
        href: "https://www.evercast.us/",
      },
    },
    {
      title: "Mobile Vikings",
      techStack: ["Lead Android Developer", "Android", "Kotlin"],
      description:
        "Android application for leading virtual mobile operator in Poland",
      logo: MobileVikingsLogo,
      link: {
        label: "mobilevikings.pl",
        href: "https://mobilevikings.pl/",
      },
    },
    {
      title: "Howdy",
      techStack: ["Lead Android Developer", "Android", "Kotlin"],
      description:
        "Howdy is a place for you to join communities you care about",
      logo: Howdy,
      link: {
        label: "play.google.com",
        href: "https://howdy.co/",
      },
    },
    {
      title: "Tastycloud",
      techStack: ["Lead Android Developer", "Android", "Kotlin"],
      description:
        "Android application for managing and displaying restaurant menus in kiosk mode",
      logo: TastyCloudLogo,
      link: {
        label: "tastycloud.fr",
        href: "https://www.tastycloud.fr/",
      },
    },
    {
      title: "Ambit",
      techStack: ["Lead Android Developer", "Android", "Kotlin"],
      description:
        "Android application that helps with sharing your contact details",
      logo: AmbitLogo,
    },
    {
      title: "Bim",
      techStack: ["Lead Android Developer", "Android", "Kotlin"],
      description:
        "Android application that helps with booking a table in a restaurants",
      logo: BimLogo,
    },
    {
      title: "Canal Digital GO",
      techStack: ["Lead Android Developer", "Android", "Kotlin"],
      description:
        "Video streaming mobile application for Canal Digital subscribers",
      logo: CDGOLogo,
    },
  ],
} as const;
