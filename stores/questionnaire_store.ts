
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
  isShowQuestion: boolean;
  currentQuestionIndex: number;
  previousPageIndex: Array<number>;
  data: QuestionData;
  showQuestion: () => void;
  backToPrevious: () => void;
  clearStoreData: () => void;
  setQuestionData: (data: QuestionData, nextNumberPage?: number) => void;
  onSubmit?: (contactInfo: ContactInfo) => void;
}

const initialData = {
  isShowQuestion: false,
  currentQuestionIndex: 0,
  previousPageIndex: [],
  data: {
    businessId: -1,
    saleSystemIndex: -1,
    numberStationIndex: -1,
  },
};

const useQuestionnaireStore = create<QuestionnaireState>((set) => ({
  ...initialData,
  clearStoreData: () => set((state) => ({ ...initialData })),
  backToPrevious: () =>
    set((state) => ({
      ...state,
      currentQuestionIndex:
        state.previousPageIndex.length > 0 ? state.previousPageIndex.pop() : 0,
    })),
  showQuestion: () => set((state) => ({ ...state, isShowQuestion: true })),
  setQuestionData: (data: QuestionData, nextNumberPage = 1) => {
    set((state) => {
      const currentIndex = state.currentQuestionIndex;
      return {
        ...state,
        data: data,
        previousPageIndex: [...state.previousPageIndex, currentIndex],
        currentQuestionIndex: currentIndex + nextNumberPage,
      };
    });
  },
}));

export default useQuestionnaireStore;
