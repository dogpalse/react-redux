import {combineReducers} from 'redux';
import counterRedcure from './counter';
import todos from './todos';

const rootReducer = combineReducers({
    counterRedcure,
    todos
});

export default rootReducer;