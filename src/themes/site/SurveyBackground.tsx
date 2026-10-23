export function SurveyBackground() {
  return (
    <svg className="survey-bg" viewBox="0 0 1280 900" preserveAspectRatio="xMidYMid slice" xmlns="http://www.w3.org/2000/svg">
      {/* Grid lines */}
      {Array.from({ length: 20 }).map((_, i) => (
        <line key={`h${i}`} x1="0" y1={i * 50} x2="1280" y2={i * 50} stroke="#121212" strokeWidth="0.3" />
      ))}
      {Array.from({ length: 26 }).map((_, i) => (
        <line key={`v${i}`} x1={i * 50} y1="0" x2={i * 50} y2="900" stroke="#121212" strokeWidth="0.3" />
      ))}
      {/* Station labels */}
      <text x="50" y="20" fontSize="8" fontFamily="monospace" fill="#121212" opacity="0.5">STA 0+000</text>
      <text x="350" y="20" fontSize="8" fontFamily="monospace" fill="#121212" opacity="0.5">STA 0+050</text>
      <text x="650" y="20" fontSize="8" fontFamily="monospace" fill="#121212" opacity="0.5">STA 0+100</text>
      <text x="950" y="20" fontSize="8" fontFamily="monospace" fill="#121212" opacity="0.5">STA 0+150</text>
      {/* Centre line */}
      <line x1="0" y1="450" x2="1280" y2="450" stroke="#121212" strokeWidth="0.5" strokeDasharray="20 5 5 5" />
      <text x="620" y="445" fontSize="7" fontFamily="monospace" fill="#121212" opacity="0.6">CL</text>
      {/* Contour lines */}
      <path d="M100 200 Q300 180 500 220 Q700 260 900 200 Q1100 150 1280 190" fill="none" stroke="#121212" strokeWidth="0.4" />
      <path d="M100 250 Q300 230 500 270 Q700 310 900 250 Q1100 200 1280 240" fill="none" stroke="#121212" strokeWidth="0.4" />
      <text x="500" y="215" fontSize="6" fontFamily="monospace" fill="#121212" opacity="0.4">+12.500</text>
      {/* Level marks */}
      <text x="1050" y="350" fontSize="8" fontFamily="monospace" fill="#121212" opacity="0.5">▽ +8.250</text>
      <text x="200" y="700" fontSize="8" fontFamily="monospace" fill="#121212" opacity="0.5">BM-01</text>
      {/* North arrow */}
      <g transform="translate(1200, 750)" opacity="0.5">
        <line x1="0" y1="30" x2="0" y2="-10" stroke="#121212" strokeWidth="1" />
        <polygon points="-5,-5 0,-15 5,-5" fill="#121212" />
        <text x="-3" y="-18" fontSize="8" fontFamily="monospace" fill="#121212">N</text>
      </g>
      {/* Benchmark symbol */}
      <g transform="translate(200, 710)" opacity="0.4">
        <path d="M-8 0 L0 -10 L8 0 Z" fill="none" stroke="#121212" strokeWidth="0.8" />
        <line x1="-10" y1="2" x2="10" y2="2" stroke="#121212" strokeWidth="0.8" />
      </g>
      {/* Floating formulas */}
      <text x="80" y="400" fontSize="9" fontFamily="monospace" fill="#121212" opacity="0.35">σ = F / A</text>
      <text x="900" y="150" fontSize="9" fontFamily="monospace" fill="#121212" opacity="0.35">M = wL² / 8</text>
      <text x="400" y="800" fontSize="9" fontFamily="monospace" fill="#121212" opacity="0.35">δ = 5wL⁴ / 384EI</text>
      <text x="1000" y="600" fontSize="9" fontFamily="monospace" fill="#121212" opacity="0.35">ΣF = 0, ΣM = 0</text>
      <text x="150" y="550" fontSize="9" fontFamily="monospace" fill="#121212" opacity="0.3">O(n log n)</text>
      <text x="700" y="700" fontSize="9" fontFamily="monospace" fill="#121212" opacity="0.3">σ(x) = 1/(1+e⁻ˣ)</text>
      <text x="1100" y="450" fontSize="9" fontFamily="monospace" fill="#121212" opacity="0.3">ε = ΔL / L</text>
    </svg>
  );
}
