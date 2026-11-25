import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { ArrowLeft } from "lucide-react";
import { PhotoGrid } from "@/components/gallery/photo-grid";
import { formatAlbumDate, getAlbum } from "@/lib/site-data";

export const Route = createFileRoute("/galeria/$slug")({
  loader: ({ params }) => {
    const album = getAlbum(params.slug);
    if (!album) throw notFound();
    return album;
  },
  head: ({ loaderData }) => ({
    meta: [
      { title: loaderData ? `${loaderData.title} · Galería · Agalea` : "Álbum · Agalea" },
      {
        name: "description",
        content: loaderData?.description ?? "Álbum fotográfico de la academia Agalea.",
      },
    ],
  }),
  notFoundComponent: AlbumNotFound,
  component: AlbumPage,
});

function AlbumNotFound() {
  return (
    <section className="mx-auto flex max-w-6xl flex-col items-start gap-4 px-5 py-20">
      <p className="text-sm font-bold uppercase tracking-widest text-primary">Galería</p>
      <h1 className="font-display text-4xl font-bold">Álbum no encontrado</h1>
      <p className="text-muted-foreground">El álbum que buscas no existe o fue movido.</p>
      <Link
        to="/galeria"
        className="inline-flex items-center gap-2 text-sm font-semibold text-primary hover:underline"
      >
        <ArrowLeft className="size-4" aria-hidden />
        Volver a todos los álbumes
      </Link>
    </section>
  );
}

function AlbumPage() {
  const album = Route.useLoaderData();

  return (
    <section className="mx-auto flex max-w-6xl flex-col gap-10 px-5 pt-10 pb-20 md:pt-14">
      <Link
        to="/galeria"
        className="inline-flex w-fit items-center gap-2 text-sm font-semibold text-muted-foreground transition-colors hover:text-primary"
      >
        <ArrowLeft className="size-4" aria-hidden />
        Todos los álbumes
      </Link>
      <header className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
        <div className="flex flex-col gap-3">
          <p className="text-sm font-bold uppercase tracking-widest text-primary">
            {album.category}
          </p>
          <h1 className="font-display text-5xl leading-none font-extrabold uppercase text-balance md:text-7xl">
            {album.title}
          </h1>
          <p className="text-sm text-muted-foreground">
            <time dateTime={album.date}>{formatAlbumDate(album.date)}</time> · {album.location} ·{" "}
            {album.photos.length} fotos
          </p>
        </div>
        <p className="max-w-sm leading-relaxed text-pretty text-muted-foreground">
          {album.description}
        </p>
      </header>
      <PhotoGrid photos={album.photos} />
    </section>
  );
}
