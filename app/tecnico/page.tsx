import { commercialSafetyNote, technicalStrengths } from "../site-content";

export const metadata = {
  title: "Archon | Linha Tecnica",
  description:
    "Pagina para pecas funcionais, prototipagem, reposicao e producao sob medida em impressao 3D.",
};

export default function TecnicoPage() {
  return (
    <main className="min-h-screen bg-[#f6f1e8] text-[#201915]">
      <section className="relative overflow-hidden border-b border-[#dccfb9]">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(211,179,123,0.16),transparent_30%),linear-gradient(135deg,#fbf7f0_0%,#f6f1e8_54%,#eee5d7_100%)]" />
        <div className="relative mx-auto max-w-7xl px-5 py-8 sm:px-8 lg:px-10">
          <header className="flex items-center justify-between gap-4">
            <a
              href="/"
              className="text-xs font-bold uppercase tracking-[0.38em] text-[#8a6428]"
            >
              Archon
            </a>
            <a
              href="/utilidades"
              className="border border-[#8d7d6a] px-4 py-2 text-xs font-bold uppercase tracking-[0.18em] text-[#201915] transition hover:border-[#c99a4a] hover:text-[#7a5c2c]"
            >
              Ir para utilidades
            </a>
          </header>

          <div className="grid min-h-[620px] items-center gap-10 py-14 lg:grid-cols-[0.9fr_1.1fr]">
            <div>
              <p className="text-sm font-bold uppercase tracking-[0.34em] text-[#c99a4a]">
                Linha tecnica
              </p>
              <h1 className="mt-5 max-w-3xl text-4xl font-semibold leading-[1.05] text-[#201915] sm:text-6xl">
                Pecas funcionais, prototipos e reposicoes em impressao 3D.
              </h1>
              <p className="mt-6 max-w-2xl text-lg leading-8 text-[#4d4033]">
                Use esta rota quando o pedido precisa de medida, finalidade e ajuste sob demanda. Ela conversa com producao leve, prototipagem e pecas de uso pratico.
              </p>
              <a
                href="#pedido"
                className="mt-8 inline-flex bg-[#c99a4a] px-6 py-4 text-sm font-black uppercase tracking-[0.18em] text-white"
              >
                Pedir orcamento
              </a>
            </div>
            <div className="grid gap-3 sm:grid-cols-2">
              {technicalStrengths.map((item) => (
                <div
                  key={item}
                  className="border border-[#dccfb9] bg-white p-5 shadow-[0_10px_28px_rgba(64,48,28,0.05)]"
                >
                  <p className="text-sm font-semibold text-[#4d4033]">{item}</p>
                </div>
              ))}
              <div className="border border-[#dccfb9] bg-[#fbf7f0] p-5 sm:col-span-2">
                <p className="text-xs font-bold uppercase tracking-[0.24em] text-[#8a6428]">
                  Regra comercial
                </p>
                <p className="mt-3 text-sm leading-6 text-[#4d4033]">
                  {commercialSafetyNote}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto grid max-w-7xl gap-8 px-5 py-16 sm:px-8 lg:grid-cols-3 lg:px-10">
        <article className="border border-[#dccfb9] bg-white p-6 shadow-[0_10px_28px_rgba(64,48,28,0.05)]">
          <h2 className="text-2xl font-semibold text-[#201915]">Pecas de uso real</h2>
          <p className="mt-4 leading-7 text-[#4d4033]">
            Organizadores, suportes, gabaritos, encaixes e pecas de mesa podem ser vendidos como linha funcional com descricao curta e clara.
          </p>
        </article>
        <article className="border border-[#dccfb9] bg-white p-6 shadow-[0_10px_28px_rgba(64,48,28,0.05)]">
          <h2 className="text-2xl font-semibold text-[#201915]">Prototipagem simples</h2>
          <p className="mt-4 leading-7 text-[#4d4033]">
            Quando o cliente quer validar formato ou encaixe, a rota tecnica vira pagina ideal para coleta de briefing.
          </p>
        </article>
        <article className="border border-[#dccfb9] bg-white p-6 shadow-[0_10px_28px_rgba(64,48,28,0.05)]">
          <h2 className="text-2xl font-semibold text-[#201915]">Producao sob medida</h2>
          <p className="mt-4 leading-7 text-[#4d4033]">
            A pagina ja deixa espaco para cor, dimensao e acabamento, sem depender de formulario complexo.
          </p>
        </article>
      </section>

      <section
        id="pedido"
        className="border-y border-[#dccfb9] bg-[#f9f4eb] px-5 py-16 sm:px-8 lg:px-10"
      >
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.86fr_1.14fr]">
          <div>
            <p className="text-sm uppercase tracking-[0.34em] text-[#c99a4a]">
              Pedidos via WhatsApp
            </p>
            <h2 className="mt-4 text-3xl font-semibold text-[#201915] sm:text-5xl">
              Estruture o pedido com medida, funcao e volume.
            </h2>
            <p className="mt-6 text-lg leading-8 text-[#4d4033]">
              Essa pagina existe para filtrar pedidos que realmente precisam de producao tecnica, nao so de vitrine.
            </p>
          </div>
          <div className="bg-white p-6 shadow-[0_10px_28px_rgba(64,48,28,0.05)]">
            <ol className="space-y-4">
              {[
                "Envie a ideia, referencia ou arquivo.",
                "Defina o uso, a medida e o material desejado.",
                "Receba o retorno com possibilidade de producao.",
              ].map((step, index) => (
                <li key={step} className="flex gap-4">
                  <span className="flex h-9 w-9 shrink-0 items-center justify-center border border-[#c99a4a] bg-[#fff8ef] text-sm font-bold text-[#8a6428]">
                    {index + 1}
                  </span>
                  <span className="pt-1 leading-7 text-[#4d4033]">{step}</span>
                </li>
              ))}
            </ol>
            <a
              className="mt-8 block border border-[#c99a4a] px-5 py-4 text-center text-sm font-bold uppercase tracking-[0.18em] text-[#8a6428] transition hover:bg-[#c99a4a] hover:text-white"
              href="https://wa.me/"
            >
              Inserir numero do Hermes
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
