import { courseTypes } from '../constants';
import { topologyPeekListSchema } from '../schemas';

export const fetchFreeCourses = () => dispatch =>
  dispatch({
    type: courseTypes.FETCH_FREE_COURSES,
    endpoint: 'v1/topology/users/KSCGY/lists/',
    method: 'get',
    params: { sort: 'popularity_score', language: 'english' },
    schema: topologyPeekListSchema
  });

export default fetchFreeCourses;
