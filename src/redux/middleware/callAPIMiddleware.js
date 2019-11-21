import fetch from 'isomorphic-unfetch';
import { normalize } from 'normalizr';

const host = 'https://unacademy.com/api/';

const getQueryString = params => {
  if (!params) return null;
  return Object.keys(params)
    .map(key => `${encodeURIComponent(key)}=${encodeURIComponent(params[key])}`)
    .join('&');
};

const callAPIMiddleware = ({ dispatch, getState }) => next => action => {
  if (typeof action === 'function') {
    return action(dispatch, getState);
  }

  if (!action || !action.endpoint || !action.method) {
    return next(action);
  }

  const { endpoint, type, method, data, params, schema, ...rest } = action;
  next({ ...rest, type: `${type}_REQUEST` });

  let url = `${host}${endpoint}`;
  const queryString = getQueryString(params);
  if (queryString) url = `${url}?${queryString}`;

  const actionPromise = fetch(url, {
    method,
    body: JSON.stringify(data)
  });

  return actionPromise
    .then(response => response.json())
    .then(result => {
      const normalizedData = normalize(result.results, schema);
      next({ ...rest, entities: normalizedData.entities });
      return next({
        ...rest,
        data: normalizedData.results,
        type: `${type}_SUCCESS`
      });
    })
    .catch(error => next({ ...rest, error, type: `${type}_FAILURE` }));
};

export default callAPIMiddleware;
