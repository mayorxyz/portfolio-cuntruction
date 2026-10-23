import { Plate } from "../themes/site/components";
import { DiagramFBD } from "../themes/site/diagrams";
import { aboutParagraphs, education, personalInfo } from "../content";
import { Link } from "react-router-dom";

export default function About() {
  return (
    <div className="max-w-[1280px] mx-auto px-3 sm:px-4 py-6 sm:py-8">
      <h1 className="font-display font-extrabold uppercase tracking-tight text-3xl sm:text-5xl text-ink mb-6">STRUCTURAL NOTES</h1>

      <div className="grid grid-cols-12 gap-3 sm:gap-4">
        {/* General notes */}
        <Plate label="GENERAL NOTES" serial="NOTE-001" className="col-span-12 lg:col-span-8">
          <div className="space-y-6">
            {aboutParagraphs.map((para, i) => (
              <div key={i} className="flex gap-4">
                <span className="flex-shrink-0 w-7 h-7 border-2 border-ink flex items-center justify-center font-mono text-xs text-ink font-medium">
                  {i + 1}.
                </span>
                <p className="text-sm text-ink leading-relaxed pt-1">{para}</p>
              </div>
            ))}
          </div>
        </Plate>

        {/* Education */}
        <Plate variant="slab" label="EDUCATION" serial="EDU-001" className="col-span-12 lg:col-span-4">
          <div className="space-y-3">
            <div>
              <span className="font-mono text-[10px] uppercase tracking-[0.1em] text-steel block mb-1">DEGREE</span>
              <span className="font-display font-extrabold uppercase text-sm text-ink">{education.degree}</span>
            </div>
            <div>
              <span className="font-mono text-[10px] uppercase tracking-[0.1em] text-steel block mb-1">INSTITUTION</span>
              <span className="text-sm text-ink">{education.institution}</span>
            </div>
          </div>
        </Plate>

        {/* Working method */}
        <Plate label="WORKING METHOD" serial="METH-001" className="col-span-12 lg:col-span-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 items-center">
            <div>
              <h3 className="font-display font-extrabold uppercase text-lg text-ink mb-3">FREE-BODY APPROACH</h3>
              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-safety" />
                  <span className="text-sm text-ink">Inputs: requirements, constraints, data</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-ink" />
                  <span className="text-sm text-ink">Process: analysis, design, implementation</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-signal" />
                  <span className="text-sm text-ink">Output: verified, tested, shipped</span>
                </div>
              </div>
              <p className="text-xs text-steel mt-4 font-mono uppercase tracking-[0.1em]">
                ΣF = 0, ΣM = 0 — EVERY FORCE BALANCED
              </p>
            </div>
            <div className="w-full max-w-[250px] mx-auto">
              <DiagramFBD />
            </div>
          </div>
        </Plate>

        {/* Availability - yellow */}
        <Plate variant="safety" label="AVAILABILITY" serial="AVAIL-001" className="col-span-12 lg:col-span-4">
          <div className="flex flex-col justify-between h-full py-2">
            <div>
              <h3 className="font-display font-extrabold uppercase text-xl text-ink mb-2">OPEN FOR WORK</h3>
              <p className="text-sm text-ink leading-relaxed">
                Available for freelance and contract work. Based in {personalInfo.location}.
              </p>
            </div>
            <Link to="/contact" className="mt-4 inline-block bg-ink text-safety px-4 py-2 font-display font-extrabold uppercase text-sm tracking-tight hover:bg-rebar transition-colors text-center">
              GET IN TOUCH
            </Link>
          </div>
        </Plate>
      </div>
    </div>
  );
}
