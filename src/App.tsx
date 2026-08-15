import { useEffect } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import HomePage from "./pages/HomePage";
import ServicesPage from "./pages/ServicesPage";
import ContactPage from "./pages/ContactPage";
import PrivacyPolicyPage from "./pages/PrivacyPolicyPage";
import BlogPostPage from "./pages/BlogPostPage";
import WebDevServicePage from "./pages/WebDevServicePage";
import IndustryPage from "./pages/IndustryPage";
import { Navbar } from "./sections/Navbar";
import { ThemeToggle } from "./components/ThemeToggle";
import { CookieConsent } from "./components/CookieConsent";
import { Seo } from "./components/Seo";
import { ThemeProvider } from "./theme/ThemeProvider";

function ScrollToTop() {
  const { pathname, hash } = useLocation();
  useEffect(() => {
    if (hash) {
      const el = document.getElementById(hash.slice(1));
      if (el) {
        el.scrollIntoView({ behavior: "smooth", block: "start" });
        return;
      }
    }
    window.scrollTo(0, 0);
  }, [pathname, hash]);
  return null;
}

function App() {
  return (
    <ThemeProvider>
      <Seo />
      <Navbar />
      <ThemeToggle />
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/services" element={<ServicesPage />} />
        <Route path="/services/:slug" element={<WebDevServicePage />} />
        <Route path="/industries/auto-detailing" element={<IndustryPage slug="auto-detailing" />} />
        <Route path="/industries/cleaning-services" element={<IndustryPage slug="cleaning-services" />} />
        <Route path="/industries/landscaping" element={<IndustryPage slug="landscaping" />} />
        <Route path="/industries/moving-companies" element={<IndustryPage slug="moving-companies" />} />
        <Route path="/industries/roofing" element={<IndustryPage slug="roofing" />} />
        <Route path="/industries/photographers" element={<IndustryPage slug="photographers" />} />
        <Route path="/industries/salons" element={<IndustryPage slug="salons" />} />
        <Route path="/industries/bakeries" element={<IndustryPage slug="bakeries" />} />
        <Route path="/industries/hotel-management-systems" element={<IndustryPage slug="hotel-management-systems" />} />
        <Route path="/industries/school-sites" element={<IndustryPage slug="school-sites" />} />
        <Route path="/industries/ecommerce" element={<IndustryPage slug="ecommerce" />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/privacy" element={<PrivacyPolicyPage />} />
        <Route path="/writings/:slug" element={<BlogPostPage />} />
        <Route path="*" element={<HomePage />} />
      </Routes>
      <CookieConsent />
    </ThemeProvider>
  );
}
export default App;
