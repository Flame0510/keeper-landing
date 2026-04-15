export default function Home() {
  return (
    <main className="bg-[#0a0a0a] text-zinc-100 min-h-screen font-sans">

      {/* HERO */}
      <section className="flex flex-col items-center justify-center min-h-screen px-6 text-center">
        <span className="inline-block mb-6 px-4 py-1.5 rounded-full border border-amber-400/30 bg-amber-400/10 text-amber-400 text-sm font-medium">
          🎲 Accesso su invito
        </span>
        <h1 className="text-7xl md:text-9xl font-black text-amber-400 tracking-tighter mb-4">
          Keeper
        </h1>
        <p className="text-2xl md:text-3xl font-semibold text-zinc-300 mb-6">
          Il Game Master che non dorme mai.
        </p>
        <p className="text-zinc-400 max-w-xl mb-10 text-lg leading-relaxed">
          Un motore narrativo AI che trasforma ogni tua scelta in una storia. Sessioni persistenti,
          regole D&D leggere, immagini generate al volo. Niente DM umano necessario.
        </p>
        <a
          href="https://keeper-narrative-engine.vercel.app/demo"
          className="px-8 py-4 bg-amber-400 text-black font-bold text-lg rounded-xl hover:bg-amber-300 transition-colors"
        >
          Prova la demo gratuita →
        </a>
        <a
          href="https://keeper-narrative-engine.vercel.app/login"
          className="text-sm text-zinc-500 hover:text-zinc-300 transition-colors"
        >
          Hai già un account? Accedi →
        </a>
      </section>

      {/* HOW IT WORKS */}
      <section className="py-24 px-6 max-w-5xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-4 text-zinc-100">Come funziona</h2>
        <p className="text-center text-zinc-500 mb-16">Tre passi per entrare nell&apos;avventura.</p>
        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              icon: "⚔️",
              title: "Crea il tuo personaggio",
              desc: "Scegli classe, background e tratti. L'AI costruisce il mondo attorno a te.",
            },
            {
              icon: "📖",
              title: "Entra nella storia",
              desc: "Keeper narra, descrive, reagisce. Ogni sessione è unica e non si ripete.",
            },
            {
              icon: "🎯",
              title: "Ogni scelta conta",
              desc: "Le tue decisioni cambiano la trama. Il passato persiste, le conseguenze arrivano.",
            },
          ].map((step) => (
            <div
              key={step.title}
              className="bg-zinc-900 border border-zinc-800 rounded-2xl p-8 flex flex-col items-center text-center"
            >
              <span className="text-4xl mb-4">{step.icon}</span>
              <h3 className="text-xl font-bold mb-3 text-zinc-100">{step.title}</h3>
              <p className="text-zinc-400 leading-relaxed">{step.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* FEATURES */}
      <section className="py-24 px-6 bg-zinc-950">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-4 text-zinc-100">Funzionalità</h2>
          <p className="text-center text-zinc-500 mb-16">Tutto ciò di cui hai bisogno per giocare.</p>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                icon: "🤖",
                title: "Narrativa AI",
                desc: "GPT-4 / Claude 3 alla regia. Narrazione fluida, coerente, immersiva.",
                soon: false,
              },
              {
                icon: "🎲",
                title: "D&D Light",
                desc: "Tiri di dado, DC check, HP, inventario. Meccaniche semplici, profondità reale.",
                soon: false,
              },
              {
                icon: "💾",
                title: "Sessioni persistenti",
                desc: "Il mondo ti aspetta. Riprendi esattamente dove hai lasciato.",
                soon: false,
              },
              {
                icon: "🖼️",
                title: "Immagini AI",
                desc: "Ogni scena importante viene visualizzata con immagini generate in tempo reale da FLUX AI.",
                soon: false,
              },
              {
                icon: "🌿",
                title: "Branching narrativo",
                desc: "Storie che si diramano. Le tue scelte cambiano il destino del mondo.",
                soon: true,
              },
              {
                icon: "📱",
                title: "Mobile first",
                desc: "Gioca ovunque. Ottimizzato per smartphone, tablet e desktop.",
                soon: false,
              },
            ].map((feat) => (
              <div
                key={feat.title}
                className="bg-zinc-900 border border-zinc-800 rounded-2xl p-6 relative"
              >
                {feat.soon && (
                  <span className="absolute top-4 right-4 text-xs px-2 py-0.5 rounded-full bg-zinc-700 text-zinc-400">
                    Coming soon
                  </span>
                )}
                <span className="text-3xl mb-3 block">{feat.icon}</span>
                <h3 className="text-lg font-bold mb-2 text-zinc-100">{feat.title}</h3>
                <p className="text-zinc-400 text-sm leading-relaxed">{feat.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PREZZI */}
      <section className="py-24 px-6 max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-4 text-zinc-100">Piani</h2>
        <p className="text-center text-zinc-500 mb-16">Inizia gratis. Scala quando vuoi.</p>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            {
              name: "Free",
              price: "€0",
              period: "",
              highlight: false,
              perks: ["3 sessioni/mese", "1 personaggio", "Narrativa base", "Community access"],
            },
            {
              name: "Story Seeker",
              price: "€5",
              period: "/mo",
              highlight: true,
              perks: ["Sessioni illimitate", "3 personaggi", "Immagini AI", "Priorità narrativa"],
            },
            {
              name: "Campaign Master",
              price: "€15",
              period: "/mo",
              highlight: false,
              perks: ["Tutto di Story Seeker", "10 personaggi", "Campagne custom", "Esporta sessioni"],
            },
            {
              name: "Loresmith",
              price: "€30",
              period: "/mo",
              highlight: false,
              perks: ["Tutto di Campaign Master", "Personaggi illimitati", "API access", "Early features"],
            },
          ].map((plan) => (
            <div
              key={plan.name}
              className={`rounded-2xl p-8 flex flex-col border ${
                plan.highlight
                  ? "bg-amber-400/10 border-amber-400 ring-1 ring-amber-400"
                  : "bg-zinc-900 border-zinc-800"
              }`}
            >
              {plan.highlight && (
                <span className="text-xs font-bold text-amber-400 uppercase tracking-wider mb-4">
                  Più popolare
                </span>
              )}
              <h3 className={`text-xl font-bold mb-1 ${plan.highlight ? "text-amber-400" : "text-zinc-100"}`}>
                {plan.name}
              </h3>
              <div className="flex items-end gap-0.5 mb-6">
                <span className="text-4xl font-black text-zinc-100">{plan.price}</span>
                <span className="text-zinc-400 mb-1">{plan.period}</span>
              </div>
              <ul className="space-y-2 flex-1">
                {plan.perks.map((perk) => (
                  <li key={perk} className="flex items-center gap-2 text-sm text-zinc-300">
                    <span className="text-amber-400">✓</span>
                    {perk}
                  </li>
                ))}
              </ul>
              <a
                href="https://keeper-narrative-engine.vercel.app/login"
                className={`mt-8 block text-center py-3 rounded-xl font-bold transition-colors ${
                  plan.highlight
                    ? "bg-amber-400 text-black hover:bg-amber-300"
                    : "bg-zinc-800 text-zinc-100 hover:bg-zinc-700"
                }`}
              >
                Inizia ora
              </a>
            </div>
          ))}
        </div>
        <p className="text-center text-zinc-600 text-sm mt-8">
          * I piani a pagamento sono in arrivo. Durante la beta chiusa, l&apos;accesso è gratuito per tutti gli utenti invitati.
        </p>
      </section>

      {/* CTA FINALE */}
      <section className="py-24 px-6 bg-zinc-950 text-center">
        <h2 className="text-4xl md:text-5xl font-black text-amber-400 mb-6">
          Pronto a scrivere la tua storia?
        </h2>
        <p className="text-zinc-400 mb-10 max-w-md mx-auto text-lg">
          Keeper è in accesso su invito. Prova subito la demo gratuita — nessun account necessario.
        </p>
        <a
          href="https://keeper-narrative-engine.vercel.app/demo"
          className="inline-block px-10 py-4 bg-amber-400 text-black font-bold text-lg rounded-xl hover:bg-amber-300 transition-colors"
        >
          Prova la demo gratuita
        </a>
      </section>

      {/* FOOTER */}
      <footer className="py-8 px-6 border-t border-zinc-800 flex flex-col md:flex-row items-center justify-between max-w-6xl mx-auto gap-4">
        <p className="text-zinc-500 text-sm">Keeper © 2026</p>
        <a
          href="https://github.com/Flame0510/keeper-landing"
          target="_blank"
          rel="noopener noreferrer"
          className="text-zinc-400 hover:text-zinc-100 text-sm transition-colors"
        >
          GitHub →
        </a>
      </footer>

    </main>
  );
}
