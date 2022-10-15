import axios from 'axios'

export const state = () => ({

	movies: [],
	searchedMovies: []
})

export const mutations = {

	SET_MOVIES(state, result) {
		state.movies = result
	},

	SEARCH_MOVIES(state, searchInput) {
		state.searchedMovies = []
		state.movies.filter((movie) => {
			if (movie.title.toLowerCase() == searchInput.toLowerCase()) {
				state.searchedMovies.push(movie)
			}
		});
	},
	CLEAR_INPUT(state) {
		state.searchedMovies = []
	}

}

export const actions = {

	async GET_MOVIES({ commit }) {
		try {
			const response = await axios.get(
				'https://floating-sierra-20135.herokuapp.com/api/movies'
			);
			const result = response.data.data
			commit('SET_MOVIES', result)
		} catch (err) {
			console.log(err);
		}
	},

}


export const getters = {

	MOVIES(state) {
		return state.movies
	},
	SEARCHED_MOVIES(state) {
		return state.searchedMovies
	},

}