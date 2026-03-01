import type { Metadata } from "next";
import { Space_Grotesk, Outfit, Dancing_Script, Montserrat } from "next/font/google";
import "./globals.css";

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

const dancingScript = Dancing_Script({
  variable: "--font-script",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const montserrat = Montserrat({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Stacey Mardt | Systems Administrator & Operations Catalyst",
  description: "Your Behind the Scenes Catalyst for Success. Systems Administrator with expertise in IT, administration, marketing, and workflow transformation.",
  keywords: ["Systems Administrator", "IT Professional", "Operations", "Workflow Optimization", "AI Automation", "Marketing", "Leadership"],
  authors: [{ name: "Stacey Mardt" }],
  openGraph: {
    title: "Stacey Mardt | Systems Administrator & Operations Catalyst",
    description: "Your Behind the Scenes Catalyst for Success",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${spaceGrotesk.variable} ${outfit.variable} ${dancingScript.variable} ${montserrat.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
