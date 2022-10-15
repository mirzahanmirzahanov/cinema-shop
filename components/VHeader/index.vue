<template>
  <div class="v-header">
    <div class="v-header__container container">
      <div class="v-header-hero">
        <h1 class="v-header-hero__title">
          <span>Cinema-Shop</span> <br />
          Cборник всех лучших фильмов!
        </h1>
      </div>
      <div>
        <a class="v-header-hero__films-link link" @submi.prevent href="#films">
          К фильмам
        </a>
      </div>
    </div>
  </div>
</template>


<script>
export default {
  components: {},
  name: "v-header",
  computed: {},
  props: {},
  data: () => ({}),
  methods: {},
};
</script>


<style lang='scss' scoped>
.v-header {
  position: relative;
  width: 100%;
  height: 60vh;
  display: flex;
  text-align: center;
  background-image: url(@/static/imgs/header-bg.jpg);
  background-repeat: no-repeat;
  background-size: cover;
  &__container {
    z-index: 3;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
  }
  .v-header-hero {
    &__title {
      font-size: 50px;
    }
  }
}

.v-header::after {
  content: "";
  width: 100%;
  height: 100%;
  position: absolute;
  background-color: #000000d3;
}
</style>