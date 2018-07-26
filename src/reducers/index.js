import { combineReducers } from 'redux';
import courses from './courseReducer';
import authors from './authorReducer';
import ajaxCall from './ajaxCallReducer';

const rootReducer = combineReducers({
    courses,
    authors,
    ajaxCall
});

export default rootReducer;