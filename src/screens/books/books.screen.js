import React from 'react';
import { Text, View, Pressable } from 'react-native';
import { connect } from 'react-redux';
import {
	deleteBook
} from '../../actions/books';
import styles from './style';
import Navbar from '../../components/navbar/navbar.component';

const BooksScreen = (props) => {

	const { books, deleteBook } = props;

	return (
		<View style={styles.container}>
            <Navbar />
			{ books && Object.keys(books).map( key => (
				<Pressable key={key} style={styles.book} onPressOut={() => deleteBook(key)}>
					<Text>{books[key].title}</Text>
				</Pressable>
			))}
		</View>
	);
}

const mapStateToProps = state => ({
	books: state.books
});

export default connect(mapStateToProps, { deleteBook })(BooksScreen);

