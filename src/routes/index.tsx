import { createFileRoute, Link } from "@tanstack/react-router";
import { GalleryPreview } from "@/components/gallery/gallery-preview";
import { images, instructors, plans, whatsappLink } from "@/lib/site-data";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Agalea · Academia de gimnasia artística" },
      {
        name: "description",
        content:
          "Clases de gimnasia artística para niñas de 3 a 17 años y parkour para niños de 6 a 12 años. Agenda tu clase muestra en Agalea.",
      },
      { property: "og:title", content: "Agalea · Academia de gimnasia artística" },
      {
        property: "og:description",
        content: "Gimnasia artística entre semana o sabatina y parkour infantil en Agalea.",
      },
    ],
  }),
  component: Index,
});

const minPlanPrice = Math.min(...plans.map((p) => p.price));

function Index() {
  return (
    <>
      <section className="relative isolate overflow-hidden">
        <img
          src={images.hero}
          alt="Gimnasta de Agalea en la viga"
          width={1600}
          height={1008}
          className="absolute inset-0 -z-10 h-full w-full object-cover"
        />
        <div className="absolute inset-0 -z-10 bg-hero-overlay" />
        <div className="mx-auto max-w-6xl px-5 py-32 text-primary-foreground md:py-44">
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-accent">
            Academia de gimnasia artística
          </p>
          <h1 className="mt-4 max-w-2xl text-5xl leading-[1.05] font-semibold md:text-7xl">
            Vuela alto, aterriza firme.
          </h1>
          <p className="mt-6 max-w-xl text-lg opacity-90">
            En Agalea formamos gimnastas con técnica, confianza y alegría, desde su primera
            voltereta hasta el podio.
          </p>
          <div className="mt-10 flex flex-wrap gap-3">
            <Link
              to="/clase-muestra"
              className="rounded-full bg-accent px-7 py-3.5 font-semibold text-accent-foreground transition hover:brightness-105"
            >
              Agenda tu clase muestra
            </Link>
            <a
              href={whatsappLink("Hola Agalea, quiero agendar una clase muestra.")}
              target="_blank"
              rel="noreferrer"
              className="rounded-full bg-whatsapp px-7 py-3.5 font-semibold text-whatsapp-foreground"
            >
              Escríbenos por WhatsApp
            </a>
          </div>
        </div>
      </section>

      <section className="mx-auto grid max-w-6xl gap-6 px-5 py-20 md:grid-cols-3">
        {[
          ["+12", "años formando gimnastas"],
          ["250", "alumnos activos"],
          ["40+", "medallas en 2026"],
        ].map(([n, l]) => (
          <div key={l} className="rounded-2xl bg-card p-8 shadow-elegant">
            <p className="font-display text-5xl text-primary">{n}</p>
            <p className="mt-2 text-muted-foreground">{l}</p>
          </div>
        ))}
      </section>

      <section className="mx-auto grid max-w-6xl items-center gap-12 px-5 md:grid-cols-2">
        <img
          src={images.equipment}
          alt="Instalaciones de Agalea"
          loading="lazy"
          width={1200}
          height={800}
          className="rounded-3xl shadow-elegant"
        />
        <div>
          <h2 className="text-4xl font-semibold text-primary-deep">
            Un gimnasio pensado para crecer
          </h2>
          <p className="mt-4 text-muted-foreground">
            Contamos con aparatos de medidas oficiales, fosa de espuma y un equipo de entrenadores
            certificados con {instructors.length} especialistas a cargo.
          </p>
          <Link
            to="/academia"
            className="mt-6 inline-block font-semibold text-primary hover:underline"
          >
            Conoce la academia →
          </Link>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-5 pt-24">
        <div className="flex items-end justify-between gap-4">
          <h2 className="text-4xl font-semibold text-primary-deep">Planes desde ${minPlanPrice}</h2>
          <Link to="/horarios" className="font-semibold text-primary hover:underline">
            Ver horarios y precios →
          </Link>
        </div>
        <div className="mt-8 grid gap-4 md:grid-cols-3">
          {plans.map((p) => (
            <div key={p.name} className="rounded-2xl border border-border bg-card p-6">
              <p className="font-display text-xl">{p.name}</p>
              <p className="text-sm text-muted-foreground">{p.ages}</p>
              <p className="mt-3 text-sm font-semibold text-primary">
                ${p.price} /mes · ${p.enrollment} inscripción
              </p>
            </div>
          ))}
        </div>
      </section>

      <GalleryPreview />
    </>
  );
}
