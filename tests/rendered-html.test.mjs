import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import test from "node:test";

const pageUrl = new URL("../app/page.tsx", import.meta.url);
const tecnicoUrl = new URL("../app/tecnico/page.tsx", import.meta.url);
const utilidadesUrl = new URL("../app/utilidades/page.tsx", import.meta.url);
const siteContentUrl = new URL("../app/site-content.ts", import.meta.url);
const layoutUrl = new URL("../app/layout.tsx", import.meta.url);
const cssUrl = new URL("../app/globals.css", import.meta.url);
const packageUrl = new URL("../package.json", import.meta.url);
const textFiles = [
  pageUrl,
  tecnicoUrl,
  utilidadesUrl,
  layoutUrl,
  new URL("../outputs/archon-home.html", import.meta.url),
  new URL("../outputs/archon-tecnico.html", import.meta.url),
  new URL("../outputs/archon-utilidades.html", import.meta.url),
];

test("home routes visitors into technical and utility flows", async () => {
  const page = await readFile(pageUrl, "utf8");

  assert.match(page, /Catalogo de impressao 3D pronto para vender/);
  assert.match(page, /\/tecnico/);
  assert.match(page, /\/utilidades/);
  assert.match(page, /Ver utilidades/);
  assert.match(page, /Ver linha tecnica/);
  assert.match(page, /featuredCollections\.map/);
});

test("technical page contains the core sales message and Hermes flow", async () => {
  const page = await readFile(tecnicoUrl, "utf8");

  assert.match(page, /Pedidos via WhatsApp/);
  assert.match(page, /Pecas funcionais, prototipos e reposicoes/);
  assert.match(page, /Regra comercial/);
  assert.match(page, /Pecas de uso real/);
  assert.match(page, /Prototipagem simples/);
  assert.match(page, /Producao sob medida/);
  assert.match(page, /Inserir numero do Hermes/);
});

test("utilities page keeps the simple customer flow separate", async () => {
  const page = await readFile(utilidadesUrl, "utf8");

  assert.match(page, /Utilidades e criativos/);
  assert.match(page, /Catalogo leve, bonito e pronto para gerar compra/);
  assert.match(page, /Sem complicacao/);
  assert.match(page, /Linha modular/);
  assert.match(page, /Produtos em destaque/);
  assert.match(page, /Pedidos via WhatsApp/);
  assert.match(page, /featuredProducts\.map/);
});

test("site content module keeps the catalog copy centralized", async () => {
  const content = await readFile(siteContentUrl, "utf8");

  assert.match(content, /Casa e organiza\\u00e7\\u00e3o/);
  assert.match(content, /Porta-controles/);
  assert.match(content, /Pe\\u00e7as funcionais e reposi\\u00e7\\u00f5es/);
  assert.match(content, /Nomes de franquias, marcas e IPs de terceiros/);
});

test("starter preview code and dependency are removed", async () => {
  const [page, layout, packageJson] = await Promise.all([
    readFile(pageUrl, "utf8"),
    readFile(layoutUrl, "utf8"),
    readFile(packageUrl, "utf8"),
  ]);

  assert.doesNotMatch(page, /SkeletonPreview|_sites-preview/);
  assert.doesNotMatch(layout, /Starter Project|codex-preview/);
  assert.doesNotMatch(packageJson, /react-loading-skeleton/);
});

test("global styling uses the Archon premium palette", async () => {
  const css = await readFile(cssUrl, "utf8");

  assert.match(css, /#070707/);
  assert.match(css, /#c99a4a/);
  assert.match(css, /scroll-behavior: smooth/);
  assert.match(css, /var\(--font-geist-sans\)/);
});

test("user-facing files do not contain mojibake", async () => {
  for (const file of textFiles) {
    const text = await readFile(file, "utf8");
    assert.doesNotMatch(
      text,
      /\u00c3|\u00c2|\uFFFD|Cria\?\?|T\?cnica|impress\?o/,
    );
  }
});
