import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { JsonLd } from "@/components/json-ld";
import { PhoneLink } from "@/components/phone-link";
import {
  WATERMAIN_PAGES,
  buildCanonicalPath,
  buildFaqs,
  buildMeta,
  buildSchemas,
  buildServiceFocus,
  getPagesByCity,
  getRelatedPages,
  getWaterMainPageBySlug,
} from "@/lib/watermain-data";
import { EMERGENCY_PHONE_DISPLAY } from "@/lib/seo";

type PageProps = {
  params: Promise<{ slug: string[] }>;
};

const PROCESS_STEPS = [
  ["Scope", "Confirm material, access points, hose reach, and operating constraints."],
  ["Remove", "Vacuum, flush, pump, or excavate using the method that fits the site."],
  ["Closeout", "Review disposal path, repeat buildup, and maintenance notes."],
] as const;

export async function generateStaticParams() {
  return WATERMAIN_PAGES.map((page) => ({ slug: page.slug.split("/") }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const page = getWaterMainPageBySlug(slug.join("/"));
  return page ? buildMeta(page) : {};
}

export default async function LandingPage({ params }: PageProps) {
  const { slug } = await params;
  const page = getWaterMainPageBySlug(slug.join("/"));

  if (!page) {
    notFound();
  }

  const faqs = buildFaqs(page);
  const serviceFocus = buildServiceFocus(page);
  const relatedPages = getRelatedPages(page);
  const cityPages = page.city ? getPagesByCity(page.city).filter((item) => item.slug !== page.slug).slice(0, 5) : [];
  const placeLabel = page.city ? `${page.city}, ${page.provinceCode}` : "Canada-wide";

  return (
    <main className="wmc-shell">
      <JsonLd data={buildSchemas(page)} />

      <section className="wmc-page-hero">
        <div className="wmc-container wmc-page-hero-grid">
          <div>
            <div className="wmc-page-meta">
              <span>{placeLabel}</span>
              <span>{page.pageType}</span>
            </div>
            <h1 className="wmc-page-title">{page.h1}</h1>
          </div>
          <div className="wmc-dispatch-card">
            <span>Dispatch note</span>
            <p>
              Start with the site conditions: what is in the pit, basin, tank, or line; how crews can reach it; and
              whether work needs to happen around active operations.
            </p>
            <PhoneLink className="wmc-btn wmc-btn-primary" location={page.slug} pageTier={page.tier}>
              Call {EMERGENCY_PHONE_DISPLAY}
            </PhoneLink>
          </div>
        </div>
      </section>

      <section className="wmc-section">
        <div className="wmc-container wmc-two-column">
          <aside className="wmc-spec-panel">
            <p className="wmc-kicker">Field Checks</p>
            <ul>
              <li>Material type and estimated volume</li>
              <li>Truck access, hose distance, and traffic control</li>
              <li>Disposal requirements and site safety limits</li>
            </ul>
          </aside>
          <article className="wmc-prose">
            <p>{page.serviceIntro}</p>
            <p>
              {page.city ? `${page.city} crews` : "Canadian crews"} often need to balance cleaning speed with access,
              containment, and documentation. The practical path is to identify what is present, remove it cleanly, and
              leave the site with maintenance notes that reduce repeat disruption.
            </p>
          </article>
        </div>
      </section>

      <section className="wmc-process-section">
        <div className="wmc-container">
          <div className="wmc-section-head">
            <p className="wmc-kicker">Work Order Flow</p>
            <h2 className="wmc-title">A site-first process for messy infrastructure work.</h2>
          </div>
          <div className="wmc-process-grid">
            {PROCESS_STEPS.map(([title, body], index) => (
              <article key={title} className="wmc-process-card">
                <span>{String(index + 1).padStart(2, "0")}</span>
                <h3>{title}</h3>
                <p>{body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="wmc-section">
        <div className="wmc-container wmc-ops-grid">
          <div>
            <p className="wmc-kicker">Service Brief</p>
            <h2 className="wmc-title">What the crew is trying to solve.</h2>
            <p className="wmc-copy">{serviceFocus.summary}</p>
          </div>
          <div className="wmc-checklist">
            {serviceFocus.points.map((point) => (
              <p key={point}>{point}</p>
            ))}
          </div>
        </div>
      </section>

      <section className="wmc-faq-section">
        <div className="wmc-container">
          <div className="wmc-section-head">
            <p className="wmc-kicker">Questions</p>
            <h2 className="wmc-title">{page.city ? `Planning notes for ${page.city}` : "Planning notes for national coverage"}.</h2>
          </div>
          <div className="wmc-faq-list">
            {faqs.map((faq) => (
              <article key={faq.question} className="wmc-faq-item">
                <h3>{faq.question}</h3>
                <p>{faq.answer}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="wmc-related-section">
        <div className="wmc-container wmc-related-layout">
          <div>
            <p className="wmc-kicker">Route Options</p>
            <h2 className="wmc-title">{page.city ? `More work scopes in ${page.city}.` : "Related Canadian service hubs."}</h2>
          </div>
          <div className="wmc-link-list">
            {[...cityPages, ...relatedPages].slice(0, 8).map((item) => (
              <Link key={item.slug} href={`/${item.slug}`}>
                {item.city ? `${item.service} / ${item.city}` : item.service}
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="wmc-closing-section">
        <div className="wmc-container wmc-final-panel">
          <h2>Ready to scope the job?</h2>
          <p>Call with the service address, access notes, and what material or drainage problem is showing up.</p>
          <PhoneLink className="wmc-btn wmc-btn-primary" location={page.slug} pageTier={page.tier}>
            Call {EMERGENCY_PHONE_DISPLAY}
          </PhoneLink>
        </div>
      </section>

      <section className="pb-14">
        <div className="wmc-container flex flex-wrap gap-4 text-sm text-[var(--muted)]">
          <Link href="/" className="font-bold text-[var(--ink)]">
            Home
          </Link>
          <Link href="/services" className="font-bold text-[var(--ink)]">
            Services
          </Link>
          <span>{buildCanonicalPath(page.slug)}</span>
        </div>
      </section>
    </main>
  );
}
