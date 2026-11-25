import hero from "@/assets/hero-gymnast.jpg";
import equipment from "@/assets/gym-equipment.jpg";
import team from "@/assets/competition-team.jpg";
import bars from "@/assets/competition-bars.jpg";
import coach1 from "@/assets/coach-1.jpg";
import coach2 from "@/assets/coach-2.jpg";
export const WHATSAPP_NUMBER = "526145743625";
export function whatsappLink(text: string) {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(text)}`;
}
export const images = { hero, equipment, team, bars, coach1, coach2 };
export const instructors = [
  {
    name: "Alejandra Nájera",
    role: "Socia / Entrenadora",
    photo: coach1,
    bio: "biografia ejemplo: Ex seleccionada nacional con 15 años de experiencia formando gimnastas de nivel competitivo.",
    specialties: ["Viga", "Suelo", "Nivel competitivo"],
  },
  {
    name: "Andrea Macías",
    role: "Socia / Entrenadora",
    photo: coach2,
    bio: "Licenciado en Educación Física, especialista en barras asimétricas y preparación física.",
    specialties: ["Barras", "Salto", "Acondicionamiento"],
  },
  {
    name: "Elizabeth Macías",
    role: "Socia / Entrenadora",
    photo: coach2,
    bio: "Licenciado en Educación Física, especialista en barras asimétricas y preparación física.",
    specialties: ["Barras", "Salto", "Acondicionamiento"],
  },
];

export const equipmentList = [
  {
    name: "Practicable de suelo",
    desc: "Piso con resortes para rutinas completas.",
  },
  {
    name: "Barras asimétricas",
    desc: "Barras de competencia ajustables y barras de entrenamiento para iniciación.",
  },
  {
    name: "Viga de equilibrio",
    desc: "Vigas oficiales y vigas bajas para aprendizaje seguro.",
  },
  {
    name: "Mesa de salto y trampolín",
    desc: "Mesa de salto reglamentaria con trampolines de distintas durezas.",
  },
  {
    name: "Fosa de espuma",
    desc: "Para practicar elementos nuevos con máxima seguridad.",
  },
  {
    name: "Tumbling y colchonetas",
    desc: "Pista de acrobacia y colchonetas de alta densidad en toda el área.",
  },
];

export interface Photo {
  src: string;
  alt: string;
}

export interface Album {
  slug: string;
  title: string;
  category: string;
  date: string;
  location: string;
  description: string;
  photos: Photo[];
}

export const albums: Album[] = [
  {
    slug: "campeonato-nacional-2026",
    title: "Campeonato Nacional 2026",
    category: "Competencia",
    date: "2026-10-18",
    location: "Ciudad de México",
    description:
      "Participación del equipo competitivo de Agalea con medallas en viga, barras asimétricas y clasificación por equipos.",
    photos: [
      { src: team, alt: "Equipo Agalea en el podio del Campeonato Nacional 2026" },
      { src: bars, alt: "Rutina de barras asimétricas en competencia nacional" },
      { src: hero, alt: "Salto en viga de equilibrio durante la final" },
    ],
  },
  {
    slug: "copa-regional-2026",
    title: "Copa Regional Primavera",
    category: "Competencia",
    date: "2026-04-12",
    location: "Guadalajara",
    description:
      "Nuestras gimnastas de pre-equipo y nivel competitivo destacaron en barras y premiación por equipos.",
    photos: [
      { src: bars, alt: "Final de barras asimétricas en Copa Regional Primavera" },
      { src: team, alt: "Premiación por equipos en Guadalajara" },
      { src: coach1, alt: "Entrenamiento y acompañamiento técnico previo a la rutina" },
    ],
  },
  {
    slug: "exhibicion-fin-de-ano",
    title: "Exhibición de fin de año",
    category: "Exhibición",
    date: "2025-12-14",
    location: "Instalaciones Agalea",
    description:
      "Muestra anual con todos los niveles, desde Baby Gym hasta equipo avanzado, frente a familias y amigos.",
    photos: [
      { src: equipment, alt: "Nuestro gimnasio listo para la exhibición de fin de año" },
      { src: hero, alt: "Presentación de nivel avanzado en viga de equilibrio" },
      { src: coach2, alt: "Preparación de aparatos con el cuerpo de entrenadores" },
    ],
  },
];

export function getSortedAlbums(): Album[] {
  return [...albums].sort((a, b) => b.date.localeCompare(a.date));
}

export function getAlbum(slug: string): Album | undefined {
  return albums.find((album) => album.slug === slug);
}

const albumDateFormatter = new Intl.DateTimeFormat("es-MX", {
  day: "numeric",
  month: "long",
  year: "numeric",
  timeZone: "UTC",
});

export function formatAlbumDate(date: string): string {
  const parsed = new Date(`${date}T00:00:00Z`);
  return Number.isNaN(parsed.getTime()) ? date : albumDateFormatter.format(parsed);
}

export const gymnasticsLevels = [
  "Baby Gym",
  "Nivel 1",
  "Nivel 2",
  "Nivel 3",
  "Nivel 4 y 5",
  "Libres"
] as const;

export const programs = [
  "Gimnasia entre semana · Baby Gym",
  "Gimnasia entre semana · Nivel 1",
  "Gimnasia entre semana · Nivel 2",
  "Gimnasia entre semana · Nivel 3",
  "Gimnasia entre semana · Nivel 4 y 5",
  "Gimnasia entre semana · Libre",
  "Gimnasia sabatina (3 a 17 años)",
  "Parkour (niños 6 a 12 años)",
] as const;

export interface Plan {
  name: string;
  ages: string;
  price: number;
  enrollment: number;
  freq: string;
  features: string[];
  featured?: boolean;
}

export const plans: Plan[] = [
  {
    name: "Gimnasia entre semana",
    ages: "Niñas de 3 a 17 años",
    price: 950,
    enrollment: 300,
    freq: "Lunes a viernes (5 días) · 2 h por turno",
    features: [
      "Turnos por nivel: 3:15–5:15, 5:00–7:00 y 7:00–9:00 pm",
      "Niveles: Baby Gym, Nivel 1, Nivel 2, Nivel 3, Nivel 4 y 5, Libre",
      "Asistencia los 5 días de la semana",
    ],
    featured: true,
  },
  {
    name: "Parkour",
    ages: "Niños de 6 a 12 años",
    price: 800,
    enrollment: 300,
    freq: "Lunes, miércoles y viernes · 7:30 a 9:00 pm",
    features: [
      "3 clases por semana de 1 h 30 min",
      "Grupo exclusivo para niños",
      "Agilidad, saltos y control corporal",
    ],
  },
  {
    name: "Gimnasia sabatina",
    ages: "Niñas de 3 a 17 años",
    price: 500,
    enrollment: 300,
    freq: "Sábados · 1 clase de 3 h (9:00 am – 12:00 pm)",
    features: [
      "Niveles: Baby Gym, Nivel 1, Nivel 2, Nivel 3, Nivel 4 y 5, Libre",
      "Sesión única sabatina de 3 horas",
      "Ideal si no pueden asistir entre semana",
    ],
  },
];

export const scheduleDays = [
  "Lunes",
  "Martes",
  "Miércoles",
  "Jueves",
  "Viernes",
  "Sábado",
] as const;

const weekdaySlots = "03:15 p.m. – 05:15 p.m.\n05:00 p.m. – 07:00 p.m.\n07:00 p.m. – 09:00 p.m.";

export const schedule: {
  program: string;
  note?: string;
  slots: Partial<Record<(typeof scheduleDays)[number], string>>;
}[] = [
  {
    program: "Gimnasia entre semana",
    note: "Niñas 3–17 años · Todos los niveles",
    slots: {
      Lunes: weekdaySlots,
      Martes: weekdaySlots,
      Miércoles: weekdaySlots,
      Jueves: weekdaySlots,
      Viernes: weekdaySlots,
    },
  },
  {
    program: "Parkour",
    note: "Niños 6–12 años",
    slots: {
      Lunes: "07:30 p.m. – 09:00 p.m.",
      Miércoles: "07:30 p.m. – 09:00 p.m.",
      Viernes: "07:30 p.m. – 09:00 p.m.",
    },
  },
  {
    program: "Gimnasia sabatina",
    note: "Niñas 3–17 años · Todos los niveles",
    slots: {
      Sábado: "09:00 a.m. – 12:00 p.m.",
    },
  },
];
