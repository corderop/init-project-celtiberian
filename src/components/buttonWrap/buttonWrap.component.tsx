import React from 'react'
import { View, ViewStyle } from 'react-native'
import ButtonComponent from '../button/button.component'
import styles from './style'
import { Button } from '../button/button.types'

interface ButtonWithKey extends Button {
  key: number
}

interface Props {
  buttons: Array<ButtonWithKey>
  style?: ViewStyle
  testID?: string
}

const ButtonWrap: React.FC<Props> = (props) => {
  const { buttons, style, testID } = props

  return (
    <View style={[style, styles.buttonWrap]} testID={testID}>
      {buttons.map((b) => (
        <ButtonComponent
          key={b.key}
          testID={`${testID}.${b.key}`}
          color={b.color}
          text={b.text}
          onPress={b.onPress}
        />
      ))}
    </View>
  )
}

export default ButtonWrap
