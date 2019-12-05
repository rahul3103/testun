/* eslint-disable import/prefer-default-export */
import { schema } from 'normalizr';
import { getEntityData } from '../../models';

export const userSchema = new schema.Entity(
  'users',
  {},
  {
    idAttribute: 'uid',
    processStrategy: value => getEntityData('User', value)
  }
);

export const courseSchema = new schema.Entity(
  'courses',
  {
    author: userSchema
  },
  {
    idAttribute: 'uid',
    processStrategy: value => {
      return {
        ...getEntityData('Course', value),
        user: getEntityData('User', value.author)
      };
    }
  }
);

export const goalSchema = new schema.Entity(
  'goals',
  {},
  {
    idAttribute: 'uid'
  }
);

const schemaDictionary = {
  user: userSchema,
  course: courseSchema
};

const paginatorItemSchema = new schema.Object(schemaDictionary);

const paginatorResultsSchema = new schema.Array(paginatorItemSchema);

export const paginatorListSchema = new schema.Object(
  {
    results: paginatorResultsSchema
  },
  (value, parent, key) => key
);
