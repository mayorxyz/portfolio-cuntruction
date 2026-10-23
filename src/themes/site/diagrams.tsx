// ─── DIAGRAM: TRUSS ───
export function DiagramTruss({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 300 150" className={`w-full h-full ${className}`} fill="none" stroke="#121212" strokeWidth="1.5">
      {/* Bottom chord */}
      <line x1="30" y1="120" x2="270" y2="120" />
      {/* Top chord */}
      <line x1="90" y1="40" x2="210" y2="40" />
      {/* Left slope */}
      <line x1="30" y1="120" x2="90" y2="40" />
      {/* Right slope */}
      <line x1="270" y1="120" x2="210" y2="40" />
      {/* Verticals */}
      <line x1="90" y1="40" x2="90" y2="120" />
      <line x1="150" y1="40" x2="150" y2="120" />
      <line x1="210" y1="40" x2="210" y2="120" />
      {/* Diagonals */}
      <line x1="90" y1="120" x2="150" y2="40" />
      <line x1="150" y1="120" x2="210" y2="40" />
      {/* Nodes */}
      {[[30,120],[90,40],[90,120],[150,40],[150,120],[210,40],[210,120],[270,120]].map(([x,y], i) => (
        <circle key={i} cx={x} cy={y} r="3" fill="#121212" />
      ))}
      {/* Load arrows */}
      <line x1="150" y1="10" x2="150" y2="35" stroke="#FF5A1F" strokeWidth="2" />
      <polygon points="146,35 150,42 154,35" fill="#FF5A1F" />
      {/* Labels */}
      <text x="25" y="138" fontSize="8" fontFamily="monospace" fill="#5C6166">A</text>
      <text x="268" y="138" fontSize="8" fontFamily="monospace" fill="#5C6166">B</text>
      <text x="145" y="8" fontSize="7" fontFamily="monospace" fill="#FF5A1F">P</text>
      {/* Support triangles */}
      <polygon points="25,120 35,120 30,128" fill="none" stroke="#121212" strokeWidth="1" />
      <polygon points="265,120 275,120 270,128" fill="none" stroke="#121212" strokeWidth="1" />
    </svg>
  );
}

// ─── DIAGRAM: I-BEAM ───
export function DiagramIBeam({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 200 200" className={`w-full h-full ${className}`} fill="none" stroke="#121212" strokeWidth="1.5">
      {/* I-beam cross section */}
      <rect x="40" y="30" width="120" height="15" fill="url(#hatch-steel)" stroke="#121212" />
      <rect x="85" y="45" width="30" height="110" fill="url(#hatch-steel)" stroke="#121212" />
      <rect x="40" y="155" width="120" height="15" fill="url(#hatch-steel)" stroke="#121212" />
      {/* Dimension lines */}
      <line x1="30" y1="30" x2="30" y2="170" stroke="#5C6166" strokeWidth="0.5" strokeDasharray="3 2" />
      <text x="10" y="100" fontSize="7" fontFamily="monospace" fill="#5C6166" transform="rotate(-90, 15, 100)">h=200</text>
      <line x1="40" y1="20" x2="160" y2="20" stroke="#5C6166" strokeWidth="0.5" strokeDasharray="3 2" />
      <text x="85" y="17" fontSize="7" fontFamily="monospace" fill="#5C6166">b=150</text>
      {/* Neutral axis */}
      <line x1="20" y1="100" x2="180" y2="100" stroke="#FF5A1F" strokeWidth="0.5" strokeDasharray="8 3" />
      <text x="182" y="103" fontSize="6" fontFamily="monospace" fill="#FF5A1F">N.A.</text>
    </svg>
  );
}

// ─── DIAGRAM: FREE BODY ───
export function DiagramFBD({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 250 180" className={`w-full h-full ${className}`} fill="none" stroke="#121212" strokeWidth="1.5">
      {/* Body */}
      <rect x="80" y="60" width="90" height="60" fill="#E8E5DE" stroke="#121212" strokeWidth="2" />
      {/* Weight */}
      <line x1="125" y1="120" x2="125" y2="165" stroke="#FF5A1F" strokeWidth="2" />
      <polygon points="121,165 125,173 129,165" fill="#FF5A1F" />
      <text x="130" y="150" fontSize="8" fontFamily="monospace" fill="#FF5A1F">W=mg</text>
      {/* Normal force */}
      <line x1="125" y1="60" x2="125" y2="20" stroke="#121212" strokeWidth="2" />
      <polygon points="121,20 125,12 129,20" fill="#121212" />
      <text x="130" y="30" fontSize="8" fontFamily="monospace" fill="#121212">N</text>
      {/* Applied force */}
      <line x1="170" y1="90" x2="220" y2="90" stroke="#121212" strokeWidth="2" />
      <polygon points="220,86 228,90 220,94" fill="#121212" />
      <text x="200" y="82" fontSize="8" fontFamily="monospace" fill="#121212">F</text>
      {/* Friction */}
      <line x1="80" y1="90" x2="40" y2="90" stroke="#5C6166" strokeWidth="2" />
      <polygon points="40,86 32,90 40,94" fill="#5C6166" />
      <text x="42" y="82" fontSize="8" fontFamily="monospace" fill="#5C6166">f</text>
      {/* Ground */}
      <line x1="60" y1="175" x2="200" y2="175" stroke="#121212" strokeWidth="1" />
      {Array.from({length: 8}).map((_, i) => (
        <line key={i} x1={70 + i * 18} y1="175" x2={62 + i * 18} y2="183" stroke="#5C6166" strokeWidth="0.5" />
      ))}
    </svg>
  );
}

