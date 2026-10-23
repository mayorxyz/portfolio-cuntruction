import { Plate, Stamp } from "../themes/site/components";
import { DiagramCrane, DiagramGear, DiagramMohr, DiagramBeamDeflection } from "../themes/site/diagrams";
import { projects } from "../content";

const experiments = [
  { title: "Movie Catalogue", status: "Complete", testNo: "LAB-001", diagram: DiagramCrane, description: "Movie discovery app with search and filtering." },
  { title: "OrchestrateIQ", status: "Complete", testNo: "LAB-002", diagram: DiagramGear, description: "AI-powered task orchestration tool." },
  { title: "Fake News Detection", status: "Complete", testNo: "LAB-003", diagram: DiagramMohr, description: "ML system for news classification." },
  { title: "PC Optimizer", status: "In Progress", testNo: "LAB-004", diagram: DiagramBeamDeflection, description: "System performance analysis concept." },
];

export default function Lab() {
  return (
    <div className="max-w-[1280px] mx-auto px-3 sm:px-4 py-6 sm:py-8">
      <div className="mb-6">
        <h1 className="font-display font-extrabold uppercase tracking-tight text-3xl sm:text-5xl text-ink">TEST RIG</h1>
        <p className="font-mono text-[11px] uppercase tracking-[0.1em] text-steel mt-1">EXPERIMENTS / PROTOTYPES / EXPLORATIONS</p>
      </div>

      <div className="grid grid-cols-12 gap-3 sm:gap-4">
        {experiments.map((exp, i) => {
          const Diagram = exp.diagram;
          return (
            <Plate
              key={exp.testNo}
              label={`TEST ${exp.testNo}`}
              serial={exp.testNo}
              interactive
              variant={i === 0 ? "inverted" : i === 2 ? "slab" : "concrete"}
              className="col-span-12 sm:col-span-6 lg:col-span-3"
            >
              <div className="flex flex-col h-full">
                <div className="flex items-start justify-between mb-3">
                  <h3 className={`font-display font-extrabold uppercase text-base ${i === 0 ? "text-safety" : "text-ink"}`}>
                    {exp.title}
                  </h3>
                  <Stamp
                    text={exp.status === "Complete" ? "VERIFIED" : "TESTING"}
                    variant={exp.status === "Complete" ? "verified" : "pending"}
                  />
                </div>
                <div className="flex-1 flex items-center justify-center py-4 opacity-60">
                  <div className="w-full max-w-[140px]">
                    <Diagram />
                  </div>
                </div>
                <p className={`text-xs leading-relaxed ${i === 0 ? "text-concrete/70" : "text-ink"}`}>
                  {exp.description}
                </p>
              </div>
            </Plate>
          );
        })}
      </div>

      {/* Note plate */}
      <Plate variant="slab" label="LAB NOTES" serial="LAB-NOTE" className="mt-4">
        <p className="text-sm text-ink leading-relaxed">
          These are projects built to explore specific technical challenges. Each one tests a different aspect of the stack — from ML pipelines to real-time systems to UI architecture.
          Some become products, some remain experiments. All teach something.
        </p>
      </Plate>
    </div>
  );
}
