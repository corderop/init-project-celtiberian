import React from 'react';
import { Pressable, Text } from 'react-native';
import styles from './style';

const Button = (props) => {

	const { text, onPress, color, style } = props;

	return (
		<Pressable 
			style={[style, styles.button, { backgroundColor: color }]}
			onPress={onPress}
		>
			<Text style={styles.text}>{text}</Text>
		</Pressable>
	);
}

export default Button;