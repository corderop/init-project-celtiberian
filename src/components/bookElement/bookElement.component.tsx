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
    <Pressable style={[style, styles.book]} onPress={onPress} testID={testID}>
      <Text style={styles.title} testID={`${testID}.title`}>
        {title}
      </Text>
      <Text testID={`${testID}.author`}>{author}</Text>
    </Pressable>
  )
}

export default BookElement
