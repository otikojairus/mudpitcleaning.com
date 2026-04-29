import Link from "next/link";

type SiteLogoProps = {
  href?: string;
  invert?: boolean;
};

export function SiteLogo({ href = "/", invert = false }: SiteLogoProps) {
  return (
    <Link href={href} className="wmc-logo" aria-label="Mud Pit Canada home">
      <span className="wmc-logo-mark" aria-hidden="true">
        MP
      </span>
      <span className="wmc-logo-copy">
        <strong className={invert ? "text-white" : "text-[var(--ink)]"}>Mud Pit Canada</strong>
        <span className={invert ? "text-white/72" : "text-[var(--muted)]"}>Industrial cleaning dispatch</span>
      </span>
    </Link>
  );
}
