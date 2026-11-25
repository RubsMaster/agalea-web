import { Link } from "@tanstack/react-router";
import { type Album, formatAlbumDate } from "@/lib/site-data";

export function AlbumCard({ album }: { album: Album }) {
  const cover = album.photos[0];

  return (
    <Link to="/galeria/$slug" params={{ slug: album.slug }} className="group flex flex-col gap-4">
      <div className="relative aspect-[4/3] overflow-hidden rounded-lg bg-muted">
        {cover && (
          <img
            src={cover.src}
            alt=""
            loading="lazy"
            className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
        )}
        <span className="absolute top-3 left-3 rounded-md bg-background px-3 py-1 text-xs font-bold uppercase tracking-widest text-foreground transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
          {album.category}
        </span>
        <span className="absolute right-3 bottom-3 rounded-md bg-secondary px-3 py-1 text-xs font-semibold text-secondary-foreground">
          {album.photos.length} fotos
        </span>
      </div>
      <div className="flex flex-col gap-1">
        <h3 className="font-display text-3xl font-bold uppercase text-balance transition-colors group-hover:text-primary">
          {album.title}
        </h3>
        <p className="text-sm text-muted-foreground">
          <time dateTime={album.date}>{formatAlbumDate(album.date)}</time> · {album.location}
        </p>
      </div>
    </Link>
  );
}
