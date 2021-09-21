import React from 'react'
import { View } from 'react-native'
import Button from '../button/button.component'
import styles from './style'
import PropTypes from 'prop-types'

const ButtonWrap = (props) => {
  const { buttons, style } = props

  return (
    <View style={[style, styles.buttonWrap]}>
      {buttons.map((b) => (
        <Button
          style={styles.button}
          key={b.key}
          color={b.color}
          text={b.text}
          onPress={b.onPress}
        />
      ))}
    </View>
  )
}

ButtonWrap.propTypes = {
  buttons: PropTypes.array,
  style: PropTypes.object
}

export default ButtonWrap