// ─── DIAGRAM: STRESS-STRAIN ───
export function DiagramStressStrain({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 250 180" className={`w-full h-full ${className}`} fill="none" stroke="#121212" strokeWidth="1.5">
      {/* Axes */}
      <line x1="40" y1="150" x2="40" y2="20" stroke="#121212" strokeWidth="1.5" />
      <line x1="40" y1="150" x2="230" y2="150" stroke="#121212" strokeWidth="1.5" />
      <text x="15" y="85" fontSize="7" fontFamily="monospace" fill="#5C6166" transform="rotate(-90, 20, 85)">STRESS (σ)</text>
      <text x="130" y="168" fontSize="7" fontFamily="monospace" fill="#5C6166">STRAIN (ε)</text>
      {/* Curve */}
      <path d="M40 150 Q60 148 80 100 Q90 70 100 50 L110 45 Q130 42 160 50 Q180 60 200 90 L210 120" stroke="#121212" strokeWidth="2" fill="none" />
      {/* Yield point */}
      <circle cx="110" cy="45" r="3" fill="#FF5A1F" />
      <text x="115" y="40" fontSize="7" fontFamily="monospace" fill="#FF5A1F">YIELD</text>
      {/* Elastic region label */}
      <text x="55" y="110" fontSize="6" fontFamily="monospace" fill="#5C6166">ELASTIC</text>
      <text x="140" y="70" fontSize="6" fontFamily="monospace" fill="#5C6166">PLASTIC</text>
    </svg>
  );
}

// ─── DIAGRAM: MOHR'S CIRCLE ───
export function DiagramMohr({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 220 180" className={`w-full h-full ${className}`} fill="none" stroke="#121212" strokeWidth="1.5">
      {/* Axes */}
      <line x1="30" y1="90" x2="200" y2="90" stroke="#121212" strokeWidth="1" />
      <line x1="110" y1="160" x2="110" y2="20" stroke="#121212" strokeWidth="1" />
      <text x="190" y="85" fontSize="7" fontFamily="monospace" fill="#5C6166">σ</text>
      <text x="115" y="25" fontSize="7" fontFamily="monospace" fill="#5C6166">τ</text>
      {/* Circle */}
      <circle cx="130" cy="90" r="45" stroke="#121212" strokeWidth="1.5" fill="none" />
      {/* Center */}
      <circle cx="130" cy="90" r="2" fill="#121212" />
      {/* Points */}
      <circle cx="85" cy="90" r="2.5" fill="#FF5A1F" />
      <circle cx="175" cy="90" r="2.5" fill="#FF5A1F" />
      <text x="78" y="105" fontSize="6" fontFamily="monospace" fill="#FF5A1F">σ₃</text>
      <text x="170" y="105" fontSize="6" fontFamily="monospace" fill="#FF5A1F">σ₁</text>
      {/* Radius line */}
      <line x1="130" y1="90" x2="175" y2="90" stroke="#5C6166" strokeWidth="0.5" strokeDasharray="3 2" />
      <text x="145" y="85" fontSize="6" fontFamily="monospace" fill="#5C6166">R</text>
    </svg>
  );
}

