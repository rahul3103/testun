/* eslint-disable import/prefer-default-export */
import { schema } from 'normalizr';

const authorSchema = new schema.Entity('authors', {}, { idAttribute: 'uid' });

const courseSchema = new schema.Entity('courses', {}, { idAttribute: 'uid' });

const goalSchema = new schema.Entity('goals', {}, { idAttribute: 'uid' });

// const peekCourseSchema = new schema.Entity(
//   'peekCourses',
//   { course: courseSchema },
//   { idAttribute: value => value.course.uid }
// );

// const peekCourseListSchema = new schema.Array(peekCourseSchema);

const topologyPeekSchema = new schema.Entity(
  'topologyPeeks',
  {
    author: authorSchema,
    goal: goalSchema,
    // peek_courses: peekCourseListSchema,
    peek_courses: [{ course: courseSchema }]
  },
  { idAttribute: 'uid' }
);

export const topologyPeekListSchema = new schema.Array(topologyPeekSchema);
