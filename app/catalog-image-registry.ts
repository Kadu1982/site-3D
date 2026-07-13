import { catalogTabs } from "./site-content";

export type CatalogImageSlot = {
  assetKey: string;
  categoryLabel: string;
  defaultPath: string;
  fileName: string;
  productTitle: string;
};

export const catalogImageSlots: CatalogImageSlot[] = catalogTabs.flatMap((tab) =>
  tab.products.map((product) => {
    const fileName = product.image.split("/").pop() ?? `${product.title}.png`;
    const assetKey = fileName.replace(/\.png$/i, "");

    return {
      assetKey,
      categoryLabel: tab.label,
      defaultPath: product.image,
      fileName,
      productTitle: product.title,
    };
  }),
);

export function getCatalogUploadPath(assetKey: string): string {
  return `/product-images/uploads/${assetKey}.png`;
}

export function getCatalogImageKey(imagePath: string): string {
  return imagePath.split("/").pop()?.replace(/\.png$/i, "") ?? imagePath;
}
