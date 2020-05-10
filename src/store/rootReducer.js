import { combineReducers } from 'redux';
import userDataReducer from './userData/reducer';

const rootReducer = combineReducers({ userDataReducer });

export default rootReducer;
