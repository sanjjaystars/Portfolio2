import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Sanjjay | Full Stack Developer",
  description:
    "Premium Apple-inspired portfolio website for Sanjjay, a full stack developer focused on elegant UI and scalable backend systems.",
  openGraph: {
    title: "Sanjjay Portfolio",
    description: "Premium modern portfolio showcasing projects, skills, and journey.",
    type: "website"
  }
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
