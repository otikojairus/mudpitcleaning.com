import type { Metadata } from "next";
import Link from "next/link";
import { JsonLd } from "@/components/json-ld";
import { PhoneLink } from "@/components/phone-link";
import { WATERMAIN_CITIES, WATERMAIN_HUB_PAGES, WATERMAIN_LOCATION_PAGES, WATERMAIN_SERVICES } from "@/lib/watermain-data";
import { EMERGENCY_PHONE_DISPLAY, EMERGENCY_PHONE_E164, SITE_NAME, absoluteUrl } from "@/lib/seo";

const HOME_STEPS = [
  "Describe the material, access, and urgency.",
  "Match the job to vacuum, hydrovac, flushing, pumping, or tank-cleaning equipment.",
  "Plan containment, disposal, and maintenance notes before crews roll.",
] as const;

export const metadata: Metadata = {
  title: "Industrial Cleaning, Pit Cleaning, and Vacuum Truck Services",
  description:
    "Mud Pit Canada organizes service and location pages for industrial pit cleaning, hydrovac, vacuum truck, catch basin, sewer, septic, and tank cleaning across Canada.",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: `Industrial Cleaning and Vacuum Truck Services | ${SITE_NAME}`,
    description: "Canada-wide pit, sewer, tank, hydrovac, and vacuum truck service pages for industrial and municipal sites.",
    url: absoluteUrl("/"),
    type: "website",
    siteName: SITE_NAME,
  },
};

export default function HomePage() {
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: SITE_NAME,
    url: absoluteUrl("/"),
    telephone: EMERGENCY_PHONE_E164,
    areaServed: "CA",
  };

  const priorityPages = WATERMAIN_LOCATION_PAGES.filter((page) => page.priority === "P1").slice(0, 8);

  return (
    <main className="wmc-shell">
      <JsonLd data={organizationSchema} />

      <section className="wmc-home-hero">
        <div className="wmc-container wmc-home-hero-grid">
          <div>
            <p className="wmc-kicker">Canada-wide field service directory</p>
            <h1 className="wmc-home-title">Cleaner pits, tanks, drains, and yards start with a better work order.</h1>
          </div>
          <div className="wmc-hero-console">
            {HOME_STEPS.map((step, index) => (
              <p key={step}>
                <span>{String(index + 1).padStart(2, "0")}</span>
                {step}
              </p>
            ))}
            <div className="wmc-actions">
              <PhoneLink className="wmc-btn wmc-btn-primary" location="homepage-hero" pageTier="home">
                Call {EMERGENCY_PHONE_DISPLAY}
              </PhoneLink>
              <Link href="/services" className="wmc-btn wmc-btn-secondary">
                View Services
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="wmc-service-strip">
        <div className="wmc-container">
          {WATERMAIN_HUB_PAGES.slice(0, 9).map((page) => (
            <Link key={page.slug} href={`/${page.slug}`}>
              {page.service}
            </Link>
          ))}
        </div>
      </section>

      <section className="wmc-section">
        <div className="wmc-container wmc-ledger-layout">
          <div className="wmc-ledger-sticky">
            <p className="wmc-kicker">Service Routes</p>
            <h2 className="wmc-title">Pick the work scope before you pick the truck.</h2>
            <p className="wmc-copy">
              The pages here are organized around field realities: volume, solids, drainage, confined access, disposal,
              and how much disruption the site can tolerate.
            </p>
          </div>
          <div className="wmc-service-ledger">
            {WATERMAIN_SERVICES.map((service) => (
              <article key={service.name} className="wmc-ledger-row">
                <h3>{service.name}</h3>
                <p>{service.summary}</p>
                <Link href={`/${service.hubSlug}`}>Open hub</Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="cities" className="wmc-map-section">
        <div className="wmc-container">
          <div className="wmc-section-head">
            <p className="wmc-kicker">Coverage</p>
            <h2 className="wmc-title">Find local pages by city.</h2>
          </div>
          <div className="wmc-city-ribbon">
            {WATERMAIN_CITIES.map((city) => {
              const firstPage = WATERMAIN_LOCATION_PAGES.find((page) => page.city === city.name && page.province === city.province);
              return (
                <Link key={`${city.name}-${city.province}`} id={city.slug} href={`/${firstPage?.slug ?? ""}`} className="wmc-city-chip">
                  <span>{city.name}</span>
                  <small>{city.provinceCode}</small>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      <section className="wmc-priority-section">
        <div className="wmc-container wmc-priority-layout">
          <div>
            <p className="wmc-kicker">High-demand pages</p>
            <h2 className="wmc-title">Start with major-market service routes.</h2>
          </div>
          <div className="wmc-priority-stack">
            {priorityPages.map((page) => (
              <Link key={page.slug} href={`/${page.slug}`}>
                {page.service} / {page.city}
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="wmc-closing-section">
        <div className="wmc-container wmc-final-panel">
          <h2>Need to scope a messy job fast?</h2>
          <p>Call with the location, material, and access notes. The first pass is about matching the work to the right equipment.</p>
          <PhoneLink className="wmc-btn wmc-btn-primary" location="homepage-closing" pageTier="home">
            Call {EMERGENCY_PHONE_DISPLAY}
          </PhoneLink>
        </div>
      </section>
    </main>
  );
}
