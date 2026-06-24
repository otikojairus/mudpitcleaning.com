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
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: '(function(){var a=document.createElement("script");a.type="text/javascript";a.async=!0;a.defer=!0;a.src=document.location.protocol+"//dist.routingapi.com/jsapi/v1/retreaver.min.js";a.onload=a.onreadystatechange=function(){Retreaver.configure({host:"api.routingapi.com",prefix:"https:"==document.location.protocol?"https":"http"});(new Retreaver.Campaign({campaign_key:"ff97b1af347572af5363ff0efe41842d"})).auto_replace_numbers()};(document.getElementsByTagName("head")[0]||document.getElementsByTagName("body")[0]).appendChild(a)})();',
          }}
        />
      </head>
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
