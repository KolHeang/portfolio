import type { Metadata } from "next";
import { Inter, Outfit, Battambang } from "next/font/google";
import { LanguageProvider } from "@/context/LanguageContext";
import { ThemeProvider } from "@/context/ThemeContext";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
  display: "swap",
});

const battambang = Battambang({
  variable: "--font-battambang",
  weight: ["400", "700"],
  subsets: ["khmer"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Kol Heang | Back-End Developer Portfolio",
  description: "Kol Heang portfolio for back-end development, Node.js, NestJS, Next.js, TypeScript, TypeORM, Laravel, and database-driven systems.",
  keywords: ["Kol Heang", "Back-End Developer", "Node.js", "NestJS", "Next.js", "TypeScript", "Laravel", "PostgreSQL", "Database Architect", "Cambodia Developer"],
  authors: [{ name: "Kol Heang" }],
  openGraph: {
    title: "Kol Heang | Back-End Developer",
    description: "Building reliable back-end systems, APIs, and database architectures with Node.js, NestJS, and Laravel.",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Kol Heang | Back-End Developer",
    description: "Building reliable back-end systems, APIs, and database architectures with Node.js, NestJS, and Laravel.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${outfit.variable} ${battambang.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col overflow-x-hidden font-sans" style={{ backgroundColor: "var(--bg-page)", color: "var(--text-primary)" }}>
        <ThemeProvider>
          <LanguageProvider>
            {children}
          </LanguageProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
