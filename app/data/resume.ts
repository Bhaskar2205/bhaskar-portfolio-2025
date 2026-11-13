// All resume content lives here. Edit this file to update the site.
// Lines marked "VERIFY" were drafted from limited information: confirm they are
// accurate (and add real numbers where you have them) before sharing the site.

export const profile = {
  name: "Bhaskar Mamoria",
  title: "Product Consultant",
  focus: "Strategy, go-to-market & AI products",
  location: "Jaipur, India",
  email: "bhaskarmamoria55@gmail.com",
  linkedin: "https://www.linkedin.com/in/bhaskar-mamoria-22052000bm/",
  linkedinLabel: "linkedin.com/in/bhaskar-mamoria-22052000bm",
  github: "https://github.com/Bhaskar2205",
  pitch:
    "I work where users, business and engineering meet. I've led product for a B2B AI automation platform, built a marketing and events brand to 100+ campaigns, and shipped enterprise software at Nagarro and Infoobjects. I can shape the strategy, tell the story to customers, and work through trade-offs with engineers.",
  openTo: [
    "Product Consultant",
    "Product Manager",
    "Product Marketing",
    "Technical Product Consultant",
    "Product Strategy",
  ],
};

export const snapshot = [
  { label: "Focus", value: "B2B AI SaaS · Growth · GTM" },
  { label: "Background", value: "Engineering + MBA" },
  { label: "Experience", value: "5+ years building products" },
  { label: "Based in", value: "Jaipur, India" },
];

export const stats = [
  { value: "5+", label: "years taking products from idea to launch" },
  { value: "100+", label: "marketing campaigns delivered" },
  { value: "50+", label: "live events planned and executed" },
  { value: "30%", label: "faster API response for enterprise users" },
];

// Career told as product releases (shown in the animated "Career roadmap").
export const roadmap = [
  {
    version: "v1.0",
    year: "2021",
    title: "First release",
    note: "Frontend intern at FiftyFive Technologies. Launched Pink City Blog.",
  },
  {
    version: "v2.0",
    year: "2022",
    title: "Enterprise scale",
    note: "Joined Nagarro to build enterprise React and TypeScript apps. Finished B.Tech in CS.",
  },
  {
    version: "v3.0",
    year: "2023",
    title: "Performance update",
    note: "Joined Infoobjects. Cut API response times by 30% and errors by 15%.",
  },
  {
    version: "v4.0",
    year: "2024",
    title: "Product mode",
    note: "Took on product lead for Plateo AI, a B2B AI automation platform.",
  },
  {
    version: "v5.0",
    year: "2025",
    title: "Business layer",
    note: "Completed an MBA at Manipal and MIT's Generative AI program.",
  },
  {
    version: "v6.0",
    year: "Next",
    title: "Product Consultant",
    note: "Ready to bring strategy, go-to-market and AI product skills to your team.",
    next: true,
  },
];

export const playbook = [
  { step: "Discover", body: "Talk to users, map the problem and size the opportunity." },
  { step: "Define", body: "Write the PRD, set success metrics and cut scope to an MVP." },
  { step: "Build", body: "Work through trade-offs and sprints with engineering." },
  { step: "Launch", body: "Positioning, messaging and the go-to-market plan." },
  { step: "Grow", body: "Measure, learn from the data and update the roadmap." },
];

export const strengths = [
  {
    title: "Product Strategy",
    body: "Turning vague problems into a clear vision, a roadmap and a short list of priorities.",
    proof: "Led product for Plateo AI, a B2B AI automation platform.",
  },
  {
    title: "Product Marketing & GTM",
    body: "Positioning, messaging, campaigns and launches that create demand.",
    proof: "100+ campaigns and 50+ events through Pink City Blog.",
  },
  {
    title: "Technical Product Consulting",
    body: "Scoping with engineers, judging feasibility and explaining trade-offs to both tech and business teams.",
    proof: "4+ years shipping enterprise software at Nagarro and Infoobjects.",
  },
  {
    title: "Business Acumen",
    body: "Applying MBA training in markets, pricing and customer economics to product decisions.",
    proof: "MBA, Manipal University Jaipur (2025).",
  },
];

export type Role = {
  role: string;
  company: string;
  period: string;
  place: string;
  context: string;
  points: string[];
  link?: { href: string; label: string };
};

export const ventures: Role[] = [
  {
    role: "Product Lead", // VERIFY: your exact title on Plateo AI
    company: "Plateo AI",
    period: "2024 – Aug 2026",
    place: "B2B AI SaaS",
    context: "AI platform that automates repetitive business workflows for B2B teams.",
    // VERIFY: drafted from "B2B AI SaaS / automation". Replace with what you actually did and add numbers.
    points: [
      "Owned product vision, roadmap and prioritization for an AI workflow-automation platform, from problem discovery to MVP.",
      "Interviewed business users to map manual workflows, then ranked automation opportunities by impact and effort.",
      "Wrote PRDs and user stories and ran sprint planning with engineering, keeping scope tied to customer outcomes.",
      "Shaped positioning, pricing hypotheses and the go-to-market plan for B2B buyers.",
    ],
  },
  {
    role: "Founder · Brand & Growth Strategy", // VERIFY: confirm "Founder"
    company: "Pink City Blog",
    period: "2021 – Aug 2026",
    place: "Jaipur · Delhi · Mumbai",
    context: "Jaipur-born marketing and events brand for premium brands and venues.",
    points: [
      "Built and positioned a marketing and events brand serving clients across Jaipur, Delhi and Mumbai.",
      "Delivered 100+ campaigns across brand identity, performance marketing, social media and influencer partnerships.",
      "Executed 50+ events, from nightlife and corporate experiences to luxury weddings.",
      "Designed and built the brand's website end to end with React, Firebase and Tailwind.",
    ],
    link: { href: "https://pink-city-blog.vercel.app/", label: "Visit site" },
  },
];

