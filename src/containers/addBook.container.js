import React from 'react';
import { Actions } from 'react-native-router-flux';
import { connect } from 'react-redux';
import {
    createBook
} from '../actions/books';
import AddBook from '../components/addBook/addBook.component';

const AddBookContainer = (props) => {

	const { createBook } = props;

	const cancelBookCreation = () => {
		Actions.jump("main");
	}

	const submitBookCreation = (book) => {
        createBook( book.title, book.author, book.description );
        Actions.jump("main");
    }
	
	return (
		<AddBook 
			createBook={submitBookCreation}
			cancelBookCreation={cancelBookCreation}
		/>
	);
}

export default connect(null, { createBook })(AddBookContainer);

