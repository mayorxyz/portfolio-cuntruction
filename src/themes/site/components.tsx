import { ReactNode } from "react";

// ─── BOLT ───
export function Bolt() {
  return <span className="bolt inline-block" />;
}

// ─── CORNER BOLTS (4 corners) ───
export function CornerBolts() {
  return (
    <>
      <span className="absolute top-2 left-2"><Bolt /></span>
      <span className="absolute top-2 right-2"><Bolt /></span>
      <span className="absolute bottom-2 left-2"><Bolt /></span>
      <span className="absolute bottom-2 right-2"><Bolt /></span>
    </>
  );
}

// ─── LABEL TAB ───
export function LabelTab({ children, inverted }: { children: ReactNode; inverted?: boolean }) {
  return (
    <span
      className={`absolute top-0 left-6 -translate-y-1/2 px-2 py-0.5 text-[11px] uppercase tracking-[0.1em] font-mono font-medium border border-current ${
        inverted ? "bg-rebar text-concrete border-concrete" : "bg-ink text-concrete border-ink"
      }`}
    >
      {children}
    </span>
  );
}

// ─── PLATE ───
interface PlateProps {
  children: ReactNode;
  variant?: "concrete" | "slab" | "inverted" | "safety";
  interactive?: boolean;
  label?: string;
  serial?: string;
  className?: string;
  colSpan?: number;
  rowSpan?: number;
}

export function Plate({
  children,
  variant = "concrete",
  interactive = false,
  label,
  serial,
  className = "",
  colSpan,
  rowSpan,
}: PlateProps) {
  const variantClass = {
    concrete: "",
    slab: "plate--slab",
    inverted: "plate--inverted",
    safety: "plate--safety",
  }[variant];

  const style: React.CSSProperties = {};
  if (colSpan) style.gridColumn = `span ${colSpan}`;
  if (rowSpan) style.gridRow = `span ${rowSpan}`;

  return (
    <div
      className={`plate ${variantClass} ${interactive ? "plate--interactive" : ""} p-5 relative overflow-hidden ${className}`}
      style={Object.keys(style).length > 0 ? style : undefined}
    >
      <CornerBolts />
      {label && <LabelTab inverted={variant === "inverted"}>{label}</LabelTab>}
      {serial && (
        <span className="absolute bottom-2 right-8 text-[10px] font-mono uppercase tracking-[0.1em] text-steel">
          {serial}
        </span>
      )}
      <div className="pt-2 h-full">{children}</div>
    </div>
  );
}

// ─── HAZARD TAPE ───
export function HazardTape({ children, className = "" }: { children?: ReactNode; className?: string }) {
  if (children) {
    return (
      <div className={`hazard-tape flex items-center overflow-hidden ${className}`}>
        <div className="bg-ink px-4 py-2 flex-shrink-0">
          <span className="text-safety font-mono text-xs uppercase tracking-[0.1em] font-medium">
            {children}
          </span>
        </div>
        <div className="flex-1 hazard-tape h-full" />
      </div>
    );
  }
  return <div className={`hazard-tape h-3 ${className}`} />;
}

// ─── HATCH PATTERNS (SVG) ───
export function HatchDefs() {
  return (
    <svg width="0" height="0" className="absolute">
      <defs>
        <pattern id="hatch-concrete" width="8" height="8" patternUnits="userSpaceOnUse">
          <circle cx="2" cy="2" r="0.8" fill="#5C6166" />
          <circle cx="6" cy="6" r="0.8" fill="#5C6166" />
          <path d="M4 1 L5 3 L3 3 Z" fill="none" stroke="#5C6166" strokeWidth="0.5" />
        </pattern>
        <pattern id="hatch-steel" width="6" height="6" patternUnits="userSpaceOnUse" patternTransform="rotate(45)">
          <line x1="0" y1="0" x2="0" y2="6" stroke="#5C6166" strokeWidth="0.5" />
        </pattern>
        <pattern id="hatch-earth" width="8" height="6" patternUnits="userSpaceOnUse">
          <line x1="0" y1="3" x2="4" y2="0" stroke="#5C6166" strokeWidth="0.7" />
        </pattern>
        <pattern id="hatch-insulation" width="12" height="6" patternUnits="userSpaceOnUse">
          <path d="M0 3 Q3 0 6 3 Q9 6 12 3" fill="none" stroke="#5C6166" strokeWidth="0.5" />
        </pattern>
        <pattern id="hatch-detail" width="10" height="10" patternUnits="userSpaceOnUse" patternTransform="rotate(45)">
          <line x1="0" y1="0" x2="0" y2="10" stroke="#5C6166" strokeWidth="0.4" />
        </pattern>
      </defs>
    </svg>
  );
}

