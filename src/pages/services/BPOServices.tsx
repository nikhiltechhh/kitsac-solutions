import ServicePageLayout from "@/components/ServicePageLayout";
import bpoImg from "@/assets/bpo-service.jpg";

export default function BPOServices() {
  return (
    <ServicePageLayout
      title="BPO Services"
      subtitle="Customer Excellence"
      description="KITSAC IT Solutions provides world-class BPO services with trained professionals handling inbound and outbound telecalling, ensuring your customers receive exceptional service at every touchpoint."
      image={bpoImg}
      features={[
        "Inbound Customer Support",
        "Outbound Sales & Telecalling",
        "Lead Generation Campaigns",
        "Customer Retention Programs",
        "Technical Support Helpdesk",
        "Order Processing & Management",
        "Appointment Scheduling",
        "Market Research & Surveys",
        "Multilingual Support",
      ]}
      highlights={[
        {
          title: "Trained Call Center Professionals",
          desc: "Our agents undergo rigorous training in communication, product knowledge, and customer handling.",
        },
        {
          title: "Scalable Operations",
          desc: "Easily scale your operations up or down based on seasonal demands and business growth.",
        },
        {
          title: "Quality Monitoring",
          desc: "Real-time call monitoring, recording, and quality scoring ensure consistent service excellence.",
        },
        {
          title: "Data-Driven Insights",
          desc: "Comprehensive reporting and analytics to track performance, identify trends, and optimize strategies.",
        },
      ]}
    />
  );
}
