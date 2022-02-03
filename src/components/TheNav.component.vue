<template>
  <button
    class="navbar-toggler"
    type="button"
    data-bs-toggle="collapse"
    data-bs-target="#navbar1"
    aria-controls="navbar1"
    aria-expanded="false"
    aria-label="Toggle navigation"
  >
    <div class="line"></div>
    <div class="line"></div>
    <div class="line"></div>
  </button>
  <div class="collapse navbar-collapse" id="navbar1">
    <ul class="navbar-nav me-auto mb-2 mb-lg-0">
      <Item
        navItem="TV"
        :navDrop="TVArray"
        dId="dropdownmenu2"
        istyle="margin-left: 8vw"
        bclass="nav-link text-white"
      />
      <Item
        navItem="Movies"
        :navDrop="MovieArray"
        dId="dropdownmenu3"
        istyle="margin-left: 12vw"
        bclass="nav-link text-white"
      />
      <Item
        navItem="Sports"
        :navDrop="SportsArray"
        dId="dropdownmenu4"
        istyle="margin-left: 16vw"
        bclass="nav-link text-white"
      />
      <Item navItem="Disney+" bclass="nav-link text-white" />
      <Item
        navItem="KiDS"
        bstyle="font-family: 'Mochiy Pop P One', sans-serif;"
        bclass="nav-link text-warning fw-bold"
      />
      <Search />
      <NavButton />
      <LogIn />
    </ul>
  </div>
</template>

<script>
import Item from "../components/TheNavItem.component.vue";
import Search from "../components/TheNavSearch.components.vue";
import NavButton from "../components/TheNavButton.components.vue";
import LogIn from "../components/LogIn.vue";
export default {
  name: "NavList",
  components: {
    Item,
    Search,
    NavButton,
    LogIn,
  },
  data() {
    return {
      TVArray: [
        "HotStar Specials",
        "Quix",
        "Star Jalsha",
        "Star Plus",
        "Star Vijay",
        "Star Bharat",
        "Asianet",
        "Star Maa",
        "more..",
      ],
      MovieArray: [
        "Hindi",
        "Bengali",
        "Telugu",
        "Malyalam",
        "Tamil",
        "Marathi",
        "English",
        "Kannada",
      ],
      SportsArray: [
        "Cricket",
        "Football",
        "Badminton",
        "Formula 1",
        "Kabbadi",
        "Tennis",
        "American Football",
        "eSports",
        "Formula E",
        "Martial Arts",
        "Hockey",
        "Athletics",
        "Golf",
        "Wresling",
      ],
    };
  },
};
</script>

<style></style>
