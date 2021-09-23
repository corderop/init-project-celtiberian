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
}

const BooksComponent: React.FC<Props> = (props) => {
  const { books } = props
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
      <BooksList style={styles.bookList} books={books} />
    </View>
  )
}

export default BooksComponent
