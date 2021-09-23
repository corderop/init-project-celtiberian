import React from 'react'
import { Pressable, Text, ViewStyle } from 'react-native'
import styles from './style'
import { Button } from './button.types'

interface Props extends Button {
  style?: ViewStyle
  testID?: string
}

const ButtonComponent: React.FC<Props> = (props) => {
  const { text, onPress, color, style, testID } = props

  return (
    <Pressable
      style={[style, styles.button, { backgroundColor: color }]}
      onPress={onPress}
      testID={testID}>
      <Text style={styles.text}>{text}</Text>
    </Pressable>
  )
}

export default ButtonComponent
