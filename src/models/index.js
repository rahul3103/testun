import User from './User';
import Course from './Course';

const models = { User, Course };

// factory functions
export const modelsFactory = name => {
  return models[name];
};

export const getEntityData = (name, data) => {
  return models[name].getEntityData(data);
};
