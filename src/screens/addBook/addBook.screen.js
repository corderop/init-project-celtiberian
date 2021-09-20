import React, { useState } from 'react';
import { Text, View, Pressable, TextInput } from 'react-native';
import { connect } from 'react-redux';
import {
    createBook
} from '../../actions/books';
import { Actions } from 'react-native-router-flux';
import { contentStyles, buttonsStyles } from '../../style/style';
import styles from './style';
import Navbar from '../../components/navbar/navbar.component';

const AddBookScreen = (props) => {

	const { createBook } = props;
    const [inputs, setInputs] = useState({
        title: undefined,
        author: undefined,
        description: undefined
    })

    const changeValue = (val, field) => {

        setInputs( lastState => ({
            ...lastState,
            [field]: val
        }))
        
    }

    const sendValue = () => {
    
        if(inputs.title || inputs.title != "" && 
           inputs.author || inputs.author != "" && 
           inputs.description || inputs.description != "" 
        ){
            createBook( inputs.title, inputs.author, inputs.description );
            Actions.jump("main");
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
                        onChangeText={ (val) => changeValue(val, "title") } 
                    />
                </View>

                <View style={styles.inputWrap}>
                    <Text style={styles.label}> Author </Text>
                    <TextInput 
                        style={styles.input}
                        onChangeText={ (val) => changeValue(val, "author") } 
                    />
                </View>

                <View style={styles.inputWrap}>
                    <Text style={styles.label}> Description </Text>
                    <TextInput 
                        style={styles.input}
                        onChangeText={ (val) => changeValue(val, "description") } 
                    />
                </View>

                <View style={buttonsStyles.buttonWrap}>
                    <Pressable style={[buttonsStyles.button, styles.cancelButton]}
                        onPressOut={() => Actions.jump("main")}
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

export default connect(null, { createBook })(AddBookScreen);

