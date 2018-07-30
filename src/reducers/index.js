import { combineReducers } from 'redux';
import AuthReducer from './AuthReducer';

// The auth piece of state is produced by the AuthReudcer
export default combineReducers({
	auth: AuthReducer
});

