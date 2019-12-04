/* eslint-disable no-plusplus */
/* eslint-disable no-unused-vars */
/* eslint-disable no-use-before-define */
/* eslint-disable no-loop-func */
/* eslint-disable no-param-reassign */
/* eslint-disable react-hooks/rules-of-hooks */
import { useSelector, useDispatch, shallowEqual } from 'react-redux';

const tableIndex = {
  user: 'users',
  course: 'courses'
};

const fetchDataFromNormalizer = (data, state) => {
  let newData = data;
  if (data && typeof data === 'object' && Object.keys(data)) {
    const dataKeys = Object.keys(data);
    if (dataKeys.length > 0) {
      let i = 0;
      while (i < dataKeys.length) {
        if (dataKeys[i] in tableIndex) {
          newData = {
            ...newData,
            [dataKeys[i]]:
              state[tableIndex[dataKeys[i]]].data[data[dataKeys[i]]]
          };
        } else {
          newData = {
            ...newData,
            [dataKeys[i]]: fetchDataFromNormalizer(newData[dataKeys[i]], state)
          };
        }
        i++;
      }
    }
  }
  return newData;
};

export const useSelectorToStore = mapProps => {
  const data = useSelector(mapProps, shallowEqual);
  const stateData = useSelector(state => state);
  return fetchDataFromNormalizer(data, stateData);
};

export const useDispatchToStore = () => {
  const dispatch = useDispatch();
  return dispatch;
};
