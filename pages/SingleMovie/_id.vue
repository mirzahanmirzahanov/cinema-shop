  <template>
  <div class="single-movie">
    <div class="single-movie__header container">
      <router-link class="link" to="/">Назад к списку</router-link>
    </div>
    <hr />
    <div class="single-movie__success container">
      <div class="movies-list-item">
        <div class="movies-list-item__img">
          <img v-if="this.poster !== ''" :src="this.poster" alt="movie-img" />
          <img v-else src="@/static/imgs/error-icon.png" alt="" />
        </div>
        <div class="movies-list-item__info">
          <h3 class="title">
            {{ this.movie.title }}
          </h3>
          <div class="year">
            <p>{{ this.movie.year }}</p>
          </div>
          <div class="actors">
            <p>АКТЕРЫ:&nbsp</p>
            <ul>
              <li
                class="actor"
                v-for="(actor, index) in this.movie.actors"
                :key="index"
              >
                {{ actor }},&nbsp
              </li>
            </ul>
          </div>
          <p class="description">
            {{ this.movie.description }}
          </p>
        </div>
      </div>
    </div>
  </div>
</template>


<script>
import axios from "axios";

export default {
  components: {},
  name: "single-movie",
  computed: {},
  props: {},
  async fetch() {
    await this.getSingleMovie();
  },
  data: () => ({
    movie: {},
    poster: "",
  }),
  methods: {
    async getSingleMovie() {
      try {
        const response = await axios.get(
          `https://floating-sierra-20135.herokuapp.com/api/movie/${this.$route.params.id}`
        );
        this.movie = await response.data.data;
        this.poster = this.movie?.frames[0];
        console.log(this.movie);
      } catch (err) {
        console.log(err);
      }
    },
  },
};
</script>


<style lang='scss' scoped>
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
}
</style>