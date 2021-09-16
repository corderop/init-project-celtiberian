import React from 'react';
import { Text, View, Pressable } from 'react-native';
import { connect } from 'react-redux';
import styles from './style';
import {
	getBooks
} from '../../actions/books';

const Navbar = (props) => {

	const { getBooks } = props;

	const pages = [
		{ key: 0, text: 'Tutorials', action: () => getBooks() },
		{ key: 1, text: 'Add', action: () => console.log("Add") }
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

// export default Navbar;
export default connect( null, { getBooks })(Navbar);