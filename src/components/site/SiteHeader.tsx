import { Link } from "@tanstack/react-router";
import { useState } from "react";
import { Menu, X } from "lucide-react";

const nav = [
  { to: "/", label: "Inicio" },
  { to: "/academia", label: "Academia" },
  { to: "/galeria", label: "Galería" },
  { to: "/horarios", label: "Horarios y planes" },
] as const;

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  return (
    <header className="sticky top-0 z-40 border-b border-border/60 bg-background/85 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-4">
        <Link to="/" className="font-display text-2xl font-semibold text-primary-deep">
          Agalea<span className="text-primary">.</span>
        </Link>
        <nav className="hidden items-center gap-7 md:flex">
          {nav.map((n) => (
            <Link key={n.to} to={n.to} className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary" activeProps={{ className: "text-primary" }} activeOptions={{ exact: true }}>
              {n.label}
            </Link>
          ))}
          <Link to="/clase-muestra" className="rounded-full bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground shadow-elegant transition hover:bg-primary-deep">
            Clase muestra
          </Link>
        </nav>
        <button className="md:hidden" aria-label="Abrir menú" onClick={() => setOpen(!open)}>
          {open ? <X /> : <Menu />}
        </button>
      </div>
      {open && (
        <nav className="flex flex-col gap-4 border-t border-border px-5 py-5 md:hidden">
          {nav.map((n) => (
            <Link key={n.to} to={n.to} onClick={() => setOpen(false)} className="font-medium">{n.label}</Link>
          ))}
          <Link to="/clase-muestra" onClick={() => setOpen(false)} className="rounded-full bg-primary px-5 py-2.5 text-center font-semibold text-primary-foreground">Agendar clase muestra</Link>
        </nav>
      )}
    </header>
  );
}

export function SiteFooter() {
  return (
    <footer className="mt-24 bg-primary-deep text-primary-foreground">
      <div className="mx-auto grid max-w-6xl gap-8 px-5 py-12 md:grid-cols-3">
        <div>
          <p className="font-display text-2xl">Agalea</p>
          <p className="mt-2 text-sm opacity-80">Academia de gimnasia artística. Disciplina, técnica y alegría en cada vuelta.</p>
        </div>
        <div className="text-sm opacity-80">
          <p className="font-semibold opacity-100">Horario de oficina</p>
          <p>Lunes a viernes 03:00 p.m. – 21:00 p.m.</p>
          <p>Sábado 9:00 a.m. – 12:00 p.m.</p>
        </div>
        <div className="flex flex-col gap-2 text-sm">
          <Link to="/horarios" className="opacity-80 hover:opacity-100">Planes y precios</Link>
          <Link to="/galeria" className="opacity-80 hover:opacity-100">Competencias</Link>
          <Link to="/clase-muestra" className="opacity-80 hover:opacity-100">Agenda tu clase muestra</Link>
        </div>
      </div>
    </footer>
  );
}
