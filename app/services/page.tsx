import type { Metadata } from "next";
import Link from "next/link";
import { PhoneLink } from "@/components/phone-link";
import { WATERMAIN_SERVICES, getPagesByService } from "@/lib/watermain-data";
import { EMERGENCY_PHONE_DISPLAY, SITE_NAME, absoluteUrl } from "@/lib/seo";

export const metadata: Metadata = {
  title: "Industrial Cleaning Services Across Canada",
  description:
    "Explore pit cleaning, hydrovac, vacuum truck, catch basin, sewer, septic, tank, and industrial cleaning service pages across Canada.",
  alternates: {
    canonical: "/services",
  },
  openGraph: {
    title: `Industrial Cleaning Services Across Canada | ${SITE_NAME}`,
    description: "Service hubs for pit, tank, sewer, hydrovac, vacuum truck, septic, and catch basin cleaning.",
    url: absoluteUrl("/services"),
    type: "website",
    siteName: SITE_NAME,
  },
};

export default function ServicesPage() {
  return (
    <main className="wmc-shell">
      <section className="wmc-index-hero">
        <div className="wmc-container wmc-index-hero-inner">
          <div>
            <p className="wmc-kicker">Services</p>
            <h1 className="wmc-page-title">Industrial cleaning paths for liquid waste, sediment, grit, sludge, and drainage work.</h1>
          </div>
          <div className="wmc-index-summary">
            <p>
              Choose a service hub, then narrow by city. Each page keeps the focus on the job scope: access, equipment,
              removal method, disposal path, and next steps.
            </p>
            <PhoneLink className="wmc-btn wmc-btn-primary" location="services-hero" pageTier="services">
              Call {EMERGENCY_PHONE_DISPLAY}
            </PhoneLink>
          </div>
        </div>
      </section>

      <section className="wmc-index-section">
        <div className="wmc-container wmc-index-list">
          {WATERMAIN_SERVICES.map((service) => {
            const pages = getPagesByService(service.slug).filter((page) => !page.isHub);
            return (
              <article key={service.name} className="wmc-index-row">
                <div className="wmc-index-row-copy">
                  <p className="wmc-kicker">Service hub</p>
                  <h2>{service.name}</h2>
                  <p>{service.intro}</p>
                  <Link href={`/${service.hubSlug}`} className="wmc-text-link">
                    Open national hub
                  </Link>
                </div>
                <div className="wmc-index-city-list">
                  {pages.slice(0, 12).map((page) => (
                    <Link key={page.slug} href={`/${page.slug}`}>
                      {page.city}
                    </Link>
                  ))}
                </div>
              </article>
            );
          })}
        </div>
      </section>

      <section className="wmc-closing-section">
        <div className="wmc-container wmc-final-panel">
          <h2>Not sure which service fits?</h2>
          <p>Call and describe the material, volume, and access. We will help route the request.</p>
          <PhoneLink className="wmc-btn wmc-btn-primary" location="services-closing" pageTier="services">
            Call {EMERGENCY_PHONE_DISPLAY}
          </PhoneLink>
        </div>
      </section>
    </main>
  );
}
