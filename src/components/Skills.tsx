// Skill groups taken verbatim from APL.pdf (latest version)
const GROUPS = [
  {
    cat:   "Programming",
    icon:  "{ }",
    items: ["Java","SQL","Python","JavaScript"],
  },
  {
    cat:   "Backend Development",
    icon:  "⬡",
    items: ["Spring Boot","Spring Security","REST APIs","Microservices","JPA/Hibernate","Liquibase"],
  },
  {
    cat:   "Databases",
    icon:  "▦",
    items: ["PostgreSQL","MySQL","MongoDB"],
  },
  {
    cat:   "Cloud & DevOps",
    icon:  "☁",
    items: ["AWS S3","AWS EC2","Docker","Git"],
  },
  {
    cat:   "Observability & Tools",
    icon:  "◈",
    items: ["ELK Stack","IntelliJ IDEA","VS Code","Postman","GitHub"],
  },
  {
    cat:   "Core Concepts",
    icon:  "◐",
    items: ["OOP","Design Patterns","Database Optimisation","Distributed Systems Fundamentals"],
  },
];

const EDU = [
  {
    degree: "Master of Computer Applications (MCA)",
    school: "MES Institute of Management & Career Courses, Pune",
    period: "Oct 2022 — Aug 2024",
    grade:  "CGPA 8.87",
    award:  "2nd Rank",
  },
  {
    degree: "B.Sc. Computer Science",
    school: "PVG's College of Science, Pune",
    period: "Aug 2019 — Aug 2022",
    grade:  "CGPA 9.73",
    award:  "1st Rank — all 3 years",
  },
];

// const PROFILES = [
//   { name:"GitHub",        href:"https://github.com/Aisha29301"       },
//   { name:"HackerRank",   href:"https://www.hackerrank.com/2020aishwaryap"   },
//   { name:"LeetCode",     href:"https://leetcode.com/u/AishwaryaPL/"     },
//   { name:"Coding Ninjas",href:"https://www.naukri.com/code360/profile/Aisha29" },
// ];

export default function Skills() {
  return (
    <section id="skills" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        {/* <p className="label mb-4">// skills & education</p> */}
        <h2 className="f-serif text-4xl md:text-5xl font-black text-hi mb-14">
          The full toolkit
        </h2>

        {/* Skill groups */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 mb-16">
          {GROUPS.map(g => (
            <div key={g.cat} className="card rounded-xl p-5">
              <div className="flex items-center gap-2 mb-4">
                <span className="f-mono text-gold text-base">{g.icon}</span>
                <h3 className="f-sans text-sm font-semibold text-hi">{g.cat}</h3>
              </div>
              <div className="flex flex-wrap gap-1.5">
                {g.items.map(s => <span key={s} className="tag">{s}</span>)}
              </div>
            </div>
          ))}
        </div>

        {/* Education */}
        <div className="border-t border-border pt-12 mb-10">
          <h3 className="f-sans text-lg font-semibold text-hi mb-6">Education</h3>
          <div className="grid md:grid-cols-2 gap-5">
            {EDU.map(e => (
              <div key={e.degree} className="card rounded-xl p-6">
                <div className="flex items-start justify-between gap-3 mb-3">
                  <div>
                    <h4 className="f-sans text-sm font-semibold text-hi mb-0.5">{e.degree}</h4>
                    <p className="f-sans text-xs text-mid">{e.school}</p>
                  </div>
                  <span className="f-mono text-xs px-2 py-0.5 rounded bg-gold/5 border border-gold/15 text-gold whitespace-nowrap">
                    {e.grade}
                  </span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="f-mono text-xs text-low">{e.period}</span>
                  <span className="f-sans text-xs text-gold/80">🏅 {e.award}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Achievements */}
        <div className="border-t border-border pt-10 mb-10">
          <h3 className="f-sans text-lg font-semibold text-hi mb-4">Achievements</h3>
          <ul className="space-y-2">
            {[
              "Achieved First Rank in all three years of B.Sc. CS at PVG's College of Science, Pune",
              "Secured Second Rank in MCA at MES Institute of Management and Career Courses, Pune",
            ].map(a => (
              <li key={a} className="flex gap-3 f-sans text-sm text-mid">
                <span className="text-gold shrink-0">▸</span>{a}
              </li>
            ))}
          </ul>
        </div>

        {/* Coding profiles
        <div className="border-t border-border pt-10">
          <h3 className="f-sans text-lg font-semibold text-hi mb-4">Coding Profiles</h3>
          <div className="flex flex-wrap gap-3">
            {PROFILES.map(p => (
              <a key={p.name} href={p.href} target="_blank" rel="noopener noreferrer"
                 className="card rounded-lg px-5 py-2.5 f-sans text-sm text-mid hover:text-gold transition-colors">
                {p.name} →
              </a>
            ))}
          </div>
        </div> */}

      </div>
    </section>
  );
}
