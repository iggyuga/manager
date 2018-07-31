import React, { Component } from 'react';
// This is a helper
import { connect } from 'react-redux';
import { Text } from 'react-native';
import { emailChanged } from '../actions';
import { Card, CardSection, Input, Button, TitleSection } from './common';

class LoginForm extends Component {
	// Anytime we want to use an event on an element
	// we need to declare the event handlers for them

	onEmailChange(text) {
		//we will want to call can action creator
		// so that we can update our application level state
		// with the value the user typed in

		this.props.emailChanged(text);
	}

	render() {
		return(
			<Card>
				<TitleSection>
				</TitleSection>

				<CardSection>
					<Input
						label="Email"	
						placeholder="email@gmail.com"
						onChangeText={this.onEmailChange.bind(this)}
						value={this.props.email}
					/>
				</CardSection>

				<CardSection>
					<Input
						secureTextEntry
						label="Password"
						placeholder="password"
					/>
				</CardSection>

				<CardSection>
					<Button>
						Login
					</Button>
				</CardSection>
			</Card>
		);
	}
}

// from react-redux library
// is how we get a piece of state into our component and will be called with the global application state
const mapStateToProps = state => {
	return {
		email: state.auth.email
	};
};

// Use the helper to create an action creator
// here emailChanged is treated as a props
export default connect(mapStateToProps, { emailChanged })(LoginForm);
