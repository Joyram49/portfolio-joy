import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Joy Ram Das — Full-Stack Developer",
  description:
    "Full-Stack Developer specializing in React.js, Next.js, Node.js, and modern web technologies. Building scalable, performant web applications.",
  keywords: [
    "Joy Ram Das",
    "Full Stack Developer",
    "React",
    "Next.js",
    "TypeScript",
    "Bangladesh",
  ],
  authors: [{ name: "Joy Ram Das" }],
  openGraph: {
    title: "Joy Ram Das — Full-Stack Developer",
    description: "Building elegant, high-performance web applications.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="antialiased">{children}</body>
    </html>
  );
}
