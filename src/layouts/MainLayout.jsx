import { Outlet } from "react-router-dom";
import Header from "../components/common/Header";
import Footer from "../components/common/Footer";
import ScrollToTop from "../components/common/ScrollToTop";

export default function MainLayout() {
  return (
    <div className="min-h-screen bg-white text-slate-950">
      <ScrollToTop />
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
}
