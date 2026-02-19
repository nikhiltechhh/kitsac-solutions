import { Link } from "react-router-dom";
import { Mail, MapPin, Phone, Linkedin, Twitter, Instagram } from "lucide-react";
import logo from "@/assets/kitsac-logo.png";

const services = [
  { name: "Pharmaceuticals", href: "/services/pharmaceuticals" },
  { name: "Project Outsourcing", href: "/services/project-outsourcing" },
  { name: "IT Consulting & Services", href: "/services/it-consulting" },
  { name: "BPO Services", href: "/services/bpo-services" },
  { name: "Internship", href: "/services/internship" },
];

const products = [
  { name: "10 Minutes Delivery", href: "/products/ten-min-delivery" },
  { name: "Bachelor Wallet", href: "/products/bachelor-wallet" },
  { name: "Store & Billing Management", href: "/products/store-billing" },
];

export default function Footer() {
  return (
    <footer style={{ backgroundColor: 'hsl(220 20% 10%)' }} className="text-white">
      {/* Main footer */}
      <div className="container mx-auto py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
        {/* Brand */}
        <div className="lg:col-span-1">
          <img src={logo} alt="KITSAC IT Solutions" className="h-14 w-auto mb-4 bg-white rounded-lg p-2" />
          <p className="text-white/60 text-sm leading-relaxed mb-5">
            KITSAC IT Solutions Pvt. Ltd. — Your trusted technology partner delivering innovative solutions across India.
          </p>
          <div className="flex items-center gap-3">
            <a href="#" className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center hover:bg-brand-blue transition-colors">
              <Linkedin className="w-4 h-4" />
            </a>
            <a href="#" className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center hover:bg-brand-blue transition-colors">
              <Twitter className="w-4 h-4" />
            </a>
            <a href="#" className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center hover:bg-brand-blue transition-colors">
              <Instagram className="w-4 h-4" />
            </a>
          </div>
        </div>

        {/* Products */}
        <div>
          <h4 className="font-display text-base uppercase tracking-widest text-brand-orange mb-5">Our Products</h4>
          <ul className="flex flex-col gap-2.5">
            {products.map((p) => (
              <li key={p.href}>
                <Link to={p.href} className="text-white/60 text-sm hover:text-white transition-colors flex items-center gap-2">
                  <span className="w-1 h-1 rounded-full bg-brand-blue flex-shrink-0" />
                  {p.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Services */}
        <div>
          <h4 className="font-display text-base uppercase tracking-widest text-brand-orange mb-5">Our Services</h4>
          <ul className="flex flex-col gap-2.5">
            {services.map((s) => (
              <li key={s.href}>
                <Link to={s.href} className="text-white/60 text-sm hover:text-white transition-colors flex items-center gap-2">
                  <span className="w-1 h-1 rounded-full bg-brand-blue flex-shrink-0" />
                  {s.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h4 className="font-display text-base uppercase tracking-widest text-brand-orange mb-5">Contact Us</h4>
          <ul className="flex flex-col gap-4">
            <li>
              <a href="mailto:Contact@kitsacitsolutions.com" className="flex items-start gap-3 text-white/60 text-sm hover:text-white transition-colors">
                <Mail className="w-4 h-4 mt-0.5 flex-shrink-0 text-brand-blue" />
                Contact@kitsacitsolutions.com
              </a>
            </li>
            <li>
              <div className="flex items-start gap-3 text-white/60 text-sm">
                <MapPin className="w-4 h-4 mt-0.5 flex-shrink-0 text-brand-blue" />
                Hyderabad, Telangana, India — 500001
              </div>
            </li>
            <li>
              <Link to="/careers" className="flex items-center gap-3 text-white/60 text-sm hover:text-white transition-colors">
                <Phone className="w-4 h-4 flex-shrink-0 text-brand-blue" />
                Careers — Apply Now
              </Link>
            </li>
          </ul>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/10">
        <div className="container mx-auto py-5 flex flex-col md:flex-row items-center justify-between gap-3">
          <p className="text-white/40 text-xs">© {new Date().getFullYear()} KITSAC IT Solutions Pvt. Ltd. All rights reserved.</p>
          <div className="flex items-center gap-5 text-white/40 text-xs">
            <span>Approved by STARTUPINDIA · DPIIT · MSME</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
