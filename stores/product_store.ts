import { Product } from "models/product.model";
import { create } from "zustand";

interface ProductState {
  suggestPosList: Array<Product>;
  setSuggestPOSList: (products: Array<Product>) => void;
}

const useProductStore = create<ProductState>((set) => ({
  suggestPosList: [],
  setSuggestPOSList: (data: Array<Product>) =>
    set((_) => ({ suggestPosList: data })),
}));

export default useProductStore;
