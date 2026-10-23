import Script from "next/script";
import "./globals.css";
import "../css/styles.css";
import "../css/components.css";
import "../css/responsive.css";
import SmoothScroll from "@/components/SmoothScroll";

export const metadata = {
  title: "Apsolute",
  description: "Independent third-party inspection and QA services",
  manifest: "/manifest.json",
};

export const viewport = {
  themeColor: "#000000",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200"
        />
      </head>
      <body>
        <SmoothScroll />
        {children}
        <Script
          src="https://kit.fontawesome.com/0912058b17.js"
          crossOrigin="anonymous"
          strategy="afterInteractive"
        />
      </body>
    </html>
  );
}
