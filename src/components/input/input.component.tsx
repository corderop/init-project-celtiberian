import React from 'react'
import { Text, View, TextInput, ViewStyle } from 'react-native'
import styles from './style'
import { InputType } from './input.type'

interface Props extends InputType {
  style?: ViewStyle
}

const Input: React.FC<Props> = (props) => {
  const { title, defaultValue, onChangeText, style } = props

  return (
    <View style={[style]}>
      <Text style={styles.label}> {title} </Text>
      <TextInput
        style={styles.input}
        onChangeText={onChangeText}
        defaultValue={defaultValue}
      />
    </View>
  )
}

export default Input
