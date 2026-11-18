import type { Metadata } from "next";
import { Manrope, Newsreader, Geist_Mono } from "next/font/google";
import "./globals.css";
import Loader from "@/components/Loader";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import JsonLd from "@/components/JsonLd";
import { company } from "@/lib/content";
import { organization, website } from "@/lib/seo";

const sans = Manrope({ variable: "--font-manrope", subsets: ["latin"] });
const serif = Newsreader({ variable: "--font-newsreader", subsets: ["latin"], style: ["normal", "italic"] });
const mono = Geist_Mono({ variable: "--font-geist-mono", subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL(company.url),
  title: { default: "Hyperstellar Technology | AI engineering for the enterprise", template: "%s | Hyperstellar Technology" },
  description:
    "Hyperstellar Technology provides AI engineering, infrastructure, LLM inference and Forward Deployed Engineering, plus AI-first products for enterprises.",
  applicationName: company.name,
  keywords: ["AI engineering", "LLM inference", "Forward Deployed Engineering", "enterprise AI", "AI infrastructure", "managed services", "Hyperstellar"],
  alternates: { canonical: "./" }, // each page's own URL
  openGraph: { siteName: company.name, type: "website", locale: "en_US" },
  twitter: { card: "summary_large_image" },
  robots: { index: true, follow: true, googleBot: { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1, "max-video-preview": -1 } },
};

// Runs before paint so the saved theme never flashes. Light is the default.
const themeScript = `try{document.documentElement.dataset.theme=localStorage.getItem("theme")||"light"}catch(e){document.documentElement.dataset.theme="light"}`;

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" data-theme="light" data-scroll-behavior="smooth" suppressHydrationWarning className={`${sans.variable} ${serif.variable} ${mono.variable} antialiased`}>
      <head><script dangerouslySetInnerHTML={{ __html: themeScript }} /><JsonLd data={organization} /><JsonLd data={website} /></head>
      <body className="min-h-screen font-sans">
        <a href="#main" className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded-full focus:bg-ion focus:px-4 focus:py-2 focus:text-on-ion">Skip to content</a>
        <Loader />
        <noscript><style>{"#loader{display:none}"}</style></noscript>
        <Nav />
        <main id="main" className="contents">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
