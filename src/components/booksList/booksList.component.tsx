import React from 'react'
import { ScrollView, ViewStyle } from 'react-native'
import { Books } from '../../redux/types'
import BookElement from '../bookElement/bookElement.component'
import styles from './style'

interface Props {
  books: Books
  onBookPress?: (id: number) => void
  style?: ViewStyle
  testID?: string
}

const BooksList: React.FC<Props> = (props) => {
  const { books, onBookPress, style, testID } = props

  return (
    <ScrollView style={[style]} testID={testID}>
      {books &&
        Object.values(books).map((book) => (
          <BookElement
            style={styles.book}
            key={book.id}
            onPress={() => onBookPress(book.id)}
            author={book.author}
            title={book.title}
          />
        ))}
    </ScrollView>
  )
}

export default BooksList
