import User from './User';
import Course from './Course';

const models = { User, Course };

// factory functions
export function modelsFactory(name) {
  return models[name];
}

export function getEntityData(name, data) {
  return models[name].getEntityData(data);
}
