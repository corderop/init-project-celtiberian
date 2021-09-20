import React from 'react';
import { Actions } from 'react-native-router-flux';
import { connect } from 'react-redux';
import {
    deleteBook
} from '../actions/books';
import Book from '../components/book/book.component';

const BookContainer = (props) => {

	const { id, books, deleteBook } = props;
    
    const removeBook = () => {
        deleteBook(id);
        Actions.pop();
    }

    const editBook = () => {
        Actions.push('editBook', { id: id });
    }

	return (
		<Book 
            book={books[id]}
            deleteBook={removeBook}
            editBook={editBook}
        />
	);
}

const mapStateToProps = state => ({
	books: state.books
});

export default connect(mapStateToProps, { deleteBook })(BookContainer);

