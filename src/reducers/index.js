import { combineReducers } from 'redux';
import AuthReducer from './AuthReducer';
import EmployeeFormReducer from './EmployeeFormReducer';

// The auth piece of state is produced by the AuthReudcer
export default combineReducers({
	auth: AuthReducer,
	employeeForm: EmployeeFormReducer
});

