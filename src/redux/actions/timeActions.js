import { timeTypes } from '../constants';

export const fetchNewTime = (timezone = 'gmt', str = 'now') => dispatch =>
  dispatch({
    type: timeTypes.FETCH_NEW_TIME,
    payload: new Date().toString(),
    endpoint: `/${timezone}/${str}.json`,
    method: 'get'
  });

export default fetchNewTime;
