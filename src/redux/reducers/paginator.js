import { combineReducers } from 'redux';
import { educatorTypes, courseTypes } from '../constants';
import { paginate } from '../../utils';

const paginator = combineReducers({
  educatorLeaderboard: paginate({
    actionType: educatorTypes.FETCH_EDUCATOR_LEADERBOARD
  }),
  profileFollowing: paginate({
    actionType: educatorTypes.FETCH_FOLLOWING_LIST
  }),
  freeGoalCourses: paginate({
    actionType: courseTypes.FETCH_FREE_GOAL_COURSES
  })
});

export default paginator;
