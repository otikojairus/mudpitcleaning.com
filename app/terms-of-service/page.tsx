import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms Of Service",
  description: "Terms of service for Mud Pit Canada.",
};

export default function TermsPage() {
  return (
    <main className="wmc-shell">
      <section className="wmc-section">
        <div className="wmc-container max-w-4xl wmc-prose">
          <h1>Terms Of Service</h1>
          <p>Mud Pit Canada provides information and service coordination for pit cleaning, hydrovac, vacuum truck, catch basin, sewer, septic, tank, and industrial cleaning requests.</p>
          <p>Service availability, pricing, and response time depend on location, access, material type, volume, technician availability, and site conditions.</p>
          <p>Callers are responsible for providing accurate location details and safe access. If there is an immediate threat to life or safety, contact emergency services first.</p>
        </div>
      </section>
    </main>
  );
}
