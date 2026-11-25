# Agalea · Academia de gimnasia artística

Sitio web estático de la academia de gimnasia artística **Agalea**, desarrollado con React, TypeScript, Vite, TanStack Router y Tailwind CSS. No requiere base de datos ni servidor backend.

## Desarrollo local

Requisitos: Node.js 20+ y npm.

```sh
npm install --legacy-peer-deps
npm run dev
```

## Scripts disponibles

- `npm run dev` — Inicia el servidor de desarrollo
- `npm run build` — Genera los archivos estáticos en `dist/`
- `npm run preview` — Previsualiza el build de producción
- `npm run test` — Ejecuta las pruebas con Vitest
- `npm run lint` — Ejecuta ESLint
- `npm run format` — Formatea el código con Prettier

## Despliegue con Docker en VPS (Debian)

El `Dockerfile` compila la aplicación en archivos estáticos y los sirve con `nginx:alpine`:

```sh
docker build -t agalea-web .
docker run -d --name agalea-web --restart unless-stopped -p 8080:80 agalea-web
```

Puedes ajustar el puerto (`-p 80:80` o detrás de un reverse proxy como Nginx/Caddy/Traefik con HTTPS).
