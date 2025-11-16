import { memo } from "react";
import AyurvedaSection from "@/components/page-components/landing/clinicians/AyurvedaSection";
import TestimonialsSection from "@/components/page-components/landing/clinicians/TestimonialsSection";
import FAQSection from "@/components/page-components/landing/clinicians/FAQSection";
import CTASection from "@/components/page-components/landing/clinicians/CTASection";
import DoctorsList from "@/components/page-components/landing/clinicians/DoctorsList";
import { Metadata } from "next";

export const metadata: Metadata = {
   title: "Our Clinicians ",
   description:
      "Meet our team of highly skilled healthcare professionals offering holistic and personalized care for your well-being. Explore modern care practices combined with personalized treatment approaches.",
   keywords: ["Healthcare", "Medical Professionals", "Holistic Healing", "Personalized Care", "Telemedicine"],
};

// Disable static generation to avoid build-time API fetch errors
export const dynamic = "force-dynamic";

const Page = async () => {
   let doctorsData = { items: [] };
   
   try {
      const apiUrl = process.env.NEXT_PUBLIC_API_URL;
      if (apiUrl && apiUrl.trim()) {
         const baseUrl = apiUrl.endsWith("/api") ? apiUrl : `${apiUrl}/api`;
         const response = await fetch(`${baseUrl}/doctors`, {
            next: { revalidate: 60 },
            headers: {
               "Content-Type": "application/json",
            },
         });

         if (response.ok) {
            const contentType = response.headers.get("content-type");
            if (contentType && contentType.includes("application/json")) {
               doctorsData = await response.json();
            }
         }
      }
   } catch (error) {
      // Silently fail during build or if API is unavailable
      console.error("Failed to fetch doctors data:", error);
   }

   return (
      <section className="py-12 bg-gradient-to-b from-primary/10 to-background">
         <div className="container mx-auto px-4">
            <h1 className="text-4xl font-bold text-center mb-6">Our Healthcare Experts</h1>
            <p className="text-xl text-center mb-12 max-w-2xl mx-auto text-muted-foreground">
               Discover our team of skilled healthcare professionals dedicated to your well-being. We combine modern
               medical practices with personalized care for optimal health outcomes.
            </p>
            <DoctorsList initialData={doctorsData.items || []} />
            <AyurvedaSection />
            <TestimonialsSection />
            <FAQSection />
            <CTASection />
         </div>
      </section>
   );
};

export default memo(Page);
