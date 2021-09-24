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
    <View style={[style]} testID={`input.${testID}`}>
      <Text style={styles.label} testID={`testLabel.${testID}`}>
        {title}
      </Text>
      <TextInput
        testID={`testInput.${testID}`}
        style={styles.input}
        onChangeText={onChangeText}
        defaultValue={defaultValue}
      />
    </View>
  )
}

export default Input
