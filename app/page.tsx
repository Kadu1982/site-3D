import {
  commercialSafetyNote,
  featuredCollections,
  featuredProducts,
  orderFlow,
} from "./site-content";

export const metadata = {
  title: "Archon | Catalogo de Impressao 3D",
  description:
    "Molde de site para vender produtos de impressao 3D com colecoes, catalogo e chamadas comerciais claras.",
};

export default function Home() {
  return (
    <main className="min-h-screen bg-[radial-gradient(circle_at_top,_rgba(211,179,123,0.22),_transparent_30%),linear-gradient(180deg,#f9f5ee_0%,#f4eee4_48%,#efe7da_100%)] text-[#201915]">
      <section className="relative overflow-hidden border-b border-[#dccfb9]">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-18"
          style={{ backgroundImage: "url('/archon-brand-preview.png')" }}
        />
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(249,245,238,0.96)_0%,rgba(249,245,238,0.84)_42%,rgba(249,245,238,0.42)_100%)]" />
        <div className="relative mx-auto max-w-7xl px-5 py-8 sm:px-8 lg:px-10">
          <header className="flex items-center justify-between gap-4">
            <div>
              <p className="text-xs uppercase tracking-[0.42em] text-[#c99a4a]">
                Archon
              </p>
              <p className="mt-2 text-sm text-[#6c5d4b]">
                Catalogo de impressao 3D • vitrines de produto • molde reutilizavel
              </p>
            </div>
            <a
              href="/utilidades"
              className="hidden border border-[#c99a4a]/45 px-4 py-2 text-xs font-bold uppercase tracking-[0.2em] text-[#7a5c2c] transition hover:bg-[#c99a4a] hover:text-white sm:inline-flex"
            >
              Ver colecao pronta
            </a>
          </header>

          <div className="grid min-h-[620px] items-center gap-10 py-14 lg:grid-cols-[0.98fr_1.02fr]">
            <div>
              <p className="text-sm uppercase tracking-[0.34em] text-[#c99a4a]">
                Toda criacao tem uma origem
              </p>
              <h1 className="mt-5 max-w-2xl text-4xl font-semibold leading-[1.02] text-[#201915] sm:text-6xl">
                Catalogo de impressao 3D pronto para vender.
              </h1>
              <p className="mt-6 max-w-xl text-lg leading-8 text-[#4d4033]">
                Este projeto virou um molde: colecoes, cards e chamadas ja ficam organizados para voce publicar produtos de casa, pets, decoracao e setup sem refazer a estrutura toda vez.
              </p>
              <div className="mt-9 flex flex-wrap gap-3">
                <a
                  href="/utilidades"
                  className="bg-[#c99a4a] px-6 py-4 text-center text-sm font-bold uppercase tracking-[0.18em] text-white transition hover:bg-[#b98a3b]"
                >
                  Ver utilidades
                </a>
                <a
                  href="/tecnico"
                  className="border border-[#8d7d6a] px-6 py-4 text-center text-sm font-bold uppercase tracking-[0.18em] text-[#201915] transition hover:border-[#c99a4a] hover:text-[#7a5c2c]"
                >
                  Ver linha tecnica
                </a>
              </div>
              <p className="mt-6 max-w-xl text-sm leading-6 text-[#7a6d5d]">
                {commercialSafetyNote}
              </p>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              {featuredCollections.map((collection) => (
                <article
                  key={collection.title}
                  className="border border-[#d8c9b0] bg-white/75 p-5 shadow-[0_20px_50px_rgba(64,48,28,0.08)] backdrop-blur-[1px]"
                >
                  <p className="text-xs font-bold uppercase tracking-[0.28em] text-[#c99a4a]">
                    {collection.eyebrow}
                  </p>
                  <h2 className="mt-3 text-xl font-semibold text-[#201915]">
                    {collection.title}
                  </h2>
                  <p className="mt-3 text-sm leading-6 text-[#4d4033]">
                    {collection.summary}
                  </p>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {collection.tags.map((tag) => (
                      <span
                        key={tag}
                        className="border border-[#d9c8ad] bg-[#fbf7f0] px-3 py-1.5 text-xs font-semibold text-[#5d4d39]"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-14 sm:px-8 lg:px-10">
        <div className="grid gap-10 lg:grid-cols-[0.82fr_1.18fr]">
          <div>
            <p className="text-sm uppercase tracking-[0.34em] text-[#c99a4a]">
              O que entra no catalogo
            </p>
            <h2 className="mt-4 text-3xl font-semibold text-[#201915] sm:text-5xl">
              Produto claro vende. Categoria clara vende mais rapido.
            </h2>
          </div>
          <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 xl:grid-cols-4">
            {featuredProducts.map((product) => (
              <article
                key={product.title}
                className="border border-[#dccfb9] bg-white p-4 shadow-[0_14px_30px_rgba(64,48,28,0.06)]"
              >
                <p className="text-xs font-bold uppercase tracking-[0.24em] text-[#9a7842]">
                  {product.category}
                </p>
                <h3 className="mt-3 text-lg font-semibold text-[#201915]">
                  {product.title}
                </h3>
                <p className="mt-3 text-sm leading-6 text-[#5e5144]">
                  {product.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="border-y border-[#dccfb9] bg-[#f9f4eb] px-5 py-16 sm:px-8 lg:px-10">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.86fr_1.14fr]">
          <div>
            <p className="text-sm uppercase tracking-[0.34em] text-[#c99a4a]">
              Como vender
            </p>
            <h2 className="mt-4 text-3xl font-semibold text-[#201915] sm:text-5xl">
              Um fluxo curto para montar paginas de produto sem retrabalho.
            </h2>
          </div>
          <div className="grid gap-4">
            {orderFlow.map((step, index) => (
              <div
                key={step}
                className="flex gap-4 border border-[#dccfb9] bg-white p-5 shadow-[0_10px_28px_rgba(64,48,28,0.05)]"
              >
                <span className="flex h-9 w-9 shrink-0 items-center justify-center border border-[#c99a4a] bg-[#fff8ef] text-sm font-bold text-[#8a6428]">
                  {index + 1}
                </span>
                <p className="pt-1 leading-7 text-[#4d4033]">{step}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto grid max-w-7xl gap-10 px-5 py-16 sm:px-8 lg:grid-cols-[1fr_1fr] lg:px-10">
        <div>
          <p className="text-sm uppercase tracking-[0.34em] text-[#c99a4a]">
            Proximo uso
          </p>
          <h2 className="mt-4 text-3xl font-semibold text-[#201915] sm:text-5xl">
            O molde ja deixa claro o que muda e o que fica fixo.
          </h2>
          <p className="mt-6 text-lg leading-8 text-[#4d4033]">
            Voce so troca os produtos, as fotos e as cores de campanha. A arquitetura do site continua a mesma, o que acelera novas colecoes e reduz bagunca editorial.
          </p>
        </div>
        <div className="grid gap-3 sm:grid-cols-2">
          {featuredCollections.map((collection) => (
            <div
              key={collection.eyebrow}
              className="border border-[#dccfb9] bg-white px-4 py-5 shadow-[0_10px_28px_rgba(64,48,28,0.05)]"
            >
              <p className="text-xs font-bold uppercase tracking-[0.24em] text-[#c99a4a]">
                {collection.eyebrow}
              </p>
              <p className="mt-3 text-sm leading-6 text-[#4d4033]">
                {collection.summary}
              </p>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
