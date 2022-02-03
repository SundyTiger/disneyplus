<template>
  <div class="d-flex flex-row">
    <div class="col-lg-6 ms-lg-4 mt-lg-3 me-lg-5 col-sm-12">
      <nav class="nav">
        <ALink>About Disney+ Hotstar</ALink>
        <ALink>Terms of Use</ALink>
        <ALink>Privancy Policy</ALink>
        <ALink>FAQ</ALink>
        <ALink>Feedback</ALink>
        <ALink>Careers</ALink>
      </nav>
      <p class="text-white ps-3 mb-4" style="font-size: 12px">
        © 2021 STAR. All Rights Reserved. HBO, Home Box Office and all related
        channel and programming logos are service <br />
        marks of, and all related programming visuals and elements are the
        property of, Home Box Office, Inc. All rights <br />
        reserved.
      </p>
    </div>
    <div class="col-lg ms-lg-auto mt-lg-4 col-sm-12">
      <p class="text-white mb-lg-2" style="font-size: 14px">Connect with us</p>
      <div class="mt-0">
        <a
          href="https://www.facebook.com/DisneyPlusHotstar"
          target="_blank"
          class="fa fa-facebook"
        ></a>
        <a
          href="https://twitter.com/DisneyPlusHS"
          target="_blank"
          class="fa fa-twitter"
        ></a>
      </div>
    </div>
    <div class="col-lg-4 col-sm-12">
      <p class="text-white mb-1 mt-lg-4 ms-lg-5">Disney+ Hotstar app</p>
      <a
        href="https://play.google.com/store/apps/details?id=in.startv.hotstar"
        target="_blank"
        class="ms-lg-5 mt-lg-0"
        ><img
          src="../assets/Google_Play-Badge-Logo.wine.svg"
          width="135px"
          height="50px"
      /></a>
      <a
        href="https://itunes.apple.com/in/app/hotstar/id934459219?mt=8"
        target="_blank"
        ><img
          class="mt-lg-0"
          src="../assets/App_Store_(iOS)-Badge-Logo.wine.svg"
          width="135px"
          height="50px"
      /></a>
    </div>
  </div>
</template>

<script>
import ALink from "./Aboutlink.components.vue";
export default {
  name: "AboutPage",
  components: {
    ALink,
  },
};
</script>

<style></style>
