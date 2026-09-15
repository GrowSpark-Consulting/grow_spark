export default function Loading() {
  return (
    <main id="main" className="pt-24">
      <div className="mx-auto max-w-[var(--container-page)] px-5 sm:px-8 pt-10 pb-1">
        <div className="h-4 w-24 rounded bg-paper-sunken animate-pulse" />
      </div>

      <section className="py-16 sm:py-20 lg:py-24">
        <div className="mx-auto max-w-[var(--container-page)] px-5 sm:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-7">
            {Array.from({ length: 6 }).map((_, i) => (
              <div
                key={i}
                className="rounded-card border border-hairline bg-paper-raised overflow-hidden animate-pulse"
              >
                <div className="w-full aspect-[16/10] bg-paper-sunken" />
                <div className="p-[34px] space-y-3">
                  <div className="h-3 w-20 rounded bg-paper-sunken" />
                  <div className="h-5 w-full rounded bg-paper-sunken" />
                  <div className="h-4 w-3/4 rounded bg-paper-sunken" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
