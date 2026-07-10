# kangen-landing-page

Statyczna wizytówka pod domeną **kangenpolska.pl** — jedna strona z zaproszeniem
Barbary Karbowiak i przyciskiem do oficjalnego sklepu EWS Enagic
(`https://kangenpolska.ecokangen.com/pl_US/`).

Pełna strona o wodzie alkalicznej działa na **zdrowawoda.info** (repo `kangen-website`).

## Jak to działa

- Czysty statyczny HTML w katalogu **`public/`** — zero zależności, zero builda.
- Deploy jako **Cloudflare Worker ze statycznymi assetami** (`wrangler.jsonc`):
  - `assets.directory: "./public"` — serwowane są wyłącznie pliki strony
    (nigdy `.git` ani pliki robocze repo),
  - `assets.not_found_handling: "single-page-application"` — każda ścieżka
    (`/o-mnie`, `/czym-jest-woda-kangen`, `/blog/...`, itd.) dostaje
    `index.html` ze statusem **200**, więc stare adresy kangenpolska.pl
    nie zwracają 404. **Nie zmieniaj tego ustawienia i nie dodawaj `404.html`.**
- `index.html` ma `<link rel="canonical" href="https://kangenpolska.pl/">`, żeby
  Google traktował wszystkie ścieżki jako jedną stronę.

## Deploy (Cloudflare Workers Builds)

Repo jest podpięte w Cloudflare (Workers & Pages → worker `kangen-landing-page`,
komenda deployu: `npx wrangler deploy`). Push na default branch buduje i wdraża
automatycznie z ustawieniami z `wrangler.jsonc`. Custom domains
(`kangenpolska.pl`, `www.kangenpolska.pl`) podpina się w ustawieniach workera
(Settings → Domains & Routes).
