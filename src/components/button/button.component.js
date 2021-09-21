import React from 'react'
import { Pressable, Text } from 'react-native'
import styles from './style'
import PropTypes from 'prop-types'

const Button = (props) => {
  const { text, onPress, color, style } = props

  return (
    <Pressable
      style={[style, styles.button, { backgroundColor: color }]}
      onPress={onPress}>
      <Text style={styles.text}>{text}</Text>
    </Pressable>
  )
}

Button.propTypes = {
  text: PropTypes.string.isRequired,
  onPress: PropTypes.func.isRequired,
  color: PropTypes.string.isRequired,
  style: PropTypes.object
}

export default Button
