import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "BlackBox Designs",
  description: "Innovative and user-focused web solutions to elevate your business.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        {/* Facivons and Thumbnails for Google and Safari */}
        <link rel="apple-touch-icon" sizes="180x180" href="favicon_io/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="favicon_io/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="favicon_io/favicon-16x16.png" />
        <link rel="manifest" href="favicon_io/site.webmanifest" />
        
        {/* Instantly Pixel Code Script for Website Data Tracking */}
        <script id="vtag-ai-js" async src="https://r2.leadsy.ai/tag.js" data-pid="1gNebR82irMIRhJ10" data-version="062024"></script>
      
      </head>
      <body className="bg-black scroll-smooth">
        {children}
      </body>
    </html>
  );
}
