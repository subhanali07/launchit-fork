import type { IndustryData } from "./types";
import img from "../../assets/industry-landscaping.jpg";
import extraImg from "../../assets/industry-landscaping-extra.jpg";
import webImg from "../../assets/industry-landscaping-web.jpg";

const landscaping: IndustryData = {
  slug: "landscaping",
  image: img,
  motto: "Your work speaks for itself, a website just makes sure it gets heard.",
  gallery: [extraImg, webImg],
  name: "Landscaping",
  noun: "landscaping business",
  title: "Landscaping Website Design & Development | Launchit",
  description:
    "Websites for landscaping, lawn care and hardscaping businesses. Project galleries, before-and-after photos, seasonal services, service areas and online estimates.",
  eyebrow: "landscaping website design",
  headline:
    "Websites for landscaping businesses that turn curb-appeal searches into estimate requests.",
  subheadline:
    "You sell beautiful outdoor spaces, but if your website can't show them off, customers can't picture hiring you. We build sites that display your projects and make requesting an estimate effortless.",
  painIntro:
    "Landscaping is visual work, yet most landscaping websites make it almost impossible to see the quality of the work.",
  pains: [
    {
      title: "Projects are hidden",
      desc: "If potential customers can't see photos of your lawns, patios and gardens, they have no reason to trust your work.",
    },
    {
      title: "Services aren't defined",
      desc: "Lawn care, landscaping, hardscaping and garden design get blended together. Clear distinctions help customers pick you.",
    },
    {
      title: "No estimate flow",
      desc: "A customer ready to spend on a patio shouldn't have to hunt for a contact form.",
    },
    {
      title: "Seasonality ignored",
      desc: "Spring cleanups, winter services and seasonal offers need their own moment on the site.",
    },
    {
      title: "Weak service areas",
      desc: "If your coverage area is unclear, customers assume you don't serve them.",
    },
    {
      title: "Not designed for the phone",
      desc: "Homeowners browse on phones while sitting in the very yard that needs work.",
    },
  ],
  buildIntro:
    "We build landscaping websites around the two things that matter: showing your work and making it easy to ask for a quote.",
  builds: [
    {
      title: "Project gallery",
      desc: "A portfolio built for before-and-after photos of lawns, patios, fire pits and full garden redesigns.",
    },
    {
      title: "Service pages",
      desc: "Lawn care, landscaping, hardscaping and garden design, each explained on its own page.",
    },
    {
      title: "Estimate request form",
      desc: "A short form that captures the project type, size and timeline.",
    },
    {
      title: "Seasonal services",
      desc: "Highlight spring, summer, fall and winter services so you win year-round work.",
    },
    {
      title: "Service-area pages",
      desc: "Show the neighbourhoods you cover and the projects you've done there.",
    },
    {
      title: "Mobile-first design",
      desc: "Fast, photo-first pages that load instantly on any phone.",
    },
  ],
  featuresIntro:
    "The features that turn a landscaping website into a steady source of estimate requests.",
  features: [
    {
      title: "Project showcase",
      desc: "Organise your gallery by project type, lawn care, hardscaping, full design, with location and scope notes.",
      benefit: "Customers see themselves in your past work and picture you doing theirs.",
    },
    {
      title: "Before-and-after comparisons",
      desc: "Slider or side-by-side comparisons that make the transformation obvious.",
      benefit: "Proof that's impossible to argue with, and it wins trust fast.",
    },
    {
      title: "Estimate request form",
      desc: "Capture project type, rough size, timing and budget expectations in one short form.",
      benefit: "Every enquiry arrives ready to quote.",
    },
    {
      title: "Seasonal services pages",
      desc: "Dedicated pages for spring cleanups, fall leaf removal and winter prep.",
      benefit: "You stay busy in every season, not just summer.",
    },
    {
      title: "Service-area focus",
      desc: "Dedicated area pages with local project photos.",
      benefit: "You win local searches and look established in each area you serve.",
    },
    {
      title: "Fast, search-friendly build",
      desc: "Clear headings, fast images and tidy URLs throughout.",
      benefit: "Google can understand and rank your pages, and visitors stick around.",
    },
  ],
  structureIntro:
    "A structure that mirrors how customers actually choose a landscaper.",
  structure: [
    { title: "Home", desc: "your best work up front" },
    { title: "Services", desc: "lawn care, landscaping, hardscaping, garden design" },
    { title: "Our Work", desc: "project gallery with before-and-after" },
    { title: "Seasonal", desc: "what we do in each season" },
    { title: "Service Areas", desc: "where we work" },
    { title: "About", desc: "your team and approach" },
    { title: "Contact / Get an Estimate", desc: "request a quote" },
  ],
  whyIntro:
    "Your website is your first portfolio. It should look as considered as the gardens you build.",
  whys: [
    {
      title: "Custom design, not templates",
      desc: "Built around your projects, your services and your area.",
    },
    {
      title: "Mobile-first by default",
      desc: "A photo-first design that loads fast on phones, where most homeowners browse.",
    },
    {
      title: "Fast from the start",
      desc: "Optimised galleries that don't slow down on mobile connections.",
    },
    {
      title: "Built to estimate",
      desc: "Estimate requests are a tap away from every page.",
    },
    {
      title: "SEO-friendly structure",
      desc: "Clean titles and service-area pages that help you rank locally.",
    },
    {
      title: "Direct communication",
      desc: "You work directly with the team building the site, end to end.",
    },
  ],
  processIntro: "From first conversation to a live site your customers can browse and book.",
  process: [
    {
      title: "Tell us about your business",
      desc: "The services you offer, the projects you're proud of and the areas you cover.",
    },
    {
      title: "Plan the website",
      desc: "We structure pages around how homeowners choose a landscaper.",
    },
    {
      title: "Design",
      desc: "A design that makes your projects the star of the show.",
    },
    {
      title: "Development",
      desc: "Gallery, estimate forms and service pages built and tested.",
    },
    {
      title: "Launch",
      desc: "We launch, get your site into Google and check everything.",
    },
    {
      title: "Improve",
      desc: "We keep refining based on what turns visitors into enquiries.",
    },
  ],
  faqs: [
    {
      question: "What should a landscaping website include?",
      answer:
        "A strong project gallery, clear service pages, seasonal services, your coverage area and an easy estimate request form. We build around how homeowners decide.",
    },
    {
      question: "Can I show before-and-after projects?",
      answer:
        "Yes. We build galleries with before-and-after comparisons so customers can see the transformation, not just read about it.",
    },
    {
      question: "How do estimate requests work?",
      answer:
        "A short form captures the project type, rough size and timeline, and sends you a lead ready to quote.",
    },
    {
      question: "Can I highlight seasonal services?",
      answer:
        "We can add seasonal pages, spring cleanups, fall leaf removal, winter prep, so you win work all year round.",
    },
    {
      question: "Will it help me show up for local searches?",
      answer:
        "We build service-area pages and clean structure that give you a fair shot at searches like 'landscaper near me'. No guarantees, just the fundamentals right.",
    },
    {
      question: "Can customers request an estimate from their phone?",
      answer:
        "Yes. Every page is mobile-first, so homeowners can browse projects and request estimates from the yard.",
    },
    {
      question: "How long does a landscaping website take?",
      answer: "Typically 2-6 weeks depending on scope, with a clear timeline up front.",
    },
  ],
  cta: {
    title: "Ready for a website that shows off your work as well as you do?",
    text: "Turn searches into estimate requests with a site built around your projects.",
  },
  related: ["roofing", "moving-companies", "salons"],
};

export default landscaping;
