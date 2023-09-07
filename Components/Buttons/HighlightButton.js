import React, { useState } from 'react';
import { TouchableOpacity, View, StyleSheet } from 'react-native';

const HighlightButton = ({ initialBorderColor, newBorderColor }) => {
	const [borderColor, setBorderColor] = useState(initialBorderColor);

	const handlePress = () => {
		setBorderColor(newBorderColor);
	};

	return (
		<TouchableOpacity onPress={handlePress}>
			<View style={[styles.container, { borderColor: borderColor }]}>
				{/* Content of the component */}
			</View>
		</TouchableOpacity>
	);
};

const styles = StyleSheet.create({
	container: {
		width: 100,
		height: 50,
		borderWidth: 2,
		borderRadius: 20,
		marginTop: 20,
		marginStart: 90,
	},
});

export default HighlightButton;
