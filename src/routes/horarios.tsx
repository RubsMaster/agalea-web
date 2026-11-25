import { createFileRoute, Link } from "@tanstack/react-router";
import { Check } from "lucide-react";
import { PageHero } from "@/components/site/PageHero";
import { gymnasticsLevels, plans, schedule, scheduleDays } from "@/lib/site-data";

export const Route = createFileRoute("/horarios")({
  head: () => ({
    meta: [
      { title: "Horarios, planes y precios · Agalea" },
      {
        name: "description",
        content:
          "Consulta los horarios de gimnasia artística y parkour, niveles y planes mensuales en Agalea.",
      },
      { property: "og:title", content: "Horarios, planes y precios · Agalea" },
      { property: "og:description", content: "Horarios semanales y precios de cada programa." },
    ],
  }),
  component: Horarios,
});

const mxn = new Intl.NumberFormat("es-MX", {
  style: "currency",
  currency: "MXN",
  maximumFractionDigits: 0,
});

function Horarios() {
  return (
    <>
      <PageHero
        eyebrow="Horarios y planes"
        title="Encuentra tu horario ideal"
        text="Gimnasia artística para niñas de 3 a 17 años y parkour para niños de 6 a 12 años. La primera clase es de prueba."
      />
      <section className="mx-auto max-w-6xl px-5 py-16">
        <div className="flex flex-col gap-2 md:flex-row md:items-end md:justify-between">
          <div>
            <h2 className="text-3xl font-semibold text-primary-deep">Horario semanal</h2>
            <p className="mt-1 text-sm text-muted-foreground">
              Los 3 turnos de gimnasia entre semana corresponden a nuestros grupos por nivel.
            </p>
          </div>
          <div className="flex flex-wrap gap-2">
            {gymnasticsLevels.map((level) => (
              <span
                key={level}
                className="rounded-full bg-secondary px-3 py-1 text-xs font-semibold text-secondary-foreground"
              >
                {level}
              </span>
            ))}
          </div>
        </div>

        <div className="mt-6 overflow-x-auto rounded-2xl border border-border bg-card">
          <table className="w-full min-w-[980px] text-sm">
            <thead className="bg-secondary text-secondary-foreground">
              <tr>
                <th className="sticky left-0 z-10 min-w-[165px] bg-secondary p-4 text-left align-middle shadow-[1px_0_0_0_var(--color-border)]">
                  Programa
                </th>
                {scheduleDays.map((d) => (
                  <th key={d} className="px-3 py-4 text-left align-middle">
                    {d}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {schedule.map((r) => (
                <tr key={r.program} className="border-t border-border align-middle">
                  <td className="sticky left-0 z-10 bg-card p-4 align-middle shadow-[1px_0_0_0_var(--color-border)]">
                    <p className="font-semibold">{r.program}</p>
                    {r.note && <p className="mt-0.5 text-xs text-muted-foreground">{r.note}</p>}
                  </td>
                  {scheduleDays.map((d) => {
                    const slot = r.slots[d];
                    return (
                      <td
                        key={d}
                        className="px-3 py-4 align-middle text-xs leading-relaxed text-muted-foreground tabular-nums"
                      >
                        {slot
                          ? slot.split("\n").map((line) => (
                              <span key={line} className="block whitespace-nowrap">
                                {line}
                              </span>
                            ))
                          : "—"}
                      </td>
                    );
                  })}
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <h2 className="mt-20 text-3xl font-semibold text-primary-deep">Planes mensuales</h2>
        <div className="mt-8 grid gap-6 md:grid-cols-3">
          {plans.map((p) => (
            <div
              key={p.name}
              className={`flex flex-col rounded-3xl p-7 ${
                p.featured
                  ? "bg-gradient-primary text-primary-foreground shadow-elegant"
                  : "border border-border bg-card"
              }`}
            >
              {p.featured && (
                <span className="mb-3 w-fit rounded-full bg-accent px-3 py-1 text-xs font-bold text-accent-foreground">
                  Más popular
                </span>
              )}
              <h3 className="text-2xl font-semibold">{p.name}</h3>
              <p className="text-sm opacity-75">{p.ages}</p>
              <p className="mt-5 font-display text-4xl">
                {mxn.format(p.price)}
                <span className="font-sans text-base opacity-70"> /mes</span>
              </p>
              <p className="mt-1 text-sm font-medium opacity-90">
                Inscripción: {mxn.format(p.enrollment)}
              </p>
              <p className="mt-1 text-sm opacity-75">{p.freq}</p>
              <ul className="mt-5 flex-1 space-y-2 text-sm">
                {p.features.map((f) => (
                  <li key={f} className="flex gap-2">
                    <Check className="h-4 w-4 shrink-0" />
                    {f}
                  </li>
                ))}
              </ul>
              <Link
                to="/clase-muestra"
                className={`mt-6 rounded-full px-5 py-3 text-center font-semibold ${
                  p.featured
                    ? "bg-accent text-accent-foreground"
                    : "bg-primary text-primary-foreground"
                }`}
              >
                Probar una clase
              </Link>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
