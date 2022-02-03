<template>
  <div class="hamburger dropdown" data-bs-toggle="dropdown" id="dropdownmenu1">
    <div class="bar1"></div>
    <div class="bar2"></div>
    <div class="bar3"></div>
  </div>
  <DropDown :navDrop="hamArray" dId="dropdownmenu1" />
</template>

<script>
import DropDown from "./TheNavDrop.components.vue";
export default {
  name: "HamBurger",
  components: {
    DropDown,
  },
  data() {
    return {
      hamArray: ["Channel", "Languages", "Genres"],
    };
  },
};
</script>

<style scoped>
.hamburger {
  display: inline-block;
  cursor: pointer;
}

.bar1,
.bar2,
.bar3 {
  width: 25px;
  height: 2px;
  background-color: #fff;
  margin: 6px 0;
  transition: 0.4s;
}
</style>
