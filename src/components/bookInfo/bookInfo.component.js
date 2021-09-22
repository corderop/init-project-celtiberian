import React from 'react'
import { Text, View } from 'react-native'
import styles from './style'
import ButtonWrap from '../buttonWrap/buttonWrap.component'

const BookInfo = (props) => {
  const { title, author, description, deleteBook, editBook, style } = props

  return (
    <View style={[style, styles.content]}>
      <View style={styles.titleWrap}>
        <Text style={styles.title}> {title} </Text>
        <Text style={styles.author}> {author} </Text>
      </View>
      <Text style={styles.description}> {description} </Text>

      <ButtonWrap
        style={styles.buttons}
        buttons={[
          { key: 0, color: '#F47174', text: 'Delete', onPress: deleteBook },
          { key: 1, color: '#93CAED', text: 'Edit book', onPress: editBook }
        ]}
      />
    </View>
  )
}

export default BookInfo
