import React, { useState } from 'react';
import {
	TouchableOpacity,
	Animated,
	Easing,
	Text,
	View,
	StyleSheet,
} from 'react-native';

const AnimatedButton = ({ title, onPress }) => {
	const [animatedValue] = useState(new Animated.Value(0)); // Initialize an animated value

	const handleButtonPress = () => {
		Animated.timing(animatedValue, {
			toValue: 1,
			duration: 500,
			easing: Easing.linear,
			useNativeDriver: false,
		}).start(() => {
			onPress();
		});
	};

	const translateY = animatedValue.interpolate({
		inputRange: [0, 5],
		outputRange: [0, 30],
	});

	const buttonStyle = {
		transform: [{ translateY }],
	};

	return (
		<View style={styles.buttonContainer}>
			<Animated.View style={[styles.button, buttonStyle]}>
				<TouchableOpacity onPress={handleButtonPress}>
					<Text>{title}</Text>
				</TouchableOpacity>
			</Animated.View>
		</View>
	);
};

const styles = StyleSheet.create({
	buttonContainer: {
		justifyContent: 'center',
		alignItems: 'center',
	},
	button: {
		backgroundColor: 'blue',
		padding: 10,
		borderRadius: 5,
	},
});

export default AnimatedButton;
