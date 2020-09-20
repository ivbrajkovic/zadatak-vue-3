<template>
  <div id="app">
    <Main />
    <Side v-if="!isMobileView || isShowBill" :wantedPrice="17.0" />
  </div>
  <MobileFooter v-if="isMobileView">isMobileView</MobileFooter>
</template>

<script>
// Components
import Main from "./components/Main";
import Side from "./components/Side";
import MobileFooter from "./components/MobileFooter";

// Store
import useStore from "./store/useStore";

export default {
  name: "App",
  components: {
    Main,
    Side,
    MobileFooter,
  },

  setup() {
    // Store
    const {
      setMobileView,
      isShowBill,
      setShowBill,
      pushIngredient,
      ingredients,
      isMobileView,
    } = useStore();

    // Media query
    const mobileViewQuery = matchMedia("screen and (max-width: 768px)");
    console.log("setup -> mobileViewQuery", mobileViewQuery);
    console.log(
      "setup -> mobileViewQuery.addEventListener",
      mobileViewQuery.addEventListener
    );
    setMobileView(mobileViewQuery.matches);
    mobileViewQuery.addEventListener("change", (e) => {
      setMobileView(e.matches);
      if (!e.matches && isShowBill) setShowBill(false);
    });

    // Set the first ingredient on sandwich
    pushIngredient(ingredients.find((el) => (el.name = "kruh")));

    return {
      isMobileView,
      isShowBill,
      setMobileView,
      pushIngredient,
    };
  },
};
</script>

<style scoped>
#app {
  background: #ffffff;

  margin: 0 auto;
  padding: var(--app-padding);
  width: 100%;
  max-width: 776px;
  height: 100%;
  max-height: 499px;

  display: flex;
}
</style>
