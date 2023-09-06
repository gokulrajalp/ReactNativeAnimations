import React, { useState } from 'react';
import { View, TouchableOpacity, Text, StyleSheet } from 'react-native';

export default function HoverButton({
	title,
	buttonStyle,
	onPress,
	handleMouseEnter,
	handleMouseLeave,
	colorOnText,
}) {
	const styles = StyleSheet.create({
		container: {
			flex: 1,
			justifyContent: 'center',
			alignItems: 'center',
		},
		button: {
			padding: 10,
			borderRadius: 20,
		},
		buttonText: {
			color: colorOnText,
			fontSize: 16,
		},
	});

	return (
		<View style={styles.container}>
			<TouchableOpacity
				onPress={onPress}
				onPressIn={handleMouseEnter}
				onPressOut={handleMouseLeave}
				style={buttonStyle}
			>
				<Text style={styles.buttonText}>{title}</Text>
			</TouchableOpacity>
		</View>
	);
}
