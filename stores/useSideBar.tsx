import { RightSideBarType } from "components/common/RightSideBar";
import { create } from "zustand";

interface SideBarState {
  isOpen: boolean;
  type?: RightSideBarType | null;
  openSideBar: (type: RightSideBarType) => void;
  closeSideBar: () => void;
}

const useSideBar = create<SideBarState>((set) => ({
  isOpen: false,
  openSideBar: (type: RightSideBarType) =>
    set((prev) => ({
      isOpen: !prev.isOpen,
      type: type,
    })),
  closeSideBar: () => set((prev) => ({ type: null, isOpen: !prev.isOpen })),
}));

export default useSideBar;
