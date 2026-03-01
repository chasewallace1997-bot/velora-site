import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Nav from "@/components/nav";
import Footer from "@/components/footer";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://veloralabs.io"),
  title: {
    default: "Velora — AI-native endurance training OS",
    template: "%s | Velora Labs",
  },
  description:
    "Baseline-driven training, adaptive blocks, and multi-sport support for serious endurance athletes. Built for runners, cyclists, and swimmers who want coaching that adapts.",
  openGraph: {
    title: "Velora — AI-native endurance training OS",
    description:
      "Baseline-driven training, adaptive blocks, and multi-sport support for serious endurance athletes.",
    url: "https://veloralabs.io",
    siteName: "Velora Labs",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Velora — AI-native endurance training OS",
    description:
      "Baseline-driven training, adaptive blocks, and multi-sport support.",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="antialiased">
        <Nav />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
