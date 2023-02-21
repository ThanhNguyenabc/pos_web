import { Product } from "models/product.model";
import { create } from "zustand";

interface DemoPOSDialogState {
  isOpen: boolean;
  toogleDialog: () => void;
}

const useOpenDemoPOSDialog = create<DemoPOSDialogState>((set) => ({
  isOpen: false,
  toogleDialog: () => set((state) => ({ isOpen: !state.isOpen })),
}));

export default useOpenDemoPOSDialog;
