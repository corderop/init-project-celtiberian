import React, { useState } from 'react';
import { Text, View, Pressable } from 'react-native';
import styles from './style';
import Navbar from '../../components/navbar/navbar.component';

export default function BooksScreen() {

	return (
		<View style={styles.container}>
            <Navbar />
		</View>
	);
}