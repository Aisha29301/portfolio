const PILLARS = [
  { icon:"🏦", title:"Fintech Infrastructure",  desc:"Account Aggregator systems, banking client integrations, and financial data API pipelines" },
  { icon:"📋", title:"Audit & Compliance",       desc:"Audit logging, activity tracking, and secure document storage for regulated environments" },
  { icon:"⚡", title:"Database Performance",     desc:"Table partitioning, query optimisation, and indexing strategies for high-load production" },
  { icon:"📡", title:"Observability",            desc:"ELK Stack centralised logging for rapid incident response and production support" },
];

export default function About() {
  return (
    <section id="about" className="py-24 px-6">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-start">

        {/* Copy */}
        <div>
          {/* <p className="label mb-4">// about</p> */}
          <h2 className="f-serif text-4xl md:text-5xl font-black text-hi leading-[1.1] mb-6">
            Engineering for<br />
            <span className="grad-gold">regulated systems</span>
          </h2>
          <div className="f-sans space-y-4 text-mid leading-relaxed text-[15px]">
            <p>
              I&apos;m a backend Software Engineer based in Pune, India, currently building
              microservices for Account Aggregator-based fintech applications at Finarkein Analytics —
              systems that sit at the intersection of financial data sharing, banking compliance, and
              API reliability.
            </p>
            <p>
              My work spans secure document storage on AWS S3, database performance tuning via
              table partitioning, audit logging for banking clients, and delivering full-lifecycle
              support from dev through production.
            </p>
            <p>
              I care about code that is testable, observable, and honest in failure. If a system
              goes wrong, I want it to be loud about it.
            </p>
          </div>
          <div className="mt-8 flex gap-6">
            <a href="https://www.linkedin.com/in/aishwarya-lokhande-apl293/" target="_blank" rel="noopener noreferrer"
               className="f-sans text-sm text-gold hover:underline">LinkedIn →</a>
            <a href="mailto:aishwaryaplokhande@gmail.com"
               className="f-sans text-sm text-mid hover:text-hi transition-colors">Email →</a>
            <a href="https://drive.google.com/file/d/1Q50P85v1QSnjkPbh5weJhZO7QA8Jy3m6/view"
               className="f-sans text-sm text-mid hover:text-hi transition-colors">Resume →</a>
          </div>
        </div>

        {/* Pillar cards */}
        <div className="grid grid-cols-2 gap-4">
          {PILLARS.map(({ icon, title, desc }) => (
            <div key={title} className="card rounded-xl p-5">
              <div className="text-2xl mb-3">{icon}</div>
              <h3 className="f-sans text-sm font-semibold text-hi mb-1">{title}</h3>
              <p className="f-sans text-xs text-mid leading-relaxed">{desc}</p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
