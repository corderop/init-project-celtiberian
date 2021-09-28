import React from 'react'
import { Text, View, Pressable } from 'react-native'
import styles from './style'
import { PageType } from './navbar.types'

interface Props {
  pages: Array<PageType>
  testID?: string
}

const Navbar: React.FC<Props> = (props) => {
  const { pages, testID } = props

  return (
    <View style={styles.container} testID={testID}>
      {pages.map((p) => (
        <Pressable
          key={p.key}
          style={styles.element}
          onPressOut={p.action}
          testID={`${testID}.${p.key}`}>
          <Text style={styles.text}>{p.text}</Text>
        </Pressable>
      ))}
    </View>
  )
}

export default Navbar
