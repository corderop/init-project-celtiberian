import React from 'react';
import { View } from 'react-native';
import styles from './style';
import Navbar from '../navbar/navbar.component';
import BooksList from '../booksList/booksList.component';
import { Actions } from 'react-native-router-flux';

const Books = (props) => {

	const { books } = props;

	return (
		<View style={styles.container}>
            <Navbar 
                pages={[
                    { key: 0, text: 'Tutorials', action: () => Actions.jump("main") },
                    { key: 1, text: 'Add', action: () => Actions.jump('addBook') }
                ]}
            />
			<BooksList 
				style={styles.bookList}
				books={books} 
			/>
		</View>
	);
}

export default Books;

