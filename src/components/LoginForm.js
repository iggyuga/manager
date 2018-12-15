import React, { Component } from 'react';
// This is a helper to create an action creator
import { connect } from 'react-redux';
import { View, Text } from 'react-native';
import { emailChanged, passwordChanged, loginUser } from '../actions';
import { Card, CardSection, Input, Button, TitleSection, Spinner } from './common';

// Anytime we want to use an event on an element
// we need to declare the event handlers for them
class LoginForm extends Component {

		//we will want to call can action creator
	// so that we can update our application level state
	// with the value the user typed in
	onEmailChange(text) {
		this.props.emailChanged(text);
	}

	onPasswordChange(password) {
		this.props.passwordChanged(password);
	}

	onButtonPress() {
		const { email, password } = this.props;

		this.props.loginUser({ email, password});
	}

	renderButton() {
		if (this.props.loading) {
			return <Spinner size="large" />
		}

		return (
			<Button onPress={this.onButtonPress.bind(this)}>
				Login
			</Button>
		)
	}

	renderError() {
		if (this.props.error) {
			return (
				<View style={{ backgroundColor: 'white' }}>
					<Text style={styles.errorTextStyle} >
					{this.props.error}
					</Text>
				</View>
			);
		}
	}

	render() {
		return(
			<Card>
				<TitleSection>
					Purple tits
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
						onChangeText={this.onPasswordChange.bind(this)}
						value={this.props.password}
					/>
				</CardSection>
					{this.renderError()}
				<CardSection>
					{this.renderButton()}
				</CardSection>
			</Card>
		);
	}
}

const styles  = {
	errorTextStyle: {
		fontSize: 20,
		alignSelf: 'center',
		color: 'red'
	}
}

// from react-redux library
// is how we get a piece of state into our component and will be called with the global application state
const mapStateToProps = state => {
	const { email, password, error, loading } = state.auth
	//TODO: restructure
	return {
		email: email,
		password: password,
		error: error,
		loading: loading
	};
};

// Use the helper to create an action creator
// here emailChanged is treated as a props
export default connect(mapStateToProps, { emailChanged, passwordChanged, loginUser })(LoginForm);
