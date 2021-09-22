import React from 'react'
import { Text, View, TextInput } from 'react-native'
import styles from './style'

const Input = (props) => {
  const { title, defaultValue, onChangeText, style } = props

  return (
    <View style={[style, styles.inputWrap]}>
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
