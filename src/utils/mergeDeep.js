import isObject from './isObject';

const mergeDeep = (target, source, level, count = 0) => {
  let output = { ...target };
  if (isObject(target) && isObject(source)) {
    Object.keys(source).forEach(key => {
      if (isObject(source[key])) {
        if (!(key in target)) output = { ...output, [key]: source[key] };
        else if (level > count)
          output[key] = mergeDeep(target[key], source[key], level, count + 1);
      } else output = { ...output, [key]: source[key] };
    });
  }
  return output;
};

export default mergeDeep;
