import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import Image from "next/image";
import { memo } from "react";

const LocationMap = () => {
   return (
      <Card className="mb-8">
         <CardHeader>
            <CardTitle className="text-xl font-semibold flex items-center gap-2">
               <Image src={"/assets/icons/map.svg"} height={23} width={23} alt="Location" className="h-5 w-5" />
               Our Location
            </CardTitle>
         </CardHeader>
         <CardContent>
            <div className="grid md:grid-cols-2 gap-6">
               <div className="space-y-4">
                  <div className="aspect-w-16 aspect-h-9">
                     <iframe
                        src="https://www.google.com/maps"
                        width="100%"
                        height="100%"
                        style={{ border: 0, borderRadius: "0.5rem" }}
                        allowFullScreen
                        loading="lazy"
                        title="Clinic location"
                     ></iframe>
                  </div>
                  <div className="bg-primary/5 p-4 rounded-lg">
                     <h3 className="font-medium mb-2">How to reach us:</h3>
                     <ul className="text-base space-y-1 text-muted-foreground">
                        <li>• 15 minutes drive from Calicut International Airport</li>
                        <li>• 30 minutes from Kozhikode Railway Station</li>
                        <li>• Bus stop: Chelannur Bus Stand (2 min walk)</li>
                     </ul>
                  </div>
               </div>
               <div className="space-y-4">
                  <div className="bg-primary/5 p-4 rounded-lg">
                     <h3 className="font-medium mb-2">Contact Information:</h3>
                     <ul className="space-y-2">
                        <li className="flex items-center gap-2 text-base">
                           <Image
                              src={"/assets/icons/map.svg"}
                              height={23}
                              width={23}
                              alt="Location"
                              className="h-4 w-4 text-primary"
                           />
                           <span>Your clinic address goes here</span>
                        </li>
                        <li className="flex items-center gap-2 text-base">
                           <Image
                              src={"/assets/icons/phone.svg"}
                              height={23}
                              width={23}
                              alt="Location"
                              className="h-4 w-4 text-primary"
                           />
                           <span>+00 0000 000000</span>
                        </li>
                        <li className="flex items-center gap-2 text-base">
                           <Image
                              src={"/assets/icons/email.svg"}
                              height={23}
                              width={23}
                              alt="Location"
                              className="h-4 w-4 text-primary"
                           />
                           <span>contact@your-app-domain.com</span>
                        </li>
                     </ul>
                  </div>
                  <div className="bg-primary/5 p-4 rounded-lg">
                     <h3 className="font-medium mb-2">Nearby Landmarks:</h3>
                     <ul className="text-base space-y-1 text-muted-foreground">
                        <li>• Chelannur Shiva Temple (0.5 km)</li>
                        <li>• Peruvayal Bhagavathi Temple (2 km)</li>
                        <li>• Kunnamangalam Town (5 km)</li>
                     </ul>
                  </div>
               </div>
            </div>
         </CardContent>
      </Card>
   );
};

export default memo(LocationMap);
