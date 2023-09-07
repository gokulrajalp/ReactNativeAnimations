import React, { useState } from 'react';
import {
	View,
	TouchableOpacity,
	Text,
	StyleSheet,
	Animated,
} from 'react-native';
import LottieView from 'lottie-react-native'; // You'll need to install this library

const AnimateButton = ({ onPress }) => {
	const [animationProgress, setAnimationProgress] = useState(
		new Animated.Value(0)
	);
	const [buttonState, setButtonState] = useState('idle');

	const startFabulousAnimation = () => {
		setButtonState('loading');
		Animated.timing(animationProgress, {
			toValue: 1,
			duration: 2000, // Adjust the duration as needed
			useNativeDriver: false, // Set to false for Lottie animations
		}).start(() => {
			onPress(); // Perform any action after the animation
			setButtonState('idle');
			animationProgress.setValue(0);
		});
	};

	const renderButtonContent = () => {
		if (buttonState === 'loading') {
			return (
				<LottieView
					source={require('./Animation/animation_lm8okigs.json')}
					progress={animationProgress}
					autoPlay
					loop={false}
					style={{ width: 100, height: 100 }}
				/>
			);
		} else {
			return <Text style={styles.buttonText}>Press Me</Text>;
		}
	};

	return (
		<View style={styles.container}>
			<TouchableOpacity
				onPress={startFabulousAnimation}
				disabled={buttonState === 'loading'}
				style={styles.button}
			>
				{renderButtonContent()}
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
		backgroundColor: 'blue',
	},
	buttonText: {
		fontSize: 16,
		color: 'white',
	},
});

export default AnimateButton;
