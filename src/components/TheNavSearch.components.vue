<template>
  <div class="d-flex margin">
    <input
      type="search"
      class="form-control w-sm-25 border-0 border-bottom rounded-0 logInInput bodyclr0"
      placeholder="Search"
      id="searchfield"
      name="searchfield"
    />
    <label for="searchfield" class="ms-2 mt-2">
      <i class="bi bi-search text-dark"></i>
    </label>
  </div>
</template>

<script>
export default {
  name: "NavSearch",
};
</script>

<style scoped>
.margin {
  margin-left: 30vw;
}
</style>
