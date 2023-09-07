import React, { useState } from 'react';
import {
	View,
	StyleSheet,
	Text,
	ScrollView,
	TouchableOpacity,
} from 'react-native';
import DefaultButton from './DefaultButton';
import AnimatedButton from './AnimatedButton';
import LottieView from 'lottie-react-native';
import HoverButton from './ClickToZoomButton/HoverButton';
import ClickToSent from './ClickToSent';
import ZoomButton from './Zoombutton';
import HighlightButton from './HighlightButton';
import AnimateButton from './AnimateButton';
import SwipeButton from 'rn-swipe-button';
// import MultiBar from './MultiBar';
import SwipeButtons from './SwipeButtons';
import RNDownloadButton from 'react-native-download-button';

export default function ButtonIndex({ navigation }) {
	const handleButtonPress = () => {
		// Handle button press
	};

	const handleClickToSentButtonPress = () => {
		console.log('done');
	};
	const hangleHoverButtonClick = () => {
		// Handle button press
	};
	const [isHovered, setIsHovered] = useState(false);

	const handleMouseEnter = () => {
		setIsHovered(true);
	};

	const handleMouseLeave = () => {
		setIsHovered(false);
	};

	const buttonColor = isHovered ? 'red' : 'blue';

	const [isPlaying, setIsPlaying] = useState(false);

	const handleButtonClick = () => {
		setIsPlaying(true);
	};

	const handleAnimationFinish = () => {
		setIsPlaying(false);
	};

	return (
		<ScrollView contentContainerStyle={styles.scrollViewContainer}>
			<Text>Animated Buttons are Below</Text>

			<View style={styles.buttonContainer}>
				{/* Default button */}
				<DefaultButton title={'Default Button'} style={styles.button} />
				{/* Default button with color */}
				<DefaultButton
					title={'Default Button'}
					color={'#f194ff'}
					style={styles.button}
				/>
				{/* Default button with Disabled */}
				<DefaultButton
					title={'Default Button'}
					disabled={true}
					style={styles.button}
				/>
				{/* <ClickToZoomButton>Press Here</ClickToZoomButton> */}
				<AnimatedButton title={'Animated Button'} onPress={handleButtonPress} />
				{/* Default button with Lottie View Animation */}
				<View
					style={{
						flex: 1,
						alignItems: 'center',
						justifyContent: 'center',
						marginTop: 20,
					}}
				>
					<LottieView
						source={require('./Animation/animation_lm64zwot.json')}
						autoPlay
						loop
						style={{ width: 100, height: 100 }}
					/>
				</View>
				{/* Default button with Lottie view Start */}
				<View
					style={{
						flex: 1,
						alignItems: 'center',
						justifyContent: 'center',
					}}
				>
					<LottieView
						source={require('./Animation/start.json')}
						autoPlay
						loop
						style={{ width: 150, height: 150 }}
					/>
				</View>
				{/* Default button with Click to change color Effort */}
				<HoverButton
					title={'Click Effect'}
					handleMouseEnter={handleMouseEnter}
					handleMouseLeave={handleMouseLeave}
					buttonStyle={[styles.button, { backgroundColor: buttonColor }]}
					onPress={hangleHoverButtonClick}
					colorOnText={'white'}
				/>
				<ClickToSent
					ColorBeforeSent={'blue'}
					TextBeforeSent={'mail'}
					TextColorBeforeSent={'white'}
					ActivityIndicatorColor={'white'}
					ColorAfterSent={'green'}
					TextAfterSent={'mailed'}
					TextAfterSend={'mailed'}
					TextColorAfterSent={'black'}
					onPress={handleClickToSentButtonPress}
				/>
				<ZoomButton
					buttonText="Zoom Button"
					onPress={() => {
						// onPress logic here
					}}
				/>
				<AnimateButton onPress={() => {}} />
				<HighlightButton initialBorderColor="blue" newBorderColor="red" />
				<View
					style={{
						flex: 1,
						alignItems: 'center',
						justifyContent: 'center',
					}}
				>
					<LottieView
						source={require('./Animation/animation_lm8pd945.json')}
						autoPlay
						loop
						style={{ width: 150, height: 150 }}
					/>
				</View>
				{/* <View
					style={{
						flex: 1,
						alignItems: 'center',
						justifyContent: 'center',
					}}
				>
					<LottieView
						source={require('./Animation/animation_lm8pp8yk.json')}
						style={{ width: 50, height: 50 }}
					/>
				</View> */}
				<View
					style={{
						flex: 1,
						alignItems: 'center',
						justifyContent: 'center',
					}}
				>
					<TouchableOpacity onPress={handleButtonClick}>
						<LottieView
							source={require('./Animation/animation_lm8pp8yk.json')}
							autoPlay={isPlaying}
							loop={false}
							onAnimationFinish={handleAnimationFinish}
							style={{ width: 50, height: 50 }}
						/>
					</TouchableOpacity>
				</View>
				<View
					style={{
						flex: 1,
						alignItems: 'center',
						justifyContent: 'center',
					}}
				>
					<TouchableOpacity onPress={handleButtonClick}>
						<LottieView
							source={require('./Animation/animation_lm8rkxug.json')}
							autoPlay={isPlaying}
							loop={false}
							onAnimationFinish={handleAnimationFinish}
							style={{ width: 100, height: 100 }}
						/>
					</TouchableOpacity>
				</View>
				{/* <ButtonWithAnimation text="Press Me" onPress={() => {}} /> */}
				<SwipeButton
					// enableReverseSwipe
					onSwipeSuccess={() => alert('Submitted!')}
					// railBackgroundColor="#a493d6"
					thumbIconBackgroundColor="#FFFFFF"
					title="Swipe to submit"
				/>
				{/* <MultiBar /> */}
				<View style={{ paddingTop: 20 }}>
					<SwipeButtons
						TextContent={'Swipe left and right'}
						TextColor={'black'}
						LeftText={'Replay'}
						LeftButtonColor={'green'}
						LeftTextColor={'white'}
						LeftClick={() => {}}
						RightText={'Delete'}
						RightButtonColor={'red'}
						RightTextColor={'white'}
						RightClick={() => {}}
					/>
				</View>

				{/* <RNDownloadButton /> */}
			</View>
		</ScrollView>
	);
}

const styles = StyleSheet.create({
	scrollViewContainer: {
		padding: 16,
	},
	buttonContainer: {
		marginBottom: 16,
	},
	button: {
		padding: 10,
		borderRadius: 20,
	},
	buttonText: {
		color: 'white',
		fontSize: 16,
	},
});
