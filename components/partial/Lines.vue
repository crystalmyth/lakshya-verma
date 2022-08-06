<template>
  <div
    class="lines"
    data-aos="fade-right"
    data-aos-delay="500"
    data-aos-duration="2000"
    data-aos-easing="ease-in-out"
  >
    <div class="lines-first"></div>
    <div class="lines-second"></div>
    <div class="lines-third"></div>
  </div>
</template>

<script>
export default {
  name: 'TheLines',
}
</script>

<style lang="scss">
.lines {
  position: absolute;
  height: 150%;
  top: -30%;
  width: 100%;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  z-index: -1;
  div {
    border-right: 1px solid rgba(#333, 0.1);
  }
}
</style>