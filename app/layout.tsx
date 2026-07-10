import type { Metadata } from "next";
import { Geist } from "next/font/google";
import localFont from "next/font/local";
import CustomCursor from "@/components/CustomCursor";
import "./globals.css";

const geist = Geist({
  variable: "--font-geist",
  subsets: ["latin"],
});

const featureFont = localFont({
  src: [
    {
      path: "./fonts/FeatureDisplay-Regular.ttf",
      weight: "400",
      style: "normal",
    },
    {
      path: "./fonts/FeatureDisplay-Bold.ttf",
      weight: "700",
      style: "normal",
    },
  ],
  variable: "--font-feature",
});

export const metadata: Metadata = {
  title: "Nusa Education | Creative Digital Partner",
  description: "Nusa Education membantu bisnis, lembaga, dan komunitas tumbuh melalui teknologi, desain, dan strategi digital yang relevan.",
  openGraph: {
    title: "Nusa Education | Creative Digital Partner",
    description: "Nusa Education membantu bisnis, lembaga, dan komunitas tumbuh melalui teknologi, desain, dan strategi digital yang relevan.",
    url: "https://nusaeducation.com",
    siteName: "Nusa Education",
    images: [
      {
        url: "https://ik.imagekit.io/yqhp1cmbp/logo%20nusa%20education.png",
        width: 1200,
        height: 630,
        alt: "Nusa Education Thumbnail",
      },
    ],
    locale: "id_ID",
    type: "website",
  },
  formatDetection: {
    telephone: false,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" data-scroll-behavior="smooth">
      <body suppressHydrationWarning className={`${geist.variable} ${featureFont.variable} font-sans antialiased`}>
        <CustomCursor />
        {children}
      </body>
    </html>
  );
}
