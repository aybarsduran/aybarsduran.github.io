import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Selim Aybars Duran — Game Developer & Software Engineer",
  description:
    "Portfolio of Selim Aybars Duran, a passionate Game Developer and Software Engineer specializing in Unity, VR/XR, C#, Java and Android Development.",
  keywords: [
    "Aybars Duran",
    "Game Developer",
    "Unity Developer",
    "VR Developer",
    "XR Developer",
    "Software Engineer",
    "C#",
    "Android",
    "Oculus Quest",
  ],
  authors: [{ name: "Selim Aybars Duran" }],
  creator: "Selim Aybars Duran",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://aybarsduran.com.tr",
    title: "Selim Aybars Duran — Game Developer & Software Engineer",
    description:
      "Portfolio of Selim Aybars Duran, a passionate Game Developer and Software Engineer specializing in Unity, VR/XR, C#, Java and Android Development.",
    siteName: "Aybars Duran Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Selim Aybars Duran — Game Developer & Software Engineer",
    description:
      "Portfolio of Selim Aybars Duran, a passionate Game Developer and Software Engineer specializing in Unity, VR/XR, C#, Java and Android Development.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="font-[family-name:var(--font-inter)] antialiased">
        {children}
      </body>
    </html>
  );
}
