export interface IndustryItem {
  title: string;
  desc: string;
}

export interface IndustryFeature extends IndustryItem {
  benefit: string;
}

export interface IndustryFaq {
  question: string;
  answer: string;
}

export interface IndustryCta {
  title: string;
  text: string;
}

export interface IndustryData {
  slug: string;
  name: string;
  noun: string;
  image: string;
  motto: string;
  gallery: [string, string];
  title: string;
  description: string;
  eyebrow: string;
  headline: string;
  subheadline: string;
  painIntro: string;
  pains: IndustryItem[];
  buildIntro: string;
  builds: IndustryItem[];
  featuresIntro: string;
  features: IndustryFeature[];
  structureIntro: string;
  structure: IndustryItem[];
  whyIntro: string;
  whys: IndustryItem[];
  processIntro: string;
  process: IndustryItem[];
  faqs: IndustryFaq[];
  cta: IndustryCta;
  related: string[];
}
