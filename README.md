# Rajiv — Staff Systems Architect & Full-Stack Engineer

A high-performance personal portfolio website built with **React 19**, **TypeScript**, **Tailwind CSS**, and **Motion**.

## Architectural Highlights

- **Pure Original Photograph Integration**: The hero section features the author's unedited, original photograph preserved with exact pixel fidelity (`object-fit: contain`, no AI alteration, no filters, uncropped office background).
- **Cinematic 3D Walking Experience**: Implemented using dynamic 3D camera transforms (`rotateX`, `rotateY`, `translateZ`), an animated receding floor grid (`perspective: 800px`), and depth particles that simulate walking into an architectural gallery towards the subject.
- **Photo Integrity Inspector**: Built-in verification modal allowing inspection of rendering properties and live local file loading.
- **Distributed Systems Case Studies**: Technical blueprints covering event routing, CRDT collaborative canvases, and time-series ingestion.
- **Architectural Principles**: Human-crafted engineering axioms governing system design and reliability.

## Project Structure

```
├── public/
│   └── assets/
│       └── original-photo.jpg      # The unedited original photograph
├── src/
│   ├── assets/
│   │   └── original-photo.jpg      # Source asset copy
│   ├── components/
│   │   ├── Hero3DStage.tsx          # 3D walking camera rig & unmodified photo mount
│   │   ├── Navbar.tsx               # Typographic navigation & mode triggers
│   │   ├── PhotoIntegrityModal.tsx  # Live fidelity verifier & local file loader
│   │   ├── ProjectsSection.tsx      # Filterable systems & architecture blueprints
│   │   ├── PhilosophySection.tsx    # Chaptered architectural principles
│   │   ├── SkillsSection.tsx        # Interactive technical matrix
│   │   ├── TimelineSection.tsx      # Career milestones & track record
│   │   ├── TestimonialsSection.tsx  # Peer engineering endorsements
│   │   ├── ContactSection.tsx       # Validated inquiry form & email copy
│   │   └── Footer.tsx               # Minimalist footer
│   ├── data/
│   │   └── portfolioData.ts         # Portfolio data & case studies
│   ├── types/
│   │   └── portfolio.ts            # TypeScript interfaces
│   ├── App.tsx                      # Root application
│   ├── main.tsx                     # Entry point
│   └── index.css                    # Tailwind CSS & 3D perspective keyframes
├── package.json
└── vite.config.ts
```

## Local Development

```bash
# Install dependencies
npm install

# Start local development server
npm run dev
```

## Production Build

```bash
# Type check and build bundle
npm run build

# Preview build locally
npm run preview
```

## Deployment to GitHub

To push this repository to your own GitHub account:

1. Create a new empty repository on [GitHub](https://github.com/new) (e.g. `portfolio`).
2. Link your remote and push:

```bash
git branch -M main
git remote add origin https://github.com/<YOUR_GITHUB_USERNAME>/<YOUR_REPOSITORY_NAME>.git
git push -u origin main
```
