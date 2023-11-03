import { createStore, applyMiddleware } from "redux";//create a redux store 
import logger from "redux-logger";// logs redux actions and state change to the console
import reduxThunk from "redux-thunk";// write asynchronous actions
import rootReducer from "./root-reducer"; // combines all your reducers into a single reducer

const middlewares = [reduxThunk]//redux store will use  the reduxThunk  middleware for handaling asynchronous actions 

if(process.env.NODE_ENV ==="development"){
    middlewares.push(logger);
}
const store = createStore(rootReducer,applyMiddleware(...middlewares));
export default store;