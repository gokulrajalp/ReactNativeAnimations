import { StatusBar } from 'expo-status-bar';
import { Text, View, Touch, TouchableOpacity, ScrollView } from 'react-native';
import React from 'react';
import tw from 'tailwind-react-native-classnames';

export default function Index({ navigation }) {
	return (
		<ScrollView>
			<Text>Tasks</Text>

			<TouchableOpacity
				style={[tw`bg-blue-500 m-4 p-2 px-5 rounded`]}
				onPress={() => navigation.navigate('Animated_Button')}
			>
				<Text style={tw`text-white font-bold`}>Button</Text>
			</TouchableOpacity>

			<StatusBar style="auto" />
		</ScrollView>
	);
}
