import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import {
	getBooks,
	deleteAllBooks
} from '../actions/books';
import Books from '../components/books/books.component';

const BooksContainer = (props) => {

	const { books, getBooks, deleteAllBooks } = props;

	useEffect( () => {
		getBooks()
	}, []);

	return (
		<Books books={books} />
	);
}

const mapStateToProps = state => ({
	books: state.books
});

export default connect(mapStateToProps, { deleteAllBooks, getBooks })(BooksContainer);