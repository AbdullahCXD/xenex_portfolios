import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const font = Roboto({})

export const metadata: Metadata = {
  title: "Xenex - Portfolio",
  description: "The main portfolio for my work",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <meta name="apple-mobile-web-app-title" content="XenStudios" />
      </head>
      <body
        className={`${font.className} text-xl font-bold antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
