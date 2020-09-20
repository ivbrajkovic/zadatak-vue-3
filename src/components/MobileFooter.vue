<template>
  <div class="container">
    <button v-if="!isShowBill" class="btn-undo" aria-label="undo" v-on:click="undoClick">
      <img :src="icons.undoMobile" />
    </button>

    <button
      style="z-index:1;"
      class="btn-primary"
      v-on:click="showBill(!isShowBill)"
    >{{!isShowBill ? "Račun" : "Zatvori"}}</button>
  </div>
</template>

<script>
// Data
import icons from "../data/icons";

// Store
import useStore from "../store/useStore";

export default {
  name: "MobileFooter",

  setup() {
    const { popIngredient, isShowBill, setShowBill } = useStore();
    return { icons, popIngredient, isShowBill, setShowBill };
  },

  methods: {
    undoClick() {
      this.popIngredient();
    },
    showBill(show) {
      this.setShowBill(show);
    },
  },
};
</script>

<style scoped>
.container {
  width: 100%;
  padding: 12px;
  height: var(--mobile-footer-height);
  display: flex;
  justify-content: center;
  align-items: center;
  background: #fff;
  border: 1px solid #eaeaea;
}

.btn-undo {
  margin-right: 1rem;
  height: 46px;
  width: 46px;
  border: 2px solid #eaeaea;
  border-radius: 33px;
  background: #fff;
  cursor: pointer;
}

.btn-undo > img {
  margin: 0 auto;
}
</style>