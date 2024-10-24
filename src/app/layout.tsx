import type { Metadata } from "next";
import { bricolageGrotesque, geistMono, geistSans } from "./fonts/fonts";
import "./globals.css";
import Navbar from "./components/navbar";

export const metadata: Metadata = {
  title: "Koffe",
  description: "Enjoy your coffe",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={geistSans.className}>
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${bricolageGrotesque.variable} antialiased`}
      >
        <Navbar />
        {children}
      </body>
    </html>
  );
}
