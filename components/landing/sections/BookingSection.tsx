import { Building2, ChartLine, Layers, Settings, Target, Users, type LucideIcon } from 'lucide-react';
import LeadForm from '../LeadForm';
import { booking } from '../content';

const ICONS: Record<(typeof booking.audiences)[number]['icon'], LucideIcon> = {
  building: Building2,
  users: Users,
  chart: ChartLine,
  layers: Layers,
  settings: Settings,
  target: Target,
};

/**
 * Reference §A-5 (#call): navy, two columns — who it's for, with a 3×2 grid
 * of icon tiles, beside a white booking-widget card. The card holds the free
 * lead form (POST /api/contact/). This is the section every CTA scrolls to.
 */
export default function BookingSection() {
  return (
    <section id="assessment" className="lp-section lp-section--navy lp-anchor" aria-labelledby="lp-booking-heading">
      <div className="lp-container lp-booking">
        <div className="lp-booking__text">
          <p className="lp-eyebrow">{booking.eyebrow}</p>
          <h2 id="lp-booking-heading" className="lp-display lp-display--xl lp-display--booking">
            {booking.heading}
          </h2>
          <p className="lp-lead">{booking.body}</p>
          <ul className="lp-audiences">
            {booking.audiences.map(({ icon, label }) => {
              const Icon = ICONS[icon];
              return (
                <li key={label}>
                  <Icon className="lp-audiences__icon" aria-hidden="true" />
                  {label}
                </li>
              );
            })}
          </ul>
        </div>

        <div className="lp-widget">
          <ol className="lp-widget__steps" aria-label="Steps">
            {booking.form.steps.map((step, index) => (
              <li key={step} aria-current={index === 0 ? 'step' : undefined}>
                {step}
              </li>
            ))}
          </ol>
          <div className="lp-widget__body">
            <h3 id="lead-form-heading" className="lp-widget__title">
              {booking.form.heading}
            </h3>
            <p className="lp-widget__intro">{booking.form.intro}</p>
            <LeadForm />
          </div>
        </div>
      </div>
    </section>
  );
}
