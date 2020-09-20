<template>
  <main :class="{blur: isShowBill}">
    <!-- Undo button -->
    <button
      v-if="!isMobileView"
      class="btn top-right"
      aria-label="undo ingredient"
      v-on:click="undoClick"
    >
      <img :src="icons.undo" />
    </button>

    <!-- Sandwich view -->
    <SandwichView />

    <!-- Ingredients list -->
    <IngredientList />
  </main>
</template>

<script>
// Components
import SandwichView from "./SandwichView";
import IngredientList from "./IngredientList";

// Data
import icons from "../../data/icons";

// Store
import useStore from "../../store/useStore";

export default {
  name: "Main",
  components: { SandwichView, IngredientList },

  setup() {
    const { popIngredient, isMobileView, isShowBill } = useStore();
    return { popIngredient, icons, isMobileView, isShowBill };
  },

  methods: {
    undoClick() {
      this.popIngredient();
    },
  },
};
</script>

<style scoped>
main {
  height: 100%;
  position: relative;
  display: grid;
  grid-template-rows: 1fr auto;
}

.blur {
  filter: blur(4px);
}
</style>
