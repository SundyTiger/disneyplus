<template>
  <li
    :class="`nav-item ${DidShow()}`"
    :data-bs-toggle="DidShow()"
    :id="dId"
    aria-expanded="false"
  >
    <router-link :class="bclass" :style="bstyle" :to="`/${toRoutes()}`">{{
      navItem
    }}</router-link>
  </li>
  <DropDown
    :navDrop="navDrop"
    :istyle="istyle"
    :dId="dId"
    v-show="show(navDrop)"
  />
  <!-- <router-view :key="$route.path" /> -->
</template>

<script>
import DropDown from "./TheNavDrop.components.vue";
export default {
  name: "NavItem",
  props: {
    navItem: String,
    navDrop: Array,
    dId: String,
    istyle: String,
    bstyle: String,
    bclass: String,
  },
  components: { DropDown },
  methods: {
    show(navDrop) {
      if (navDrop) {
        return true;
      } else {
        return false;
      }
    },
    DidShow() {
      if (this.dId) {
        return "dropdown";
      } else {
        return "";
      }
    },
    toRoutes() {
      if (this.navDrop) {
        return "";
      } else {
        return this.navItem;
      }
    },
  },
};
</script>

<style></style>
