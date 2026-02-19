import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

function RevealSection({ children, className = "", direction = "up", delay = 0 }: {
  children: React.ReactNode; className?: string; direction?: "up" | "left" | "right"; delay?: number;
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
  return <div ref={ref} className={`${cls} ${className}`} style={delay ? { transitionDelay: `${delay}ms` } : {}}>{children}</div>;
}

interface ServicePageLayoutProps {
  title: string;
  subtitle: string;
  description: string;
  image: string;
  features: string[];
  highlights: { title: string; desc: string }[];
  ctaText?: string;
}

export default function ServicePageLayout({
  title, subtitle, description, image, features, highlights, ctaText = "Get In Touch",
}: ServicePageLayoutProps) {
  return (
    <main>
      {/* Hero */}
      <section className="relative min-h-[500px] flex items-center" style={{ backgroundImage: `url(${image})`, backgroundSize: "cover", backgroundPosition: "center" }}>
        <div className="absolute inset-0" style={{ background: "linear-gradient(135deg, hsl(210 68% 22% / 0.94) 0%, hsl(220 20% 10% / 0.88) 100%)" }} />
        <div className="absolute top-8 left-8 w-36 h-36 dot-pattern opacity-35 hidden md:block" />
        <div className="absolute bottom-8 right-8 w-36 h-36 dot-pattern-orange opacity-25 hidden md:block" />

        <div className="container mx-auto relative z-10 py-24">
          <div className="max-w-3xl">
            <p className="font-semibold uppercase tracking-widest text-xs mb-3" style={{ color: "hsl(27 95% 65%)", fontFamily: "Oswald, sans-serif" }}>{subtitle}</p>
            <h1 className="font-display text-5xl md:text-7xl text-white uppercase mb-6 leading-tight">{title}</h1>
            <p className="text-white/75 text-base md:text-lg leading-relaxed max-w-2xl">{description}</p>
            <div className="flex flex-wrap gap-4 mt-10">
              <Link to="/contact" className="bg-brand-orange text-white font-semibold uppercase tracking-widest text-sm px-8 py-4 rounded flex items-center gap-2 hover:bg-brand-blue transition-all duration-300 hover:gap-3" style={{ fontFamily: "Oswald, sans-serif" }}>
                {ctaText} <ArrowRight className="w-4 h-4" />
              </Link>
              <Link to="/" className="border-2 border-white/40 text-white font-semibold uppercase tracking-widest text-sm px-8 py-4 rounded hover:border-white hover:bg-white/10 transition-all duration-300" style={{ fontFamily: "Oswald, sans-serif" }}>
                ← Back to Home
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-24 bg-muted/30">
        <div className="container mx-auto">
          <RevealSection className="text-center mb-14">
            <span className="section-label mx-auto block mb-4" />
            <h2 className="font-display text-3xl md:text-5xl text-foreground uppercase">What We Offer</h2>
          </RevealSection>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((f, i) => (
              <RevealSection key={i} delay={i * 60}>
                <div className="service-card bg-white border border-border rounded-lg p-6 flex items-start gap-4 shadow-card h-full">
                  <span className="w-8 h-8 rounded-full bg-brand-blue/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="w-3 h-3 rounded-full bg-brand-blue" />
                  </span>
                  <p className="text-foreground font-medium text-sm leading-relaxed">{f}</p>
                </div>
              </RevealSection>
            ))}
          </div>
        </div>
      </section>

      {/* Highlights */}
      <section className="py-24">
        <div className="container mx-auto">
          <RevealSection className="text-center mb-14">
            <span className="section-label mx-auto block mb-4" />
            <h2 className="font-display text-3xl md:text-5xl text-foreground uppercase">Why Choose Us</h2>
          </RevealSection>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {highlights.map((h, i) => (
              <RevealSection key={i} direction={i % 2 === 0 ? "left" : "right"} delay={i * 80}>
                <div className="service-card flex gap-6 p-8 border border-border rounded-lg shadow-card bg-white h-full">
                  <div className="w-1 bg-brand-orange rounded-full flex-shrink-0" />
                  <div>
                    <h3 className="font-display text-xl uppercase text-foreground mb-2 tracking-wide">{h.title}</h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">{h.desc}</p>
                  </div>
                </div>
              </RevealSection>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-gradient-stats py-20 relative overflow-hidden">
        <div className="absolute left-0 top-0 w-52 h-52 dot-pattern opacity-20" />
        <div className="absolute right-0 bottom-0 w-52 h-52 dot-pattern-orange opacity-20" />
        <RevealSection className="container mx-auto text-center relative z-10">
          <h2 className="font-display text-3xl md:text-5xl text-white uppercase mb-4">Ready to Get Started?</h2>
          <p className="text-white/70 mb-8 text-base max-w-xl mx-auto">Let's discuss your requirements and create a custom solution for your business.</p>
          <Link to="/contact" className="bg-white text-brand-blue font-semibold uppercase tracking-widest text-sm px-10 py-4 rounded inline-flex items-center gap-2 hover:bg-brand-orange hover:text-white transition-all duration-300 hover:gap-3" style={{ fontFamily: "Oswald, sans-serif" }}>
            Contact Us <ArrowRight className="w-4 h-4" />
          </Link>
        </RevealSection>
      </section>
    </main>
  );
}
