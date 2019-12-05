import { combineReducers } from 'redux';
import courses from './courses';
import users from './users';
import goals from './goals';
import paginator from './paginator';

export default combineReducers({ courses, users, goals, paginator });
