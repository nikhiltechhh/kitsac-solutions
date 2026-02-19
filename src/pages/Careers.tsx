import { useEffect, useRef } from "react";
import { ExternalLink, Briefcase, GraduationCap, MapPin, Clock } from "lucide-react";

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

const openings = [
  {
    title: "Full Stack Developer",
    type: "Full-time",
    location: "Hyderabad",
    department: "IT",
    desc: "We're looking for a passionate Full Stack Developer with experience in React, Node.js, and cloud technologies to build innovative products.",
  },
  {
    title: "Medical Coder",
    type: "Full-time",
    location: "Hyderabad",
    department: "Pharmaceuticals",
    desc: "Certified medical coder (CPC/CCS preferred) to handle ICD-10 and CPT coding for healthcare clients.",
  },
  {
    title: "BPO Executive",
    type: "Full-time",
    location: "Hyderabad",
    department: "BPO",
    desc: "Fluent communicator for inbound/outbound calls with good English and Telugu/Hindi language skills.",
  },
  {
    title: "Business Development Executive",
    type: "Full-time",
    location: "Hyderabad",
    department: "Sales",
    desc: "Dynamic BD executive to identify opportunities, build client relationships, and drive revenue growth.",
  },
  {
    title: "IT Intern",
    type: "Internship",
    location: "Hyderabad / Remote",
    department: "IT",
    desc: "6-month internship for CS/IT students. Work on live projects and earn an industry-recognized certificate.",
  },
];

export default function Careers() {
  return (
    <main>
      {/* Hero */}
      <section className="bg-gradient-stats relative overflow-hidden py-24">
        <div className="absolute left-0 top-0 w-64 h-full dot-pattern opacity-20" />
        <div className="absolute right-0 top-0 w-64 h-full dot-pattern-orange opacity-15" />
        <div className="container mx-auto relative z-10 text-center">
          <p className="text-brand-orange font-semibold uppercase tracking-widest text-xs mb-3" style={{ fontFamily: "Oswald, sans-serif" }}>Join Our Team</p>
          <h1 className="font-display text-5xl md:text-7xl text-white uppercase mb-6">Build Your Career<br />With KITSAC</h1>
          <p className="text-white/70 text-base max-w-2xl mx-auto">
            We're always looking for talented individuals who are passionate about technology, innovation, and making a difference.
          </p>
        </div>
      </section>

      {/* Why join us */}
      <section className="py-24 bg-muted/30">
        <div className="container mx-auto">
          <RevealSection className="text-center mb-14">
            <span className="section-label mx-auto block mb-4" />
            <h2 className="font-display text-3xl md:text-5xl text-foreground uppercase">Why Join KITSAC?</h2>
          </RevealSection>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: <Briefcase className="w-8 h-8" />, title: "Growth Opportunities", desc: "Clear career paths with mentorship and learning programs" },
              { icon: <GraduationCap className="w-8 h-8" />, title: "Skill Development", desc: "Regular training, certifications, and workshops" },
              { icon: <MapPin className="w-8 h-8" />, title: "Great Work Culture", desc: "Collaborative, inclusive, and innovation-driven environment" },
              { icon: <Clock className="w-8 h-8" />, title: "Work-Life Balance", desc: "Flexible hours and supportive management" },
            ].map((item, i) => (
              <RevealSection key={i} delay={i * 80}>
                <div className="bg-white border border-border rounded-lg p-6 text-center service-card shadow-card h-full">
                  <div className="w-16 h-16 rounded-xl bg-brand-blue/10 flex items-center justify-center text-brand-blue mx-auto mb-4">{item.icon}</div>
                  <h3 className="font-display text-lg uppercase text-foreground mb-2">{item.title}</h3>
                  <p className="text-muted-foreground text-sm">{item.desc}</p>
                </div>
              </RevealSection>
            ))}
          </div>
        </div>
      </section>

      {/* Job openings */}
      <section className="py-24">
        <div className="container mx-auto">
          <RevealSection className="text-center mb-14">
            <span className="section-label mx-auto block mb-4" />
            <h2 className="font-display text-3xl md:text-5xl text-foreground uppercase">Current Openings</h2>
          </RevealSection>
          <div className="flex flex-col gap-4">
            {openings.map((job, i) => (
              <RevealSection key={i} delay={i * 60}>
                <div className="service-card bg-white border border-border rounded-lg p-6 md:p-8 flex flex-col md:flex-row items-start md:items-center gap-6">
                  <div className="flex-1">
                    <div className="flex flex-wrap items-center gap-3 mb-2">
                      <h3 className="font-display text-xl uppercase text-foreground">{job.title}</h3>
                      <span className={`text-xs font-semibold uppercase tracking-widest px-3 py-1 rounded-full ${job.type === "Internship" ? "bg-brand-orange/10 text-brand-orange" : "bg-brand-blue/10 text-brand-blue"}`} style={{ fontFamily: "Oswald, sans-serif" }}>
                        {job.type}
                      </span>
                    </div>
                    <div className="flex flex-wrap items-center gap-4 text-muted-foreground text-xs font-semibold uppercase tracking-wider mb-3">
                      <span className="flex items-center gap-1"><MapPin className="w-3 h-3" /> {job.location}</span>
                      <span className="flex items-center gap-1"><Briefcase className="w-3 h-3" /> {job.department}</span>
                    </div>
                    <p className="text-muted-foreground text-sm leading-relaxed">{job.desc}</p>
                  </div>
                  <a
                    href="https://docs.google.com/forms/d/e/1FAIpQLScPnS9IHaVbUkBCzFN-IVXZW-E1R9snGSBVazftG1RCPJx4FQ/viewform?usp=publish-editor"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-shrink-0 bg-brand-blue text-white font-semibold uppercase tracking-widest text-sm px-6 py-3 rounded flex items-center gap-2 hover:bg-brand-orange transition-all duration-300" style={{ fontFamily: "Oswald, sans-serif" }}
                  >
                    Apply Now <ExternalLink className="w-4 h-4" />
                  </a>
                </div>
              </RevealSection>
            ))}
          </div>

          <RevealSection className="mt-12 text-center">
            <div className="bg-muted/50 border border-border rounded-xl p-8 max-w-2xl mx-auto">
              <h3 className="font-display text-2xl uppercase text-foreground mb-3">Don't See Your Role?</h3>
              <p className="text-muted-foreground text-sm mb-6">We're always open to exceptional talent. Send us your resume and we'll get back to you.</p>
              <a
                href="https://docs.google.com/forms/d/e/1FAIpQLScPnS9IHaVbUkBCzFN-IVXZW-E1R9snGSBVazftG1RCPJx4FQ/viewform?usp=publish-editor"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-brand-orange text-white font-semibold uppercase tracking-widest text-sm px-8 py-4 rounded hover:bg-brand-blue transition-all duration-300" style={{ fontFamily: "Oswald, sans-serif" }}
              >
                Submit General Application <ExternalLink className="w-4 h-4" />
              </a>
            </div>
          </RevealSection>
        </div>
      </section>
    </main>
  );
}
