<template>
  <div class="experience-section section">
    <div class="container-fluid">
      <lines />
      <div class="row">
        <div class="col-sm-12">
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
            >Experience</h4>
            <div v-for="(experience, index) in experiences" :key="index" class="box">
              <h4
                class="box-title"
                data-aos="fade-right"
                data-aos-delay="500"
                data-aos-duration="1000"
                data-aos-easing="ease-in-out"
              >{{experience.title}}</h4>
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
            </div>
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
  data() {
    return {
      experiences: [
        {
          title: "AAFT - Art School In Noida",
          content: "Full Stack Developer",
          time: "Sept 2021 - Present",
        },
        {
          title: "Truetech Services Pvt. Ltd",
          content: "Full Stack Developer",
          time: "Jan 2021 - June 2021",
        },
        {
          title: "Protechno Media Pvt. Ltd.",
          content: "Full Stack Developer",
          time: "July 2020 - Jan 2021",
        },
        {
          title: "Denesa Health Pvt. Ltd.",
          content: "Full Stack Developer",
          time: "April 2019 - July 2020",
        },
      ],
      educations: [
        {
          title: "B.tech in Computer Science",
          content: "National Institute of Technology, Raipur",
          time: "2018",
          percentage: "7 GPA",
        },
        {
          title: "XII",
          content: "RBSE",
          time: "2012",
          percentage: "79%",
        },
        {
          title: "X",
          content: "RBSE",
          time: "2010",
          percentage: "81%",
        },
      ],
    };
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
    width: 20rem;
    object-fit: contain;
    padding-bottom: 3rem;
  }
  .card-title {
    font-family: "Libre Baskerville", serif;
    font-size: 4rem;
    font-weight: 500;
  }

  .box {
    margin: auto;
    margin-top: 3rem;
    text-align: left;
    padding: 1rem 0rem;
    width: 60%;
    @media screen and (max-width: 800px) {
      width: 100%;
    }
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