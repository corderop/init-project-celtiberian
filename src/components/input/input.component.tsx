import React from 'react'
import { Text, View, TextInput, ViewStyle } from 'react-native'
import styles from './style'
import { InputType } from './input.type'

interface Props extends InputType {
  testID?: string
  style?: ViewStyle
}

const Input: React.FC<Props> = (props) => {
  const { title, defaultValue, onChangeText, testID, style } = props

  return (
    <View style={[style]} testID={`${testID}`}>
      <Text style={styles.label} testID={`${testID}.label`}>
        {title}
      </Text>
      <TextInput
        testID={`${testID}.input`}
        style={styles.input}
        onChangeText={onChangeText}
        defaultValue={defaultValue}
      />
    </View>
  )
}

export default Input
