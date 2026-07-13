import { mkdir, readFile, writeFile } from "node:fs/promises";
import path from "node:path";
import { NextResponse } from "next/server";
import {
  catalogImageSlots,
  getCatalogUploadPath,
} from "@/app/catalog-image-registry";

export const runtime = "nodejs";

const MANIFEST_PATH = path.join(process.cwd(), "public", "product-images", "manifest.json");
const UPLOAD_DIR = path.join(process.cwd(), "public", "product-images", "uploads");

export async function POST(request: Request) {
  const uploadKey = process.env.CATALOG_UPLOAD_KEY;
  const providedKey = request.headers.get("x-catalog-upload-key") ?? "";

  if (uploadKey && providedKey !== uploadKey) {
    return NextResponse.json({ error: "Chave de upload invalida." }, { status: 401 });
  }

  const formData = await request.formData();
  const slotId = String(formData.get("slotId") ?? "");
  const file = formData.get("file");

  const slot = catalogImageSlots.find((item) => item.assetKey === slotId);
  if (!slot) {
    return NextResponse.json({ error: "Slot de imagem invalido." }, { status: 400 });
  }

  if (!(file instanceof File)) {
    return NextResponse.json({ error: "Nenhum arquivo enviado." }, { status: 400 });
  }

  if (file.type !== "image/png") {
    return NextResponse.json(
      { error: "Envie um arquivo PNG para este slot." },
      { status: 400 },
    );
  }

  await mkdir(UPLOAD_DIR, { recursive: true });

  const imageUrl = getCatalogUploadPath(slot.assetKey);
  const outputPath = path.join(UPLOAD_DIR, `${slot.assetKey}.png`);
  const bytes = Buffer.from(await file.arrayBuffer());

  await writeFile(outputPath, bytes);

  const manifest = await readManifest();
  manifest[slot.assetKey] = `${imageUrl}?v=${Date.now()}`;
  await writeFile(MANIFEST_PATH, `${JSON.stringify(manifest, null, 2)}\n`, "utf8");

  return NextResponse.json({
    assetKey: slot.assetKey,
    fileName: slot.fileName,
    imageUrl: manifest[slot.assetKey],
  });
}

async function readManifest(): Promise<Record<string, string>> {
  try {
    const text = await readFile(MANIFEST_PATH, "utf8");
    return JSON.parse(text) as Record<string, string>;
  } catch {
    return {};
  }
}
