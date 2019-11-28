/* eslint-disable no-param-reassign */
/* eslint-disable spaced-comment */
/* eslint-disable prefer-destructuring */
/* eslint-disable prefer-const */
/* eslint-disable no-underscore-dangle */
/* eslint-disable no-case-declarations */
/* eslint-disable no-nested-ternary */
import merge from 'lodash/merge';
import union from 'lodash/union';

// Creates a reducer managing pagination, given the action types to handle,
// and a function telling how to extract the key from an action.

export default function paginate({ types, mapActionToKey, updateReducer }) {
  const [requestType, successType, failureType, reset] = types;
  const initialState = {
    isFetching: false,
    next: undefined,
    pageCount: 0,
    name: '',
    loaded: false,
    results: [],
    resultsPage: [],
    key: undefined,
    unseen: null,
    resetWithoutEmpty: false
  };

  function updatePagination(state = initialState, action) {
    switch (action.type) {
      case requestType:
        return merge({}, state, {
          isFetching: true
        });
      case successType:
        let results = action.result
          ? action.result.results
            ? union(state.results, action.result.results)
            : union(state.results, [action.result])
          : state.results;

        if (action.resetWithoutEmpty) results = action.result.results;

        let resultsPage = state.resultsPage;
        if (!resultsPage) {
          resultsPage = [];
        }
        if (action.result) {
          if (action.result.results) {
            resultsPage.push({
              page: state.pageCount ? state.pageCount + 1 : 1,
              results: action.result.results
            });
          } else {
            resultsPage.push({
              page: state.pageCount ? state.pageCount + 1 : 1,
              results: [action.result]
            });
          }
        }
        if (action.resetWithoutEmpty) {
          results = action.result.results;
          resultsPage = [];
          resultsPage.push({
            page: 1,
            results: action.result.results
          });
        }

        return merge({}, action.resetWithoutEmpty ? {} : state, {
          isFetching: false,
          loaded: true,
          results,
          resultsPage,
          next: action.result.next,
          name: action.result.name,
          total: action.result.count,
          resetWithoutEmpty: action.resetWithoutEmpty
            ? action.resetWithoutEmpty
            : false,
          pageCount: action.resetWithoutEmpty
            ? 1
            : state.pageCount
            ? state.pageCount + 1
            : 1,
          unseen: action.result.unseen
        });
      case failureType:
        return merge({}, state, {
          isFetching: false,
          loaded: true
        });
      default:
        return state;
    }
  }

  return function updatePaginationByKey(state = {}, action) {
    const key = mapActionToKey(action);
    switch (action.type) {
      case requestType:
      case successType:
      case failureType:
        /* if (typeof key !== "string") {
                    throw new Error("Expected key to be a string.");
                } */
        if (action.resetWithoutEmpty) {
          return {
            ...state,
            [key]: {
              ...updatePagination(state[key], action),
              key
            }
          };
        }
        return merge({}, state, {
          [key]: {
            ...updatePagination(state[key], action),
            key
          }
        });
      case reset:
        return {
          ...state,
          [key]: initialState
        };
      default:
        let _state = state;
        let _keyState = _state[key];
        if (updateReducer && _keyState) {
          let s = updateReducer(_keyState, action);
          _state[key] = s;
          return {
            ...state,
            [key]: s
          };
        }
        return state;
    }
  };
}
