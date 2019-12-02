import { combineReducers } from 'redux';
import { educatorTypes, courseTypes } from '../constants';
import { paginate } from '../../utils';

const paginator = combineReducers({
  educatorLeaderboard: paginate({
    mapActionToKey: action => action.key,
    types: [
      `${educatorTypes.FETCH_EDUCATOR_LEADERBOARD}_REQUEST`,
      `${educatorTypes.FETCH_EDUCATOR_LEADERBOARD}_SUCCESS`,
      `${educatorTypes.FETCH_EDUCATOR_LEADERBOARD}_FAILURE`,
      'null'
    ]
  }),
  profileFollowing: paginate({
    mapActionToKey: action => action.key,
    types: [
      `${educatorTypes.FETCH_FOLLOWING_LIST}_REQUEST`,
      `${educatorTypes.FETCH_FOLLOWING_LIST}_SUCCESS`,
      `${educatorTypes.FETCH_FOLLOWING_LIST}_FAILURE`,
      'null'
    ]
  }),
  freeGoalCourses: paginate({
    mapActionToKey: action => action.key,
    types: [
      `${courseTypes.FETCH_FREE_GOAL_COURSES}_REQUEST`,
      `${courseTypes.FETCH_FREE_GOAL_COURSES}_SUCCESS`,
      `${courseTypes.FETCH_FREE_GOAL_COURSES}_FAILURE`,
      'null'
    ]
  })
});

export default paginator;
