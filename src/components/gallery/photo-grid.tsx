import { useRef, useState } from "react";
import { ChevronLeft, ChevronRight, X } from "lucide-react";
import type { Photo } from "@/lib/site-data";

export function PhotoGrid({ photos }: { photos: Photo[] }) {
  const dialogRef = useRef<HTMLDialogElement>(null);
  const [index, setIndex] = useState(0);

  if (photos.length === 0) return null;

  const open = (i: number) => {
    setIndex(i);
    dialogRef.current?.showModal();
  };
  const close = () => dialogRef.current?.close();
  const prev = () => setIndex((i) => (i - 1 + photos.length) % photos.length);
  const next = () => setIndex((i) => (i + 1) % photos.length);

  const current = photos[index] ?? photos[0];

  return (
    <>
      <ul className="grid grid-cols-2 gap-3 md:grid-cols-3 md:gap-4">
        {photos.map((photo, i) => (
          <li key={`${photo.src}-${i}`} className={i === 0 ? "col-span-2 row-span-2" : ""}>
            <button
              type="button"
              onClick={() => open(i)}
              className="group relative block aspect-square w-full overflow-hidden rounded-lg bg-muted focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring"
            >
              <img
                src={photo.src}
                alt={photo.alt}
                loading="lazy"
                className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <span className="sr-only">Ampliar foto</span>
            </button>
          </li>
        ))}
      </ul>

      <dialog
        ref={dialogRef}
        aria-label="Visor de fotos"
        onClick={(e) => {
          if (e.target === e.currentTarget) close();
        }}
        onKeyDown={(e) => {
          if (e.key === "ArrowLeft") prev();
          if (e.key === "ArrowRight") next();
        }}
        className="m-auto h-dvh max-h-none w-full max-w-none bg-transparent p-0 backdrop:bg-secondary/95"
      >
        {current && (
          <div className="flex h-full flex-col gap-4 p-4 text-secondary-foreground md:p-8">
            <div className="flex items-center justify-between">
              <p className="text-sm font-semibold tabular-nums" aria-live="polite">
                {index + 1} / {photos.length}
              </p>
              <button
                type="button"
                onClick={close}
                className="flex size-11 items-center justify-center rounded-md bg-secondary-foreground/10 hover:bg-secondary-foreground/20"
              >
                <X className="size-5" aria-hidden />
                <span className="sr-only">Cerrar</span>
              </button>
            </div>

            <div className="relative flex min-h-0 flex-1 items-center justify-center">
              <img
                key={current.src}
                src={current.src}
                alt={current.alt}
                className="animate-in fade-in max-h-full max-w-full object-contain duration-300"
              />
            </div>

            <div className="flex items-center justify-between gap-4">
              <button
                type="button"
                onClick={prev}
                className="flex size-11 shrink-0 items-center justify-center rounded-md bg-secondary-foreground/10 hover:bg-secondary-foreground/20"
              >
                <ChevronLeft className="size-5" aria-hidden />
                <span className="sr-only">Foto anterior</span>
              </button>
              <p className="text-center text-sm leading-relaxed text-pretty opacity-80">
                {current.alt}
              </p>
              <button
                type="button"
                onClick={next}
                className="flex size-11 shrink-0 items-center justify-center rounded-md bg-secondary-foreground/10 hover:bg-secondary-foreground/20"
              >
                <ChevronRight className="size-5" aria-hidden />
                <span className="sr-only">Foto siguiente</span>
              </button>
            </div>
          </div>
        )}
      </dialog>
    </>
  );
}
