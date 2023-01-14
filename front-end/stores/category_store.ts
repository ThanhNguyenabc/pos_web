import { Category } from "models/category";
import { create } from "zustand";

interface CategoryState {
  categories: Array<Category>;
  setCategoriesList: (data: Array<Category>) => void;
}

const useCategoryStore = create<CategoryState>((set) => ({
  categories: [],
  setCategoriesList: (data) => set({ categories: data }),
}));

export default useCategoryStore;
