import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import "./globals.css";
import Script from "next/script";
import { Analytics } from "@vercel/analytics/react";

const roboto = Roboto({
  variable: "--font-roboto",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "tranvu.dev - an indie dev who keeps it minimal",
  description: "tranvu — indie developer building minimal tools and products.",
  keywords: [
    "tranvu dev",
    "tranvu.dev",
    "tranvu",
    "indie dev",
    "minimalist developer",
    "tranvu.dev",
    "trần vũ",
    "tran vu",
    "indie hacker",
    "developer portfolio",
  ],
  authors: [{ name: "Trần Vũ", url: "https://tranvu.dev" }],
  creator: "tranvu.dev",
  openGraph: {
    title: "tranvu.dev - Minimal Indie Developer",
    description: "Discover minimal products and tools by Trần Vũ.",
    url: "https://tranvu.dev",
    siteName: "tranvu.dev",
    locale: "vi_VN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "tranvu.dev - Minimal Indie Developer",
    description: "tranvu — indie developer building clean tools.",
    creator: "@tranvudev",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <head>
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-7BD69B274R"
          strategy="afterInteractive"
        />
        <Script id="gtag-init" strategy="afterInteractive">{`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-7BD69B274R');
        `}</Script>
        <link rel="canonical" href="https://tranvu.dev" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebSite",
              url: "https://tranvu.dev",
              name: "tranvu.dev",
              author: {
                "@type": "Person",
                name: "Trần Vũ",
              },
            }),
          }}
        />
      </head>
      <body
        className={`${roboto.variable} min-h-screen bg-background text-foreground antialiased`}
      >
        {children}
        <Analytics />
      </body>
    </html>
  );
}
