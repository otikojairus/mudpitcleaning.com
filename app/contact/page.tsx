import type { Metadata } from "next";
import { PhoneLink } from "@/components/phone-link";
import { EMERGENCY_PHONE_DISPLAY } from "@/lib/seo";

export const metadata: Metadata = {
  title: "Contact Mud Pit Canada",
  description: "Call Mud Pit Canada for pit cleaning, hydrovac, vacuum truck, sewer, septic, tank, and industrial cleaning help.",
};

export default function ContactPage() {
  return (
    <main className="wmc-shell">
      <section className="wmc-section">
        <div className="wmc-container max-w-3xl">
          <div className="wmc-contact-panel">
            <p className="wmc-kicker">Contact</p>
            <h1>Call Mud Pit Canada</h1>
            <p>
              Phone is the fastest path when a pit, tank, basin, sewer line, or industrial area needs cleaning. Tell us
              what material is present, where the site is, and how crews can access it.
            </p>
            <PhoneLink className="wmc-contact-phone" location="contact-page" pageTier="contact">
              {EMERGENCY_PHONE_DISPLAY}
            </PhoneLink>
          </div>
        </div>
      </section>
    </main>
  );
}
