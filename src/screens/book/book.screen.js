import React, { useState, useEffect } from 'react';
import { Text, View, Pressable } from 'react-native';
import { connect } from 'react-redux';
import {
    deleteBook
} from '../../actions/books';
import BooksService from '../../services/books.service';
import styles from './style';
import Navbar from '../../components/navbar/navbar.component';

const BookScreen = (props) => {

	const { id, title, deleteBook } = props;
    const [book, setBook] = useState({
        id: id,
        title: title
    })

    useEffect(() => {
        
        BooksService.getBook(id)
        .then( setBook )

    }, [id])

	return (
		<View style={styles.container}>
            <Navbar />
			<View style={styles.content}>
                <View style={styles.titleWrap}>
                    <Text style={styles.title}> {book.title || ""} </Text>
                    <Text style={styles.author}> {book.author || ""} </Text>
                </View>
                <Text style={styles.description}> {book.description || ""} </Text>
                <View style={styles.buttonWrap}>
                    <Pressable style={[styles.button, styles.editButton]}
                        onPressOut={() => console.log("Mover hacia editar")}
                    >
                        <Text>Edit</Text>
                    </Pressable>
                    <Pressable style={[styles.button, styles.deleteButton]}
                        onPressOut={() => deleteBook(id)}
                    >
                        <Text>Delete</Text>
                    </Pressable>
                </View>
            </View>
		</View>
	);
}

export default connect(null, { deleteBook })(BookScreen);

