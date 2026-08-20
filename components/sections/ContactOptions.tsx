import { Instagram, Linkedin, Mail, MapPin, Phone } from 'lucide-react';

/**
 * Transcribed from sections/contact-options.html by scripts/html-to-tsx.py.
 * Server Component: the source partial carries no behaviour of its own,
 * so nothing here needs the browser. Markup, classes, ids, data
 * attributes and content are unchanged from the source.
 */
export default function ContactOptions() {
  return (
    <>
      <section className="py-20 sm:py-24 lg:py-28 bg-paper">
        {' '}
        <div className="mx-auto max-w-[var(--container-page)] px-5 sm:px-8">
          {' '}
          <div className="section-head" data-reveal="">
            {' '}
            <span className="eyebrow block mb-3.5">
              Get In Touch
            </span>
            {' '}
            <h2>
              Other ways to reach us directly
            </h2>
            {' '}
            <p>
              Prefer not to fill out a form? Any of these routes reach the same team.
            </p>
            {' '}
          </div>
          {' '}
          <div className="grid-hairline grid-cols-1 sm:grid-cols-2" data-reveal="">
            {' '}
            <div className="why-card">
              {' '}
              <span className="inline-flex items-center justify-center w-11 h-11 rounded-full bg-accent-tint text-accent shrink-0">
                {' '}
                <Mail className="w-[18px] h-[18px]" />
                {' '}
              </span>
              {' '}
              <div>
                {' '}
                <h3 className="text-[16.5px] font-semibold mb-1.5">
                  Email
                </h3>
                {' '}
                <a href="mailto:info@growsparkconsulting.com" className="text-[16px] text-ink-soft hover:text-accent transition-colors duration-200">
                  info@growsparkconsulting.com
                </a>
                {' '}
              </div>
              {' '}
            </div>
            {' '}
            <div className="why-card">
              {' '}
              <span className="inline-flex items-center justify-center w-11 h-11 rounded-full bg-accent-tint text-accent shrink-0">
                {' '}
                <Phone className="w-[18px] h-[18px]" />
                {' '}
              </span>
              {' '}
              <div>
                {' '}
                <h3 className="text-[16.5px] font-semibold mb-1.5">
                  Phone
                </h3>
                {' '}
                <a href="tel:+916381461106" className="text-[16px] text-ink-soft hover:text-accent transition-colors duration-200">
                  +91 63814 61106
                </a>
                {' '}
              </div>
              {' '}
            </div>
            {' '}
            <div className="why-card">
              {' '}
              <span className="inline-flex items-center justify-center w-11 h-11 rounded-full bg-accent-tint text-accent shrink-0">
                {' '}
                <MapPin className="w-[18px] h-[18px]" />
                {' '}
              </span>
              {' '}
              <div>
                {' '}
                <h3 className="text-[16.5px] font-semibold mb-1.5">
                  Location
                </h3>
                {' '}
                <p className="text-[16px] text-ink-soft">
                  Urapakkam, Chennai — 603211, India
                </p>
                {' '}
              </div>
              {' '}
            </div>
            {' '}
            <div className="why-card">
              {' '}
              <span className="inline-flex items-center justify-center w-11 h-11 rounded-full bg-accent-tint text-accent shrink-0">
                {' '}
                <Linkedin className="w-[18px] h-[18px]" />
                {' '}
              </span>
              {' '}
              <div>
                {' '}
                <h3 className="text-[16.5px] font-semibold mb-1.5">
                  LinkedIn
                </h3>
                {' '}
                <a href="https://www.linkedin.com/company/growsparkconsulting" target="_blank" rel="noopener noreferrer" className="text-[16px] text-ink-soft hover:text-accent transition-colors duration-200">
                  Connect with Grow Spark
                </a>
                {' '}
              </div>
              {' '}
            </div>
            {' '}
            <div className="why-card sm:col-span-2">
              {' '}
              <span className="inline-flex items-center justify-center w-11 h-11 rounded-full bg-accent-tint text-accent shrink-0">
                {' '}
                <Instagram className="w-[18px] h-[18px]" />
                {' '}
              </span>
              {' '}
              <div>
                {' '}
                <h3 className="text-[16.5px] font-semibold mb-1.5">
                  Instagram
                </h3>
                {' '}
                <a href="https://www.instagram.com/growsparkconsulting/" target="_blank" rel="noopener noreferrer" className="text-[16px] text-ink-soft hover:text-accent transition-colors duration-200">
                  @growsparkconsulting
                </a>
                {' '}
              </div>
              {' '}
            </div>
            {' '}
          </div>
          {' '}
        </div>
        {' '}
      </section>
      {' '}
    </>
  );
}
