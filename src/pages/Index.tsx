import { Link } from "react-router-dom";
import { ArrowRight, ChevronRight, Pill, Code2, Phone, GraduationCap, Briefcase, Clock, Wallet, Store } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";

const services = [
  {
    icon: <Pill className="w-8 h-8" />,
    title: "Pharmaceuticals",
    desc: "Medical Coding, Medical Billing, Quality Control & Assurance",
    href: "/services/pharmaceuticals",
    color: "bg-blue-50 border-blue-200",
    iconColor: "text-brand-blue",
  },
  {
    icon: <Briefcase className="w-8 h-8" />,
    title: "Project Outsourcing",
    desc: "End-to-end project outsourcing with dedicated teams and expert delivery",
    href: "/services/project-outsourcing",
    color: "bg-orange-50 border-orange-200",
    iconColor: "text-brand-orange",
  },
  {
    icon: <Code2 className="w-8 h-8" />,
    title: "IT Consulting & Services",
    desc: "Web apps, Ecommerce, Support & Maintenance by experts",
    href: "/services/it-consulting",
    color: "bg-blue-50 border-blue-200",
    iconColor: "text-brand-blue",
  },
  {
    icon: <Phone className="w-8 h-8" />,
    title: "BPO Services",
    desc: "Inbound & Outbound telecalling with trained professionals",
    href: "/services/bpo-services",
    color: "bg-orange-50 border-orange-200",
    iconColor: "text-brand-orange",
  },
  {
    icon: <GraduationCap className="w-8 h-8" />,
    title: "Internship",
    desc: "Industry-grade internships with certification for students",
    href: "/services/internship",
    color: "bg-blue-50 border-blue-200",
    iconColor: "text-brand-blue",
  },
];

const products = [
  {
    icon: <Clock className="w-8 h-8" />,
    title: "10 Minutes Delivery",
    desc: "Ultra-fast hyperlocal delivery platform bringing essentials to your doorstep in minutes",
    href: "/products/ten-min-delivery",
  },
  {
    icon: <Wallet className="w-8 h-8" />,
    title: "Bachelor Wallet",
    desc: "Smart financial management app designed for students and young professionals",
    href: "/products/bachelor-wallet",
  },
  {
    icon: <Store className="w-8 h-8" />,
    title: "Store & Billing Management",
    desc: "Complete retail management and POS solution for modern businesses",
    href: "/products/store-billing",
  },
];

const stats = [
  { value: "5+", label: "Years of Excellence", sub: "In IT Services" },
  { value: "100+", label: "Projects Delivered", sub: "Across Industries" },
  { value: "50+", label: "Happy Clients", sub: "Nationwide" },
  { value: "3", label: "Certifications", sub: "STARTUPINDIA, DPIIT, MSME" },
];

const tickerItems = [
  "Approved by STARTUPINDIA",
  "Recognized by DPIIT",
  "Certified MSME",
  "IT Consulting & Services",
  "BPO Solutions",
  "Pharmaceutical Services",
  "Project Outsourcing",
  "Internship Programs",
];

