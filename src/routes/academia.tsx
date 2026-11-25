import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/site/PageHero";
import { equipmentList, images, instructors } from "@/lib/site-data";

export const Route = createFileRoute("/academia")({
  head: () => ({
    meta: [
      { title: "La academia, instructores y equipamiento · Agalea" },
      { name: "description", content: "Conoce la historia de Agalea, nuestros entrenadores certificados y el equipamiento oficial de gimnasia." },
      { property: "og:title", content: "La academia · Agalea" },
      { property: "og:description", content: "Historia, instructores y equipamiento de la academia Agalea." },
    ],
  }),
  component: Academia,
});

function Academia() {
  return (
    <>
      <PageHero eyebrow="Nosotros" title="Más que piruetas: formamos carácter" text="Agalea nació para acercar la gimnasia artística a todas las edades con un método seguro, progresivo y lleno de pasión." />
      <section className="mx-auto grid max-w-6xl gap-10 px-5 py-20 md:grid-cols-3">
        {[["Misión", "Desarrollar gimnastas íntegros a través de la técnica, la disciplina y el disfrute del deporte."], ["Método", "Progresiones por niveles, grupos reducidos y evaluaciones constantes de cada alumno."], ["Seguridad", "Instalaciones certificadas, colchonetas de alta densidad y entrenadores capacitados en primeros auxilios."]].map(([t, d]) => (
          <div key={t}>
            <h2 className="text-2xl font-semibold text-primary">{t}</h2>
            <p className="mt-2 text-muted-foreground">{d}</p>
          </div>
        ))}
      </section>

      <section className="mx-auto max-w-6xl px-5">
        <h2 className="text-4xl font-semibold text-primary-deep">Nuestros instructores</h2>
        <div className="mt-10 grid gap-8 md:grid-cols-2">
          {instructors.map((i) => (
            <article key={i.name} className="flex flex-col overflow-hidden rounded-3xl bg-card shadow-elegant sm:flex-row">
              <img src={i.photo} alt={i.name} loading="lazy" width={800} height={1008} className="h-72 w-full object-cover sm:h-auto sm:w-48" />
              <div className="p-6">
                <h3 className="text-2xl font-semibold">{i.name}</h3>
                <p className="text-sm font-semibold text-primary">{i.role}</p>
                <p className="mt-3 text-muted-foreground">{i.bio}</p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {i.specialties.map((s) => <span key={s} className="rounded-full bg-secondary px-3 py-1 text-xs font-semibold text-secondary-foreground">{s}</span>)}
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-5 pt-24">
        <h2 className="text-4xl font-semibold text-primary-deep">Equipamiento</h2>
        <img src={images.equipment} alt="Equipamiento del gimnasio Agalea" loading="lazy" width={1200} height={800} className="mt-8 h-80 w-full rounded-3xl object-cover" />
        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {equipmentList.map((e) => (
            <div key={e.name} className="rounded-2xl border border-border bg-card p-6">
              <h3 className="text-lg font-semibold">{e.name}</h3>
              <p className="mt-1 text-sm text-muted-foreground">{e.desc}</p>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
