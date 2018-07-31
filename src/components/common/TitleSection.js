import React from 'react';
import { View, Text } from 'react-native';

const TitleSection = ({ children }) => {
	const { containerStyle, textStyle } = styles
	return (
		<View style={containerStyle}>
			<Text style={textStyle}>
				Purple{children}
			</Text>
		</View>
	);
};

const styles = {
	containerStyle: {
		//borderBottomWidth: 1,
		padding: 10,
		backgroundColor: '#fff',
		justifyContent: 'center',
		flexDirection: 'row',
		borderColor: '#ddd',
		position: 'relative',
		paddingTop: 30,
		paddingBottom: 60,
		flex : 1
	},
	textStyle: {
		alignSelf: 'center',
		color: '#ff66eb',
		fontSize: 24,

	},
};

export { TitleSection };
