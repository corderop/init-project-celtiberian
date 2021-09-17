import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Provider } from 'react-redux';
import { Router, Scene, Stack } from 'react-native-router-flux';
import store from './src/store';
import BooksScreen from './src/screens/books/books.screen';
import BookScreen from './src/screens/book/book.screen';

export default function App() {
  return (
    <Provider store={store}>
      <Router>
        <Stack key="root">
          <Scene key="main" component={BooksScreen} hideNavBar />
          <Scene key="book" component={BookScreen} hideNavBar />
        </Stack>
      </Router>
    </Provider>
  );
}