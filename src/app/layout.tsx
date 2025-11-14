import type { Metadata } from "next";
import localFont from "next/font/local";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const font = localFont({
  src: "../fonts/Minecraft.ttf"
})

export const metadata: Metadata = {
  title: "XenStudios",
  description: "A Studio that creates anything you desire: Minecraft Plugins, Discord Bots and Websites",
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
