import { NavigationContainer, useNavigation } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import AuthNavigator from './Routes/AuthNavigator';

export default function App() {
	const Stack = createNativeStackNavigator();

	return (
		<NavigationContainer>
			<AuthNavigator />
		</NavigationContainer>
	);
}
