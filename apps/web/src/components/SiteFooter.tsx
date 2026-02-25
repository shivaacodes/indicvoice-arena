import Link from "next/link";

export default function SiteFooter() {
  return (
    <footer className="bg-white px-6 py-12 text-charcoal md:px-10 md:py-14">
      <div className="mx-auto w-full max-w-7xl border-2 border-charcoal/85 p-8 md:p-10">
        <div className="border-b-2 border-charcoal/70 pb-8">
          <div className="grid gap-10 md:grid-cols-[1.3fr_1fr_1fr_1fr]">
            <div>
              <h3 className="font-sans text-5xl font-semibold tracking-tight">IndicVoice Arena</h3>
              <p className="mt-2 text-2xl text-charcoal/70">Benchmark. Decide. Ship.</p>
              <p className="mt-6 font-mono text-sm text-muted">Built by shiva</p>
            </div>

            <div>
              <p className="font-sans text-2xl font-semibold">Product</p>
              <ul className="mt-4 space-y-2 text-base text-charcoal/70">
                <li><Link href="/" className="hover:text-charcoal">Benchmark Studio</Link></li>
                <li><Link href="/" className="hover:text-charcoal">Open Source</Link></li>
                <li><Link href="/dashboard" className="hover:text-charcoal">Dashboard</Link></li>
              </ul>
            </div>

            <div>
              <p className="font-sans text-2xl font-semibold">Open Source</p>
              <ul className="mt-4 space-y-2 text-base text-charcoal/70">
                <li><Link href="/" className="hover:text-charcoal">Overview</Link></li>
                <li><a href="https://github.com/shivaacodes/indicvoice-arena" target="_blank" rel="noopener noreferrer" className="hover:text-charcoal">Contribute</a></li>
                <li><a href="https://github.com/shivaacodes/indicvoice-arena" target="_blank" rel="noopener noreferrer" className="hover:text-charcoal">Repository</a></li>
              </ul>
            </div>

            <div>
              <p className="font-sans text-2xl font-semibold">Socials</p>
              <ul className="mt-4 space-y-2 text-base text-charcoal/70">
                <li><a href="https://github.com/shivaacodes/indicvoice-arena" target="_blank" rel="noopener noreferrer" className="hover:text-charcoal">GitHub</a></li>
                <li><a href="https://github.com/shivaacodes/indicvoice-arena" target="_blank" rel="noopener noreferrer" className="hover:text-charcoal">Project Repo</a></li>
                <li><a href="mailto:hello@indicvoicearena.in" className="hover:text-charcoal">Email</a></li>
              </ul>
            </div>
          </div>
        </div>

        <div className="pt-8 text-center">
          <p className="font-mono text-sm text-muted">© 2026 IndicVoice Arena. All rights reserved.</p>
          <p className="mt-2 font-serif text-2xl italic text-charcoal/70">Open voice infrastructure for practical teams.</p>
        </div>
      </div>
    </footer>
  );
}
