import type { Metadata } from "next";
import { site } from "@/lib/site";
import "./globals.css";

export const metadata: Metadata = {
  title: `${site.brand.name} — ${site.brand.tagline}`,
  description:
    "Growtth is the AI growth platform built for the beauty industry. AI voice receptionist, client CRM, automated Google reviews and instant lead follow-up — so your salon stays fully booked, effortlessly.",
  metadataBase: new URL(`https://www.${site.brand.domain}`),
  openGraph: {
    title: `${site.brand.name} — ${site.brand.tagline}`,
    description:
      "AI voice, CRM, Google reviews and lead follow-up for salons, studios and beauty pros.",
    type: "website",
    locale: "en_GB",
    siteName: site.brand.name,
  },
  robots: { index: true, follow: true },
  icons: {
    icon: [{ url: "/favicon.svg", type: "image/svg+xml" }],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en-GB">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Fraunces:opsz,wght@9..144,300;9..144,400;9..144,500&family=Inter:wght@400;450;500;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="font-sans antialiased">{children}</body>
    </html>
  );
}
