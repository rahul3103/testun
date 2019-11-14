import { timeTypes } from '../constants';

const fetchNewTime = ({ timezone = 'pst', str = 'now' }) => ({
  type: timeTypes.FETCH_NEW_TIME,
  payload: new Date().toString(),
  endpoint: `/${timezone}/${str}.json`,
  method: 'get'
});

export default fetchNewTime;
