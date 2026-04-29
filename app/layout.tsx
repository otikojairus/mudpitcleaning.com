import type { Metadata } from "next";
import { Barlow_Condensed, Manrope } from "next/font/google";
import "./globals.css";
import { SiteNavbar } from "@/components/site-navbar";
import { SiteFooter } from "@/components/site-footer";
import { EMERGENCY_PHONE_DISPLAY, SITE_NAME, absoluteUrl, getSiteUrl } from "@/lib/seo";

const manrope = Manrope({
  variable: "--font-body",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const barlowCondensed = Barlow_Condensed({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["500", "600", "700", "800"],
});

export const metadata: Metadata = {
  metadataBase: new URL(getSiteUrl()),
  title: {
    default: `${SITE_NAME} | Industrial Pit, Tank, Sewer, and Vacuum Truck Cleaning`,
    template: `%s | ${SITE_NAME}`,
  },
  description:
    "Mud Pit Canada helps industrial, municipal, commercial, and rural sites plan pit cleaning, hydrovac, vacuum truck, catch basin, sewer, septic, and tank cleaning across Canada.",
  applicationName: SITE_NAME,
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    title: `${SITE_NAME} | Industrial Pit, Tank, Sewer, and Vacuum Truck Cleaning`,
    description:
      "Canada-wide service pages for industrial cleaning, pit cleaning, hydrovac, vacuum truck, catch basin, sewer, septic, and tank cleaning.",
    url: absoluteUrl("/"),
    siteName: SITE_NAME,
    locale: "en_CA",
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
    <html lang="en">
      <body className={`${manrope.variable} ${barlowCondensed.variable} antialiased`}>
        <SiteNavbar />
        {children}
        <SiteFooter />
        <a className="sr-only" href="tel:18887022090">
          Call Mud Pit Canada at {EMERGENCY_PHONE_DISPLAY}
        </a>
      </body>
    </html>
  );
}
