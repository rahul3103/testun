/* eslint-disable import/prefer-default-export */
import { schema } from 'normalizr';

import { userSchema, courseSchema, goalSchema } from './index';

export const topologyPeekListSchema = new schema.Values(
  {
    results: new schema.Array(
      new schema.Entity(
        'list',
        {
          author: userSchema,
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
    )
  },
  (value, parent, key) => {
    return key;
  }
);
