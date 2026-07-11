import Image from "next/image";

const businessSegments = [
  {
    title: "Industrias e empresas",
    text: "Prototipos, pecas tecnicas, suportes, gabaritos, reposicoes e solucoes sob medida para operacao, teste e apresentacao.",
  },
  {
    title: "Construtoras e arquitetura",
    text: "Maquetes fisicas em impressao 3D para estudos, apresentacoes comerciais e materializacao de projetos.",
  },
  {
    title: "Publico geral",
    text: "Modelos prontos e personalizados para decoracao, linha pet, gamer, culinaria, fotografia, convites e lembrancas.",
  },
];

const productLines = [
  "Vasos e decoracao",
  "Luminarias",
  "Utensilios",
  "Linha pet",
  "Gamer",
  "Culinaria",
  "Fotografia",
  "Convites e lembrancas",
  "Prototipagem",
  "Maquetes",
];

const processSteps = [
  "Envie a ideia, medida, referencia ou arquivo 3D para o Hermes.",
  "A Archon avalia material, acabamento, viabilidade e prazo.",
  "A entrega e combinada conforme localidade e custo do envio.",
];

export const metadata = {
  title: "Archon | Impressao 3D, prototipagem e maquetes em Bauru-SP",
  description:
    "Impressao 3D para industrias, empresas, construtoras e publico geral. Pedidos e orcamentos atendidos pelo Agente Hermes no WhatsApp.",
};

export default function Home() {
  return (
    <main className="min-h-screen bg-[#070707] text-[#f3efe6]">
      <section className="relative overflow-hidden border-b border-[#c99a4a]/25">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_20%,rgba(201,154,74,0.2),transparent_34%),linear-gradient(115deg,rgba(255,255,255,0.05),transparent_42%)]" />
        <div className="relative mx-auto grid max-w-7xl gap-10 px-5 py-8 sm:px-8 lg:grid-cols-[1.04fr_0.96fr] lg:px-10 lg:py-14">
          <header className="flex items-center justify-between gap-4 lg:col-span-2">
            <div>
              <p className="text-xs uppercase tracking-[0.42em] text-[#c99a4a]">
                Archon
              </p>
              <p className="mt-2 text-sm text-[#bdb5a7]">
                Impressao 3D • Prototipagem • Solucoes criativas
              </p>
            </div>
            <a
              className="hidden border border-[#c99a4a]/60 px-4 py-2 text-sm font-semibold uppercase tracking-[0.18em] text-[#f6d38b] transition hover:bg-[#c99a4a] hover:text-[#080808] sm:inline-flex"
              href="#pedido"
            >
              Pedir orcamento
            </a>
          </header>

          <div className="flex flex-col justify-center py-8 lg:py-16">
            <p className="mb-5 max-w-xl text-sm uppercase tracking-[0.32em] text-[#c99a4a]">
              Toda Criacao Tem Uma Origem
            </p>
            <h1 className="max-w-3xl text-4xl font-semibold leading-[1.04] text-white sm:text-6xl lg:text-7xl">
              Ideias, prototipos e produtos fisicos em impressao 3D.
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-[#d7d0c2]">
              A Archon atende industrias, empresas, construtoras e clientes
              finais em Bauru-SP, associando tecnologia, escolha de material e
              acabamento ao tipo certo de aplicacao.
            </p>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <a
                className="bg-[#c99a4a] px-6 py-4 text-center text-sm font-bold uppercase tracking-[0.18em] text-[#090909] transition hover:bg-[#f0c46d]"
                href="#pedido"
              >
                Falar com o Hermes
              </a>
              <a
                className="border border-white/18 px-6 py-4 text-center text-sm font-bold uppercase tracking-[0.18em] text-white transition hover:border-[#c99a4a] hover:text-[#f0c46d]"
                href="#linhas"
              >
                Ver possibilidades
              </a>
            </div>
          </div>

          <div className="relative min-h-[360px] overflow-hidden border border-[#c99a4a]/25 bg-black/45 shadow-2xl shadow-black/60">
            <Image
              src="/archon-brand-preview.png"
              alt="Visualizacao da marca Archon com simbolo arquitetonico, compasso e camadas de impressao 3D"
              fill
              priority
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover"
            />
          </div>
        </div>
      </section>

      <section className="mx-auto grid max-w-7xl gap-5 px-5 py-14 sm:px-8 md:grid-cols-3 lg:px-10">
        {businessSegments.map((segment) => (
          <article
            key={segment.title}
            className="border border-white/10 bg-white/[0.035] p-6"
          >
            <h2 className="text-xl font-semibold text-white">
              {segment.title}
            </h2>
            <p className="mt-4 leading-7 text-[#cfc7b7]">{segment.text}</p>
          </article>
        ))}
      </section>

      <section
        id="linhas"
        className="border-y border-white/10 bg-[#11100e] px-5 py-16 sm:px-8 lg:px-10"
      >
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr]">
            <div>
              <p className="text-sm uppercase tracking-[0.32em] text-[#c99a4a]">
                O que podemos fazer
              </p>
              <h2 className="mt-4 text-3xl font-semibold text-white sm:text-5xl">
                Do tecnico ao cotidiano, a impressao certa para cada origem.
              </h2>
            </div>
            <div className="grid grid-cols-2 gap-3 sm:grid-cols-3">
              {productLines.map((line) => (
                <div
                  key={line}
                  className="border border-[#c99a4a]/20 bg-black/30 px-4 py-4 text-sm font-semibold text-[#eadfc9]"
                >
                  {line}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto grid max-w-7xl gap-10 px-5 py-16 sm:px-8 lg:grid-cols-[1fr_1fr] lg:px-10">
        <div>
          <p className="text-sm uppercase tracking-[0.32em] text-[#c99a4a]">
            Diferencial
          </p>
          <h2 className="mt-4 text-3xl font-semibold text-white sm:text-5xl">
            Material, tecnologia e finalidade precisam conversar.
          </h2>
        </div>
        <div className="space-y-5 text-lg leading-8 text-[#d7d0c2]">
          <p>
            A Archon nao trata impressao 3D como produto unico. Uma peca
            tecnica, uma maquete, uma luminaria e uma lembranca personalizada
            pedem materiais, preenchimento, resistencia, acabamento e prazo
            diferentes.
          </p>
          <p>
            Essa diferenciacao e o centro da proposta: associar tecnologia de
            impressao 3D ao uso real de cada pedido, evitando escolhas ruins de
            material e expectativas vagas.
          </p>
        </div>
      </section>

      <section
        id="pedido"
        className="bg-[#c99a4a] px-5 py-16 text-[#090909] sm:px-8 lg:px-10"
      >
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.92fr_1.08fr]">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.32em]">
              Pedidos com Hermes
            </p>
            <h2 className="mt-4 text-3xl font-black sm:text-5xl">
              O Agente Hermes cuida do primeiro atendimento no WhatsApp.
            </h2>
            <p className="mt-6 text-lg leading-8">
              O cliente envia a ideia, referencia ou arquivo. O Hermes organiza
              o pedido para a Archon avaliar viabilidade, material, prazo e
              forma de entrega.
            </p>
          </div>
          <div className="bg-[#090909] p-6 text-[#f3efe6]">
            <ol className="space-y-4">
              {processSteps.map((step, index) => (
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
            <p className="mt-4 text-sm leading-6 text-[#a99f8e]">
              Atendimento em Bauru-SP. Entregas combinadas caso a caso, porque
              custos dos Correios e transportes variam conforme destino,
              tamanho, peso e urgencia.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
