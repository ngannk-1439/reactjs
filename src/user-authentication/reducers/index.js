import { combineReducers } from 'redux';

import { authentication } from './loginReducer';
import { registration } from './registerReducer';
import { users } from './userReducer';
import { alert } from './alertReducer';

const rootReducer = combineReducers({
  authentication,
  registration,
  users,
  alert
});

export default rootReducer;