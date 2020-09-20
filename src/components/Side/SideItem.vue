<template>
  <section>
    <div v-for="(v, n) in items" :key="n" class="item">
      <div>{{ capitalize(n) }}</div>
      <div>{{ formatPrice(v.price) }}</div>
      <div>{{ "x" + v.qty }}</div>
      <div>{{ formatPrice(v.tot) }}</div>
    </div>
  </section>
</template>

<script>
// Utils
import { capitalize, formatPrice } from "../../util";

export default {
  name: "SideItem",
  props: ["items"],
  methods: {
    capitalize,
    formatPrice,
  },
};
</script>

<style scoped>
section {
  padding: 0 10px 10px 10px;
  border-bottom: 1px solid #ccd2d9;
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 24px;
  text-align: right;
  letter-spacing: normal;
}

.item {
  display: flex;
  font-style: normal;
  font-weight: normal;
}

.item > div:nth-child(1) {
  text-align: left;
  width: 45%;
}

.item > div:nth-child(2) {
  width: 20%;
}

.item > div:nth-child(3) {
  width: 15%;
}

.item > div:nth-child(4) {
  width: 20%;
}
</style>
