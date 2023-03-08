import React, { useCallback } from "react";
import { SideBarType } from "components/SideBar";
import { Product } from "models/product.model";
import { create } from "zustand";

interface SideBarState {
  isOpen: boolean;
  type?: SideBarType;
  openSideBar: (type: SideBarType) => void;
  closeSideBar: () => void;
}

const useSideBar = create<SideBarState>((set) => ({
  isOpen: false,
  openSideBar: (type: SideBarType) =>
    set((prev) => ({ isOpen: !prev.isOpen, type: type })),
  closeSideBar: () => set((prev) => ({ ...prev, isOpen: !prev.isOpen })),
}));

export default useSideBar;
