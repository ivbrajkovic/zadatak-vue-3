<template>
  <section>
    <div>
      <img
        v-for="(ingredient, key) in sandwich"
        :key="key"
        :style="{
          zIndex: key,
          transform: 'translate3D(-50%, ' + (0 - key * 15) + 'px, 0) scale(3)',
        }"
        :src="ingredient.svg"
      />
    </div>
  </section>
</template>

<script>
// Store
import useStore from "../../store/useStore";

export default {
  name: "SandwichView",

  setup() {
    const { sandwich } = useStore();
    return { sandwich };
  },
};
</script>

<style scoped>
section {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

section > div {
  position: relative;
  height: 300px;
  width: 300px;
}

img {
  position: absolute;
  bottom: 15%;
  left: 50%;
}

img:first-child {
  filter: drop-shadow(2px 8px 36px rgba(49, 49, 49, 0.14));
}
</style>
