export default function Loading() {
  return (
    <main id="main" className="pt-24">
      <div className="mx-auto max-w-[var(--container-page)] px-5 sm:px-8 pt-10 pb-1">
        <div className="h-4 w-40 rounded bg-paper-sunken animate-pulse" />
      </div>

      <div className="mx-auto max-w-[760px] px-5 sm:px-8 py-16 space-y-4 animate-pulse">
        <div className="h-3 w-28 rounded bg-paper-sunken mx-auto" />
        <div className="h-10 w-full rounded bg-paper-sunken" />
        <div className="h-10 w-3/4 rounded bg-paper-sunken mx-auto" />
        <div className="h-64 w-full rounded-card bg-paper-sunken mt-10" />
      </div>
    </main>
  );
}
