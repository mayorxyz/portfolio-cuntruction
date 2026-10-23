import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { HazardTape } from "./components";

const navLinks = [
  { to: "/work", label: "WORK" },
  { to: "/about", label: "ABOUT" },
  { to: "/stack", label: "STACK" },
  { to: "/process", label: "PROCESS" },
  { to: "/services", label: "SERVICES" },
  { to: "/lab", label: "LAB" },
  { to: "/contact", label: "CONTACT" },
];

function LagosClock() {
  const [time, setTime] = useState("");
  useEffect(() => {
    const update = () => {
      const now = new Date();
      const lagos = new Intl.DateTimeFormat("en-GB", {
        timeZone: "Africa/Lagos",
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
        hour12: false,
      }).format(now);
      setTime(lagos);
    };
    update();
    const interval = setInterval(update, 1000);
    return () => clearInterval(interval);
  }, []);
  return (
    <span className="font-mono text-[11px] uppercase tracking-[0.1em] text-steel">
      LOS {time}
    </span>
  );
}

export function Navigation() {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  return (
    <>
      <nav className="sticky top-0 z-50 bg-concrete border-b-2 border-ink">
        <div className="max-w-[1280px] mx-auto px-4 flex items-center justify-between h-14">
          {/* Logo */}
          <Link to="/" className="font-display font-extrabold text-xl uppercase tracking-tight text-ink">
            MAYOR <span className="text-steel font-normal text-sm">/ PORTFOLIO</span>
          </Link>

          {/* Desktop links */}
          <div className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => {
              const isActive = location.pathname.startsWith(link.to);
              return (
                <Link
                  key={link.to}
                  to={link.to}
                  className={`px-3 py-1.5 font-mono text-[11px] uppercase tracking-[0.1em] transition-colors ${
                    isActive ? "bg-safety text-ink" : "text-steel hover:text-ink"
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}
          </div>

          {/* Clock + Mobile toggle */}
          <div className="flex items-center gap-4">
            <div className="hidden sm:block"><LagosClock /></div>
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="lg:hidden w-10 h-10 flex flex-col items-center justify-center gap-1.5 border-2 border-ink"
              aria-label="Toggle menu"
            >
              <span className={`w-5 h-0.5 bg-ink transition-transform ${menuOpen ? "rotate-45 translate-y-1" : ""}`} />
              <span className={`w-5 h-0.5 bg-ink transition-opacity ${menuOpen ? "opacity-0" : ""}`} />
              <span className={`w-5 h-0.5 bg-ink transition-transform ${menuOpen ? "-rotate-45 -translate-y-1" : ""}`} />
            </button>
          </div>
        </div>
        <HazardTape className="h-1.5" />
      </nav>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="fixed inset-0 z-40 bg-rebar flex flex-col items-center justify-center gap-8 lg:hidden">
          <button
            onClick={() => setMenuOpen(false)}
            className="absolute top-4 right-4 w-10 h-10 flex items-center justify-center border-2 border-concrete"
            aria-label="Close menu"
          >
            <span className="text-concrete text-2xl font-bold">×</span>
          </button>
          {navLinks.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              onClick={() => setMenuOpen(false)}
              className="font-display font-extrabold text-4xl uppercase tracking-tight text-concrete hover:text-safety transition-colors"
            >
              {link.label}
            </Link>
          ))}
          <div className="mt-8">
            <LagosClock />
          </div>
        </div>
      )}
    </>
  );
}

export function Footer() {
  return (
    <footer className="border-t-2 border-ink bg-slab mt-16">
      <div className="max-w-[1280px] mx-auto px-4 py-8 flex flex-col sm:flex-row items-center justify-between gap-4">
        <span className="font-mono text-[11px] uppercase tracking-[0.1em] text-steel">
          © 2026 MAYOR / ALL RIGHTS RESERVED
        </span>
        <span className="font-mono text-[11px] uppercase tracking-[0.1em] text-steel">
          PORT HARCOURT, NIGERIA
        </span>
      </div>
    </footer>
  );
}

export function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="relative min-h-screen flex flex-col">
      <Navigation />
      <main className="flex-1 relative z-10">
        {children}
      </main>
      <Footer />
    </div>
  );
}
