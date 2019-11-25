/* eslint-disable import/prefer-default-export */
import { educatorTypes } from '../constants';
import { educatorLeaderBoardSchema } from '../schemas/educator';

export const fetchEducatorLeaderboard = () => dispatch =>
  dispatch({
    type: educatorTypes.FETCH_EDUCATOR_LEADERBOARD,
    endpoint: 'v1/gamification/educator/leaderboard/',
    method: 'get',
    params: { goal_uid: 'KSCGY', limit: 25 },
    schema: educatorLeaderBoardSchema
  });
