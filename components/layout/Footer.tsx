import { Instagram, Linkedin } from 'lucide-react';

/**
 * Site footer — a Server Component. components/footer.html contains no
 * behaviour of its own: no listeners, no state, nothing from nav.js touches it.
 * The only dynamic pieces were the two lucide <i data-lucide> placeholders,
 * which lucide-react renders directly, so this ships zero client JS.
 *
 * The generic "Ready to Transform Your Business?" banner that used to open
 * this element now lives in FooterCta.tsx and is rendered by individual
 * pages (see that file's doc comment) rather than unconditionally here.
 *
 * The Privacy / Terms / Cookie Policy links point at routes that do not exist
 * and 404 today. They are reproduced exactly as-is: fixing them would be a
 * content change, not a migration. Tracked as a known pre-existing issue.
 */
export default function Footer() {
  return (
    <footer className="bg-ink text-white">
      <div className="mx-auto max-w-[var(--container-page)] px-5 sm:px-8 py-16 lg:py-20">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-[1.3fr_1fr_1fr_1fr_1fr] gap-12 lg:gap-10">
          <div>
            <a href="/" className="logo-lockup mb-5" aria-label="Grow Spark Consulting — home">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/logo/gsc-white.png"
                alt="Grow Spark Consulting"
                className="logo-img"
                width={1920}
                height={663}
                decoding="async"
              />
            </a>
            <p className="text-[16px] text-white/60 max-w-[260px] leading-relaxed mt-5">
              Business Transformation Consulting for ambitious founders and leadership teams.
            </p>
            <div className="flex items-center gap-3 mt-6">
              <a
                href="https://www.linkedin.com/company/growsparkconsulting"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Grow Spark Consulting on LinkedIn"
                className="inline-flex items-center justify-center w-9 h-9 rounded-full border border-white/20 text-white/70 hover:text-accent-bright hover:border-accent-bright transition-colors duration-200"
              >
                <Linkedin className="w-4 h-4" />
              </a>
              <a
                href="https://www.instagram.com/growsparkconsulting/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Grow Spark Consulting on Instagram"
                className="inline-flex items-center justify-center w-9 h-9 rounded-full border border-white/20 text-white/70 hover:text-accent-bright hover:border-accent-bright transition-colors duration-200"
              >
                <Instagram className="w-4 h-4" />
              </a>
            </div>
          </div>

          <div>
            <h3 className="font-body text-[12.5px] font-bold uppercase tracking-[0.08em] text-white/50 mb-5">
              Grow Spark
            </h3>
            <div className="flex flex-col gap-3.5">
              <a href="/about/" className="footer-link">About</a>
              <a href="/framework/" className="footer-link">Our Framework</a>
              <a href="/rnd/" className="footer-link">R&amp;D</a>
              <a href="/case-studies/" className="footer-link">Our Works</a>
            </div>
          </div>

          <div>
            <h3 className="font-body text-[12.5px] font-bold uppercase tracking-[0.08em] text-white/50 mb-5">
              Explore
            </h3>
            <div className="flex flex-col gap-3.5">
              <a href="/solutions/" className="footer-link">Solutions</a>
              <a href="/#challenges" className="footer-link">Business Challenges</a>
              <a href="/industries/" className="footer-link">Industries</a>
              <a href="/#insights" className="footer-link">Insights</a>
              <a href="/contact/" className="footer-link">Contact</a>
            </div>
          </div>

          <div>
            <h3 className="font-body text-[12.5px] font-bold uppercase tracking-[0.08em] text-white/50 mb-5">
              Who We Are
            </h3>
            <div className="flex flex-col gap-3.5">
              <a href="/leadership/" className="footer-link">Leadership</a>
              <a href="/alliances/" className="footer-link">Alliances</a>
              <a href="/careers/" className="footer-link">Careers</a>
              <a href="/founder/" className="footer-link">Founder</a>
              <a href="/contact/" className="footer-link">Contact</a>
            </div>
          </div>

          <div>
            <h3 className="font-body text-[12.5px] font-bold uppercase tracking-[0.08em] text-white/50 mb-5">
              Contact
            </h3>
            <div className="flex flex-col gap-3.5">
              <a href="mailto:info@growsparkconsulting.com" className="footer-link">
                info@growsparkconsulting.com
              </a>
              <a href="tel:+916381461106" className="footer-link">
                +91 63814 61106
              </a>
              <span className="text-[16px] text-white/62">
                Urapakkam, Chennai &mdash; 603211, India
              </span>
            </div>
          </div>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="mx-auto max-w-[var(--container-page)] px-5 sm:px-8 py-7 flex flex-col sm:flex-row justify-between items-center gap-4 text-center sm:text-left">
          <p className="text-[13px] text-white/50">
            &copy; 2026 Grow Spark Consulting. All rights reserved.
          </p>
          <div className="flex items-center gap-5">
            <a
              href="/privacy/"
              className="text-[13px] text-white/50 hover:text-white/70 transition-colors duration-200"
            >
              Privacy
            </a>
            <a
              href="/terms/"
              className="text-[13px] text-white/50 hover:text-white/70 transition-colors duration-200"
            >
              Terms
            </a>
            <a
              href="/cookie-policy/"
              className="text-[13px] text-white/50 hover:text-white/70 transition-colors duration-200"
            >
              Cookie Policy
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
