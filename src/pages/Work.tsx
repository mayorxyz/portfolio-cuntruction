import { useState } from "react";
import { Link } from "react-router-dom";
import { Plate, Stamp } from "../themes/site/components";
import { DiagramTruss, DiagramGear, DiagramStressStrain, DiagramRebar, DiagramIBeam, DiagramGauge } from "../themes/site/diagrams";
import { projects } from "../content";

const diagramMap: Record<string, React.FC<{ className?: string }>> = {
  truss: DiagramTruss,
  gear: DiagramGear,
  stressStrain: DiagramStressStrain,
  rebar: DiagramRebar,
  ibeam: DiagramIBeam,
  gauge: DiagramGauge,
};

export default function Work() {
  const [filter, setFilter] = useState("ALL");
  const statuses = ["ALL", "BUILT", "IN PROGRESS"];
  const filtered = filter === "ALL" ? projects : projects.filter(p => p.status === filter || (filter === "BUILT" && p.status === "Built"));

  return (
    <div className="max-w-[1280px] mx-auto px-3 sm:px-4 py-6 sm:py-8">
      {/* Header */}
      <div className="flex items-end justify-between mb-6">
        <div>
          <h1 className="font-display font-extrabold uppercase tracking-tight text-3xl sm:text-5xl text-ink">WORK INDEX</h1>
          <p className="font-mono text-[11px] uppercase tracking-[0.1em] text-steel mt-1">PROJECT CATALOGUE / {projects.length} ENTRIES</p>
        </div>
      </div>

      {/* Filter bar */}
      <div className="border-2 border-ink p-3 mb-6 flex flex-wrap items-center gap-3">
        <span className="font-mono text-[10px] uppercase tracking-[0.1em] text-steel mr-2">STATUS:</span>
        {statuses.map((s) => (
          <button
            key={s}
            onClick={() => setFilter(s)}
            className={`px-3 py-1 border-2 text-[11px] font-mono uppercase tracking-[0.1em] transition-colors ${
              filter === s ? "bg-safety border-ink text-ink" : "border-steel text-steel hover:border-ink hover:text-ink"
            }`}
          >
            {s}
          </button>
        ))}
        <div className="flex-1" />
        <div className="flex flex-wrap gap-1.5">
          {["React", "Python", "Supabase"].map((s) => (
            <span key={s} className="px-1.5 py-0.5 border border-steel text-[9px] font-mono uppercase tracking-[0.1em] text-steel">{s}</span>
          ))}
        </div>
      </div>

      {/* Featured project (first one, large) */}
      {filtered.length > 0 && (
        <Plate
          interactive
          label={`FEATURED / ${filtered[0].dwg}`}
          serial={filtered[0].dwg}
          className="col-span-12 mb-4"
        >
          <Link to={`/work/${filtered[0].slug}`} className="block">
            <div className="grid grid-cols-12 gap-4">
              <div className="col-span-12 lg:col-span-8">
                <div className="flex items-start justify-between mb-3">
                  <div>
                    <h2 className="font-display font-extrabold uppercase tracking-tight text-2xl sm:text-4xl text-ink">{filtered[0].title}</h2>
                    <span className="font-mono text-[10px] uppercase tracking-[0.1em] text-steel">{filtered[0].year} / {filtered[0].role}</span>
                  </div>
                  <Stamp text={filtered[0].status === "Built" ? "VERIFIED" : "IN PROGRESS"} variant={filtered[0].status === "Built" ? "verified" : "pending"} />
                </div>
                <p className="text-sm text-ink leading-relaxed mb-4">{filtered[0].description}</p>
                <div className="flex flex-wrap gap-1.5">
                  {filtered[0].stack.map((s) => (
                    <span key={s} className="px-1.5 py-0.5 border border-steel text-[9px] font-mono uppercase tracking-[0.1em] text-steel">{s}</span>
                  ))}
                </div>
              </div>
              <div className="col-span-12 lg:col-span-4 flex items-center justify-center">
                <div className="w-full max-w-[250px] opacity-60">
                  {(() => { const D = diagramMap[filtered[0].diagram] || DiagramTruss; return <D />; })()}
                </div>
              </div>
            </div>
          </Link>
        </Plate>
      )}

      {/* Remaining projects grid */}
      <div className="grid grid-cols-12 gap-3 sm:gap-4">
        {filtered.slice(1).map((project, i) => {
          const Diagram = diagramMap[project.diagram] || DiagramTruss;
          return (
            <Plate
              key={project.slug}
              interactive
              label={`PLATE ${String(i + 2).padStart(2, "0")} / ${project.dwg}`}
              serial={project.dwg}
              className="col-span-12 sm:col-span-6 lg:col-span-4"
            >
              <Link to={`/work/${project.slug}`} className="block h-full">
                <div className="flex flex-col h-full">
                  <div className="flex items-start justify-between mb-2">
                    <div>
                      <h3 className="font-display font-extrabold uppercase tracking-tight text-lg text-ink">{project.title}</h3>
                      <span className="font-mono text-[10px] uppercase tracking-[0.1em] text-steel">{project.year}</span>
                    </div>
                    <Stamp text={project.status === "Built" ? "VERIFIED" : "IN PROGRESS"} variant={project.status === "Built" ? "verified" : "pending"} />
                  </div>
                  <div className="flex-1 flex items-center justify-center py-4 opacity-60">
                    <div className="w-full max-w-[160px]"><Diagram /></div>
                  </div>
                  <p className="text-xs text-ink leading-relaxed line-clamp-2 mb-2">{project.description}</p>
                  <div className="flex flex-wrap gap-1">
                    {project.stack.slice(0, 3).map((s) => (
                      <span key={s} className="px-1 py-0.5 border border-steel text-[8px] font-mono uppercase tracking-[0.1em] text-steel">{s}</span>
                    ))}
                  </div>
                </div>
              </Link>
            </Plate>
          );
        })}
      </div>
    </div>
  );
}