// ─── DIAGRAM: RETAINING WALL ───
export function DiagramWall({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 250 180" className={`w-full h-full ${className}`} fill="none" stroke="#121212" strokeWidth="1.5">
      {/* Wall */}
      <rect x="100" y="30" width="25" height="120" fill="#D9D5CC" stroke="#121212" strokeWidth="2" />
      {/* Earth fill */}
      <rect x="125" y="30" width="100" height="120" fill="url(#hatch-earth)" stroke="none" />
      {/* Ground line */}
      <line x1="20" y1="150" x2="240" y2="150" stroke="#121212" strokeWidth="1.5" />
      {/* Base */}
      <rect x="70" y="150" width="80" height="12" fill="#D9D5CC" stroke="#121212" strokeWidth="1.5" />
      {/* Pressure arrows */}
      {[50, 75, 100, 125].map((y, i) => (
        <g key={i}>
          <line x1={145 + i * 5} y1={y} x2="127" y2={y} stroke="#FF5A1F" strokeWidth="1" />
          <polygon points={`127,${y-2} 122,${y} 127,${y+2}`} fill="#FF5A1F" />
        </g>
      ))}
      <text x="170" y="80" fontSize="7" fontFamily="monospace" fill="#FF5A1F">Pa</text>
      {/* Labels */}
      <text x="105" y="25" fontSize="7" fontFamily="monospace" fill="#5C6166">WALL</text>
      <text x="180" y="25" fontSize="7" fontFamily="monospace" fill="#5C6166">FILL</text>
    </svg>
  );
}

// ─── DIAGRAM: REBAR GRID ───
export function DiagramRebar({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 250 160" className={`w-full h-full ${className}`} fill="none" stroke="#121212" strokeWidth="1.5">
      {/* Concrete outline */}
      <rect x="20" y="20" width="210" height="120" fill="#E8E5DE" stroke="#121212" strokeWidth="2" />
      {/* Horizontal bars */}
      {[45, 70, 95, 120].map((y, i) => (
        <g key={`h${i}`}>
          <line x1="30" y1={y} x2="220" y2={y} stroke="#121212" strokeWidth="2.5" />
          <circle cx="30" cy={y} r="3" fill="#121212" />
          <circle cx="220" cy={y} r="3" fill="#121212" />
        </g>
      ))}
      {/* Vertical bars */}
      {[55, 95, 135, 175].map((x, i) => (
        <g key={`v${i}`}>
          <line x1={x} y1="30" x2={x} y2="130" stroke="#5C6166" strokeWidth="1.5" strokeDasharray="6 3" />
        </g>
      ))}
      {/* Bar marks */}
      <text x="225" y="48" fontSize="7" fontFamily="monospace" fill="#FF5A1F">T12</text>
      <text x="225" y="73" fontSize="7" fontFamily="monospace" fill="#5C6166">T12</text>
      <text x="130" y="15" fontSize="7" fontFamily="monospace" fill="#5C6166">T12 @ 200</text>
      {/* Dimension */}
      <line x1="30" y1="145" x2="220" y2="145" stroke="#5C6166" strokeWidth="0.5" />
      <text x="110" y="155" fontSize="7" fontFamily="monospace" fill="#5C6166">2000</text>
    </svg>
  );
}

// ─── DIAGRAM: GEAR ───
export function DiagramGear({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 250 160" className={`w-full h-full ${className}`} fill="none" stroke="#121212" strokeWidth="1.5">
      {/* Large gear */}
      <circle cx="90" cy="80" r="40" stroke="#121212" strokeWidth="1.5" />
      <circle cx="90" cy="80" r="30" stroke="#5C6166" strokeWidth="0.5" strokeDasharray="3 2" />
      <circle cx="90" cy="80" r="5" fill="#121212" />
      {/* Teeth on large gear */}
      {Array.from({length: 12}).map((_, i) => {
        const angle = (i * 30 * Math.PI) / 180;
        const x1 = 90 + 38 * Math.cos(angle);
        const y1 = 80 + 38 * Math.sin(angle);
        const x2 = 90 + 45 * Math.cos(angle);
        const y2 = 80 + 45 * Math.sin(angle);
        return <line key={i} x1={x1} y1={y1} x2={x2} y2={y2} stroke="#121212" strokeWidth="3" />;
      })}
      {/* Small gear */}
      <circle cx="170" cy="80" r="25" stroke="#121212" strokeWidth="1.5" />
      <circle cx="170" cy="80" r="4" fill="#121212" />
      {Array.from({length: 8}).map((_, i) => {
        const angle = (i * 45 * Math.PI) / 180;
        const x1 = 170 + 23 * Math.cos(angle);
        const y1 = 80 + 23 * Math.sin(angle);
        const x2 = 170 + 29 * Math.cos(angle);
        const y2 = 80 + 29 * Math.sin(angle);
        return <line key={i} x1={x1} y1={y1} x2={x2} y2={y2} stroke="#121212" strokeWidth="2.5" />;
      })}
      {/* Labels */}
      <text x="80" y="135" fontSize="7" fontFamily="monospace" fill="#5C6166">Z₁=24</text>
      <text x="160" y="115" fontSize="7" fontFamily="monospace" fill="#5C6166">Z₂=16</text>
    </svg>
  );
}

