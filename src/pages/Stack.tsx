import { Plate } from "../themes/site/components";
import { stackCategories } from "../content";

export default function Stack() {
  return (
    <div className="max-w-[1280px] mx-auto px-3 sm:px-4 py-6 sm:py-8">
      <div className="mb-6">
        <h1 className="font-display font-extrabold uppercase tracking-tight text-3xl sm:text-5xl text-ink">MATERIALS SCHEDULE</h1>
        <p className="font-mono text-[11px] uppercase tracking-[0.1em] text-steel mt-1">TECHNOLOGY STACK / GRADE ASSIGNMENTS</p>
      </div>

      <div className="grid grid-cols-12 gap-3 sm:gap-4">
        {stackCategories.map((cat, catIdx) => (
          <Plate
            key={cat.id}
            label={`PLATE ${String(catIdx + 1).padStart(2, "0")} / ${cat.label.toUpperCase()}`}
            serial={`${cat.code}-SCHEDULE`}
            variant={catIdx === 0 ? "inverted" : catIdx === 3 ? "slab" : "concrete"}
            className="col-span-12 sm:col-span-6 lg:col-span-4"
          >
            <div className="space-y-3">
              {cat.items.map((item, i) => {
                const code = `${cat.code}${i + 1}`;
                const isInverted = catIdx === 0;
                return (
                  <div key={item.item} className={`border-b pb-2 ${isInverted ? "border-concrete/20" : "border-steel/30"}`}>
                    <div className="flex items-baseline justify-between mb-1">
                      <div className="flex items-baseline gap-2">
                        <span className={`font-mono text-[10px] uppercase tracking-[0.1em] ${isInverted ? "text-safety" : "text-steel"}`}>{code}</span>
                        <span className={`font-display font-extrabold uppercase text-sm ${isInverted ? "text-concrete" : "text-ink"}`}>{item.item}</span>
                      </div>
                    </div>
                    <div className="flex items-baseline gap-2">
                      <span className={`font-mono text-[9px] uppercase tracking-[0.1em] ${isInverted ? "text-concrete/50" : "text-steel"}`}>LEVEL:</span>
                      <span className={`font-mono text-[10px] uppercase tracking-[0.1em] ${
                        item.grade === "Daily" ? (isInverted ? "text-safety" : "text-ink") : (isInverted ? "text-concrete/70" : "text-steel")
                      }`}>{item.grade}</span>
                    </div>
                    <div className="mt-1">
                      <span className={`font-mono text-[9px] uppercase tracking-[0.1em] ${isInverted ? "text-concrete/50" : "text-steel"}`}>USED IN: </span>
                      <span className={`text-[11px] ${isInverted ? "text-concrete/70" : "text-ink"}`}>
                        {item.usedIn.join(", ")}
                      </span>
                    </div>
                  </div>
                );
              })}
            </div>
          </Plate>
        ))}
      </div>
    </div>
  );
}
