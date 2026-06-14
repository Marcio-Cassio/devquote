# DevQuote

A minimal Node.js + Express web service that serves random programming and
DevOps quotes. No build step, no database — a single static frontend and a
tiny JSON API, packaged to run in a Docker container.

**Live:** <https://devquote.onrender.com>

## Features

- `GET /` — a clean single-page UI showing a random quote with a "New quote" button
- `GET /api/quote` — returns a random quote as JSON: `{ "quote": "..." }`
- `GET /health` — liveness check: `{ "status": "ok" }`
- Port configurable via `PORT` (defaults to `3000`)

## Tech

- Node.js 20 (Alpine in the container)
- Express 4
- Vanilla HTML/CSS/JS frontend (no bundler)

## Run with Docker

Build the image:

```bash
docker build -t devquote .
```

Run the container:

```bash
docker run -p 3000:3000 devquote
```

Then open <http://localhost:3000>.

To run on a different host port (e.g. 8080):

```bash
docker run -p 8080:3000 devquote
```

## Run locally without Docker

```bash
npm install
npm start
```

Then open <http://localhost:3000>.

## Deployment

Continuously deployed. Every push to `main` runs a GitHub Actions workflow that
builds the Docker image, pushes it to Docker Hub (`marciocassio/devquote:latest`),
then hits a Render deploy hook so Render pulls and redeploys the new image
automatically.