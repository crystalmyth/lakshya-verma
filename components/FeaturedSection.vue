<template>
  <section class="featured-section section">
    <div class="container-fluid">
      <lines />
      <div class="row">
        <div class="col-sm-6 order-md-2">
          <label
            data-aos="zoom-in"
            data-aos-delay="500"
            data-aos-duration="1000"
            data-aos-easing="ease-in-out"
          >My Featured Skills</label>
          <h2>
            <div
              class="d-inline"
              data-aos="fade-in"
              data-aos-delay="500"
              data-aos-duration="2000"
              data-aos-easing="ease-in-out"
            >I’m using</div>
            <span
              data-aos="fade-right"
              data-aos-delay="500"
              data-aos-duration="2000"
              data-aos-easing="ease-in-out"
            >top leading</span>
            <br />
            <div
              class="d-inline"
              data-aos="fade-in"
              data-aos-delay="500"
              data-aos-duration="2000"
              data-aos-easing="ease-in-out"
            >development languages.</div>
          </h2>
          <p
            data-aos="fade-right"
            data-aos-delay="500"
            data-aos-duration="1000"
            data-aos-easing="ease-in-out"
          >
            I specialize in helping early stage startups validate their riskiest assumptions using
            <strong>leading development languages.</strong>
          </p>
          <div class="languages">
            <div v-for="(lang, index) in languages" :key="index" class="languages-box">
              <div class="languages-box-header">
                <h4
                  data-aos="fade-right"
                  data-aos-delay="500"
                  data-aos-duration="1000"
                  data-aos-easing="ease-in-out"
                >{{ lang.name }}</h4>
                <span
                  data-aos="fade-left"
                  data-aos-delay="500"
                  data-aos-duration="1000"
                  data-aos-easing="ease-in-out"
                >{{ lang.percentage }}</span>
              </div>
              <div class="progress">
                <div
                  data-aos="zoom-in-up"
                  data-aos-delay="500"
                  data-aos-duration="1500"
                  data-aos-easing="ease-in-out"
                  class="progress-bar"
                  role="progressbar"
                  :style="{ width: lang.percentage}"
                  aria-valuenow="25"
                  aria-valuemin="0"
                  aria-valuemax="100"
                ></div>
              </div>
            </div>
          </div>
        </div>
        <div class="col-sm-6 order-md-1 images">
          <img
            src="~/assets/images/object-6.png"
            alt
            class="img-fluid img-1 shadow"
            data-aos="flip-right"
            data-aos-delay="500"
            data-aos-duration="1000"
            data-aos-easing="ease-in-out"
            data-aos-anchor-placement="top-bottom"
          />
          <img
            src="~/assets/images/object-7.png"
            alt
            class="img-fluid img-2 shadow"
            data-aos="flip-right"
            data-aos-delay="500"
            data-aos-duration="1000"
            data-aos-easing="ease-in-out"
            data-aos-anchor-placement="top-bottom"
          />
          <img
            src="~/assets/images/object-8.png"
            alt
            class="img-fluid img-3 shadow"
            data-aos="flip-left"
            data-aos-delay="500"
            data-aos-duration="1500"
            data-aos-easing="ease-in-out"
            data-aos-anchor-placement="top-bottom"
          />
          <img
            src="~/assets/images/object-9.png"
            alt
            class="img-fluid img-4 shadow"
            data-aos="flip-right"
            data-aos-delay="500"
            data-aos-duration="1000"
            data-aos-easing="ease-in-out"
            data-aos-anchor-placement="top-bottom"
          />
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import Lines from '@/components/partial/Lines'
export default {
  components: {
    lines: Lines,
  },
  data() {
    return {
      languages: [
        {
          name: 'Laravel',
          percentage: '80%',
        },
        {
          name: 'Vue',
          percentage: '70%',
        },
        {
          name: 'Livewire',
          percentage: '75%',
        },
        {
          name: 'Javascript',
          percentage: '75%',
        },
        {
          name: 'CSS3',
          percentage: '90%',
        },
        {
          name: 'React',
          percentage: '70%',
        },
      ],
    }
  },
}
</script>

<style lang="scss">
@import '@/assets/scss/_variable.scss';
.featured-section {
  padding-top: 7rem;
  h2 {
    font-family: 'Libre Baskerville', serif;
    font-size: 4rem;
    font-weight: 500;
    padding-bottom: 2rem;
    @media screen and (max-width: $small) {
      font-size: 2.5rem;
    }
    span {
      background-color: $higlight;
      display: inline-block;
      padding: 0.5rem;
    }
  }
  p {
    font-size: 1.6rem;
    @media screen and (max-width: $small) {
      font-size: 1.3rem;
    }
  }
  .languages {
    padding-top: 2rem;
    &-box {
      padding-bottom: 2rem;
      &-header {
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding-bottom: 0.5rem;
        h4,
        span {
          font-size: 1.4rem;
          font-family: 'Libre Baskerville', serif;
          letter-spacing: 0.15rem;
        }
      }
      .progress-bar {
        background-color: $progress;
        border-radius: 1rem;
      }
      .progress {
        border-radius: 1rem;
      }
    }
  }
  .images {
    display: grid;
    grid-template-areas:
      'img-1 ... img-2'
      '... big ...'
      '... ... img-3';
    height: calc(100vh - 7rem);

    img {
      object-fit: contain;
      width: 10rem;
    }
    .img-1 {
      grid-area: big;
      width: auto;
    }
    .img-2 {
      grid-area: img-1;
      border-radius: 1.2rem;
      position: relative;
      top: 2rem;
      left: 5rem;
    }
    .img-3 {
      grid-area: img-2;
      border-radius: 1.2rem;
      transform: scale(1.5);
      position: relative;
      top: 4rem;
      right: 4rem;
    }
    .img-4 {
      grid-area: img-3;
      border-radius: 1.2rem;
      position: relative;
      bottom: 7rem;
      right: 5rem;
      transform: scale(0.75);
    }
  }
}
</style>