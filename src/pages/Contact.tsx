import { useState } from "react";
import { Plate } from "../themes/site/components";
import { personalInfo } from "../content";

export default function Contact() {
  const [copied, setCopied] = useState(false);
  const [formData, setFormData] = useState({ name: "", email: "", projectType: "", brief: "" });
  const [submitted, setSubmitted] = useState(false);

  const copyEmail = () => {
    navigator.clipboard.writeText(personalInfo.email).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const subject = encodeURIComponent(`Project Inquiry: ${formData.projectType}`);
    const body = encodeURIComponent(`Name: ${formData.name}\nEmail: ${formData.email}\nProject Type: ${formData.projectType}\n\nBrief:\n${formData.brief}`);
    window.location.href = `mailto:${personalInfo.email}?subject=${subject}&body=${body}`;
    setSubmitted(true);
  };

  return (
    <div className="max-w-[1280px] mx-auto px-3 sm:px-4 py-6 sm:py-8">
      {/* Hero */}
      <Plate label="SITE NOTICE BOARD" serial="CONTACT-001" className="mb-6">
        <h1 className="font-display font-extrabold uppercase tracking-tight text-3xl sm:text-5xl lg:text-6xl text-ink">
          LET'S WORK TOGETHER.
        </h1>
      </Plate>

      <div className="grid grid-cols-12 gap-3 sm:gap-4">
        {/* Contact details */}
        <Plate variant="inverted" label="CONTACT DATA" serial="DATA-001" className="col-span-12 lg:col-span-5">
          <div className="space-y-4">
            <div className="border-b border-concrete/20 pb-3">
              <span className="font-mono text-[10px] uppercase tracking-[0.1em] text-concrete/50 block mb-1">EMAIL</span>
              <button onClick={copyEmail} className="flex items-center gap-2 group">
                <span className="font-mono text-sm text-safety group-hover:underline">{personalInfo.email}</span>
                <span className="font-mono text-[9px] uppercase tracking-[0.1em] text-concrete/50">
                  {copied ? "COPIED" : "CLICK TO COPY"}
                </span>
              </button>
            </div>
            <div className="border-b border-concrete/20 pb-3">
              <span className="font-mono text-[10px] uppercase tracking-[0.1em] text-concrete/50 block mb-1">LINKEDIN</span>
              <a href={personalInfo.linkedin} target="_blank" rel="noopener noreferrer" className="font-mono text-sm text-concrete hover:text-safety transition-colors">
                {personalInfo.linkedin}
              </a>
            </div>
            <div className="border-b border-concrete/20 pb-3">
              <span className="font-mono text-[10px] uppercase tracking-[0.1em] text-concrete/50 block mb-1">LOCATION</span>
              <span className="font-mono text-sm text-concrete">{personalInfo.location}</span>
            </div>
            <div>
              <span className="font-mono text-[10px] uppercase tracking-[0.1em] text-concrete/50 block mb-1">STATUS</span>
              <span className="font-mono text-sm text-safety">{personalInfo.status}</span>
            </div>
          </div>
        </Plate>

        {/* Form */}
        <Plate label="SITE INSTRUCTION FORM" serial="FORM-001" className="col-span-12 lg:col-span-7">
          {submitted ? (
            <div className="flex flex-col items-center justify-center h-full py-8 text-center">
              <div className="w-12 h-12 border-4 border-safety flex items-center justify-center mb-4">
                <svg viewBox="0 0 24 24" className="w-6 h-6 text-safety" fill="none" stroke="currentColor" strokeWidth="3">
                  <polyline points="20 6 9 17 4 12" />
                </svg>
              </div>
              <span className="font-display font-extrabold uppercase text-lg text-ink">INSTRUCTION ISSUED</span>
              <span className="font-mono text-[11px] text-steel mt-2">YOUR EMAIL CLIENT SHOULD OPEN SHORTLY</span>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="font-mono text-[10px] uppercase tracking-[0.1em] text-steel block mb-1">NAME *</label>
                <input
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full border-2 border-ink bg-concrete px-3 py-2 text-sm text-ink font-mono focus:outline-none focus:border-safety"
                />
              </div>
              <div>
                <label className="font-mono text-[10px] uppercase tracking-[0.1em] text-steel block mb-1">EMAIL *</label>
                <input
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full border-2 border-ink bg-concrete px-3 py-2 text-sm text-ink font-mono focus:outline-none focus:border-safety"
                />
              </div>
              <div>
                <label className="font-mono text-[10px] uppercase tracking-[0.1em] text-steel block mb-1">PROJECT TYPE *</label>
                <select
                  required
                  value={formData.projectType}
                  onChange={(e) => setFormData({ ...formData, projectType: e.target.value })}
                  className="w-full border-2 border-ink bg-concrete px-3 py-2 text-sm text-ink font-mono focus:outline-none focus:border-safety"
                >
                  <option value="">SELECT TYPE</option>
                  <option value="Web Application">Web Application</option>
                  <option value="E-Commerce">E-Commerce Storefront</option>
                  <option value="AI Automation">AI Automation Workflow</option>
                  <option value="ML Tool">Machine-Learning Tool</option>
                  <option value="Dashboard">Dashboard</option>
                  <option value="Other">Other</option>
                </select>
              </div>
              <div>
                <label className="font-mono text-[10px] uppercase tracking-[0.1em] text-steel block mb-1">BRIEF *</label>
                <textarea
                  required
                  rows={4}
                  value={formData.brief}
                  onChange={(e) => setFormData({ ...formData, brief: e.target.value })}
                  className="w-full border-2 border-ink bg-concrete px-3 py-2 text-sm text-ink font-mono resize-none focus:outline-none focus:border-safety"
                  placeholder="Describe what you need built..."
                />
              </div>
              <button
                type="submit"
                className="w-full bg-ink text-safety px-6 py-3 font-display font-extrabold uppercase text-base tracking-tight hover:bg-safety hover:text-ink transition-colors border-2 border-ink"
              >
                ISSUE INSTRUCTION
              </button>
            </form>
          )}
        </Plate>
      </div>
    </div>
  );
}
