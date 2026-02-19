import ServicePageLayout from "@/components/ServicePageLayout";
import internshipImg from "@/assets/internship.jpg";

export default function Internship() {
  return (
    <ServicePageLayout
      title="Internship Program"
      subtitle="Shape Your Future"
      description="KITSAC IT Solutions offers industry-grade internship programs designed to equip students and fresh graduates with real-world skills, hands-on experience, and a recognized certificate to kickstart their careers."
      image={internshipImg}
      features={[
        "Hands-on Project Experience",
        "Industry-Certified Certificate Provided",
        "IT & Software Development Tracks",
        "BPO & Communication Skills Training",
        "Pharmaceutical IT Exposure",
        "Mentorship by Industry Experts",
        "Flexible Duration (1–6 months)",
        "Letter of Recommendation",
        "Placement Assistance",
      ]}
      highlights={[
        {
          title: "Industry-Recognized Certificate",
          desc: "Receive a certificate recognized by industry partners, adding real value to your professional profile.",
        },
        {
          title: "Work on Live Projects",
          desc: "Gain practical experience by working on actual client projects under expert guidance.",
        },
        {
          title: "Expert Mentorship",
          desc: "Learn directly from experienced professionals who guide you through every step of your internship.",
        },
        {
          title: "Career Support",
          desc: "Get resume reviews, interview preparation, and job referrals to help launch your career.",
        },
      ]}
      ctaText="Apply for Internship"
    />
  );
}
