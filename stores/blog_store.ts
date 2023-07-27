import { Blog } from "models/blog";
import { create } from "zustand";

interface BlogState {
  setBlogList: (data: Array<Blog>) => void;
  blogs: Array<Blog>;
}

const useBlogStore = create<BlogState>((set) => ({
  blogs: [],
  setBlogList: (data) => set({ blogs: data }),
}));

export default useBlogStore;
