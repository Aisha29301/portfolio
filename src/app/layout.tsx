import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Aishwarya Lokhande — Software Engineer",
  description:
    "Backend Software Engineer specialising in Java, Spring Boot, and fintech microservices. " +
    "Building Account Aggregator systems, audit-grade APIs, and observable infrastructure in Pune, India.",
  authors: [{ name: "Aishwarya Lokhande" }],
   icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
  openGraph: {
    title: "Aishwarya Lokhande — Software Engineer",
    description: "Java & Spring Boot engineer building fintech backend systems.",
    type: "website",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
