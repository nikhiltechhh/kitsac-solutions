import { ExternalLink, Mail, MapPin, Phone, Clock } from "lucide-react";

export default function Contact() {
  return (
    <main>
      {/* Hero */}
      <section className="bg-gradient-stats relative overflow-hidden py-24">
        <div className="absolute left-0 top-0 w-64 h-full dot-pattern opacity-20" />
        <div className="absolute right-0 top-0 w-64 h-full dot-pattern-orange opacity-15" />
        <div className="container mx-auto relative z-10 text-center">
          <p className="text-brand-orange font-bold uppercase tracking-widest text-sm mb-3">Let's Talk</p>
          <h1 className="font-display text-5xl md:text-7xl text-white uppercase mb-6">Get In Touch</h1>
          <p className="text-white/70 text-lg max-w-2xl mx-auto">
            Have a project in mind? Want to learn more about our services? We'd love to hear from you.
          </p>
        </div>
      </section>

      {/* Contact details + form */}
      <section className="py-20">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
            {/* Contact info */}
            <div className="lg:col-span-2 flex flex-col gap-8">
              <div>
                <span className="section-label block mb-4" />
                <h2 className="font-display text-3xl md:text-4xl uppercase text-foreground mb-4">Contact Information</h2>
                <p className="text-muted-foreground leading-relaxed">
                  Reach out to us through any of the channels below. Our team is ready to assist you.
                </p>
              </div>

              <div className="flex flex-col gap-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-brand-blue/10 flex items-center justify-center text-brand-blue flex-shrink-0">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="font-bold uppercase tracking-wider text-sm text-foreground mb-1">Email</p>
                    <a href="mailto:Contact@kitsacitsolutions.com" className="text-muted-foreground text-sm hover:text-brand-blue transition-colors">
                      Contact@kitsacitsolutions.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-brand-blue/10 flex items-center justify-center text-brand-blue flex-shrink-0">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="font-bold uppercase tracking-wider text-sm text-foreground mb-1">Location</p>
                    <p className="text-muted-foreground text-sm">
                    KITSAC IT Solutions Pvt Ltd
4th floor, plot no 459, 100 Feet Rd, beside ysr statue, Ayyappa Society, Chanda Naik Nagar, Madhapur, Hyderabad, Telangana 500081

                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-brand-orange/10 flex items-center justify-center text-brand-orange flex-shrink-0">
                    <Clock className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="font-bold uppercase tracking-wider text-sm text-foreground mb-1">Business Hours</p>
                    <p className="text-muted-foreground text-sm">Mon–Sat: 9:00 AM – 6:00 PM IST</p>
                  </div>
                </div>
              </div>

              {/* Map placeholder */}
<div className="rounded-xl overflow-hidden border border-border h-48">
  <iframe
    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3806.1554167171316!2d78.38820567544626!3d17.452273900932013!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb91005237436f%3A0x7f4095d753aa9df5!2sKITSAC%20IT%20Solutions%20Pvt%20Ltd!5e0!3m2!1sen!2sin!4v1771524607066!5m2!1sen!2sin"
    className="w-full h-full"
    style={{ border: 0 }}
    allowFullScreen
    loading="lazy"
    referrerPolicy="no-referrer-when-downgrade"
    title="Hyderabad Location"
  />
</div>

            </div>

            {/* Google Form embed */}
            <div className="lg:col-span-3">
              <div className="bg-white border border-border rounded-xl shadow-card p-8 flex flex-col items-center text-center gap-6">
                <div>
                  <span className="section-label mx-auto block mb-4" />
                  <h3 className="font-display text-3xl uppercase text-foreground mb-3">Send Us a Message</h3>
                  <p className="text-muted-foreground text-sm">
                    Click the button below to fill out our contact form. We'll respond within 24 hours.
                  </p>
                </div>

                <div className="w-full border border-border rounded-lg overflow-hidden">
                  <iframe
                    src="https://docs.google.com/forms/d/e/1FAIpQLSef1XRCW_Qon2COEwbTptFumrL7ms21UTtYS8t6sKYJ1WTjww/viewform?embedded=true"
                    width="100%"
                    height="600"
                    frameBorder="0"
                    marginHeight={0}
                    marginWidth={0}
                    title="Contact Form"
                    className="block"
                  >
                    Loading…
                  </iframe>
                </div>

                <p className="text-muted-foreground text-xs">
                  Prefer to open in a new tab?{" "}
                  <a
                    href="https://docs.google.com/forms/d/e/1FAIpQLSef1XRCW_Qon2COEwbTptFumrL7ms21UTtYS8t6sKYJ1WTjww/viewform?usp=header"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-brand-blue hover:underline font-semibold inline-flex items-center gap-1"
                  >
                    Open Form <ExternalLink className="w-3 h-3" />
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