// ─── DIAGRAM: GAUGE ───
export function DiagramGauge({ value = 72, className = "" }: { value?: number; className?: string }) {
  const angle = -135 + (value / 100) * 270;
  return (
    <svg viewBox="0 0 200 140" className={`w-full h-full ${className}`} fill="none">
      {/* Arc background */}
      <path d="M 30 120 A 70 70 0 1 1 170 120" stroke="#5C6166" strokeWidth="2" fill="none" />
      {/* Tick marks */}
      {Array.from({length: 11}).map((_, i) => {
        const a = (-135 + i * 27) * Math.PI / 180;
        const x1 = 100 + 60 * Math.cos(a);
        const y1 = 110 + 60 * Math.sin(a);
        const x2 = 100 + 68 * Math.cos(a);
        const y2 = 110 + 68 * Math.sin(a);
        return <line key={i} x1={x1} y1={y1} x2={x2} y2={y2} stroke="#121212" strokeWidth={i % 5 === 0 ? "2" : "1"} />;
      })}
      {/* Needle */}
      <line x1="100" y1="110" x2={100 + 55 * Math.cos(angle * Math.PI / 180)} y2={110 + 55 * Math.sin(angle * Math.PI / 180)} stroke="#FF5A1F" strokeWidth="2" />
      <circle cx="100" cy="110" r="5" fill="#121212" />
      {/* Value */}
      <text x="85" y="95" fontSize="14" fontFamily="monospace" fontWeight="bold" fill="#121212">{value}%</text>
    </svg>
  );
}

// ─── DIAGRAM: CRANE ───
export function DiagramCrane({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 250 180" className={`w-full h-full ${className}`} fill="none" stroke="#121212" strokeWidth="1.5">
      {/* Base */}
      <rect x="40" y="155" width="40" height="15" fill="#D9D5CC" stroke="#121212" />
      {/* Mast */}
      <line x1="60" y1="155" x2="60" y2="30" strokeWidth="3" />
      {/* Jib */}
      <line x1="60" y1="30" x2="220" y2="45" strokeWidth="2" />
      {/* Counter jib */}
      <line x1="60" y1="30" x2="20" y2="40" strokeWidth="2" />
      {/* Counterweight */}
      <rect x="10" y="40" width="20" height="15" fill="#5C6166" stroke="#121212" />
      {/* Cable */}
      <line x1="180" y1="42" x2="180" y2="100" stroke="#5C6166" strokeWidth="1" strokeDasharray="4 2" />
      {/* Hook */}
      <path d="M175 100 Q180 110 185 100" stroke="#121212" strokeWidth="2" fill="none" />
      {/* Load */}
      <rect x="170" y="110" width="20" height="20" fill="#FFC400" stroke="#121212" />
      {/* Stay cables */}
      <line x1="60" y1="25" x2="140" y2="38" stroke="#5C6166" strokeWidth="0.5" />
      <line x1="60" y1="25" x2="200" y2="43" stroke="#5C6166" strokeWidth="0.5" />
      {/* Ground */}
      <line x1="10" y1="170" x2="240" y2="170" stroke="#121212" strokeWidth="1" />
    </svg>
  );
}

// ─── DIAGRAM: BEAM DEFLECTION ───
export function DiagramBeamDeflection({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 280 120" className={`w-full h-full ${className}`} fill="none" stroke="#121212" strokeWidth="1.5">
      {/* Beam (straight) */}
      <line x1="30" y1="50" x2="250" y2="50" stroke="#121212" strokeWidth="2" />
      {/* Deflection curve */}
      <path d="M30 50 Q140 85 250 50" stroke="#FF5A1F" strokeWidth="1.5" strokeDasharray="5 3" />
      {/* Supports */}
      <polygon points="25,50 35,50 30,58" fill="#121212" />
      <polygon points="245,50 255,50 250,58" fill="#121212" />
      {/* Load */}
      <line x1="140" y1="15" x2="140" y2="45" stroke="#FF5A1F" strokeWidth="2" />
      <polygon points="136,45 140,52 144,45" fill="#FF5A1F" />
      <text x="145" y="25" fontSize="8" fontFamily="monospace" fill="#FF5A1F">w</text>
      {/* Delta label */}
      <line x1="140" y1="50" x2="140" y2="72" stroke="#5C6166" strokeWidth="0.5" strokeDasharray="2 2" />
      <text x="145" y="68" fontSize="7" fontFamily="monospace" fill="#5C6166">δ</text>
      {/* Dimension */}
      <line x1="30" y1="95" x2="250" y2="95" stroke="#5C6166" strokeWidth="0.5" />
      <text x="125" y="108" fontSize="7" fontFamily="monospace" fill="#5C6166">L</text>
    </svg>
  );
}
