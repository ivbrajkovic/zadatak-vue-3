import { reactive, computed } from "vue";
import ingredients from "./ingredients";

// Global state
const state = reactive({
  isMobileView: false,
  isShowBill: false,
  sandwich: [],
});

// Store hooks
export default function useStore() {
  const setMobileView = (value) => (state.isMobileView = value);
  const setShowBill = (value) => (state.isShowBill = value);
  const pushIngredient = (ingredient) => state.sandwich.push(ingredient);
  const popIngredient = () => {
    if (state.sandwich.length > 1) state.sandwich.pop();
  };

  return {
    // Getters
    isMobileView: computed(() => state.isMobileView),
    isShowBill: computed(() => state.isShowBill),
    sandwich: computed(() => state.sandwich),
    ingredients,

    // Setters
    setMobileView,
    setShowBill,
    pushIngredient,
    popIngredient,
  };
}
