"use client";

import { useMemo, useState } from "react";
import { catalogImageSlots } from "./catalog-image-registry";

type UploadState = "idle" | "uploading" | "done" | "error";

type UploadedImage = {
  imageUrl: string;
  assetKey: string;
  fileName: string;
};

export function CatalogImageUploader() {
  const [slotId, setSlotId] = useState(catalogImageSlots[0]?.assetKey ?? "");
  const [file, setFile] = useState<File | null>(null);
  const [uploadKey, setUploadKey] = useState("");
  const [state, setState] = useState<UploadState>("idle");
  const [message, setMessage] = useState("");
  const [preview, setPreview] = useState<UploadedImage | null>(null);

  const activeSlot = useMemo(
    () => catalogImageSlots.find((slot) => slot.assetKey === slotId) ?? catalogImageSlots[0],
    [slotId],
  );

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (!file || !activeSlot) {
      setState("error");
      setMessage("Escolha um slot e um arquivo PNG antes de enviar.");
      return;
    }

    if (file.type !== "image/png") {
      setState("error");
      setMessage("O envio aceita apenas PNG para manter o caminho do catálogo estável.");
      return;
    }

    setState("uploading");
    setMessage("Enviando imagem para o catálogo...");

    const formData = new FormData();
    formData.append("slotId", activeSlot.assetKey);
    formData.append("file", file);

    const response = await fetch("/api/catalog-images", {
      method: "POST",
      headers: uploadKey ? { "x-catalog-upload-key": uploadKey } : undefined,
      body: formData,
    });

    const payload = (await response.json().catch(() => null)) as
      | { error?: string; imageUrl?: string; assetKey?: string; fileName?: string }
      | null;

    if (!response.ok || !payload?.imageUrl || !payload.assetKey || !payload.fileName) {
      setState("error");
      setMessage(payload?.error ?? "Nao foi possivel salvar a imagem.");
      return;
    }

    setPreview({
      imageUrl: payload.imageUrl,
      assetKey: payload.assetKey,
      fileName: payload.fileName,
    });
    setState("done");
    setMessage(`Imagem salva em ${payload.fileName} e aplicada ao slot selecionado.`);
    setFile(null);
  }

  return (
    <section className="border border-[#dccfb9] bg-white p-6 shadow-[0_10px_28px_rgba(64,48,28,0.05)]">
      <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <p className="text-xs font-bold uppercase tracking-[0.24em] text-[#8a6428]">
            Biblioteca de imagens
          </p>
          <h3 className="mt-3 text-2xl font-semibold text-[#201915]">
            Envie a arte tratada e ela entra no slot do catálogo
          </h3>
        </div>
        <p className="max-w-xl text-sm leading-6 text-[#6a5d4c]">
          Cada produto tem um destino fixo. Troque o PNG do slot correto e o site
          passa a usar a nova imagem no local correspondente.
        </p>
      </div>

      <form className="mt-6 grid gap-4 lg:grid-cols-[1.05fr_1fr_auto]" onSubmit={handleSubmit}>
        <label className="grid gap-2">
          <span className="text-xs font-bold uppercase tracking-[0.18em] text-[#6a5d4c]">
            Slot do catálogo
          </span>
          <select
            value={slotId}
            onChange={(event) => setSlotId(event.target.value)}
            className="border border-[#dccfb9] bg-[#fbf7f0] px-4 py-3 text-sm text-[#201915] outline-none transition focus:border-[#c99a4a]"
          >
            {catalogImageSlots.map((slot) => (
              <option key={slot.assetKey} value={slot.assetKey}>
                {slot.categoryLabel} - {slot.productTitle}
              </option>
            ))}
          </select>
        </label>

        <label className="grid gap-2">
          <span className="text-xs font-bold uppercase tracking-[0.18em] text-[#6a5d4c]">
            Arquivo PNG
          </span>
          <input
            type="file"
            accept="image/png"
            onChange={(event) => setFile(event.target.files?.[0] ?? null)}
            className="border border-[#dccfb9] bg-[#fbf7f0] px-4 py-3 text-sm text-[#201915] file:mr-4 file:border-0 file:bg-[#c99a4a] file:px-4 file:py-2 file:text-xs file:font-bold file:uppercase file:tracking-[0.16em] file:text-white"
          />
        </label>

        <button
          type="submit"
          disabled={state === "uploading"}
          className="mt-auto inline-flex h-[46px] items-center justify-center bg-[#c99a4a] px-6 text-xs font-black uppercase tracking-[0.18em] text-white transition hover:bg-[#b88834] disabled:cursor-not-allowed disabled:opacity-70"
        >
          {state === "uploading" ? "Enviando..." : "Salvar imagem"}
        </button>
      </form>

      <label className="mt-4 grid gap-2">
        <span className="text-xs font-bold uppercase tracking-[0.18em] text-[#6a5d4c]">
          Chave opcional de upload
        </span>
        <input
          value={uploadKey}
          onChange={(event) => setUploadKey(event.target.value)}
          type="password"
          placeholder="Preencha apenas se o servidor exigir"
          className="border border-[#dccfb9] bg-[#fbf7f0] px-4 py-3 text-sm text-[#201915] outline-none transition focus:border-[#c99a4a]"
        />
      </label>

      <div className="mt-5 rounded-2xl border border-dashed border-[#dccfb9] bg-[#fbf7f0] p-4">
        <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#8a6428]">
          Destino atual
        </p>
        <p className="mt-2 text-sm leading-6 text-[#4d4033]">
          {activeSlot
            ? `Slot: ${activeSlot.categoryLabel} / ${activeSlot.productTitle}`
            : "Nenhum slot disponivel."}
        </p>
        <p className="text-sm leading-6 text-[#4d4033]">
          Caminho esperado:{" "}
          <span className="font-semibold text-[#201915]">
            {activeSlot ? activeSlot.defaultPath : "/product-images/..."}
          </span>
        </p>
        <p className="mt-2 text-sm leading-6 text-[#4d4033]">{message}</p>
        {preview ? (
          <div className="mt-4 flex flex-col gap-3 sm:flex-row sm:items-center">
            <img
              alt={`Preview de ${preview.fileName}`}
              src={`${preview.imageUrl}?v=${Date.now()}`}
              className="h-28 w-28 rounded-xl border border-[#dccfb9] object-cover"
            />
            <div className="text-sm leading-6 text-[#4d4033]">
              <p className="font-semibold text-[#201915]">{preview.fileName}</p>
              <p>Slot: {preview.assetKey}</p>
            </div>
          </div>
        ) : null}
      </div>
    </section>
  );
}
