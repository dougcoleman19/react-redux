import * as types from './actionTypes';
import courseApi from '../api/mockCoursesApi';


export function loadCoursesSuccess(courses) {
    return { type: types.LOAD_COURSES_SUCCESS, courses};
}

// THUNKS

export function loadCourses() {
    return function(dispatch) {
        return courseApi.getAllCourses()
            .then(courses => {
                dispatch(loadCoursesSuccess(courses));
            })
            .catch(error => {
                throw error;
            });
    };
}