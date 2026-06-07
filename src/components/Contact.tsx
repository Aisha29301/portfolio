export default function Contact() {
  return (
    <section id="contact" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="relative card rounded-2xl p-10 md:p-16 overflow-hidden">

          {/* Ambient glow */}
          <div className="pointer-events-none absolute inset-0"
               style={{ background:"radial-gradient(ellipse at 65% 40%, rgba(245,200,66,0.05) 0%, transparent 60%)" }} />

          <div className="relative z-10 grid md:grid-cols-2 gap-14 items-start">

            {/* Left */}
            <div>
              {/* <p className="label mb-4">// contact</p> */}
              <h2 className="f-serif text-4xl md:text-5xl font-black text-hi leading-tight mb-5">
                Let&apos;s build<br />
                <span className="grad-gold">something reliable</span>
              </h2>
              <p className="f-sans text-mid text-[15px] leading-relaxed mb-8">
                Open to backend and full-stack engineering roles — especially in fintech, banking
                infrastructure, or developer tooling. If you need someone who cares about correctness,
                observability, and long-term maintainability, let&apos;s talk.
              </p>

              <div className="space-y-4">
                {[
                  { lbl:"Email",    val:"aishwaryaplokhande@gmail.com", href:"mailto:aishwaryaplokhande@gmail.com" },
                  { lbl:"LinkedIn", val:"linkedin.com",        href:"https://www.linkedin.com/in/aishwarya-lokhande-apl293/" }
                ].map(c => (
                  <a key={c.lbl} href={c.href}
                     target={c.lbl !== "Phone" ? "_blank" : undefined}
                     rel="noopener noreferrer"
                     className="flex items-center gap-4 group">
                    <span className="f-mono text-xs text-low w-16">{c.lbl}</span>
                    <span className="f-sans text-sm text-mid group-hover:text-gold transition-colors">{c.val}</span>
                  </a>
                ))}
              </div>
            </div>

            {/* Right — quick pitch card */}
            <div className="flex flex-col gap-5">
              {/* What I bring */}
              <div className="bg-surface border border-border rounded-xl p-6">
                <h3 className="f-sans text-sm font-semibold text-hi mb-4">What I bring</h3>
                <ul className="space-y-2.5">
                  {[
                    "Java & Spring Boot — production-tested, not tutorial-grade",
                    "Fintech domain knowledge: Account Aggregator, audit logging, banking clients",
                    "Full lifecycle ownership — requirements through production support",
                    "Database performance instinct: partitioning, indexing, query tuning",
                    "Observability mindset: ELK Stack, structured logging, incident response",
                  ].map(item => (
                    <li key={item} className="flex gap-2.5 f-sans text-sm text-mid">
                      <span className="text-gold shrink-0 text-xs mt-1">▸</span>{item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
