/* eslint-disable import/prefer-default-export */
import { schema } from 'normalizr';
import { authorSchema } from './index';

export const educatorLeaderBoardSchema = new schema.Array(
  new schema.Entity(
    'educatorLeaderboard',
    {
      user: authorSchema
    },
    {
      idAttribute: value => value.user.uid
    }
  )
);
