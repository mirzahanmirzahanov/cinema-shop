<template>
  <div class="index-page">
    <v-header />
    <movie-grid />
  </div>
</template>


<script>
// import VHeader from "@/components/VHeader/index.vue";
// import MovieGrid from "@/components/MovieGrid/index.vue";

import { mapActions, } from "vuex";
export default {
  name: "index",
  computed: {},
  props: {},
  data: () => ({}),

  async fetch() {
    await this.getMovies();
  },
  methods: {
    ...mapActions({
      getMovies: "movies/GET_MOVIES",
    }),
  },
};
</script>


  <style lang='scss' scoped>
</style>