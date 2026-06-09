import type { Metadata } from "next";
import { Outfit, Fira_Code } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "./providers";

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
});

const firaCode = Fira_Code({
  variable: "--font-fira-code",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Shubham Singh Chauhan | Frontend Developer Portfolio",
  description:
    "Professional frontend developer portfolio of Shubham. Crafting production-grade React & Next.js applications with clean, responsive designs.",
  keywords: [
    "Frontend Developer",
    "React Engineer",
    "Next.js",
    "TypeScript",
    "Web Developer",
    "Shubham Portfolio",
  ],
  authors: [{ name: "Shubham" }],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${outfit.variable} ${firaCode.variable}`}>
      <body className="antialiased min-h-screen flex flex-col transition-colors duration-300">
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
