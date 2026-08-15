import type { IndustryData } from "./types";
import autoDetailing from "./auto-detailing";
import cleaningServices from "./cleaning-services";
import landscaping from "./landscaping";
import movingCompanies from "./moving-companies";
import roofing from "./roofing";
import photographers from "./photographers";
import salons from "./salons";
import bakeries from "./bakeries";
import hotelManagementSystems from "./hotel-management-systems";
import schoolSites from "./school-sites";
import ecommerce from "./ecommerce";

export type { IndustryData, IndustryItem, IndustryFeature, IndustryFaq } from "./types";

export const industries: IndustryData[] = [
  autoDetailing,
  cleaningServices,
  landscaping,
  movingCompanies,
  roofing,
  photographers,
  salons,
  bakeries,
  hotelManagementSystems,
  schoolSites,
  ecommerce,
];

export function getIndustry(slug: string): IndustryData | undefined {
  return industries.find((industry) => industry.slug === slug);
}

export const industryRoutes = industries.map((industry) => `/industries/${industry.slug}`);
