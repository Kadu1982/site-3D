import { CatalogTabs } from "../catalog-tabs";
import { catalogTabs, utilityLines } from "../site-content";

export const metadata = {
  title: "Archon | Utilidades e Criativos",
  description:
    "Catalogo de impressao 3D para casa, presentes, decoracao, pets e itens de mesa.",
};

export default function UtilidadesPage() {
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
              href="/tecnico"
              className="border border-[#8d7d6a] px-4 py-2 text-xs font-bold uppercase tracking-[0.18em] text-[#201915] transition hover:border-[#c99a4a] hover:text-[#7a5c2c]"
            >
              Linha tecnica
            </a>
          </header>

          <div className="grid min-h-[560px] items-center gap-10 py-14 lg:grid-cols-[0.92fr_1.08fr]">
            <div>
              <p className="text-sm font-bold uppercase tracking-[0.3em] text-[#8a6428]">
                Utilidades e criativos
              </p>
              <h1 className="mt-5 max-w-3xl text-4xl font-black leading-[1.05] text-[#201915] sm:text-6xl">
                Catalogo leve, bonito e pronto para gerar compra.
              </h1>
              <p className="mt-6 max-w-2xl text-lg leading-8 text-[#4d4033]">
                Esta pagina foi desenhada para vender pecas de uso cotidiano, presentes e itens que nao exigem conversa tecnica longa.
              </p>
              <a
                href="#catalogo"
                className="mt-8 inline-flex bg-[#c99a4a] px-6 py-4 text-sm font-black uppercase tracking-[0.18em] text-white"
              >
                Ver catalogo
              </a>
            </div>

            <div className="grid grid-cols-2 gap-3 sm:grid-cols-3">
              {utilityLines.map((line) => (
                <div
                  key={line}
                  className="border border-[#dccfb9] bg-white px-4 py-5 text-sm font-bold shadow-[0_10px_28px_rgba(64,48,28,0.05)]"
                >
                  {line}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white px-5 py-14 sm:px-8 lg:px-10">
        <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-3">
          <article>
            <h2 className="text-2xl font-black text-[#201915]">Sem complicacao</h2>
            <p className="mt-4 leading-7 text-[#4d4234]">
              A copy e curta porque o comprador ja sabe o que esta vendo. O objetivo e reduzir atrito na decisao.
            </p>
          </article>
          <article>
            <h2 className="text-2xl font-black text-[#201915]">Linha modular</h2>
            <p className="mt-4 leading-7 text-[#4d4234]">
              Voce pode trocar o mix de produtos sem mudar a estrutura da pagina, so as abas.
            </p>
          </article>
          <article>
            <h2 className="text-2xl font-black text-[#201915]">Visual de loja</h2>
            <p className="mt-4 leading-7 text-[#4d4033]">
              Um produto simples fica mais forte quando a composicao, a tipografia e os blocos de categoria ja sao bons.
            </p>
          </article>
        </div>
      </section>

      <CatalogTabs
        accentLabel="Abas de produtos"
        className="mx-auto max-w-7xl px-5 py-16 sm:px-8 lg:px-10"
        compact
        title="Navegue pelas abas e mostre apenas os produtos da categoria certa."
        tabs={catalogTabs}
      />

      <section className="border-y border-[#dccfb9] bg-[#f9f4eb] px-5 py-16 sm:px-8 lg:px-10">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.9fr_1.1fr]">
          <div>
            <p className="text-sm font-black uppercase tracking-[0.34em] text-[#8a6428]">
              Produtos em destaque
            </p>
            <h2 className="mt-4 text-3xl font-black text-[#201915] sm:text-5xl">
              Itens pequenos, faceis de entender e bons para vender em colecao.
            </h2>
          </div>
          <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
            {catalogTabs[0]?.products.slice(0, 3).map((product) => (
              <article
                key={product.title}
                className="border border-[#dccfb9] bg-white p-5 shadow-[0_10px_28px_rgba(64,48,28,0.05)]"
              >
                <p className="text-xs font-bold uppercase tracking-[0.24em] text-[#8a6428]">
                  Casa e organizacao
                </p>
                <h3 className="mt-3 text-lg font-black text-[#201915]">
                  {product.title}
                </h3>
                <p className="mt-3 text-sm leading-6 text-[#4d4033]">
                  {product.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
