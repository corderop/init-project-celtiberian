import React from 'react'
import { Provider } from 'react-redux'
import { Router, Scene, Stack } from 'react-native-router-flux'
import store from './src/store'
import BooksContainer from './src/containers/books.container'
import BookContainer from './src/containers/book.container'
import EditBookContainer from './src/containers/editBook.container'
import addBookContainer from './src/containers/addBook.container'

export default function App() {
  return (
    <Provider store={store}>
      <Router>
        <Stack key="root">
          <Scene key="main" component={BooksContainer} hideNavBar />
          <Scene key="book" component={BookContainer} hideNavBar />
          <Scene key="addBook" component={addBookContainer} hideNavBar />
          <Scene key="editBook" component={EditBookContainer} hideNavBar />
        </Stack>
      </Router>
    </Provider>
  )
}
