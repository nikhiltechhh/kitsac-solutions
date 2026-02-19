import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

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
  title,
  subtitle,
  description,
  image,
  features,
  highlights,
  ctaText = "Get In Touch",
}: ServicePageLayoutProps) {
  return (
    <main>
      {/* Hero */}
      <section
        className="relative min-h-[480px] flex items-center"
        style={{
          backgroundImage: `url(${image})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0" style={{ background: "linear-gradient(135deg, hsl(210 68% 25% / 0.93) 0%, hsl(220 20% 10% / 0.85) 100%)" }} />
        {/* Dot pattern */}
        <div className="absolute top-8 left-8 w-32 h-32 dot-pattern opacity-40" />
        <div className="absolute bottom-8 right-8 w-32 h-32 dot-pattern-orange opacity-30" />
        <div className="container mx-auto relative z-10 py-20">
          <div className="max-w-3xl">
            <p className="text-brand-orange font-bold uppercase tracking-widest text-sm mb-3">{subtitle}</p>
            <h1 className="font-display text-4xl md:text-6xl text-white uppercase mb-6 leading-tight">{title}</h1>
            <p className="text-white/80 text-lg leading-relaxed max-w-2xl">{description}</p>
            <div className="flex flex-wrap gap-4 mt-8">
              <Link
                to="/contact"
                className="bg-brand-orange text-white font-bold uppercase tracking-widest text-sm px-8 py-4 rounded flex items-center gap-2 hover:bg-brand-blue transition-colors"
              >
                {ctaText} <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                to="/"
                className="border-2 border-white/40 text-white font-bold uppercase tracking-widest text-sm px-8 py-4 rounded hover:border-white hover:bg-white/10 transition-colors"
              >
                Back to Home
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto">
          <div className="text-center mb-14">
            <span className="section-label mx-auto block mb-4" />
            <h2 className="font-display text-3xl md:text-5xl text-foreground uppercase">What We Offer</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((f, i) => (
              <div key={i} className="service-card bg-white border border-border rounded-lg p-6 flex items-start gap-4 shadow-card">
                <span className="w-8 h-8 rounded-full bg-brand-blue/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <span className="w-3 h-3 rounded-full bg-brand-blue" />
                </span>
                <p className="text-foreground font-semibold text-sm leading-relaxed">{f}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Highlights */}
      <section className="py-20">
        <div className="container mx-auto">
          <div className="text-center mb-14">
            <span className="section-label mx-auto block mb-4" />
            <h2 className="font-display text-3xl md:text-5xl text-foreground uppercase">Why Choose Us</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {highlights.map((h, i) => (
              <div key={i} className="service-card flex gap-6 p-8 border border-border rounded-lg shadow-card bg-white">
                <div className="w-1 bg-brand-orange rounded-full flex-shrink-0 min-h-full" />
                <div>
                  <h3 className="font-display text-xl uppercase text-foreground mb-2">{h.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{h.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="bg-gradient-stats py-16 relative overflow-hidden">
        <div className="absolute left-0 top-0 w-48 h-48 dot-pattern opacity-20" />
        <div className="absolute right-0 bottom-0 w-48 h-48 dot-pattern-orange opacity-20" />
        <div className="container mx-auto text-center relative z-10">
          <h2 className="font-display text-3xl md:text-5xl text-white uppercase mb-4">Ready to Get Started?</h2>
          <p className="text-white/70 mb-8 text-lg max-w-xl mx-auto">Let's discuss your requirements and create a custom solution for your business.</p>
          <Link
            to="/contact"
            className="bg-white text-brand-blue font-bold uppercase tracking-widest text-sm px-10 py-4 rounded inline-flex items-center gap-2 hover:bg-brand-orange hover:text-white transition-colors"
          >
            Contact Us <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>
    </main>
  );
}
