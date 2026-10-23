import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <div className="max-w-[1280px] mx-auto px-3 sm:px-4 py-16 sm:py-24">
      <div className="border-2 border-ink relative overflow-hidden">
        {/* Hazard tape top */}
        <div className="hazard-tape h-6" />

        <div className="p-8 sm:p-16 text-center bg-concrete">
          <span className="font-mono text-[11px] uppercase tracking-[0.1em] text-steel block mb-4">ERROR / 404</span>
          <h1 className="font-display font-extrabold uppercase tracking-tight text-4xl sm:text-6xl text-ink mb-4">
            NO SUCH SECTION ON SITE
          </h1>
          <p className="text-sm text-ink mb-8 max-w-md mx-auto">
            The requested drawing was not found in the document register. The section may have been revised, relocated, or never existed.
          </p>
          <Link
            to="/"
            className="inline-block bg-ink text-safety px-6 py-3 font-display font-extrabold uppercase text-base tracking-tight hover:bg-safety hover:text-ink transition-colors border-2 border-ink"
          >
            RETURN TO SITE OFFICE
          </Link>
        </div>

        {/* Hazard tape bottom */}
        <div className="hazard-tape h-6" />
      </div>
    </div>
  );
}
