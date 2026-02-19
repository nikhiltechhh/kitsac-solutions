import ServicePageLayout from "@/components/ServicePageLayout";
import outsourcingImg from "@/assets/outsourcing.jpg";

export default function ProjectOutsourcing() {
  return (
    <ServicePageLayout
      title="Project Outsourcing"
      subtitle="Strategic Business Solutions"
      description="KITSAC IT Solutions offers comprehensive project outsourcing services, enabling businesses to leverage our expert teams and infrastructure for seamless project delivery on time and within budget."
      image={outsourcingImg}
      features={[
        "Full-cycle Project Management",
        "Dedicated Development Teams",
        "Agile & Scrum Methodologies",
        "Software Development Outsourcing",
        "Business Process Outsourcing",
        "Resource Augmentation",
        "24/7 Project Support",
        "Transparent Reporting & Communication",
        "Scalable Team Structures",
      ]}
      highlights={[
        {
          title: "Experienced Project Managers",
          desc: "Our certified PMs bring years of experience delivering complex projects across diverse industries.",
        },
        {
          title: "Cost-Effective Solutions",
          desc: "Reduce operational costs by up to 60% while maintaining world-class quality standards.",
        },
        {
          title: "Flexible Engagement Models",
          desc: "Choose from Fixed Price, Time & Material, or Dedicated Team models based on your project needs.",
        },
        {
          title: "On-Time Delivery",
          desc: "We maintain a 95%+ on-time delivery record using proven project management frameworks.",
        },
      ]}
    />
  );
}