// ─── DIMENSION LINE ───
export function DimLine({ width = "100%", label }: { width?: string; label?: string }) {
  return (
    <div className="flex items-center gap-1 my-2">
      <div className="w-px h-3 bg-ink" />
      <div className="flex-1 border-t border-dashed border-ink relative" style={{ width }}>
        {label && (
          <span className="absolute -top-4 left-1/2 -translate-x-1/2 text-[10px] font-mono uppercase tracking-[0.1em] text-steel whitespace-nowrap">
            {label}
          </span>
        )}
      </div>
      <div className="w-px h-3 bg-ink" />
    </div>
  );
}

// ─── STAMP BADGE ───
export function Stamp({ text, variant = "default" }: { text: string; variant?: "default" | "verified" | "pending" }) {
  const colors = {
    default: "border-ink text-ink",
    verified: "border-safety text-ink bg-safety",
    pending: "border-signal text-signal",
  };
  return (
    <span className={`inline-block border-2 px-2 py-0.5 text-[10px] font-mono uppercase tracking-[0.1em] font-medium ${colors[variant]}`}>
      {text}
    </span>
  );
}

// ─── MEASURING TAPE ───
export function TapeMeasure({ segments = 12 }: { segments?: number }) {
  return (
    <div className="flex items-end h-6 border-b-2 border-ink">
      {Array.from({ length: segments }).map((_, i) => (
        <div key={i} className="flex-1 border-r border-ink relative">
          <div className={`absolute bottom-0 left-0 w-px bg-ink ${i % 5 === 0 ? "h-4" : i % 2 === 0 ? "h-2.5" : "h-1.5"}`} />
          {i % 5 === 0 && (
            <span className="absolute -bottom-4 left-0 text-[8px] font-mono text-steel">{i}</span>
          )}
        </div>
      ))}
    </div>
  );
}

// ─── GAUGE DIAL ───
export function Gauge({ value = 75, label = "LOAD" }: { value?: number; label?: string }) {
  const angle = -90 + (value / 100) * 180;
  return (
    <div className="flex flex-col items-center">
      <svg viewBox="0 0 100 60" className="w-24 h-14">
        <path d="M 10 55 A 40 40 0 0 1 90 55" fill="none" stroke="#5C6166" strokeWidth="2" />
        <path d="M 10 55 A 40 40 0 0 1 90 55" fill="none" stroke="#FFC400" strokeWidth="2"
          strokeDasharray={`${(value / 100) * 126} 126`} />
        <line x1="50" y1="55" x2="50" y2="20" stroke="#121212" strokeWidth="2"
          transform={`rotate(${angle}, 50, 55)`} className="origin-center" />
        <circle cx="50" cy="55" r="3" fill="#121212" />
      </svg>
      <span className="text-[10px] font-mono uppercase tracking-[0.1em] text-steel mt-1">{label}</span>
    </div>
  );
}

// ─── LOAD ARROW ───
export function LoadArrow({ direction = "down", className = "" }: { direction?: "down" | "up" | "left" | "right"; className?: string }) {
  const rotations = { down: 180, up: 0, left: 90, right: -90 };
  return (
    <svg viewBox="0 0 20 40" className={`w-4 h-8 ${className}`} style={{ transform: `rotate(${rotations[direction]}deg)` }}>
      <line x1="10" y1="0" x2="10" y2="30" stroke="currentColor" strokeWidth="2" />
      <polygon points="5,30 10,40 15,30" fill="currentColor" />
    </svg>
  );
}
