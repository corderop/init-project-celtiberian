import React from 'react'
import { Pressable, Text, ViewStyle } from 'react-native'
import { Actions } from 'react-native-router-flux'
import styles from './style'

interface Props {
  title: string
  author: string
  id: number
  style?: ViewStyle
}

const BookElement: React.FC<Props> = (props) => {
  const { title, author, id, style } = props

  return (
    <Pressable
      style={[style, styles.book]}
      onPress={() => Actions.push('book', { id: id })}>
      <Text style={styles.title}>{title}</Text>
      <Text>{author}</Text>
    </Pressable>
  )
}

export default BookElement
