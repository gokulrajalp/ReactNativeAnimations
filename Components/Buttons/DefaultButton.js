import React from 'react';
import { View, StyleSheet, Button } from 'react-native';

export default function DefaultButton({ title, style, color, disabled }) {
	return (
		<View style={style}>
			<Button title={title} color={color} disabled={disabled} />
		</View>
	);
}

const styles = StyleSheet.create({
	container: {},
});
