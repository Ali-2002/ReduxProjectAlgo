import { ActionTypes } from "../actions/actions-types"
const nameInitialState = {
    movies: [],
    moviesList:[],
    moviesSlide:[],  
}
const filmReducer = (state = nameInitialState, action) => {
    switch (action.type) {
        case ActionTypes.SEARCH_MOVIE:
            return {
                ...state,
                movies: action.payload
            }
        case ActionTypes.SLIDER:
            return {
                ...state,
                moviesSlide: action.payload

            }
        default:
            return state
    }
}
export default filmReducer