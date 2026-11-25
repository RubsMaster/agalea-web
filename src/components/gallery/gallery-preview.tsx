import { Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { AlbumCard } from "@/components/gallery/album-card";
import { getSortedAlbums } from "@/lib/site-data";

export function GalleryPreview() {
  const latest = getSortedAlbums().slice(0, 2);

  return (
    <section className="py-20">
      <div className="mx-auto flex max-w-6xl flex-col gap-10 px-5">
        <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <h2 className="font-display text-5xl leading-none font-extrabold uppercase text-balance md:text-6xl">
            Momentos Agalea
          </h2>
          <Link
            to="/galeria"
            className="inline-flex items-center gap-2 font-bold text-primary underline-offset-4 hover:underline"
          >
            Ver todos los álbumes
            <ArrowRight className="size-4" aria-hidden />
          </Link>
        </div>
        <div className="grid gap-10 md:grid-cols-2">
          {latest.map((album) => (
            <AlbumCard key={album.slug} album={album} />
          ))}
        </div>
      </div>
    </section>
  );
}
