/**
 * All copy for /growspark-transformation-framework/ lives here.
 *
 * Every string wrapped in [SQUARE BRACKETS] is a placeholder awaiting approved
 * content — search this file for "PENDING" / "TO BE PROVIDED" to find them.
 * The section components only render what is in these objects, so replacing
 * copy never means touching layout code. List lengths drive the layout too:
 * add or remove items and the grids adapt.
 *
 * Nothing here may state a result, statistic, rating, review or guarantee
 * that has not been approved and cannot be evidenced.
 */

/** In-page anchor every call to action points at (the lead form section). */
export const FORM_ANCHOR = '#assessment';

export const announcement = {
  lead: '[ANNOUNCEMENT LABEL — PENDING]',
  detail: '[ANNOUNCEMENT DETAIL — CONTENT PENDING]',
};

export const header = {
  cta: '[HEADER CTA]',
};

export const cta = {
  /** Primary call to action, repeated in the hero, options and FAQ sections. */
  label: '[PRIMARY CTA — PENDING]',
};

export const hero = {
  eyebrow: '[HERO EYEBROW · CONTENT PENDING]',
  headline: '[HERO HEADLINE — CONTENT PENDING]',
  subheading:
    '[HERO SUBHEADING — CONTENT PENDING. One or two sentences that frame the problem and the promise of the page.]',
  media: {
    label: '[HERO VIDEO / IMAGE PLACEHOLDER]',
    note: '16:9 · replace with approved video or image',
  },
  /** Short proof points under the CTA. Only approved, verifiable facts. */
  proof: ['[PROOF POINT 01]', '[PROOF POINT 02 — PENDING]'],
};

export const covers = {
  heading: '[SECTION HEADING — PENDING]',
  items: [
    '[KEY POINT 01 — CONTENT PENDING]',
    '[KEY POINT 02 — CONTENT PENDING]',
    '[KEY POINT 03 — CONTENT PENDING]',
    '[KEY POINT 04 — CONTENT PENDING]',
  ],
  /** Five tiles in the reference collage arrangement (2 over 3). */
  images: ['[IMAGE 01]', '[IMAGE 02]', '[IMAGE 03]', '[IMAGE 04]', '[IMAGE 05]'],
};

export const constraints = {
  eyebrow: '[SECTION EYEBROW]',
  heading: '[CONSTRAINTS HEADLINE — CONTENT PENDING.]',
  /** Rendered in the accent colour on its own line, as in the reference. */
  headingAccent: '[ACCENT LINE — PENDING.]',
  body: '[SECTION COPY — CONTENT PENDING. Two or three sentences introducing the framework or the constraints it addresses.]',
  cards: [
    { title: '[CARD TITLE 01]', body: '[CARD COPY — CONTENT PENDING. Two to four sentences describing this stage, constraint or phase.]' },
    { title: '[CARD TITLE 02]', body: '[CARD COPY — CONTENT PENDING. Two to four sentences describing this stage, constraint or phase.]' },
    { title: '[CARD TITLE 03]', body: '[CARD COPY — CONTENT PENDING. Two to four sentences describing this stage, constraint or phase.]' },
    { title: '[CARD TITLE 04]', body: '[CARD COPY — CONTENT PENDING. Two to four sentences describing this stage, constraint or phase.]' },
  ],
};

/**
 * Gradient band that occupies the reference's founders slot (§A-4). Neutral
 * by design: no founder profile, photo, biography or signature belongs here.
 */
export const band = {
  image: '[IMAGE PLACEHOLDER]',
  heading: '[BAND HEADING — PENDING]',
  paragraphs: [
    '[SECTION COPY — CONTENT PENDING. A paragraph of supporting context for this band, around three to four lines at desktop width.]',
    '[SECTION COPY — CONTENT PENDING. A second paragraph that develops the point above, around three to four lines at desktop width.]',
    '[SECTION COPY — CONTENT PENDING. A short closing paragraph.]',
  ],
  /** The white card beneath the band; first and last entries render bold. */
  card: [
    '[CARD LEAD — CONTENT PENDING. An opening statement in bold, two to three lines long.]',
    '[CARD COPY — CONTENT PENDING. A supporting paragraph, three to four lines long.]',
    '[CARD COPY — CONTENT PENDING. A supporting paragraph, three to four lines long.]',
    '[CARD COPY — CONTENT PENDING. A short paragraph.]',
    '[CARD CLOSING LINE — CONTENT PENDING, in bold.]',
  ],
};

export const booking = {
  eyebrow: '[SECTION EYEBROW]',
  heading: '[AUDIENCE HEADLINE — CONTENT PENDING]',
  body: '[SECTION COPY — CONTENT PENDING. Who this is for, and why the first conversation matters.]',
  /** Icon keys map to lucide icons in BookingSection.tsx. */
  audiences: [
    { icon: 'building', label: '[AUDIENCE 01]' },
    { icon: 'users', label: '[AUDIENCE 02]' },
    { icon: 'chart', label: '[AUDIENCE 03]' },
    { icon: 'layers', label: '[AUDIENCE 04]' },
    { icon: 'settings', label: '[AUDIENCE 05]' },
    { icon: 'target', label: '[AUDIENCE 06]' },
  ],
  form: {
    steps: ['Your details', 'We reply personally'],
    heading: '[FORM HEADING — PENDING]',
    intro: '[FORM INTRO — CONTENT PENDING. One line on what happens after submitting.]',
    submit: 'Submit request',
    successTitle: 'Request received',
    successBody: '[SUCCESS MESSAGE — CONTENT PENDING. What happens next and when.]',
    note: '[FORM FOOTNOTE — PENDING]',
  },
} as const;

export const options = {
  heading: '[OPTIONS HEADLINE — CONTENT PENDING]',
  body: '[SECTION COPY — CONTENT PENDING. One or two lines introducing the options below.]',
  /**
   * `muted` reproduces the reference's de-emphasised card treatment; `badge`
   * is the pill that overlaps the top edge. Both are presentational only.
   */
  cards: [
    { title: '[OPTION 01]', status: '[STATUS]', badge: '[BADGE]', muted: true },
    { title: '[OPTION 02]', status: '[STATUS]', badge: '[BADGE]', muted: true },
    { title: '[OPTION 03]', status: '[STATUS]', badge: null, muted: false },
    { title: '[OPTION 04]', status: '[STATUS]', badge: null, muted: false },
  ],
};

export const proof = {
  eyebrow: '[PROOF EYEBROW]',
  heading: '[PROOF HEADLINE — CONTENT PENDING]',
  body: '[SECTION COPY — CONTENT PENDING. One line introducing the proof below.]',
  /** Cards shown on screens ≤991px before "Show all" (reference behaviour). */
  mobileLimit: 6,
  items: Array.from({ length: 9 }, (_, i) => ({
    quote:
      '[TESTIMONIAL CONTENT — TO BE PROVIDED. Approved client words only; placeholder length shows how a typical entry wraps.]',
    name: `[CLIENT NAME ${String(i + 1).padStart(2, '0')}]`,
    meta: '[ROLE · COMPANY — TO BE PROVIDED]',
  })),
};

export const faq = {
  eyebrow: '[FAQ EYEBROW]',
  heading: 'Frequently asked questions',
  items: Array.from({ length: 7 }, (_, i) => ({
    question: `[FAQ QUESTION ${String(i + 1).padStart(2, '0')} — CONTENT PENDING]`,
    answer: '[FAQ ANSWER — CONTENT PENDING. Two to four sentences answering the question above.]',
  })),
};
