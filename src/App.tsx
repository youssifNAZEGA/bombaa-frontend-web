
function App() {
  return (
    <main className="min-h-screen bg-surface-default text-text-primary">
      <header className="flex items-center justify-between border-b border-border-default px-6 py-5">
        <a href="/" className="text-2xl font-bold tracking-tight">
          BOMBAA<span className="text-text-secondary">.</span>
        </a>

        <span className="text-sm text-text-secondary">
          E-commerce Platform
        </span>
      </header>

      <section className="mx-auto flex min-h-[70vh] max-w-5xl flex-col items-center justify-center px-6 text-center">
        <span className="mb-5 rounded-full border border-border-default bg-surface-subtle px-4 py-2 text-xs font-semibold uppercase tracking-widest">
          Notre plateforme
        </span>

        <h1 className="mb-5 text-5xl font-bold tracking-tight">
          Bienvenue chez BOMBAA.
        </h1>

        <p className="max-w-xl text-base leading-relaxed text-text-secondary">
          Une nouvelle expérience de shopping, pensée pour vous
          offrir simplicité, qualité et confiance.
        </p>

        <div className="mt-8 flex flex-wrap justify-center gap-3">
          <button className="rounded-md bg-brand-primary px-6 py-3 text-sm font-semibold text-white transition hover:bg-brand-secondary">
            Découvrir la boutique
          </button>

          <button className="rounded-md border border-border-default px-6 py-3 text-sm font-semibold transition hover:bg-surface-subtle">
            En savoir plus
          </button>
        </div>
      </section>

      <footer className="border-t border-border-default px-6 py-5 text-center text-xs text-text-secondary">
        © {new Date().getFullYear()} BOMBAA. Tous droits réservés.
      </footer>
    </main>
  )
}

export default App
