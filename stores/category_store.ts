import { Category } from "models/category";
import { create } from "zustand";

interface CategoryState {
  categories: Array<Category>;
  setCategories: (data: Array<Category>) => void;
}

const useCategoryStore = create<CategoryState>((set) => ({
  categories: [],
  setCategories: (data) => set({ categories: data }),
}));

export default useCategoryStore;
