import { Outlet } from "react-router-dom";
import Header from "../components/common/Header";
import Footer from "../components/common/Footer";
import ScrollToTop from "../components/common/ScrollToTop";
import SEO from "../components/common/SEO";

export default function MainLayout() {
  return (
    <div className="min-h-screen bg-white text-slate-950">
      <SEO />
      <ScrollToTop />
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
}
