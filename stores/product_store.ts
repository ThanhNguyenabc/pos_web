import { Product } from "models/product.model";
import { create } from "zustand";

interface ProductState {
  products: Array<Product>;
  setProductList: (products: Array<Product>) => void;

  suggestPosList?: Array<Product>;
  setSuggestPOSList: (products: Array<Product>) => void;
}

const useProductStore = create<ProductState>((set) => ({
  products: [],
  setSuggestPOSList: (data: Array<Product>) =>
    set((_) => ({ suggestPosList: data })),
  setProductList: (data: Array<Product>) => set((_) => ({ products: data })),
}));

export default useProductStore;
