<template>
  <div class="service-section section">
    <div class="container-fluid">
      <lines />
      <div class="row">
        <div class="col-sm-6">
          <label
            data-aos="zoom-in"
            data-aos-delay="500"
            data-aos-duration="2000"
            data-aos-easing="ease-in-out"
          >My Services</label>
          <h2>
            <span
              data-aos="fade-right"
              data-aos-delay="500"
              data-aos-duration="2000"
              data-aos-easing="ease-in-out"
            >Build your brand</span>
            <div
              class="d-inline"
              data-aos="fade-in"
              data-aos-delay="500"
              data-aos-duration="2000"
              data-aos-easing="ease-in-out"
            >
              and
              <br />grow your business.
            </div>
          </h2>
          <p
            data-aos="fade-right"
            data-aos-delay="500"
            data-aos-duration="1000"
            data-aos-easing="ease-in-out"
          >Whether you are working on a new startup or have an existing product, I’d love the opportunity to help you and your team solve your most challenging problems.</p>
          <ul>
            <li
              data-aos="fade-down"
              data-aos-delay="500"
              data-aos-duration="2000"
              data-aos-easing="ease-in-out"
            >Website Design</li>
            <li
              data-aos="fade-down"
              data-aos-delay="1000"
              data-aos-duration="2000"
              data-aos-easing="ease-in-out"
            >Website Development</li>
            <li
              data-aos="fade-down"
              data-aos-delay="1500"
              data-aos-duration="2000"
              data-aos-easing="ease-in-out"
            >Mobile App Development</li>
          </ul>
        </div>
        <div class="col-sm-6">
          <div class="images">
            <img
              data-aos="zoom-in"
              data-aos-delay="1000"
              data-aos-duration="2000"
              data-aos-easing="ease-in-out"
              src="~/assets/images/object-1.png"
              alt
              class="img-1 img-fluid"
            />
            <img
              data-aos="zoom-in"
              data-aos-delay="500"
              data-aos-duration="1500"
              src="~/assets/images/object-2.png"
              alt
              class="img-fluid float-img img-2"
            />
            <img
              data-aos="zoom-in"
              data-aos-delay="500"
              data-aos-duration="1700"
              src="~/assets/images/object-4.png"
              alt
              class="img-fluid float-img img-3"
            />
            <img
              data-aos="zoom-in"
              data-aos-delay="500"
              data-aos-duration="1300"
              src="~/assets/images/object-3.png"
              alt
              class="img-fluid float-img img-4"
            />
            <img
              data-aos="zoom-in"
              data-aos-delay="500"
              data-aos-duration="1600"
              src="~/assets/images/object-5.png"
              alt
              class="img-fluid float-img img-5"
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
  name: 'ServiceSection',
  components: {
    lines: Lines,
  },
}
</script>

<style lang="scss">
@import '@/assets/scss/_variable';
.service-section {
  padding-top: 10rem;
  padding-bottom: 10rem;
  // background-color: $higlight;
  .container-fluid {
    .row {
      .col-sm-6 {
        position: relative !important;
        display: flex;
        flex-direction: column;
        justify-content: center;
        h2 {
          font-size: 4rem;
          font-family: 'Libre Baskerville', serif;
          @media screen and (max-width: $small) {
            font-size: 2.5rem;
          }
          span {
            background-color: $higlight;
            display: inline-block;
            padding: 0rem 0.5rem;
          }
        }
        p {
          color: $primary;
          padding-top: 3rem;
          @media screen and (max-width: $small) {
            font-size: 1.2rem;
          }
        }
        ul {
          padding-top: 2rem;
          list-style: none;
          padding-left: 0rem;
          li {
            color: $primary;
            font-size: 2rem;
            padding-bottom: 1rem;
            font-weight: bold;
            @media screen and (max-width: $small) {
              font-size: 1.4rem;
            }
          }
        }

        .images {
          display: grid;
          grid-template-areas:
            'img-2 big img-3'
            '... big ...'
            'img-4 big img-5';
          img {
            object-fit: contain;
          }
          [class*='img-'] {
            border-radius: 0.5rem;
            box-shadow: 0px 0px 2.5rem #eaeaea;
            width: 10rem;
          }
          .img-1 {
            height: calc(100vh - 7rem);
            grid-area: big;
            box-shadow: none;
            width: calc(100% - 2rem);
            transform: scale(1.4);
          }
          .img-2 {
            height: 100%;
            grid-area: img-2;
            height: 10rem;
          }
          .img-3 {
            height: 100%;
            grid-area: img-3;
            width: 15rem;
          }
          .img-4 {
            height: 100%;
            grid-area: img-4;
            margin-bottom: 2rem;
            height: 13rem;
            width: 13rem;
            position: relative;
            z-index: inherit;
          }
          .img-5 {
            height: 100%;
            grid-area: img-5;
            margin-bottom: 5rem;
            width: 7rem;
            height: 7rem;
            position: relative;
            z-index: inherit;
          }
        }
      }
    }
  }
}
</style>