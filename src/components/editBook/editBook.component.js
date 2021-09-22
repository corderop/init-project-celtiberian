import React from 'react'
import { View } from 'react-native'
import styles from './style'
import Navbar from '../navbar/navbar.component'
import Form from '../form/form.component'
import { Actions } from 'react-native-router-flux'
import PropTypes from 'prop-types'
import { useTranslation } from 'react-i18next'

const EditBook = (props) => {
  const { book, cancelAction, editBook } = props
  const { t } = useTranslation('common')

  return (
    <View style={styles.container}>
      <Navbar
        pages={[
          {
            key: 0,
            text: t('mainPage.tutorials'),
            action: () => Actions.jump('main')
          },
          {
            key: 1,
            text: t('mainPage.add'),
            action: () => Actions.jump('addBook')
          }
        ]}
      />
      {book && (
        <Form
          style={styles.form}
          fields={[
            {
              key: 'title',
              title: t('bookAttributes.title'),
              defaultValue: book.title
            },
            {
              key: 'author',
              title: t('bookAttributes.author'),
              defaultValue: book.author
            },
            {
              key: 'description',
              title: t('bookAttributes.description'),
              defaultValue: book.description
            }
          ]}
          submitTitle={t('buttonsText.submit')}
          onSubmit={editBook}
          cancelTitle={t('buttonsText.cancel')}
          onCancel={cancelAction}
        />
      )}
    </View>
  )
}

EditBook.propTypes = {
  book: PropTypes.exact({
    id: PropTypes.string,
    title: PropTypes.string,
    author: PropTypes.string,
    description: PropTypes.string
  }),
  cancelAction: PropTypes.func,
  editBook: PropTypes.func
}

export default EditBook
