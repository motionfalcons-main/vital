import { Metadata } from "next";
import BookingSection from "@/components/page-components/landing/about/BookingSection";
import HeroSection from "@/components/page-components/landing/about/HeroSection";
import LocationMap from "@/components/page-components/landing/about/LocationMap";
import MissionAndValues from "@/components/page-components/landing/about/MissionAndValues";
import OurStory from "@/components/page-components/landing/about/OurStory";
import WhyChooseUs from "@/components/page-components/landing/about/WhyChooseUs";
import { memo } from "react";

export const metadata: Metadata = {
   title: "About Us",
   description:
      "Learn about our commitment to modern, patient-centered virtual healthcare. Discover our story, meet our team, and understand our mission to enhance your well-being through accessible digital care.",
   keywords: ["telehealth", "virtual care", "About Us", "Our Team", "Our Mission", "healthcare platform"],
};

const AboutPage = () => {
   return (
      <div className="min-h-screen bg-background py-8">
         <div className="container mx-auto px-4">
            <h1 className="mb-8 text-4xl font-bold text-center">About VitalCare Connect</h1>
            <HeroSection />
            <OurStory />
            <MissionAndValues />
            <WhyChooseUs />
            <LocationMap />
            <BookingSection />
         </div>
      </div>
   );
};

export default memo(AboutPage);
