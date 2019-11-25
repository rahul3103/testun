import { combineReducers } from 'redux';
import clock from './clock';
import courses from './courses';
import authors from './authors';
import goals from './goals';

export default combineReducers({ clock, courses, authors, goals });
