import React from 'react'
import { Text, View, TextInput } from 'react-native'
import styles from './style'
import PropTypes from 'prop-types'

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

Input.propTypes = {
  title: PropTypes.string.isRequired,
  defaultValue: PropTypes.string,
  onChangeText: PropTypes.func.isRequired,
  style: PropTypes.object
}

export default Input
