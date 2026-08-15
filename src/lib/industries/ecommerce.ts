import type { IndustryData } from "./types";
import img from "../../assets/industry-ecommerce.jpg";
import extraImg from "../../assets/industry-ecommerce-extra.jpg";
import webImg from "../../assets/industry-ecommerce-web.jpg";

const ecommerce: IndustryData = {
  slug: "ecommerce",
  image: img,
  motto: "Your store should never close. Sell while you sleep.",
  gallery: [extraImg, webImg],
  name: "E-commerce Stores",
  noun: "online store",
  title: "E-commerce Website Design & Development | Launchit",
  description:
    "Websites for online stores that sell. Product pages, catalogs, secure checkout, inventory and mobile-first shopping built to convert browsers into buyers.",
  eyebrow: "ecommerce website design",
  headline:
    "Websites for online stores that turn browsers into buyers.",
  subheadline:
    "Selling online is about removing friction. We build stores with clean product pages, a checkout that doesn't stall and the backend simplicity to run it yourself.",
  painIntro:
    "An online store competes with the best shopping sites on the internet. Every piece of friction is a lost sale.",
  pains: [
    {
      title: "Products are hard to browse",
      desc: "A cluttered catalog makes customers leave before they buy.",
    },
    {
      title: "Checkout is a wall",
      desc: "Every extra step loses buyers at the cart.",
    },
    {
      title: "Slow pages kill sales",
      desc: "Slow product pages cost you conversions you already earned.",
    },
    {
      title: "Hard to manage",
      desc: "If adding products is painful, the store goes stale.",
    },
    {
      title: "Not built for mobile",
      desc: "Most shopping happens on phones; a poor mobile store loses it.",
    },
    {
      title: "No trust signals",
      desc: "Missing reviews, security and return info kills the final decision.",
    },
  ],
  buildIntro:
    "We build online stores that look great, load fast and make buying feel effortless.",
  builds: [
    {
      title: "Product pages",
      desc: "Photos, descriptions, variants and reviews that sell.",
    },
    {
      title: "Catalog & categories",
      desc: "Browsable categories and search that make sense.",
    },
    {
      title: "Secure checkout",
      desc: "A fast, familiar checkout with the payment options your customers use.",
    },
    {
      title: "Inventory & orders",
      desc: "Simple management of stock, orders and shipping.",
    },
    {
      title: "Trust signals",
      desc: "Reviews, returns, security and shipping info where they matter.",
    },
    {
      title: "Mobile-first design",
      desc: "A store that feels native on a phone.",
    },
  ],
  featuresIntro:
    "The details that turn a good store into one that converts.",
  features: [
    {
      title: "Product pages",
      desc: "Clear photos, sizes, descriptions and customer reviews.",
      benefit: "Browsers gain the confidence to buy.",
    },
    {
      title: "Fast checkout",
      desc: "Minimal steps, saved details and the payment methods customers expect.",
      benefit: "Fewer abandoned carts, more completed orders.",
    },
    {
      title: "Catalog & search",
      desc: "Categories, filters and search that make products findable.",
      benefit: "Customers find what they want in seconds, not minutes.",
    },
    {
      title: "Easy management",
      desc: "Add products, update stock and fulfil orders without code.",
      benefit: "Your store stays current without a developer.",
    },
    {
      title: "Trust & reassurance",
      desc: "Reviews, returns policy, security badges and shipping info.",
      benefit: "Removes the doubts that stop a purchase.",
    },
    {
      title: "Speed & SEO",
      desc: "Fast pages and clean product URLs.",
      benefit: "You rank better and load faster than the competition.",
    },
  ],
  structureIntro:
    "A structure that walks shoppers from 'browsing' to 'paid'.",
  structure: [
    { title: "Home", desc: "best sellers, offers, the vibe" },
    { title: "Shop", desc: "categories and products" },
    { title: "Product", desc: "details, variants, reviews" },
    { title: "Cart & Checkout", desc: "a frictionless buy" },
    { title: "About", desc: "your story" },
    { title: "Shipping & Returns", desc: "the fine print, made clear" },
    { title: "Contact", desc: "support when needed" },
  ],
  whyIntro:
    "Your store competes with the best sites on the internet. It has to hold its own.",
  whys: [
    {
      title: "Custom design, not templates",
      desc: "Designed around your brand and your products.",
    },
    {
      title: "Mobile-first by default",
      desc: "Most shopping happens on phones.",
    },
    {
      title: "Built to convert",
      desc: "Every page moves shoppers toward checkout.",
    },
    {
      title: "Simple to run",
      desc: "Manage products, stock and orders yourself.",
    },
    {
      title: "SEO-friendly structure",
      desc: "Clean product URLs and fast pages.",
    },
    {
      title: "Direct communication",
      desc: "You work directly with the people building your store.",
    },
  ],
  processIntro:
    "A process that gets your store built, stocked and selling.",
  process: [
    {
      title: "Tell us about your store",
      desc: "Your products, brand and how you sell today.",
    },
    {
      title: "Plan the website",
      desc: "We map categories, products and checkout.",
    },
    {
      title: "Design",
      desc: "A store that looks as good as your product.",
    },
    {
      title: "Development",
      desc: "Products, payments, stock and orders built and tested.",
    },
    {
      title: "Launch",
      desc: "We go live and get you into Google.",
    },
    {
      title: "Improve",
      desc: "We refine the store to sell more.",
    },
  ],
  faqs: [
    {
      question: "What should an online store include?",
      answer:
        "Clean product pages, a browsable catalog, a fast checkout, inventory management and trust signals. We build around removing every reason not to buy.",
    },
    {
      question: "Can you handle payments and checkout?",
      answer:
        "Yes. We set up secure checkout with the payment methods your customers actually use.",
    },
    {
      question: "Can I manage products and orders myself?",
      answer:
        "We set up a simple backend so you can add products, update stock and fulfil orders without code.",
    },
    {
      question: "Will my store work on mobile?",
      answer:
        "Yes, everything is mobile-first because most shopping happens on phones.",
    },
    {
      question: "Can I add reviews and trust badges?",
      answer:
        "Absolutely, reviews, returns info, security badges and shipping details all get placed where they influence the buy.",
    },
    {
      question: "Will it help me rank in search?",
      answer:
        "We build clean product URLs and fast pages for a fair shot at ranking. No guarantees, just the fundamentals right.",
    },
    {
      question: "How long does an online store take?",
      answer:
        "Most stores launch in 3-8 weeks depending on catalog size and payment setup.",
    },
  ],
  cta: {
    title: "Ready to sell online without the friction?",
    text: "A store that looks great, loads fast and converts, built for you.",
  },
  related: ["bakeries", "salons", "hotel-management-systems"],
};

export default ecommerce;
