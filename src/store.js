import {createStore} from 'redux';
import {themeReducer} from './ThemeReducer.js';

export const store = createStore(themeReducer);
