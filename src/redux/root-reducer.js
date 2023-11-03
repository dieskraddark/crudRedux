import {combineReducers} from 'redux';
import usersReducers  from './reducer';

const rootReducer= combineReducers({
    data: usersReducers
});

export default rootReducer;
// combine multiple reducer into a single root reducer 
// split your reduxs store' state and SM into smaller 