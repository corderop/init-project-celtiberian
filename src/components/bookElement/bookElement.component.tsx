import React from 'react'
import { Pressable, Text, ViewStyle } from 'react-native'
import styles from './style'

interface Props {
  title: string
  author: string
  onPress?: () => void
  style?: ViewStyle
  testID?: string
}

const BookElement: React.FC<Props> = (props) => {
  const { title, author, onPress, style, testID } = props

  return (
    <Pressable testID={testID} style={[style, styles.book]} onPress={onPress}>
      <Text style={styles.title}>{title}</Text>
      <Text>{author}</Text>
    </Pressable>
  )
}

export default BookElement
