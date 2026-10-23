import { Plate } from "../themes/site/components";
import { services } from "../content";
import { Link } from "react-router-dom";

export default function Services() {
  return (
    <div className="max-w-[1280px] mx-auto px-3 sm:px-4 py-6 sm:py-8">
      <div className="mb-6">
        <h1 className="font-display font-extrabold uppercase tracking-tight text-3xl sm:text-5xl text-ink">BILL OF QUANTITIES</h1>
        <p className="font-mono text-[11px] uppercase tracking-[0.1em] text-steel mt-1">SERVICES / DELIVERABLES / TYPICAL SCOPE</p>
      </div>

      {/* BOQ Table */}
      <Plate label="BOQ / SERVICES SCHEDULE" serial="BOQ-001" className="mb-4 overflow-x-auto">
        <table className="w-full min-w-[600px]">
          <thead>
            <tr className="border-b-2 border-ink">
              <th className="text-left py-2 pr-4 font-mono text-[10px] uppercase tracking-[0.1em] text-steel">ITEM NO.</th>
              <th className="text-left py-2 pr-4 font-mono text-[10px] uppercase tracking-[0.1em] text-steel">DESCRIPTION</th>
              <th className="text-left py-2 pr-4 font-mono text-[10px] uppercase tracking-[0.1em] text-steel">DELIVERABLE</th>
              <th className="text-left py-2 font-mono text-[10px] uppercase tracking-[0.1em] text-steel">TYPICAL SCOPE</th>
            </tr>
          </thead>
          <tbody>
            {services.map((item, i) => (
              <tr key={item.no} className={`border-b border-steel/30 ${i % 2 === 0 ? "" : "bg-slab/50"}`}>
                <td className="py-3 pr-4 font-mono text-sm text-ink">{item.no}</td>
                <td className="py-3 pr-4 font-display font-extrabold uppercase text-sm text-ink">{item.description}</td>
                <td className="py-3 pr-4 text-sm text-ink">{item.deliverable}</td>
                <td className="py-3 text-xs text-steel">{item.scope}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </Plate>

      {/* Additional info plates */}
      <div className="grid grid-cols-12 gap-3 sm:gap-4 mb-4">
        <Plate variant="slab" label="HOW IT WORKS" className="col-span-12 sm:col-span-6">
          <div className="space-y-3">
            <div className="flex gap-3">
              <span className="flex-shrink-0 w-6 h-6 border border-ink flex items-center justify-center font-mono text-[10px] text-ink">1</span>
              <p className="text-sm text-ink">Send a brief describing what you need built.</p>
            </div>
            <div className="flex gap-3">
              <span className="flex-shrink-0 w-6 h-6 border border-ink flex items-center justify-center font-mono text-[10px] text-ink">2</span>
              <p className="text-sm text-ink">I'll respond with a scope, timeline, and approach.</p>
            </div>
            <div className="flex gap-3">
              <span className="flex-shrink-0 w-6 h-6 border border-ink flex items-center justify-center font-mono text-[10px] text-ink">3</span>
              <p className="text-sm text-ink">We agree on terms and I start building.</p>
            </div>
            <div className="flex gap-3">
              <span className="flex-shrink-0 w-6 h-6 border border-ink flex items-center justify-center font-mono text-[10px] text-ink">4</span>
              <p className="text-sm text-ink">Regular check-ins, verified deliverables, handover.</p>
            </div>
          </div>
        </Plate>

        <Plate variant="inverted" label="ENGAGEMENT MODELS" className="col-span-12 sm:col-span-6">
          <div className="space-y-4">
            <div>
              <span className="font-display font-extrabold uppercase text-sm text-safety">PROJECT-BASED</span>
              <p className="text-sm text-concrete/70 mt-1">Fixed scope, fixed deliverable. Best for well-defined builds.</p>
            </div>
            <div>
              <span className="font-display font-extrabold uppercase text-sm text-safety">RETAINER</span>
              <p className="text-sm text-concrete/70 mt-1">Ongoing development hours per month. Best for evolving products.</p>
            </div>
            <div>
              <span className="font-display font-extrabold uppercase text-sm text-safety">CONSULTING</span>
              <p className="text-sm text-concrete/70 mt-1">Architecture review, technical decisions, code audit.</p>
            </div>
          </div>
        </Plate>
      </div>

      {/* CTA */}
      <Link
        to="/contact"
        className="block bg-safety border-2 border-ink p-6 text-center font-display font-extrabold uppercase text-2xl tracking-tight text-ink hover:bg-ink hover:text-safety transition-colors"
      >
        START A PROJECT
      </Link>
    </div>
  );
}
