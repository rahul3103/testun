/* eslint-disable import/prefer-default-export */
import { schema } from 'normalizr';

import { authorSchema, courseSchema, goalSchema } from './index';

export const topologyPeekListSchema = new schema.Array(
  new schema.Entity(
    'topologyPeeks',
    {
      author: authorSchema,
      goal: goalSchema,
      peek_courses: [
        {
          course: courseSchema
        }
      ]
    },
    {
      idAttribute: 'uid'
    }
  )
);
