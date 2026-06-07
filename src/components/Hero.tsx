"use client";
import { useEffect, useState } from "react";

const ROLES = [
  "Backend Engineer",
  "Fintech Systems Developer",
  "Spring Boot Specialist",
  "Microservices Architect",
];

const PHOTO = "/aishwaryaL.png";

export default function Hero() {
  const [idx,  setIdx]  = useState(0);
  const [show, setShow] = useState(true);
  const [tilt, setTilt] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const t = setInterval(() => {
      setShow(false);
      setTimeout(() => { setIdx(i => (i + 1) % ROLES.length); setShow(true); }, 270);
    }, 2700);
    return () => clearInterval(t);
  }, []);

  // 3D tilt on mouse move
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const cx = rect.left + rect.width / 2;
    const cy = rect.top  + rect.height / 2;
    const dx = (e.clientX - cx) / (rect.width  / 2);
    const dy = (e.clientY - cy) / (rect.height / 2);
    setTilt({ x: dy * -10, y: dx * 10 });
  };
  const handleMouseLeave = () => setTilt({ x: 0, y: 0 });

  return (
    <section id="hero"
      className="line-grid relative min-h-screen flex items-center px-6 pt-16 overflow-hidden">

      {/* Background orbs */}
      <div className="pointer-events-none absolute right-0 top-0 w-[600px] h-[700px]"
           style={{ background:"radial-gradient(ellipse at top right, rgba(129,140,248,0.09) 0%, transparent 60%)", filter:"blur(40px)" }} />
      <div className="pointer-events-none absolute right-10 bottom-0 w-[400px] h-[400px]"
           style={{ background:"radial-gradient(ellipse at bottom right, rgba(45,212,191,0.05) 0%, transparent 60%)", filter:"blur(50px)" }} />

      <div className="relative z-10 w-full max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between" style={{ gap:"0px" }}>

          {/* ── Left: text ── */}
          <div className="flex-1 stagger pr-0 md:pr-6">

            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-gold/20 bg-gold/5 mb-7">
              <span className="w-1.5 h-1.5 rounded-full bg-gold" style={{ animation:"slowPulse 2s infinite" }} />
              <span className="label">Backend Engineering • Fintech • Microservices</span>
            </div>

            <h1 className="f-serif font-black leading-[1.0] tracking-tight mb-3"
                style={{ fontSize:"clamp(3.4rem,5.8vw,6rem)" }}>
              Aishwarya<br />
              <span className="grad-gold">Lokhande</span>
            </h1>

            <div className="h-10 flex items-center mb-5">
              <span
                className={`transition-all duration-300
                            ${show ? "opacity-100 translate-y-0 scale-100" : "opacity-0 translate-y-3 scale-95"}`}
                style={{
                  fontFamily: "'Space Grotesk', sans-serif",
                  fontSize: "1.2rem",
                  fontWeight: 300,
                  color: "#818cf8",
                  textShadow: show
                    ? "0 0 18px rgba(129,140,248,0.75), 0 0 40px rgba(129,140,248,0.35), 0 0 80px rgba(129,140,248,0.15)"
                    : "none",
                  transition: "opacity 0.3s ease, transform 0.3s ease, text-shadow 0.3s ease",
                }}
              >
                {ROLES[idx]}
              </span>
            </div>

            <p className="f-sans text-mid text-[15px] leading-relaxed mb-8 max-w-md">
              Building backend systems for fintech products with a focus on Account Aggregator platforms, APIs, and microservices.
            </p>

            <div className="flex flex-wrap gap-3 mb-10">
              <a href="#projects"
                 className="f-sans inline-flex items-center gap-2 px-6 py-3 bg-gold text-ink rounded font-semibold text-sm
                            hover:brightness-110 transition-all hover:shadow-[0_0_24px_rgba(245,200,66,0.3)]">
                See my work
                <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                  <path d="M5 12h14M12 5l7 7-7 7"/>
                </svg>
              </a>
              <a href="#contact"
                 className="f-sans inline-flex items-center gap-2 px-6 py-3 border border-border text-hi rounded text-sm
                            hover:border-gold/40 transition-all">
                Get in touch
              </a>
            </div>

            <div className="inline-grid grid-cols-3 divide-x divide-border border border-border rounded-xl overflow-hidden">
              {[
                { v:"2+",   l:"Years Experience"      },
                { v:"AA",   l:"Fintech Systems Built"  },
                { v:"9.73", l:"B.Sc. CS CGPA"         },
              ].map(({ v, l }) => (
                <div key={l} className="bg-card px-5 py-3 text-center">
                  <div className="f-serif text-xl font-black text-gold mb-0.5">{v}</div>
                  <div className="f-sans text-[11px] text-mid">{l}</div>
                </div>
              ))}
            </div>
          </div>

          {/* ── Right: 3D photo ── */}
          <div
            className="relative flex-shrink-0"
            style={{ perspective: "900px", marginLeft: "-40px" }}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
          >
            {/* Deep glow layer behind photo */}
            <div className="absolute pointer-events-none"
                 style={{
                   inset: "-40px",
                   background: "radial-gradient(ellipse at center, rgba(129,140,248,0.18) 0%, rgba(45,212,191,0.06) 40%, transparent 70%)",
                   filter: "blur(35px)",
                   borderRadius: "50%",
                 }} />

            {/* 3D card that tilts */}
            <div
              style={{
                width: "360px",
                height: "460px",
                transformStyle: "preserve-3d",
                transform: `rotateX(${tilt.x}deg) rotateY(${tilt.y}deg)`,
                transition: "transform 0.12s ease-out",
                position: "relative",
              }}
            >
              {/* Shadow layer — depth illusion */}
              <div style={{
                position: "absolute",
                inset: "20px",
                borderRadius: "12px",
                background: "rgba(0,0,0,0.5)",
                filter: "blur(30px)",
                transform: "translateZ(-40px) translateY(18px)",
                transformStyle: "preserve-3d",
              }} />

              {/* Specular highlight on hover */}
              <div style={{
                position: "absolute",
                inset: 0,
                borderRadius: "160px 160px 120px 120px",
                background: `linear-gradient(
                  135deg,
                  rgba(255,255,255,${Math.max(0, -tilt.x * 0.008 + tilt.y * 0.006)}) 0%,
                  transparent 50%
                )`,
                zIndex: 10,
                pointerEvents: "none",
              }} />

              {/* Photo — no hard shape, pure blend */}
              <div style={{
                width: "100%",
                height: "100%",
                overflow: "hidden",
                position: "relative",
                borderRadius: "16px",
              }}>
                <img
                  src={PHOTO}
                  alt="Aishwarya Lokhande"
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                    objectPosition: "center top",
                    display: "block",
                  }}
                />

                {/* All-edge fade — photo dissolves into dark bg */}
                <div style={{
                  position: "absolute", inset: 0,
                  background: `
                    linear-gradient(to right,  rgba(7,8,15,0.85) 0%, rgba(7,8,15,0.2) 22%, transparent 45%),
                    linear-gradient(to bottom, rgba(7,8,15,0.2) 0%, transparent 15%, transparent 52%, rgba(7,8,15,1) 100%),
                    linear-gradient(to left,   rgba(7,8,15,0.6) 0%, rgba(7,8,15,0.1) 20%, transparent 40%),
                    linear-gradient(to top,    rgba(7,8,15,0.5) 0%, transparent 25%)
                  `,
                  pointerEvents: "none",
                }} />
              </div>

              {/* Floating badge */}
              <div style={{
                position: "absolute",
                bottom: "-14px",
                left: "50%",
                transform: "translateX(-50%) translateZ(20px)",
                display: "flex",
                alignItems: "center",
                gap: "8px",
                padding: "6px 16px",
                borderRadius: "999px",
                border: "1px solid #1c1d2e",
                background: "#11121e",
                whiteSpace: "nowrap",
                boxShadow: "0 8px 24px rgba(0,0,0,0.5)",
              }}>
                <span style={{ width:"6px", height:"6px", borderRadius:"50%", background:"#2dd4bf", flexShrink:0 }} />
                <span className="f-mono" style={{ fontSize:"10px", color:"#7b7fa8" }}>Software Engineer · Pune</span>
              </div>

              {/* Floating indigo dot — top right decoration */}
              <div style={{
                position: "absolute",
                top: "20px",
                right: "-12px",
                width: "8px", height: "8px",
                borderRadius: "50%",
                background: "#818cf8",
                boxShadow: "0 0 12px rgba(129,140,248,0.8)",
                transform: "translateZ(30px)",
              }} />

              {/* Floating teal dot — bottom left decoration */}
              <div style={{
                position: "absolute",
                bottom: "60px",
                left: "-10px",
                width: "6px", height: "6px",
                borderRadius: "50%",
                background: "#2dd4bf",
                boxShadow: "0 0 10px rgba(45,212,191,0.8)",
                transform: "translateZ(25px)",
              }} />
            </div>
          </div>

        </div>
      </div>

      {/* Scroll nudge */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 opacity-20">
        <div className="w-px h-7 bg-gradient-to-b from-transparent to-gold" />
        <span className="f-mono text-[10px] text-mid">scroll</span>
      </div>
    </section>
  );
}