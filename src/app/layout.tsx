import { SpeedInsights } from "@vercel/speed-insights/next";
import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://moulendu.in"),
  title: "Moulendu Chowley | UI/UX Designer & Full Stack Developer Portfolio",
  description:
    "Moulendu Chowley's portfolio - Expert UI/UX Designer and Full Stack Developer specializing in React, Node.js, and cloud technologies. Moulendu creates innovative web solutions with a focus on performance and user experience. Explore Moulendu's portfolio featuring modern web applications and technical insights.",
  keywords: [
    "Moulendu",
    "Moulendu Chowley",
    "Moulendu Portfolio",
    "Moulendu Developer",
    "Moulendu UI/UX Designer",
    "Moulendu Full Stack Developer",
    "UI/UX Design",
    "Web Development",
    "Full Stack Development",
    "React",
    "Next.js",
    "Node.js",
    "Cloud Technologies",
  ],
  authors: [{ name: "Moulendu Chowley" }],
  creator: "Moulendu Chowley",
  alternates: {
    canonical: "/",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://moulendu.in",
    title: "Moulendu Chowley | UI/UX Designer & Full Stack Developer Portfolio",
    description:
      "Moulendu Chowley's portfolio - Expert UI/UX Designer and Full Stack Developer specializing in React, Node.js, and cloud technologies. Moulendu creates innovative web solutions with focus on performance and user experience.",
    siteName: "Moulendu Chowley Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Moulendu Chowley | UI/UX Designer & Full Stack Developer Portfolio",
    description:
      "Moulendu Chowley's portfolio - Expert UI/UX Designer and Full Stack Developer based in India. Specializing in React, Node.js, and modern web technologies.",
    creator: "@moulendu",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Moulendu Chowley",
    url: "https://moulendu.in",
    jobTitle: "UI/UX Designer & Full Stack Developer",
    description:
      "Expert UI/UX Designer and Full Stack Developer specializing in React, Node.js, and cloud technologies",
    knowsAbout: [
      "UI/UX Design",
      "Web Development",
      "React",
      "Node.js",
      "Full Stack Development",
      "Cloud Technologies",
    ],
    sameAs: [
      "https://github.com/Moulendu-Chowley",
      "https://linkedin.com/in/moulendu-chowley",
    ],
    alumniOf: "Developer",
    nationality: "Indian",
  };

  return (
    <>
      <SpeedInsights />
      <html lang="en">
        <head>
          <link rel="icon" href="/smallLogo.svg" type="image/svg+xml" />
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{
              __html: JSON.stringify(structuredData),
            }}
          />
        </head>
        <body className="antialiased" suppressHydrationWarning={true}>
          {children}
        </body>
      </html>
    </>
  );
}
