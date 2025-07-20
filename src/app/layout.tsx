import { SpeedInsights } from "@vercel/speed-insights/next";
import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Moulendu Chowley - UI/UX Designer & Developer",
  description:
    "Portfolio website of Moulendu Chowley, a UI/UX designer and developer based in India.",
  keywords: [
    "UI/UX Design",
    "Web Development",
    "Portfolio",
    "React",
    "Next.js",
  ],
  authors: [{ name: "Moulendu Chowley" }],
  creator: "Moulendu Chowley",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://moulendu.dev",
    title: "Moulendu Chowley - UI/UX Designer & Developer",
    description:
      "Portfolio website of Moulendu Chowley, a UI/UX designer and developer based in India.",
    siteName: "Moulendu Chowley Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Moulendu Chowley - UI/UX Designer & Developer",
    description:
      "Portfolio website of Moulendu Chowley, a UI/UX designer and developer based in India.",
    creator: "@moulendu",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <SpeedInsights />
      <html lang="en">
        <head>
          <link rel="icon" href="/smallLogo.svg" type="image/svg+xml" />
        </head>
        <body className="antialiased">
          {children}
        </body>
      </html>
    </>
  );
}
