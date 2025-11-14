import type { Metadata } from "next";
import localFont from "next/font/local";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const font = localFont({
  src: "../fonts/Minecraft.ttf"
})

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
        className={`${font.className} font-bold antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
