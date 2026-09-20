export const personalInfo = {
  name: "Wahid Sabiri",
  role: "Full Stack Developer & Digital Designer",
  tagline:
    "Building web applications, desktop software, and digital solutions for businesses.",
  email: "wahid4736361@gmail.com",
  phone: "+93 (0) 730 3200 11",
  location: "Kabul, Afghanistan",
  bio: "I'm a freelance full-stack developer and digital designer with professional experience dating back to 2020. I build modern web applications, business management systems, and desktop applications, with a focus on turning real-world business requirements into practical and intuitive software. I also have experience in logo and visual identity design.",
  social: {
    github: "https://github.com/itiswahid",
    linkedin: "https://www.linkedin.com/in/wahidsabiri/",
    twitter: "https://x.com/wahid_sabiri",
    whatsapp:
      "https://wa.me/93730320011?text=Hi%20Wahid%2C%20I%27d%20like%20to%20order%20a%20website%20or%20app.%20Here%27s%20what%20I%20have%20in%20mind%3A",
  },
  resumeUrl: "/resume.pdf",
};

export const skills = [
  {
    category: "Frontend",
    items: [
      { name: "React", level: 95 },
      { name: "Next.js", level: 90 },
      { name: "TypeScript", level: 90 },
      { name: "JavaScript", level: 95 },
      { name: "HTML/CSS", level: 95 },
      { name: "Tailwind CSS", level: 95 },
    ],
  },
  {
    category: "Backend & Database",
    items: [
      { name: "Node.js", level: 90 },
      { name: "Express.js", level: 85 },
      { name: "REST APIs", level: 90 },
      { name: "PostgreSQL", level: 85 },
      { name: "Prisma", level: 85 },
      { name: "SQLite", level: 80 },
      { name: "MongoDB", level: 75 },
      { name: "Firebase", level: 75 },
    ],
  },
  {
    category: "Tools & Design",
    items: [
      { name: "Git", level: 90 },
      { name: "Electron", level: 80 },
      { name: "Vercel", level: 85 },
      { name: "Photoshop", level: 95 },
      { name: "Illustrator", level: 50 },
      { name: "Logo Design", level: 85 },
    ],
  },
];

export const projects = [
  {
    id: 1,
    title: "Central Tyres",
    description:
      "A full-stack business management platform built for a tyre shop and vehicle garage. The system centralizes customer and vehicle records, tyre and product inventory, sales, invoicing, and business administration.",
    image: "/projects/central-tyres.jpg",
    tags: ["Next.js", "Tailwind CSS", "PostgreSQL", "Prisma"],
    liveUrl: "https://tyre-shop-d8xnmma1g-tech-mart1.vercel.app/",
    featured: true,
    features: [
      "Customer management",
      "Vehicle and customer records",
      "Invoice management",
      "Admin dashboard",
      "Product and tyre management",
      "Stock alerts",
      "Sales records",
      "Business revenue and expense tracking",
    ],
  },
  {
    id: 2,
    title: "BBCL Business Management System",
    description:
      "A desktop management application developed for Baset Baes Company Limited (BBCL), a China-based manufacturer and exporter of electric machinery including water pumps and generators. The application manages inventory, shipment records, expenses, revenue, and business reporting.",
    image: "/projects/bbcl.jpg",
    tags: ["React", "Electron", "CSS"],
    featured: true,
    features: [
      "Inventory management",
      "Shipment records",
      "Expense tracking",
      "Revenue tracking",
      "Business reporting",
      "Desktop application",
    ],
  },
  {
    id: 3,
    title: "Hadia Moarif High School SMIS",
    description:
      "A school management and information system developed for Hadia Moarif High School. The web application helped manage student attendance, marks, assignments, and other school administration activities.",
    image: "/projects/hadia-moarif.jpg",
    tags: ["React", "Node.js", "MongoDB", "Express.js", "Redux"],
    liveUrl: "https://smis.hadia.edu.af/",
    featured: true,
    features: [
      "Student management",
      "Attendance management",
      "Marks and grades",
      "Assignment management",
      "School administration",
      "Student information management",
    ],
  },
];

export const experience = [
  {
    company: "Freelance",
    position: "Full Stack Developer & Digital Designer",
    period: "2020 - Present",
    description:
      "Working independently with clients to design and develop websites, full-stack web applications, desktop applications, business management systems, and digital designs. Responsibilities include requirements analysis, UI development, backend architecture, database design, deployment, and ongoing improvements.",
  },
];

export const education = [
  {
    institution: "COMSATS University Islamabad, Lahore Campus",
    degree: "Bachelor of Science in Computer Science (BSCS)",
    period: "Graduated 2020",
    description:
      "Studied computer science with a focus on software development, programming, databases, and computer systems.",
  },
  {
    institution: "Kabul University",
    degree: "Arts",
    period: "5 Semesters",
    description: "Completed five semesters of study in the Arts program.",
  },
];

export const designWork = [
  {
    title: "Afghanistan Youth Leaders Assembly (AYLA)",
    description: "Logo design for the Afghanistan Youth Leaders Assembly.",
    url: "https://www.linkedin.com/company/afghanistan-youth-leaders-assembly-ayla/",
  },
  {
    title: "Green Universe Environmental Organization",
    description: "Logo design for Green Universe Environmental Organization.",
  },
];
