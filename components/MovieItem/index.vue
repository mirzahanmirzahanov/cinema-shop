<template>
  <div>
    <div v-if="view === 'Плитка'" class="movie-item">
      <div class="movie-item__img">
        <img
          v-if="movie.frames !== null"
          :src="movie.frames[0]"
          alt="movie-img"
        />
        <img v-else src="@/static/imgs/error-icon.png" alt="" />
      </div>
      <div class="movie-item__title">
        <p>{{ movie.title }}</p>
      </div>
      <div class="movie-item__year">
        <p>{{ movie.year }}</p>
      </div>
      <div class="movie-item__link link">
        <nuxt-link
          :to="{
            name: 'SingleMovie-id',
            params: { id: movie.id },
          }"
        >
          Подробнее
        </nuxt-link>
      </div>
    </div>
    <div v-else class="single-movie">
      <div class="single-movie__success container">
        <div class="movies-list-item">
          <div class="movies-list-item__img">
            <img
              v-if="movie.frames !== null"
              :src="movie.frames[0]"
              alt="movie-img"
            />
            <img v-else src="@/static/imgs/error-icon.png" alt="" />
          </div>
          <div class="movies-list-item__info">
            <h3 class="title">
              {{ this.movie.title }}
            </h3>
            <div class="year">
              <p>{{ this.movie.year }}</p>
            </div>
            <div class="single-movie__link link">
              <nuxt-link
                :to="{
                  name: 'SingleMovie-id',
                  params: { id: movie.id },
                }"
              >
                Подробнее
              </nuxt-link>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>


<script>
export default {
  components: {},
  name: "movie-item",
  computed: {},
  props: {
    movie: {
      type: Object,
      required: true,
      default: {},
    },
    view: {
      type: String,
    },
  },

  data: () => ({}),
  methods: {},
};
</script>


<style lang='scss'>
.movie-item {
  display: flex;
  flex-direction: column;
  align-items: center;
  background: #4a4a4a;
  height: 400px;
  padding: 15px;
  box-shadow: 4px 4px 4px #141414;
  border-radius: 5px;
  transition: 0.3s ease-in-out;

  &:hover {
    transform: translateY(-3px);
  }

  p {
    margin: 10px 0;
    text-align: center;
  }

  &__img {
    img {
      width: 200px;
      height: 220px;
      object-fit: cover;
      border-radius: 5px;
      background: #313131;
    }
  }

  &__title {
    font-size: 19px;
  }

  &__year {
    font-size: 16px;
  }
  &__link {
    margin-top: auto;
  }
}

.single-movie {
  hr {
    margin: 22px 0 0 0;
    color: #c4c4c4;
  }
  &__header {
    display: flex;
    padding: 20px 20px 0;
  }

  &__success {
    .movies-list-item {
      position: relative;
      display: flex;
      margin: 24px 0;
      box-shadow: 4px 4px 4px #141414;
      border-radius: 5px;
      background: #4a4a4a;
      &__img {
        width: 100%;
        max-width: 250px;
        margin: 0 20px 0 0;
        img {
          width: 100%;
          height: 100%;
          // object-fit: cover;
          border-radius: 5px;
          background: #313131;
        }
      }

      &__info {
        margin: 32px 32px 32px 0;
        color: #988f8f;
        .title,
        .year {
          font-weight: 700;
          display: flex;
        }
        .title {
          color: #fff;
          font-size: 32px;
          margin: 0 0 12px 0;
          text-decoration: none;
        }
        .year {
          text-transform: uppercase;
          font-size: 12px;
          margin: 0 0 8px 0;
        }
        .actors {
          font-size: 12px;
          margin: 0 0 15px 0;
          display: flex;

          .actor {
            display: inline;
            list-style: none;
            color: #e5e5e5;
            font-weight: 400;
          }
        }
        .description {
          font-size: 16px;
          color: #fff;
          font-weight: 400;
        }
      }
    }
    @media (max-width: 768px) {
      .movies-list-item {
        flex-direction: column;
        width: 250px;
				margin: 30px auto;
        &__info {
					padding: 10px;
        }
      }
    }
  }

  &__link {
    display: inline;
  }
}
</style>