import React from 'react'
import { View } from 'react-native'
import styles from './style'
import Navbar from '../navbar/navbar.component'
import BooksList from '../booksList/booksList.component'
import { Actions } from 'react-native-router-flux'
import { useTranslation } from 'react-i18next'
import { Books } from '../../redux/types'

interface Props {
  books: Books
  onBookPress?: (id: number) => void
}

const BooksComponent: React.FC<Props> = (props) => {
  const { books, onBookPress } = props
  const { t } = useTranslation('common')

  return (
    <View testID={'booksComponent'}>
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
      <BooksList
        style={styles.bookList}
        books={books}
        onBookPress={onBookPress}
      />
    </View>
  )
}

export default BooksComponent
