<template>
  <div>
    <div v-if="this.view === 'Плитка'" class="movie-grid" id="films">
      <navigation-panel @search="searchMovies" @view="changeVis" />
      <div
        v-if="this.searchedMovies.length"
        class="movie-grid__container container"
      >
        <movie-item
          :view="view"
          v-for="(movie, index) in searchedMovies"
          :key="index"
          :movie="movie"
        />
      </div>
      <div v-else class="movie-grid__container container">
        <movie-item
          :view="view"
          v-for="(movie, index) in movies"
          :key="index"
          :movie="movie"
        />
      </div>
    </div>
    <div v-else class="movie-grid-list" id="films">
      <navigation-panel @search="searchMovies" @view="changeVis" />
      <div
        v-if="this.searchedMovies.length"
        class="movie-grid-list__container container"
      >
        <movie-item
          :view="view"
          v-for="(movie, index) in searchedMovies"
          :key="index"
          :movie="movie"
        />
      </div>
      <div v-else class="movie-grid-list__container container">
        <movie-item
          :view="view"
          v-for="(movie, index) in movies"
          :key="index"
          :movie="movie"
        />
      </div>
    </div>
  </div>
</template>


<script>
import { mapGetters, mapMutations } from "vuex";

export default {
  components: {},
  name: "movie-grid",
  computed: {
    ...mapGetters({
      movies: "movies/MOVIES",
      searchedMovies: "movies/SEARCHED_MOVIES",
    }),
  },
  props: {},
  data: () => ({
    view: "Плитка",
  }),
  methods: {
    ...mapMutations({
      search: "movies/SEARCH_MOVIES",
    }),
    changeVis(listView) {
      this.view = listView;
    },
    searchMovies(searchInput) {
      this.search(searchInput);
    },
  },
};
</script>

<style lang='scss' scoped>
.movie-grid {
  &__container {
    display: grid;
    grid-template-columns: repeat(4, 230px);
    justify-content: center;
    column-gap: 80px;
    row-gap: 50px;
  }
}

@media (max-width: 1300px) {
  .movie-grid {
    &__container {
      display: grid;
      grid-template-columns: repeat(3, 230px);
      gap: 40px;
    }
  }
}
@media (max-width: 1300px) {
  .movie-grid {
    &__container {
      display: grid;
      grid-template-columns: repeat(2, 230px);
      gap: 20px;
    }
  }
}
@media (max-width: 560px) {
  .movie-grid {
    &__container {
      display: grid;
      grid-template-columns: repeat(1, 230px);
      gap: 20px;
    }
  }
}
.movie-grid-list {
  &__container {
    display: block;
  }
}
</style>