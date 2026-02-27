import { Geist, Geist_Mono, Playfair_Display, Manrope } from "next/font/google";
import "./globals.css";
import { LenisProvider } from "@/components/LenisProvider";
import Script from "next/script";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const playfairDisplay = Playfair_Display({
  variable: "--font-playfair-display",
  subsets: ["latin"],
});

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
});

export const metadata = {
  title: "Prateek Bachwani",
  description: "Personal Website. Whats is the idea behind this project?",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        {/* <!-- Google tag (gtag.js) --> */}
        <Script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-LNN0XWJBMT"
        ></Script>
        <Script id="google-analytics">
          {`  
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());

          gtag('config', 'G-LNN0XWJBMT');
          `}
        </Script>
        <Script></Script>
      </head>
      <body
        className={`${playfairDisplay.variable} ${manrope.variable} antialiased`}
      >
        <LenisProvider>{children}</LenisProvider>
      </body>
    </html>
  );
}
