const FEATURED = {
  name:     "Pariksha",
  github:   "https://github.com/Aisha29301/Pariksha-backend",
  tagline:  "Full-stack quiz platform for educational institutions",
  desc:     "A web application enabling educators to create, manage, and deliver interactive quizzes at scale. Supports multi-role access, automated scoring, analytics, and comprehensive test coverage.",
  bullets: [
    "RESTful APIs built with Spring Boot and MySQL for performant data access",
    "JWT-based authentication secured via Spring Security with role-based access control",
    "Automated quiz classification engine and learner performance analytics",
    "Thorough test suite using JUnit and Mockito; API contracts validated via Postman",
  ],
  stack: ["Spring Boot","MySQL","Angular","JWT","Spring Security","JUnit","Mockito","Git","Postman"],
  date:  "Mar 2024",
  type:  "Personal Project · Full-Stack",
};

const WORK_CARDS = [
  {
    name:    "Customer Facing Module Backend",
    tagline: "Fintech microservices for AA-framework compliance",
    desc:    "Backend services powering Account Aggregator-based financial data sharing for banking and NBFC clients — including audit logging, secure document storage on S3, and DB performance tuning.",
    stack:   ["Java","Spring Boot","AWS S3","MySQL","Microservices"],
    type:    "Professional · Finarkein Analytics",
    accent:  "#f5c842",
  },
  {
    name:    "Vehicle Review Platform",
    tagline: "B2C backend for search, filter & comparison",
    desc:    "RESTful API backend for a consumer vehicle review platform with search, multi-attribute filtering, and side-by-side comparison features.",
    stack:   ["Spring Boot","MongoDB","MySQL","REST APIs"],
    type:    "Professional · Solve All Solutions",
    accent:  "#818cf8",
  },
  {
    name:    "B2B eCommerce Modules",
    tagline: "Inventory & order management for enterprise clients",
    desc:    "Backend modules handling multi-tenant inventory tracking, order workflows, third-party API integrations, and ELK-based observability.",
    stack:   ["Spring Boot","MySQL","Java","ELK Stack"],
    type:    "Professional · Solve All Solutions",
    accent:  "#2dd4bf",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        {/* <p className="label mb-4">// projects</p> */}
        <h2 className="f-serif text-4xl md:text-5xl font-black text-hi mb-4">
          Systems I&apos;ve Built
        </h2>
        <p className="f-sans text-mid text-[15px] mb-14 max-w-xl leading-relaxed">
          One personal build and three professional systems — each engineered for reliability.
        </p>

        {/* ── Featured ── */}
        <div className="card rounded-2xl p-8 mb-6 md:grid md:grid-cols-5 md:gap-10">

          {/* Left 3 cols */}
          <div className="md:col-span-3">
            <div className="flex items-center gap-3 mb-4 flex-wrap">
              <span className="f-mono text-[10px] px-2.5 py-1 rounded border border-border text-mid">{FEATURED.type}</span>
              <span className="f-mono text-[10px] text-low">{FEATURED.date}</span>
              <span className="f-mono text-[9px] px-2 py-0.5 rounded-full bg-gold/10 text-gold border border-gold/20">featured</span>
            </div>
            <h3 className="f-serif text-3xl font-black text-gold mb-1">{FEATURED.name}</h3>
            <p className="f-sans text-sm text-mid mb-4">{FEATURED.tagline}</p>
            <p className="f-sans text-sm text-mid leading-relaxed mb-5">{FEATURED.desc}</p>
            <ul className="space-y-2">
              {FEATURED.bullets.map(b => (
                <li key={b} className="flex gap-2.5 text-sm text-mid">
                  <span className="text-gold shrink-0 text-xs mt-1">▸</span>{b}
                </li>
              ))}
            </ul>
            {/* ← ADD THIS */}
            <a href={FEATURED.github} target="_blank" rel="noopener noreferrer"
               className="inline-flex items-center gap-2 f-mono text-xs mt-4"
               style={{ color:"var(--mid)" }}>
              <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"/>
              </svg>
              View on GitHub →
            </a>
          </div>
          
          {/* Right 2 cols */}
          <div className="md:col-span-2 mt-6 md:mt-0 flex flex-col justify-end gap-4">
            <div className="rule-gold" />
            <p className="label">stack</p>
            <div className="flex flex-wrap gap-1.5">
              {FEATURED.stack.map(t => <span key={t} className="tag">{t}</span>)}
            </div>
          </div>
        </div>

        {/* ── Work cards ── */}
        <div className="grid md:grid-cols-3 gap-5">
          {WORK_CARDS.map(p => (
            <div key={p.name} className="card rounded-xl p-6 flex flex-col">
              <span className="f-mono text-[9px] text-low mb-4 block">{p.type}</span>
              <h3 className="f-sans text-base font-semibold mb-1" style={{ color: p.accent }}>{p.name}</h3>
              <p className="f-sans text-xs text-mid mb-3">{p.tagline}</p>
              <p className="f-sans text-sm text-mid leading-relaxed flex-1 mb-4">{p.desc}</p>
              <div className="flex flex-wrap gap-1.5 pt-3 border-t border-border">
                {p.stack.map(t => <span key={t} className="tag tag-cool">{t}</span>)}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
