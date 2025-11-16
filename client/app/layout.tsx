import type { Metadata } from "next";
import { ThemeProvider } from "@/lib/providers/ThemeProvider";
import { AuthProvider } from "@/lib/providers/auth-provider";
import { SpeedInsights } from "@vercel/speed-insights/next";
import QueryProvider from "@/lib/providers/query-provider";
import { Plus_Jakarta_Sans } from "next/font/google";
import { Analytics } from "@vercel/analytics/react";
import { Toaster } from "@/components/ui/toaster";
import NavBar from "@/components/layout/NavBar";
import Footer from "@/components/layout/Footer";
import { cn } from "@/lib/utils";
import "../styles/globals.css";
import "../styles/chart.css";
import { MetaKeyWords } from "@/constants";

const inter = Plus_Jakarta_Sans({
   subsets: ["latin"],
   weight: ["300", "400", "700", "700"],
   variable: "--font-sans",
});

export const metadata: Metadata = {
   metadataBase: new URL("https://your-app-domain.com"),
   title: {
      template: "%s | VitalCare Connect",
      default: "VitalCare Connect - Modern Telehealth & Virtual Care",
   },
   description:
      "VitalCare Connect offers modern telehealth services including online consultations, virtual appointments, secure payments, and digital prescriptions for a seamless healthcare experience.",
   openGraph: {
      title: "VitalCare Connect - Modern Telehealth & Virtual Care",
      description:
         "Discover personalized, accessible healthcare with VitalCare Connect. Book virtual consultations and manage your care online.",
      type: "website",
      url: "/",
      siteName: "VitalCare Connect",
      locale: "en_US",
      images: [
         {
            url: "/og-image.webp",
            width: 1200,
            height: 630,
            alt: "VitalCare Connect - Modern Telehealth & Virtual Care",
         },
      ],
   },
   twitter: {
      card: "summary_large_image",
      title: "VitalCare Connect - Modern Telehealth & Virtual Care",
      description:
         "Book secure virtual consultations and manage your healthcare online with VitalCare Connect.",
      images: ["/og-image.webp"],
   },
   robots: {
      index: true,
      follow: true,
      googleBot: {
         index: true,
         follow: true,
         "max-video-preview": -1,
         "max-image-preview": "large",
         "max-snippet": -1,
      },
   },
   keywords: MetaKeyWords,
   alternates: {
      canonical: "/",
   },
   icons: {
      icon: "/favicon.ico",
      apple: "/favicon.ico",
   },
   category: "health",
};

export default function RootLayout({
   children,
   chatbot,
}: Readonly<{
   children: React.ReactNode;
   chatbot: React.ReactNode;
}>) {
   return (
      <html lang="en" suppressHydrationWarning>
         <body className={cn("min-h-[600px] bg-dark-300 font-sans antialiased", inter.variable)}>
            <QueryProvider>
               <ThemeProvider attribute="class" defaultTheme="dark">
                  <AuthProvider>
                     <NavBar />
                     <Toaster />
                     {children}
                     {chatbot}
                     <Analytics debug={false} />
                     <SpeedInsights debug={false} />
                     <Footer />
                  </AuthProvider>
               </ThemeProvider>
            </QueryProvider>
         </body>
      </html>
   );
}
