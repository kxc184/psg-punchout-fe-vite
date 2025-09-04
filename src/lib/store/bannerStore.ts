import { create } from "zustand";

export type BannerType =
  | "warning"
  | "informational"
  | "success"
  | "error"
  | "generic";

export interface IBanner {
  id: number;
  blocking?: boolean;
  message: string;
  type: BannerType;
}

interface BannerStore {
  banners: IBanner[];
  addBanner: (banner: IBanner) => void;
  removeBanner: (id: number) => void;
}

export const useBannerStore = create<BannerStore>((set) => ({
  banners: [],
  addBanner: (banner) =>
    set((state) => {
      // Prevent duplicates by message and type
      const exists = state.banners.some(
        (b) => b.message === banner.message && b.type === banner.type
      );
      if (exists) return state;
      return { banners: [...state.banners, banner] };
    }),
  removeBanner: (id) =>
    set((state) => ({ banners: state.banners.filter((b) => b.id !== id) })),
}));
