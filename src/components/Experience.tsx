const JOBS = [
  {
    company:  "Finarkein Analytics Pvt. Ltd.",
    role:     "Software Engineer",
    period:   "Sep 2025 — Present",
    location: "Pune, India",
    current:  true,
    bullets: [
      "Developing backend services and microservices for Account Aggregator-based fintech applications using Java and Spring Boot",
      "Implemented AWS S3 integration for secure storage and management of application documents",
      "Improved database performance through table partitioning and query optimisation",
      "Developed audit logging features for tracking application activities and user actions",
      "Delivering custom requirements for banking and financial institution clients",
      "Participating in development, testing, deployment, and production support activities",
    ],
    tags: ["Java","Spring Boot","AWS","Microservices","Account Aggregator","Kubernetes","PostgreSQL"],
  },
  {
    company:  "Solve All Solutions Pvt. Ltd.",
    role:     "Junior Software Engineer",
    period:   "Feb 2024 — Aug 2025",
    location: "Pune, India",
    current:  false,
    bullets: [
      "Developed and maintained RESTful APIs using Java, Spring Boot, MongoDB, and MySQL",
      "Designed and implemented backend features for vehicle review and comparison platforms",
      "Built modules for B2B eCommerce applications including inventory and order management workflows",
      "Integrated third-party APIs and services to support business requirements",
      "Implemented centralised logging and monitoring using the ELK Stack for application troubleshooting and support",
      "Participated in requirement analysis, development, testing, deployment, and production support",
    ],
    tags: ["Java","Spring Boot","MongoDB","MySQL","REST APIs","ELK Stack","Third-party APIs","GIT"],
  },
];

export default function Experience() {
  return (
    <section id="experience" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        {/* <p className="label mb-4">// experience</p> */}
        <h2 className="f-serif text-4xl md:text-5xl font-black text-hi mb-14">
          Where I&apos;ve built
        </h2>

        <div className="relative md:pl-10">
          {/* Vertical rule */}
          <div className="hidden md:block absolute left-0 top-2 bottom-2 w-px bg-border" />

          <div className="space-y-8">
            {JOBS.map((job, i) => (
              <div key={i} className="relative md:pl-14">
                {/* Timeline dot */}
                <div className={`hidden md:block absolute left-0 ${job.current ? "dot-on" : "dot-off"}`}
                     style={{ transform:"translateX(-50%)" }} />

                <div className="card rounded-2xl p-7">
                  {/* Header */}
                  <div className="flex flex-wrap items-start justify-between gap-3 mb-5">
                    <div>
                      <div className="flex items-center gap-2 flex-wrap mb-1">
                        <h3 className="f-sans text-lg font-semibold text-hi">{job.role}</h3>
                        {job.current && (
                          <span className="f-mono text-[9px] px-2 py-0.5 rounded-full bg-gold/10 text-gold border border-gold/20">
                            current
                          </span>
                        )}
                      </div>
                      <p className="f-sans text-sm text-gold font-medium">{job.company}</p>
                      <p className="f-sans text-xs text-mid mt-0.5">{job.location}</p>
                    </div>
                    <span className="f-mono text-xs text-mid">{job.period}</span>
                  </div>

                  {/* Bullets */}
                  <ul className="space-y-2.5 mb-5">
                    {job.bullets.map((b, j) => (
                      <li key={j} className="flex gap-3 text-sm text-mid leading-relaxed">
                        <span className="text-gold mt-0.5 shrink-0 text-xs">▸</span>
                        {b}
                      </li>
                    ))}
                  </ul>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-1.5 pt-4 border-t border-border">
                    {job.tags.map(t => <span key={t} className="tag">{t}</span>)}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
