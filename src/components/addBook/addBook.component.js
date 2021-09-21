import React from 'react'
import { View } from 'react-native'
import styles from './style'
import Navbar from '../navbar/navbar.component'
import Form from '../form/form.component'
import { Actions } from 'react-native-router-flux'
import PropTypes from 'prop-types'

const AddBook = (props) => {
  const { createBook, cancelBookCreation } = props

  return (
    <View>
      <Navbar
        pages={[
          { key: 0, text: 'Tutorials', action: () => Actions.jump('main') },
          { key: 1, text: 'Add', action: () => Actions.jump('addBook') }
        ]}
      />
      <Form
        style={styles.form}
        fields={[
          { key: 'title', title: 'Title' },
          { key: 'author', title: 'Author' },
          { key: 'description', title: 'Description' }
        ]}
        submitTitle={'Submit'}
        onSubmit={createBook}
        cancelTitle={'Cancel'}
        onCancel={cancelBookCreation}
      />
    </View>
  )
}

AddBook.propTypes = {
  createBook: PropTypes.func.isRequired,
  cancelBookCreation: PropTypes.func.isRequired
}

export default AddBook
