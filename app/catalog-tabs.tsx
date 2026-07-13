"use client";

import { useMemo, useState } from "react";

type CatalogProduct = {
  description: string;
  image: string;
  sourceUrl: string;
  title: string;
};

export type CatalogTab = {
  eyebrow: string;
  id: string;
  label: string;
  products: CatalogProduct[];
  summary: string;
  title: string;
};

type CatalogTabsProps = {
  accentLabel?: string;
  className?: string;
  compact?: boolean;
  tabs: CatalogTab[];
  title: string;
};

export function CatalogTabs({
  accentLabel = "Catalogo por categoria",
  className = "",
  compact = false,
  tabs,
  title,
}: CatalogTabsProps) {
  const [activeTabId, setActiveTabId] = useState(tabs[0]?.id ?? "");

  const activeTab = useMemo(
    () => tabs.find((tab) => tab.id === activeTabId) ?? tabs[0],
    [activeTabId, tabs],
  );

  const focusTab = (index: number) => {
    const nextTab = tabs[index];
    if (nextTab) {
      setActiveTabId(nextTab.id);
    }
  };

  return (
    <section className={className}>
      <div className="flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
        <div>
          <p className="text-sm uppercase tracking-[0.34em] text-[#c99a4a]">
            {accentLabel}
          </p>
          <h2 className="mt-4 text-3xl font-semibold text-[#201915] sm:text-5xl">
            {title}
          </h2>
        </div>
        <p className="max-w-xl text-sm leading-6 text-[#6a5d4c]">
          Clique nas abas para alternar entre as categorias e exibir os produtos
          corretos em cada linha.
        </p>
      </div>

      <div className="mt-8 overflow-x-auto pb-2">
        <div
          role="tablist"
          aria-label={accentLabel}
          className="inline-flex min-w-full gap-2 rounded-full bg-white/70 p-2 shadow-[0_10px_28px_rgba(64,48,28,0.05)]"
        >
          {tabs.map((tab) => {
            const selected = tab.id === activeTabId;
            return (
              <button
                key={tab.id}
                role="tab"
                aria-selected={selected}
                aria-controls={`panel-${tab.id}`}
                id={`tab-${tab.id}`}
                type="button"
                tabIndex={selected ? 0 : -1}
                onClick={() => setActiveTabId(tab.id)}
                onKeyDown={(event) => {
                  if (event.key === "ArrowRight") {
                    event.preventDefault();
                    focusTab((tabs.findIndex((item) => item.id === tab.id) + 1) % tabs.length);
                  }

                  if (event.key === "ArrowLeft") {
                    event.preventDefault();
                    focusTab(
                      (tabs.findIndex((item) => item.id === tab.id) - 1 + tabs.length) %
                        tabs.length,
                    );
                  }

                  if (event.key === "Home") {
                    event.preventDefault();
                    focusTab(0);
                  }

                  if (event.key === "End") {
                    event.preventDefault();
                    focusTab(tabs.length - 1);
                  }
                }}
                className={`whitespace-nowrap rounded-full px-4 py-3 text-sm font-bold transition ${
                  selected
                    ? "bg-[#c99a4a] text-white shadow-sm"
                    : "text-[#5e5144] hover:bg-[#f5efe4]"
                } ${compact ? "sm:px-3" : ""}`}
              >
                {tab.label}
              </button>
            );
          })}
        </div>
      </div>

      {activeTab ? (
        <div
          id={`panel-${activeTab.id}`}
          role="tabpanel"
          aria-labelledby={`tab-${activeTab.id}`}
          className="mt-8 grid gap-6 lg:grid-cols-[0.82fr_1.18fr]"
        >
          <article className="border border-[#dccfb9] bg-white p-6 shadow-[0_14px_30px_rgba(64,48,28,0.06)]">
            <p className="text-xs font-bold uppercase tracking-[0.24em] text-[#8a6428]">
              {activeTab.eyebrow}
            </p>
            <h3 className="mt-4 text-2xl font-semibold text-[#201915]">
              {activeTab.title}
            </h3>
            <p className="mt-4 text-sm leading-7 text-[#5e5144]">
              {activeTab.summary}
            </p>
          </article>

          <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
            {activeTab.products.map((product) => (
              <article
                key={product.title}
                className="overflow-hidden border border-[#dccfb9] bg-white shadow-[0_10px_28px_rgba(64,48,28,0.05)]"
              >
                <a href={product.sourceUrl} target="_blank" rel="noreferrer">
                  <img
                    alt={product.title}
                    className="h-56 w-full object-cover"
                    src={product.image}
                  />
                </a>
                <div className="p-5">
                  <p className="text-xs font-bold uppercase tracking-[0.24em] text-[#8a6428]">
                    {activeTab.eyebrow}
                  </p>
                  <h4 className="mt-3 text-lg font-semibold text-[#201915]">
                    {product.title}
                  </h4>
                  <p className="mt-3 text-sm leading-6 text-[#5e5144]">
                    {product.description}
                  </p>
                  <a
                    href={product.sourceUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="mt-4 inline-flex text-xs font-bold uppercase tracking-[0.18em] text-[#8a6428] transition hover:text-[#c99a4a]"
                  >
                    Ver fonte
                  </a>
                </div>
              </article>
            ))}
          </div>
        </div>
      ) : null}
    </section>
  );
}
