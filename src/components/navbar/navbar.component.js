import React from 'react';
import { Text, View, Pressable } from 'react-native';
import styles from './style';

export default function Navbar() {

	const pages = [
		{ key: 0, text: 'Tutorials', action: () => console.log('Tutorials') },
		{ key: 1, text: 'Add', action: () => console.log('Add') }
	]

	return (
		<View style={styles.container}>
			
			{ pages.map( p => 
				<Pressable 
					key={p.key}
					style={styles.element}
					onPressOut={p.action}
				>
					<Text style={styles.text}>{p.text}</Text>
				</Pressable>
			)}

		</View>
	);
}