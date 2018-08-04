//This is an action creator
// Form a bond between the action and the reducer
import React, { Component } from 'react';
///import * as firebase from 'firebase';
import { 
			PASSWORD_CHANGED, 
			EMAIL_CHANGED, 
			LOGIN_USER_SUCCESS,
			LOGIN_USER_FAIL
} from './types';


// synchronous action creator
export const emailChanged = (text) => {
	return {
		type: EMAIL_CHANGED,
		payload: text
	};
};

// synchronous action creator
export const passwordChanged = (password) => {
	return {
		type: PASSWORD_CHANGED,
		payload: password
	};
};

//returning a function
// Using redux thunk, we expand the range of values from an action creator 
// backdoor to redux
export const loginUser = ({email, password}) => {
	const firebase = require("firebase");
	return (dispatch) => { firebase.auth().signInWithEmailAndPassword(email,password)
		.then(user => loginUserSuccess(dispatch, user))
		.catch(() => {
			firebase.auth().createUserWithEmailAndPassword(email, password)
			.then(user => loginUserSuccess(dispatch, user))
			.catch(loginUserFail(dispatch));
		});
	};
};

const loginUserSuccess = (dispatch, user) => {
	dispatch({
		type: LOGIN_USER_SUCCESS,
		payload: user
	});
}

const loginUserFail = (dispatch) = {
	dispatch({
		type: LOGIN_USER_FAIL,
		payload: user
	});
};