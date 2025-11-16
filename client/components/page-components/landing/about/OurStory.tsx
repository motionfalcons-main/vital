import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { memo } from "react";

const OurStory = () => {
   return (
      <Card className="mb-8">
         <CardHeader>
            <CardTitle className="text-xl font-semibold">Our Story</CardTitle>
         </CardHeader>
         <CardContent>
            <p className="text-base mb-3 text-muted-foreground">
               VitalCare Connect was created with the goal of making high-quality healthcare accessible from anywhere.
               Our journey has been one of growth, learning, and unwavering commitment to patient-centered digital care.
            </p>
            <p className="text-base mb-2 text-muted-foreground">
               We blend trusted medical expertise with intuitive technology to provide a seamless virtual care
               experience. Our comprehensive services include:
            </p>
            <ul className="list-disc list-inside mb-3 text-base text-muted-foreground">
               <li>Customized Ayurvedic therapies</li>
               <li>Natural herbal remedies</li>
               <li>Mindfulness practices</li>
               <li>Traditional Kalari classes</li>
            </ul>
            <p className="text-base italic text-muted-foreground">
               We invite you to experience a modern way to manage your health—secure, convenient, and tailored to your
               needs.
            </p>
         </CardContent>
      </Card>
   );
};

export default memo(OurStory);
