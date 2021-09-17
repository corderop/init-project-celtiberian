import React, { useState, useEffect } from 'react';
import { Text, View, Pressable } from 'react-native';
import { connect } from 'react-redux';
import {
    deleteBook
} from '../../actions/books';
import { contentStyles, buttonsStyles } from '../../style/style';
import styles from './style';
import Navbar from '../../components/navbar/navbar.component';
import { Actions } from 'react-native-router-flux';

const BookScreen = (props) => {

	const { id, books, deleteBook } = props;

	return (
		<View style={styles.container}>
            <Navbar />

			<View style={contentStyles.content}>
                
                <View style={styles.titleWrap}>
                    <Text style={styles.title}> {books[id] ? books[id].title : ""} </Text>
                    <Text style={styles.author}> {books[id] ? books[id].author : ""} </Text>
                </View>
                <Text style={styles.description}> {books[id] ? books[id].description : ""} </Text>

                <View style={buttonsStyles.buttonWrap}>
                    <Pressable style={[buttonsStyles.button, styles.editButton]}
                        onPressOut={() => Actions.push('editBook', { id: id })}
                    >
                        <Text>Edit</Text>
                    </Pressable>
                    <Pressable style={[buttonsStyles.button, styles.deleteButton]}
                        onPressOut={() => {
                            deleteBook(id);
                            Actions.pop();
                        }}
                    >
                        <Text>Delete</Text>
                    </Pressable>
                </View>

            </View>
		
        </View>
	);
}

const mapStateToProps = state => ({
	books: state.books
});

export default connect(mapStateToProps, { deleteBook })(BookScreen);

