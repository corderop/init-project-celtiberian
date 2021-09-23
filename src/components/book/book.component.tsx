import React from 'react'
import { View } from 'react-native'
import styles from './style'
import Navbar from '../navbar/navbar.component'
import BookInfo from '../bookInfo/bookInfo.component'
import { Actions } from 'react-native-router-flux'
import { useTranslation } from 'react-i18next'
import { Book } from '../../redux/types'

interface Props {
  book: Book
  deleteBook: () => void
  editBook: () => void
}

const BookComponent: React.FC<Props> = (props) => {
  const { book, deleteBook, editBook } = props
  const { t } = useTranslation('common')

  return (
    <View>
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

export default BookComponent
