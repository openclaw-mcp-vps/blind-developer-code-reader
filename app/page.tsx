export default function Home() {
  const checkoutUrl = process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || "#";

  return (
    <main className="min-h-screen bg-[#0d1117] text-[#c9d1d9]">
      {/* Hero */}
      <section className="max-w-3xl mx-auto px-6 pt-24 pb-20 text-center">
        <span className="inline-block bg-[#58a6ff]/10 text-[#58a6ff] text-xs font-semibold uppercase tracking-widest px-3 py-1 rounded-full mb-6 border border-[#58a6ff]/20">
          Accessibility-First IDE Tooling
        </span>
        <h1 className="text-4xl sm:text-5xl font-bold text-white leading-tight mb-5">
          Audio Code Navigation for{" "}
          <span className="text-[#58a6ff]">Visually Impaired Developers</span>
        </h1>
        <p className="text-lg text-[#8b949e] max-w-xl mx-auto mb-8">
          CodeVoice is a VS Code extension that uses AST parsing and AI to generate intelligent audio descriptions of code structure, diffs, and navigation — so you can code without barriers.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href={checkoutUrl}
            className="bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-bold px-8 py-3 rounded-lg transition-colors text-base"
          >
            Start Free Trial — $19/mo
          </a>
          <a
            href="#faq"
            className="border border-[#30363d] hover:border-[#58a6ff] text-[#c9d1d9] px-8 py-3 rounded-lg transition-colors text-base"
          >
            Learn More
          </a>
        </div>
        <p className="mt-4 text-sm text-[#8b949e]">14-day free trial · Cancel anytime · WCAG 2.1 AA compliant</p>
      </section>

      {/* Features strip */}
      <section className="border-y border-[#21262d] bg-[#161b22] py-10">
        <div className="max-w-4xl mx-auto px-6 grid grid-cols-1 sm:grid-cols-3 gap-8 text-center">
          <div>
            <div className="text-[#58a6ff] text-2xl mb-2">&#9654;</div>
            <h3 className="font-semibold text-white mb-1">AST Audio Narration</h3>
            <p className="text-sm text-[#8b949e]">Hear intelligent descriptions of functions, classes, and control flow as you navigate.</p>
          </div>
          <div>
            <div className="text-[#58a6ff] text-2xl mb-2">&#9881;</div>
            <h3 className="font-semibold text-white mb-1">Diff Announcements</h3>
            <p className="text-sm text-[#8b949e]">AI summarizes code changes in plain language so you always know what changed and why.</p>
          </div>
          <div>
            <div className="text-[#58a6ff] text-2xl mb-2">&#128275;</div>
            <h3 className="font-semibold text-white mb-1">Screen Reader Sync</h3>
            <p className="text-sm text-[#8b949e]">Works alongside NVDA, JAWS, and VoiceOver without conflicts or duplicate speech.</p>
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="max-w-md mx-auto px-6 py-20 text-center">
        <h2 className="text-2xl font-bold text-white mb-2">Simple Pricing</h2>
        <p className="text-[#8b949e] mb-10">One plan. Everything included.</p>
        <div className="bg-[#161b22] border border-[#30363d] rounded-2xl p-8">
          <div className="text-[#58a6ff] text-sm font-semibold uppercase tracking-widest mb-3">Pro</div>
          <div className="text-5xl font-bold text-white mb-1">$19</div>
          <div className="text-[#8b949e] mb-6">per month</div>
          <ul className="text-left space-y-3 mb-8 text-sm">
            {[
              "VS Code extension (all languages)",
              "AI-powered audio code descriptions",
              "Real-time diff narration",
              "Web dashboard & settings",
              "Priority support",
              "14-day free trial"
            ].map((f) => (
              <li key={f} className="flex items-center gap-2">
                <span className="text-[#58a6ff] font-bold">&#10003;</span>
                <span>{f}</span>
              </li>
            ))}
          </ul>
          <a
            href={checkoutUrl}
            className="block w-full bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-bold py-3 rounded-lg transition-colors text-base"
          >
            Start Free Trial
          </a>
          <p className="mt-3 text-xs text-[#8b949e]">No credit card required for trial</p>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="max-w-2xl mx-auto px-6 pb-24">
        <h2 className="text-2xl font-bold text-white text-center mb-10">Frequently Asked Questions</h2>
        <div className="space-y-6">
          <div className="border border-[#21262d] rounded-xl p-6">
            <h3 className="font-semibold text-white mb-2">Which screen readers does CodeVoice support?</h3>
            <p className="text-sm text-[#8b949e]">CodeVoice is tested with NVDA, JAWS, and VoiceOver. It uses VS Code's accessibility APIs and outputs audio through your system's default speech engine, so it works alongside any screen reader without conflicts.</p>
          </div>
          <div className="border border-[#21262d] rounded-xl p-6">
            <h3 className="font-semibold text-white mb-2">What programming languages are supported?</h3>
            <p className="text-sm text-[#8b949e]">CodeVoice supports any language with a Tree-sitter grammar, including JavaScript, TypeScript, Python, Rust, Go, C/C++, Java, and more. New languages are added regularly based on user requests.</p>
          </div>
          <div className="border border-[#21262d] rounded-xl p-6">
            <h3 className="font-semibold text-white mb-2">Can my employer purchase a team license?</h3>
            <p className="text-sm text-[#8b949e]">Yes. Team and enterprise plans are available with volume discounts, centralized billing, and ADA/accessibility compliance documentation for HR. Contact us after checkout to upgrade.</p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-[#21262d] py-8 text-center text-xs text-[#8b949e]">
        <p>&copy; {new Date().getFullYear()} CodeVoice. Built for accessibility.</p>
      </footer>
    </main>
  );
}
