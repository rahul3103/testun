/* eslint-disable import/prefer-default-export */
import { educatorTypes } from '../constants';
import { paginateAction } from '../../utils';
import { paginatorListSchema, userSchema } from '../schemas';

const getEducatorLeaderBoard = (goalUid, resetWithoutEmpty) => {
  return next => {
    return {
      type: educatorTypes.FETCH_EDUCATOR_LEADERBOARD,
      endpoint: next,
      method: 'get',
      key: goalUid,
      resetWithoutEmpty,
      schema: paginatorListSchema
    };
  };
};

export const fetchEducatorLeaderboard = (
  goalUid,
  nextPage,
  resetWithoutEmpty
) => {
  return paginateAction(
    `v1/gamification/educator/leaderboard/?goal_uid=${goalUid}&limit=25`,
    getEducatorLeaderBoard(goalUid, resetWithoutEmpty),
    'educatorLeaderboard',
    goalUid,
    resetWithoutEmpty
  )(nextPage);
};

const getFollowingList = (username, resetWithoutEmpty) => {
  return next => {
    return {
      type: educatorTypes.FETCH_FOLLOWING_LIST,
      endpoint: next,
      method: 'get',
      key: username,
      resetWithoutEmpty,
      schema: paginatorListSchema,
      directPaginatedEntity: true,
      entityType: 'user'
    };
  };
};

export const fetchFollowingUsers = (username, nextPage, resetWithoutEmpty) => {
  return paginateAction(
    `v1/user/${username}/follows/?limit=9&offset=0`,
    getFollowingList(username, resetWithoutEmpty),
    'profileFollowing',
    username,
    resetWithoutEmpty
  )(nextPage);
};

export const fetchProfileInfo = username => dispatch =>
  dispatch({
    type: educatorTypes.FETCH_PROFILE_INFO,
    endpoint: `v1/user/${username}/info`,
    method: 'get',
    username,
    schema: userSchema
  });
