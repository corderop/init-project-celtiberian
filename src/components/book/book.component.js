import React from 'react'
import { View } from 'react-native'
import styles from './style'
import Navbar from '../navbar/navbar.component'
import BookInfo from '../bookInfo/bookInfo.component'
import { Actions } from 'react-native-router-flux'
import PropTypes from 'prop-types'
import { useTranslation } from 'react-i18next'

const Book = (props) => {
  const { book, deleteBook, editBook } = props
  const { t } = useTranslation('common')

  return (
    <View style={styles.container}>
      <Navbar
        pages={[
          {
            key: 0,
            text: t('mainPage.tutorials'),
            action: () => Actions.jump('main')
          },
          {
            key: 1,
            text: t('mainPage.add'),
            action: () => Actions.jump('addBook')
          }
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
