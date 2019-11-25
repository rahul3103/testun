/* eslint-disable import/prefer-default-export */
import { schema } from 'normalizr';
import { getEntityData } from '../../models';

const authorSchema = new schema.Entity(
  'authors',
  {},
  {
    idAttribute: 'uid',
    processStrategy: value => getEntityData('User', value)
  }
);

const courseSchema = new schema.Entity(
  'courses',
  {},
  {
    idAttribute: 'uid',
    processStrategy: value => getEntityData('Course', value)
  }
);

const goalSchema = new schema.Entity(
  'goals',
  {},
  {
    idAttribute: 'uid'
  }
);

const topologyPeekSchema = new schema.Entity(
  'topologyPeeks',
  {
    author: authorSchema,
    goal: goalSchema,
    // peek_courses: peekCourseListSchema,
    peek_courses: [
      {
        course: courseSchema
      }
    ]
  },
  {
    idAttribute: 'uid'
  }
);

export const topologyPeekListSchema = new schema.Array(topologyPeekSchema);

export const educatorLeaderBoardSchema = new schema.Array(
  {
    authors: authorSchema
  },
  value => value.uid
);
