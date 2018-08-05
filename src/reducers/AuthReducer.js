import { EMAIL_CHANGED,
		 PASSWORD_CHANGED,
		 LOGIN_USER_SUCCESS,
		 LOGIN_USER_FAIL,
		 LOGIN_USER
} from '../actions/types';

// Here is what the user is actually typing
const INITIAL_STATE = { 
	email: '', 
	password: '', 
	user: null, 
	error: '',
	loading: false
};

// 1 piece of state for the entire application
export default (state = INITIAL_STATE, action) => {
	////console.log(action);
	switch (action.type) {
		case EMAIL_CHANGED:
			//update the state object
			//we cannot do state.email = action.payload // return state;

			// throw all the curent properties of state into this new object
			// with email in addition will override
			// need to trigger a way for object comparison
			return { ...state, email: action.payload };
		case PASSWORD_CHANGED:
			return { ...state, password: action.payload };
		case LOGIN_USER:
			return { ...state, loading: true, error: '' }
			// uses the firebase user model
		case LOGIN_USER_SUCCESS:
			return { ...state, ...INITIAL_STATE,  user: action.payload,
			};
			// good spot to clear out password field when user fails
		case LOGIN_USER_FAIL:
			return { ...state, error: 'Authentication Failed.', loading: false }
		default:
			return state;
	}
};
