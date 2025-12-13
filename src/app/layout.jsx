import "./globals.css";

export const metadata = {
  title: "Mazen Hashem | Frontend Web Developer",
  description:
    "A frontend web developer crafting clean and responsive web experiences. This is the portfolio of Mazen Hashem, showcasing selected projects, skills, and ways to get in touch.",
  keywords: [
    "Mazen Hashem",
    "frontend web developer",
    "web developer",
    "React",
    "Next.js",
    "portfolio",
  ],
  openGraph: {
    title: "Mazen Hashem | Frontend Web Developer",
    description:
      "A frontend web developer crafting clean and responsive web experiences. Explore projects and contact Mazen Hashem.",
    url: "https://mazen_hashem-portfolio.vercel.app",
    siteName: "Mazen Hashem Portfolio",
    images: [
      {
        url: "/images/thumbnail.png",
        width: 1200,
        height: 630,
        alt: "Preview of Mazen Hashem's portfolio website",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Mazen Hashem | Frontend Web Developer",
    description:
      "A frontend web developer crafting clean and responsive web experiences.",
    images: ["/images/thumbnail.png"],
  },
  icons: {
    icon: "/icons/favicon.ico",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <meta
          name="description"
          content="A frontend web developer crafting clean and responsive web experiences. This is the portfolio of Mazen Hashem, showcasing selected projects, skills, and ways to get in touch."
        />
      </head>
      <body>
        {/* All page content gets rendered here */}
        {children}
      </body>
    </html>
  );
}
