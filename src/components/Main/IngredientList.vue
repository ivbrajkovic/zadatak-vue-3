<template>
  <footer>
    <!-- ingredient list -->
    <div class="list">
      <div v-for="item in items" :key="item.name" class="list-item" @click="ingredientClik(item)">
        <img :src="item.svg" :alt="item.name" />
      </div>
    </div>

    <!-- Button move left -->
    <button class="btn btn-list" aria-label="previous ingredient" v-on:click="moveLeft">
      <img :src="icons.leftArrow" />
    </button>

    <!-- Button move right -->
    <button class="btn btn-list" aria-label="next ingredient" v-on:click="moveRight">
      <img :src="icons.rightArrow" />
    </button>
  </footer>
</template>

<script>
import { reactive } from "vue";

// Components
import icons from "../../data/icons";

// Store
import useStore from "../../store/useStore";

export default {
  name: "IngredientList",

  setup() {
    const { ingredients, pushIngredient } = useStore();
    const items = reactive([...ingredients]);

    return {
      items,
      pushIngredient,
      icons,
    };
  },

  methods: {
    ingredientClik(ingredient) {
      this.pushIngredient(ingredient);
    },

    // Move ingredients list to left
    moveLeft() {
      const el = this.items.shift();
      this.items.push(el);
    },

    // Move ingredients list to right
    moveRight() {
      const el = { ...this.items.pop() };
      this.items.unshift(el);
    },
  },
};
</script>

<style scoped>
footer {
  display: grid;
  align-items: center;
  grid-template-columns: 1fr auto auto;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.15);
  border: 1px solid #d6d6d6;
  border-radius: 3px;
}

.list {
  width: 100%;
  height: 66px;
  display: flex;
  align-items: center;
  overflow-x: hidden;
}

.list-item {
  margin: 0 0.6rem;
  cursor: pointer;
}

.btn-list {
  border-radius: 0;
  border: none;
  border-left: var(--button-border);
}
</style>
