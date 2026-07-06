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
  title: "Nusa Agency | Creative Digital Partner",
  description: "Nusa Agency membantu bisnis, lembaga, dan komunitas tumbuh melalui teknologi, desain, dan strategi digital yang relevan.",
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
    <html lang="en">
      <body suppressHydrationWarning className={`${geist.variable} ${featureFont.variable} font-sans antialiased`}>
        <CustomCursor />
        {children}
      </body>
    </html>
  );
}
