import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Sailtik | Matcha Powder Supplier for B2B Wholesale & OEM",
  description:
    "Sailtik supplies matcha powder grades for cafés, brands, distributors, and manufacturers with OEM support and export-ready documentation.",
  openGraph: {
    title: "Sailtik | Matcha Powder Supplier for B2B Wholesale & OEM",
    description:
      "Matcha powder supplier offering multiple grades, OEM/private label support, and export-ready documentation for global B2B buyers.",
    url: "https://sailtik.com",
    siteName: "Sailtik",
    locale: "en_US",
    type: "website"
  }
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-white text-deep-green font-sans">{children}</body>
    </html>
  );
}
