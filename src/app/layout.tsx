import type { Metadata, Viewport } from "next";
import { Inter, Outfit, Battambang } from "next/font/google";
import { LanguageProvider } from "@/context/LanguageContext";
import { ThemeProvider } from "@/context/ThemeContext";
import { PWARegister } from "@/components/PWARegister";
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

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: dark)", color: "#0B1120" },
    { media: "(prefers-color-scheme: light)", color: "#0B1120" },
  ],
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export const metadata: Metadata = {
  title: "Kol Heang | Back-End Developer Portfolio",
  description:
    "Kol Heang portfolio for back-end development, Node.js, NestJS, Next.js, TypeScript, Drizzle ORM, Prisma, TypeORM, Laravel, and database-driven systems.",
  applicationName: "Kol Heang",
  keywords: [
    "Kol Heang",
    "Back-End Developer",
    "Node.js",
    "NestJS",
    "Next.js",
    "TypeScript",
    "Drizzle ORM",
    "Prisma",
    "TypeORM",
    "Laravel",
    "PostgreSQL",
    "Database Architect",
    "Cambodia Developer",
    "PWA",
  ],
  authors: [{ name: "Kol Heang" }],
  manifest: "/manifest.webmanifest",
  appleWebApp: {
    capable: true,
    statusBarStyle: "default",
    title: "Kol Heang",
  },
  icons: {
    icon: [
      { url: "/icons/icon-192x192.png", sizes: "192x192", type: "image/png" },
      { url: "/icons/icon-512x512.png", sizes: "512x512", type: "image/png" },
      { url: "/icons/icon.svg", type: "image/svg+xml" },
    ],
    apple: [
      { url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" },
      { url: "/icons/apple-touch-icon.png", sizes: "180x180", type: "image/png" },
    ],
  },
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
            <PWARegister />
          </LanguageProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}

