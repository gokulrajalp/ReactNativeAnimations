import Swipeout from 'rc-swipeout';
import { Text } from 'react-native';
export default function SwipeButtons({
	TextContent,
	TextColor,
	LeftText,
	LeftButtonColor,
	LeftTextColor,
	LeftClick,
	RightText,
	RightButtonColor,
	RightTextColor,
	RightClick,
}) {
	return (
		<Swipeout
			left={[
				{
					text: LeftText,
					onPress: () => LeftClick,
					style: { backgroundColor: LeftButtonColor, color: LeftTextColor },
					className: 'custom-class-1',
				},
			]}
			right={[
				{
					text: RightText,
					onPress: () => RightClick,
					style: { backgroundColor: RightButtonColor, color: RightTextColor },
					className: 'custom-class-2',
				},
			]}
		>
			<Text style={{ margin: 15, textAlign: 'center', color: TextColor }}>
				{TextContent}
			</Text>
		</Swipeout>
	);
}
