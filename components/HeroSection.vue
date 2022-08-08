<template>
  <div class="hero-section section">
    <div class="container-fluid">
      <lines />
      <label
        data-aos="zoom-in"
        data-aos-delay="500"
        data-aos-duration="1000"
        data-aos-easing="ease-in-out"
      >About Me</label>
      <h1>
        <div
          class="d-inline"
          data-aos="fade-right"
          data-aos-delay="500"
          data-aos-duration="1000"
          data-aos-easing="ease-in-out"
        >
          <img src="~/assets/images/waving-hand.png" class="img-fluid wave-icon" /> Hey,
        </div>
        <!-- Welcome to -->
        <span
          data-aos="fade-left"
          data-aos-delay="500"
          data-aos-duration="1000"
          data-aos-easing="ease-in-out"
        >Lakshya</span>
        <div
          class="d-inline"
          data-aos="fade-right"
          data-aos-delay="500"
          data-aos-duration="1000"
          data-aos-easing="ease-in-out"
        >here.</div>
      </h1>
      <h2
        data-aos="fade-right"
        data-aos-delay="500"
        data-aos-duration="1000"
        data-aos-easing="ease-in-out"
      >working as Full Stack Developer.</h2>
      <p
        data-aos="fade-up"
        data-aos-delay="500"
        data-aos-duration="1000"
        data-aos-easing="ease-in-out"
      >
        I will help you
        <span>build your brand</span> and
        <span>grow your business</span>. I create clarifying strategy, beautiful and engaging websites and ongoing marketing support.
      </p>
      <img src="~/assets/images/hero-section-img.png" alt class="img-fluid hero-section-img" />
    </div>
  </div>
</template>

<script>
import Lines from "@/components/partial/Lines";
export default {
  components: {
    lines: Lines,
  },
};
</script>

<style lang="scss">
@import "@/assets/scss/_variable.scss";
.hero-section {
  text-align: center;
  @media screen and (max-width: $small) {
    width: 100vw;
    overflow-x: hidden;
  }
  .wave-icon {
    height: 4rem;
    object-fit: contain;
  }

  .container-fluid {
    height: 100vh !important;
    padding-top: 6rem;
  }

  h1,
  h2 {
    font-family: "Libre Baskerville", serif;
    font-size: 4rem;
    font-weight: 500;
    @media screen and (max-width: $small) {
      font-size: 2rem;
    }
    span {
      background-color: $higlight;
      display: inline-block;
      padding: 0rem 0.5rem;
      font-weight: 600;
    }
  }
  p {
    color: $primary;
    padding-top: 2rem;
    font-size: 1.6rem;
    width: 75%;
    margin: auto;
    padding-bottom: 2rem;
    @media screen and (max-width: $small) {
      font-size: 1.2rem;
      width: 90%;
    }
    span {
      font-weight: bold;
    }
  }
  &-img {
    height: 40rem;
    object-fit: contain;
    margin: auto;
    position: absolute;
    bottom: 0rem;
    left: 50%;
    transform: translateX(-50%);
    @media screen and (max-width: 800px) {
      bottom: -8rem;
    }
    @media screen and (min-width: 800px) and (orientation: portrait) {
      bottom: -6rem;
      height: 60rem;
      max-width: 200%;
    }
  }
}
</style>