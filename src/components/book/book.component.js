import React from 'react'
import { View } from 'react-native'
import styles from './style'
import Navbar from '../navbar/navbar.component'
import BookInfo from '../bookInfo/bookInfo.component'
import { Actions } from 'react-native-router-flux'
import PropTypes from 'prop-types'

const Book = (props) => {
  const { book, deleteBook, editBook } = props

  return (
    <View style={styles.container}>
      <Navbar
        pages={[
          { key: 0, text: 'Tutorials', action: () => Actions.jump('main') },
          { key: 1, text: 'Add', action: () => Actions.jump('addBook') }
        ]}
      />
      {book && (
        <BookInfo
          style={styles.bookInfo}
          title={book.title || ''}
          author={book.author || ''}
          description={book.description || ''}
          deleteBook={deleteBook}
          editBook={editBook}
        />
      )}
    </View>
  )
}

Book.propTypes = {
  book: PropTypes.exact({
    id: PropTypes.string,
    title: PropTypes.string,
    author: PropTypes.string,
    description: PropTypes.string
  }),
  deleteBook: PropTypes.func.isRequired,
  editBook: PropTypes.func.isRequired
}

export default Book
