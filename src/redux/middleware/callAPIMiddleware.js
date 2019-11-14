// const host = 'https://andthetimeis.com';

// const callAPIMiddleware = ({ dispatch, getState }) => next => action => {
//   if (typeof action === 'function') {
//     return action(dispatch, getState);
//   }

//   if (!action.meta || !action.meta.url) {
//     return next(action);
//   }

//   const { endpoint, type, method, data, ...rest } = action;

//   if (!endpoint) return next(action);

//   next({ ...rest, type: `${type}_REQUEST` });

//   // const actionPromise = axios({
//   //   method,
//   //   url: host + endpoint,
//   //   data
//   //   // responseType: 'stream'
//   // });
//   axios.request({
//     url: `${host}${endpoint}`,
//     method,
//     // headers,
//     params: data
//   });

//   actionPromise
//     .then(
//       result => next({ ...rest, result, type: `${type}_SUCCESS` }),
//       error => next({ ...rest, error, type: `${type}_FAILURE` })
//     )
//     .catch(error => {
//       next({ ...rest, error, type: `${type}_FAILURE` });
//     });

//   return actionPromise;
// };

// export default callAPIMiddleware;
