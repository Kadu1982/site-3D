import { commercialSafetyNote, technicalStrengths } from "../site-content";

export const metadata = {
  title: "Archon | Linha Tecnica",
  description:
    "Pagina para pecas funcionais, prototipagem, reposicao e producao sob medida em impressao 3D.",
};

export default function TecnicoPage() {
  return (
    <main className="min-h-screen bg-[#070707] text-[#f3efe6]">
      <section className="relative overflow-hidden border-b border-[#c99a4a]/20">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-35"
          style={{ backgroundImage: "url('/archon-brand-preview.png')" }}
        />
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(7,7,7,0.98)_0%,rgba(7,7,7,0.88)_40%,rgba(7,7,7,0.35)_100%)]" />
        <div className="relative mx-auto max-w-7xl px-5 py-8 sm:px-8 lg:px-10">
          <header className="flex items-center justify-between gap-4">
            <a
              href="/"
              className="text-xs font-bold uppercase tracking-[0.38em] text-[#c99a4a]"
            >
              Archon
            </a>
            <a
              href="/utilidades"
              className="border border-[#c99a4a]/50 px-4 py-2 text-xs font-bold uppercase tracking-[0.18em] text-[#f0c46d] transition hover:bg-[#c99a4a] hover:text-[#090909]"
            >
              Ir para utilidades
            </a>
          </header>

          <div className="grid min-h-[620px] items-center gap-10 py-14 lg:grid-cols-[0.9fr_1.1fr]">
            <div>
              <p className="text-sm font-bold uppercase tracking-[0.34em] text-[#c99a4a]">
                Linha tecnica
              </p>
              <h1 className="mt-5 max-w-3xl text-4xl font-semibold leading-[1.05] text-white sm:text-6xl">
                Pecas funcionais, prototipos e reposicoes em impressao 3D.
              </h1>
              <p className="mt-6 max-w-2xl text-lg leading-8 text-[#d7d0c2]">
                Use esta rota quando o pedido precisa de medida, finalidade e ajuste sob demanda. Ela conversa com producao leve, prototipagem e pecas de uso pratico.
              </p>
              <a
                href="#pedido"
                className="mt-8 inline-flex bg-[#c99a4a] px-6 py-4 text-sm font-black uppercase tracking-[0.18em] text-[#090909]"
              >
                Pedir orcamento
              </a>
            </div>
            <div className="grid gap-3 sm:grid-cols-2">
              {technicalStrengths.map((item) => (
                <div
                  key={item}
                  className="border border-[#c99a4a]/20 bg-white/[0.04] p-5"
                >
                  <p className="text-sm font-semibold text-[#eadfc9]">{item}</p>
                </div>
              ))}
              <div className="border border-[#c99a4a]/20 bg-[#11100e] p-5 sm:col-span-2">
                <p className="text-xs font-bold uppercase tracking-[0.24em] text-[#c99a4a]">
                  Regra comercial
                </p>
                <p className="mt-3 text-sm leading-6 text-[#d7d0c2]">
                  {commercialSafetyNote}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto grid max-w-7xl gap-8 px-5 py-16 sm:px-8 lg:grid-cols-3 lg:px-10">
        <article className="border border-white/10 bg-white/[0.035] p-6">
          <h2 className="text-2xl font-semibold text-white">Pecas de uso real</h2>
          <p className="mt-4 leading-7 text-[#cfc7b7]">
            Organizadores, suportes, gabaritos, encaixes e pecas de mesa podem ser vendidos como linha funcional com descricao curta e clara.
          </p>
        </article>
        <article className="border border-white/10 bg-white/[0.035] p-6">
          <h2 className="text-2xl font-semibold text-white">Prototipagem simples</h2>
          <p className="mt-4 leading-7 text-[#cfc7b7]">
            Quando o cliente quer validar formato ou encaixe, a rota tecnica vira pagina ideal para coleta de briefing.
          </p>
        </article>
        <article className="border border-white/10 bg-white/[0.035] p-6">
          <h2 className="text-2xl font-semibold text-white">Producao sob medida</h2>
          <p className="mt-4 leading-7 text-[#cfc7b7]">
            A pagina ja deixa espaco para cor, dimensao e acabamento, sem depender de formulario complexo.
          </p>
        </article>
      </section>

      <section
        id="pedido"
        className="border-y border-white/10 bg-[#11100e] px-5 py-16 sm:px-8 lg:px-10"
      >
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.86fr_1.14fr]">
          <div>
            <p className="text-sm uppercase tracking-[0.34em] text-[#c99a4a]">
              Pedidos via WhatsApp
            </p>
            <h2 className="mt-4 text-3xl font-semibold text-white sm:text-5xl">
              Estruture o pedido com medida, funcao e volume.
            </h2>
            <p className="mt-6 text-lg leading-8 text-[#d7d0c2]">
              Essa pagina existe para filtrar pedidos que realmente precisam de producao tecnica, nao so de vitrine.
            </p>
          </div>
          <div className="bg-black/30 p-6 text-[#f3efe6]">
            <ol className="space-y-4">
              {[
                "Envie a ideia, referencia ou arquivo.",
                "Defina o uso, a medida e o material desejado.",
                "Receba o retorno com possibilidade de producao.",
              ].map((step, index) => (
                <li key={step} className="flex gap-4">
                  <span className="flex h-9 w-9 shrink-0 items-center justify-center border border-[#c99a4a] text-sm font-bold text-[#f0c46d]">
                    {index + 1}
                  </span>
                  <span className="pt-1 leading-7 text-[#ded4c1]">{step}</span>
                </li>
              ))}
            </ol>
            <a
              className="mt-8 block border border-[#c99a4a] px-5 py-4 text-center text-sm font-bold uppercase tracking-[0.18em] text-[#f0c46d] transition hover:bg-[#c99a4a] hover:text-[#090909]"
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
