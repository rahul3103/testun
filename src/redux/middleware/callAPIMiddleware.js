import fetch from 'isomorphic-unfetch';

const host = 'https://andthetimeis.com';

const callAPIMiddleware = ({ dispatch, getState }) => next => action => {
  if (typeof action === 'function') {
    return action(dispatch, getState);
  }

  if (!action || !action.endpoint) {
    return next(action);
  }

  const { endpoint, type, method, data, ...rest } = action;

  next({ ...rest, type: `${type}_REQUEST` });

  const actionPromise = fetch(`${host}${endpoint}`, {
    method,
    body: JSON.stringify(data)
  });

  return actionPromise
    .then(response => response.json())
    .then(result => next({ ...rest, result, type: `${type}_SUCCESS` }))
    .catch(error => next({ ...rest, error, type: `${type}_FAILURE` }));
};

export default callAPIMiddleware;
