import Image from "next/image";

const businessSegments = [
  {
    title: "Indústrias e empresas",
    text: "Protótipos, peças técnicas, suportes, gabaritos, reposições e soluções sob medida para operação, teste e apresentação.",
  },
  {
    title: "Construtoras e arquitetura",
    text: "Maquetes físicas em impressão 3D para estudos, apresentações comerciais e materialização de projetos.",
  },
  {
    title: "Público geral",
    text: "Modelos prontos e personalizados para decoração, linha pet, gamer, culinária, fotografia, convites e lembranças.",
  },
];

const productLines = [
  "Vasos e decoração",
  "Luminárias",
  "Utensílios",
  "Linha pet",
  "Gamer",
  "Culinária",
  "Fotografia",
  "Convites e lembranças",
  "Prototipagem",
  "Maquetes",
];

const materialLines = [
  "PLA",
  "PLA Silk",
  "PETG",
  "ABS",
  "ASA",
  "TPU",
  "Nylon / PA",
  "Policarbonato / PC",
  "PETG-CF",
  "PA-CF",
  "Filamentos com fibra de carbono",
  "Filamentos técnicos sob consulta",
];

const processSteps = [
  "Envie a ideia, medida, referência ou arquivo 3D para o Hermes.",
  "A Archon confirma viabilidade de impressão, material disponível, prazo e acabamento solicitado.",
  "A entrega é combinada conforme destino, tamanho, peso, urgência e modalidade de envio.",
];

const scopeRules = [
  "Quando o cliente fornece o arquivo 3D, desenho técnico ou modelo digital, a Archon atua na preparação, fatiamento e execução da impressão.",
  "A definição de material, requisitos mecânicos, dimensionamento, cálculo de esforço, encaixes críticos e aplicação final é responsabilidade do cliente ou do responsável técnico pelo projeto.",
  "Quando houver necessidade de projeto técnico, laudo, ART ou responsabilidade profissional formal, esse escopo deverá ser tratado previamente com profissional habilitado.",
];

export const metadata = {
  title: "Archon | Impressão 3D, prototipagem e maquetes em Bauru-SP",
  description:
    "Impressão 3D para indústrias, empresas, construtoras e público geral. Pedidos e orçamentos atendidos pelo Agente Hermes no WhatsApp.",
};

