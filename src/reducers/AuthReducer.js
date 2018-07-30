import { EMAIL_CHANGED } from '../actions/types';
// Here is what the user is actually typing
const INITIAL_STATE = { email: '' };

// 1 piece of state for the entire application
export default (state = INITIAL_STATE, action) => {
	switch (action.type) {
		case EMAIL_CHANGED:
			//update the state object
			//we cannot do state.email = action.payload // return state;

			// throw all the curent properties of state into this new object
			// with email in addition will override
			// need to trigger a way for object comparison
			return { ...state, email: action.payload };
		default:
			return state;
	}
}