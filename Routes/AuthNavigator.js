import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import Index from '../Index';
import ButtonIndex from '../Components/Buttons/ButtonIndex';

export default function AuthNavigator() {
	const Stack = createNativeStackNavigator();

	return (
		<Stack.Navigator initialRouteName="LandingPage">
			<Stack.Screen name="Index" component={Index} />
			<Stack.Screen name="Animated_Button" component={ButtonIndex} />
		</Stack.Navigator>
	);
}
