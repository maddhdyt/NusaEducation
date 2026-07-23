import type { Metadata } from "next";
import { Geist } from "next/font/google";
import localFont from "next/font/local";
import CustomCursor from "@/components/CustomCursor";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";
import Script from "next/script";
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
  verification: {
    google: "GvWy-dcwo95lISGYEBFUtKQlAHBCHvKuSQLcOyD5aXo",
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
        <noscript>
          <iframe 
            src="https://www.googletagmanager.com/ns.html?id=GTM-TVBCV7MX"
            height="0" 
            width="0" 
            style={{ display: "none", visibility: "hidden" }}
          />
        </noscript>
        <Script id="google-tag-manager" strategy="afterInteractive">
          {`
            (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
            new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
            'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer','GTM-TVBCV7MX');
          `}
        </Script>
        <Script async src="https://www.googletagmanager.com/gtag/js?id=AW-17187454188" strategy="afterInteractive" />
        <Script id="google-ads" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'AW-17187454188');
          `}
        </Script>
        <CustomCursor />
        {children}
        <FloatingWhatsApp />
      </body>
    </html>
  );
}
