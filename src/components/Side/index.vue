<template>
  <div v-if="isMobileView" class="overlay" />
  <!-- <aside :style="{background: 'url(' + backgrounds.bill + ') no-repeat'}"> -->
  <aside :class="{mobile: isMobileView}">
    <!-- Background -->
    <img :src="background" />

    <!-- header -->
    <header>Tvoj sendvič</header>

    <!-- Ingredient list -->
    <SideItem :items="items" />

    <!-- Prices -->
    <SidePrices :total="total" :wantedPrice="wantedPrice" :diff="diff" />

    <!-- Footer -->
    <footer>
      Zahvaljujemo na povjernju.
      <br />Doiđte nam opet.
    </footer>
  </aside>
</template>

<script>
import { ref } from "vue";

// Background
import backgrounds from "../../data/backgrounds";

// Components
import SideItem from "./SideItem";
import SidePrices from "./SidePrices";

// Store
import useStore from "../../store/useStore";

export default {
  name: "Side",
  components: { SideItem, SidePrices },

  props: {
    wantedPrice: {
      type: Number,
      default: 0.0,
    },
  },

  computed: {
    background() {
      return this.isMobileView ? backgrounds.billMobile : backgrounds.bill;
    },
  },

  setup() {
    const items = ref({});
    const diff = ref(0.0);
    const total = ref(0.0);
    const { isMobileView, sandwich } = useStore();

    return {
      isMobileView,
      sandwich,
      items,
      diff,
      total,
      backgrounds,
    };
  },

  watch: {
    // Watch for ingredients added (deep watch)
    "sandwich.length": {
      immediate: true,
      // deep: true,
      handler() {
        let diff = 0.0,
          total = 0.0,
          items = {},
          ingredient;

        for (let i = 0; i < this.sandwich.length; i++) {
          ingredient = this.sandwich[i];

          // If already on list update prices
          if (items[ingredient.name]) {
            items[ingredient.name].tot += ingredient.price;
            items[ingredient.name].qty++;
          } else {
            // Add ingredient to the list
            items = {
              ...items,
              [ingredient.name]: {
                price: ingredient.price,
                qty: 1,
                tot: ingredient.price,
              },
            };
          }

          total += ingredient.price;
          diff = this.wantedPrice - total;
        }

        // Update state
        this.diff = diff;
        this.total = total;
        this.items = items;
      },
    },
  },
};
</script>

<style scoped>
.overlay {
  position: absolute;
  margin: 0;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  background: rgba(0, 31, 65, 0.3);
}

aside {
  margin-left: 10px;

  width: 243px;
  height: 479px;
  padding: 10px 0;
  position: relative;

  flex-shrink: 0;

  display: grid;
  grid-template-rows: auto auto auto 1fr;
  grid-gap: 0.6rem;
}

aside.mobile {
  height: 429px;
  position: absolute;
  top: 30%;
  left: 50%;
  margin: 0 auto;
  transform: translate(-50%, -30%);
}

aside > img {
  position: absolute;
  top: 0;
  left: 0;
  z-index: 0;
}

aside > header {
  margin-top: 9px;
  margin-bottom: 5px;
  padding: 0 10px;
  font-style: normal;
  font-weight: 600;
  font-size: 16px;
  line-height: 22px;
  letter-spacing: 0.1px;
  z-index: 1;
}

aside > section {
  z-index: 1;
}

aside > footer {
  padding: 0 10px;
  align-self: end;
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: 18px;
  letter-spacing: normal;
  z-index: 1;
}

.btn-container {
  height: 70px;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
