import React from 'react'
import { Text, View, Pressable } from 'react-native'
import styles from './style'
import { PageType } from './navbar.types'

interface Props {
  pages: Array<PageType>
}

const Navbar: React.FC<Props> = (props) => {
  const { pages } = props

  return (
    <View style={styles.container}>
      {pages.map((p) => (
        <Pressable key={p.key} style={styles.element} onPressOut={p.action}>
          <Text style={styles.text}>{p.text}</Text>
        </Pressable>
      ))}
    </View>
  )
}

export default Navbar
