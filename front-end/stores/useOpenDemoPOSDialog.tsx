import { Product } from "models/product.model";
import { create } from "zustand";

interface DemoPOSDialogState {
  isOpen: boolean;
  toogleOpen: () => void;
}

const useOpenDemoPOSDialog = create<DemoPOSDialogState>((set) => ({
  isOpen: false,
  toogleOpen: () => set((state) => ({ isOpen: !state.isOpen })),
}));

export default useOpenDemoPOSDialog;
