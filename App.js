import React from 'react';
import { Provider } from 'react-redux';
import { Router, Scene, Stack } from 'react-native-router-flux';
import store from './src/store';
import BooksScreen from './src/screens/books/books.screen';
import BookScreen from './src/screens/book/book.screen';
import AddBookScreen from './src/screens/addBook/addBook.screen';
import EditBookScreen from './src/screens/editBook/editBook.screen';

export default function App() {
  return (
    <Provider store={store}>
      <Router>
        <Stack key="root">
          <Scene key="main" component={BooksScreen} hideNavBar />
          <Scene key="book" component={BookScreen} hideNavBar />
          <Scene key="addBook" component={AddBookScreen} hideNavBar />
          <Scene key="editBook" component={EditBookScreen} hideNavBar />
        </Stack>
      </Router>
    </Provider>
  );
}