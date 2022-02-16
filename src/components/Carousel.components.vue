<template>
  <div class="row mb-2">
    <div class="col-10 m-auto">
      <div id="slider1" class="carousel slide" data-bs-ride="carousel">
        <Indicators :data="data" />
        <div class="carousel-inner" role="listbox">
          <Inner :data="x" :index="i" v-for="(x, i) in data" :key="i" />
        </div>
        <PrevControl phref="#slider1" />
        <NextControl nhref="#slider1" />
      </div>
    </div>
  </div>
</template>

<script>
import Indicators from "../components/CarouselIndicator.components.vue";
import Inner from "../components/CarouselInner.components.vue";
import NextControl from "../components/CarouselNext.components.vue";
import PrevControl from "../components/CarouselPrev.components.vue";
import User from "../services/User.services";
export default {
  name: "Carousel",
  components: {
    Indicators,
    Inner,
    NextControl,
    PrevControl,
  },
  data() {
    return {
      data: [],
      carData: [
        {
          title: "IshqBaaz",
          channel: "StarPlus",
          lang: "Hindi",
          cert: "Family",
          Info: " Brothers Shivaay, Omkara and Rudra share an unbreakable bond despite their dysfunctional family. What happens when cupid strikes each of them?",
          imgSrc:
            "https://img1.hotstarext.com/image/upload/f_auto,t_web_m_1x/sources/r1/cms/prod/6841/336841-h",
        },
        {
          title: "ipl2021",
          channel: "StarPlus",
          lang: "Hindi",
          cert: "Family",
          Info: " Brothers Shivaay, Omkara and Rudra share an unbreakable bond despite their dysfunctional family. What happens when cupid strikes each of them?",
          imgSrc:
            "https://img1.hotstarext.com/image/upload/f_auto,t_web_m_1x/sources/r1/cms/prod/6774/1066774-h-231f1014ad3c",
        },
        {
          title: "Big Boss Telugu",
          channel: "StarPlus",
          lang: "Hindi",
          cert: "Family",
          Info: " Brothers Shivaay, Omkara and Rudra share an unbreakable bond despite their dysfunctional family. What happens when cupid strikes each of them?",
          imgSrc:
            "https://img1.hotstarext.com/image/upload/f_auto,t_web_m_1x/sources/r1/cms/prod/3893/1063893-h-62576885fa3f",
        },
        {
          title: "Big Boss Tamil",
          channel: "StarPlus",
          lang: "Hindi",
          cert: "Family",
          Info: " Brothers Shivaay, Omkara and Rudra share an unbreakable bond despite their dysfunctional family. What happens when cupid strikes each of them?",
          imgSrc:
            "https://img1.hotstarext.com/image/upload/f_auto,t_web_m_1x/sources/r1/cms/prod/2687/1052687-h-20cbf695bb0a",
        },
      ],
    };
  },
  async created() {
    this.data = await User.UserMovies()
      .then((res) => res.data.movies)
      .catch((e) => e);
    console.log(this.data);
  },
};
</script>

<style></style>
