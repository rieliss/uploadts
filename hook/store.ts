import { create } from "zustand";

type StoreState = {
  price: number;
  SumPrice: (value: number) => void;
  MinusPrice: (value: number) => void;
  CheckAll: boolean;
  setCheckAll: (bool: boolean) => void;
  selectProduct: any[];
  setSelectProduct: (value: string[]) => void;
  search: string;
  setSearch: (value: string) => void;
};

export const useStoreHook = create<StoreState>((set) => ({
  price: 0,
  CheckAll: false,
  search: "",
  selectProduct: [],
  SumPrice: (value: number) => set((state) => ({ price: state.price + value })),
  MinusPrice: (value: number) =>
    set((state) => ({ price: state.price - value })),
  setCheckAll: (bool: boolean) => set(() => ({ CheckAll: bool })),
  setSelectProduct: (value: string[]) =>
    set((state) => ({ selectProduct: value })),
  setSearch: (value: string) => set((state) => ({ search: value })),
}));
