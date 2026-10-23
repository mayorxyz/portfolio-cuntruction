import { Plate } from "../themes/site/components";
import { education, projects, stackCategories, personalInfo } from "../content";

export default function CV() {
  return (
    <div className="max-w-[1280px] mx-auto px-3 sm:px-4 py-6 sm:py-8">
      <div className="flex items-end justify-between mb-6">
        <div>
          <h1 className="font-display font-extrabold uppercase tracking-tight text-3xl sm:text-5xl text-ink">REVISION REGISTER</h1>
          <p className="font-mono text-[11px] uppercase tracking-[0.1em] text-steel mt-1">CURRICULUM VITAE / REV. 2026-01</p>
        </div>
        <a
          href="/cv.pdf"
          className="hidden sm:inline-block bg-ink text-safety px-4 py-2 font-display font-extrabold uppercase text-sm tracking-tight hover:bg-safety hover:text-ink transition-colors border-2 border-ink"
        >
          DOWNLOAD CV
        </a>
      </div>

      <div className="grid grid-cols-12 gap-3 sm:gap-4">
        {/* Personal info */}
        <Plate variant="inverted" label="PERSONAL DATA" serial="CV-001" className="col-span-12 sm:col-span-4">
          <div className="space-y-3">
            <div>
              <span className="font-mono text-[10px] uppercase tracking-[0.1em] text-concrete/50 block">NAME</span>
              <span className="font-display font-extrabold uppercase text-lg text-safety">{personalInfo.name}</span>
            </div>
            <div>
              <span className="font-mono text-[10px] uppercase tracking-[0.1em] text-concrete/50 block">TITLE</span>
              <span className="text-sm text-concrete">{personalInfo.title}</span>
            </div>
            <div>
              <span className="font-mono text-[10px] uppercase tracking-[0.1em] text-concrete/50 block">LOCATION</span>
              <span className="text-sm text-concrete">{personalInfo.location}</span>
            </div>
            <div>
              <span className="font-mono text-[10px] uppercase tracking-[0.1em] text-concrete/50 block">EMAIL</span>
              <span className="text-sm text-concrete">{personalInfo.email}</span>
            </div>
          </div>
        </Plate>

        {/* Education */}
        <Plate label="EDUCATION" serial="CV-002" className="col-span-12 sm:col-span-4">
          <div className="space-y-2">
            <span className="font-display font-extrabold uppercase text-sm text-ink">{education.degree}</span>
            <span className="text-sm text-ink block">{education.institution}</span>
          </div>
        </Plate>

        {/* Skills summary */}
        <Plate variant="slab" label="SKILLS" serial="CV-003" className="col-span-12 sm:col-span-4">
          <div className="flex flex-wrap gap-1.5">
            {stackCategories.flatMap(c => c.items.map(i => i.item)).filter((v, i, a) => a.indexOf(v) === i).map(skill => (
              <span key={skill} className="px-1.5 py-0.5 border border-steel text-[9px] font-mono uppercase tracking-[0.1em] text-ink">{skill}</span>
            ))}
          </div>
        </Plate>

        {/* Projects table */}
        <Plate label="PROJECT REGISTER" serial="CV-004" className="col-span-12 overflow-x-auto">
          <table className="w-full min-w-[500px]">
            <thead>
              <tr className="border-b-2 border-ink">
                <th className="text-left py-2 pr-4 font-mono text-[10px] uppercase tracking-[0.1em] text-steel">REV</th>
                <th className="text-left py-2 pr-4 font-mono text-[10px] uppercase tracking-[0.1em] text-steel">TITLE</th>
                <th className="text-left py-2 pr-4 font-mono text-[10px] uppercase tracking-[0.1em] text-steel">YEAR</th>
                <th className="text-left py-2 pr-4 font-mono text-[10px] uppercase tracking-[0.1em] text-steel">STATUS</th>
                <th className="text-left py-2 font-mono text-[10px] uppercase tracking-[0.1em] text-steel">STACK</th>
              </tr>
            </thead>
            <tbody>
              {projects.map((p, i) => (
                <tr key={p.slug} className="border-b border-steel/30">
                  <td className="py-2 pr-4 font-mono text-sm text-ink">{String(i + 1).padStart(2, "0")}</td>
                  <td className="py-2 pr-4 font-display font-extrabold uppercase text-sm text-ink">{p.title}</td>
                  <td className="py-2 pr-4 font-mono text-sm text-ink">{p.year}</td>
                  <td className="py-2 pr-4 font-mono text-[10px] uppercase tracking-[0.1em] text-steel">{p.status}</td>
                  <td className="py-2 font-mono text-[10px] text-steel">{p.stack.join(", ")}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </Plate>
      </div>

      {/* Mobile download button */}
      <a
        href="/cv.pdf"
        className="sm:hidden mt-4 block bg-ink text-safety px-6 py-3 font-display font-extrabold uppercase text-center tracking-tight border-2 border-ink"
      >
        DOWNLOAD CV
      </a>
    </div>
  );
}
