<template>
  <div class="experience-section section">
    <div class="container-fluid">
      <lines />
      <div class="row">
        <div class="col-sm-6">
          <img
            data-aos="zoom-in-down"
            data-aos-delay="500"
            data-aos-duration="1000"
            data-aos-easing="ease-in-out"
            src="~/assets/images/experience.png"
            alt
            class="img-fluid"
          />
          <div class="experience-box">
            <h4
              class="card-title"
              data-aos="fade-right"
              data-aos-delay="500"
              data-aos-duration="1000"
              data-aos-easing="ease-in-out"
            >
              Experience
            </h4>
            <div
              v-for="(experience, index) in this.$store.getters.getExperience"
              :key="index"
              class="box"
            >
              <h4
                class="box-title"
                data-aos="fade-right"
                data-aos-delay="500"
                data-aos-duration="1000"
                data-aos-easing="ease-in-out"
              >
                {{ experience.title }}
              </h4>
              <div
                class="box-content"
                data-aos="fade-left"
                data-aos-delay="500"
                data-aos-duration="1000"
                data-aos-easing="ease-in-out"
              >
                <p class="box-description">{{ experience.content }}</p>
                <span class="box-time">{{ experience.time }}</span>
              </div>
              <details
                data-aos="fade-right"
                data-aos-delay="500"
                data-aos-duration="1000"
                data-aos-easing="ease-in-out"
              >
                <summary>Worked With</summary>
                <div class="box-lang">
                  <div
                    v-for="(ln, ind) in experience.lang"
                    :key="`box-lang-img-${ind}`"
                    class="box-lang-box"
                  >
                    <img :src="ln.img" alt="" class="img-fluid" />
                    <span>{{ ln.name }}</span>
                  </div>
                </div>
              </details>
            </div>
          </div>
        </div>
        <div class="col-sm-6">
          <img
            data-aos="zoom-in-down"
            data-aos-delay="500"
            data-aos-duration="1000"
            data-aos-easing="ease-in-out"
            src="~/assets/images/education.png"
            alt
            class="img-fluid"
          />
          <h4
            class="card-title"
            data-aos="fade-right"
            data-aos-delay="500"
            data-aos-duration="1000"
            data-aos-easing="ease-in-out"
          >
            Projects
          </h4>
          <div
            v-for="(education, index) in this.$store.getters.getProject"
            :key="index"
            class="box"
          >
            <h4
              class="box-title"
              data-aos="fade-right"
              data-aos-delay="500"
              data-aos-duration="1000"
              data-aos-easing="ease-in-out"
            >
              {{ education.title }}
            </h4>
            <div
              class="box-content"
              data-aos="fade-left"
              data-aos-delay="500"
              data-aos-duration="1000"
              data-aos-easing="ease-in-out"
            >
              <p class="box-description">{{ education.content }}</p>
              <span class="box-time">{{ education.time }}</span>
            </div>
            <details
              data-aos="fade-right"
              data-aos-delay="500"
              data-aos-duration="1000"
              data-aos-easing="ease-in-out"
            >
              <summary>Worked With</summary>
              <div class="box-lang">
                <div
                  v-for="(ln, ind) in education.lang"
                  :key="`box-lang-img-${ind}`"
                  class="box-lang-box"
                >
                  <img :src="ln.img" alt="" class="img-fluid" />
                  <span>{{ ln.name }}</span>
                </div>
              </div>
            </details>
          </div>
        </div>
      </div>
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
.experience-section {
  padding-top: 7rem;
  height: auto;
  text-align: center;
  img {
    width: 55%;
    object-fit: contain;
    padding-bottom: 3rem;
  }
  .card-title {
    font-family: "Libre Baskerville", serif;
    font-size: 4rem;
    font-weight: 500;
  }

  .box {
    text-align: left;
    padding: 1rem 0rem;
    transform: scale(0.8);
    &-header {
      display: flex;
      align-items: center;
      justify-content: space-between;
      span {
        font-size: 1.4rem;
      }
    }
    &-title {
      text-transform: uppercase;
      font-size: 2rem;
    }
    &-content {
      display: flex;
      align-items: center;
      justify-content: space-between;
    }
    &-lang {
      display: flex;
      align-items: center;
      justify-content: flex-start;
      flex-wrap: row wrap;
      // grid-gap: 0.5rem;
      &-box {
        display: flex;
        flex-direction: column;
        position: relative;
        padding-top: 2rem;
        span {
          font-size: 1.2rem;
          position: absolute;
          bottom: 1rem;
          left: 50%;
          transform: translateX(-50%);
        }
      }
      img {
        height: 7rem;
        width: 7rem;
        object-fit: contain;
      }
    }

    summary {
      font-size: 1.4rem;
      letter-spacing: 0.2rem;
    }
    &-time {
      color: $secondary;
      font-size: 1.4rem;
    }
    &-description {
      font-size: 1.6rem;
      font-weight: 300;
      padding-top: 1rem;
    }
  }
}
</style>
