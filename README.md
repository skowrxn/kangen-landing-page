# kangen-landing-page

Statyczna wizytówka pod domeną **kangenpolska.pl** — jedna strona z zaproszeniem
Barbary Karbowiak i przyciskiem do oficjalnego sklepu EWS Enagic
(`https://kangenpolska.ecokangen.com/pl_US/`).

Pełna strona o wodzie alkalicznej działa na **zdrowawoda.info** (repo `kangen-website`).

## Jak to działa

- Czysty statyczny HTML — zero zależności, zero builda.
- **Celowo brak pliku `404.html`** — Cloudflare Pages bez top-level `404.html`
  przechodzi w tryb SPA i serwuje `index.html` ze statusem **200 dla każdej
  ścieżki** (`/o-mnie`, `/czym-jest-woda-kangen`, `/blog/...`, itd.). Dzięki temu
  stare adresy kangenpolska.pl nie zwracają 404. **Nie dodawaj `404.html`.**
- `index.html` ma `<link rel="canonical" href="https://kangenpolska.pl/">`, żeby
  Google traktował wszystkie ścieżki jako jedną stronę.

## Deploy (Cloudflare Pages)

1. Cloudflare dashboard → Workers & Pages → Create → Pages → połącz to repo.
2. Build command: **brak** (puste), build output directory: `/`.
3. Po deployu: Custom domains → dodaj `kangenpolska.pl` i `www.kangenpolska.pl`
   (wcześniej odepnij je od workera `kangen`).