export default function Index() {
  return (
    <main>
      {/* Ticker */}
      <div className="overflow-hidden bg-brand-dark py-3 border-b border-white/10" style={{ backgroundColor: 'hsl(220 20% 10%)' }}>
        <div className="ticker-track">
          {[...tickerItems, ...tickerItems].map((item, i) => (
            <span key={i} className="flex items-center gap-3 px-8 text-white/80 text-sm font-semibold uppercase tracking-widest whitespace-nowrap">
              <span className="w-2 h-2 rounded-full bg-brand-orange flex-shrink-0" />
              {item}
            </span>
          ))}
        </div>
      </div>

      {/* Hero */}
      <section
        className="relative min-h-[85vh] flex items-center"
        style={{
          backgroundImage: `url(${heroBg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0" style={{ background: "linear-gradient(135deg, hsl(220 20% 8% / 0.88) 0%, hsl(210 68% 28% / 0.75) 100%)" }} />
        {/* Dot patterns */}
        <div className="absolute top-12 left-8 w-48 h-48 dot-pattern opacity-30 hidden md:block" />
        <div className="absolute bottom-16 right-8 w-40 h-40 dot-pattern-orange opacity-25 hidden md:block" />

        <div className="container mx-auto relative z-10 py-20">
          <div className="max-w-4xl">
            {/* Recognition badges */}
            <div className="flex flex-wrap items-center gap-3 mb-8">
              {["STARTUPINDIA", "DPIIT", "MSME"].map((badge) => (
                <span
                  key={badge}
                  className="bg-white/15 border border-white/30 text-white text-xs font-bold uppercase tracking-widest px-4 py-1.5 rounded-full backdrop-blur-sm"
                >
                  ✓ {badge}
                </span>
              ))}
            </div>
            <p className="text-brand-orange font-bold uppercase tracking-[0.2em] text-sm mb-4">
              Your Reliable Technology Partner
            </p>
            <h1 className="font-display text-5xl md:text-7xl text-white uppercase leading-tight mb-6">
              Innovative IT
              <span className="block text-brand-orange">Solutions</span>
              for Every Business
            </h1>
            <p className="text-white/75 text-lg md:text-xl max-w-2xl leading-relaxed mb-10">
              KITSAC IT Solutions delivers cutting-edge technology services — from pharmaceutical IT to custom web applications, BPO, and beyond.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link
                to="/contact"
                className="bg-brand-orange text-white font-bold uppercase tracking-widest text-sm px-8 py-4 rounded flex items-center gap-2 hover:bg-brand-blue transition-colors duration-300"
              >
                Get In Touch <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                to="/services/it-consulting"
                className="border-2 border-white/50 text-white font-bold uppercase tracking-widest text-sm px-8 py-4 rounded hover:border-white hover:bg-white/10 transition-colors duration-300"
              >
                Explore Services
              </Link>
            </div>
          </div>
        </div>

        {/* Bottom text */}
        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent py-6">
          <div className="container mx-auto">
            <p className="font-display text-white/30 text-2xl md:text-4xl uppercase tracking-widest hidden md:block">
              KITSAC IT SOLUTIONS — EMPOWERING BUSINESSES WITH TECHNOLOGY
            </p>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="bg-gradient-stats relative overflow-hidden py-16">
        <div className="absolute left-0 top-0 w-64 h-64 dot-pattern opacity-20" />
        <div className="absolute right-0 bottom-0 w-64 h-64 dot-pattern-orange opacity-15" />
        <div className="container mx-auto relative z-10">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-4">
            {stats.map((s, i) => (
              <div key={i} className="text-center">
                <div className="w-10 h-0.5 bg-brand-orange mx-auto mb-4" />
                <p className="font-display text-4xl md:text-6xl text-white uppercase">{s.value}</p>
                <p className="text-white/80 font-bold text-sm uppercase tracking-widest mt-1">{s.label}</p>
                <p className="text-white/50 text-xs mt-1">{s.sub}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-48 h-full dot-pattern opacity-10" />
        <div className="absolute top-0 right-0 w-48 h-full dot-pattern opacity-10" />
        <div className="container mx-auto relative z-10">
          <div className="text-center mb-16">
            <span className="section-label mx-auto block mb-4" />
            <p className="text-brand-orange font-bold uppercase tracking-widest text-sm mb-2">What We Do</p>
            <h2 className="font-display text-4xl md:text-6xl text-foreground uppercase relative">
              SERVICES WE DELIVER
              <span className="absolute inset-0 flex items-center justify-center text-muted/30 text-5xl md:text-8xl font-display uppercase -z-10 select-none pointer-events-none whitespace-nowrap">
                SERVICES
              </span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((s, i) => (
              <Link
                key={i}
                to={s.href}
                className={`service-card group border-2 rounded-lg p-8 flex flex-col gap-5 ${s.color}`}
              >
                <div className={`${s.iconColor}`}>{s.icon}</div>
                <div>
                  <h3 className="font-display text-xl uppercase text-foreground mb-2">{s.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{s.desc}</p>
                </div>
                <div className={`flex items-center gap-2 font-bold text-sm uppercase tracking-wider mt-auto ${s.iconColor} group-hover:gap-4 transition-all`}>
                  Learn More <ChevronRight className="w-4 h-4" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Products */}
      <section className="py-24 bg-muted/30 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 dot-pattern-orange opacity-15" />
        <div className="container mx-auto relative z-10">
          <div className="text-center mb-16">
            <span className="section-label mx-auto block mb-4" />
            <p className="text-brand-orange font-bold uppercase tracking-widest text-sm mb-2">Innovation in Progress</p>
            <h2 className="font-display text-4xl md:text-6xl text-foreground uppercase">OUR PRODUCTS</h2>
            <div className="inline-flex items-center gap-2 mt-4 bg-brand-orange/10 border border-brand-orange/30 rounded-full px-5 py-2">
              <span className="w-2 h-2 rounded-full bg-brand-orange animate-pulse" />
              <span className="text-brand-orange font-bold text-xs uppercase tracking-widest">🚀 Launching Soon</span>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {products.map((p, i) => (
              <Link
                key={i}
                to={p.href}
                className="service-card group bg-white border border-border rounded-lg p-8 flex flex-col gap-5 shadow-card relative overflow-hidden"
              >
                <div className="absolute top-0 right-0 bg-brand-orange text-white text-[10px] font-bold uppercase tracking-widest px-3 py-1 rounded-bl-lg">
                  Coming Soon
                </div>
                <div className="w-14 h-14 rounded-xl bg-brand-blue/10 flex items-center justify-center text-brand-blue">
                  {p.icon}
                </div>
                <div>
                  <h3 className="font-display text-xl uppercase text-foreground mb-2">{p.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{p.desc}</p>
                </div>
                <div className="flex items-center gap-2 font-bold text-sm uppercase tracking-wider mt-auto text-brand-blue group-hover:gap-4 transition-all">
                  Learn More <ChevronRight className="w-4 h-4" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Recognition */}
      <section className="py-20 border-t border-border">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <span className="section-label mx-auto block mb-4" />
            <h2 className="font-display text-3xl md:text-5xl text-foreground uppercase">Approved & Recognized</h2>
            <p className="text-muted-foreground mt-3">Certified by India's top regulatory and innovation bodies</p>
          </div>
          <div className="flex flex-wrap items-center justify-center gap-8 md:gap-16">
            {[
              { name: "STARTUPINDIA", emoji: "🇮🇳" },
              { name: "DPIIT", emoji: "🏛️" },
              { name: "MSME", emoji: "🏭" },
            ].map((org) => (
              <div key={org.name} className="flex flex-col items-center gap-3 group">
                <div className="w-24 h-24 rounded-2xl border-2 border-border group-hover:border-brand-blue transition-colors flex items-center justify-center text-4xl shadow-card bg-white">
                  {org.emoji}
                </div>
                <span className="font-display text-sm uppercase tracking-widest text-muted-foreground group-hover:text-brand-blue transition-colors">
                  {org.name}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="bg-gradient-stats py-20 relative overflow-hidden">
        <div className="absolute left-0 top-0 w-64 h-full dot-pattern opacity-15" />
        <div className="absolute right-0 top-0 w-64 h-full dot-pattern-orange opacity-10" />
        <div className="container mx-auto text-center relative z-10">
          <h2 className="font-display text-4xl md:text-6xl text-white uppercase mb-4">Ready to Transform Your Business?</h2>
          <p className="text-white/70 text-lg max-w-2xl mx-auto mb-10">
            Partner with KITSAC IT Solutions for cutting-edge technology, expert consulting, and measurable results.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link
              to="/contact"
              className="bg-white text-brand-blue font-bold uppercase tracking-widest text-sm px-10 py-4 rounded inline-flex items-center gap-2 hover:bg-brand-orange hover:text-white transition-colors"
            >
              Contact Us Today <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              to="/careers"
              className="border-2 border-white/50 text-white font-bold uppercase tracking-widest text-sm px-10 py-4 rounded hover:border-white hover:bg-white/10 transition-colors"
            >
              Join Our Team
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
