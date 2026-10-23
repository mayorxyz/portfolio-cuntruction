import { useParams, Link } from "react-router-dom";
import { Plate, Stamp } from "../themes/site/components";
import { DiagramTruss } from "../themes/site/diagrams";
import { projects } from "../content";

export default function CaseStudy() {
  const { slug } = useParams<{ slug: string }>();
  const project = projects.find(p => p.slug === slug);
  const currentIndex = projects.findIndex(p => p.slug === slug);
  const prev = currentIndex > 0 ? projects[currentIndex - 1] : null;
  const next = currentIndex < projects.length - 1 ? projects[currentIndex + 1] : null;

  if (!project) {
    return (
      <div className="max-w-[1280px] mx-auto px-4 py-16 text-center">
        <h1 className="font-display font-extrabold uppercase text-4xl text-ink mb-4">NO SUCH SECTION ON SITE</h1>
        <Link to="/work" className="font-mono text-sm uppercase tracking-[0.1em] text-steel hover:text-ink border-b border-steel">
          ← RETURN TO WORK INDEX
        </Link>
      </div>
    );
  }

  return (
    <div className="max-w-[1280px] mx-auto px-3 sm:px-4 py-6 sm:py-8">
      {/* Title */}
      <div className="mb-6">
        <h1 className="font-display font-extrabold uppercase tracking-tight text-3xl sm:text-5xl text-ink">{project.title}</h1>
        <p className="font-mono text-[11px] uppercase tracking-[0.1em] text-steel mt-1">{project.dwg} / {project.year}</p>
      </div>

      {/* Metadata plate */}
      <Plate label="PROJECT DATA" serial={project.dwg} className="mb-4">
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
          <div>
            <span className="font-mono text-[10px] uppercase tracking-[0.1em] text-steel block mb-1">STATUS</span>
            <Stamp text={project.status === "Built" ? "VERIFIED" : "IN PROGRESS"} variant={project.status === "Built" ? "verified" : "pending"} />
          </div>
          <div>
            <span className="font-mono text-[10px] uppercase tracking-[0.1em] text-steel block mb-1">YEAR</span>
            <span className="font-mono text-sm text-ink">{project.year}</span>
          </div>
          <div>
            <span className="font-mono text-[10px] uppercase tracking-[0.1em] text-steel block mb-1">ROLE</span>
            <span className="font-mono text-sm text-ink">{project.role}</span>
          </div>
          <div>
            <span className="font-mono text-[10px] uppercase tracking-[0.1em] text-steel block mb-1">STACK</span>
            <div className="flex flex-wrap gap-1">
              {project.stack.map(s => (
                <span key={s} className="px-1 py-0.5 border border-steel text-[9px] font-mono uppercase tracking-[0.1em] text-steel">{s}</span>
              ))}
            </div>
          </div>
        </div>
      </Plate>

      {/* Body grid */}
      <div className="grid grid-cols-12 gap-3 sm:gap-4 mb-4">
        {/* Problem */}
        <Plate variant="slab" label="PROBLEM STATEMENT" className="col-span-12 sm:col-span-6">
          <p className="text-sm text-ink leading-relaxed">{project.problem}</p>
        </Plate>

        {/* Key Decisions */}
        <Plate label="KEY DECISIONS" className="col-span-12 sm:col-span-6">
          <ol className="space-y-3">
            {project.keyDecisions.map((decision, i) => (
              <li key={i} className="flex gap-3">
                <span className="flex-shrink-0 w-5 h-5 border border-ink flex items-center justify-center font-mono text-[10px] text-ink">{i + 1}</span>
                <span className="text-sm text-ink leading-relaxed">{decision}</span>
              </li>
            ))}
          </ol>
        </Plate>

        {/* Architecture diagram - large */}
        <Plate label="ARCHITECTURE / NODE DIAGRAM" serial={`DWG-${project.slug.toUpperCase()}-ARCH`} className="col-span-12 lg:col-span-8">
          <div className="flex items-center justify-center py-6">
            <div className="w-full max-w-[400px]">
              <DiagramTruss />
            </div>
          </div>
          <div className="flex flex-wrap gap-2 mt-2">
            {project.stack.map((s, i) => (
              <span key={s} className="font-mono text-[9px] uppercase tracking-[0.1em] text-steel border-b border-dashed border-steel">
                {String.fromCharCode(65 + i)}: {s}
              </span>
            ))}
          </div>
        </Plate>

        {/* Verified - inverted */}
        <Plate variant="inverted" label="INSPECTION CERTIFICATE" className="col-span-12 lg:col-span-4">
          <div className="flex flex-col items-center justify-center h-full py-6 text-center">
            <div className="w-16 h-16 border-4 border-safety flex items-center justify-center mb-4">
              <svg viewBox="0 0 24 24" className="w-8 h-8 text-safety" fill="none" stroke="currentColor" strokeWidth="3">
                <polyline points="20 6 9 17 4 12" />
              </svg>
            </div>
            <span className="font-display font-extrabold uppercase text-lg text-safety tracking-tight">VERIFIED</span>
            <span className="font-mono text-[10px] uppercase tracking-[0.1em] text-concrete/60 mt-2">
              INSPECTION PASSED / {project.year}
            </span>
            <span className="font-mono text-[10px] uppercase tracking-[0.1em] text-concrete/40 mt-1">
              {project.dwg}
            </span>
          </div>
        </Plate>

        {/* Outcome */}
        <Plate label="OUTCOME" className="col-span-12 sm:col-span-6">
          <p className="text-sm text-ink leading-relaxed">{project.outcome}</p>
          <div className="mt-3 pt-3 border-t border-steel/30">
            <span className="font-mono text-[10px] uppercase tracking-[0.1em] text-steel">PHASES:</span>
            <p className="font-mono text-[11px] text-ink mt-1">{project.phase}</p>
          </div>
        </Plate>

        {/* Screenshot placeholder */}
        <Plate variant="slab" label="DETAIL A: SCREENSHOT" className="col-span-12 sm:col-span-6">
          <div className="flex items-center justify-center h-40 border border-dashed border-steel bg-[url('data:image/svg+xml,%3Csvg%20width%3D%228%22%20height%3D%228%22%20viewBox%3D%220%200%208%208%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%3Cline%20x1%3D%220%22%20y1%3D%220%22%20x2%3D%228%22%20y2%3D%228%22%20stroke%3D%22%235C6166%22%20stroke-width%3D%220.3%22%2F%3E%3C%2Fsvg%3E')]">
            <span className="font-mono text-[11px] uppercase tracking-[0.1em] text-steel">IMAGE PENDING</span>
          </div>
        </Plate>
      </div>

      {/* Prev / Next */}
      <div className="grid grid-cols-12 gap-3 sm:gap-4">
        {prev ? (
          <Plate interactive label="◄ PREVIOUS DWG" className="col-span-6">
            <Link to={`/work/${prev.slug}`} className="block">
              <span className="font-display font-extrabold uppercase text-sm text-ink">{prev.title}</span>
              <span className="block font-mono text-[10px] uppercase tracking-[0.1em] text-steel mt-1">{prev.dwg}</span>
            </Link>
          </Plate>
        ) : <div className="col-span-6" />}
        {next ? (
          <Plate interactive label="NEXT DWG ►" className="col-span-6">
            <Link to={`/work/${next.slug}`} className="block text-right">
              <span className="font-display font-extrabold uppercase text-sm text-ink">{next.title}</span>
              <span className="block font-mono text-[10px] uppercase tracking-[0.1em] text-steel mt-1">{next.dwg}</span>
            </Link>
          </Plate>
        ) : <div className="col-span-6" />}
      </div>
    </div>
  );
}
