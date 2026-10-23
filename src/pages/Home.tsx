import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Plate, HazardTape, DimLine, Gauge, TapeMeasure, Stamp } from "../themes/site/components";
import { DiagramTruss, DiagramGear, DiagramStressStrain, DiagramRebar } from "../themes/site/diagrams";
import { RevealOnScroll } from "../themes/site/useScrollReveal";
import { projects, skills, personalInfo } from "../content";

function LiveClock() {
  const [time, setTime] = useState("");
  useEffect(() => {
    const update = () => {
      const now = new Date();
      setTime(new Intl.DateTimeFormat("en-GB", { timeZone: "Africa/Lagos", hour: "2-digit", minute: "2-digit", second: "2-digit", hour12: false }).format(now));
    };
    update();
    const i = setInterval(update, 1000);
    return () => clearInterval(i);
  }, []);
  return <span className="font-mono text-sm">{time}</span>;
}

const diagramMap: Record<string, React.FC<{ className?: string }>> = {
  truss: DiagramTruss,
  gear: DiagramGear,
  stressStrain: DiagramStressStrain,
  rebar: DiagramRebar,
};

export default function Home() {
  const featuredProjects = projects.slice(0, 4);

  return (
    <div className="max-w-[1280px] mx-auto px-3 sm:px-4 py-6 sm:py-8">
      {/* Floating formulas */}
      <div className="margin-formula hidden lg:block" style={{ top: "120px", left: "20px" }}>σ = F / A</div>
      <div className="margin-formula hidden lg:block" style={{ top: "300px", right: "20px" }}>M = wL² / 8</div>
      <div className="margin-formula hidden lg:block" style={{ top: "500px", left: "30px" }}>O(n log n)</div>

      {/* ROW 1: Hero + Status + CTA */}
      <RevealOnScroll>
      <div className="grid grid-cols-12 gap-3 sm:gap-4 mb-4">
        {/* Hero plate */}
        <Plate label="PLATE 01 / HERO" serial="SN-001" className="col-span-12 lg:col-span-8">
          <div className="flex flex-col justify-between h-full min-h-[200px] sm:min-h-[260px]">
            <h1 className="font-display font-extrabold uppercase tracking-tight text-3xl sm:text-5xl lg:text-6xl leading-[0.9] text-ink">
              I BUILD WEB PRODUCTS AND AI AUTOMATION SYSTEMS.
            </h1>
            <DimLine label="1280PX / FULL WIDTH" />
            <p className="font-mono text-[11px] uppercase tracking-[0.1em] text-steel mt-2">
              FULL-STACK DEVELOPER / AI ENGINEER / {personalInfo.location.toUpperCase()}
            </p>
          </div>
        </Plate>

        {/* Status plate - inverted */}
        <Plate variant="inverted" label="PLATE 02 / SITE STATUS" serial="SN-002" className="col-span-12 lg:col-span-4">
          <div className="flex flex-col gap-4">
            <Gauge value={85} label="CAPACITY" />
            <div className="space-y-2 mt-2">
              <div className="flex justify-between items-baseline">
                <span className="font-mono text-[10px] uppercase tracking-[0.1em] text-steel">STATUS</span>
                <span className="font-mono text-[11px] text-safety">OPEN TO FREELANCE</span>
              </div>
              <div className="flex justify-between items-baseline">
                <span className="font-mono text-[10px] uppercase tracking-[0.1em] text-steel">LOCATION</span>
                <span className="font-mono text-[11px] text-concrete">PORT HARCOURT NG</span>
              </div>
              <div className="flex justify-between items-baseline">
                <span className="font-mono text-[10px] uppercase tracking-[0.1em] text-steel">LAGOS TIME</span>
                <LiveClock />
              </div>
              <div className="flex justify-between items-baseline">
                <span className="font-mono text-[10px] uppercase tracking-[0.1em] text-steel">ROLE</span>
                <span className="font-mono text-[11px] text-concrete">FULL-STACK</span>
              </div>
            </div>
          </div>
        </Plate>

        {/* CTA plate - safety yellow */}
        <div className="col-span-12 flex gap-3">
          <Link
            to="/work"
            className="flex-1 bg-safety border-2 border-ink px-6 py-4 font-display font-extrabold uppercase text-lg tracking-tight text-ink text-center hover:bg-ink hover:text-safety transition-colors"
          >
            VIEW WORK
          </Link>
          <Link
            to="/contact"
            className="flex-1 bg-safety border-2 border-ink px-6 py-4 font-display font-extrabold uppercase text-lg tracking-tight text-ink text-center hover:bg-ink hover:text-safety transition-colors"
          >
            CONTACT
          </Link>
        </div>
      </div>
      </RevealOnScroll>

      {/* ROW 2: Hazard tape marquee */}
      <div className="mb-4 overflow-hidden border-2 border-ink">
        <div className="flex animate-marquee whitespace-nowrap py-2">
          {[...skills, ...skills].map((skill, i) => (
            <span key={i} className="mx-6 font-mono text-xs uppercase tracking-[0.1em] text-ink font-medium">
              {skill} <span className="text-steel mx-2">///</span>
            </span>
          ))}
        </div>
      </div>

      {/* ROW 3: Selected Work */}
      <RevealOnScroll delay={120}>
      <div className="mb-4">
        <div className="flex items-center gap-3 mb-4">
          <h2 className="font-display font-extrabold uppercase tracking-tight text-2xl sm:text-3xl text-ink">SELECTED WORK</h2>
          <div className="flex-1 border-t border-dashed border-steel" />
          <Link to="/work" className="font-mono text-[11px] uppercase tracking-[0.1em] text-steel hover:text-ink">
            VIEW ALL →
          </Link>
        </div>
        <div className="grid grid-cols-12 gap-3 sm:gap-4">
          {featuredProjects.map((project, i) => {
            const Diagram = diagramMap[project.diagram] || DiagramTruss;
            return (
              <Plate
                key={project.slug}
                interactive
                label={`PLATE ${String(i + 3).padStart(2, "0")} / ${project.dwg}`}
                serial={project.dwg}
                className="col-span-12 sm:col-span-6"
              >
                <div className="flex flex-col h-full">
                  <div className="flex items-start justify-between mb-3">
                    <div>
                      <h3 className="font-display font-extrabold uppercase tracking-tight text-xl text-ink">{project.title}</h3>
                      <span className="font-mono text-[10px] uppercase tracking-[0.1em] text-steel">{project.year}</span>
                    </div>
                    <Stamp text={project.status === "Built" ? "VERIFIED" : "IN PROGRESS"} variant={project.status === "Built" ? "verified" : "pending"} />
                  </div>
                  <div className="flex-1 flex items-center justify-center py-4 opacity-70">
                    <div className="w-full max-w-[200px]">
                      <Diagram />
                    </div>
                  </div>
                  <div className="flex flex-wrap gap-1.5 mt-2">
                    {project.stack.map((s) => (
                      <span key={s} className="px-1.5 py-0.5 border border-steel text-[9px] font-mono uppercase tracking-[0.1em] text-steel">
                        {s}
                      </span>
                    ))}
                  </div>
                </div>
              </Plate>
            );
          })}
        </div>
      </div>
      </RevealOnScroll>

      {/* ROW 4: Process */}
      <RevealOnScroll delay={240}>
      <div className="mb-4">
        <div className="grid grid-cols-12 gap-3 sm:gap-4">
          {["SPEC", "BUILD", "VERIFY", "SHIP"].map((phase, i) => (
            <Plate key={phase} label={`PHASE 0${i + 1}`} className="col-span-6 sm:col-span-3">
              <div className="text-center py-4">
                <span className="font-display font-extrabold text-4xl text-ink">{String(i + 1).padStart(2, "0")}</span>
                <p className="font-display font-extrabold uppercase tracking-tight text-sm text-ink mt-2">{phase}</p>
              </div>
            </Plate>
          ))}
        </div>
        <div className="mt-3">
          <TapeMeasure segments={12} />
        </div>
      </div>
      </RevealOnScroll>

      {/* ROW 5: About teaser + Stack teaser + Contact CTA */}
      <RevealOnScroll delay={360}>
      <div className="grid grid-cols-12 gap-3 sm:gap-4">
        <Plate label="PLATE 07 / ABOUT" serial="SN-007" className="col-span-12 sm:col-span-4">
          <h3 className="font-display font-extrabold uppercase tracking-tight text-lg text-ink mb-2">STRUCTURAL NOTES</h3>
          <p className="text-sm text-ink leading-relaxed mb-3">
            Full-stack developer and AI engineer. I build web products and automation systems that solve real problems.
          </p>
          <Link to="/about" className="font-mono text-[11px] uppercase tracking-[0.1em] text-steel hover:text-ink border-b border-steel hover:border-ink">
            READ MORE →
          </Link>
        </Plate>

        <Plate variant="slab" label="PLATE 08 / STACK SCHEDULE" serial="SN-008" className="col-span-12 sm:col-span-4">
          <h3 className="font-display font-extrabold uppercase tracking-tight text-lg text-ink mb-2">MATERIALS</h3>
          <div className="space-y-1">
            {["React", "TypeScript", "Python", "Supabase", "Flask"].map((item) => (
              <div key={item} className="flex justify-between border-b border-steel/30 pb-0.5">
                <span className="font-mono text-[11px] uppercase tracking-[0.1em] text-ink">{item}</span>
                <span className="font-mono text-[10px] text-steel">DAILY</span>
              </div>
            ))}
          </div>
        </Plate>

        <Plate variant="inverted" label="PLATE 09 / CONTACT" serial="SN-009" className="col-span-12 sm:col-span-4">
          <div className="flex flex-col justify-between h-full">
            <div>
              <h3 className="font-display font-extrabold uppercase tracking-tight text-lg text-safety mb-2">START A PROJECT</h3>
              <p className="font-mono text-[11px] text-concrete/70 uppercase tracking-[0.1em]">
                AVAILABLE FOR FREELANCE AND CONTRACT WORK
              </p>
            </div>
            <Link to="/contact" className="mt-4 inline-block bg-safety text-ink px-4 py-2 font-display font-extrabold uppercase text-sm tracking-tight hover:bg-concrete transition-colors">
              ISSUE INSTRUCTION
            </Link>
          </div>
        </Plate>
      </div>
      </RevealOnScroll>

      {/* Hazard tape divider */}
      <div className="mt-8">
        <HazardTape />
      </div>
    </div>
  );
}
