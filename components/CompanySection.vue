<template>
  <div class="company-section section">
    <div class="container-fluid">
      <lines />
      <div class="row">
        <div class="col-sm-7 company-section-content">
          <label
            data-aos="zoom-in"
            data-aos-delay="500"
            data-aos-duration="2000"
            data-aos-easing="ease-in-out"
          >My Clients & Employeers</label>
          <h2
            data-aos="fade-left"
            data-aos-delay="500"
            data-aos-duration="1000"
            data-aos-easing="ease-in-out"
          >Some Of Companies I worked with :</h2>
          <p
            data-aos="fade-right"
            data-aos-delay="500"
            data-aos-duration="1000"
            data-aos-easing="ease-in-out"
          >Over the past four years, I’ve been fortunate to work with and for people from some amazing organizations.</p>
          <div class="company-section-content-count">
            <div class="company-section-content-count-box">
              <h4
                data-aos="fade-left"
                data-aos-delay="500"
                data-aos-duration="1000"
                data-aos-easing="ease-in-out"
              >25+</h4>
              <div
                data-aos="fade-right"
                data-aos-delay="500"
                data-aos-duration="1000"
                data-aos-easing="ease-in-out"
              >
                <h5>Total Client</h5>
                <span>In Pan India</span>
              </div>
            </div>
            <div class="company-section-content-count-box">
              <h4
                data-aos="fade-left"
                data-aos-delay="500"
                data-aos-duration="1000"
                data-aos-easing="ease-in-out"
              >95%</h4>
              <div
                data-aos="fade-right"
                data-aos-delay="500"
                data-aos-duration="1000"
                data-aos-easing="ease-in-out"
                l
              >
                <h5>Sensitive Feedback</h5>
                <span>At project quality</span>
              </div>
            </div>
          </div>
        </div>
        <div class="col-sm-5">
          <div class="company-section-body">
            <img
              data-aos="zoom-down"
              data-aos-delay="500"
              data-aos-duration="1000"
              data-aos-easing="ease-in-out"
              src="~/assets/images/companies/rentfoxxy-logo.png"
              class="img-fluid rounded shadow-lg img-1"
            />
            <img
              data-aos="fade-right"
              data-aos-delay="500"
              data-aos-duration="1000"
              data-aos-easing="ease-in-out"
              src="~/assets/images/companies/denesahealth-logo.png"
              class="img-fluid rounded shadow-lg img-2"
            />
            <img
              data-aos="fade-right"
              data-aos-delay="500"
              data-aos-duration="1000"
              data-aos-easing="ease-in-out"
              src="~/assets/images/companies/gorefurbo-logo.jpeg"
              class="img-fluid rounded shadow-lg img-3"
            />
            <img
              data-aos="zoom-in"
              data-aos-delay="500"
              data-aos-duration="2000"
              data-aos-easing="ease-in-out"
              src="~/assets/images/companies/aaftonline-logo.png"
              class="img-fluid rounded shadow-lg img-4"
            />
            <img
              data-aos="zoom-right"
              data-aos-delay="500"
              data-aos-duration="1000"
              data-aos-easing="ease-in-out"
              src="~/assets/images/companies/routecorp-logo.png"
              class="img-fluid rounded shadow-lg img-5"
            />
            <img
              data-aos="zoom-left"
              data-aos-delay="500"
              data-aos-duration="1000"
              data-aos-easing="ease-in-out"
              src="~/assets/images/companies/livefunish-logo.png"
              class="img-fluid rounded shadow-lg img-6"
            />
            <img
              data-aos="zoom-up"
              data-aos-delay="500"
              data-aos-duration="1000"
              data-aos-easing="ease-in-out"
              src="~/assets/images/companies/truetech-logo.png"
              class="img-fluid rounded shadow-lg img-7"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Lines from '@/components/partial/Lines'
export default {
  components: {
    lines: Lines,
  },
}
</script>

<style lang="scss">
@import '@/assets/scss/_variable.scss';
.company-section {
  .container-fluid {
    padding-top: 10rem;
    h2 {
      font-family: 'Libre Baskerville', serif;
      font-size: 4rem;
      font-weight: 500;
      margin-bottom: 4rem;
      @media screen and (max-width: $small) {
        font-size: 2.5rem;
      }
    }
    p {
      @media screen and (max-width: $small) {
        font-size: 1.3rem;
      }
    }
  }
  &-content {
    &-count {
      margin-top: 5rem;
      &-box {
        margin-bottom: 2rem;
        display: flex;
        align-items: center;
        h4 {
          font-size: 5rem;
          color: $progress;
        }
        div {
          margin-left: 2rem;
          h5 {
            text-transform: uppercase;
            font-weight: bold;
            font-size: 1.6rem;
            color: #1f2044;
          }
          span {
            font-size: 1.3rem;
            color: #234969;
          }
        }
      }
    }
  }

  &-body {
    display: grid;
    grid-template-areas:
      'img-1 img-1 img-2'
      'img-3 img-4 img-5'
      'img-6 img-7 img-7';
    grid-gap: 6rem;
    @media screen and (max-width: 800px) {
      padding-bottom: 4rem;
    }
    img {
      object-fit: contain;
      width: 100%;
      height: 10rem;
    }
    .img-1 {
      grid-area: img-2;
      transform: scale(1.2);
    }
    .img-2 {
      grid-area: img-1;
      background-color: #1f98df;
    }
    .img-3 {
      grid-area: img-3;
      padding: 0.5rem;
    }
    .img-4 {
      grid-area: img-4;
      transform: scale(1.7);
      background-color: #c5d509;
    }
    .img-5 {
      grid-area: img-5;
    }
    .img-6 {
      grid-area: img-7;
      background-color: #fff;
      padding: 0.5rem;
    }
    .img-7 {
      grid-area: img-6;
      transform: scale(1.2);
    }
  }
}
</style>