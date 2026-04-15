'use client';

export default function Home() {
  return (
    <main
      style={{ backgroundColor: '#F4E4C1', color: '#2C1810', fontFamily: "'Crimson Text', serif" }}
      className="min-h-screen"
    >

      {/* HERO */}
      <section className="flex flex-col items-center justify-center min-h-screen px-6 text-center">
        <span
          className="inline-block mb-6 px-4 py-1.5 rounded-full text-sm font-medium"
          style={{
            border: '1px solid #B8860B',
            backgroundColor: 'rgba(184,134,11,0.1)',
            color: '#8B1A1A',
          }}
        >
          🎲 Accesso su invito
        </span>
        <h1
          className="text-7xl md:text-9xl font-black tracking-tighter mb-4"
          style={{ fontFamily: "'Cinzel', serif", color: '#8B1A1A' }}
        >
          Keeper
        </h1>
        <p
          className="text-2xl md:text-3xl font-semibold mb-6"
          style={{ fontFamily: "'Cinzel', serif", color: '#2C1810' }}
        >
          Il Game Master che non dorme mai.
        </p>
        <p className="max-w-xl mb-10 text-lg leading-relaxed" style={{ color: '#6B4C3B' }}>
          Un motore narrativo AI che trasforma ogni tua scelta in una storia. Sessioni persistenti,
          regole D&amp;D leggere, immagini generate al volo. Niente DM umano necessario.
        </p>
        <a
          href="https://keeper-narrative-engine.vercel.app/demo"
          className="px-8 py-4 font-bold text-lg rounded-xl transition-colors"
          style={{ backgroundColor: '#8B1A1A', color: '#F4E4C1' }}
          onMouseOver={(e) => (e.currentTarget.style.backgroundColor = '#6B0F0F')}
          onMouseOut={(e) => (e.currentTarget.style.backgroundColor = '#8B1A1A')}
        >
          Prova la demo gratuita →
        </a>
        <a
          href="https://keeper-narrative-engine.vercel.app/login"
          className="text-sm transition-colors mt-4"
          style={{ color: '#6B4C3B' }}
        >
          Hai già un account? Accedi →
        </a>
        <div className="text-center text-2xl my-8" style={{ color: '#B8860B' }}>⚜ ✦ ⚜</div>
      </section>

      {/* HOW IT WORKS */}
      <section className="py-24 px-6" style={{ backgroundColor: '#EDD9A3' }}>
        <div className="max-w-5xl mx-auto">
          <h2
            className="text-3xl font-bold text-center mb-4"
            style={{ fontFamily: "'Cinzel', serif", color: '#8B1A1A' }}
          >
            Come funziona
          </h2>
          <p className="text-center mb-16" style={{ color: '#6B4C3B' }}>
            Tre passi per entrare nell&apos;avventura.
          </p>
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
                className="rounded-lg p-8 flex flex-col items-center text-center"
                style={{
                  backgroundColor: '#F4E4C1',
                  border: '1px solid #C4A882',
                  boxShadow: '0 2px 8px rgba(44,24,16,0.15)',
                }}
              >
                <span className="text-4xl mb-4">{step.icon}</span>
                <h3
                  className="text-xl font-bold mb-3"
                  style={{ fontFamily: "'Cinzel', serif", color: '#2C1810' }}
                >
                  {step.title}
                </h3>
                <p className="leading-relaxed" style={{ color: '#6B4C3B' }}>{step.desc}</p>
              </div>
            ))}
          </div>
          <div className="text-center text-2xl my-8" style={{ color: '#B8860B' }}>⚜ ✦ ⚜</div>
        </div>
      </section>

      {/* FEATURES */}
      <section className="py-24 px-6" style={{ backgroundColor: '#F4E4C1' }}>
        <div className="max-w-5xl mx-auto">
          <h2
            className="text-3xl font-bold text-center mb-4"
            style={{ fontFamily: "'Cinzel', serif", color: '#8B1A1A' }}
          >
            Funzionalità
          </h2>
          <p className="text-center mb-16" style={{ color: '#6B4C3B' }}>
            Tutto ciò di cui hai bisogno per giocare.
          </p>
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
                className="rounded-lg p-6 relative"
                style={{
                  backgroundColor: '#EDD9A3',
                  border: '1px solid #C4A882',
                  boxShadow: '0 2px 8px rgba(44,24,16,0.15)',
                }}
              >
                {feat.soon && (
                  <span
                    className="absolute top-4 right-4 text-xs px-2 py-0.5 rounded-full"
                    style={{ border: '1px solid #C4A882', color: '#6B4C3B' }}
                  >
                    Coming soon
                  </span>
                )}
                <span className="text-3xl mb-3 block">{feat.icon}</span>
                <h3
                  className="text-lg font-bold mb-2"
                  style={{ fontFamily: "'Cinzel', serif", color: '#2C1810' }}
                >
                  {feat.title}
                </h3>
                <p className="text-sm leading-relaxed" style={{ color: '#6B4C3B' }}>{feat.desc}</p>
              </div>
            ))}
          </div>
          <div className="text-center text-2xl my-8" style={{ color: '#B8860B' }}>⚜ ✦ ⚜</div>
        </div>
      </section>

      {/* PREZZI */}
      <section className="py-24 px-6" style={{ backgroundColor: '#EDD9A3' }}>
        <div className="max-w-6xl mx-auto">
          <h2
            className="text-3xl font-bold text-center mb-4"
            style={{ fontFamily: "'Cinzel', serif", color: '#8B1A1A' }}
          >
            Piani
          </h2>
          <p className="text-center mb-16" style={{ color: '#6B4C3B' }}>
            Inizia gratis. Scala quando vuoi.
          </p>
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
                name: "Story Seeker ⭐",
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
                className="rounded-lg p-8 flex flex-col"
                style={{
                  backgroundColor: plan.highlight ? '#F4E4C1' : '#F4E4C1',
                  border: plan.highlight ? '3px double #8B1A1A' : '1px solid #C4A882',
                  boxShadow: plan.highlight
                    ? '0 4px 16px rgba(139,26,26,0.25)'
                    : '0 2px 8px rgba(44,24,16,0.15)',
                }}
              >
                {plan.highlight && (
                  <span
                    className="text-xs font-bold uppercase tracking-wider mb-4"
                    style={{ color: '#8B1A1A' }}
                  >
                    Più popolare
                  </span>
                )}
                <h3
                  className="text-xl font-bold mb-1"
                  style={{
                    fontFamily: "'Cinzel', serif",
                    color: plan.highlight ? '#8B1A1A' : '#2C1810',
                  }}
                >
                  {plan.name}
                </h3>
                <div className="flex items-end gap-0.5 mb-6">
                  <span className="text-4xl font-black" style={{ color: '#2C1810' }}>{plan.price}</span>
                  <span className="mb-1" style={{ color: '#6B4C3B' }}>{plan.period}</span>
                </div>
                <ul className="space-y-2 flex-1">
                  {plan.perks.map((perk) => (
                    <li key={perk} className="flex items-center gap-2 text-sm" style={{ color: '#2C1810' }}>
                      <span style={{ color: '#B8860B' }}>✓</span>
                      {perk}
                    </li>
                  ))}
                </ul>
                <a
                  href="https://keeper-narrative-engine.vercel.app/login"
                  className="mt-8 block text-center py-3 rounded-lg font-bold transition-colors"
                  style={{ backgroundColor: '#8B1A1A', color: '#F4E4C1' }}
                >
                  Inizia ora
                </a>
              </div>
            ))}
          </div>
          <p className="text-center text-sm mt-8" style={{ color: '#6B4C3B' }}>
            * I piani a pagamento sono in arrivo. Durante la beta chiusa, l&apos;accesso è gratuito per tutti gli utenti invitati.
          </p>
          <div className="text-center text-2xl my-8" style={{ color: '#B8860B' }}>⚜ ✦ ⚜</div>
        </div>
      </section>

      {/* CTA FINALE */}
      <section className="py-24 px-6 text-center" style={{ backgroundColor: '#2C1810' }}>
        <h2
          className="text-4xl md:text-5xl font-black mb-6"
          style={{ fontFamily: "'Cinzel', serif", color: '#F4E4C1' }}
        >
          Pronto a scrivere la tua storia?
        </h2>
        <p className="mb-10 max-w-md mx-auto text-lg" style={{ color: '#C4A882' }}>
          Keeper è in accesso su invito. Prova subito la demo gratuita — nessun account necessario.
        </p>
        <a
          href="https://keeper-narrative-engine.vercel.app/demo"
          className="inline-block px-10 py-4 font-bold text-lg rounded-xl transition-colors"
          style={{ backgroundColor: '#B8860B', color: '#2C1810' }}
        >
          Prova la demo gratuita
        </a>
      </section>

      {/* FOOTER */}
      <footer
        className="py-8 px-6 flex flex-col md:flex-row items-center justify-between max-w-6xl mx-auto gap-4"
        style={{ backgroundColor: '#2C1810' }}
      >
        <p className="text-sm" style={{ color: '#C4A882' }}>Keeper © 2026</p>
        <a
          href="https://github.com/Flame0510/keeper-landing"
          target="_blank"
          rel="noopener noreferrer"
          className="text-sm transition-colors"
          style={{ color: '#C4A882' }}
        >
          GitHub →
        </a>
      </footer>

    </main>
  );
}
