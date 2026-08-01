import type { Metadata } from "next";
import { Outfit, Fira_Code } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "./providers";
import CustomCursor from "@/components/ui/CustomCursor";
import ScrollProgress from "@/components/ui/ScrollProgress";

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
});

const firaCode = Fira_Code({
  variable: "--font-fira-code",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Shubham Singh Chauhan | Frontend Developer Portfolio",
  description:
    "Professional frontend developer portfolio of Shubham Singh Chauhan. Crafting production-grade React & Next.js applications with clean, responsive, and animated designs.",
  keywords: [
    "Frontend Developer",
    "React Engineer",
    "Next.js",
    "TypeScript",
    "Web Developer",
    "Shubham Singh Chauhan Portfolio",
  ],
  authors: [{ name: "Shubham Singh Chauhan" }],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${outfit.variable} ${firaCode.variable}`}>
      <body className="antialiased min-h-screen flex flex-col transition-colors duration-300">
        <ThemeProvider>
          <CustomCursor />
          <ScrollProgress />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
