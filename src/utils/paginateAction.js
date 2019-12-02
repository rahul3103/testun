const paginateAction = (
  defaultUrl,
  apiFetch,
  paginatedKey,
  resultKey,
  resetWithoutEmpty = false
) => {
  return nextPage => {
    return (dispatch, getState) => {
      let { next = defaultUrl, pageCount = 0 } =
        (getState().paginator[paginatedKey] &&
          getState().paginator[paginatedKey][resultKey]) ||
        {};

      if (resetWithoutEmpty) {
        next = defaultUrl;
      }

      if (pageCount > 0 && !nextPage) {
        return null;
      }
      return dispatch({ ...apiFetch(next) });
    };
  };
};

export default paginateAction;
