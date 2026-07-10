import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, ChevronRight, Pill, Code2, Phone, GraduationCap, Briefcase, Clock, Wallet, Store } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";

/* ── tiny hook ── */
function useReveal() {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) { el.classList.add("visible"); obs.unobserve(el); } },
      { threshold: 0.1, rootMargin: "0px 0px -50px 0px" }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);
  return ref;
}

const services = [
  { icon: <Pill className="w-8 h-8" />, title: "Pharmaceuticals", desc: "Medical Coding, Medical Billing, Quality Control & Assurance", href: "/services/pharmaceuticals", accent: "blue" },
  { icon: <Briefcase className="w-8 h-8" />, title: "Project Outsourcing", desc: "End-to-end project outsourcing with dedicated teams and expert delivery", href: "/services/project-outsourcing", accent: "orange" },
  { icon: <Code2 className="w-8 h-8" />, title: "IT Consulting & Services", desc: "Web apps, Ecommerce, Support & Maintenance by experts", href: "/services/it-consulting", accent: "blue" },
  { icon: <Phone className="w-8 h-8" />, title: "BPO Services", desc: "Inbound & Outbound telecalling with trained professionals", href: "/services/bpo-services", accent: "orange" },
  { icon: <GraduationCap className="w-8 h-8" />, title: "Internship", desc: "Industry-grade internships with certification for students", href: "/services/internship", accent: "blue" },
];

const products = [
  { icon: <Clock className="w-8 h-8" />, title: "10 Minutes Delivery", desc: "Ultra-fast hyperlocal delivery platform bringing essentials to your doorstep in minutes", href: "https://coming-soon-ceyh.vercel.app/" },
  { icon: <Wallet className="w-8 h-8" />, title: "Bachelor Wallet", desc: "Smart financial management app designed for students and young professionals", href: "https://bachelor-wallet.vercel.app/" },
  { icon: <Store className="w-8 h-8" />, title: "Store & Billing Management", desc: "Complete retail management and POS solution for modern businesses", href: "/products/store-billing" },
];

const stats = [
  { value: "5+", label: "Years of Excellence", sub: "In IT Services" },
  { value: "100+", label: "Projects Delivered", sub: "Across Industries" },
  { value: "50+", label: "Happy Clients", sub: "Nationwide" },
  { value: "3", label: "Certifications", sub: "STARTUPINDIA · DPIIT · MSME" },
];

const tickerItems = ["Approved by STARTUPINDIA","Recognized by DPIIT","Certified MSME","IT Consulting & Services","BPO Solutions","Pharmaceutical Services","Project Outsourcing","Internship Programs"];

function RevealSection({ children, className = "", direction = "up", delay = 0 }: {
  children: React.ReactNode; className?: string; direction?: "up"|"left"|"right"; delay?: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) { el.classList.add("visible"); obs.unobserve(el); } },
      { threshold: 0.08, rootMargin: "0px 0px -40px 0px" }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);
  const cls = direction === "left" ? "reveal-left" : direction === "right" ? "reveal-right" : "reveal";
  const delayStyle = delay ? { transitionDelay: `${delay}ms` } : {};
  return <div ref={ref} className={`${cls} ${className}`} style={delayStyle}>{children}</div>;
}

