import { combineReducers } from 'redux';
import courses from './courses';
import users from './users';
import goals from './goals';
import others from './others';
import paginator from './paginator';

export default combineReducers({ courses, users, goals, paginator, others });
