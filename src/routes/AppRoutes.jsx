import { Route, Routes } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import Home from "../pages/Home";
import About from "../pages/About";
import Solutions from "../pages/Solutions";
import DigiQA from "../pages/DigiQA";
import TestRig from "../pages/TestRig";
import Industries from "../pages/Industries";
import Technology from "../pages/Technology";
import CaseStudies from "../pages/CaseStudies";
import Contact from "../pages/Contact";
import NotFound from "../pages/NotFound";

export default function AppRoutes() {
  return (
    <Routes>
      <Route element={<MainLayout />}>
        <Route index element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="solutions" element={<Solutions />} />
        <Route path="test-rig" element={<TestRig />} />
        <Route path="digiqa" element={<DigiQA />} />
        <Route path="industries" element={<Industries />} />
        <Route path="technology" element={<Technology />} />
        <Route path="case-studies" element={<CaseStudies />} />
        <Route path="contact" element={<Contact />} />
      </Route>
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}
