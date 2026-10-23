import { Plate } from "../themes/site/components";
import { processPhases, projects } from "../content";

export default function Process() {
  const example = projects[0]; // Game Hub 2.0

  return (
    <div className="max-w-[1280px] mx-auto px-3 sm:px-4 py-6 sm:py-8">
      <div className="mb-6">
        <h1 className="font-display font-extrabold uppercase tracking-tight text-3xl sm:text-5xl text-ink">CONSTRUCTION SEQUENCE</h1>
        <p className="font-mono text-[11px] uppercase tracking-[0.1em] text-steel mt-1">PROGRAM OF WORKS / WORKED EXAMPLE: {example.title.toUpperCase()}</p>
      </div>

      {/* Gantt chart */}
      <Plate label="PROGRAM / GANTT" serial="PROG-001" className="mb-4 overflow-x-auto">
        <div className="min-w-[600px]">
          {/* Header */}
          <div className="grid grid-cols-4 gap-2 mb-4 border-b border-ink pb-2">
            {processPhases.map((phase) => (
              <div key={phase.id} className="text-center">
                <span className="font-display font-extrabold uppercase text-sm text-ink">{phase.number} / {phase.label}</span>
              </div>
            ))}
          </div>

          {/* Bars */}
          <div className="relative h-24 border border-steel/30">
            {/* Phase bars */}
            {processPhases.map((phase, i) => (
              <div
                key={phase.id}
                className="absolute top-2 h-8 bg-ink flex items-center justify-center"
                style={{ left: `${i * 25}%`, width: "25%" }}
              >
                <span className="font-mono text-[10px] uppercase tracking-[0.1em] text-safety">{phase.label}</span>
              </div>
            ))}

            {/* Milestones */}
            <div className="absolute bottom-2 left-0 right-0 flex">
              {processPhases.map((phase, i) => (
                <div key={phase.id} className="flex-1 flex items-center justify-center">
                  <div className="flex flex-col items-center">
                    <span className="text-safety text-lg">◆</span>
                    <span className="font-mono text-[8px] uppercase tracking-[0.1em] text-steel text-center whitespace-nowrap">
                      {phase.milestone}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Timeline ticks */}
          <div className="flex mt-1">
            {Array.from({ length: 13 }).map((_, i) => (
              <div key={i} className="flex-1 text-center">
                <span className="font-mono text-[8px] text-steel">W{i}</span>
              </div>
            ))}
          </div>
        </div>
      </Plate>

      {/* Phase detail plates */}
      <div className="grid grid-cols-12 gap-3 sm:gap-4">
        {processPhases.map((phase, i) => (
          <Plate
            key={phase.id}
            label={`PHASE ${phase.number} / ${phase.label}`}
            serial={`PH-${phase.number}`}
            variant={i === 0 ? "inverted" : "concrete"}
            className="col-span-12 sm:col-span-6 lg:col-span-3"
          >
            <div className="h-full flex flex-col">
              <h3 className={`font-display font-extrabold uppercase text-lg mb-2 ${i === 0 ? "text-safety" : "text-ink"}`}>
                {phase.label}
              </h3>
              <p className={`text-sm leading-relaxed mb-4 ${i === 0 ? "text-concrete/80" : "text-ink"}`}>
                {phase.description}
              </p>
              <div className="mt-auto">
                <span className={`font-mono text-[10px] uppercase tracking-[0.1em] block mb-2 ${i === 0 ? "text-concrete/50" : "text-steel"}`}>
                  TASKS:
                </span>
                <ul className="space-y-1">
                  {phase.tasks.map((task) => (
                    <li key={task} className={`flex items-center gap-2 text-xs ${i === 0 ? "text-concrete/70" : "text-ink"}`}>
                      <span className={`w-1.5 h-1.5 ${i === 0 ? "bg-safety" : "bg-ink"}`} />
                      {task}
                    </li>
                  ))}
                </ul>
              </div>
              <div className={`mt-4 pt-3 border-t ${i === 0 ? "border-concrete/20" : "border-steel/30"}`}>
                <span className={`font-mono text-[9px] uppercase tracking-[0.1em] ${i === 0 ? "text-safety" : "text-signal"}`}>
                  ◆ {phase.milestone}
                </span>
              </div>
            </div>
          </Plate>
        ))}
      </div>
    </div>
  );
}
