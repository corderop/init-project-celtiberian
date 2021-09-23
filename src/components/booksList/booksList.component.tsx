import React from 'react'
import { ScrollView, ViewStyle } from 'react-native'
import { Books } from '../../redux/types'
import BookElement from '../bookElement/bookElement.component'
import styles from './style'

interface Props {
  books: Books
  style?: ViewStyle
}

const BooksList: React.FC<Props> = (props) => {
  const { books, style } = props

  return (
    <ScrollView style={[style]}>
      {books &&
        Object.keys(books).map((key) => (
          <BookElement
            style={styles.book}
            key={key}
            id={key}
            author={books[key].author}
            title={books[key].title}
          />
        ))}
    </ScrollView>
  )
}

export default BooksList
