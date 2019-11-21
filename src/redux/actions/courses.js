import { courseTypes } from '../constants';
import { topologyListSchema } from '../schemas';

export const fetchFreeCourses = () => dispatch =>
  dispatch({
    type: courseTypes.FETCH_FREE_COURSES,
    endpoint: 'v1/topology/users/KSCGY/lists/',
    method: 'get',
    params: { sort: 'popularity_score', language: 'english' },
    schema: topologyListSchema
  });

export default fetchFreeCourses;
