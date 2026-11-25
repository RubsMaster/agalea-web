import { createFileRoute } from "@tanstack/react-router";
import { AlbumCard } from "@/components/gallery/album-card";
import { getSortedAlbums } from "@/lib/site-data";

export const Route = createFileRoute("/galeria/")({
  head: () => ({
    meta: [
      { title: "Galería de competencias · Agalea" },
      {
        name: "description",
        content:
          "Álbumes de fotos de competencias, exhibiciones, entrenamientos y campamentos de Agalea.",
      },
      { property: "og:title", content: "Galería de competencias · Agalea" },
      {
        property: "og:description",
        content: "Álbumes de fotos de nuestras competencias y exhibiciones.",
      },
    ],
  }),
  component: GalleryPage,
});

function GalleryPage() {
  const albums = getSortedAlbums();

  return (
    <section className="mx-auto flex max-w-6xl flex-col gap-12 px-5 pt-12 pb-20 md:pt-16">
      <header className="flex flex-col gap-4">
        <p className="text-sm font-bold uppercase tracking-widest text-primary">Galería</p>
        <h1 className="font-display text-6xl leading-none font-extrabold uppercase text-balance md:text-7xl">
          Álbumes
        </h1>
        <p className="max-w-lg leading-relaxed text-pretty text-muted-foreground">
          Competencias, exhibiciones, entrenamientos y campamentos. Elige un álbum para ver todas
          sus fotos.
        </p>
      </header>
      <div className="grid gap-x-10 gap-y-14 md:grid-cols-2">
        {albums.map((album) => (
          <AlbumCard key={album.slug} album={album} />
        ))}
      </div>
    </section>
  );
}
