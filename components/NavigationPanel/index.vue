<template>
  <div class="navigation-panel">
    <div class="navigation-panel__container container">
      <div class="navigation-panel__search">
        <input v-model="searchInput" placeholder="Ведите название фильма..." />
        <div class="buttons">
          <button class="link" @submit.prevent @click="searchMovie">
            Поиск
          </button>
          <button class="link" @submit.prevent @click="clearInput">
            Очистить
          </button>
        </div>
      </div>
      <div class="navigation-panel__list-view">
        <div class="list-view">
          <p class="link" @click="changeView">{{ this.listView }}</p>
        </div>
      </div>
    </div>
  </div>
</template>


<script>
import { mapGetters, mapMutations } from "vuex";

export default {
  components: {},
  name: "navigation-panel",
  computed: {},
  props: {},
  data: () => ({
    searchInput: "",
    listView: "Плитка",
  }),
  methods: {
    ...mapMutations({
      clearInputs: "movies/CLEAR_INPUT",
    }),
    searchMovie() {
      if (this.searchInput.length) {
        this.$emit("search", this.searchInput);
      } else {
        return;
      }
    },
    clearInput() {
      this.searchInput = "";
      this.clearInputs();
    },
    changeView() {
      if (this.listView === "Плитка") {
        this.listView = "Список";
      } else {
        this.listView = "Плитка";
      }
      this.$emit("view", this.listView);
    },
  },
};
</script>


<style lang='scss' scoped>
.navigation-panel {
  margin: 50px 0;
  &__container {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  &__search {
    display: flex;
    justify-content: start;
    input,
    button {
      font-size: 16px;
    }
    input {
      padding: 10px;
      width: 250px;
      border-radius: 5px;
    }
    button {
      padding: 10px !important;
      color: white;
      margin: 0 5px;
    }
  }

  &__list-view {
    display: flex;
    p {
      padding: 10px !important;
      cursor: pointer;
      font-size: 16px;
    }
  }
}

@media (max-width: 560px) {
  .navigation-panel {
    input,
    button,
    p {
      font-size: 14px;
    }
    input {
      width: 150px;
    }
    margin: 40px 0;
    &__container,
    &__search {
      display: flex;
      flex-wrap: nowrap;
      .buttons {
        display: flex;
        button {
          margin: 0 5px;
        }
      }
    }
  }
}
</style>