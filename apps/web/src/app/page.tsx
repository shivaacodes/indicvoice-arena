"use client";

import { useEffect, useState } from "react";
import AuthButtons from "@/components/AuthButtons";
import SiteFooter from "@/components/SiteFooter";
import Link from "next/link";

const navLinks = [
  { label: "Open Source", target: "opensource" },
  { label: "Contribute", target: "contribute" },
];

export default function Home() {
  const [headlineIn, setHeadlineIn] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setHeadlineIn(true), 120);
    return () => clearTimeout(t);
  }, []);

  const scrollToSection = (target: string) => {
    document.getElementById(target)?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <div className="bg-white text-charcoal">
      <nav className="sticky top-0 z-50 border-b border-sage/30 bg-white/92 backdrop-blur-xl">
        <div className="mx-auto flex w-full max-w-6xl items-center justify-between px-6 py-4">
          <Link href="/" className="text-2xl font-bold tracking-tight">
            IndicVoice Arena
          </Link>
          <div className="hidden items-center gap-6 md:flex">
            {navLinks.map((link) => (
              <Link
                key={link.label}
                href="/"
                onClick={(event) => {
                  event.preventDefault();
                  scrollToSection(link.target);
                }}
                className="text-base font-semibold text-muted transition-colors hover:text-charcoal"
              >
                {link.label}
              </Link>
            ))}
          </div>
          <AuthButtons />
        </div>
      </nav>

      <main>
        <section className="grid-bg relative overflow-hidden border-b border-sage/30 bg-[linear-gradient(145deg,#ffffff_0%,#f0f8f3_45%,#e6f2eb_100%)] px-6 py-16 md:py-20">
          <div className="pointer-events-none absolute -left-24 top-0 h-72 w-72 rounded-full bg-[#5f9d79]/35 blur-3xl" />
          <div className="pointer-events-none absolute -right-20 bottom-0 h-64 w-64 rounded-full bg-[#6ea885]/35 blur-3xl" />
          <div className="mx-auto w-full max-w-7xl">
            <div className="max-w-6xl">
              <h1
                className={`hero-headline mt-2 max-w-[15ch] font-serif text-[clamp(3.1rem,8vw,7.4rem)] italic leading-[0.9] transition-all duration-1000 ease-[cubic-bezier(0.18,0.7,0.25,1)] ${
                  headlineIn ? "translate-y-0 scale-100 opacity-100 blur-0" : "translate-y-5 scale-[0.985] opacity-0 blur-[6px]"
                }`}
              >
                Better Release Decisions, Less Voice AI Guesswork.
              </h1>
              <p className="reveal-up mt-5 max-w-3xl text-xl leading-relaxed text-charcoal/85" style={{ animationDelay: "150ms" }}>
                IndicVoice Arena keeps the release loop simple: run fair comparisons, inspect traces, and decide with confidence.
              </p>
              <div className="reveal-up mt-6 flex flex-col gap-3 sm:flex-row" style={{ animationDelay: "220ms" }}>
                <Link
                  href="/"
                  onClick={(event) => {
                    event.preventDefault();
                    scrollToSection("contribute");
                  }}
                  className="rounded-none border-2 border-charcoal bg-charcoal px-8 py-4 text-base font-bold text-white shadow-[0_12px_24px_rgba(0,0,0,0.18)]"
                >
                  Request Early Access
                </Link>
                <a href="https://github.com/shivaacodes/indicvoice-arena" target="_blank" rel="noopener noreferrer" className="rounded-none border-2 border-charcoal/80 bg-[#d4e8da] px-8 py-4 text-base font-bold">
                  Contribute on GitHub
                </a>
              </div>
            </div>
          </div>
        </section>

        <section id="arena" className="border-y border-sage/30 bg-white px-6 py-18 md:py-24">
          <div className="mx-auto w-full max-w-6xl rounded-none border-2 border-charcoal bg-white p-7 shadow-[0_18px_30px_rgba(0,0,0,0.12)] md:p-9">
            <div className="text-center">
              <p className="font-sans text-5xl font-extrabold uppercase tracking-[0.08em] text-charcoal md:text-6xl">Benchmark Studio</p>
              <p className="mx-auto mt-3 max-w-3xl text-lg text-charcoal/80 md:text-xl">
                One screen for composing runs, observing signal lanes, and making release decisions.
              </p>
            </div>

            <div className="mt-8 grid gap-6 lg:grid-cols-[1.05fr_0.95fr]">
              <div className="panel-surface rounded-none border border-charcoal/20 bg-white p-5">
                <div className="flex items-center justify-between border-b border-sage/25 pb-3">
                  <p className="font-mono text-sm font-bold uppercase tracking-[0.2em] text-charcoal/80 md:text-base">Run composer</p>
                  <span className="rounded-none border border-charcoal/40 bg-[#73c796] px-3 py-1 text-xs font-bold uppercase tracking-wider text-charcoal">Live</span>
                </div>
                <div className="mt-4 space-y-3">
                  <div className="rounded-none border border-sage/45 bg-[#f2f9f5] p-4">
                    <p className="text-sm font-bold uppercase tracking-widest text-muted">Prompt suite</p>
                    <p className="mt-1 text-base font-bold md:text-lg">checkout-flow-v2</p>
                  </div>
                  <div className="rounded-none border border-sage/45 bg-[#f2f9f5] p-4">
                    <p className="text-sm font-bold uppercase tracking-widest text-muted">Model set</p>
                    <p className="mt-1 text-base font-bold md:text-lg">Sarvam / GPT-4.1 / Claude</p>
                  </div>
                  <div className="rounded-none border border-sage/45 bg-[#f2f9f5] p-4">
                    <p className="text-sm font-bold uppercase tracking-widest text-muted">Run mode</p>
                    <p className="mt-1 text-base font-bold md:text-lg">Release gate simulation</p>
                  </div>
                </div>
                <div className="mt-4 signal-grid">
                  {Array.from({ length: 30 }).map((_, idx) => (
                    <span key={idx} className="signal-cell rounded-[5px]" style={{ animationDelay: `${(idx % 10) * 90}ms` }} />
                  ))}
                </div>
              </div>

              <div className="panel-surface rounded-none border border-charcoal/20 bg-white p-5">
                <div className="flex items-center justify-between border-b border-sage/25 pb-3">
                  <p className="font-mono text-sm font-bold uppercase tracking-[0.2em] text-charcoal/80 md:text-base">Decision board</p>
                  <span className="rounded-none border border-charcoal/40 bg-[#b8e8ca] px-3 py-1 text-xs font-bold uppercase tracking-wider text-charcoal">
                    Gate Ready
                  </span>
                </div>
                <div className="mt-4 space-y-3">
                  <div className="rounded-none border border-sage/45 bg-[#f2f9f5] p-4">
                    <div className="flex items-center justify-between text-sm font-bold uppercase tracking-widest text-charcoal/75">
                      <span>Quality</span>
                      <span className="text-[#1f7a4f]">92%</span>
                    </div>
                    <div className="mt-3 h-3 rounded-none border border-sage/40 bg-white">
                      <div className="h-full w-[92%] rounded-none bg-[linear-gradient(90deg,#1fbf75_0%,#0a8f52_100%)] shadow-[0_0_16px_rgba(31,191,117,0.45)]" />
                    </div>
                  </div>
                  <div className="rounded-none border border-sage/45 bg-[#f2f9f5] p-4">
                    <div className="flex items-center justify-between text-sm font-bold uppercase tracking-widest text-charcoal/75">
                      <span>Latency</span>
                      <span className="text-[#c77912]">271ms</span>
                    </div>
                    <div className="mt-3 h-3 rounded-none border border-sage/40 bg-white">
                      <div className="h-full w-[78%] rounded-none bg-[linear-gradient(90deg,#ffb347_0%,#ff7b00_100%)] shadow-[0_0_16px_rgba(255,123,0,0.35)]" />
                    </div>
                  </div>
                  <div className="rounded-none border border-sage/45 bg-[#f2f9f5] p-4">
                    <div className="flex items-center justify-between text-sm font-bold uppercase tracking-widest text-charcoal/75">
                      <span>Stability</span>
                      <span className="text-[#1b69d6]">99%</span>
                    </div>
                    <div className="mt-3 h-3 rounded-none border border-sage/40 bg-white">
                      <div className="h-full w-[96%] rounded-none bg-[linear-gradient(90deg,#4da6ff_0%,#1b69d6_100%)] shadow-[0_0_16px_rgba(27,105,214,0.35)]" />
                    </div>
                  </div>
                </div>
                <div className="mt-4 grid grid-cols-3 gap-2">
                  <div className="rounded-none border border-[#58a878]/55 bg-[#d9f2e3] p-3 text-center">
                    <p className="text-xs font-bold uppercase tracking-widest text-muted">Review</p>
                    <p className="mt-1 text-base font-bold">Clear</p>
                  </div>
                  <div className="rounded-none border border-[#e49d43]/55 bg-[#fff0da] p-3 text-center">
                    <p className="text-xs font-bold uppercase tracking-widest text-muted">Drift</p>
                    <p className="mt-1 text-base font-bold">Low</p>
                  </div>
                  <div className="rounded-none border border-[#5f95dc]/55 bg-[#e2eeff] p-3 text-center">
                    <p className="text-xs font-bold uppercase tracking-widest text-muted">Gate</p>
                    <p className="mt-1 text-base font-bold">Go</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="opensource" className="border-t border-sage/30 bg-[linear-gradient(180deg,#ffffff_0%,#eef7f1_100%)] px-6 py-14 md:py-16">
          <div className="mx-auto w-full max-w-6xl">
            <h2 className="font-serif text-6xl italic md:text-7xl">Open source first</h2>
            <p className="mt-4 max-w-4xl text-2xl leading-relaxed text-charcoal/85 md:text-3xl">
              Transparent benchmark schemas, inspectable evaluator logic, and reproducible release summaries.
            </p>
            <div id="contribute" className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a href="https://github.com/shivaacodes/indicvoice-arena" target="_blank" rel="noopener noreferrer" className="rounded-none border-2 border-charcoal bg-charcoal px-6 py-3 text-base font-bold text-white">
                View Repo
              </a>
              <a
                href="https://github.com/shivaacodes/indicvoice-arena"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-none border-2 border-charcoal bg-[#8ac3a1]/55 px-6 py-3 text-base font-bold text-charcoal"
              >
                <svg viewBox="0 0 24 24" aria-hidden="true" className="h-4 w-4 fill-current">
                  <path d="M12 2a10 10 0 0 0-3.16 19.49c.5.09.68-.21.68-.47v-1.66c-2.78.6-3.37-1.18-3.37-1.18-.45-1.14-1.1-1.45-1.1-1.45-.9-.62.07-.61.07-.61 1 .07 1.53 1.03 1.53 1.03.88 1.52 2.32 1.08 2.88.83.09-.64.35-1.08.64-1.33-2.22-.25-4.55-1.12-4.55-4.96 0-1.1.39-2 1.03-2.71-.1-.25-.45-1.27.1-2.65 0 0 .84-.27 2.75 1.03A9.5 9.5 0 0 1 12 6.8c.85 0 1.7.11 2.5.33 1.9-1.3 2.74-1.03 2.74-1.03.55 1.38.2 2.4.1 2.65.64.71 1.03 1.61 1.03 2.71 0 3.85-2.33 4.7-4.56 4.96.36.31.68.92.68 1.86v2.75c0 .26.18.57.69.47A10 10 0 0 0 12 2z" />
                </svg>
                Contribute
              </a>
            </div>
          </div>
        </section>

      </main>
      <SiteFooter />
    </div>
  );
}
