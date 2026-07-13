import { featuredProducts, utilityLines } from "../site-content";

export const metadata = {
  title: "Archon | Utilidades e Criativos",
  description:
    "Catalogo de impressao 3D para casa, presentes, decoracao, pets e itens de mesa.",
};

export default function UtilidadesPage() {
  return (
    <main className="min-h-screen bg-[#f3efe6] text-[#17120b]">
      <section className="relative overflow-hidden border-b border-[#c99a4a]/20">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(201,154,74,0.18),transparent_30%),linear-gradient(135deg,#f8f3ea_0%,#f3efe6_55%,#ece2d0_100%)]" />
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
              className="border border-[#17120b]/20 px-4 py-2 text-xs font-bold uppercase tracking-[0.18em]"
            >
              Linha tecnica
            </a>
          </header>

          <div className="grid min-h-[560px] items-center gap-10 py-14 lg:grid-cols-[0.92fr_1.08fr]">
            <div>
              <p className="text-sm font-bold uppercase tracking-[0.3em] text-[#8a6428]">
                Utilidades e criativos
              </p>
              <h1 className="mt-5 max-w-3xl text-4xl font-black leading-[1.05] sm:text-6xl">
                Catalogo leve, bonito e pronto para gerar compra.
              </h1>
              <p className="mt-6 max-w-2xl text-lg leading-8 text-[#3d3427]">
                Esta pagina foi desenhada para vender pecas de uso cotidiano, presentes e itens que nao exigem conversa tecnica longa. O foco e clareza, apelo visual e decisao rapida.
              </p>
              <a
                href="#pedido"
                className="mt-8 inline-flex bg-[#c99a4a] px-6 py-4 text-sm font-black uppercase tracking-[0.18em] text-[#090909]"
              >
                Pedir pelo WhatsApp
              </a>
            </div>

            <div className="grid grid-cols-2 gap-3 sm:grid-cols-3">
              {utilityLines.map((line) => (
                <div
                  key={line}
                  className="border border-[#c99a4a]/28 bg-white px-4 py-5 text-sm font-bold shadow-[0_16px_44px_rgba(0,0,0,0.05)]"
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
            <h2 className="text-2xl font-black">Sem complicacao</h2>
            <p className="mt-4 leading-7 text-[#4d4234]">
              A copy e curta porque o comprador ja sabe o que esta vendo. O objetivo e reduzir atrito na decisao.
            </p>
          </article>
          <article>
            <h2 className="text-2xl font-black">Linha modular</h2>
            <p className="mt-4 leading-7 text-[#4d4234]">
              Voce pode trocar o mix de produtos sem mudar a estrutura da pagina, so os cards e a vitrine principal.
            </p>
          </article>
          <article>
            <h2 className="text-2xl font-black">Visual de loja</h2>
            <p className="mt-4 leading-7 text-[#4d4234]">
              Um produto simples fica mais forte quando a composicao, a tipografia e os blocos de categoria ja sao bons.
            </p>
          </article>
        </div>
      </section>

      <section className="border-y border-[#e0d3bc] bg-[#faf6ef] px-5 py-16 sm:px-8 lg:px-10">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.9fr_1.1fr]">
          <div>
            <p className="text-sm font-black uppercase tracking-[0.34em] text-[#8a6428]">
              Produtos em destaque
            </p>
            <h2 className="mt-4 text-3xl font-black sm:text-5xl">
              Itens pequenos, faceis de entender e bons para vender em colecao.
            </h2>
          </div>
          <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
            {featuredProducts.map((product) => (
              <article
                key={product.title}
                className="border border-[#c99a4a]/20 bg-white p-5"
              >
                <p className="text-xs font-bold uppercase tracking-[0.24em] text-[#8a6428]">
                  {product.category}
                </p>
                <h3 className="mt-3 text-lg font-black">{product.title}</h3>
                <p className="mt-3 text-sm leading-6 text-[#4d4234]">
                  {product.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="pedido" className="bg-[#c99a4a] px-5 py-16 sm:px-8 lg:px-10">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.86fr_1.14fr]">
          <div>
            <p className="text-sm font-black uppercase tracking-[0.34em]">
              Pedidos via WhatsApp
            </p>
            <h2 className="mt-4 text-3xl font-black sm:text-5xl">
              Nossos agentes recebem a demanda e devolvem a direcao certa.
            </h2>
            <p className="mt-6 text-lg leading-8">
              A pessoa nao precisa entender de impressao 3D. Ela so precisa saber o que quer vender ou mandar como ideia.
            </p>
          </div>
          <div className="bg-[#090909] p-6 text-[#f3efe6]">
            <ol className="space-y-4">
              {[
                "Enviar ideia, foto ou referencia.",
                "Definir funcao, cor e faixa de preco.",
                "Receber sugestao de producao e ajuste do catalogo.",
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
              href="https://wa.me/"
              className="mt-8 block border border-[#c99a4a] px-5 py-4 text-center text-sm font-bold uppercase tracking-[0.18em] text-[#f0c46d]"
            >
              Inserir numero do Hermes
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
