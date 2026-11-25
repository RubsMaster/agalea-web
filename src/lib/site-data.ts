import hero from "@/assets/hero-gymnast.jpg";
import equipment from "@/assets/gym-equipment.jpg";
import team from "@/assets/competition-team.jpg";
import bars from "@/assets/competition-bars.jpg";
import coach1 from "@/assets/coach-1.jpg";
import coach2 from "@/assets/coach-2.jpg";
export const WHATSAPP_NUMBER = "526145743625";
export function whatsappLink(text: string) {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(text)}`;
};
export const images = { hero, equipment, team, bars, coach1, coach2 };
export const instructors = [
  {
    name: "Alejandra Nájera",
    role: "rol",
    photo: coach1,
    bio: "biografia ejemplo: Ex seleccionada nacional con 15 años de experiencia formando gimnastas de nivel competitivo.",
    specialties: ["Viga", "Suelo", "Nivel competitivo"],
  },
  {
    name: "Andrea Macías",
    role: "Entrenador principal",
    photo: coach2,
    bio: "Licenciado en Educación Física, especialista en barras asimétricas y preparación física.",
    specialties: ["Barras", "Salto", "Acondicionamiento"],
  },
];

export const equipmentList = [
  {
    name: "Practicable de suelo 12×12 m",
    desc: "Piso con resortes de medidas oficiales para rutinas completas.",
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

export const programs = [
  "Baby Gym",
  "Iniciación",
  "Pre-equipo",
  "Equipo competitivo",
  "Adultos",
] as const;

export const plans = [
  {
    name: "Baby Gym",
    ages: "3 a 5 años",
    price: 900,
    freq: "2 clases por semana · 45 min",
    features: ["Motricidad y coordinación", "Grupos de máximo 8", "Juego guiado"],
  },
  {
    name: "Iniciación",
    ages: "6 a 10 años",
    price: 1200,
    freq: "3 clases por semana · 1 h",
    features: ["Fundamentos en los 4 aparatos", "Evaluación trimestral", "Uniforme de práctica"],
    featured: true,
  },
  {
    name: "Pre-equipo",
    ages: "8 a 14 años",
    price: 1600,
    freq: "4 clases por semana · 2 h",
    features: [
      "Preparación para competir",
      "Acondicionamiento físico",
      "Seguimiento personalizado",
    ],
  },
  {
    name: "Equipo competitivo",
    ages: "Por selección",
    price: 2400,
    freq: "5 clases por semana · 3 h",
    features: ["Calendario de competencias", "Coreografía de suelo", "Preparación mental"],
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

export const schedule: {
  program: string;
  slots: Partial<Record<(typeof scheduleDays)[number], string>>;
}[] = [
  {
    program: "Baby Gym",
    slots: { Martes: "16:00 – 16:45", Jueves: "16:00 – 16:45", Sábado: "10:00 – 10:45" },
  },
  {
    program: "Iniciación",
    slots: {
      Lunes: "16:00 – 17:00",
      Miércoles: "16:00 – 17:00",
      Viernes: "16:00 – 17:00",
      Sábado: "11:00 – 12:00",
    },
  },
  {
    program: "Pre-equipo",
    slots: {
      Lunes: "17:00 – 19:00",
      Martes: "17:00 – 19:00",
      Jueves: "17:00 – 19:00",
      Viernes: "17:00 – 19:00",
    },
  },
  {
    program: "Equipo competitivo",
    slots: {
      Lunes: "15:00 – 18:00",
      Martes: "15:00 – 18:00",
      Miércoles: "15:00 – 18:00",
      Jueves: "15:00 – 18:00",
      Viernes: "15:00 – 18:00",
    },
  },
  { program: "Adultos", slots: { Martes: "19:30 – 20:30", Jueves: "19:30 – 20:30" } },
];
