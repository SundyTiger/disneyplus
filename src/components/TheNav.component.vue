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
    </ul>
    <ul class="d-flex mb-2 mb-lg-0">
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
      logShow: false,
      TVArray: [
        "HotStarSpecials",
        "Quix",
        "StarJalsha",
        "StarPlus",
        "StarVijay",
        "StarBharat",
        "Asianet",
        "StarMaa",
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
        "AmericanFootball",
        "eSports",
        "FormulaE",
        "MartialArts",
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
