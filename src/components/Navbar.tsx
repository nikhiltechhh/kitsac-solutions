import { useState, useEffect, useRef } from "react";
import { Link, useLocation } from "react-router-dom";
import { ChevronDown, Menu, X, Phone, Mail, MapPin } from "lucide-react";
import logo from "@/assets/kitsac-logo.png";

const products = [
  {
    name: "10 Minutes Delivery",
    href: "https://coming-soon-ceyh.vercel.app/",
    external: true,
  },
  {
    name: "Bachelor Wallet",
    href: "https://bachelor-wallet.vercel.app/",
    external: true,
  },
  {
    name: "Store & Billing Management",
    href: "/products/store-billing",
    external: false,
  },
];

const services = [
  { name: "Pharmaceuticals", href: "/services/pharmaceuticals" },
  { name: "Project Outsourcing", href: "/services/project-outsourcing" },
  { name: "IT Consulting & Services", href: "/services/it-consulting" },
  { name: "BPO Services", href: "/services/bpo-services" },
  { name: "Internship", href: "/services/internship" },
];

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [productsOpen, setProductsOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [mobileProductsOpen, setMobileProductsOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const productsRef = useRef<HTMLDivElement>(null);
  const servicesRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
    setProductsOpen(false);
    setServicesOpen(false);
  }, [location]);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (productsRef.current && !productsRef.current.contains(e.target as Node)) setProductsOpen(false);
      if (servicesRef.current && !servicesRef.current.contains(e.target as Node)) setServicesOpen(false);
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <>
      {/* Top bar */}
      <div className="text-xs py-2 hidden md:block" style={{ backgroundColor: 'hsl(220 20% 10%)', fontFamily: 'Oswald, sans-serif', letterSpacing: '0.06em' }}>
        <div className="container mx-auto flex items-center justify-end gap-6">
          <a href="mailto:Contact@kitsacitsolutions.com" className="flex items-center gap-1.5 text-white/70 hover:text-white transition-colors">
            <Mail className="w-3 h-3" />
            Contact@kitsacitsolutions.com
          </a>
          <div className="flex items-center gap-1.5 text-white/70">
            <MapPin className="w-3 h-3" />
            Hyderabad, Telangana, India
          </div>
        </div>
      </div>

      {/* Main nav */}
      <nav className={`sticky top-0 z-50 bg-white transition-all duration-300 ${scrolled ? "shadow-nav border-b border-border" : "border-b border-border"}`}>
        <div className="container mx-auto flex items-center justify-between h-20 md:h-24 lg:h-28">

          {/* Logo — bigger on all breakpoints */}
          <Link to="/" className="flex items-center gap-3 flex-shrink-0 py-2">
            <img
              src={logo}
              alt="KITSAC IT Solutions"
              className="
                h-24        /* mobile: 56px */
                sm:h-16     /* sm: 64px */
                md:h-20     /* md: 80px */
                lg:h-24     /* lg: 96px */
                w-auto
                object-contain
                max-w-[200px]
                sm:max-w-[240px]
                md:max-w-[280px]
                lg:max-w-[320px]
                transition-all duration-300
              "
            />
          </Link>

          {/* Desktop nav */}
          <div className="hidden lg:flex items-center gap-8">
            <Link to="/" className="nav-link text-foreground hover:text-brand-blue">Home</Link>

            {/* Products dropdown */}
            <div className="relative" ref={productsRef}>
              <button
                className="nav-link text-foreground hover:text-brand-blue flex items-center gap-1"
                onMouseEnter={() => setProductsOpen(true)}
                onClick={() => setProductsOpen(!productsOpen)}
              >
                OUR PRODUCTS
                <ChevronDown className={`w-4 h-4 transition-transform ${productsOpen ? "rotate-180" : ""}`} />
              </button>
              {productsOpen && (
                <div
                  className="absolute top-full left-0 mt-2 w-64 bg-white shadow-xl border border-border rounded-lg overflow-hidden z-50"
                  onMouseLeave={() => setProductsOpen(false)}
                >
                 {products.map((p) =>
  p.external ? (
    <a
      key={p.href}
      href={p.href}
      className="flex items-center gap-3 px-5 py-3.5 text-sm font-semibold text-foreground hover:bg-brand-blue hover:text-white transition-colors border-b border-border last:border-0"
    >
      <span className="w-1.5 h-1.5 rounded-full bg-brand-orange flex-shrink-0" />
      {p.name}
    </a>
  ) : (
    <Link
      key={p.href}
      to={p.href}
      className="flex items-center gap-3 px-5 py-3.5 text-sm font-semibold text-foreground hover:bg-brand-blue hover:text-white transition-colors border-b border-border last:border-0"
    >
      <span className="w-1.5 h-1.5 rounded-full bg-brand-orange flex-shrink-0" />
      {p.name}
    </Link>
  )
)}
                </div>
              )}
            </div>

            {/* Services dropdown */}
            <div className="relative" ref={servicesRef}>
              <button
                className="nav-link text-foreground hover:text-brand-blue flex items-center gap-1"
                onMouseEnter={() => setServicesOpen(true)}
                onClick={() => setServicesOpen(!servicesOpen)}
              >
                OUR SERVICES
                <ChevronDown className={`w-4 h-4 transition-transform ${servicesOpen ? "rotate-180" : ""}`} />
              </button>
              {servicesOpen && (
                <div
                  className="absolute top-full left-0 mt-2 w-72 bg-white shadow-xl border border-border rounded-lg overflow-hidden z-50"
                  onMouseLeave={() => setServicesOpen(false)}
                >
                  {services.map((s) => (
                    <Link
                      key={s.href}
                      to={s.href}
                      className="flex items-center gap-3 px-5 py-3.5 text-sm font-semibold text-foreground hover:bg-brand-blue hover:text-white transition-colors border-b border-border last:border-0"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-brand-orange flex-shrink-0" />
                      {s.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            <Link to="/careers" className="nav-link text-foreground hover:text-brand-blue">CAREERS</Link>
            <Link to="/contact" className="nav-link text-foreground hover:text-brand-blue">CONTACT</Link>
          </div>

          {/* CTA */}
          <div className="hidden lg:flex items-center gap-3">
            <Link
              to="/contact"
              className="bg-brand-blue text-white font-bold text-sm uppercase tracking-widest px-6 py-3 rounded flex items-center gap-2 hover:bg-brand-orange transition-colors duration-300"
            >
              <Phone className="w-4 h-4" />
              Get In Touch
            </Link>
          </div>

          {/* Hamburger */}
          <button
            className="lg:hidden flex flex-col items-center justify-center w-10 h-10 gap-[5px] rounded focus:outline-none"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            <span className={`block h-0.5 bg-foreground transition-all duration-300 ${mobileOpen ? "w-6 rotate-45 translate-y-[7px]" : "w-6"}`} />
            <span className={`block h-0.5 bg-foreground transition-all duration-300 ${mobileOpen ? "w-0 opacity-0" : "w-4"}`} />
            <span className={`block h-0.5 bg-foreground transition-all duration-300 ${mobileOpen ? "w-6 -rotate-45 -translate-y-[7px]" : "w-6"}`} />
          </button>
        </div>

        {/* Mobile menu */}
        <div className={`lg:hidden transition-all duration-300 overflow-hidden ${mobileOpen ? "max-h-screen" : "max-h-0"}`}>
          <div className="container mx-auto pb-6 flex flex-col gap-1 border-t border-border pt-4">
            <Link to="/" className="nav-link text-foreground hover:text-brand-blue py-2.5">HOME</Link>

            {/* Mobile Products */}
            <div>
              <button
                className="nav-link text-foreground hover:text-brand-blue flex items-center justify-between w-full py-2.5"
                onClick={() => setMobileProductsOpen(!mobileProductsOpen)}
              >
                OUR PRODUCTS
                <ChevronDown className={`w-4 h-4 transition-transform ${mobileProductsOpen ? "rotate-180" : ""}`} />
              </button>
              <div className={`overflow-hidden transition-all duration-300 ${mobileProductsOpen ? "max-h-64" : "max-h-0"}`}>
                {products.map((p) => (
                  <Link key={p.href} to={p.href} className="block py-2 pl-4 text-sm font-semibold text-muted-foreground hover:text-brand-blue">
                    — {p.name}
                  </Link>
                ))}
              </div>
            </div>

            {/* Mobile Services */}
            <div>
              <button
                className="nav-link text-foreground hover:text-brand-blue flex items-center justify-between w-full py-2.5"
                onClick={() => setMobileServicesOpen(!mobileServicesOpen)}
              >
                OUR SERVICES
                <ChevronDown className={`w-4 h-4 transition-transform ${mobileServicesOpen ? "rotate-180" : ""}`} />
              </button>
              <div className={`overflow-hidden transition-all duration-300 ${mobileServicesOpen ? "max-h-96" : "max-h-0"}`}>
                {services.map((s) => (
                  <Link key={s.href} to={s.href} className="block py-2 pl-4 text-sm font-semibold text-muted-foreground hover:text-brand-blue">
                    — {s.name}
                  </Link>
                ))}
              </div>
            </div>

            <Link to="/careers" className="nav-link text-foreground hover:text-brand-blue py-2.5">CAREERS</Link>
            <Link to="/contact" className="nav-link text-foreground hover:text-brand-blue py-2.5">CONTACT</Link>

            <Link
              to="/contact"
              className="mt-3 bg-brand-blue text-white font-bold text-sm uppercase tracking-widest px-6 py-3 rounded text-center hover:bg-brand-orange transition-colors"
            >
              Get In Touch
            </Link>
          </div>
        </div>
      </nav>
    </>
  );
}