export const engineering: Role[] = [
  {
    role: "Software Developer",
    company: "Infoobjects",
    period: "Nov 2023 – Present",
    place: "Jaipur",
    context: "Product engineering for enterprise clients.",
    points: [
      "Cut API response times by 30%, speeding up core workflows for enterprise users.",
      "Reduced system errors by 15% by tracing root causes and hardening services.",
      "Scoped and integrated enterprise third-party services into client products.",
      "Built reusable React components so new features shipped faster and looked consistent.",
    ],
  },
  {
    role: "Associate Software Developer",
    company: "Nagarro",
    period: "Apr 2022 – Jul 2023",
    place: "Jaipur",
    context: "Enterprise applications in React and TypeScript.",
    points: [
      "Delivered enterprise applications across multiple production releases.",
      "Improved UI performance by 20% on key user journeys.",
      "Turned critical client escalations into prioritized, shipped fixes.",
    ],
  },
  {
    role: "Frontend Developer Intern",
    company: "FiftyFive Technologies",
    period: "Apr 2021 – Jul 2021",
    place: "Jaipur",
    context: "Client web and mobile applications.",
    points: [
      "Built responsive, mobile-first interfaces in React and React Native.",
      "Improved cross-device compatibility and usability of client applications.",
    ],
  },
];

export const caseStudies = [
  {
    tag: "Brand & go-to-market",
    name: "Pink City Blog",
    problem: "Help premium brands and venues stand out in a crowded local market.",
    approach:
      "Positioned one brand across two service lines, marketing and events, so each fed the other. Ran campaigns across identity, performance, social and influencer channels, and built the website myself.",
    resultLabel: "Result",
    result: ["100+ campaigns", "50+ events", "3 cities"],
    link: { href: "https://pink-city-blog.vercel.app/", label: "Live site" },
  },
  {
    tag: "GenAI product",
    name: "AI Resume Analyzer",
    problem: "Job seekers rarely learn why their resume is getting rejected.",
    approach:
      "Scoped and built a GenAI tool that reads a resume and returns specific, actionable feedback using NLP models.",
    resultLabel: "Built with",
    result: ["React", "Node.js", "OpenAI", "MongoDB"],
    link: { href: "https://github.com/Bhaskar2205", label: "GitHub" },
  },
  {
    tag: "Marketplace product",
    name: "Ekart",
    problem: "Shoppers expect stock, carts and orders to update instantly.",
    approach:
      "Built an e-commerce platform with real-time data sync, user authentication and a cloud database.",
    resultLabel: "Built with",
    result: ["React", "Firebase", "Real-time sync"],
  },
];

export const skills = [
  {
    group: "Product",
    items: [
      "Product strategy & vision",
      "Roadmapping & prioritization (RICE, MoSCoW)",
      "Product discovery & user interviews",
      "PRDs & user stories",
      "MVP scoping",
      "Agile / Scrum",
      "KPIs, funnels & A/B testing",
      "Stakeholder management",
    ],
  },
  {
    group: "Marketing & GTM",
    items: [
      "Positioning & messaging",
      "Go-to-market planning",
      "Performance marketing",
      "Social & influencer campaigns",
      "Brand identity",
      "Funnel & landing-page design",
      "Event marketing",
    ],
  },
  {
    group: "Technical",
    items: [
      "GenAI & LLM integration",
      "APIs & integrations",
      "React · Next.js · TypeScript",
      "Node.js",
      "Firebase · MongoDB",
      "Docker · Git",
    ],
  },
  {
    group: "Tools",
    // VERIFY: remove any tool you haven't used
    items: ["Jira", "Figma", "Notion", "Google Analytics", "Vercel Analytics"],
  },
];

export const education = [
  {
    title: "Master of Business Administration",
    school: "Manipal University Jaipur",
    period: "2025",
    note: "CGPA 7.98",
  },
  {
    title: "B.Tech, Computer Science",
    school: "JECRC University, Jaipur",
    period: "2018 – 2022",
    note: "75.51%",
  },
];

export const certifications = [
  {
    // VERIFY: use the exact program name printed on your certificate
    title: "Generative AI (online program)",
    school: "Massachusetts Institute of Technology",
    period: "2025",
  },
];

export const languages = [
  { name: "English", level: "Professional" },
  { name: "Hindi", level: "Native" },
];
