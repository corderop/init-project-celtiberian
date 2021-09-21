import React from 'react'
import { Text, View, Pressable } from 'react-native'
import styles from './style'
import PropTypes from 'prop-types'

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

Navbar.propTypes = {
  pages: PropTypes.arrayOf(
    PropTypes.exact({
      key: PropTypes.number.isRequired,
      text: PropTypes.string.isRequired,
      action: PropTypes.func.isRequired
    })
  )
}

export default Navbar
