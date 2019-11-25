/* eslint-disable import/prefer-default-export */
import { schema } from 'normalizr';
import { getEntityData } from '../../models';

export const authorSchema = new schema.Entity(
  'authors',
  {},
  {
    idAttribute: 'uid',
    processStrategy: value => getEntityData('User', value)
  }
);

export const courseSchema = new schema.Entity(
  'courses',
  {},
  {
    idAttribute: 'uid',
    processStrategy: value => getEntityData('Course', value)
  }
);

export const goalSchema = new schema.Entity(
  'goals',
  {},
  {
    idAttribute: 'uid'
  }
);
