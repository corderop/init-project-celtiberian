import React from 'react'
import { Pressable, Text } from 'react-native'
import { Actions } from 'react-native-router-flux'
import styles from './style'
import PropTypes from 'prop-types'

const BookElement = (props) => {
  const { title, author, id, style } = props

  return (
    <Pressable
      style={[style, styles.book]}
      onPress={() => Actions.push('book', { id: id })}>
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.author}>{author}</Text>
    </Pressable>
  )
}

BookElement.propTypes = {
  title: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  style: PropTypes.object
}

export default BookElement
