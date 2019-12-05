import { schema } from 'normalizr';
import { courseTypes } from '../constants';
import { paginatorListSchema, courseSchema } from '../schemas';
import { paginateAction } from '../../utils';

// eslint-disable-next-line import/prefer-default-export
export const fetchFreeCourses = () => dispatch =>
  dispatch({
    type: courseTypes.FETCH_FREE_COURSES,
    endpoint: 'v1/topology/users/KSCGY/lists/',
    method: 'get',
    params: { sort: 'popularity_score', language: 'english' },
    schema: paginatorListSchema
  });

const getFreeGoalCourses = (goalUid, resetWithoutEmpty) => {
  return next => {
    return {
      type: courseTypes.FETCH_FREE_GOAL_COURSES,
      endpoint: next,
      method: 'get',
      key: goalUid,
      resetWithoutEmpty,
      schema: paginatorListSchema,
      directPaginatedEntity: true,
      entityType: 'course'
    };
  };
};

export const fetchFreeGoalCourses = (
  goalUid,
  nextPage,
  resetWithoutEmpty = false
) => {
  return paginateAction(
    `v1/topology/users/${goalUid}/courses/?&limit=25`,
    getFreeGoalCourses(goalUid, resetWithoutEmpty),
    'freeGoalCourses',
    goalUid,
    resetWithoutEmpty
  )(nextPage);
};

export const fetchCourseData = courseUid => dispatch => {
  dispatch({
    type: courseTypes.FETCH_COURSE_INFO,
    endpoint: `v1/collection/${courseUid}/`,
    method: 'get',
    courseUid,
    schema: new schema.Object({ course: courseSchema }),
    entityType: 'course'
  });
};
