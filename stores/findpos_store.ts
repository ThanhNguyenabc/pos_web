import { ContactInfo } from "models/contact_info";
import { create } from "zustand";

interface FindPOSData {
  creditVolumeId?: number;
  businessContact?: ContactInfo;
  contact?: ContactInfo;
}
interface FindPOSState {
  cQuestionIndex: number;
  data?: FindPOSData;
  setData: (data: FindPOSData) => void;
  onNext: () => void;
  onBack: () => void;
  clearStoreData: () => void;
}

const useFindPOSStore = create<FindPOSState>((set) => ({
  cQuestionIndex: 0,
  clearStoreData: () => set({ cQuestionIndex: 0, data: {} }),
  onNext: () =>
    set((prev) => ({ ...prev, cQuestionIndex: prev.cQuestionIndex + 1 })),
  onBack: () =>
    set((prev) => ({ ...prev, cQuestionIndex: prev.cQuestionIndex - 1 })),
  setData: (newData: FindPOSData) =>
    set((prev) => ({ ...prev, data: newData })),
}));

export default useFindPOSStore;
