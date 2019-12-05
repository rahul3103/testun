import fetch from 'isomorphic-unfetch';
import { normalize } from 'normalizr';
import { cookies } from '../../utils';

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

  const {
    endpoint,
    type,
    method,
    data,
    params,
    schema,
    entityType,
    directPaginatedEntity,
    ...rest
  } = action;
  next({ ...rest, type: `${type}_REQUEST` });

  let url =
    endpoint.indexOf('unacademy.com/') > -1 ? endpoint : `${host}${endpoint}`;
  const queryString = getQueryString(params);
  if (queryString) url = `${url}?${queryString}`;
  const accessToken = cookies.readCookie('accessToken');
  const actionPromise = fetch(url, {
    method,
    body: JSON.stringify(data),
    headers: { authorization: `Bearer ${accessToken}` }
  });

  return actionPromise
    .then(response => response.json())
    .then(result => {
      let formattedResults = result;
      if (entityType) {
        if (directPaginatedEntity) {
          formattedResults = {
            ...result,
            results: result.results.map(item => {
              return {
                [entityType]: item
              };
            })
          };
        } else {
          formattedResults = {
            [entityType]: result
          };
        }
      }
      const normalizedData = normalize(formattedResults, schema);
      next({ ...rest, entities: normalizedData.entities });
      return next({
        ...rest,
        result: normalizedData.result,
        type: `${type}_SUCCESS`
      });
    })
    .catch(error => next({ ...rest, error, type: `${type}_FAILURE` }));
};

export default callAPIMiddleware;
