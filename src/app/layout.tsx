import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SchemaOrg from "@/components/SchemaOrg";

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["400", "500", "600", "800"],
  variable: "--font-montserrat",
  display: "swap",
});


export const metadata: Metadata = {
  title: "MH3 LearnCon GmbH",
  metadataBase: new URL("https://mh-learncon.com"),
  icons: {
    icon: [
      { url: "/favicon-32x32.png", type: "image/png", sizes: "32x32" },
      { url: "/favicon-16x16.png", type: "image/png", sizes: "16x16" },
      { url: "/favicon.ico", sizes: "any" },
    ],
  },
  robots: { index: false, follow: false },
  openGraph: {
    siteName: "MH3 LearnCon GmbH",
    locale: "de_DE",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="de" className={montserrat.variable}>
      <head>
        <SchemaOrg />
      </head>
      <body className="font-montserrat antialiased flex flex-col min-h-screen">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
