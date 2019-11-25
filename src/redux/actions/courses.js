import { courseTypes } from '../constants';
import { topologyPeekListSchema } from '../schemas';

// eslint-disable-next-line import/prefer-default-export
export const fetchFreeCourses = () => dispatch =>
  dispatch({
    type: courseTypes.FETCH_FREE_COURSES,
    endpoint: 'v1/topology/users/KSCGY/lists/',
    method: 'get',
    params: { sort: 'popularity_score', language: 'english' },
    schema: topologyPeekListSchema
  });
