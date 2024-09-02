import type { Metadata } from "next";
import { Outfit } from "next/font/google";
import "./globals.css";
// components
import Header from "@/components/Header";
import Footer from "@/components/Footer";
// ThemeProvider
import { ThemeProvider } from '../components/ThemeProvider';


const outfit = Outfit({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Shani Abeywickrama | Portfolio",
  description: "Explore Shani Abeywickrama's portfolio, showcasing a diverse range of projects and innovative solutions in the digital realm. Discover how creativity and technology intersect to bring ideas to life.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={outfit.className}>
        <ThemeProvider attribute="class" defaultTheme="light">
        <Header/>
        {children}
        <Footer/>
        </ThemeProvider>
        </body>
    </html>
  );
}
