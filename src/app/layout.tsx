import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Elliot Kindergarten - Private Kindergarten in Tbilisi",
  description: "Elliot Kindergarten - a cozy private kindergarten in Tbilisi with bilingual education, a private yard, and an individual approach to each child. Ages 2-6 years.",
  keywords: "kindergarten, Tbilisi, private kindergarten, children, education, bilingual, Georgia",
  openGraph: {
    title: "Elliot Kindergarten - Private Kindergarten in Tbilisi",
    description: "Warm atmosphere, individual approach, and your child's development in a comfortable environment",
    type: "website",
    locale: "en_US",
    alternateLocale: ["ru_RU", "ka_GE"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
