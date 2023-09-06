import React, { useState } from 'react';
import {
	View,
	TouchableOpacity,
	Text,
	StyleSheet,
	ActivityIndicator,
	ActivityIndicatorColor,
} from 'react-native';

const ClickToSent = ({
	TextAfterSend,
	TextBeforeSent,
	ColorAfterSent,
	ColorBeforeSent,
	TextColorBeforeSent,
	TextColorAfterSent,
	ActivityIndicatorColor,
	onPress,
}) => {
	const [buttonState, setButtonState] = useState('idle');
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
		},
		buttonText: {
			fontSize: 16,
		},
	});

	const handleButtonClick = () => {
		if (buttonState === 'idle') {
			// Change the button state to 'loading' when clicked
			setButtonState('loading');

			// Simulate loading for 3 seconds
			setTimeout(() => {
				onPress();
				setButtonState(TextAfterSend);
			}, 2000);
		}
	};

	return (
		<View style={styles.container}>
			<TouchableOpacity
				onPress={handleButtonClick}
				disabled={buttonState === 'loading' || buttonState === TextAfterSend}
				style={[
					styles.button,
					{
						backgroundColor:
							buttonState === TextAfterSend ? ColorAfterSent : ColorBeforeSent,
					},
				]}
			>
				{buttonState === 'loading' ? (
					<ActivityIndicator color={ActivityIndicatorColor} />
				) : (
					<Text
						style={[
							styles.buttonText,
							{
								color:
									buttonState == TextAfterSend
										? TextColorAfterSent
										: TextColorBeforeSent,
							},
						]}
					>
						{buttonState === TextAfterSend ? TextAfterSend : TextBeforeSent}
					</Text>
				)}
			</TouchableOpacity>
		</View>
	);
};

export default ClickToSent;
