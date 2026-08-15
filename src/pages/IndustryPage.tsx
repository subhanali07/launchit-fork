import { Navigate } from "react-router-dom";
import { getIndustry } from "../lib/industries";
import { SubpageNav } from "../components/industry/SubpageNav";
import {
  IndustryHero,
  IndustryMotto,
  PainPoints,
  WhatWeBuild,
  WhyLaunchIt,
  IndustryProcess,
  IndustryFaq,
  RelatedIndustries,
  FinalCta,
} from "../components/industry/sections";
import { Footer } from "../sections/Footer";

export default function IndustryPage({ slug }: { slug: string }) {
  const industry = getIndustry(slug);

  if (!industry) return <Navigate to="/services" replace />;

  return (
    <div className="min-h-screen w-full bg-(--page) text-(--text)">
      <SubpageNav />
      <IndustryHero industry={industry} />
      <main>
        <IndustryMotto industry={industry} />
        <PainPoints painIntro={industry.painIntro} pains={industry.pains} />
        <WhatWeBuild intro={industry.buildIntro} builds={industry.builds} />
        <WhyLaunchIt intro={industry.whyIntro} whys={industry.whys} />
        <IndustryProcess intro={industry.processIntro} steps={industry.process} />
        <IndustryFaq
          faqs={industry.faqs}
          intro={`Straight answers about building a website for your ${industry.noun}.`}
        />
        <RelatedIndustries related={industry.related} />
      </main>
      <FinalCta industry={industry} />
      <Footer />
    </div>
  );
}
