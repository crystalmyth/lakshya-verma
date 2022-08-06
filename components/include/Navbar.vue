<template>
  <div class="navbar">
    <div class="container-fluid">
      <div class="navbar-left">
        <div class="navbar-left-title">
          Lakshya
          <span>Verma</span>
        </div>
      </div>
      <div class="navbar-right">
        <!-- <i class="bx bx-menu-alt-right"></i>
        <i class="bx bxs-x-circle d-none"></i>-->
        <a href="./resume.pdf" download="lakshya-resume">Download CV</a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'TheNavbar',
}
</script>

<style lang="scss">
@use "@/assets/scss/_variable.scss" as *;
.navbar {
  position: fixed;
  width: 100%;
  top: 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
  z-index: 100;
  color: $dark;
  height: 5rem;
  background-color: #fff;
  .bx {
    color: $dark;
    font-size: 2.5rem;
  }
  &-left {
    &-title {
      color: $primary;
      font-size: 2rem;
      font-weight: 400;
      span {
        font-weight: 600;
      }
    }
  }
  &-right {
    a {
      text-decoration: none;
      color: $primary;
      font-size: 1.5rem;
    }
  }
}
</style>