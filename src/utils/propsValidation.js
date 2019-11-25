import { TextColors } from '../styleConstants';

// eslint-disable-next-line import/prefer-default-export
export const textColorValidator = (
  props,
  propName,
  componentName = 'ANONYMUS'
) => {
  if (props[propName]) {
    const colorValue = props[propName];
    if (typeof colorValue === 'string') {
      const colors = { ...TextColors };
      if (colors[colorValue]) return null;
    }
  }
  return new Error(`Pass the required color prop in the ${componentName}`);
};
