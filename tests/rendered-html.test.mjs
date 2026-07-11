import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import test from "node:test";

const pageUrl = new URL("../app/page.tsx", import.meta.url);
const layoutUrl = new URL("../app/layout.tsx", import.meta.url);
const cssUrl = new URL("../app/globals.css", import.meta.url);
const packageUrl = new URL("../package.json", import.meta.url);

test("Archon page contains the core sales message and Hermes flow", async () => {
  const page = await readFile(pageUrl, "utf8");

  assert.match(page, /Toda Criação Tem Uma Origem/);
  assert.match(page, /Agente Hermes/);
  assert.match(page, /Bauru-SP/);
  assert.match(page, /Indústrias e empresas/);
  assert.match(page, /Construtoras e arquitetura/);
  assert.match(page, /Público geral/);
  assert.match(page, /archon-brand-preview\.png/);
  assert.match(page, /Escopo de atuação/);
  assert.match(page, /Bureau de impressão 3D/);
  assert.match(page, /responsabilidade profissional formal/);
  assert.match(page, /território nacional/);
  assert.match(page, /demandas internacionais/);
  assert.match(page, /Filamentos comuns e técnicos/);
  assert.match(page, /PETG-CF/);
  assert.match(page, /PA-CF/);
  assert.match(page, /Produção sob demanda/);
  assert.match(page, /Execução a partir de arquivo/);
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
});
