<template>
  <div class="contact-section section">
    <div class="container-fluid">
      <lines />
      <label
        data-aos="zoom-in"
        data-aos-delay="500"
        data-aos-duration="1000"
        data-aos-easing="ease-in-out"
      >Contact Me</label>
      <h2>
        <div
          class="d-inline"
          data-aos="zoom-in-up"
          data-aos-delay="500"
          data-aos-duration="1500"
          data-aos-easing="ease-in-out"
        >Are you ready to</div>
        <span
          data-aos="fade-right"
          data-aos-delay="500"
          data-aos-duration="1000"
          data-aos-easing="ease-in-out"
        >work together?</span>
      </h2>
      <p
        data-aos="zoom-left"
        data-aos-delay="500"
        data-aos-duration="1000"
        data-aos-easing="ease-in-out"
      >
        I’m always interested in hearing about new projects and opportunities.
        <br />You can tell me about the problems you are trying to solve. I’d love to listen and see if there’s anything I can do to help you.
      </p>
      <button
        class="btn btn-primary"
        @click="PopupQuery()"
        data-aos="flip-right"
        data-aos-delay="500"
        data-aos-duration="1000"
        data-aos-easing="ease-in-out"
        data-aos-anchor-placement="top-bottom"
      >Submit A Request</button>
      <div class="row">
        <div class="col-sm-4">
          <a
            href="tel:8619325471"
            data-aos="flip-right"
            data-aos-delay="500"
            data-aos-duration="1000"
            data-aos-easing="ease-in-out"
            data-aos-anchor-placement="top-bottom"
          >(+91) 861 932 5471</a>
        </div>
        <div class="col-sm-4">
          <a
            href="mailto:lakshayverma.lv@gmail.com"
            data-aos="flip-right"
            data-aos-delay="500"
            data-aos-duration="1000"
            data-aos-easing="ease-in-out"
            data-aos-anchor-placement="top-bottom"
          >lakshayverma.lv@gmail.com</a>
        </div>
        <div class="col-sm-4">
          <a
            href="#"
            data-aos="flip-right"
            data-aos-delay="500"
            data-aos-duration="1000"
            data-aos-easing="ease-in-out"
            data-aos-anchor-placement="top-bottom"
          >Gurugram, India</a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Lines from '@/components/partial/Lines'
export default {
  props: ['popup'],
  components: {
    lines: Lines,
  },
  methods: {
    PopupQuery() {
      this.$emit('changePopup', !this.popup)
    },
  },
}
</script>

<style lang="scss">
@import '@/assets/scss/_variable.scss';
.contact-section {
  text-align: center;

  .container-fluid {
    height: 100vh !important;
    padding-top: 6rem;
    position: relative;
  }

  h2 {
    font-family: 'Libre Baskerville', serif;
    font-size: 4rem;
    font-weight: 500;
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
    width: 60%;
    margin: auto;
    padding-bottom: 2rem;
    margin-top: 2.5rem;
    @media screen and (max-width: 800px) {
      width: 100%;
    }
    span {
      font-weight: bold;
    }
  }
  .btn {
    background-color: #1f2044;
    border-color: #1f2044;
    height: 4rem;
    width: 22.6rem;
    text-transform: uppercase;
    padding: 0;
    border-radius: 4rem;
    font-weight: bold;
    font-size: 1.5rem;
    margin-top: 3rem;
  }
  .row {
    position: absolute;
    width: 100%;
    bottom: 15rem;
    @media screen and (max-width: 800px) {
      bottom: 5rem;
    }
    .col-sm-4 {
      display: flex;
      align-items: center;
      justify-content: center;
      @media screen and (max-width: 800px) {
        padding-bottom: 1rem;
      }
      a {
        text-decoration: none;
        color: $primary;
        font-size: 2rem;
      }
      &:nth-child(1) {
        a {
          font-size: 3rem;
          font-weight: bold;
        }
      }
    }
  }
}
</style>