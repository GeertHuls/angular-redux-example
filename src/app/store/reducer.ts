import { Course } from '../courses/course';
import { IAppState } from './IAppState';

// you can have multiple reducers
// each targetting a specific part of the state
const initialState: IAppState = {
  courses: [ {
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
    }]
};

export function reducer(state= initialState, action) {
  return state;
};
