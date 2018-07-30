//This is an action creator
// Form a bond between the action and the reducer

import { EMAIL_CHANGED } from './types';

export const emailChanged = (text) => {
	return {
		type: EMAIL_CHANGED,
		payload: text
	};
};
