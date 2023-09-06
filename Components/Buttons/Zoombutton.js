import React, { useState } from 'react';
import {
	View,
	TouchableOpacity,
	Text,
	StyleSheet,
	Animated,
} from 'react-native';

const ZoomButton = ({ onPress, buttonText }) => {
	const [scaleValue] = useState(new Animated.Value(1));

	const handleButtonClick = () => {
		// Perform a zoom-in animation
		Animated.sequence([
			Animated.timing(scaleValue, {
				toValue: 1.2, // Zoom in to 1.2 times the original size
				duration: 200,
				useNativeDriver: true,
			}),
			Animated.timing(scaleValue, {
				toValue: 1, // Zoom back to the original size
				duration: 200,
				useNativeDriver: true,
			}),
		]).start(() => {
			// After the animation, call the onPress callback
			onPress();
		});
	};

	return (
		<View style={styles.container}>
			<TouchableOpacity onPress={handleButtonClick}>
				<Animated.View
					style={[
						styles.button,
						{
							transform: [{ scale: scaleValue }],
						},
					]}
				>
					<Text style={styles.buttonText}>{buttonText}</Text>
				</Animated.View>
			</TouchableOpacity>
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
		marginTop: 16,
	},
	button: {
		padding: 10,
		borderRadius: 20,
		backgroundColor: 'blue', // Customize button color here
	},
	buttonText: {
		fontSize: 16,
		color: 'white', // Customize button text color here
	},
});

export default ZoomButton;
