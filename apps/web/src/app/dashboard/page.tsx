function Dot({ tone }: { tone: "done" | "progress" | "planned" | "blocked" }) {
  const cls =
    tone === "done"
      ? "bg-[#2f7d32]"
      : tone === "progress"
        ? "bg-[#c58a00]"
        : tone === "blocked"
          ? "bg-[#a63838]"
          : "bg-[#3f66d6]";
  return <span className={`h-2.5 w-2.5 ${cls}`} />;
}

export default function DashboardPage() {
  return (
    <main className="min-h-screen bg-cream px-6 py-8 text-charcoal md:px-10 md:py-10">
      <div className="mx-auto w-full max-w-6xl space-y-6">
        <header className="grid gap-4 border-b border-sage/30 pb-5 lg:grid-cols-[1fr_auto] lg:items-end">
          <div>
            <p className="font-mono text-xs uppercase tracking-[0.16em] text-muted">Dashboard</p>
            <h1 className="mt-2 font-serif text-4xl italic md:text-5xl">Benchmark Workspace</h1>
            <p className="mt-2 max-w-2xl text-sm text-muted">
              One place to run comparisons, inspect results, and make release decisions.
            </p>
          </div>
          <div className="flex flex-wrap gap-2 lg:justify-end">
            <button className="rounded-none border border-charcoal/25 px-4 py-2 text-sm font-semibold">
              Import Prompts
            </button>
            <button className="rounded-none border border-charcoal/25 px-4 py-2 text-sm font-semibold">
              Manage Suites
            </button>
            <button className="rounded-none border border-charcoal bg-charcoal px-4 py-2 text-sm font-semibold text-white">
              New Run
            </button>
          </div>
        </header>

        <section className="grid gap-3 md:grid-cols-3">
          <article className="panel-surface rounded-none p-4">
            <p className="font-mono text-[11px] uppercase tracking-[0.14em] text-muted">Active Suite</p>
            <p className="mt-2 text-base font-semibold">checkout-flow-v2</p>
            <p className="mt-1 text-xs text-muted">42 prompts loaded</p>
          </article>
          <article className="panel-surface rounded-none p-4">
            <p className="font-mono text-[11px] uppercase tracking-[0.14em] text-muted">Available Models</p>
            <p className="mt-2 text-base font-semibold">2 models</p>
            <p className="mt-1 text-xs text-muted">Sarvam, GPT-4.1</p>
          </article>
          <article className="panel-surface rounded-none p-4">
            <p className="font-mono text-[11px] uppercase tracking-[0.14em] text-muted">Release Gate</p>
            <p className="mt-2 text-base font-semibold">Review Required</p>
            <p className="mt-1 text-xs text-muted">1 regression flagged</p>
          </article>
        </section>

        <section className="grid gap-4 xl:grid-cols-[1.2fr_0.8fr]">
          <article className="panel-surface rounded-none overflow-hidden">
            <div className="border-b border-sage/25 px-5 py-4">
              <h2 className="text-lg font-semibold">Run Pipeline</h2>
            </div>
            <div className="grid gap-0 md:grid-cols-4">
              <div className="border-b border-sage/25 p-4 md:border-b-0 md:border-r">
                <div className="flex items-center gap-2">
                  <Dot tone="done" />
                  <p className="text-sm font-semibold">Prompt Validation</p>
                </div>
                <p className="mt-2 text-xs text-muted">Complete</p>
              </div>
              <div className="border-b border-sage/25 p-4 md:border-b-0 md:border-r">
                <div className="flex items-center gap-2">
                  <Dot tone="done" />
                  <p className="text-sm font-semibold">Provider Execution</p>
                </div>
                <p className="mt-2 text-xs text-muted">Complete</p>
              </div>
              <div className="border-b border-sage/25 p-4 md:border-b-0 md:border-r">
                <div className="flex items-center gap-2">
                  <Dot tone="progress" />
                  <p className="text-sm font-semibold">Trace Review</p>
                </div>
                <p className="mt-2 text-xs text-muted">In progress</p>
              </div>
              <div className="p-4">
                <div className="flex items-center gap-2">
                  <Dot tone="planned" />
                  <p className="text-sm font-semibold">Gate Decision</p>
                </div>
                <p className="mt-2 text-xs text-muted">Pending</p>
              </div>
            </div>
          </article>

          <article className="panel-surface rounded-none p-5">
            <h2 className="text-lg font-semibold">Release Gate Notes</h2>
            <p className="mt-2 text-sm text-muted">One issue requires sign-off before deployment.</p>
            <div className="mt-4 space-y-3">
              <div className="rounded-none border border-sage/30 bg-white p-3">
                <p className="text-xs uppercase tracking-widest text-muted">Issue</p>
                <p className="mt-1 text-sm font-semibold">Latency spike on long-form prompts</p>
              </div>
              <div className="rounded-none border border-sage/30 bg-white p-3">
                <p className="text-xs uppercase tracking-widest text-muted">Owner</p>
                <p className="mt-1 text-sm font-semibold">Platform Engineering</p>
              </div>
              <div className="rounded-none border border-sage/30 bg-white p-3">
                <p className="text-xs uppercase tracking-widest text-muted">Action</p>
                <p className="mt-1 text-sm font-semibold">Re-run with reduced max output length</p>
              </div>
            </div>
          </article>
        </section>

        <section>
          <article className="panel-surface rounded-none overflow-hidden">
            <div className="border-b border-sage/25 px-5 py-4">
              <h2 className="text-lg font-semibold">Recent Runs</h2>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full min-w-[640px] text-left text-sm">
                <thead className="bg-[#f2f6f3] text-xs uppercase tracking-widest text-muted">
                  <tr>
                    <th className="px-5 py-3 font-medium">Run</th>
                    <th className="px-5 py-3 font-medium">Suite</th>
                    <th className="px-5 py-3 font-medium">Models</th>
                    <th className="px-5 py-3 font-medium">Result</th>
                    <th className="px-5 py-3 font-medium">Time</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-t border-sage/20">
                    <td className="px-5 py-3 font-mono">RUN-1842</td>
                    <td className="px-5 py-3">checkout-flow-v2</td>
                    <td className="px-5 py-3">2</td>
                    <td className="px-5 py-3">
                      <span className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#c58a00]">
                        <Dot tone="progress" /> Review
                      </span>
                    </td>
                    <td className="px-5 py-3 text-muted">10:42 AM</td>
                  </tr>
                  <tr className="border-t border-sage/20">
                    <td className="px-5 py-3 font-mono">RUN-1841</td>
                    <td className="px-5 py-3">onboarding-short</td>
                    <td className="px-5 py-3">2</td>
                    <td className="px-5 py-3">
                      <span className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#2f7d32]">
                        <Dot tone="done" /> Pass
                      </span>
                    </td>
                    <td className="px-5 py-3 text-muted">Yesterday</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </article>
        </section>
      </div>
    </main>
  );
}
