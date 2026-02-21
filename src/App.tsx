import { useEffect } from "react";
import { useLocation, BrowserRouter, Routes, Route } from "react-router-dom";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import Careers from "./pages/Careers";
import Contact from "./pages/Contact";

// Products
import TenMinDelivery from "./pages/products/TenMinDelivery";
import BachelorWallet from "./pages/products/BachelorWallet";
import StoreBilling from "./pages/products/StoreBilling";

// Services
import Pharmaceuticals from "./pages/services/Pharmaceuticals";
import ProjectOutsourcing from "./pages/services/ProjectOutsourcing";
import ITConsulting from "./pages/services/ITConsulting";
import BPOServices from "./pages/services/BPOServices";
import Internship from "./pages/services/Internship";

const queryClient = new QueryClient();

/* ✅ Scroll To Top Component (inside same file) */
function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0); // instantly scroll to top
  }, [pathname]);

  return null;
}

function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <div className="flex-1">{children}</div>
      <Footer />
    </div>
  );
}

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <ScrollToTop /> {/* ✅ Added here */}
        <Routes>
          <Route path="/" element={<Layout><Index /></Layout>} />
          <Route path="/careers" element={<Layout><Careers /></Layout>} />
          <Route path="/contact" element={<Layout><Contact /></Layout>} />

          {/* Products */}
          <Route path="/products/ten-min-delivery" element={<Layout><TenMinDelivery /></Layout>} />
          <Route path="/products/bachelor-wallet" element={<Layout><BachelorWallet /></Layout>} />
          <Route path="/products/store-billing" element={<Layout><StoreBilling /></Layout>} />

          {/* Services */}
          <Route path="/services/pharmaceuticals" element={<Layout><Pharmaceuticals /></Layout>} />
          <Route path="/services/project-outsourcing" element={<Layout><ProjectOutsourcing /></Layout>} />
          <Route path="/services/it-consulting" element={<Layout><ITConsulting /></Layout>} />
          <Route path="/services/bpo-services" element={<Layout><BPOServices /></Layout>} />
          <Route path="/services/internship" element={<Layout><Internship /></Layout>} />

          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
