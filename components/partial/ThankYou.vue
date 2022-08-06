<template>
  <div class="thankyou" :class="{'d-none' : !display}">
    <div class="container">
      <img src="@/assets/images/thanks.png" alt class="img-fluid thank-you" />
      <div>
        <h4>Thank you for your query.</h4>
        <p>I'll get back to you as soon as i can.</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ['display'],
}
</script>

<style lang="scss">
@import '@/assets/scss/_variable.scss';
.thankyou {
  .container {
    display: flex;
    align-items: center;
    justify-content: center;
    img {
      height: 5rem;
      object-fit: contain;
    }
    h4 {
      font-family: 'Libre Baskerville', serif;
      font-size: 2rem;
      font-weight: bold;
      color: $primary;
    }
    p {
      font-size: 1.2rem;
      letter-spacing: 0.2rem;
    }
  }
}
</style>