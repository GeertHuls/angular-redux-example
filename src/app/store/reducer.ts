import { Course } from '../courses/course';
import { IAppState } from './IAppState';
import { FILTER_COURSES } from '../courses/course.actions';

const courses = [ {
    'id': 1,
    'name': 'Building Apps with react (local)',
    'topic': 'ReactJS'
  }, {
    'id': 2,
    'name': 'Building App with Angular (local',
    'topic': 'AngularJS'
  }, {
    'id': 3,
    'name': 'Building Apps with angular and redux (local)',
    'topic': 'Angular and redux'
  }];

// you can have multiple reducers
// each targetting a specific part of the state
const initialState: IAppState = {
  courses,
  filteredCourses: courses
};

function filterCourses(state, action): IAppState {
  return Object.assign({}, state, {
      filteredCourses: state.courses
        .filter(c => c.name.toLowerCase()
            .indexOf(action.searchText.toLowerCase()) > -1)
    });
}

export function reducer(state= initialState, action) {
  switch (action.type) {
    case FILTER_COURSES:
      return filterCourses(state, action);
    default:
      return state;
  }
};
