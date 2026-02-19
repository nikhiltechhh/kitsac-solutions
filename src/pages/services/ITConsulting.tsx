import ServicePageLayout from "@/components/ServicePageLayout";
import itImg from "@/assets/it-consulting.jpg";

export default function ITConsulting() {
  return (
    <ServicePageLayout
      title="IT Consulting & Services"
      subtitle="Technology Excellence"
      description="From custom web applications to enterprise-grade e-commerce platforms, KITSAC IT Solutions delivers innovative, scalable, and high-performance digital solutions tailored to your unique business requirements."
      image={itImg}
      features={[
        "Customized Web Applications",
        "E-Commerce Website Development",
        "Organizational & Corporate Websites",
        "Website Support & Maintenance",
        "UI/UX Design & Prototyping",
        "Mobile App Development",
        "API Development & Integration",
        "Cloud Solutions & Migration",
        "IT Strategy & Consulting",
      ]}
      highlights={[
        {
          title: "Custom-Built Solutions",
          desc: "Every project is built from scratch to match your exact requirements — no templates, no compromises.",
        },
        {
          title: "Modern Tech Stack",
          desc: "We use the latest technologies including React, Node.js, Next.js, and cloud platforms for future-ready solutions.",
        },
        {
          title: "Ongoing Support & Maintenance",
          desc: "Post-launch, our team provides comprehensive support to ensure your platform runs smoothly 24/7.",
        },
        {
          title: "SEO & Performance Optimized",
          desc: "All our websites are built with SEO best practices and performance optimization for maximum reach.",
        },
      ]}
    />
  );
}
