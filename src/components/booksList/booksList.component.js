import React from 'react'
import { ScrollView } from 'react-native'
import BookElement from '../bookElement/bookElement.component'
import styles from './style'

const BooksList = (props) => {
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
