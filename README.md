# Keeper — AI Narrative Engine 🎲

> Entra in una storia. Tu scegli.

**Keeper** è un Game Master digitale alimentato da AI. Crei un personaggio, entri in una campagna e giochi — il Keeper narra, tu decidi.

---

## Cos'è

Una piattaforma narrativa interattiva per:
- **Giocatori casual** che vogliono vivere una storia senza imparare regole complesse
- **Appassionati D&D** che cercano sessioni rapide senza organizzare un gruppo
- **Scrittori e creativi** che usano il motore narrativo come tool di worldbuilding

---

## Stato attuale (Aprile 2026)

### ✅ Live in beta
- **App**: [keeper-narrative-engine.vercel.app](https://keeper-narrative-engine.vercel.app)
- Narrativa AI in italiano (GPT-4o-mini)
- Campagna attiva: **Thornwood — The Hidden Arc** (Day 106)
- Sistema crediti: 10 turni gratuiti per utente
- DC checks (D&D Light): dado automatico per azioni rischiose
- UI chat dark fantasy: bubble, timestamp, dialoghi NPC in ambra
- Dashboard desktop: CharacterPanel, WorldPanel, inventario
- Mobile: drawer overlay per Personaggio e Mondo
- Persistenza sessione: Supabase PostgreSQL

### 🔧 In sviluppo
- Immagini generate da AI per ogni scena (Leonardo.ai / FLUX Dev)
- Multi-utente: onboarding, creazione personaggio, isolamento dati
- Edit & Regenerate: modifica un'azione e rigenera la storia da quel punto
- Narrative branching: timeline di scelte, checkpoint navigabili

### 📋 Roadmap
- **FASE 1** ✅ — API core (auth, session, action, credits)
- **FASE 2** ✅ — Narrative Engine D&D Light + Credit System
- **FASE 3** ✅ — Chat UI + Auth UI
- **FASE 4** 🔧 — Multi-utente reale
- **FASE 5** — Image pipeline (Leonardo.ai)
- **FASE 6** — Subscription tiers ($5/$15/$30/mo)
- **FASE 7** — Template multipli (Fantasy, Sci-Fi, Horror, Storia)

---

## Architettura

```
Frontend         → Next.js 15 (App Router) — Vercel
Database         → Supabase (PostgreSQL)
Auth             → Supabase Auth (email + JWT)
AI Narrativa     → OpenAI GPT-4o-mini
Image Gen        → Leonardo.ai (FLUX Dev) — in arrivo
Workflow         → Trello + Dev Worker agents (auto-deploy ogni 2h)
```

### Schema DB (tabelle principali)
```
accounts         → utenti registrati
campaigns        → campagne (Thornwood, ecc.)
players          → personaggi (stats, HP, inventario)
sessions         → sessioni di gioco + narrative_state
world_state      → stato del mondo (location, giorno, fazioni)
npcs             → personaggi non giocanti con lore
items            → inventario normalizzato
log_actions      → ogni azione loggata (actor, type, roll, dc)
messages         → dialoghi completi
snapshots        → checkpoint per rollback/branching
credits          → sistema crediti per utente
```

---

## Business Model

| Tier | Prezzo | Cosa include |
|------|--------|-------------|
| Free | €0 | 10 turni/sessione, testo only |
| Story Seeker | €5/mo | Turni illimitati, 1 immagine/scena |
| Campaign Master | €15/mo | Tutto + TTS, campagne multiple |
| Loresmith | €30/mo | Tutto + template custom, priorità AI |

**Viral loop**: +5 turni per ogni amico invitato.

---

## Campagna attiva — Thornwood POC

- **Personaggio**: Aeron (identità sconosciuta, amnesia doppio strato)
- **Giorno**: 106 — 11 Tersun 1247, Alta Estate
- **Location**: Ravensholm, Vicoli del Seminterrato
- **Fazioni**: Compagnia del Velo · Pale Tribunal · Circolo della Luna Calante
- **NPC attivi**: Lyra (companion), Sylas Veil, Lord Oskar Bram, Solren (imprigionato), Mira Ashveil, Dael Mourne
- **Intel raccolta**: Lista compromessa ✅ · Lord Bram coinvolto ✅ · Mappa passaggi segreti ✅

---

## Obiettivi

1. **Beta pubblica** — aprire la registrazione a utenti esterni
2. **Feedback loop** — raccogliere opinioni, iterare sulla UX
3. **Validazione** — capire se il modello freemium funziona
4. **Kickstarter** (eventuale) — se il progetto richiede risorse per scalare

---

## Contatti

- GitHub: [Flame0510/keeper-narrative-engine](https://github.com/Flame0510/keeper-narrative-engine)
- Team: Michele Tornello's Projects (Vercel)
