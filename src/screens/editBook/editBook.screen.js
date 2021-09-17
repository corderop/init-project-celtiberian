import React, { useEffect, useState } from 'react';
import { Text, View, Pressable, TextInput } from 'react-native';
import { connect } from 'react-redux';
import {
    updateBook
} from '../../actions/books';
import { Actions } from 'react-native-router-flux';
import { contentStyles, buttonsStyles } from '../../style/style';
import styles from './style';
import Navbar from '../../components/navbar/navbar.component';

const EditBookScreen = (props) => {

	const { id, books, updateBook } = props;
    const [inputs, setInputs] = useState({
        title: books[id].title,
        author: books[id].author,
        description: books[id].description
    })

    const changeValue = (val, field) => {

        setInputs( lastState => ({
            ...lastState,
            [field]: val
        }))
        
    }

    const sendValue = () => {
    
        if(inputs.title || inputs.title.trim() != "" && 
           inputs.author || inputs.author.trim() != "" && 
           inputs.description || inputs.description.trim() != "" 
        ){
            updateBook( id, inputs.title, inputs.description, inputs.author );
            Actions.pop();
        }

    }

	return (
		<View style={styles.container}>
            <Navbar />
			<View style={contentStyles.content}>

                <View style={styles.inputWrap}>
                    <Text style={styles.label}> Title </Text>
                    <TextInput 
                        style={styles.input}
                        defaultValue={books[id].title}
                        onChangeText={ (val) => changeValue(val, "title") } 
                    />
                </View>

                <View style={styles.inputWrap}>
                    <Text style={styles.label}> Author </Text>
                    <TextInput 
                        style={styles.input}
                        defaultValue={books[id].author}
                        onChangeText={ (val) => changeValue(val, "author") } 
                    />
                </View>

                <View style={styles.inputWrap}>
                    <Text style={styles.label}> Description </Text>
                    <TextInput 
                        style={styles.input}
                        defaultValue={books[id].description}
                        onChangeText={ (val) => changeValue(val, "description") } 
                    />
                </View>

                <View style={buttonsStyles.buttonWrap}>
                    <Pressable style={[buttonsStyles.button, styles.cancelButton]}
                        onPressOut={() => Actions.pop()}
                    >
                        <Text>Cancel</Text>
                    </Pressable>
                    <Pressable style={[buttonsStyles.button, styles.submitButton]}
                        onPressOut={() => {
                            sendValue();
                        }}
                    >
                        <Text>Submit</Text>
                    </Pressable>
                </View>

            </View>
		</View>
	);
}

const mapStateToProps = state => ({
	books: state.books
});


export default connect(mapStateToProps, { updateBook })(EditBookScreen);