export default function Index() {
  return (
    <main>
      <style>{`
        @keyframes heroZoom {
          from { background-size: 135%; }
          to   { background-size: 108%; }
        }
        @keyframes heroZoomMobile {
          from { background-size: 250%; }
          to   { background-size: 190%; }
        }
        .hero-section {
          animation: heroZoom 12s ease-out forwards;
        }
        @media (max-width: 767px) {
          .hero-section {
            background-size: 250% !important;
            animation: heroZoomMobile 12s ease-out forwards !important;
          }
        }
      `}</style>
      {/* Ticker */}
      <div className="overflow-hidden py-3 border-b border-white/10" style={{ backgroundColor: "hsl(220 20% 10%)" }}>
        <div className="ticker-track">
          {[...tickerItems, ...tickerItems].map((item, i) => (
            <span key={i} className="flex items-center gap-3 px-8 text-white/80 text-xs font-semibold uppercase tracking-widest whitespace-nowrap" style={{ fontFamily: "Oswald, sans-serif" }}>
              <span className="w-2 h-2 rounded-full bg-brand-orange flex-shrink-0" />{item}
            </span>
          ))}
        </div>
      </div>

      {/* Hero */}
      <section
        className="relative flex items-center hero-section"
        style={{
          backgroundImage: `url(${heroBg})`,
          backgroundSize: "135%",
          backgroundPosition: "center",
          minHeight: "clamp(360px, 62vh, 650px)",
        }}
      >
        <div className="absolute inset-0" style={{ background: "linear-gradient(135deg, hsl(220 20% 6% / 0.90) 0%, hsl(210 68% 28% / 0.72) 100%)" }} />
        <div className="absolute top-12 left-8 w-52 h-52 dot-pattern opacity-25 hidden md:block" />
        <div className="absolute bottom-16 right-8 w-44 h-44 dot-pattern-orange opacity-20 hidden md:block" />

        <div className="container mx-auto relative z-10 py-8 sm:py-12 md:py-16">
          <div className="max-w-4xl">
            {/* Badges */}
            <div className="flex flex-wrap gap-2 mb-5 sm:mb-8">
              {["STARTUPINDIA", "DPIIT", "MSME"].map((b) => (
                <span key={b} className="bg-white/15 border border-white/30 text-white text-xs font-semibold uppercase tracking-widest px-4 py-1.5 rounded-full backdrop-blur-sm" style={{ fontFamily: "Oswald, sans-serif" }}>
                  ✓ {b}
                </span>
              ))}
            </div>
            <p className="font-semibold uppercase tracking-[0.25em] text-xs sm:text-sm mb-3 sm:mb-4" style={{ color: "hsl(27 95% 65%)", fontFamily: "Oswald, sans-serif" }}>
              Your Reliable Technology Partner
            </p>
            <h1 className="font-display text-4xl sm:text-5xl md:text-7xl lg:text-8xl text-white uppercase leading-[0.95] mb-4 sm:mb-6 tracking-wide">
              Innovative IT<br />
              <span style={{ color: "hsl(var(--brand-orange))" }}>Solutions</span><br />
              <span className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl text-white/80">for Every Business</span>
            </h1>
            <p className="text-white/70 text-sm sm:text-base md:text-lg max-w-2xl leading-relaxed mb-7 sm:mb-10" style={{ fontFamily: "Inter, sans-serif" }}>
              KITSAC IT Solutions delivers cutting-edge technology services — from pharmaceutical IT to custom web applications, BPO, and beyond.
            </p>
            <div className="flex flex-wrap gap-3 sm:gap-4">
              <Link
                to="/contact"
                className="bg-brand-orange text-white font-semibold uppercase tracking-widest text-xs sm:text-sm px-6 sm:px-8 py-3 sm:py-4 rounded flex items-center gap-2 hover:bg-brand-blue transition-all duration-300 hover:gap-3"
                style={{ fontFamily: "Oswald, sans-serif" }}
              >
                Get In Touch <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                to="/services/it-consulting"
                className="border-2 border-white/40 text-white font-semibold uppercase tracking-widest text-xs sm:text-sm px-6 sm:px-8 py-3 sm:py-4 rounded hover:border-white hover:bg-white/10 transition-all duration-300"
                style={{ fontFamily: "Oswald, sans-serif" }}
              >
                Explore Services
              </Link>
            </div>
          </div>
        </div>

        <div className="absolute bottom-0 left-0 right-0 py-5 hidden lg:block" style={{ background: "linear-gradient(to top, hsl(220 20% 6% / 0.7), transparent)" }}>
          <div className="container mx-auto">
            <p className="text-white/20 uppercase tracking-[0.3em] text-lg font-display">
              KITSAC IT SOLUTIONS — EMPOWERING BUSINESSES WITH TECHNOLOGY
            </p>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="bg-gradient-stats relative overflow-hidden py-12 sm:py-16">
        <div className="absolute left-0 top-0 w-72 h-72 dot-pattern opacity-20" />
        <div className="absolute right-0 bottom-0 w-72 h-72 dot-pattern-orange opacity-15" />
        <div className="container mx-auto relative z-10">
          <div className="grid grid-cols-4 gap-3 sm:gap-6 md:gap-8">
            {stats.map((s, i) => (
              <RevealSection key={i} delay={i * 100}>
                <div className="text-center">
                  <div className="w-6 sm:w-10 h-0.5 bg-brand-orange mx-auto mb-2 sm:mb-4" />
                  <p className="font-display text-2xl sm:text-4xl md:text-5xl lg:text-6xl text-white">{s.value}</p>
                  <p className="text-white/80 font-semibold text-[9px] sm:text-xs uppercase tracking-wide sm:tracking-widest mt-1 sm:mt-2 leading-tight" style={{ fontFamily: "Oswald, sans-serif" }}>{s.label}</p>
                  <p className="text-white/50 text-[8px] sm:text-xs mt-0.5 sm:mt-1 hidden sm:block">{s.sub}</p>
                </div>
              </RevealSection>
            ))}
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-28 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-52 h-full dot-pattern opacity-[0.07]" />
        <div className="absolute top-0 right-0 w-52 h-full dot-pattern opacity-[0.07]" />
        <div className="container mx-auto relative z-10">
          <RevealSection className="text-center mb-16">
            <span className="section-label mx-auto block mb-4" />
            <p className="text-brand-orange font-semibold uppercase tracking-widest text-xs mb-3" style={{ fontFamily: "Oswald, sans-serif" }}>What We Do</p>
            <div className="relative inline-block">
              <h2 className="font-display text-4xl md:text-6xl text-foreground uppercase">SERVICES WE DELIVER</h2>
              <span className="absolute inset-0 flex items-center justify-center text-muted/20 text-6xl md:text-9xl font-display uppercase -z-10 select-none pointer-events-none">SERVICES</span>
            </div>
          </RevealSection>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((s, i) => (
              <RevealSection key={i} delay={i * 80}>
                <Link
                  to={s.href}
                  className={`service-card group border-2 rounded-lg p-8 flex flex-col gap-5 h-full ${s.accent === "blue" ? "bg-blue-50/60 border-blue-100 hover:border-brand-blue" : "bg-orange-50/60 border-orange-100 hover:border-brand-orange"} transition-colors duration-300`}
                >
                  <div className={s.accent === "blue" ? "text-brand-blue" : "text-brand-orange"}>{s.icon}</div>
                  <div>
                    <h3 className="font-display text-xl uppercase text-foreground mb-2 tracking-wide">{s.title}</h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">{s.desc}</p>
                  </div>
                  <div className={`flex items-center gap-2 font-semibold text-xs uppercase tracking-widest mt-auto transition-all duration-300 group-hover:gap-4 ${s.accent === "blue" ? "text-brand-blue" : "text-brand-orange"}`} style={{ fontFamily: "Oswald, sans-serif" }}>
                    Learn More <ChevronRight className="w-4 h-4" />
                  </div>
                </Link>
              </RevealSection>
            ))}
          </div>
        </div>
      </section>

      {/* Products */}
      <section className="py-28 bg-muted/30 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-72 h-72 dot-pattern-orange opacity-15" />
        <div className="container mx-auto relative z-10">
          <RevealSection className="text-center mb-16">
            <span className="section-label mx-auto block mb-4" />
            <p className="text-brand-orange font-semibold uppercase tracking-widest text-xs mb-3" style={{ fontFamily: "Oswald, sans-serif" }}>Innovation in Progress</p>
            <h2 className="font-display text-4xl md:text-6xl text-foreground uppercase">OUR PRODUCTS</h2>
            <div className="inline-flex items-center gap-2 mt-4 bg-brand-orange/10 border border-brand-orange/30 rounded-full px-5 py-2">
              <span className="w-2 h-2 rounded-full bg-brand-orange animate-pulse" />
              <span className="text-brand-orange font-semibold text-xs uppercase tracking-widest" style={{ fontFamily: "Oswald, sans-serif" }}>🚀 Launching Soon</span>
            </div>
          </RevealSection>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {products.map((p, i) => (
              <RevealSection key={i} delay={i * 100}>
                <Link
                  to={p.href}
                  className="service-card group bg-white border border-border rounded-lg p-8 flex flex-col gap-5 shadow-card relative overflow-hidden h-full hover:border-brand-blue transition-colors duration-300"
                >
                  <div className="absolute top-0 right-0 bg-brand-orange text-white text-[10px] font-semibold uppercase tracking-widest px-3 py-1 rounded-bl-lg" style={{ fontFamily: "Oswald, sans-serif" }}>
                    Coming Soon
                  </div>
                  <div className="w-14 h-14 rounded-xl bg-brand-blue/10 flex items-center justify-center text-brand-blue">{p.icon}</div>
                  <div>
                    <h3 className="font-display text-xl uppercase text-foreground mb-2 tracking-wide">{p.title}</h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">{p.desc}</p>
                  </div>
                  <div className="flex items-center gap-2 font-semibold text-xs uppercase tracking-widest mt-auto text-brand-blue group-hover:gap-4 transition-all duration-300" style={{ fontFamily: "Oswald, sans-serif" }}>
                    Learn More <ChevronRight className="w-4 h-4" />
                  </div>
                </Link>
              </RevealSection>
            ))}
          </div>
        </div>
      </section>

      {/* Recognition */}
      <section className="py-12 sm:py-16 border-t border-border">
        <div className="container mx-auto">
          <RevealSection className="text-center mb-12">
            <span className="section-label mx-auto block mb-4" />
            <h2 className="font-display text-3xl md:text-5xl text-foreground uppercase">Approved & Recognized</h2>
            <p className="text-muted-foreground mt-3 text-sm">Certified by India's top regulatory and innovation bodies</p>
          </RevealSection>
        <div className="flex flex-wrap items-center justify-center gap-8">
  {[
    { name: "STARTUPINDIA", logo: "https://crystalpng.com/wp-content/uploads/2025/01/startup-india-logo-gradient-circle.png" },
    { name: "DPIIT", logo: "https://indiashippingnews.com/wp-content/uploads/2023/01/DPIIT.webp" },
    { name: "MSME", logo: "https://msmedinagpur.gov.in/assets/emblem-dark-CWvnlyPE.png" }
  ].map((org, i) => (
    <div key={i} className="flex flex-col items-center gap-2">
      <img
        src={org.logo}
        alt={org.name}
        className="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 object-contain"
      />
      <span className="text-xs sm:text-sm font-semibold tracking-wide text-center">
        {org.name}
      </span>
    </div>
  ))}
</div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-gradient-stats py-24 relative overflow-hidden">
        <div className="absolute left-0 top-0 w-72 h-full dot-pattern opacity-15" />
        <div className="absolute right-0 top-0 w-72 h-full dot-pattern-orange opacity-10" />
        <RevealSection className="container mx-auto text-center relative z-10">
          <h2 className="font-display text-4xl md:text-6xl text-white uppercase mb-4">Ready to Transform<br />Your Business?</h2>
          <p className="text-white/70 text-base max-w-2xl mx-auto mb-10">
            Partner with KITSAC IT Solutions for cutting-edge technology, expert consulting, and measurable results.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link to="/contact" className="bg-white text-brand-blue font-semibold uppercase tracking-widest text-sm px-10 py-4 rounded inline-flex items-center gap-2 hover:bg-brand-orange hover:text-white transition-all duration-300 hover:gap-3" style={{ fontFamily: "Oswald, sans-serif" }}>
              Contact Us Today <ArrowRight className="w-4 h-4" />
            </Link>
            <Link to="/careers" className="border-2 border-white/50 text-white font-semibold uppercase tracking-widest text-sm px-10 py-4 rounded hover:border-white hover:bg-white/10 transition-all duration-300" style={{ fontFamily: "Oswald, sans-serif" }}>
              Join Our Team
            </Link>
          </div>
        </RevealSection>
      </section>
    </main>
  );
}