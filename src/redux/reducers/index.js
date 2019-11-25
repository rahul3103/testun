import { combineReducers } from 'redux';
import courses from './courses';
import authors from './authors';
import goals from './goals';

export default combineReducers({ courses, authors, goals });
