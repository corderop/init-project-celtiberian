import React from 'react'
import { View } from 'react-native'
import styles from './style'
import Navbar from '../navbar/navbar.component'
import Form from '../form/form.component'
import { Actions } from 'react-native-router-flux'

const EditBook = (props) => {
  const { book, cancelAction, editBook } = props

  return (
    <View style={styles.container}>
      <Navbar
        pages={[
          { key: 0, text: 'Tutorials', action: () => Actions.jump('main') },
          { key: 1, text: 'Add', action: () => Actions.jump('addBook') }
        ]}
      />
      {book && (
        <Form
          style={styles.form}
          fields={[
            { key: 'title', title: 'Title', defaultValue: book.title },
            { key: 'author', title: 'Author', defaultValue: book.author },
            {
              key: 'description',
              title: 'Description',
              defaultValue: book.description
            }
          ]}
          submitTitle={'Submit'}
          onSubmit={editBook}
          cancelTitle={'Cancel'}
          onCancel={cancelAction}
        />
      )}
    </View>
  )
}

export default EditBook
