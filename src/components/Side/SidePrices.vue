<template>
  <section class="grid-prices">
    <div>Ukupno</div>
    <div>{{ formatPrice(total) }}</div>
    <div>Željena cijena</div>
    <div>{{ formatPrice(wantedPrice) }}</div>
    <div>Razlika</div>
    <div>{{ formatPrice(diff) }}</div>
  </section>
</template>

<script>
// Utils
import { capitalize, formatPrice } from "../../util";

export default {
  name: "SidePrices",
  props: ["total", "wantedPrice", "diff"],
  methods: {
    capitalize,
    formatPrice,
  },
};
</script>

<style scoped>
section {
  padding: 0 10px;
  font-style: normal;
  font-weight: 600;
  font-size: 14px;
  line-height: 20px;
  letter-spacing: 0.2px;
}

.grid-prices {
  display: grid;
  grid-template-columns: 2fr 1fr;
  grid-gap: 10px;
}

.grid-prices > *:nth-child(even) {
  text-align: right;
}

.grid-prices > *:nth-child(4) {
  font-style: normal;
  font-weight: normal;
  font-size: 18px;
  line-height: 26px;
  letter-spacing: 0.1px;
  border-bottom: 1.6px solid #1b63a4;
}
</style>
