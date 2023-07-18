import { combineReducers } from 'redux';
import homeReducer from '@redux/slices/home';

const rootReducer = combineReducers({
  homeReducer,
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
