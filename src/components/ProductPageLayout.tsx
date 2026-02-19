import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, Rocket } from "lucide-react";

function RevealSection({ children, className = "", delay = 0 }: {
  children: React.ReactNode; className?: string; delay?: number;
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
  return <div ref={ref} className={`reveal ${className}`} style={delay ? { transitionDelay: `${delay}ms` } : {}}>{children}</div>;
}

interface ProductPageLayoutProps {
  title: string;
  tagline: string;
  description: string;
  image: string;
  features: string[];
  launchingSoon?: boolean;
}

export default function ProductPageLayout({
  title, tagline, description, image, features, launchingSoon = true,
}: ProductPageLayoutProps) {
  return (
    <main>
      {/* Launching Soon Banner */}
      {launchingSoon && (
        <div className="bg-brand-orange text-white text-center py-3 px-4">
          <div className="flex items-center justify-center gap-2 font-semibold uppercase tracking-widest text-sm" style={{ fontFamily: "Oswald, sans-serif" }}>
            <Rocket className="w-4 h-4 animate-bounce" />
            🚀 Launching Soon — Stay tuned! Be the first to know when we go live.
            <Rocket className="w-4 h-4 animate-bounce" />
          </div>
        </div>
      )}

      {/* Hero */}
      <section className="relative min-h-[520px] flex items-center" style={{ backgroundImage: `url(${image})`, backgroundSize: "cover", backgroundPosition: "center" }}>
        <div className="absolute inset-0" style={{ background: "linear-gradient(135deg, hsl(220 20% 6% / 0.93) 0%, hsl(210 68% 28% / 0.82) 100%)" }} />
        <div className="absolute top-8 right-8 w-44 h-44 dot-pattern opacity-28 hidden md:block" />

        <div className="container mx-auto relative z-10 py-24">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 bg-brand-orange/20 border border-brand-orange/40 rounded-full px-4 py-1.5 mb-5">
              <Rocket className="w-4 h-4 text-brand-orange" />
              <span className="text-brand-orange font-semibold text-xs uppercase tracking-widest" style={{ fontFamily: "Oswald, sans-serif" }}>Coming Soon</span>
            </div>
            <p className="font-semibold uppercase tracking-widest text-xs mb-3" style={{ color: "hsl(210 80% 70%)", fontFamily: "Oswald, sans-serif" }}>{tagline}</p>
            <h1 className="font-display text-5xl md:text-7xl text-white uppercase mb-6 leading-tight">{title}</h1>
            <p className="text-white/75 text-base md:text-lg leading-relaxed max-w-2xl">{description}</p>
            <div className="flex flex-wrap gap-4 mt-10">
              <Link to="/contact" className="bg-brand-orange text-white font-semibold uppercase tracking-widest text-sm px-8 py-4 rounded flex items-center gap-2 hover:bg-brand-blue transition-all duration-300 hover:gap-3" style={{ fontFamily: "Oswald, sans-serif" }}>
                Notify Me <ArrowRight className="w-4 h-4" />
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
            <h2 className="font-display text-3xl md:text-5xl text-foreground uppercase">Key Features</h2>
          </RevealSection>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((f, i) => (
              <RevealSection key={i} delay={i * 60}>
                <div className="service-card bg-white border border-border rounded-lg p-6 flex items-start gap-4 shadow-card h-full">
                  <span className="w-8 h-8 rounded-full bg-brand-orange/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="w-3 h-3 rounded-full bg-brand-orange" />
                  </span>
                  <p className="text-foreground font-medium text-sm leading-relaxed">{f}</p>
                </div>
              </RevealSection>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-gradient-stats py-20 relative overflow-hidden">
        <div className="absolute left-0 top-0 w-52 h-52 dot-pattern opacity-20" />
        <RevealSection className="container mx-auto text-center relative z-10">
          <h2 className="font-display text-3xl md:text-5xl text-white uppercase mb-4">Be The First To Know</h2>
          <p className="text-white/70 mb-8 text-base max-w-xl mx-auto">Register your interest and get early access when we launch.</p>
          <Link to="/contact" className="bg-white text-brand-blue font-semibold uppercase tracking-widest text-sm px-10 py-4 rounded inline-flex items-center gap-2 hover:bg-brand-orange hover:text-white transition-all duration-300 hover:gap-3" style={{ fontFamily: "Oswald, sans-serif" }}>
            Get Early Access <ArrowRight className="w-4 h-4" />
          </Link>
        </RevealSection>
      </section>
    </main>
  );
}
