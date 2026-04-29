import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "Privacy policy for Mud Pit Canada.",
};

export default function PrivacyPolicyPage() {
  return (
    <main className="wmc-shell">
      <section className="wmc-section">
        <div className="wmc-container max-w-4xl wmc-prose">
          <h1>Privacy Policy</h1>
          <p>Mud Pit Canada collects only the information needed to understand and coordinate a service request.</p>
          <p>That may include your name, phone number, service address, city, and a description of the pit, tank, basin, sewer, septic, hydrovac, vacuum truck, or industrial cleaning concern.</p>
          <p>We do not sell personal information. If analytics or call tracking tools are used, they help us understand which pages are useful to visitors and improve the site experience.</p>
        </div>
      </section>
    </main>
  );
}
