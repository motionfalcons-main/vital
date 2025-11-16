import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import { SliderImages } from "@/constants";
import { memo } from "react";

const HeroSection = () => {
   const randomIndex = Math.floor(Math.random() * SliderImages.length);
   const randomImage = SliderImages[randomIndex];

   return (
      <Card className="mb-8 overflow-hidden">
         <CardContent className="p-0">
            <div className="flex flex-col md:flex-row">
               <div className="md:w-1/2">
                  <div className="relative w-full aspect-[16/9]">
                     <Image
                        src={randomImage}
                        alt="VitalCare Connect hero"
                        fill
                        sizes="(max-width: 768px) 100vw, 50vw"
                        className="object-cover"
                        priority
                     />
                  </div>
               </div>
               <div className="md:w-1/2 p-6 flex flex-col justify-center">
                  <h2 className="text-2xl font-semibold mb-2">Modern, Connected Healthcare</h2>
                  <p className="text-base text-muted-foreground">
                     At VitalCare Connect, we&apos;re dedicated to bringing quality healthcare to you through secure
                     video consultations, smart booking, and digital care tools—anytime, anywhere.
                  </p>
               </div>
            </div>
         </CardContent>
      </Card>
   );
};

export default memo(HeroSection);
