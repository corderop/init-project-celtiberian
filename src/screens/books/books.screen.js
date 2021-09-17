import React from 'react';
import { Text, View, Pressable } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { connect } from 'react-redux';
import {
	deleteAllBooks
} from '../../actions/books';
import styles from './style';
import Navbar from '../../components/navbar/navbar.component';
import { Actions } from 'react-native-router-flux';

const BooksScreen = (props) => {

	const { books, deleteAllBooks } = props;

	return (
		<View style={styles.container}>
            <Navbar />
			<ScrollView>
			{ books && Object.keys(books).map( key => (
				<Pressable key={key} style={styles.book} onPress={() => Actions.push("book", {id: books[key].id})}>
					<Text style={styles.title}>{books[key].title}</Text>
					<Text style={styles.id}>{books[key].id}</Text>
				</Pressable>
			))}
			</ScrollView>
		</View>
	);
}

const mapStateToProps = state => ({
	books: state.books
});

export default connect(mapStateToProps, { deleteAllBooks })(BooksScreen);

