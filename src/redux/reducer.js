import * as types from "./actionType";

const initialState = {
    users: [],// store a list of data 
    user: {},// for single user 
    loading: true,//  some loading process is currently ongoing.

}
//state and action 
const usersReducers = (state = initialState, action) => {
    switch (action.type) {
        case types.GET_USERS:
            return {
                ...state,
                users: action.payload,
                loading: false,
            };

        case types.DELETE_USER:
        case types.ADD_USER:
        case types.UPDATE_USER:    
            return {
                ...state,
                loading: false
            }
        case types.GET_SINGLE_USER:   
            return {
                ...state,
                user:action.payload,
                loading :false,
            }
        default:
            return state;
    }
}; 
// takes current state and action as argument and returs state
export default usersReducers;