export default function Home() {
  return (
    <main className="min-h-screen bg-[#070707] text-[#f3efe6]">
      <section className="relative overflow-hidden border-b border-[#c99a4a]/25">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_20%,rgba(201,154,74,0.2),transparent_34%),linear-gradient(115deg,rgba(255,255,255,0.05),transparent_42%)]" />
        <div className="relative mx-auto grid max-w-7xl gap-10 px-5 py-8 sm:px-8 lg:grid-cols-[0.95fr_1.05fr] lg:px-10 lg:py-14">
          <header className="flex items-center justify-between gap-4 lg:col-span-2">
            <div>
              <p className="text-xs uppercase tracking-[0.42em] text-[#c99a4a]">
                Archon
              </p>
              <p className="mt-2 text-sm text-[#bdb5a7]">
                Impressão 3D • Prototipagem • Soluções criativas
              </p>
            </div>
            <a
              className="hidden border border-[#c99a4a]/60 px-4 py-2 text-sm font-semibold uppercase tracking-[0.18em] text-[#f6d38b] transition hover:bg-[#c99a4a] hover:text-[#080808] sm:inline-flex"
              href="#pedido"
            >
              Pedir orçamento
            </a>
          </header>

          <div className="flex flex-col justify-center py-8 lg:py-16">
            <p className="mb-5 max-w-xl text-sm uppercase tracking-[0.32em] text-[#c99a4a]">
              Toda Criação Tem Uma Origem
            </p>
            <h1 className="max-w-3xl text-4xl font-semibold leading-[1.05] text-white sm:text-5xl lg:text-6xl">
              Ideias, protótipos e produtos físicos em impressão 3D.
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-[#d7d0c2]">
              De Bauru-SP para clientes em todo o Brasil, a Archon transforma
              arquivos, referências e projetos em peças impressas em 3D. Quando
              a logística permitir, também atendemos demandas internacionais.
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

          <div className="relative min-h-[380px] overflow-hidden border border-[#c99a4a]/25 bg-[#080807] shadow-2xl shadow-black/60 sm:min-h-[520px]">
            <Image
              src="/archon-brand-preview.png"
              alt="Visualização da marca Archon com símbolo arquitetônico, compasso e camadas de impressão 3D"
              fill
              priority
              sizes="(max-width: 1024px) 100vw, 54vw"
              className="object-contain p-4 sm:p-6"
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
                Do técnico ao cotidiano, uma impressão para cada origem.
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
            Materiais
          </p>
          <h2 className="mt-4 text-3xl font-semibold text-white sm:text-5xl">
            Filamentos comuns e técnicos para diferentes tipos de impressão.
          </h2>
          <p className="mt-6 text-lg leading-8 text-[#d7d0c2]">
            A disponibilidade pode variar conforme estoque, fornecedor, cor,
            diâmetro, aplicação e parâmetros de impressão. A Archon informa as
            possibilidades de execução, mas a especificação técnica do material
            para uso crítico deve vir do cliente ou do responsável pelo projeto.
          </p>
        </div>
        <div className="grid grid-cols-2 gap-3 sm:grid-cols-3">
          {materialLines.map((material) => (
            <div
              key={material}
              className="border border-white/10 bg-white/[0.035] px-4 py-4 text-sm font-semibold text-[#eadfc9]"
            >
              {material}
            </div>
          ))}
        </div>
      </section>

      <section className="border-y border-white/10 bg-[#0d0c0b] px-5 py-16 sm:px-8 lg:px-10">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.9fr_1.1fr]">
          <div>
            <p className="text-sm uppercase tracking-[0.32em] text-[#c99a4a]">
              Escopo de atuação
            </p>
            <h2 className="mt-4 text-3xl font-semibold text-white sm:text-5xl">
              Bureau de impressão 3D com responsabilidade delimitada.
            </h2>
            <p className="mt-6 text-lg leading-8 text-[#d7d0c2]">
              A Archon executa manufatura aditiva a partir de arquivos, desenhos
              e especificações fornecidos pelo cliente. O serviço é de
              fabricação da peça física, não de consultoria técnica, cálculo de
              engenharia ou validação da aplicação final.
            </p>
          </div>
          <div className="space-y-4">
            {scopeRules.map((rule, index) => (
              <div
                key={rule}
                className="flex gap-4 border border-[#c99a4a]/20 bg-black/25 p-5"
              >
                <span className="flex h-8 w-8 shrink-0 items-center justify-center border border-[#c99a4a] text-sm font-bold text-[#f0c46d]">
                  {index + 1}
                </span>
                <p className="m-0 leading-7 text-[#d8cfbd]">{rule}</p>
              </div>
            ))}
            <p className="text-sm leading-6 text-[#a99f8e]">
              Observação: serviços que envolvam engenharia, projeto técnico,
              cálculo estrutural, laudo, certificação, ART ou responsabilidade
              profissional formal não fazem parte do escopo padrão de impressão
              3D e devem ser contratados com profissional habilitado, quando
              aplicável.
            </p>
          </div>
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
              O cliente envia a ideia, referência ou arquivo. O Hermes organiza
              o pedido para a Archon confirmar viabilidade de impressão,
              material disponível, prazo, acabamento solicitado e forma de
              entrega.
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
              Inserir número do Hermes
            </a>
            <p className="mt-4 text-sm leading-6 text-[#a99f8e]">
              Atendimento em Bauru-SP, em todo o Brasil e, quando viável, também
              para demandas internacionais. Entregas são combinadas caso a caso,
              porque custos dos Correios, transportadoras e envios internacionais
              variam conforme destino, tamanho, peso e urgência.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
