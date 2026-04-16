# Futuristic Portfolio

Template portfolio futuristico, riutilizzabile e configurabile quasi interamente da `.env`.

Portfolio personale in stile futuristico costruito con **Vite** e pensato per essere **riutilizzabile da chiunque**.

L'idea alla base del progetto e' semplice: invece di dover modificare componenti, stringhe e dati nel codice, puoi **configurare quasi tutto direttamente dal file `.env`**.

In questo modo anche chi non vuole mettere mano a JavaScript puo':

- cambiare nome, ruolo, email e link social
- personalizzare i testi della hero e delle sezioni
- definire highlights, progetti e skills
- riutilizzare il template come portfolio personale in pochi minuti

## Perche' e' fatto cosi'

Questo template e' stato costruito apposta con un approccio **env-first**:

- **piu' facile da usare**: aggiorni i contenuti senza cercare stringhe sparse nel codice
- **piu' facile da riusare**: lo cloni, compili il `.env` e hai gia' una base pronta
- **piu' facile da mantenere**: struttura grafica e contenuti restano separati
- **piu' adatto a tutti**: puo' usarlo anche chi ha poca esperienza di sviluppo frontend

## Cosa puoi configurare

Dal file `.env` puoi controllare:

- dati profilo
- testi principali dell'interfaccia
- mini-card informative nella hero
- sezione progetti
- sezione skills
- messaggi della sezione contatti

Se una variabile manca o un JSON non e' valido, il progetto usa fallback sicuri per evitare rotture dell'interfaccia.

## Stack

- `Vite`
- `JavaScript`
- `CSS`

## Avvio rapido

1. Installa Node.js in versione LTS.
2. Installa le dipendenze:

```bash
npm install
```

3. Avvia il progetto in locale:

```bash
npm run dev
```

4. Apri il browser sull'URL mostrato da Vite.

## Configurazione `.env`

Questo progetto usa Vite, quindi le variabili esposte al client devono iniziare con `VITE_`.

Le variabili principali sono queste:

### Profilo

```env
VITE_PROFILE_NAME="Il Tuo Nome"
VITE_PROFILE_ROLE="Creative Developer"
VITE_PROFILE_EMAIL="nome@dominio.com"
VITE_PROFILE_LOCATION="Italia"
VITE_PROFILE_GITHUB="https://github.com/tuo-username"
VITE_PROFILE_LINKEDIN="https://www.linkedin.com/in/tuo-profilo/"
VITE_PROFILE_WEBSITE="https://tuosito.it"
```

### Testi della UI

```env
VITE_HERO_AVAILABILITY="Disponibile per progetti"
VITE_HERO_TITLE_PREFIX="Portfolio"
VITE_HERO_TITLE_HIGHLIGHT="futuristico"
VITE_HERO_SUBTITLE="Progetto interfacce moderne e prodotti digitali con attenzione a performance e dettaglio."
VITE_PROJECTS_DESCRIPTION="Tre card pronte da personalizzare."
VITE_SKILLS_DESCRIPTION="Una griglia semplice, stile console."
VITE_CONTACT_DESCRIPTION="Scrivimi e raccontami cosa vuoi costruire."
VITE_EMPTY_LINKS_TEXT="Aggiungi i link in .env"
VITE_FINEPRINT_TEXT="Aggiorna nome, email, link, progetti e skills in .env e riavvia il server."
```

### Sezioni dinamiche in JSON

Per `highlights`, `projects` e `skills` il contenuto viene letto da JSON salvato nel `.env`.

```env
VITE_HIGHLIGHTS_JSON='[
  {"title":"Focus","text":"UI - DX - Perf"},
  {"title":"Stack","text":"JS - TS - Web"},
  {"title":"Metodo","text":"Design -> Build"}
]'

VITE_PROJECTS_JSON='[
  {
    "code":"01",
    "title":"Neon Dashboard",
    "description":"UI data-driven con micro-animazioni e componenti riusabili."
  },
  {
    "code":"02",
    "title":"Holo Landing",
    "description":"Landing conversione con layout modulare e accessibilita."
  }
]'

VITE_SKILLS_JSON='[
  {
    "label":"Frontend",
    "items":["HTML","CSS","JavaScript"]
  },
  {
    "label":"UI/UX",
    "items":["Design Systems","Accessibilita","Motion"]
  }
]'
```

## Come personalizzarlo

1. Clona il repository.
2. Esegui `npm install`.
3. Apri il file `.env`.
4. Sostituisci i valori demo con i tuoi dati.
5. Riavvia il server se era gia' attivo.

Non serve modificare il layout o i componenti per adattare i contenuti di base del portfolio.

## Build produzione

Per generare la build:

```bash
npm run build
```

Per testare la build in locale:

```bash
npm run preview
```

## A chi serve

Questo progetto e' utile se vuoi:

- un portfolio personale veloce da personalizzare
- una base grafica gia' pronta
- un template da riusare per piu' persone o clienti
- una struttura semplice dove i contenuti stanno nel `.env`

## Nota importante

Ogni volta che modifichi il file `.env`, devi riavviare il server di sviluppo per vedere le modifiche applicate correttamente.

## Idea del progetto

Il sito e' stato pensato intenzionalmente in questo modo: **la grafica resta nel codice, i contenuti restano nella configurazione**.

Questo permette a chiunque di prendere il template, cambiare poche variabili e ottenere un portfolio personale pronto da pubblicare.

