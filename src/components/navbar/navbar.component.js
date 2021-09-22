import React from 'react'
import { Text, View, Pressable } from 'react-native'
import styles from './style'

const Navbar = (props) => {
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
