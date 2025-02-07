"use client";

import "./globals.css";
import HeaderPage from "@/features/home-page/components/HeaderPage";
import HomePageContainer from "@/features/home-page/components/HomePageContainer";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <HomePageContainer children />
      <HeaderPage />
      <body>{children}</body>
    </html>
  );
}
