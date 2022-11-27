import { ActionTypes } from "../actions/actions-types"

const nameInitialState = {

}
export const listReducer = (state = nameInitialState, action) => {
    switch (action.type) {
        case ActionTypes.ADD_TO_LIST:
            return state
        default:
            return state
    }
}