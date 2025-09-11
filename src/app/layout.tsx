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
    "moulendu.in",
    "UI/UX Design",
    "Web Development",
    "Full Stack Development",
    "React",
    "Next.js",
    "Node.js",
    "Cloud Technologies",
    "Portfolio Website",
    "Web Designer India",
    "React Developer India",
  ],
  authors: [{ name: "Moulendu Chowley" }],
  creator: "Moulendu Chowley",
  publisher: "Moulendu Chowley",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
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
    images: [
      {
        url: "https://moulendu.in/Profile.png",
        width: 1200,
        height: 630,
        alt: "Moulendu Chowley - UI/UX Designer & Full Stack Developer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Moulendu Chowley | UI/UX Designer & Full Stack Developer Portfolio",
    description:
      "Moulendu Chowley's portfolio - Expert UI/UX Designer and Full Stack Developer based in India. Specializing in React, Node.js, and modern web technologies.",
    creator: "@moulendu",
    images: ["https://moulendu.in/Profile.png"],
  },
  verification: {
    google: "_RUpmygqD_s7tC29ocFC240dK88I54hSZrmrB1nlwhM",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": ["Person", "ProfessionalService"],
    name: "Moulendu Chowley",
    url: "https://moulendu.in",
    image: "https://moulendu.in/Profile.png",
    jobTitle: "UI/UX Designer & Full Stack Developer",
    worksFor: {
      "@type": "Organization",
      name: "Freelancer",
    },
    description:
      "Expert UI/UX Designer and Full Stack Developer specializing in React, Node.js, and cloud technologies. Creating innovative web solutions with focus on performance and user experience.",
    knowsAbout: [
      "UI/UX Design",
      "Web Development",
      "React",
      "Next.js",
      "Node.js",
      "Full Stack Development",
      "Cloud Technologies",
      "JavaScript",
      "TypeScript",
      "Web Design",
      "Mobile App Development",
    ],
    sameAs: [
      "https://github.com/Moulendu-Chowley",
      "https://linkedin.com/in/moulendu-chowley",
      "https://www.instagram.com/moulendu.ux",
      "https://dribbble.com/moulendu",
    ],
    address: {
      "@type": "PostalAddress",
      addressCountry: "IN",
      addressRegion: "India",
    },
    email: "contact@moulendu.in",
    nationality: "Indian",
    alumniOf: "Developer",
    serviceType: ["Web Development", "UI/UX Design", "Full Stack Development"],
    areaServed: "Worldwide",
  };

  return (
    <>
      <SpeedInsights />
      <html lang="en">
        <head>
          <link rel="icon" href="/smallLogo.svg" type="image/svg+xml" />
          <link rel="canonical" href="https://moulendu.in" />
          <meta name="theme-color" content="#4F46E5" />
          <meta name="application-name" content="Moulendu Portfolio" />
          <meta
            name="apple-mobile-web-app-title"
            content="Moulendu Portfolio"
          />
          <meta name="apple-mobile-web-app-capable" content="yes" />
          <meta
            name="apple-mobile-web-app-status-bar-style"
            content="black-translucent"
          />
          <meta name="mobile-web-app-capable" content="yes" />
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
