import { createFileRoute, Link } from "@tanstack/react-router";
import { Check } from "lucide-react";
import { PageHero } from "@/components/site/PageHero";
import { plans, schedule, scheduleDays } from "@/lib/site-data";

export const Route = createFileRoute("/horarios")({
  head: () => ({
    meta: [
      { title: "Horarios, planes y precios · Agalea" },
      { name: "description", content: "Consulta los horarios de clase y los planes mensuales de gimnasia artística en Agalea." },
      { property: "og:title", content: "Horarios, planes y precios · Agalea" },
      { property: "og:description", content: "Horarios semanales y precios de cada programa." },
    ],
  }),
  component: Horarios,
});

const mxn = new Intl.NumberFormat("es-MX", { style: "currency", currency: "MXN", maximumFractionDigits: 0 });

function Horarios() {
  return (
    <>
      <PageHero eyebrow="Horarios y planes" title="Encuentra tu horario ideal" text="Programas para cada edad y nivel. La primera clase es de prueba." />
      <section className="mx-auto max-w-6xl px-5 py-16">
        <h2 className="text-3xl font-semibold text-primary-deep">Horario semanal</h2>
        <div className="mt-6 overflow-x-auto rounded-2xl border border-border bg-card">
          <table className="w-full min-w-[760px] text-sm">
            <thead className="bg-secondary text-secondary-foreground">
              <tr>
                <th className="p-4 text-left">Programa</th>
                {scheduleDays.map((d) => <th key={d} className="p-4 text-left">{d}</th>)}
              </tr>
            </thead>
            <tbody>
              {schedule.map((r) => (
                <tr key={r.program} className="border-t border-border">
                  <td className="p-4 font-semibold">{r.program}</td>
                  {scheduleDays.map((d) => <td key={d} className="p-4 text-muted-foreground">{r.slots[d] ?? "—"}</td>)}
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <h2 className="mt-20 text-3xl font-semibold text-primary-deep">Planes mensuales</h2>
        <div className="mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {plans.map((p) => (
            <div key={p.name} className={`flex flex-col rounded-3xl p-7 ${p.featured ? "bg-gradient-primary text-primary-foreground shadow-elegant" : "border border-border bg-card"}`}>
              {p.featured && <span className="mb-3 w-fit rounded-full bg-accent px-3 py-1 text-xs font-bold text-accent-foreground">Más popular</span>}
              <h3 className="text-2xl font-semibold">{p.name}</h3>
              <p className="text-sm opacity-75">{p.ages}</p>
              <p className="mt-5 font-display text-4xl">{mxn.format(p.price)}<span className="text-base font-sans opacity-70"> /mes</span></p>
              <p className="mt-1 text-sm opacity-75">{p.freq}</p>
              <ul className="mt-5 flex-1 space-y-2 text-sm">
                {p.features.map((f) => <li key={f} className="flex gap-2"><Check className="h-4 w-4 shrink-0" />{f}</li>)}
              </ul>
              <Link to="/clase-muestra" className={`mt-6 rounded-full px-5 py-3 text-center font-semibold ${p.featured ? "bg-accent text-accent-foreground" : "bg-primary text-primary-foreground"}`}>Probar una clase</Link>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
