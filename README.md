# Credential Space — React + Tailwind certificate portfolio

## Architecture

- `src/main.jsx`: application entry point; mounts React and imports global CSS.
- `src/App.jsx`: top-level application; owns search/filter/modal state and connects page sections.
- `src/components/`: reusable UI components.
  - `Header.jsx`: navigation and contact CTA.
  - `Hero.jsx`: page introduction and summary stats.
  - `CertificateSection.jsx`: category filters and Bento grid composition.
  - `CertificateCard.jsx`: individual certificate tile.
  - `SearchInput.jsx`: search field.
  - `CertificateModal.jsx`: selected certificate details and copy/verification actions.
  - `AboutSection.jsx`: about banner.
  - `Footer.jsx`: footer.
- `src/data/certificates.js`: all certificate information in one data source.
- `src/index.css`: Tailwind CSS v4 import and custom styles.
- `vite.config.js`: Vite, React, and Tailwind plugin configuration.
- `public/certificates/`: place certificate image files here if you want to add them.

## Run
1. Install Node.js LTS.
2. Open this folder in a terminal.
3. Run `npm install`.
4. Run `npm run dev`.
5. Open the local URL printed by Vite (usually http://localhost:5173).

## Build
Run `npm run build`. The production output is created in `dist/`.

## Add or update a certificate
Edit `src/data/certificates.js` and add/update an object. Optional fields:
- `image`: e.g. `/certificates/salesforce-admin.png`
- `verificationUrl`: the credential verification page URL
- `featured`: set to `true` to feature the card in the Bento grid

All example certificates and IDs are demo data. Replace them with real details before publishing.
