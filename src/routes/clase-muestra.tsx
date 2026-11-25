import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { z } from "zod";
import { toast } from "sonner";
import { MessageCircle } from "lucide-react";
import { PageHero } from "@/components/site/PageHero";
import { programs, whatsappLink } from "@/lib/site-data";

export const Route = createFileRoute("/clase-muestra")({
  head: () => ({
    meta: [
      { title: "Agenda tu clase muestra · Agalea" },
      {
        name: "description",
        content: "Reserva una clase muestra de gimnasia artística en Agalea por WhatsApp.",
      },
      { property: "og:title", content: "Agenda tu clase muestra · Agalea" },
      {
        property: "og:description",
        content: "Reserva tu clase muestra por WhatsApp.",
      },
    ],
  }),
  component: ClaseMuestra,
});

const schema = z.object({
  parent_name: z.string().trim().min(1, "Escribe tu nombre").max(100),
  student_name: z.string().trim().min(1, "Escribe el nombre del alumno").max(100),
  student_age: z.coerce.number().int().min(2, "Edad no válida").max(70, "Edad no válida"),
  phone: z.string().trim().min(7, "Teléfono no válido").max(25),
  email: z.string().trim().email("Correo no válido").max(255).or(z.literal("")),
  program: z.enum(programs),
  message: z.string().trim().max(1000),
});

const field =
  "w-full rounded-xl border border-input bg-background px-4 py-3 outline-none focus:ring-2 focus:ring-ring";

function buildWhatsappMessage(data: z.infer<typeof schema>): string {
  const lines = [
    "Hola Agalea, quiero agendar una clase muestra:",
    `• Responsable: ${data.parent_name}`,
    `• Alumno: ${data.student_name} (${data.student_age} años)`,
    `• Programa de interés: ${data.program}`,
    `• Teléfono: ${data.phone}`,
  ];
  if (data.email) lines.push(`• Correo: ${data.email}`);
  if (data.message) lines.push(`• Comentarios: ${data.message}`);
  return lines.join("\n");
}

function ClaseMuestra() {
  const [preparedUrl, setPreparedUrl] = useState<string | null>(null);

  function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const parsed = schema.safeParse(Object.fromEntries(new FormData(e.currentTarget)));
    if (!parsed.success) {
      toast.error(parsed.error.issues[0]?.message ?? "Revisa los datos");
      return;
    }
    const url = whatsappLink(buildWhatsappMessage(parsed.data));
    setPreparedUrl(url);
    window.open(url, "_blank", "noopener,noreferrer");
  }

  return (
    <>
      <PageHero
        eyebrow="Clase muestra"
        title="Tu primera clase te espera"
        text="Elige cómo prefieres agendar: escríbenos directo por WhatsApp o llena tus datos para armar tu mensaje."
      />
      <section className="mx-auto grid max-w-6xl gap-10 px-5 py-16 lg:grid-cols-[1fr_1.4fr]">
        <div className="h-fit rounded-3xl bg-card p-8 shadow-elegant">
          <MessageCircle className="h-10 w-10 text-whatsapp" />
          <h2 className="mt-4 text-2xl font-semibold">Agenda por WhatsApp</h2>
          <p className="mt-2 text-muted-foreground">
            La forma más rápida: te respondemos con los horarios disponibles.
          </p>
          <a
            href={whatsappLink("Hola Agalea, quiero agendar una clase muestra.")}
            target="_blank"
            rel="noreferrer"
            className="mt-6 inline-block rounded-full bg-whatsapp px-6 py-3 font-semibold text-whatsapp-foreground"
          >
            Abrir WhatsApp
          </a>
        </div>

        <div className="rounded-3xl border border-border bg-card p-8">
          {preparedUrl ? (
            <div className="py-10 text-center">
              <h2 className="text-3xl font-semibold text-primary">¡Mensaje listo!</h2>
              <p className="mt-3 text-muted-foreground">
                Si WhatsApp no se abrió automáticamente, usa el botón para enviar tu solicitud.
              </p>
              <div className="mt-6 flex flex-wrap justify-center gap-4">
                <a
                  href={preparedUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="rounded-full bg-whatsapp px-6 py-3 font-semibold text-whatsapp-foreground"
                >
                  Enviar por WhatsApp
                </a>
                <button
                  onClick={() => setPreparedUrl(null)}
                  className="font-semibold text-primary hover:underline"
                >
                  Editar datos
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={onSubmit} className="grid gap-4 sm:grid-cols-2">
              <h2 className="text-2xl font-semibold sm:col-span-2">O prepara tu solicitud</h2>
              <label className="text-sm font-medium">
                Tu nombre
                <input name="parent_name" required maxLength={100} className={`${field} mt-1`} />
              </label>
              <label className="text-sm font-medium">
                Nombre del alumno
                <input name="student_name" required maxLength={100} className={`${field} mt-1`} />
              </label>
              <label className="text-sm font-medium">
                Edad del alumno
                <input
                  name="student_age"
                  type="number"
                  min={2}
                  max={70}
                  required
                  className={`${field} mt-1`}
                />
              </label>
              <label className="text-sm font-medium">
                Programa de interés
                <select name="program" className={`${field} mt-1`}>
                  {programs.map((p) => (
                    <option key={p}>{p}</option>
                  ))}
                </select>
              </label>
              <label className="text-sm font-medium">
                Teléfono
                <input
                  name="phone"
                  type="tel"
                  required
                  maxLength={25}
                  className={`${field} mt-1`}
                />
              </label>
              <label className="text-sm font-medium">
                Correo (opcional)
                <input name="email" type="email" maxLength={255} className={`${field} mt-1`} />
              </label>
              <label className="text-sm font-medium sm:col-span-2">
                Comentarios (opcional)
                <textarea name="message" maxLength={1000} rows={3} className={`${field} mt-1`} />
              </label>
              <button className="rounded-full bg-primary px-6 py-3.5 font-semibold text-primary-foreground shadow-elegant transition hover:bg-primary-deep sm:col-span-2">
                Continuar a WhatsApp
              </button>
            </form>
          )}
        </div>
      </section>
    </>
  );
}
