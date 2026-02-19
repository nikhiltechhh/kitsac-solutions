import ServicePageLayout from "@/components/ServicePageLayout";
import pharmaImg from "@/assets/pharma-service.jpg";

export default function Pharmaceuticals() {
  return (
    <ServicePageLayout
      title="Pharmaceutical Services"
      subtitle="Healthcare IT Solutions"
      description="KITSAC IT Solutions provides comprehensive pharmaceutical and healthcare IT services including medical coding, billing, and quality management systems that help healthcare organizations streamline operations and ensure compliance."
      image={pharmaImg}
      features={[
        "Medical Coding (ICD-10, CPT, HCPCS)",
        "Medical Billing & Claims Processing",
        "Revenue Cycle Management",
        "Quality Control Systems",
        "Quality Assurance Audits",
        "Electronic Health Record (EHR) Support",
        "Compliance & Regulatory Documentation",
        "Healthcare Data Management",
        "Denial Management & Appeals",
      ]}
      highlights={[
        {
          title: "Certified Medical Coders",
          desc: "Our team of certified coders ensures accurate coding for maximum reimbursement and minimal claim rejections.",
        },
        {
          title: "End-to-End Billing Support",
          desc: "From patient registration to final payment posting, we handle the complete revenue cycle management process.",
        },
        {
          title: "Rigorous Quality Assurance",
          desc: "Multi-level QA processes ensure accuracy rates above 98%, reducing errors and compliance risks.",
        },
        {
          title: "Regulatory Compliance",
          desc: "We stay up-to-date with HIPAA, CMS, and other regulatory requirements to keep your operations compliant.",
        },
      ]}
    />
  );
}
