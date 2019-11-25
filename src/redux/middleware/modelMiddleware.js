const modelMiddleware = ({ dispatch, getState }) => next => action => {
  if (typeof action === 'function') {
    return action(dispatch, getState);
  }

  if (!action || !action.entities) {
    return next(action);
  }

  const { entities } = action;
  Object.keys(entities).forEach(entity => {
    next({ type: `UPDATE_${entity.toUpperCase()}`, data: entities[entity] });
  });
};

export default modelMiddleware;
