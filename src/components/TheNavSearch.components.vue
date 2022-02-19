<template>
  <div class="d-flex">
    <input
      type="search"
      class="form-control w-100 border-0 border-bottom rounded-0 logInInput bodyclr0 text-white"
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
.form-control {
  transition: transform 400ms;
}
.form-control :focus {
  padding-left: -100px;
}
</style>
