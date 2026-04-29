import type { Metadata } from "next";
import { JsonLd } from "@/components/json-ld";
import { PhoneLink } from "@/components/phone-link";
import { EMERGENCY_PHONE_DISPLAY, EMERGENCY_PHONE_E164, SITE_NAME, absoluteUrl } from "@/lib/seo";

export const metadata: Metadata = {
  title: "About Mud Pit Canada",
  description:
    "Mud Pit Canada organizes industrial cleaning, pit cleaning, hydrovac, vacuum truck, sewer, septic, catch basin, and tank cleaning pages across Canada.",
  alternates: {
    canonical: "/about",
  },
};

export default function AboutPage() {
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: SITE_NAME,
    url: absoluteUrl("/"),
    telephone: EMERGENCY_PHONE_E164,
    areaServed: "CA",
  };

  return (
    <main className="wmc-shell">
      <JsonLd data={organizationSchema} />
      <section className="wmc-page-hero">
        <div className="wmc-container max-w-4xl">
          <div className="wmc-page-meta">
            <span>About Mud Pit Canada</span>
            <span>Canada-wide</span>
          </div>
          <h1 className="wmc-page-title">Built for industrial cleaning jobs that need clear scoping before dispatch.</h1>
          <div className="wmc-page-hero-bottom">
            <p>
              Our job is to help site managers, property teams, and contractors move from a messy field condition to a
              practical service path.
            </p>
          </div>
        </div>
      </section>

      <section className="wmc-section">
        <div className="wmc-container max-w-4xl wmc-prose">
          <p>
            Mud Pit Canada focuses on cleaning work that sits between drainage, excavation, liquid waste, containment,
            and disposal. Pits, tanks, basins, sewers, and industrial yards often need a careful first pass before anyone
            can choose equipment.
          </p>
          <p>
            The site is organized around the way people search for field support: by service and by city. The guidance is
            written for the person trying to explain material, access, urgency, and site constraints clearly.
          </p>
          <p>
            If you are unsure what category your job falls into, call and describe the material, volume, location, and
            access. We will help decide whether the next step is vacuum removal, hydrovac, flushing, pumping, or tank
            cleaning.
          </p>
        </div>
      </section>

      <section className="wmc-closing-section">
        <div className="wmc-container wmc-final-panel">
          <h2>Need help choosing the right path?</h2>
          <p>Call Mud Pit Canada and start with what is on site, where it is, and how crews can reach it.</p>
          <PhoneLink className="wmc-btn wmc-btn-primary" location="about-closing" pageTier="about">
            Call {EMERGENCY_PHONE_DISPLAY}
          </PhoneLink>
        </div>
      </section>
    </main>
  );
}
