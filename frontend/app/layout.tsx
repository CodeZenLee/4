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
        <link rel="apple-touch-icon" sizes="180x180" href="favicon_io/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="favicon_io/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="favicon_io/favicon-16x16.png" />
        <link rel="manifest" href="favicon_io/site.webmanifest" />
      </head>
      <body>
        {children}
      </body>
    </html>
  );
}
