import React from 'react';
import { View, Text } from 'react-native';

const TitleSection = ({ children }) => {
	const { containerStyle, textStyle } = styles
	return (
		<View style={containerStyle}>
			<Text style={textStyle}>
				Purple Tits{children}
			</Text>
		</View>
	);
};

const styles = {
	containerStyle: {
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
		color: '#8000ff',
		fontSize: 24,
		
	},
};

export { TitleSection };
