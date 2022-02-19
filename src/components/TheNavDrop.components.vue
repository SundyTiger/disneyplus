<template>
  <div class="dropdown-menu bodyclr1" :style="istyle" :aria-labelledby="dId">
    <router-link
      class="dropdown-item text-white hoverclr1"
      v-for="(drop, i) in navDrop"
      :key="i"
      :to="{ name: 'Filter', params: { id: drop } }"
      >{{ drop }}</router-link
    >
  </div>
  <!-- <router-view :key="$route.path" /> -->
</template>

<script>
export default {
  name: "DropDown",
  props: {
    navDrop: Array,
    dId: String,
    istyle: String,
    name: String,
  },
};
</script>

<style></style>
