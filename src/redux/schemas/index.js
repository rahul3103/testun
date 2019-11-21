/* eslint-disable import/prefer-default-export */
import { schema } from 'normalizr';

const authorSchema = new schema.Entity('authors', {}, { idAttribute: 'uid' });

const courseSchema = new schema.Entity('courses', {}, { idAttribute: 'uid' });

const goalSchema = new schema.Entity('goals', {}, { idAttribute: 'uid' });

const peekCourseSchema = new schema.Entity(
  'peekCourses',
  { course: courseSchema },
  { idAttribute: 'rank' }
);

const peekCourseListSchema = new schema.Array(peekCourseSchema);

const topologySchema = new schema.Entity(
  'topologies',
  {
    author: authorSchema,
    goal: goalSchema,
    peek_courses: peekCourseListSchema
  },
  { idAttribute: 'uid' }
);

export const topologyListSchema = new schema.Array(topologySchema);
