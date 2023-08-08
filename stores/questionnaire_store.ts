import { ContactInfo } from "models/contact_info";
import { create } from "zustand";

interface QuestionData {
  businessId: number;
  saleSystemIndex: number;
  numberStationIndex: number;
  handHeldIndex?: number;
  discountIndex?: number;
  contacInfo?: ContactInfo;
}

interface QuestionnaireState {
  businessId: number;
  saleSystemIndex: number;
  numberStationIndex: number;
  handHeldIndex?: number;
  discountIndex?: number;
  contacInfo?: ContactInfo;
  clearStoreData: () => void;
  updateIndex: (input: { [key: string]: Number }) => void;
}

const initialData = {
  businessId: 0,
  saleSystemIndex: 0,
  numberStationIndex: 0,
  handHeldIndex: 0,
  discountIndex: 1,
};

const useQuestionnaireStore = create<QuestionnaireState>((set) => ({
  ...initialData,
  clearStoreData: () => set((state) => ({ ...initialData })),
  updateIndex: (input) => {
    set((state) => {
      return {
        ...state,
        ...input,
      };
    });
  },
}));

export const updateQuestionnaireAns = () =>
  useQuestionnaireStore((state) => state.updateIndex);

export default useQuestionnaireStore;
